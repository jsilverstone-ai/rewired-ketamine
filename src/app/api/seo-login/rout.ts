import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  const correctPassword = process.env.SEO_DASHBOARD_PASSWORD;

  if (!correctPassword) {
    return NextResponse.json(
      { success: false, message: "Password not configured" },
      { status: 500 }
    );
  }

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true });

    response.cookies.set("seo_auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Incorrect password" },
    { status: 401 }
  );
}