import { NextResponse } from "next/server";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { MANGOOLS_DOMAIN, mangoolsErrorResponse, mangoolsFetch } from "@/lib/mangools";

type Overview = {
  moz?: { pda?: number | null; upa?: number | null } | null;
  majestic?: { Status?: string; CitationFlow?: number; TrustFlow?: number; RefIPs?: number } | null;
};

// SiteProfiler overview. In Mangools/Moz terms pda = Domain Authority, upa = Page Authority.
// Results are cached for 6 hours (each lookup spends Mangools quota).
let cache: { at: number; body: unknown } | null = null;
const TTL_MS = 6 * 60 * 60 * 1000;

export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();
  if (cache && Date.now() - cache.at < TTL_MS) return NextResponse.json(cache.body);

  try {
    const data = await mangoolsFetch<Overview>(`/siteprofiler/overview?url=${encodeURIComponent(MANGOOLS_DOMAIN)}`);
    const moz = data.moz ?? {};
    const majestic = data.majestic ?? {};
    const body = {
      success: true,
      domain: MANGOOLS_DOMAIN,
      domainAuthority: moz.pda ?? null,
      pageAuthority: moz.upa ?? null,
      citationFlow: majestic.CitationFlow ?? null,
      trustFlow: majestic.TrustFlow ?? null,
      referringIPs: majestic.RefIPs ?? null,
      fetchedAt: new Date().toISOString(),
    };
    cache = { at: Date.now(), body };
    return NextResponse.json(body);
  } catch (error: unknown) {
    const { body, status } = mangoolsErrorResponse(error);
    return NextResponse.json(body, { status });
  }
}
