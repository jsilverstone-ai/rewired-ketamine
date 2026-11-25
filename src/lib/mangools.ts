// Shared Mangools API v3 client for the /seo dashboard routes.
// Docs: https://apidocs.mangools.com (spec: https://api.mangools.com/v3/openapi.json)

export const MANGOOLS_API = "https://api.mangools.com/v3";
export const MANGOOLS_DOMAIN = "rewiredketamine.com";
export const SERPWATCHER_TRACKING_ID = "6a9ef04c556f519f568cba28";
// Google location id for Miami, Florida (from /v3/mangools/locations?query=Miami).
export const MIAMI_LOCATION_ID = 1015116;

// Core money keywords tracked in the Miami Competitor view.
export const CORE_MONEY_KEYWORDS = [
  "ketamine clinic miami",
  "ketamine therapy miami",
  "ketamine treatment miami",
  "ketamine infusion miami",
  "ketamine miami",
  "ketamine clinic aventura",
  "ketamine clinic near me",
] as const;

export function isSpanishKeyword(kw: string): boolean {
  const s = kw.toLowerCase();
  return (
    s.includes("ketamina") ||
    s.includes("clinica") ||
    s.includes("clínica") ||
    s.includes("terapia") ||
    s.includes("espanol") ||
    s.includes("español") ||
    s.includes("depresion") ||
    s.includes("depresión") ||
    s.includes("ansiedad")
  );
}

export class MangoolsError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
    this.name = "MangoolsError";
  }
}

export async function mangoolsFetch<T>(
  path: string,
  init?: RequestInit,
  cacheMode: "no-store" | "default" = "no-store"
): Promise<T> {
  const apiKey = process.env.MANGOOLS_API_KEY;
  if (!apiKey) throw new MangoolsError("MANGOOLS_API_KEY is not set", 500);
  const fetchInit: RequestInit = {
    ...init,
    headers: { "x-access-token": apiKey, "Content-Type": "application/json", ...(init?.headers ?? {}) },
    signal: AbortSignal.timeout(25000),
  };
  if (cacheMode === "no-store") {
    fetchInit.cache = "no-store";
  }
  const res = await fetch(`${MANGOOLS_API}${path}`, fetchInit);
  if (!res.ok) {
    let detail = "";
    try {
      const body = (await res.json()) as { error?: { message?: string } };
      if (body.error?.message) detail = `: ${body.error.message}`;
    } catch {
      /* non-JSON error body */
    }
    throw new MangoolsError(`Mangools ${path.split("?")[0]} returned ${res.status}${detail}`, res.status);
  }
  return (await res.json()) as T;
}

export function mangoolsErrorResponse(error: unknown) {
  const status = error instanceof MangoolsError && error.status === 500 ? 500 : 502;
  return {
    body: {
      success: false,
      error: error instanceof MangoolsError && error.status === 500 ? error.message : "Failed to reach Mangools API",
      details: error instanceof Error ? error.message : String(error),
    },
    status,
  };
}
