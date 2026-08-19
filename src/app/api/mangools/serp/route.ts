import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://api.mangools.com/v3";
const DEFAULT_LOCATION_ID = 2840; // United States
const DEFAULT_KEYWORD = "ketamine clinic miami";

export async function GET(request: NextRequest) {
  const apiKey = process.env.MANGOOLS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "MANGOOLS_API_KEY is not set" }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("kw") || DEFAULT_KEYWORD;
  const locationId = searchParams.get("location_id") || DEFAULT_LOCATION_ID;

  try {
    const res = await fetch(
      `${API_BASE}/serpchecker/serps?kw=${encodeURIComponent(keyword)}&location_id=${locationId}`,
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

    const data = await res.json();

    // Extract clean organic + map pack results
    const items = data.items || data.serp_results || [];
    const organic = items
      .filter((item: any) => item.type === "ORGANIC" || item.type === "organic")
      .slice(0, 10)
      .map((item: any, index: number) => ({
        position: index + 1,
        title: item.title || null,
        url: item.url || null,
        description: item.desc || item.description || null,
        domain: item.domain || null,
      }));

    const mapPack = items
      .filter((item: any) => item.type === "MAP_PACK" || item.type === "map_pack")
      .flatMap((item: any) => item.items || [])
      .slice(0, 5)
      .map((place: any) => ({
        title: place.title || null,
        url: place.url || null,
      }));

    return NextResponse.json({
      success: true,
      keyword,
      locationId,
      organic,
      mapPack,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to reach Mangools API", details: error.message },
      { status: 500 }
    );
  }
}