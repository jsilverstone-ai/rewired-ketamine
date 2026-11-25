"use client";

import { useCallback, useEffect, useState } from "react";
import type { Metrics, MoverRow, WeeklyReport as Report } from "@/lib/weekly-report";
import { card, tile, Delta, Pill, SectionTitle, Skeleton, shortUrl } from "./ui";

type ApiResult =
  | (Report & { cached?: boolean; stale?: boolean; staleReason?: string })
  | { status: "not-connected"; message: string; serviceAccount: string | null; site: string }
  | { status: "no-data"; message: string }
  | { status: "error"; message: string };

const fmtPos = (p: number | null) => (p === null ? "—" : p.toFixed(1));
const fmtNum = (n: number) => n.toLocaleString();
const fmtDay = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

function Kpi({ label, now, before, invert, digits = 0, format }: { label: string; now: number | null; before: number | null; invert?: boolean; digits?: number; format: (n: number | null) => string }) {
  return (
    <div className={tile}>
      <div className="text-slate-400 text-xs mb-1">{label}</div>
      <div className="text-2xl font-bold text-slate-800">{format(now)}</div>
      <div className="mt-1 flex items-center gap-2">
        <Delta now={now} before={before} invert={invert} digits={digits} percent={!invert} />
        <span className="text-[11px] text-slate-400">vs {format(before)}</span>
      </div>
    </div>
  );
}

function MoverList({ title, rows, tone, isPage }: { title: string; rows: MoverRow[]; tone: "up" | "down"; isPage: boolean }) {
  return (
    <div>
      <h3 className={`text-xs font-semibold uppercase tracking-wider mb-2 ${tone === "up" ? "text-emerald-600" : "text-rose-600"}`}>{title}</h3>
      {rows.length === 0 ? (
        <p className="text-xs text-slate-400">Nothing notable (min. 10 impressions)</p>
      ) : (
        <div className="space-y-1.5">
          {rows.map((r) => (
            <div key={r.key} className="flex items-center justify-between gap-2 bg-slate-50 rounded-xl px-3 py-2 text-sm">
              <span className="truncate text-slate-700" title={r.key}>{isPage ? shortUrl(r.key) : r.key}</span>
              <span className="shrink-0 text-xs font-mono text-slate-500">
                {r.clicksDelta !== 0 && <span className={r.clicksDelta > 0 ? "text-emerald-600" : "text-rose-600"}>{r.clicksDelta > 0 ? "+" : ""}{r.clicksDelta} clk </span>}
                <span className={r.impressionsDelta >= 0 ? "text-emerald-600" : "text-rose-600"}>{r.impressionsDelta > 0 ? "+" : ""}{r.impressionsDelta} imp</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Cell({ m }: { m: Metrics }) {
  return (
    <>
      <td className="px-3 py-2 text-right font-mono">{fmtNum(m.clicks)}</td>
      <td className="px-3 py-2 text-right font-mono">{fmtNum(m.impressions)}</td>
      <td className="px-3 py-2 text-right font-mono">{fmtPos(m.position)}</td>
    </>
  );
}

export default function WeeklyReport() {
  const [data, setData] = useState<ApiResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [netError, setNetError] = useState<string | null>(null);

  const load = useCallback(async (refresh = false) => {
    setLoading(true);
    setNetError(null);
    try {
      const res = await fetch(`/api/seo/weekly-report${refresh ? "?refresh=1" : ""}`, { cache: "no-store" });
      if (res.status === 401) {
        setNetError("Your session expired. Reload the page and sign in again.");
        return;
      }
      setData((await res.json()) as ApiResult);
    } catch (e) {
      setNetError(e instanceof Error ? e.message : "Network error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Initial fetch on mount; state updates happen after the await.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  const refreshButton = (
    <button
      type="button"
      onClick={() => load(true)}
      disabled={loading}
      className="self-start sm:self-auto bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-700 px-4 py-2 rounded-2xl text-sm font-medium transition"
    >
      {loading ? "Loading…" : "↻ Refresh"}
    </button>
  );

  const header = (subtitle: string) => (
    <SectionTitle icon="🗓️" title="Weekly Search Console Report" subtitle={subtitle} right={refreshButton} />
  );

  if (loading && !data) {
    return (
      <section className="mb-10">
        {header("Last 7 finalized days vs the 7 before")}
        <div className={card}><Skeleton rows={4} /></div>
      </section>
    );
  }

  if (netError || !data) {
    return (
      <section className="mb-10">
        {header("Last 7 finalized days vs the 7 before")}
        <div className={`${card} text-sm text-rose-600`}>Couldn’t load the report: {netError ?? "unknown error"}</div>
      </section>
    );
  }

  if (data.status === "not-connected") {
    return (
      <section className="mb-10">
        {header("Last 7 finalized days vs the 7 before")}
        <div className={`${card} text-sm`}>
          <div className="flex items-center gap-2 mb-3">
            <Pill tone="info">Not connected yet</Pill>
            <span className="text-slate-500">{data.message}</span>
          </div>
          <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
            <li>Google Cloud Console → create a project (or pick one) → enable the <b>Google Search Console API</b>.</li>
            <li>IAM &amp; Admin → Service Accounts → create one → Keys → Add key → JSON (downloads a file).</li>
            <li>Search Console → {data.site} → Settings → Users and permissions → Add user → paste the service account email → permission <b>Restricted</b>.</li>
            <li>Vercel → rewired-ketamine-live → Settings → Environment Variables → add <code className="bg-slate-100 px-1 rounded">GSC_SERVICE_ACCOUNT_JSON</code> = the whole JSON file contents (Production) → redeploy.</li>
          </ol>
          {data.serviceAccount && <p className="mt-3 text-xs text-slate-500">Key loaded for <code>{data.serviceAccount}</code>; it still needs access to the property.</p>}
        </div>
      </section>
    );
  }

  if (data.status === "no-data" || data.status === "error") {
    return (
      <section className="mb-10">
        {header("Last 7 finalized days vs the 7 before")}
        <div className={`${card} text-sm ${data.status === "error" ? "text-rose-600" : "text-slate-500"}`}>
          {data.status === "error" ? "Search Console error: " : ""}{data.message}
        </div>
      </section>
    );
  }

  const r = data;
  const t = r.totals.thisWeek;
  const l = r.totals.lastWeek;
  const incomplete = r.daysWithData.thisWeek < 7 || r.daysWithData.lastWeek < 7;

  return (
    <section className="mb-10">
      {header(`${fmtDay(r.thisWeek.start)}–${fmtDay(r.thisWeek.end)} vs ${fmtDay(r.lastWeek.start)}–${fmtDay(r.lastWeek.end)} · finalized data only`)}

      {/* Summary */}
      <div className={`${card} mb-6`}>
        <p className="text-sm text-slate-700 leading-relaxed">{r.summary}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {r.stale && <Pill tone="bad">Showing last good report: {r.staleReason}</Pill>}
          {r.cached && !r.stale && <Pill tone="neutral">Cached · refreshes hourly</Pill>}
          {incomplete && <Pill tone="info">Some days had no data ({r.daysWithData.thisWeek}/7 vs {r.daysWithData.lastWeek}/7)</Pill>}
          {r.homepageAlerts.map((a) => <Pill key={a} tone="bad">{a}</Pill>)}
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Kpi label="Clicks" now={t.clicks} before={l.clicks} format={(n) => (n === null ? "—" : fmtNum(n))} />
        <Kpi label="Impressions" now={t.impressions} before={l.impressions} format={(n) => (n === null ? "—" : fmtNum(n))} />
        <Kpi label="CTR" now={t.ctr === null ? null : t.ctr * 100} before={l.ctr === null ? null : l.ctr * 100} digits={1} format={(n) => (n === null ? "—" : `${n.toFixed(1)}%`)} />
        <Kpi label="Avg position (lower is better)" now={t.position} before={l.position} invert digits={1} format={fmtPos} />
      </div>

      {r.noise.length > 0 && (
        <div className={`${card} mb-6 text-sm`}>
          <h3 className="font-semibold text-slate-800 mb-2">🧹 Noise filtered</h3>
          <ul className="space-y-1 text-slate-600 text-xs">
            {r.noise.map((n) => (
              <li key={n.date}>{fmtDay(n.date)}: {fmtNum(n.impressions)} impressions, {n.reason}</li>
            ))}
          </ul>
          {r.adjustedPosition && (
            <p className="text-xs text-slate-500 mt-2">
              Avg position without those bursts: <b>{fmtPos(r.adjustedPosition.thisWeek)}</b> this week vs <b>{fmtPos(r.adjustedPosition.lastWeek)}</b> last week.
            </p>
          )}
        </div>
      )}

      {/* Key queries */}
      <div className={`${card} mb-6`}>
        <h3 className="text-lg font-semibold text-slate-800 mb-1">🔑 Key queries</h3>
        <p className="text-xs text-slate-400 mb-4">Clicks · impressions · avg position, and the page Google showed most</p>
        <div className="overflow-x-auto -mx-2">
          <table className="min-w-[760px] w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-400 text-left">
                <th className="px-3 py-2 font-medium">Query</th>
                <th className="px-3 py-2 font-medium text-right" colSpan={3}>This week</th>
                <th className="px-3 py-2 font-medium text-right" colSpan={3}>Last week</th>
                <th className="px-3 py-2 font-medium">Ranking page</th>
                <th className="px-3 py-2 font-medium">Flags</th>
              </tr>
              <tr className="text-[10px] text-slate-400 uppercase">
                <th />
                <th className="px-3 text-right">clk</th><th className="px-3 text-right">imp</th><th className="px-3 text-right">pos</th>
                <th className="px-3 text-right">clk</th><th className="px-3 text-right">imp</th><th className="px-3 text-right">pos</th>
                <th /><th />
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {r.keyQueries.map((k) => (
                <tr key={k.query} className="border-t border-slate-100 align-top">
                  <td className="px-3 py-2 font-medium">{k.query}</td>
                  <Cell m={k.thisWeek} />
                  <Cell m={k.lastWeek} />
                  <td className="px-3 py-2 text-xs text-slate-500 max-w-[200px] truncate" title={k.page ?? ""}>
                    {shortUrl(k.page)}
                    {k.lastWeekPage && k.page && k.lastWeekPage !== k.page && <div className="text-[10px] text-slate-400">was {shortUrl(k.lastWeekPage)}</div>}
                  </td>
                  <td className="px-3 py-2">
                    <div className="flex flex-wrap gap-1">
                      {k.flags.length === 0 ? <span className="text-xs text-slate-300">—</span> : k.flags.map((f) => <Pill key={f.text} tone={f.level}>{f.text}</Pill>)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Movers + positives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className={card}>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">📄 Top page movers</h3>
          <div className="space-y-5">
            <MoverList title="Up" rows={r.movers.pagesUp} tone="up" isPage />
            <MoverList title="Down" rows={r.movers.pagesDown} tone="down" isPage />
          </div>
        </div>
        <div className={card}>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">🔎 Top query movers</h3>
          <div className="space-y-5">
            <MoverList title="Up" rows={r.movers.queriesUp} tone="up" isPage={false} />
            <MoverList title="Down" rows={r.movers.queriesDown} tone="down" isPage={false} />
          </div>
        </div>
        <div className={card}>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">🌱 Positives</h3>
          {r.positives.length === 0 ? (
            <p className="text-sm text-slate-400">No standout wins this week.</p>
          ) : (
            <ul className="space-y-2 text-sm text-slate-700">
              {r.positives.map((p) => <li key={p} className="bg-emerald-50 rounded-xl px-3 py-2">{p}</li>)}
            </ul>
          )}
          {r.newPages.length > 0 && (
            <div className="mt-4">
              <h4 className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">New pages with impressions</h4>
              <div className="space-y-1 max-h-40 overflow-y-auto">
                {r.newPages.map((p) => (
                  <div key={p.key} className="flex justify-between gap-2 text-xs bg-slate-50 rounded-xl px-3 py-1.5">
                    <span className="truncate" title={p.key}>{shortUrl(p.key)}</span>
                    <span className="font-mono text-slate-500 shrink-0">{p.thisWeek.impressions} imp</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Spanish + sitemaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={card}>
          <h3 className="text-lg font-semibold text-slate-800 mb-1">🇲🇽 Spanish pages (/es)</h3>
          <p className="text-xs text-slate-400 mb-4">
            {fmtNum(r.spanish.totals.thisWeek.impressions)} impressions · {fmtNum(r.spanish.totals.thisWeek.clicks)} clicks this week
            {" "}(<Delta now={r.spanish.totals.thisWeek.impressions} before={r.spanish.totals.lastWeek.impressions} percent />)
          </p>
          {r.spanish.pages.length === 0 ? (
            <p className="text-sm text-slate-400">No Spanish pages with impressions yet. New pages usually take 1–3 weeks.</p>
          ) : (
            <div className="overflow-x-auto -mx-2">
              <table className="min-w-[420px] w-full text-sm">
                <thead>
                  <tr className="text-xs text-slate-400 text-left">
                    <th className="px-3 py-2 font-medium">Page</th>
                    <th className="px-3 py-2 font-medium text-right">clk</th>
                    <th className="px-3 py-2 font-medium text-right">imp</th>
                    <th className="px-3 py-2 font-medium text-right">pos</th>
                    <th className="px-3 py-2 font-medium text-right">Δ imp</th>
                  </tr>
                </thead>
                <tbody>
                  {r.spanish.pages.map((p) => (
                    <tr key={p.key} className="border-t border-slate-100">
                      <td className="px-3 py-2 text-xs max-w-[220px] truncate" title={p.key}>{shortUrl(p.key)}</td>
                      <Cell m={p.thisWeek} />
                      <td className={`px-3 py-2 text-right font-mono text-xs ${p.impressionsDelta >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
                        {p.impressionsDelta > 0 ? "+" : ""}{p.impressionsDelta}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className={card}>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">🗺️ Sitemaps</h3>
          {r.sitemapError ? (
            <p className="text-sm text-rose-600">Couldn’t read sitemaps: {r.sitemapError}</p>
          ) : r.sitemaps.length === 0 ? (
            <p className="text-sm text-slate-400">No sitemaps submitted.</p>
          ) : (
            <div className="space-y-2">
              {[...r.sitemaps].sort((a, b) => Number(a.stale) - Number(b.stale)).map((s) => (
                <div key={s.path} className="bg-slate-50 rounded-2xl px-4 py-3 text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate font-medium text-slate-700" title={s.path}>{s.path.replace(/^https?:\/\//, "")}</span>
                    <div className="flex gap-1 shrink-0">
                      {s.stale && <Pill tone="neutral">Old · remove</Pill>}
                      {s.isPending && <Pill tone="info">Pending</Pill>}
                      {s.errors > 0 && <Pill tone="bad">{s.errors} errors</Pill>}
                      {s.warnings > 0 && <Pill tone="bad">{s.warnings} warnings</Pill>}
                      {s.errors === 0 && s.warnings === 0 && !s.isPending && !s.stale && <Pill tone="good">OK</Pill>}
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {s.submitted ?? "—"} URLs submitted
                    {s.indexed !== null && s.indexed > 0 ? ` · ${s.indexed} indexed` : ""}
                    {s.lastDownloaded ? ` · last read by Google ${new Date(s.lastDownloaded).toLocaleDateString("en-US", { month: "short", day: "numeric" })}` : ""}
                  </div>
                </div>
              ))}
              <p className="text-[11px] text-slate-400">Google no longer reports indexed counts per sitemap here; use Search Console → Pages for the indexed total.</p>
            </div>
          )}
        </div>
      </div>
      <p className="text-[11px] text-slate-400 mt-3">Generated {new Date(r.generatedAt).toLocaleString("en-US", { timeZone: "America/New_York" })} ET from the Search Console API ({r.site}).</p>
    </section>
  );
}
