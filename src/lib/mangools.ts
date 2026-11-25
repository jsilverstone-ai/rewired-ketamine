// Shared Mangools API v3 client for the /seo dashboard routes.
// Docs: https://apidocs.mangools.com (spec: https://api.mangools.com/v3/openapi.json)

export const MANGOOLS_API = "https://api.mangools.com/v3";
export const MANGOOLS_DOMAIN = "rewiredketamine.com";
export const SERPWATCHER_TRACKING_ID = "6a9ef04c556f519f568cba28";
// Google location id for Miami, Florida (from /v3/mangools/locations?query=Miami).
export const MIAMI_LOCATION_ID = 1015116;

export class MangoolsError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message);
    this.name = "MangoolsError";
  }
}

export async function mangoolsFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const apiKey = process.env.MANGOOLS_API_KEY;
  if (!apiKey) throw new MangoolsError("MANGOOLS_API_KEY is not set", 500);
  const res = await fetch(`${MANGOOLS_API}${path}`, {
    ...init,
    headers: { "x-access-token": apiKey, "Content-Type": "application/json", ...(init?.headers ?? {}) },
    cache: "no-store",
    signal: AbortSignal.timeout(25000),
  });
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
