import { NextResponse } from "next/server";

const API_BASE = "https://api.mangools.com/v3";
const DOMAIN = "rewiredketamine.com";

export async function GET() {
  const apiKey = process.env.MANGOOLS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "MANGOOLS_API_KEY is not set" },
      { status: 500 }
    );
  }

  try {
    // Get a clean sample of backlinks (1 per referring domain is usually best)
    const res = await fetch(
      `${API_BASE}/linkminer/links?url=${DOMAIN}&source=0&page=0&links_per_domain=1`,
      {
        headers: {
          "x-access-token": apiKey,
          "Content-Type": "application/json",
        },
        next: { revalidate: 86400 }, // cache 24 hours
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: `Mangools error ${res.status}`, details: errorText },
        { status: 502 }
      );
    }

    const data = await res.json();

    // Clean it up a bit for the dashboard
    const links = (data.links || []).slice(0, 20).map((link: any) => ({
      source: link.source || link.source_url || null,
      anchor: link.anchor || null,
      type: link.type || null,
      noFollow: link.no_follow === "true" || link.no_follow === true,
      sourceTF: link.source_tf ?? null,
      sourceCF: link.source_cf ?? null,
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