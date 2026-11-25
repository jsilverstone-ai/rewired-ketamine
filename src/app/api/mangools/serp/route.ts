import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { MIAMI_LOCATION_ID, PLATFORM_MOBILE, mangoolsErrorResponse, mangoolsFetch } from "@/lib/mangools";
import { normalizeSerpItems } from "@/lib/competitors";

type SerpItem = {
  type?: string;
  url?: string;
  title?: string;
  domain?: string;
  m?: { moz?: { v?: { pda?: number | null } } };
};
type SerpResponse = { kw?: string; location?: { label?: string }; items?: SerpItem[] };

// SERPChecker results for one keyword, localized to Miami, FL.
// Normalized to { success, organic: [{ position, title, domain, url }] } for the dashboard.
// Cached 24 hours per keyword via Next Data Cache + L1 memory cache (each lookup spends quota).
const cache = new Map<string, { at: number; body: unknown }>();
const TTL_MS = 24 * 60 * 60 * 1000;

const fetchCachedSingleSerp = unstable_cache(
  async (kw: string) => {
    const qs = new URLSearchParams({ kw, location_id: String(MIAMI_LOCATION_ID), platform_id: String(PLATFORM_MOBILE) });
    const data = await mangoolsFetch<SerpResponse>(`/serpchecker/serps?${qs}`, undefined, "default");
    const { ourSerpPosition, hasLocalPack, organic } = normalizeSerpItems(data.items);
    return {
      success: true,
      keyword: kw,
      location: data.location?.label ?? "Miami, Florida, United States",
      platform: "mobile" as const,
      ourPosition: ourSerpPosition,
      hasLocalPack,
      organic,
      fetchedAt: new Date().toISOString(),
    };
  },
  ["mangools-single-serp-v2-mobile"],
  { revalidate: 86400 }
);

export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();

  const { searchParams } = new URL(request.url);
  const kw = (searchParams.get("kw") || "ketamine clinic miami").trim().slice(0, 120);
  const refresh = searchParams.get("refresh") === "1";

  const hit = cache.get(kw);
  if (!refresh && hit && Date.now() - hit.at < TTL_MS) return NextResponse.json(hit.body);

  try {
    const body = refresh
      ? await (async () => {
          const qs = new URLSearchParams({ kw, location_id: String(MIAMI_LOCATION_ID), platform_id: String(PLATFORM_MOBILE) });
          const data = await mangoolsFetch<SerpResponse>(`/serpchecker/serps?${qs}`, undefined, "no-store");
          const { ourSerpPosition, hasLocalPack, organic } = normalizeSerpItems(data.items);
          return {
            success: true,
            keyword: kw,
            location: data.location?.label ?? "Miami, Florida, United States",
      platform: "mobile" as const,
            ourPosition: ourSerpPosition,
            hasLocalPack,
            organic,
            fetchedAt: new Date().toISOString(),
          };
        })()
      : await fetchCachedSingleSerp(kw);

    cache.set(kw, { at: Date.now(), body });
    return NextResponse.json(body);
  } catch (error: unknown) {
    const { body, status } = mangoolsErrorResponse(error);
    return NextResponse.json(body, { status });
  }
}
