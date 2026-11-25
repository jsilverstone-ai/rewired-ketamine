import { createHash, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

export const SEO_AUTH_COOKIE = "seo_auth";

// The cookie holds a hash derived from SEO_DASHBOARD_PASSWORD, so it cannot be
// guessed or copied from the source code. Changing the password signs
// everyone out.
export function seoAuthToken(password: string): string {
  return createHash("sha256").update(`rewired-seo-dashboard:${password}`).digest("hex");
}

function readCookie(request: Request, name: string): string | null {
  const header = request.headers.get("cookie");
  if (!header) return null;
  for (const part of header.split(";")) {
    const [key, ...rest] = part.trim().split("=");
    if (key === name) return decodeURIComponent(rest.join("="));
  }
  return null;
}

export function isSeoAuthenticated(request: Request): boolean {
  const password = process.env.SEO_DASHBOARD_PASSWORD;
  if (!password) return false;
  const cookie = readCookie(request, SEO_AUTH_COOKIE);
  if (!cookie) return false;
  const expected = Buffer.from(seoAuthToken(password));
  const actual = Buffer.from(cookie);
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}

export function unauthorized() {
  return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
}
