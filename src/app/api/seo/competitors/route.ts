import { NextResponse } from "next/server";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { loadCompetitors } from "@/lib/competitors";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();

  const refresh = new URL(request.url).searchParams.get("refresh") === "1";
  const payload = await loadCompetitors(refresh);
  return NextResponse.json(payload, { headers: { "Cache-Control": "private, no-store" } });
}
