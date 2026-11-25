import { NextRequest, NextResponse } from "next/server";
import { SEO_AUTH_COOKIE, isSeoAuthenticated, seoAuthToken } from "@/lib/seo-auth";

// GET: is the current browser already signed in? Lets /seo skip the password
// screen on reload while the 30-day cookie is valid.
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { authenticated: isSeoAuthenticated(req) },
    { headers: { "Cache-Control": "private, no-store" } }
  );
}

// DELETE: sign out.
export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(SEO_AUTH_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return response;
}

export async function POST(req: NextRequest) {
  let password: unknown = null;
  try {
    ({ password } = await req.json());
  } catch {
    return NextResponse.json({ success: false, message: "Bad request" }, { status: 400 });
  }

  const correctPassword = process.env.SEO_DASHBOARD_PASSWORD;

  if (!correctPassword) {
    return NextResponse.json(
      { success: false, message: "Password not configured" },
      { status: 500 }
    );
  }

  if (password === correctPassword) {
    const response = NextResponse.json({ success: true });

    response.cookies.set(SEO_AUTH_COOKIE, seoAuthToken(correctPassword), {
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