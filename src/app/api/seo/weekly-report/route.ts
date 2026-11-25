import { NextResponse } from "next/server";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { GSC_SITE, GscNotConfiguredError, gscServiceAccountEmail, listSitemaps, searchAnalytics } from "@/lib/gsc";
import { buildWeeklyReport } from "@/lib/weekly-report";

export const dynamic = "force-dynamic";

// Search Console data only changes once a day, so keep a computed report for an
// hour per server instance. ?refresh=1 forces a fresh pull.
const TTL_MS = 60 * 60 * 1000;
let cache: { at: number; body: unknown } | null = null;

export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();

  const refresh = new URL(request.url).searchParams.get("refresh") === "1";
  if (!refresh && cache && Date.now() - cache.at < TTL_MS) {
    return NextResponse.json({ ...(cache.body as object), cached: true }, { headers: { "Cache-Control": "private, no-store" } });
  }

  try {
    const report = await buildWeeklyReport({ searchAnalytics, listSitemaps }, GSC_SITE);
    cache = { at: Date.now(), body: report };
    return NextResponse.json(report, { headers: { "Cache-Control": "private, no-store" } });
  } catch (error: unknown) {
    if (error instanceof GscNotConfiguredError) {
      return NextResponse.json(
        { status: "not-connected", message: error.message, serviceAccount: gscServiceAccountEmail(), site: GSC_SITE },
        { status: 200, headers: { "Cache-Control": "private, no-store" } }
      );
    }
    // Serve the last good report if Google is having a bad moment.
    if (cache) {
      return NextResponse.json(
        { ...(cache.body as object), cached: true, stale: true, staleReason: error instanceof Error ? error.message : String(error) },
        { headers: { "Cache-Control": "private, no-store" } }
      );
    }
    return NextResponse.json(
      { status: "error", message: error instanceof Error ? error.message : String(error) },
      { status: 502, headers: { "Cache-Control": "private, no-store" } }
    );
  }
}
