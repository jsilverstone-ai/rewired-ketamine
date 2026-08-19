import { NextResponse } from "next/server";

const API_BASE = "https://api.mangools.com/v3";
const DOMAIN = "rewiredketamine.com";

export async function GET() {
  const apiKey = process.env.MANGOOLS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "MANGOOLS_API_KEY is not set" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `${API_BASE}/linkminer/links?url=${DOMAIN}&source=0&page=0&links_per_domain=1`,
      {
        headers: { "x-access-token": apiKey },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `Mangools error ${res.status}`, details: await res.text() },
        { status: 502 }
      );
    }

    const data = await res.json();

    const links = (data.links || []).slice(0, 15).map((link: any) => ({
      source: link.source || null,
      anchor: link.anchor || null,
      noFollow: link.no_follow === "true" || link.no_follow === true,
      trustFlow: link.source_tf ?? null,
      citationFlow: link.source_cf ?? null,
      firstSeen: link.first_seen || null,
      lastSeen: link.last_seen || null,
    }));

    return NextResponse.json({
      success: true,
      domain: DOMAIN,
      availableLinks: data.available_links ?? null,
      count: links.length,
      links,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to reach Mangools API", details: error.message },
      { status: 500 }
    );
  }
}