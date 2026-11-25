import { NextResponse } from "next/server";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { mangoolsErrorResponse } from "@/lib/mangools";
import { loadPreferredRankings } from "@/lib/serpwatcher";

export const dynamic = "force-dynamic";

// Lists every SERPWatcher tracking for rewiredketamine.com and returns Mobile
// ranks for Miami and Aventura (device is fixed per tracking; see serpwatcher.ts).
export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();

  try {
    const payload = await loadPreferredRankings("no-store");
    return NextResponse.json(payload, { headers: { "Cache-Control": "private, no-store" } });
  } catch (error: unknown) {
    const { body, status } = mangoolsErrorResponse(error);
    return NextResponse.json(body, { status });
  }
}
