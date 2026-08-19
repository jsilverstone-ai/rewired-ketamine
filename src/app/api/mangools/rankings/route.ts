import { NextResponse } from "next/server";

const TRACKING_ID = "6a85bf233ecfef48782cb181";
const API_BASE = "https://api.mangools.com/v3";

export async function GET() {
  const apiKey = process.env.MANGOOLS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "MANGOOLS_API_KEY is not set" },
      { status: 500 }
    );
  }

  try {
    // Try the most common endpoints for tracked keywords / rankings
    const endpoints = [
      `${API_BASE}/serpwatcher/trackings/${TRACKING_ID}/tracked-keywords`,
      `${API_BASE}/serpwatcher/trackings/${TRACKING_ID}/stats`,
      `${API_BASE}/serpwatcher/trackings/${TRACKING_ID}`,
      `${API_BASE}/serpwatcher/trackings/${TRACKING_ID}/detail`,
    ];

    let data = null;
    let lastError = null;

    for (const url of endpoints) {
      const res = await fetch(url, {
        headers: {
          "x-access-token": apiKey,
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 }, // cache for 1 hour
      });

      if (res.ok) {
        data = await res.json();
        break;
      } else {
        lastError = `Status ${res.status} on ${url}`;
      }
    }

    if (!data) {
      return NextResponse.json(
        { error: "Could not fetch rankings", details: lastError },
        { status: 502 }
      );
    }

    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to reach Mangools API", details: error.message },
      { status: 500 }
    );
  }
}