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
    const res = await fetch(
      `${API_BASE}/siteprofiler/overview?url=${DOMAIN}`,
      {
        headers: {
          "x-access-token": apiKey,
          "Content-Type": "application/json",
        },
        next: { revalidate: 86400 }, // cache for 24 hours
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

    return NextResponse.json({
      success: true,
      domain: DOMAIN,
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