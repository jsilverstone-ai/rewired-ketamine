import { NextResponse } from "next/server";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { GSC_SITE, GscNotConfiguredError, gscServiceAccountEmail, listSitemaps } from "@/lib/gsc";
import { mangoolsFetch, MANGOOLS_DOMAIN, SERPWATCHER_TRACKING_ID } from "@/lib/mangools";

export const dynamic = "force-dynamic";

type Check = { name: string; route: string; status: "ok" | "error" | "not-configured"; detail: string; ms: number };

async function timed(name: string, route: string, fn: () => Promise<string>): Promise<Check> {
  const t0 = Date.now();
  try {
    const detail = await fn();
    return { name, route, status: "ok", detail, ms: Date.now() - t0 };
  } catch (error: unknown) {
    const notConfigured = error instanceof GscNotConfiguredError || (error instanceof Error && error.message.includes("is not set"));
    return {
      name,
      route,
      status: notConfigured ? "not-configured" : "error",
      detail: error instanceof Error ? error.message : String(error),
      ms: Date.now() - t0,
    };
  }
}

// One-call health check for every upstream the dashboard depends on.
// Uses only cheap/free Mangools endpoints where possible (SERPWatcher detail is free;
// SiteProfiler/LinkMiner/SERPChecker lookups would burn quota, so they are checked
// only for a configured key here and exercised by their own routes).
export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();

  const key = process.env.MANGOOLS_API_KEY;
  const checks = await Promise.all([
    timed("Mangools rank tracking (SERPWatcher)", "/api/mangools/rankings", async () => {
      const data = await mangoolsFetch<{ keywords?: unknown[] }>(`/serpwatcher/trackings/${SERPWATCHER_TRACKING_ID}/detail`);
      return `${data.keywords?.length ?? 0} tracked keywords`;
    }),
    timed("Mangools API key", "/api/mangools/site, /backlinks, /serp", async () => {
      if (!key) throw new Error("MANGOOLS_API_KEY is not set");
      // Free endpoint: validates the key without spending lookups.
      await mangoolsFetch(`/siteprofiler/requests`);
      return `key valid (${MANGOOLS_DOMAIN})`;
    }),
    timed("Google Search Console", "/api/seo/weekly-report", async () => {
      const maps = await listSitemaps();
      return `${GSC_SITE} reachable as ${gscServiceAccountEmail()} (${maps.length} sitemaps)`;
    }),
    timed("Dashboard password", "/api/seo-login", async () => {
      if (!process.env.SEO_DASHBOARD_PASSWORD) throw new Error("SEO_DASHBOARD_PASSWORD is not set");
      return "configured";
    }),
  ]);

  return NextResponse.json({ checks, checkedAt: new Date().toISOString() }, { headers: { "Cache-Control": "private, no-store" } });
}
