import { NextResponse } from "next/server";

const API_BASE = "https://api.mangools.com/v3";
const DOMAIN = "rewiredketamine.com";

export async function GET() {
  const apiKey = process.env.MANGOOLS_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "MANGOOLS_API_KEY is not set" }, { status: 500 });
  }

  try {
        const url = `${API_BASE}/siteprofiler?url=${DOMAIN}`;
        const res = await fetch(url, {
          headers: {
            "x-access-token": apiKey,
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });
    const data = await res.json();
    const moz = data.moz || {};
    const majestic = data.majestic || {};

    return NextResponse.json({
      success: true,
      domain: DOMAIN,
      domainAuthority: moz.upa ?? null,
      pageAuthority: moz.pda ?? null,
      citationFlow: majestic.CitationFlow ?? null,
      trustFlow: majestic.TrustFlow ?? null,
      referringIPs: majestic.RefIPs ?? null,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to reach Mangools API", details: error.message },
      { status: 500 }
    );
  }
}