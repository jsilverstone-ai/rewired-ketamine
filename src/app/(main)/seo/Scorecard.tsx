"use client";

import { useState } from "react";
import type { WeeklyReport } from "@/lib/weekly-report";
import {
  computeKeywordStats,
  computeVisibilityScore,
  type TrackedKeyword,
} from "@/lib/seo-scorecard";
import { card, tile, Delta, Pill, Skeleton } from "./ui";

const fmtNum = (n: number) => n.toLocaleString();
const fmtPos = (p: number | null) => (p === null ? "—" : p.toFixed(1));
const fmtDay = (d: string) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

function KpiTile({
  label,
  value,
  now,
  before,
  invert,
  digits = 0,
  percent = false,
  sub,
}: {
  label: string;
  value: string;
  now: number | null;
  before: number | null;
  invert?: boolean;
  digits?: number;
  percent?: boolean;
  sub?: string;
}) {
  return (
    <div className={tile}>
      <div className="text-slate-500 text-xs font-medium mb-1">{label}</div>
      <div className="text-2xl font-bold text-[#0B1D36] tabular-nums">{value}</div>
      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
        <Delta now={now} before={before} invert={invert} digits={digits} percent={percent} />
        {sub && <span className="text-[11px] text-slate-400">{sub}</span>}
      </div>
    </div>
  );
}

export default function Scorecard({
  report,
  reportStatus,
  keywords,
  loading,
}: {
  report: WeeklyReport | null;
  reportStatus: string | null;
  keywords: TrackedKeyword[] | null;
  loading: boolean;
}) {
  const [showFormula, setShowFormula] = useState(false);

  const scoreData = computeVisibilityScore({ report, keywords });
  const kwStats = computeKeywordStats(keywords);

  const t = report?.totals.thisWeek ?? null;
  const l = report?.totals.lastWeek ?? null;
  const posNow = report ? (report.adjustedPosition?.thisWeek ?? t?.position ?? null) : null;
  const posBefore = report ? (report.adjustedPosition?.lastWeek ?? l?.position ?? null) : null;
  const posFiltered = Boolean(report && report.noise.length > 0 && report.adjustedPosition);

  const spNow = report?.spanish.totals.thisWeek ?? null;
  const spBefore = report?.spanish.totals.lastWeek ?? null;

  const dateRangeText = report
    ? `${fmtDay(report.thisWeek.start)}–${fmtDay(report.thisWeek.end)} vs prior 7 days`
    : reportStatus === "not-connected"
      ? "Search Console not connected"
      : loading
        ? "Loading weekly metrics…"
        : "No weekly Search Console data";

  return (
    <section className={`${card} mb-6`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
        <div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1D36]">
            Weekly Scorecard
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{dateRangeText}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {report && report.homepageAlerts.length > 0 && (
            <Pill tone="bad">{report.homepageAlerts.length} homepage alert</Pill>
          )}
          {scoreData.partial && scoreData.score !== null && (
            <Pill tone="info">Partial data</Pill>
          )}
          <button
            type="button"
            onClick={() => setShowFormula((s) => !s)}
            className="text-xs font-medium text-teal-700 hover:text-teal-600 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-xl transition"
          >
            {showFormula ? "Hide score formula" : "ⓘ How score is computed"}
          </button>
        </div>
      </div>

      {loading && !report && !keywords ? (
        <Skeleton rows={3} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Visibility Score hero card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0B1D36] to-[#132f54] text-white rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  Visibility Score
                </span>
                {scoreData.delta !== null && (
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${
                      scoreData.delta > 0
                        ? "bg-emerald-500/20 text-emerald-200"
                        : scoreData.delta < 0
                          ? "bg-rose-500/20 text-rose-200"
                          : "bg-white/10 text-slate-200"
                    }`}
                  >
                    {scoreData.delta > 0
                      ? `▲ +${scoreData.delta}`
                      : scoreData.delta < 0
                        ? `▼ ${Math.abs(scoreData.delta)}`
                        : "0 vs last wk"}
                  </span>
                )}
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-serif text-5xl font-bold tabular-nums">
                  {scoreData.score ?? "—"}
                </span>
                <span className="text-sm text-slate-300">/ 100</span>
              </div>
              {scoreData.score === null && (
                <p className="text-xs text-slate-300 mt-2">
                  No data available yet from Search Console or Mangools.
                </p>
              )}
            </div>

            <div className="mt-5 space-y-2.5">
              {scoreData.pillars.map((p) => {
                const pct = p.score !== null ? Math.round((p.score / p.max) * 100) : 0;
                return (
                  <div key={p.id}>
                    <div className="flex items-center justify-between text-[11px] text-slate-200 mb-1">
                      <span>{p.label}</span>
                      <span className="font-mono text-slate-300">
                        {p.score !== null ? `${p.score.toFixed(1)}/${p.max}` : "—"}
                      </span>
                    </div>
                    <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-teal-400 rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6 KPI tiles */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            <KpiTile
              label="Clicks (7d)"
              value={t ? fmtNum(t.clicks) : "—"}
              now={t?.clicks ?? null}
              before={l?.clicks ?? null}
              percent
              sub={l ? `vs ${fmtNum(l.clicks)}` : undefined}
            />
            <KpiTile
              label="Impressions (7d)"
              value={t ? fmtNum(t.impressions) : "—"}
              now={t?.impressions ?? null}
              before={l?.impressions ?? null}
              percent
              sub={l ? `vs ${fmtNum(l.impressions)}` : undefined}
            />
            <KpiTile
              label={posFiltered ? "Avg Position (clean)" : "Avg Position"}
              value={fmtPos(posNow)}
              now={posNow}
              before={posBefore}
              invert
              digits={1}
              sub={posBefore !== null ? `vs ${fmtPos(posBefore)}` : undefined}
            />
            <KpiTile
              label="Keywords in Top 10"
              value={kwStats ? `${kwStats.top10}/${kwStats.total}` : "—"}
              now={kwStats?.top10 ?? null}
              before={kwStats?.prevTop10 ?? null}
              sub={kwStats ? `${kwStats.top3} in Top 3` : "No tracker data"}
            />
            <KpiTile
              label="Spanish (/es) Imp."
              value={spNow ? fmtNum(spNow.impressions) : "—"}
              now={spNow?.impressions ?? null}
              before={spBefore?.impressions ?? null}
              percent
              sub={
                report
                  ? `${spNow?.clicks ?? 0} clk · ${report.spanish.gaining} pages up`
                  : undefined
              }
            />
            <KpiTile
              label="Sitewide CTR"
              value={t?.ctr != null ? `${(t.ctr * 100).toFixed(1)}%` : "—"}
              now={t?.ctr != null ? t.ctr * 100 : null}
              before={l?.ctr != null ? l.ctr * 100 : null}
              digits={1}
              sub={l?.ctr != null ? `vs ${(l.ctr * 100).toFixed(1)}%` : undefined}
            />
          </div>
        </div>
      )}

      {showFormula && (
        <div className="mt-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-800">How the Visibility Score is calculated:</strong>{" "}
          {scoreData.formulaNote}
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px] text-slate-500">
            {scoreData.pillars.map((p) => (
              <div key={p.id} className="bg-white rounded-xl px-3 py-2 border border-slate-100">
                <div className="font-semibold text-slate-700">{p.label}</div>
                <div>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
