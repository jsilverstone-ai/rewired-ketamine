import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://api.mangools.com/v3";

// Default location = United States (you can change later to a more local ID if needed)
const DEFAULT_LOCATION_ID = 2840; // United States
const DEFAULT_KEYWORD = "ketamine clinic miami";

export async function GET(request: NextRequest) {
  const apiKey = process.env.MANGOOLS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "MANGOOLS_API_KEY is not set" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("kw") || DEFAULT_KEYWORD;
  const locationId = searchParams.get("location_id") || DEFAULT_LOCATION_ID;

  try {
    const url = `${API_BASE}/serpchecker/serps?kw=${encodeURIComponent(
      keyword
    )}&location_id=${locationId}`;

    const res = await fetch(url, {
      headers: {
        "x-access-token": apiKey,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }, // cache 1 hour
    });

    if (!res.ok) {
      const errorText = await res.text();
      return NextResponse.json(
        { error: `Mangools error ${res.status}`, details: errorText },
        { status: 502 }
      );
    }

    const data = await res.json();

    return NextResponse.json({
      success: true,
      keyword,
      locationId,
      data,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to reach Mangools API", details: error.message },
      { status: 500 }
    );
  }
}
