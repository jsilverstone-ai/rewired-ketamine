import { NextResponse } from "next/server";
import { isSeoAuthenticated, unauthorized } from "@/lib/seo-auth";
import { MANGOOLS_DOMAIN, mangoolsErrorResponse, mangoolsFetch } from "@/lib/mangools";

type LinkMinerLink = {
  source?: string;
  anchor?: string;
  no_follow?: boolean | string;
  source_tf?: number;
  source_cf?: number;
  first_seen?: string;
  last_seen?: string;
};
type LinkMinerResponse = { meta?: { available_links?: number }; links?: LinkMinerLink[] };

// LinkMiner backlinks, one per referring domain. Cached 6 hours (spends quota).
let cache: { at: number; body: unknown } | null = null;
const TTL_MS = 6 * 60 * 60 * 1000;

export async function GET(request: Request) {
  if (!isSeoAuthenticated(request)) return unauthorized();
  if (cache && Date.now() - cache.at < TTL_MS) return NextResponse.json(cache.body);

  try {
    const qs = new URLSearchParams({ url: MANGOOLS_DOMAIN, source: "0", page: "0", links_per_domain: "1" });
    const data = await mangoolsFetch<LinkMinerResponse>(`/linkminer/links?${qs}`);
    const links = (data.links ?? []).slice(0, 15).map((link) => ({
      source: link.source || null,
      anchor: link.anchor || null,
      noFollow: link.no_follow === "true" || link.no_follow === true,
      trustFlow: link.source_tf ?? null,
      citationFlow: link.source_cf ?? null,
      firstSeen: link.first_seen || null,
      lastSeen: link.last_seen || null,
    }));
    const body = {
      success: true,
      domain: MANGOOLS_DOMAIN,
      availableLinks: data.meta?.available_links ?? null,
      count: links.length,
      links,
      fetchedAt: new Date().toISOString(),
    };
    cache = { at: Date.now(), body };
    return NextResponse.json(body);
  } catch (error: unknown) {
    const { body, status } = mangoolsErrorResponse(error);
    return NextResponse.json(body, { status });
  }
}
