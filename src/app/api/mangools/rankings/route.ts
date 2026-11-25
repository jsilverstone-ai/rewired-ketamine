import { NextResponse } from "next/server";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { SERPWATCHER_TRACKING_ID as TRACKING_ID, mangoolsErrorResponse, mangoolsFetch } from "@/lib/mangools";


// Mangools SERPWatcher:
//  - GET  /serpwatcher/trackings/{id}/detail -> keyword text + ranking URL (no ranks)
//  - POST /serpwatcher/trackings/{id}/stats  -> ranks per keyword, keyed by the same _id
// The dashboard needs both, joined on the tracked keyword _id.

type DetailKeyword = { _id?: string; kw?: string; url?: string | null };
type DetailResponse = { keywords?: DetailKeyword[] };

type StatsKeyword = {
  _id?: string;
  rank?: { last?: number | null; avg?: number | null; best?: number | null } | null;
  rank_change?: number | null;
  rank_history?: Array<number | null>;
  search_volume?: number | null;
  map_pack?: { rank?: number | null; url?: string | null } | null;
};
type StatsResponse = { keywords?: StatsKeyword[]; history_dates?: string[] };

type Keyword = {
  keyword: string;
  rank: number | null;
  previousRank: number | null;
  bestRank: number | null;
  mapPackRank: number | null;
  searchVolume: number | null;
  url: string | null;
};

// Mangools uses 0 (or null) for "not in the top 100".
function toRank(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
}

function isoDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// Rank at the start of the window: the oldest non-empty point in rank_history,
// using history_dates to find which end is oldest.
function previousRankOf(stats: StatsKeyword, dates: string[] | undefined): number | null {
  const history = Array.isArray(stats.rank_history) ? stats.rank_history : [];
  if (history.length === 0) {
    const last = toRank(stats.rank?.last);
    const change = typeof stats.rank_change === "number" ? stats.rank_change : null;
    return last !== null && change !== null ? toRank(last + change) : null;
  }
  let oldestFirst = false;
  if (dates && dates.length >= 2) {
    oldestFirst = new Date(dates[0]).getTime() < new Date(dates[dates.length - 1]).getTime();
  }
  const ordered = oldestFirst ? history : [...history].reverse();
  for (const value of ordered) {
    const rank = toRank(value);
    if (rank !== null) return rank;
  }
  return null;
}

export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();

  const to = new Date();
  const from = new Date(to.getTime() - 30 * 24 * 60 * 60 * 1000);
  const range = `from=${isoDay(from)}&to=${isoDay(to)}`;

  try {
    const [detail, stats] = await Promise.all([
      mangoolsFetch<DetailResponse>(`/serpwatcher/trackings/${TRACKING_ID}/detail`),
      mangoolsFetch<StatsResponse>(`/serpwatcher/trackings/${TRACKING_ID}/stats?${range}`, {
        method: "POST",
        body: JSON.stringify({}),
      }),
    ]);

    const statsById = new Map<string, StatsKeyword>();
    for (const item of stats.keywords ?? []) {
      if (item._id) statsById.set(item._id, item);
    }

    const keywords: Keyword[] = (detail.keywords ?? []).map((item) => {
      const s = item._id ? statsById.get(item._id) : undefined;
      return {
        keyword: item.kw ?? "",
        rank: toRank(s?.rank?.last),
        previousRank: s ? previousRankOf(s, stats.history_dates) : null,
        bestRank: toRank(s?.rank?.best),
        mapPackRank: toRank(s?.map_pack?.rank),
        searchVolume: typeof s?.search_volume === "number" ? s.search_volume : null,
        url: item.url ?? null,
      };
    });

    return NextResponse.json({
      success: true,
      count: keywords.length,
      matched: keywords.filter((k) => k.rank !== null).length,
      range: { from: isoDay(from), to: isoDay(to) },
      keywords,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const { body, status } = mangoolsErrorResponse(error);
    return NextResponse.json(body, { status });
  }
}
