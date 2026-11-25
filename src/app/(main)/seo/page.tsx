"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { CompetitorsPayload } from "@/lib/competitors";
import {
  buildCompetitorComparison,
  generateWeeklyActions,
  type TrackedKeyword,
} from "@/lib/seo-scorecard";
import type { WeeklyReport as Report } from "@/lib/weekly-report";
import ApiStatus from "./ApiStatus";
import Scorecard from "./Scorecard";
import ActionPlan from "./ActionPlan";
import CompetitorTable from "./CompetitorTable";
import SocialWeek from "./SocialWeek";
import WeeklyReport, { type WeeklyReportApiResult } from "./WeeklyReport";
import KeywordAndAuthorityPanel, {
  type Backlink,
  type SiteData,
} from "./KeywordAndAuthorityPanel";
import WorkflowAndTemplates from "./WorkflowAndTemplates";

function getWeekId(d = new Date()) {
  const start = new Date(d);
  start.setDate(d.getDate() - d.getDay());
  start.setHours(0, 0, 0, 0);
  return start.toISOString().slice(0, 10);
}

export default function SEOPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checkingSession, setCheckingSession] = useState(true);

  const [keywords, setKeywords] = useState<TrackedKeyword[]>([]);
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [backlinks, setBacklinks] = useState<Backlink[]>([]);
  const [reportData, setReportData] = useState<WeeklyReportApiResult | null>(null);
  const [reportNetError, setReportNetError] = useState<string | null>(null);
  const [reportLoading, setReportLoading] = useState(false);

  const [competitorsData, setCompetitorsData] = useState<CompetitorsPayload | null>(null);
  const [competitorsLoading, setCompetitorsLoading] = useState(false);
  const [competitorsRefreshing, setCompetitorsRefreshing] = useState(false);

  const [loading, setLoading] = useState(true);
  const [feedErrors, setFeedErrors] = useState<Record<string, string>>({});

  // Skip the password screen when the 30-day login cookie is still valid.
  useEffect(() => {
    fetch("/api/seo-login", { cache: "no-store" })
      .then((r) => r.json())
      .then((b: { authenticated?: boolean }) => {
        if (b.authenticated) setAuthenticated(true);
      })
      .catch(() => {})
      .finally(() => setCheckingSession(false));
  }, []);

  const loadWeeklyReport = useCallback(async (refresh = false) => {
    setReportLoading(true);
    setReportNetError(null);
    try {
      const res = await fetch(`/api/seo/weekly-report${refresh ? "?refresh=1" : ""}`, { cache: "no-store" });
      if (res.status === 401) {
        setReportNetError("Your session expired. Reload the page and sign in again.");
        return;
      }
      setReportData((await res.json()) as WeeklyReportApiResult);
    } catch (e) {
      setReportNetError(e instanceof Error ? e.message : "Network error");
    } finally {
      setReportLoading(false);
    }
  }, []);

  const loadCompetitors = useCallback(async (refresh = false) => {
    if (refresh) setCompetitorsRefreshing(true);
    else setCompetitorsLoading(true);
    try {
      const res = await fetch(`/api/seo/competitors${refresh ? "?refresh=1" : ""}`, { cache: "no-store" });
      if (res.status === 401) {
        setCompetitorsData({
          success: false,
          status: "unavailable",
          location: "Miami, Florida, United States",
          rows: [],
          trackedSpanishCount: 0,
          error: "Session expired. Reload and sign in again.",
          fetchedAt: new Date().toISOString(),
        });
        return;
      }
      setCompetitorsData((await res.json()) as CompetitorsPayload);
    } catch (e) {
      setCompetitorsData({
        success: false,
        status: "unavailable",
        location: "Miami, Florida, United States",
        rows: [],
        trackedSpanishCount: 0,
        error: e instanceof Error ? e.message : "Network error",
        fetchedAt: new Date().toISOString(),
      });
    } finally {
      setCompetitorsLoading(false);
      setCompetitorsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    if (!authenticated) return;
    let alive = true;

    async function loadAll() {
      const mangoolsFeeds: Array<[string, string, (body: Record<string, unknown>) => void]> = [
        ["rankings", "/api/mangools/rankings", (b) => setKeywords((b.keywords as TrackedKeyword[]) || [])],
        ["site", "/api/mangools/site", (b) => setSiteData(b as unknown as SiteData)],
        ["backlinks", "/api/mangools/backlinks", (b) => setBacklinks((b.links as Backlink[]) || [])],
      ];

      await Promise.all([
        ...mangoolsFeeds.map(async ([name, url, apply]) => {
          try {
            const res = await fetch(url, { cache: "no-store" });
            const body = (await res.json()) as Record<string, unknown>;
            if (!alive) return;
            if (res.ok && body.success) apply(body);
            else setFeedErrors((e) => ({ ...e, [name]: String(body.details || body.error || `HTTP ${res.status}`) }));
          } catch (err) {
            if (alive) {
              setFeedErrors((e) => ({ ...e, [name]: err instanceof Error ? err.message : "Network error" }));
            }
          }
        }),
        loadWeeklyReport(false),
        loadCompetitors(false),
      ]);
      if (alive) setLoading(false);
    }

    loadAll();
    return () => {
      alive = false;
    };
  }, [authenticated, loadWeeklyReport, loadCompetitors]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/seo-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) setAuthenticated(true);
      else setError("Incorrect password");
    } catch {
      setError("Login failed");
    }
  };

  if (!authenticated && checkingSession) {
    return <div className="min-h-screen bg-[#f5f6f3] flex items-center justify-center text-sm text-slate-400">Loading…</div>;
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#f5f6f3] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 w-full max-w-md shadow-xl">
          <h1 className="font-serif text-2xl font-bold text-[#0B1D36] mb-2 text-center">SEO Control Center</h1>
          <p className="text-xs text-slate-500 text-center mb-7">Rewired Ketamine · Private Clinic Dashboard</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-800 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
          {error && <p className="text-rose-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3.5 rounded-2xl transition">
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  const okReport: Report | null = reportData?.status === "ok" ? reportData : null;
  const activeKeywords: TrackedKeyword[] | null = keywords.length > 0 ? keywords : null;

  const competitorRows = buildCompetitorComparison({
    competitorsPayload: competitorsData
      ? { status: competitorsData.status, rows: competitorsData.rows }
      : null,
    report: okReport,
    keywords: activeKeywords,
  });

  const weeklyActions = generateWeeklyActions({
    report: okReport,
    keywords: activeKeywords,
    competitors: competitorRows,
  });

  const actionWeekKey = okReport ? okReport.thisWeek.start : getWeekId();

  return (
    <div className="min-h-screen bg-[#f5f6f3] text-slate-700">
      {/* Top bar */}
      <header className="bg-white/90 backdrop-blur border-b border-slate-200/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/"
              className="shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition"
            >
              ← Home
            </Link>
            <div className="min-w-0">
              <h1 className="font-serif text-base sm:text-xl font-bold text-[#0B1D36] truncate">
                SEO Control Center
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://grok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-500 text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition"
            >
              Talk to Grok
            </a>
            <button
              type="button"
              onClick={async () => {
                await fetch("/api/seo-login", { method: "DELETE" }).catch(() => {});
                setAuthenticated(false);
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-16">
        {/* 1. Tiny connection health strip (auto-expands only if something is broken) */}
        <ApiStatus />

        {/* 2. Compact Scorecard */}
        <Scorecard
          report={okReport}
          reportStatus={reportData?.status ?? null}
          keywords={activeKeywords}
          loading={loading || reportLoading}
        />

        {/* 3. Do This Week (3-5 prioritized concrete actions) */}
        <ActionPlan
          actions={weeklyActions}
          loading={(loading || reportLoading) && weeklyActions.length === 0}
          weekKey={actionWeekKey}
        />

        {/* 4. Miami Competitors (Core money keywords + tracked Spanish) */}
        <CompetitorTable
          rows={competitorRows}
          serpStatus={competitorsData?.status ?? null}
          serpError={competitorsData?.error ?? null}
          location={competitorsData?.location ?? null}
          fetchedAt={competitorsData?.fetchedAt ?? null}
          cached={competitorsData?.cached}
          loading={competitorsLoading && !competitorsData}
          refreshing={competitorsRefreshing}
          onRefresh={() => loadCompetitors(true)}
        />

        {/* 5. Collapsed noise: Social plan, Detailed Search Console, Raw Keywords/Authority, Checklists/Templates */}
        <SocialWeek />

        <WeeklyReport
          data={reportData}
          loading={reportLoading}
          netError={reportNetError}
          onRefresh={() => loadWeeklyReport(true)}
        />

        <KeywordAndAuthorityPanel
          keywords={keywords}
          siteData={siteData}
          backlinks={backlinks}
          loading={loading}
          feedErrors={feedErrors}
        />

        <WorkflowAndTemplates />
      </main>
    </div>
  );
}
