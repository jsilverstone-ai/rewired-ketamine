import { createSign } from "crypto";

// Minimal Google Search Console client for the private /seo dashboard.
// Auth: a Google Cloud service account whose JSON key is stored in the
// GSC_SERVICE_ACCOUNT_JSON env var (raw JSON or base64 of it). The service
// account's email must be added as a user on the Search Console property.
// No SDK dependency: we sign the OAuth JWT ourselves with Node's crypto.

export const GSC_SITE = process.env.GSC_SITE_URL || "sc-domain:rewiredketamine.com";
const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const API = "https://www.googleapis.com/webmasters/v3";

type ServiceAccount = { client_email: string; private_key: string; token_uri?: string };

export class GscNotConfiguredError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GscNotConfiguredError";
  }
}

export function readServiceAccount(): ServiceAccount {
  const raw = process.env.GSC_SERVICE_ACCOUNT_JSON;
  if (!raw || !raw.trim()) {
    throw new GscNotConfiguredError("GSC_SERVICE_ACCOUNT_JSON is not set");
  }
  let text = raw.trim();
  if (!text.startsWith("{")) {
    try {
      text = Buffer.from(text, "base64").toString("utf8");
    } catch {
      /* fall through to JSON.parse error */
    }
  }
  let parsed: Partial<ServiceAccount>;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new GscNotConfiguredError("GSC_SERVICE_ACCOUNT_JSON is not valid JSON");
  }
  if (!parsed.client_email || !parsed.private_key) {
    throw new GscNotConfiguredError("GSC_SERVICE_ACCOUNT_JSON is missing client_email or private_key");
  }
  return {
    client_email: parsed.client_email,
    // Keys pasted into env UIs sometimes arrive with literal "\n".
    private_key: parsed.private_key.replace(/\\n/g, "\n"),
    token_uri: parsed.token_uri,
  };
}

export function gscServiceAccountEmail(): string | null {
  try {
    return readServiceAccount().client_email;
  } catch {
    return null;
  }
}

function b64url(input: string | Buffer): string {
  return Buffer.from(input).toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}

let cachedToken: { token: string; expiresAt: number; email: string } | null = null;

async function accessToken(): Promise<string> {
  const sa = readServiceAccount();
  const now = Math.floor(Date.now() / 1000);
  if (cachedToken && cachedToken.email === sa.client_email && cachedToken.expiresAt - 60 > now) {
    return cachedToken.token;
  }
  const tokenUri = sa.token_uri || "https://oauth2.googleapis.com/token";
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = b64url(
    JSON.stringify({ iss: sa.client_email, scope: SCOPE, aud: tokenUri, iat: now, exp: now + 3600 })
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  let signature: string;
  try {
    signature = b64url(signer.sign(sa.private_key));
  } catch {
    throw new GscNotConfiguredError("The private_key in GSC_SERVICE_ACCOUNT_JSON could not be used to sign");
  }
  const res = await fetch(tokenUri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${header}.${claim}.${signature}`,
    }),
    cache: "no-store",
  });
  if (!res.ok) {
    let reason = "";
    try {
      const body = (await res.json()) as { error?: string; error_description?: string };
      reason = body.error_description || body.error || "";
    } catch {
      /* ignore */
    }
    // 400/401 here means the key itself is wrong, revoked, or the account was deleted.
    if (res.status === 400 || res.status === 401) {
      throw new GscNotConfiguredError(`Google rejected the service account key${reason ? `: ${reason}` : ""}. Create a new JSON key and update GSC_SERVICE_ACCOUNT_JSON.`);
    }
    throw new Error(`Google token exchange failed (${res.status})${reason ? `: ${reason}` : ""}`);
  }
  const data = (await res.json()) as { access_token?: string; expires_in?: number };
  if (!data.access_token) throw new Error("Google token exchange returned no access_token");
  cachedToken = { token: data.access_token, expiresAt: now + (data.expires_in ?? 3600), email: sa.client_email };
  return data.access_token;
}

async function gscFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = await accessToken();
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", ...(init?.headers ?? {}) },
    cache: "no-store",
    signal: AbortSignal.timeout(20000),
  });
  if (res.status === 403) {
    throw new GscNotConfiguredError(
      `The service account does not have access to ${GSC_SITE} yet. Add it as a user in Search Console → Settings → Users and permissions.`
    );
  }
  if (!res.ok) {
    let detail = "";
    try {
      const body = (await res.json()) as { error?: { message?: string } };
      detail = body.error?.message ? `: ${body.error.message}` : "";
    } catch {
      /* ignore */
    }
    throw new Error(`Search Console API ${res.status}${detail}`);
  }
  return (await res.json()) as T;
}

export type GscRow = { keys?: string[]; clicks: number; impressions: number; ctr: number; position: number };

export type GscQuery = {
  startDate: string;
  endDate: string;
  dimensions?: Array<"date" | "query" | "page" | "device" | "country">;
  rowLimit?: number;
  dataState?: "final" | "all";
};

export async function searchAnalytics(q: GscQuery): Promise<GscRow[]> {
  const site = encodeURIComponent(GSC_SITE);
  const body = { rowLimit: 25000, dataState: "final", ...q };
  const data = await gscFetch<{ rows?: GscRow[] }>(`/sites/${site}/searchAnalytics/query`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return data.rows ?? [];
}

export type GscSitemap = {
  path: string;
  lastSubmitted?: string;
  lastDownloaded?: string;
  isPending?: boolean;
  isSitemapsIndex?: boolean;
  warnings?: string;
  errors?: string;
  contents?: Array<{ type?: string; submitted?: string; indexed?: string }>;
};

export async function listSitemaps(): Promise<GscSitemap[]> {
  const site = encodeURIComponent(GSC_SITE);
  const data = await gscFetch<{ sitemap?: GscSitemap[] }>(`/sites/${site}/sitemaps`);
  return data.sitemap ?? [];
}
