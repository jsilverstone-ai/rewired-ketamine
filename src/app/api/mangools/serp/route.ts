import { NextResponse } from "next/server";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { MIAMI_LOCATION_ID, mangoolsErrorResponse, mangoolsFetch } from "@/lib/mangools";

type SerpItem = { type?: string; url?: string; title?: string; domain?: string };
type SerpResponse = { kw?: string; location?: { label?: string }; items?: SerpItem[] };

// SERPChecker results for one keyword, localized to Miami, FL.
// Normalized to { success, organic: [{ position, title, domain, url }] } for the dashboard.
// Cached 6 hours per keyword (each lookup spends quota).
const cache = new Map<string, { at: number; body: unknown }>();
const TTL_MS = 6 * 60 * 60 * 1000;

export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();

  const { searchParams } = new URL(request.url);
  const kw = (searchParams.get("kw") || "ketamine clinic miami").trim().slice(0, 120);
  const hit = cache.get(kw);
  if (hit && Date.now() - hit.at < TTL_MS) return NextResponse.json(hit.body);

  try {
    const qs = new URLSearchParams({ kw, location_id: String(MIAMI_LOCATION_ID) });
    const data = await mangoolsFetch<SerpResponse>(`/serpchecker/serps?${qs}`);
    const organic = (data.items ?? [])
      .filter((i) => i.type === "ORGANIC")
      .map((i, idx) => ({ position: idx + 1, title: i.title ?? null, domain: i.domain ?? null, url: i.url ?? null }));
    const ours = organic.find((o) => (o.domain ?? "").includes("rewiredketamine.com"));
    const body = {
      success: true,
      keyword: kw,
      location: data.location?.label ?? "Miami, Florida, United States",
      ourPosition: ours?.position ?? null,
      organic,
      fetchedAt: new Date().toISOString(),
    };
    cache.set(kw, { at: Date.now(), body });
    return NextResponse.json(body);
  } catch (error: unknown) {
    const { body, status } = mangoolsErrorResponse(error);
    return NextResponse.json(body, { status });
  }
}
