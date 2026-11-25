import type { CompetitorRow } from "./competitors";
import { CORE_MONEY_KEYWORDS, isSpanishKeyword } from "./mangools";
import { pathOf, type WeeklyReport } from "./weekly-report";

export type TrackedKeyword = {
  keyword: string;
  rank: number | null;
  previousRank: number | null;
  bestRank: number | null;
  mapPackRank: number | null;
  searchVolume: number | null;
  url: string | null;
};

export type ScorePillar = {
  id: string;
  label: string;
  score: number | null;
  previousScore: number | null;
  max: number;
  detail: string;
};

export type VisibilityScoreResult = {
  score: number | null;
  previousScore: number | null;
  delta: number | null;
  partial: boolean;
  pillars: ScorePillar[];
  formulaNote: string;
};

export type KeywordBucketStats = {
  total: number;
  top3: number;
  top10: number;
  prevTop3: number | null;
  prevTop10: number | null;
};

export type ActionItem = {
  id: string;
  priority: "high" | "medium" | "low";
  category: string;
  title: string;
  detail: string;
  target?: string;
};

export type MergedCompetitorRow = {
  keyword: string;
  isSpanish: boolean;
  ourPosition: number | null;
  positionSource: "serp" | "tracker" | "gsc" | null;
  gscPosition: number | null;
  gscImpressions: number | null;
  trackerRank: number | null;
  mapPackRank: number | null;
  miamiTrackerRank: number | null;
  miamiMapPackRank: number | null;
  aventuraTrackerRank: number | null;
  aventuraMapPackRank: number | null;
  hasLocalPack: boolean;
  topCompetitors: CompetitorRow["topCompetitors"];
  gapLabel: string;
  gapTone: "good" | "info" | "neutral" | "bad";
  error: string | null;
};

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

function rankWeight(pos: number | null): number {
  if (pos === null || pos <= 0) return 0;
  if (pos <= 3) return 1.0;
  if (pos <= 10) return 0.65;
  if (pos <= 20) return 0.35;
  if (pos <= 50) return 0.15;
  return 0;
}

export function computeKeywordStats(keywords: TrackedKeyword[] | null): KeywordBucketStats | null {
  if (!keywords || keywords.length === 0) return null;
  const top3 = keywords.filter((k) => k.rank !== null && k.rank <= 3).length;
  const top10 = keywords.filter((k) => k.rank !== null && k.rank <= 10).length;
  const hasPrev = keywords.some((k) => k.previousRank !== null);
  const prevTop3 = hasPrev ? keywords.filter((k) => k.previousRank !== null && k.previousRank <= 3).length : null;
  const prevTop10 = hasPrev ? keywords.filter((k) => k.previousRank !== null && k.previousRank <= 10).length : null;
  return { total: keywords.length, top3, top10, prevTop3, prevTop10 };
}

export function computeVisibilityScore(input: {
  report: WeeklyReport | null;
  keywords: TrackedKeyword[] | null;
  /** Label for the primary tracked-keywords pillar, e.g. "Miami 📱". */
  trackedLabel?: string;
}): VisibilityScoreResult {
  const { report, keywords } = input;
  const trackedLabel = input.trackedLabel || "Miami 📱";
  const pillars: ScorePillar[] = [];

  // Pillar 1: Tracked Keywords (40 pts) from Mangools SERPWatcher.
  if (keywords && keywords.length > 0) {
    const nowSum = keywords.reduce((s, k) => s + rankWeight(k.rank), 0);
    const nowScore = (nowSum / keywords.length) * 40;
    const hasPrev = keywords.some((k) => k.previousRank !== null);
    const prevScore = hasPrev
      ? (keywords.reduce((s, k) => s + rankWeight(k.previousRank), 0) / keywords.length) * 40
      : null;
    const top10 = keywords.filter((k) => k.rank !== null && k.rank <= 10).length;
    pillars.push({
      id: "tracked-keywords",
      label: "Tracked keywords",
      score: Math.round(nowScore * 10) / 10,
      previousScore: prevScore !== null ? Math.round(prevScore * 10) / 10 : null,
      max: 40,
      detail: `${top10}/${keywords.length} in Top 10 (${trackedLabel} SERPWatcher)`,
    });
  } else {
    pillars.push({
      id: "tracked-keywords",
      label: "Tracked keywords",
      score: null,
      previousScore: null,
      max: 40,
      detail: "No SERPWatcher data",
    });
  }

  // Pillar 2: Core Money Terms in GSC (25 pts).
  if (report && report.keyQueries.length > 0) {
    const core = report.keyQueries;
    const nowScore = (core.reduce((s, q) => s + rankWeight(q.thisWeek.position), 0) / core.length) * 25;
    const prevScore = (core.reduce((s, q) => s + rankWeight(q.lastWeek.position), 0) / core.length) * 25;
    const inTop10 = core.filter((q) => q.thisWeek.position !== null && q.thisWeek.position <= 10).length;
    pillars.push({
      id: "core-terms",
      label: "Core Miami / local terms",
      score: Math.round(nowScore * 10) / 10,
      previousScore: Math.round(prevScore * 10) / 10,
      max: 25,
      detail: `${inTop10}/${core.length} in Top 10 (Search Console)`,
    });
  } else {
    pillars.push({
      id: "core-terms",
      label: "Core Miami / local terms",
      score: null,
      previousScore: null,
      max: 25,
      detail: "No Search Console data",
    });
  }

  // Pillar 3: Sitewide Position & CTR (20 pts).
  if (report) {
    const posNow = report.adjustedPosition?.thisWeek ?? report.totals.thisWeek.position;
    const posPrev = report.adjustedPosition?.lastWeek ?? report.totals.lastWeek.position;
    const ctrNow = report.totals.thisWeek.ctr;
    const ctrPrev = report.totals.lastWeek.ctr;
    const posScoreNow = posNow !== null ? clamp((50 - posNow) / 40, 0, 1) * 10 : 0;
    const ctrScoreNow = ctrNow !== null ? clamp((ctrNow * 100) / 3.0, 0, 1) * 10 : 0;
    const posScorePrev = posPrev !== null ? clamp((50 - posPrev) / 40, 0, 1) * 10 : 0;
    const ctrScorePrev = ctrPrev !== null ? clamp((ctrPrev * 100) / 3.0, 0, 1) * 10 : 0;
    pillars.push({
      id: "sitewide-health",
      label: "Sitewide rank & CTR",
      score: Math.round((posScoreNow + ctrScoreNow) * 10) / 10,
      previousScore: Math.round((posScorePrev + ctrScorePrev) * 10) / 10,
      max: 20,
      detail: `Avg pos ${posNow !== null ? posNow.toFixed(1) : "—"} · CTR ${ctrNow !== null ? (ctrNow * 100).toFixed(1) : "—"}%`,
    });
  } else {
    pillars.push({
      id: "sitewide-health",
      label: "Sitewide rank & CTR",
      score: null,
      previousScore: null,
      max: 20,
      detail: "No Search Console data",
    });
  }

  // Pillar 4: Spanish (/es) Visibility (15 pts).
  if (report) {
    const spNow = report.spanish.totals.thisWeek;
    const spPrev = report.spanish.totals.lastWeek;
    const nowScore = clamp(spNow.impressions / 200, 0, 1) * 10 + clamp(spNow.clicks / 10, 0, 1) * 5;
    const prevScore = clamp(spPrev.impressions / 200, 0, 1) * 10 + clamp(spPrev.clicks / 10, 0, 1) * 5;
    pillars.push({
      id: "spanish-reach",
      label: "Spanish (/es) visibility",
      score: Math.round(nowScore * 10) / 10,
      previousScore: Math.round(prevScore * 10) / 10,
      max: 15,
      detail: `${spNow.impressions.toLocaleString()} imp · ${spNow.clicks} clicks`,
    });
  } else {
    pillars.push({
      id: "spanish-reach",
      label: "Spanish (/es) visibility",
      score: null,
      previousScore: null,
      max: 15,
      detail: "No Search Console data",
    });
  }

  const active = pillars.filter((p) => p.score !== null);
  if (active.length === 0) {
    return {
      score: null,
      previousScore: null,
      delta: null,
      partial: false,
      pillars,
      formulaNote:
        'Composite 0–100 score built strictly from live data: Mangools tracked keywords (40 pts: #1–3 = 100%, #4–10 = 65%, #11–20 = 35%, #21–50 = 15%), GSC core Miami/local queries (25 pts, same tiers), sitewide avg position & CTR (20 pts: max at pos ≤10 and CTR ≥3%), and Spanish /es impressions & clicks (15 pts: max at 200 imp & 10 clicks/wk). The Tracked Keywords pillar uses the Miami Mobile SERPWatcher tracking as the primary score (not an average of Miami + Aventura), because Miami is the competitive money market. Aventura Mobile Top 3 / Top 10 is shown separately on the scorecard and in the keyword and competitor tables.',
    };
  }

  const maxAvailable = active.reduce((s, p) => s + p.max, 0);
  const rawNow = active.reduce((s, p) => s + (p.score ?? 0), 0);
  const score = Math.round((rawNow / maxAvailable) * 100);

  const comparable = active.filter((p) => p.previousScore !== null);
  let previousScore: number | null = null;
  if (comparable.length === active.length) {
    const rawPrev = comparable.reduce((s, p) => s + (p.previousScore ?? 0), 0);
    previousScore = Math.round((rawPrev / maxAvailable) * 100);
  }

  return {
    score,
    previousScore,
    delta: previousScore !== null ? score - previousScore : null,
    partial: active.length < pillars.length,
    pillars,
    formulaNote:
      'Composite 0–100 score built strictly from live data: Mangools tracked keywords (40 pts: #1–3 = 100%, #4–10 = 65%, #11–20 = 35%, #21–50 = 15%), GSC core Miami/local queries (25 pts, same tiers), sitewide avg position & CTR (20 pts: max at pos ≤10 and CTR ≥3%), and Spanish /es impressions & clicks (15 pts: max at 200 imp & 10 clicks/wk). The Tracked Keywords pillar uses the Miami Mobile SERPWatcher tracking as the primary score (not an average of Miami + Aventura), because Miami is the competitive money market. Aventura Mobile Top 3 / Top 10 is shown separately on the scorecard and in the keyword and competitor tables.',
  };
}

function shortLabel(url: string | null): string {
  if (!url) return "/";
  const p = pathOf(url);
  if (p === "/") return "/ (homepage)";
  return p.length > 38 ? `${p.slice(0, 35)}…` : p;
}

export function generateWeeklyActions(input: {
  report: WeeklyReport | null;
  keywords: TrackedKeyword[] | null;
  aventuraKeywords?: TrackedKeyword[] | null;
  competitors: MergedCompetitorRow[] | null;
}): ActionItem[] {
  const { report, keywords, competitors } = input;
  const aventuraKeywords = input.aventuraKeywords ?? null;
  const actions: ActionItem[] = [];
  const seenTargets = new Set<string>();

  const push = (item: ActionItem) => {
    if (actions.length >= 5) return;
    const key = (item.target || item.title).toLowerCase();
    if (seenTargets.has(key)) return;
    seenTargets.add(key);
    actions.push(item);
  };

  // 1. Homepage ranking alerts (highest urgency).
  if (report && report.homepageAlerts.length > 0) {
    push({
      id: "homepage-alert",
      priority: "high",
      category: "Ranking alert",
      title: "Check why the homepage dropped off a core term",
      detail: report.homepageAlerts[0],
      target: "/",
    });
  }

  // 2. Significant ranking drops (>= 3 positions) in GSC keyQueries or Mangools SERPWatcher.
  if (report) {
    const gscDrops = report.keyQueries
      .filter((k) => {
        const vol = Math.max(k.thisWeek.impressions, k.lastWeek.impressions);
        return vol >= 5 && k.thisWeek.position !== null && k.lastWeek.position !== null && k.thisWeek.position - k.lastWeek.position >= 3;
      })
      .sort((a, b) => b.thisWeek.impressions - a.thisWeek.impressions);

    if (gscDrops.length > 0) {
      const top = gscDrops[0];
      const delta = (top.thisWeek.position! - top.lastWeek.position!).toFixed(1);
      push({
        id: `drop-${top.query}`,
        priority: "high",
        category: "Ranking drop",
        title: `Check drop on "${top.query}" (-${delta} spots)`,
        detail: `Moved from #${top.lastWeek.position!.toFixed(1)} to #${top.thisWeek.position!.toFixed(1)} (${top.thisWeek.impressions} imp) on ${shortLabel(top.page)}. Review on-page H1, local signals, and recent edits.`,
        target: top.query,
      });
    }
  }

  const trackerSets: Array<{ label: string; list: TrackedKeyword[] }> = [];
  if (keywords && keywords.length > 0) trackerSets.push({ label: "Miami 📱", list: keywords });
  if (aventuraKeywords && aventuraKeywords.length > 0) trackerSets.push({ label: "Aventura 📱", list: aventuraKeywords });
  const allTrackerDrops = trackerSets.flatMap((set) =>
    set.list
      .filter((k) => k.rank !== null && k.previousRank !== null && k.rank - k.previousRank >= 3)
      .map((k) => ({ ...k, label: set.label }))
  ).sort((a, b) => (b.searchVolume ?? 0) - (a.searchVolume ?? 0) || (b.rank! - b.previousRank!) - (a.rank! - a.previousRank!));
  if (allTrackerDrops.length > 0) {
    const top = allTrackerDrops[0];
    push({
      id: `tracker-drop-${top.label}-${top.keyword}`,
      priority: "high",
      category: "Rank drop",
      title: `Investigate "${top.keyword}" (${top.label} #${top.previousRank} → #${top.rank})`,
      detail: `Dropped ${top.rank! - top.previousRank!} spots in the ${top.label} SERPWatcher tracking${top.url ? ` (${shortLabel(top.url)})` : ""}.`,
      target: top.keyword,
    });
  }

  // 3. Striking distance (pos 4–15 with highest impressions) -> push page.
  if (report && report.opportunities?.strikingDistance?.length > 0) {
    const best = report.opportunities.strikingDistance.find((o) => !seenTargets.has(o.query.toLowerCase()));
    if (best) {
      const pageLabel = shortLabel(best.page);
      push({
        id: `push-${best.query}`,
        priority: "high",
        category: "Quick win (#4–15)",
        title: `Push ${pageLabel} for "${best.query}"`,
        detail: `Sitting at #${best.position?.toFixed(1) ?? "—"} with ${best.impressions} impressions this week. Add 2–3 internal links using this topic and sharpen the opening section.`,
        target: best.query,
      });
    }
  } else {
    const pool = [
      ...((keywords ?? []).map((k) => ({ ...k, label: "Miami 📱" }))),
      ...((aventuraKeywords ?? []).map((k) => ({ ...k, label: "Aventura 📱" }))),
    ];
    const bestKw = pool
      .filter((k) => k.rank !== null && k.rank >= 4 && k.rank <= 15 && !seenTargets.has(k.keyword.toLowerCase()))
      .sort((a, b) => (b.searchVolume ?? 0) - (a.searchVolume ?? 0))[0];
    if (bestKw) {
      push({
        id: `push-kw-${bestKw.keyword}`,
        priority: "high",
        category: "Quick win (#4–15)",
        title: `Push "${bestKw.keyword}" from #${bestKw.rank} into Top 3`,
        detail: `Tracked at #${bestKw.rank} on ${bestKw.label}${bestKw.searchVolume ? ` (${bestKw.searchVolume}/mo searches)` : ""}. Add internal links and FAQ coverage on ${shortLabel(bestKw.url)}.`,
        target: bestKw.keyword,
      });
    }
  }

  // 4. High impressions + low CTR page -> rewrite title / meta.
  if (report && report.opportunities?.lowCtrPages?.length > 0) {
    const lowCtr = report.opportunities.lowCtrPages.find((p) => !seenTargets.has(shortLabel(p.page).toLowerCase()));
    if (lowCtr) {
      const ctrPct = ((lowCtr.ctr ?? 0) * 100).toFixed(1);
      push({
        id: `ctr-${lowCtr.page}`,
        priority: "medium",
        category: "Low CTR",
        title: `Rewrite title & meta on ${shortLabel(lowCtr.page)}`,
        detail: `${lowCtr.impressions.toLocaleString()} impressions at #${lowCtr.position?.toFixed(1) ?? "—"}, but only ${ctrPct}% CTR (${lowCtr.clicks} clicks). Make the title more specific to Aventura/Miami patients.`,
        target: shortLabel(lowCtr.page),
      });
    }
  }

  // 5. Competitor gap on a core Miami money keyword.
  if (competitors && competitors.length > 0) {
    const gapRow = competitors.find(
      (c) =>
        !seenTargets.has(c.keyword.toLowerCase()) &&
        c.topCompetitors.length > 0 &&
        (c.ourPosition === null || c.ourPosition > 3)
    );
    if (gapRow) {
      const leaders = gapRow.topCompetitors
        .slice(0, 2)
        .map((x) => `${x.label} (#${x.position})`)
        .join(" & ");
      const posText = gapRow.ourPosition !== null ? `#${gapRow.ourPosition}` : "off top results";
      push({
        id: `comp-${gapRow.keyword}`,
        priority: "medium",
        category: "Competitor gap",
        title: `Close gap on "${gapRow.keyword}" (you: ${posText})`,
        detail: `${leaders} lead here.${gapRow.hasLocalPack ? " Google shows a Map Pack — steady Google reviews mentioning Miami/ketamine help most." : " Compare their page depth and local links."}`,
        target: gapRow.keyword,
      });
    }
  }

  // 6. Stale or errored sitemaps.
  if (report) {
    const staleMaps = report.sitemaps.filter((s) => s.stale);
    const badMaps = report.sitemaps.filter((s) => !s.stale && s.errors > 0);
    if (staleMaps.length > 0 || badMaps.length > 0) {
      push({
        id: "sitemaps",
        priority: "medium",
        category: "Technical",
        title: staleMaps.length > 0 ? `Remove ${staleMaps.length} old sitemap(s) in Search Console` : "Fix sitemap error in Search Console",
        detail:
          staleMaps.length > 0
            ? "Old WordPress sitemaps are still submitted and flagged stale; remove them so Google focuses on the current 141-URL sitemap."
            : "Current sitemap reported errors in Search Console; inspect Coverage/Sitemaps.",
        target: "sitemaps",
      });
    }
  }

  // 7. Spanish momentum.
  if (report && (report.spanish.gaining > 0 || report.spanish.totals.thisWeek.impressions > 0)) {
    push({
      id: "spanish-momentum",
      priority: "low",
      category: "Spanish edge",
      title: `Build on Spanish (/es) traction (${report.spanish.totals.thisWeek.impressions} imp)`,
      detail: `${report.spanish.gaining} /es page(s) gained impressions this week. Share one Spanish blog post on Google Business Profile & Instagram Reels.`,
      target: "/es",
    });
  }

  return actions.slice(0, 5);
}

export function buildCompetitorComparison(input: {
  competitorsPayload: { status: "ok" | "partial" | "unavailable"; rows: CompetitorRow[] } | null;
  report: WeeklyReport | null;
  keywords: TrackedKeyword[] | null;
  aventuraKeywords?: TrackedKeyword[] | null;
}): MergedCompetitorRow[] {
  const { competitorsPayload, report, keywords } = input;
  const aventuraKeywords = input.aventuraKeywords ?? null;

  const miamiMap = new Map<string, TrackedKeyword>();
  for (const k of keywords ?? []) {
    miamiMap.set(k.keyword.toLowerCase().trim(), k);
  }
  const aventuraMap = new Map<string, TrackedKeyword>();
  for (const k of aventuraKeywords ?? []) {
    aventuraMap.set(k.keyword.toLowerCase().trim(), k);
  }

  const gscMap = new Map<string, { position: number | null; impressions: number }>();
  for (const k of report?.keyQueries ?? []) {
    gscMap.set(k.query.toLowerCase().trim(), {
      position: k.thisWeek.position,
      impressions: k.thisWeek.impressions,
    });
  }
  for (const s of report?.opportunities?.strikingDistance ?? []) {
    const key = s.query.toLowerCase().trim();
    if (!gscMap.has(key)) {
      gscMap.set(key, { position: s.position, impressions: s.impressions });
    }
  }

  const serpRows = competitorsPayload?.rows ?? [];
  const rowsByKw = new Map<string, CompetitorRow>();
  for (const r of serpRows) rowsByKw.set(r.keyword.toLowerCase().trim(), r);

  // Use SERP rows when available (which already include core + any tracked Spanish keywords),
  // otherwise fall back to CORE_MONEY_KEYWORDS + any tracked Spanish keywords from SERPWatcher.
  const orderedKeywords: string[] = [];
  if (serpRows.length > 0) {
    for (const r of serpRows) orderedKeywords.push(r.keyword);
  } else {
    orderedKeywords.push(...CORE_MONEY_KEYWORDS);
    const extras = [...(keywords ?? []), ...(aventuraKeywords ?? [])];
    for (const k of extras) {
      if (isSpanishKeyword(k.keyword) && !orderedKeywords.some((x) => x.toLowerCase() === k.keyword.toLowerCase())) {
        orderedKeywords.push(k.keyword);
        if (orderedKeywords.length >= CORE_MONEY_KEYWORDS.length + 3) break;
      }
    }
  }

  return orderedKeywords.map((kw) => {
    const norm = kw.toLowerCase().trim();
    const serp = rowsByKw.get(norm);
    const miamiKw = miamiMap.get(norm);
    const aventuraKw = aventuraMap.get(norm);
    const gsc = gscMap.get(norm);

    const serpPos = serp?.ourSerpPosition ?? null;
    const miamiTrackerRank = miamiKw?.rank ?? null;
    const aventuraTrackerRank = aventuraKw?.rank ?? null;
    const trackerRank = miamiTrackerRank ?? aventuraTrackerRank;
    const gscPos = gsc?.position ?? null;

    let ourPosition: number | null = null;
    let positionSource: MergedCompetitorRow["positionSource"] = null;
    if (serpPos !== null) {
      ourPosition = serpPos;
      positionSource = "serp";
    } else if (miamiTrackerRank !== null) {
      ourPosition = miamiTrackerRank;
      positionSource = "tracker";
    } else if (aventuraTrackerRank !== null) {
      ourPosition = aventuraTrackerRank;
      positionSource = "tracker";
    } else if (gscPos !== null) {
      ourPosition = gscPos;
      positionSource = "gsc";
    }

    let gapLabel = "Not in top results";
    let gapTone: MergedCompetitorRow["gapTone"] = "neutral";
    if (ourPosition !== null) {
      const rounded = Math.round(ourPosition);
      if (rounded <= 1) {
        gapLabel = "#1 · Leading";
        gapTone = "good";
      } else if (rounded <= 3) {
        gapLabel = `In Top 3 (#${rounded})`;
        gapTone = "good";
      } else if (rounded <= 10) {
        const diff = rounded - 3;
        gapLabel = `${diff} spot${diff === 1 ? "" : "s"} to Top 3`;
        gapTone = "info";
      } else {
        const diff = rounded - 10;
        gapLabel = `${diff} spot${diff === 1 ? "" : "s"} to Page 1`;
        gapTone = "bad";
      }
    }

    return {
      keyword: kw,
      isSpanish: serp?.isSpanish ?? isSpanishKeyword(kw),
      ourPosition,
      positionSource,
      gscPosition: gscPos,
      gscImpressions: gsc?.impressions ?? null,
      trackerRank,
      mapPackRank: miamiKw?.mapPackRank ?? aventuraKw?.mapPackRank ?? null,
      miamiTrackerRank,
      miamiMapPackRank: miamiKw?.mapPackRank ?? null,
      aventuraTrackerRank,
      aventuraMapPackRank: aventuraKw?.mapPackRank ?? null,
      hasLocalPack: serp?.hasLocalPack ?? false,
      topCompetitors: serp?.topCompetitors ?? [],
      gapLabel,
      gapTone,
      error: serp?.error ?? null,
    };
  });
}
