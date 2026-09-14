import { NextResponse } from "next/server";

const API_BASE = "https://api.mangools.com/v3";

export async function GET(request: Request) {
  const apiKey = process.env.MANGOOLS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "MANGOOLS_API_KEY is not set" },
      { status: 500 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const kw = searchParams.get("kw") || "ketamine clinic miami";
    const url = `${API_BASE}/serpchecker/serps?kw=${encodeURIComponent(kw)}`;

    const res = await fetch(url, {
      headers: {
        "x-access-token": apiKey,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch SERP data" },
      { status: 500 }
    );
  }
}