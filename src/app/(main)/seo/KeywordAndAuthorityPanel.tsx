"use client";

import type { TrackedKeyword } from "@/lib/seo-scorecard";
import { AccordionCard, card, Pill, Delta } from "./ui";

export interface SiteData {
  domainAuthority: number | null;
  pageAuthority: number | null;
  citationFlow: number | null;
  trustFlow: number | null;
  referringIPs: number | null;
}

export interface Backlink {
  source: string | null;
}

const TIER_1 = [
  "ketamine therapy near me",
  "ketamine clinic aventura",
  "ketamine clinic miami",
  "ketamine infusion miami",
  "ketamine therapy aventura",
  "ketamine for depression miami",
  "iv ketamine therapy near me",
];

const TIER_2 = [
  "ketamine treatment florida",
  "ketamine clinic florida",
  "ketamine south florida",
  "ketamine near me",
  "ketamine for depression",
  "ketamine therapy for ptsd",
  "ketamine infusion therapy florida",
  "ketamine treatment in florida",
  "ketamine aventura fl",
  "ketamine miami",
];

const normalize = (str: string) => str.toLowerCase().trim();

function KeywordList({
  title,
  subtitle,
  keywords,
  empty,
}: {
  title: string;
  subtitle?: string;
  keywords: TrackedKeyword[];
  empty: string;
}) {
  const tier1Keywords = keywords.filter((k) =>
    TIER_1.some((t) => normalize(k.keyword).includes(normalize(t)) || normalize(t).includes(normalize(k.keyword)))
  );
  const tier2Keywords = keywords.filter((k) =>
    TIER_2.some((t) => normalize(k.keyword).includes(normalize(t)) || normalize(t).includes(normalize(k.keyword)))
  );
  const otherKeywords = keywords.filter((k) => !tier1Keywords.includes(k) && !tier2Keywords.includes(k));

  const row = (k: TrackedKeyword, i: number, muted = false) => (
    <div key={`${k.keyword}-${i}`} className="flex items-center justify-between gap-2 bg-slate-50 rounded-xl px-3 py-2 text-xs">
      <span className={`truncate ${muted ? "text-slate-600" : "text-slate-700"}`}>{k.keyword}</span>
      <span className="shrink-0 flex items-center gap-2">
        <Delta now={k.rank} before={k.previousRank} invert />
        <span className={`font-mono font-semibold ${muted ? "text-slate-600" : "text-slate-700"}`}>{k.rank ?? "—"}</span>
      </span>
    </div>
  );

  return (
    <div className={card}>
      <h3 className="text-base font-semibold text-slate-800 mb-1 flex items-center gap-2">
        <span className="text-emerald-500">📈</span> {title}
      </h3>
      <p className="text-xs text-slate-400 mb-4">{subtitle ?? "Rank vs previous window"}</p>
      {keywords.length === 0 ? (
        <p className="text-sm text-slate-400">{empty}</p>
      ) : (
        <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
          <div>
            <h4 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Tier 1</h4>
            <div className="space-y-1.5">
              {tier1Keywords.length === 0 ? <p className="text-xs text-slate-400">No matches yet</p> : tier1Keywords.map((k, i) => row(k, i))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">Tier 2</h4>
            <div className="space-y-1.5">
              {tier2Keywords.length === 0 ? <p className="text-xs text-slate-400">No matches yet</p> : tier2Keywords.map((k, i) => row(k, i, true))}
            </div>
          </div>
          {otherKeywords.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Other tracked</h4>
              <div className="space-y-1.5">{otherKeywords.map((k, i) => row(k, i, true))}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function KeywordAndAuthorityPanel({
  miamiKeywords,
  aventuraKeywords,
  miamiLabel = "Miami 📱",
  aventuraLabel = "Aventura 📱",
  siteData,
  backlinks,
  loading,
  feedErrors,
}: {
  miamiKeywords: TrackedKeyword[];
  aventuraKeywords: TrackedKeyword[];
  miamiLabel?: string;
  aventuraLabel?: string;
  siteData: SiteData | null;
  backlinks: Backlink[];
  loading: boolean;
  feedErrors: Record<string, string>;
}) {
  const total = miamiKeywords.length + aventuraKeywords.length;
  const summaryParts: string[] = [];
  if (miamiKeywords.length > 0) summaryParts.push(`${miamiLabel} ${miamiKeywords.length} kw`);
  if (aventuraKeywords.length > 0) summaryParts.push(`${aventuraLabel} ${aventuraKeywords.length} kw`);
  if (siteData?.domainAuthority != null) summaryParts.push(`DA ${siteData.domainAuthority}`);
  if (siteData?.trustFlow != null) summaryParts.push(`Trust Flow ${siteData.trustFlow}`);
  if (backlinks.length > 0) summaryParts.push(`${backlinks.length} recent backlinks`);
  const summary =
    summaryParts.length > 0
      ? summaryParts.join(" · ")
      : loading
        ? "Loading Mangools keywords & site authority…"
        : "Miami & Aventura mobile ranks, Domain Authority, and backlinks";

  return (
    <AccordionCard
      icon="🔑"
      title="Raw Keyword Tracker & Site Authority"
      summary={summary}
      badge={total > 0 ? <Pill tone="neutral">{total} keywords</Pill> : undefined}
      defaultOpen={false}
    >
      {feedErrors.rankings && (
        <p className="text-sm text-rose-500 mb-4">Couldn’t load rankings: {feedErrors.rankings}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        <KeywordList
          title={`${miamiLabel} Keyword Tracker`}
          subtitle="SERPWatcher ranks vs previous window"
          keywords={miamiKeywords}
          empty={loading ? "Loading…" : "No Miami tracking loaded"}
        />
        <KeywordList
          title={`${aventuraLabel} Keyword Tracker`}
          subtitle="SERPWatcher ranks vs previous window"
          keywords={aventuraKeywords}
          empty={loading ? "Loading…" : "No Aventura tracking loaded"}
        />

        {/* Site Health + Backlinks */}
        <div className={card}>
          <h3 className="text-base font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <span className="text-amber-500">🩺</span> Site Authority &amp; Backlinks
          </h3>
          {siteData ? (
            <div className="grid grid-cols-2 gap-3 text-sm mb-4">
              <div className="bg-slate-50 rounded-2xl p-3">
                <div className="text-slate-400 text-[11px] mb-0.5">Domain Authority</div>
                <div className="text-xl font-bold text-slate-800">{siteData.domainAuthority ?? "—"}</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-3">
                <div className="text-slate-400 text-[11px] mb-0.5">Page Authority</div>
                <div className="text-xl font-bold text-slate-800">{siteData.pageAuthority ?? "—"}</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-3">
                <div className="text-slate-400 text-[11px] mb-0.5">Citation Flow</div>
                <div className="text-xl font-bold text-slate-800">{siteData.citationFlow ?? "—"}</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-3">
                <div className="text-slate-400 text-[11px] mb-0.5">Trust Flow</div>
                <div className="text-xl font-bold text-slate-800">{siteData.trustFlow ?? "—"}</div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-3 col-span-2">
                <div className="text-slate-400 text-[11px] mb-0.5">Referring IPs</div>
                <div className="text-xl font-bold text-slate-800">{siteData.referringIPs ?? "—"}</div>
              </div>
            </div>
          ) : (
            <p className={`text-sm mb-4 ${feedErrors.site ? "text-rose-500" : "text-slate-400"}`}>
              {feedErrors.site ? `Couldn’t load: ${feedErrors.site}` : "Loading metrics…"}
            </p>
          )}
          <div className="border-t border-slate-100 pt-3">
            <h4 className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">Recent Backlinks</h4>
            {backlinks.length === 0 ? (
              <p className={`text-xs ${feedErrors.backlinks ? "text-rose-500" : "text-slate-400"}`}>
                {feedErrors.backlinks ? `Couldn’t load: ${feedErrors.backlinks}` : loading ? "Loading…" : "No backlink data yet"}
              </p>
            ) : (
              <div className="space-y-1.5 max-h-36 overflow-y-auto">
                {backlinks.slice(0, 8).map((link, i) => (
                  <div key={i} className="text-xs bg-slate-50 rounded-xl px-3 py-1.5 truncate text-slate-600">
                    {link.source?.replace("https://", "").replace("http://", "").split("/")[0] || "—"}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search Console shortcuts */}
        <div className={card}>
          <h3 className="text-base font-semibold text-slate-800 mb-2 flex items-center gap-2">
            <span className="text-blue-500">📊</span> Search Console Shortcuts
          </h3>
          <p className="text-xs text-slate-500 mb-4">Quick checks outside this dashboard</p>
          <div className="space-y-2.5 text-sm text-slate-700">
            <div className="bg-slate-50 rounded-2xl p-3.5">
              <div className="font-medium text-xs mb-1">1. Pages / Coverage</div>
              <div className="text-slate-500 text-xs leading-relaxed">
                Watch 404s and make sure new Spanish (/es) and service pages stay indexed.
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3.5">
              <div className="font-medium text-xs mb-1">2. Google Business Profile</div>
              <div className="text-slate-500 text-xs leading-relaxed">
                Ask happy patients for honest Google reviews — proximity + reviews drive “ketamine clinic miami” map rank.
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3.5">
              <div className="font-medium text-xs mb-1">3. PageSpeed Insights</div>
              <div className="text-slate-500 text-xs leading-relaxed">
                Spot-check mobile Core Web Vitals after major page changes.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4">
            <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:text-teal-500 font-medium">
              Open Google Search Console →
            </a>
            <a href="https://app.mangools.com/serpwatcher" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:text-teal-500 font-medium">
              Open full Rank Tracking →
            </a>
          </div>
        </div>
      </div>
    </AccordionCard>
  );
}
