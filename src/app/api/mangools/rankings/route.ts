import { NextResponse } from "next/server";

const TRACKING_ID = "6a85bf233ecfef48782cb181";
const API_BASE = "https://api.mangools.com/v3";

export async function GET() {
  const apiKey = process.env.MANGOOLS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "MANGOOLS_API_KEY is not set" }, { status: 500 });
  }

  try {
    // Try multiple endpoints until we get real rank data
    const endpoints = [
      `${API_BASE}/serpwatcher/trackings/${TRACKING_ID}/stats`,
      `${API_BASE}/serpwatcher/trackings/${TRACKING_ID}/detail`,
      `${API_BASE}/serpwatcher/trackings/${TRACKING_ID}`,
      `${API_BASE}/serpwatcher/trackings/${TRACKING_ID}/tracked-keywords`,
    ];

    let raw: any = null;
    let usedEndpoint = "";

    for (const url of endpoints) {
      const res = await fetch(url, {
        headers: {
          "x-access-token": apiKey,
          "Content-Type": "application/json",
        },
        next: { revalidate: 1800 },
      });

      if (res.ok) {
        raw = await res.json();
        usedEndpoint = url;
        break;
      }
    }

    if (!raw) {
      return NextResponse.json({ error: "Could not fetch ranking data from any endpoint" }, { status: 502 });
    }

    // Try to extract keywords from different possible structures
    let list: any[] = [];

    if (Array.isArray(raw)) {
      list = raw;
    } else if (Array.isArray(raw.data)) {
      list = raw.data;
    } else if (Array.isArray(raw.keywords)) {
      list = raw.keywords;
    } else if (Array.isArray(raw.tracked_keywords)) {
      list = raw.tracked_keywords;
    } else if (raw.stats && Array.isArray(raw.stats)) {
      list = raw.stats;
    } else {
      // Return the raw response so we can inspect it
      return NextResponse.json({
        success: false,
        message: "Unexpected response structure",
        usedEndpoint,
        raw,
      });
    }

    const keywords = list.map((item: any) => ({
      keyword: item.kw || item.keyword || item.name || "",
      rank: item.rank ?? item.position ?? item.current_rank ?? item.r ?? null,
      previousRank: item.previous_rank ?? item.prev_rank ?? item.previousRank ?? null,
      searchVolume: item.sv ?? item.search_volume ?? item.search ?? null,
      url: item.url || item.ranking_url || item.rankingUrl || null,
    }));

    return NextResponse.json({
      success: true,
      count: keywords.length,
      usedEndpoint,
      keywords,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to reach Mangools API", details: error.message },
      { status: 500 }
    );
  }
}