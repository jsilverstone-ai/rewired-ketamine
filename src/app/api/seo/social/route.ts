import { NextResponse } from "next/server";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { WEEKS } from "@/data/social";
import { validateSocialWeek } from "@/data/social/schema";

export const dynamic = "force-dynamic";

// GET /api/seo/social            -> latest week + list of available weeks
// GET /api/seo/social?week=YYYY-MM-DD -> that week
export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();

  const weeks = [...WEEKS].sort((a, b) => b.weekOf.localeCompare(a.weekOf));
  const available = weeks.map((w) => ({ weekOf: w.weekOf, theme: w.theme ?? null, posts: w.posts?.length ?? 0, carousels: w.carousels?.length ?? 0 }));
  const requested = new URL(request.url).searchParams.get("week");
  const week = requested ? weeks.find((w) => w.weekOf === requested) : weeks[0];

  if (!week) {
    return NextResponse.json(
      { status: weeks.length === 0 ? "empty" : "not-found", available, week: null, problems: [] },
      { headers: { "Cache-Control": "private, no-store" } }
    );
  }
  return NextResponse.json(
    { status: "ok", available, week, problems: validateSocialWeek(week) },
    { headers: { "Cache-Control": "private, no-store" } }
  );
}
