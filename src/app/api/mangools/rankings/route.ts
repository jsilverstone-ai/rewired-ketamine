import { NextResponse } from "next/server";

const TRACKING_ID = "6a85bf233ecfef48782cb181";
const API_BASE = "https://api.mangools.com/v3";

export async function GET() {
  const apiKey = process.env.MANGOOLS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "MANGOOLS_API_KEY is not set" }, { status: 500 });
  }

  try {
    const res = await fetch(
      `${API_BASE}/serpwatcher/trackings/${TRACKING_ID}/tracked-keywords`,
      {
        headers: { "x-access-token": apiKey },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `Mangools error ${res.status}`, details: await res.text() },
        { status: 502 }
      );
    }

    const raw = await res.json();
    const list = Array.isArray(raw) ? raw : raw.data || [];

    const keywords = list.map((item: any) => ({
      keyword: item.kw || item.keyword || "",
      rank: item.rank ?? null,
      previousRank: item.previous_rank ?? item.prev_rank ?? null,
      searchVolume: item.sv ?? item.search_volume ?? null,
      url: item.url || item.ranking_url || null,
    }));

    return NextResponse.json({
      success: true,
      count: keywords.length,
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