"use client";

import { MANGOOLS_DOMAIN } from "@/lib/mangools";
import type { MergedCompetitorRow } from "@/lib/seo-scorecard";
import { card, Pill, SectionTitle, Skeleton } from "./ui";

function RankBadge({
  position,
  source,
  mapPackRank,
}: {
  position: number | null;
  source: MergedCompetitorRow["positionSource"];
  mapPackRank: number | null;
}) {
  if (position === null) {
    return (
      <div className="flex flex-col">
        <span className="text-slate-400 font-mono text-xs">—</span>
        {mapPackRank !== null && (
          <span className="text-[10px] text-teal-700 font-medium">Map #{mapPackRank}</span>
        )}
      </div>
    );
  }
  const formatted = source === "gsc" ? `~${position.toFixed(1)}` : `#${Math.round(position)}`;
  const color =
    position <= 3
      ? "text-emerald-700 bg-emerald-50 border-emerald-200"
      : position <= 10
        ? "text-teal-700 bg-teal-50 border-teal-200"
        : "text-slate-700 bg-slate-100 border-slate-200";
  const srcLabel = source === "serp" ? "Miami SERP 📱" : source === "tracker" ? "Miami 📱 tracker" : source === "gsc" ? "GSC avg" : "";

  return (
    <div className="flex flex-col items-start gap-0.5">
      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-lg border ${color}`}>
        {formatted}
      </span>
      <span className="text-[10px] text-slate-400">
        {srcLabel}
        {mapPackRank !== null ? ` · Map #${mapPackRank}` : ""}
      </span>
    </div>
  );
}

function TrackerRank({
  position,
  mapPackRank,
  emptyLabel = "—",
}: {
  position: number | null;
  mapPackRank: number | null;
  emptyLabel?: string;
}) {
  if (position === null) {
    return (
      <div className="flex flex-col">
        <span className="text-slate-400 font-mono text-xs">{emptyLabel}</span>
        {mapPackRank !== null && (
          <span className="text-[10px] text-teal-700 font-medium">Map #{mapPackRank}</span>
        )}
      </div>
    );
  }
  const color =
    position <= 3
      ? "text-emerald-700 bg-emerald-50 border-emerald-200"
      : position <= 10
        ? "text-teal-700 bg-teal-50 border-teal-200"
        : "text-slate-700 bg-slate-100 border-slate-200";
  return (
    <div className="flex flex-col items-start gap-0.5">
      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-lg border ${color}`}>
        #{Math.round(position)}
      </span>
      {mapPackRank !== null && (
        <span className="text-[10px] text-teal-700 font-medium">Map #{mapPackRank}</span>
      )}
    </div>
  );
}

function CompetitorCell({
  comp,
}: {
  comp?: MergedCompetitorRow["topCompetitors"][number];
}) {
  if (!comp) return <span className="text-xs text-slate-300">—</span>;
  const isUs = comp.domain.includes(MANGOOLS_DOMAIN);
  return (
    <div className={`min-w-[120px] max-w-[175px] ${isUs ? "bg-teal-50/90 border border-teal-200 rounded-xl px-2.5 py-1.5" : ""}`}>
      <div className="flex items-center gap-1.5">
        <span className={`text-xs font-semibold truncate ${isUs ? "text-teal-800" : "text-slate-700"}`} title={comp.title || comp.domain}>
          {isUs ? "Rewired (You)" : comp.label}
        </span>
      </div>
      <div className="text-[10px] text-slate-400 truncate">
        {comp.domain}
        {comp.da !== null ? ` · DA ${comp.da}` : ""}
      </div>
    </div>
  );
}

export default function CompetitorTable({
  rows,
  serpStatus,
  serpError,
  location,
  platform,
  fetchedAt,
  cached,
  loading,
  refreshing,
  onRefresh,
}: {
  rows: MergedCompetitorRow[];
  serpStatus: "ok" | "partial" | "unavailable" | null;
  serpError: string | null;
  location: string | null;
  platform?: "mobile" | "desktop" | null;
  fetchedAt: string | null;
  cached?: boolean;
  loading: boolean;
  refreshing: boolean;
  onRefresh: () => void;
}) {
  const updatedText = fetchedAt
    ? new Date(fetchedAt).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: "America/New_York",
      })
    : null;

  return (
    <section className={`${card} mb-6`}>
      <SectionTitle
        icon="🏁"
        title="Miami Competitors · Core Money Keywords"
        subtitle={`${location || "Miami, Florida"}${platform === "mobile" ? " · Mobile SERP" : platform === "desktop" ? " · Desktop SERP" : ""} · Cached 24h to protect Mangools quota${updatedText ? ` · Updated ${updatedText} ET` : ""}${cached ? " (cached)" : ""}`}
        right={
          <button
            type="button"
            onClick={onRefresh}
            disabled={loading || refreshing}
            className="self-start sm:self-auto bg-teal-50 hover:bg-teal-100 disabled:opacity-50 text-teal-800 px-4 py-2 rounded-2xl text-xs font-semibold transition"
          >
            {refreshing ? "Refreshing SERPs…" : "↻ Refresh SERPs"}
          </button>
        }
      />

      {(serpStatus === "unavailable" || serpStatus === "partial") && serpError && (
        <div className="mb-4 bg-amber-50 border border-amber-200/80 text-amber-800 rounded-2xl px-4 py-3 text-xs leading-relaxed">
          <strong>Note on live SERP data:</strong> {serpError}
          {serpStatus === "unavailable" && " Falling back to your Search Console / tracker positions with competitor columns empty."}
        </div>
      )}

      {loading && rows.length === 0 ? (
        <Skeleton rows={5} />
      ) : (
        <div className="overflow-x-auto -mx-2">
          <table className="min-w-[920px] w-full text-sm">
            <thead>
              <tr className="text-[11px] uppercase tracking-wider text-slate-400 text-left border-b border-slate-100">
                <th className="px-3 py-2.5 font-semibold">Keyword</th>
                <th className="px-3 py-2.5 font-semibold">Miami SERP 📱</th>
                <th className="px-3 py-2.5 font-semibold">Miami 📱</th>
                <th className="px-3 py-2.5 font-semibold">Aventura 📱</th>
                <th className="px-3 py-2.5 font-semibold">#1</th>
                <th className="px-3 py-2.5 font-semibold">#2</th>
                <th className="px-3 py-2.5 font-semibold">#3</th>
                <th className="px-3 py-2.5 font-semibold">Gap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((r) => (
                <tr key={r.keyword} className="align-top hover:bg-slate-50/60 transition">
                  <td className="px-3 py-3">
                    <div className="font-medium text-[#0B1D36]">{r.keyword}</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {r.isSpanish && <Pill tone="good">ES</Pill>}
                      {r.hasLocalPack && (
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md">
                          Map Pack
                        </span>
                      )}
                      {r.gscImpressions !== null && r.gscImpressions > 0 && (
                        <span className="text-[10px] text-slate-400">
                          {r.gscImpressions} imp/wk
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <RankBadge
                      position={r.positionSource === "serp" ? r.ourPosition : (r.positionSource === "gsc" ? r.ourPosition : null)}
                      source={r.positionSource === "serp" || r.positionSource === "gsc" ? r.positionSource : null}
                      mapPackRank={null}
                    />
                  </td>
                  <td className="px-3 py-3">
                    <TrackerRank position={r.miamiTrackerRank} mapPackRank={r.miamiMapPackRank} />
                  </td>
                  <td className="px-3 py-3">
                    <TrackerRank position={r.aventuraTrackerRank} mapPackRank={r.aventuraMapPackRank} />
                  </td>
                  <td className="px-3 py-3">
                    <CompetitorCell comp={r.topCompetitors[0]} />
                  </td>
                  <td className="px-3 py-3">
                    <CompetitorCell comp={r.topCompetitors[1]} />
                  </td>
                  <td className="px-3 py-3">
                    <CompetitorCell comp={r.topCompetitors[2]} />
                  </td>
                  <td className="px-3 py-3">
                    <Pill tone={r.gapTone}>{r.gapLabel}</Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="text-[11px] text-slate-400 mt-4 leading-relaxed">
        <strong>Miami SERP 📱</strong> and organic #1–3 come from Mangools SERPChecker mobile results localized to Miami, FL (platform_id=2, cached 24h). <strong>Miami 📱</strong> and <strong>Aventura 📱</strong> are daily SERPWatcher Mobile ranks. When a keyword has a <strong>Map Pack</strong> badge, Google also shows local map listings above organic results — steady Google Business Profile reviews mentioning Miami &amp; ketamine move those fastest.
      </p>
    </section>
  );
}
