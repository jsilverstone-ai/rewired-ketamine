import { revalidateTag, unstable_cache } from "next/cache";
import {
  CORE_MONEY_KEYWORDS,
  MIAMI_LOCATION_ID,
  MANGOOLS_DOMAIN,
  MangoolsError,
  SERPWATCHER_TRACKING_ID,
  isSpanishKeyword,
  mangoolsFetch,
} from "./mangools";

type SerpItem = {
  type?: string;
  url?: string;
  title?: string;
  domain?: string;
  m?: { moz?: { v?: { pda?: number | null } } };
};
type SerpResponse = {
  kw?: string;
  location?: { label?: string };
  items?: SerpItem[];
};
type DetailResponse = { keywords?: Array<{ kw?: string }> };

export type SerpCompetitor = {
  position: number;
  domain: string;
  label: string;
  title: string | null;
  url: string | null;
  da: number | null;
};

export type CompetitorRow = {
  keyword: string;
  isSpanish: boolean;
  ourSerpPosition: number | null;
  hasLocalPack: boolean;
  topCompetitors: SerpCompetitor[];
  error: string | null;
};

export type CompetitorsPayload = {
  success: boolean;
  status: "ok" | "partial" | "unavailable";
  location: string;
  rows: CompetitorRow[];
  trackedSpanishCount: number;
  error: string | null;
  cached?: boolean;
  fetchedAt: string;
};

const KNOWN_COMPETITOR_NAMES: Record<string, string> = {
  "rewiredketamine.com": "Rewired Ketamine",
  "nushama.com": "Nushama",
  "neomedicineinstitute.com": "NeoMedicine Institute",
  "ketamineclinicsouthflorida.com": "Ketamine Clinic South FL",
  "mindfulketamine.com": "Mindful Ketamine",
  "revivketamine.com": "Reviv Ketamine",
  "ketaminehealthcenters.com": "Ketamine Health Centers",
  "kalypsowellness.com": "Kalypso Wellness",
  "myketaminehome.com": "My Ketamine Home",
  "yelp.com": "Yelp",
  "psychologytoday.com": "Psychology Today",
  "healthgrades.com": "Healthgrades",
  "webmd.com": "WebMD",
  "reddit.com": "Reddit",
};

export function cleanDomain(domain: string | null | undefined, url: string | null | undefined): string {
  const raw = (domain || "").trim().toLowerCase().replace(/^www\./, "");
  if (raw) return raw;
  if (url) {
    try {
      return new URL(url).hostname.toLowerCase().replace(/^www\./, "");
    } catch {
      /* ignore */
    }
  }
  return "unknown";
}

export function competitorLabel(domain: string): string {
  if (KNOWN_COMPETITOR_NAMES[domain]) return KNOWN_COMPETITOR_NAMES[domain];
  for (const [known, label] of Object.entries(KNOWN_COMPETITOR_NAMES)) {
    if (domain.endsWith(`.${known}`)) return label;
  }
  return domain;
}

export function normalizeSerpItems(items: SerpItem[] | undefined): {
  ourSerpPosition: number | null;
  hasLocalPack: boolean;
  organic: SerpCompetitor[];
} {
  const list = items ?? [];
  const hasLocalPack = list.some((i) => i.type === "LOCAL_PACK");
  const organic: SerpCompetitor[] = list
    .filter((i) => i.type === "ORGANIC")
    .map((i, idx) => {
      const domain = cleanDomain(i.domain, i.url);
      const da = typeof i.m?.moz?.v?.pda === "number" ? i.m.moz.v.pda : null;
      return {
        position: idx + 1,
        domain,
        label: competitorLabel(domain),
        title: i.title ?? null,
        url: i.url ?? null,
        da,
      };
    });
  const ours = organic.find((o) => o.domain.includes(MANGOOLS_DOMAIN));
  return {
    ourSerpPosition: ours?.position ?? null,
    hasLocalPack,
    organic,
  };
}

async function detectTrackedSpanishKeywords(cacheMode: "no-store" | "default"): Promise<string[]> {
  try {
    const detail = await mangoolsFetch<DetailResponse>(
      `/serpwatcher/trackings/${SERPWATCHER_TRACKING_ID}/detail`,
      undefined,
      cacheMode
    );
    const coreSet = new Set<string>(CORE_MONEY_KEYWORDS.map((k) => k.toLowerCase()));
    const out: string[] = [];
    for (const item of detail.keywords ?? []) {
      const kw = (item.kw || "").trim();
      if (!kw || coreSet.has(kw.toLowerCase())) continue;
      if (isSpanishKeyword(kw)) {
        out.push(kw);
        if (out.length >= 3) break;
      }
    }
    return out;
  } catch {
    return [];
  }
}

async function fetchOneSerp(kw: string, cacheMode: "no-store" | "default"): Promise<CompetitorRow & { locationLabel?: string }> {
  try {
    const qs = new URLSearchParams({ kw, location_id: String(MIAMI_LOCATION_ID) });
    const data = await mangoolsFetch<SerpResponse>(`/serpchecker/serps?${qs}`, undefined, cacheMode);
    const { ourSerpPosition, hasLocalPack, organic } = normalizeSerpItems(data.items);
    return {
      keyword: kw,
      isSpanish: isSpanishKeyword(kw),
      ourSerpPosition,
      hasLocalPack,
      topCompetitors: organic.slice(0, 3),
      error: null,
      locationLabel: data.location?.label,
    };
  } catch (error: unknown) {
    return {
      keyword: kw,
      isSpanish: isSpanishKeyword(kw),
      ourSerpPosition: null,
      hasLocalPack: false,
      topCompetitors: [],
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

async function fetchCompetitorsBatch(noStore: boolean): Promise<CompetitorsPayload> {
  if (!process.env.MANGOOLS_API_KEY) {
    throw new MangoolsError("MANGOOLS_API_KEY is not set", 500);
  }
  const cacheMode = noStore ? "no-store" : "default";
  const trackedSpanish = await detectTrackedSpanishKeywords(cacheMode);
  const keywords = [...CORE_MONEY_KEYWORDS, ...trackedSpanish];

  // Fetch in batches of 3 to stay gentle on Mangools SERPChecker rate limits.
  const results: Array<CompetitorRow & { locationLabel?: string }> = [];
  for (let i = 0; i < keywords.length; i += 3) {
    const slice = keywords.slice(i, i + 3);
    const batch = await Promise.all(slice.map((kw) => fetchOneSerp(kw, cacheMode)));
    results.push(...batch);
  }

  const succeeded = results.filter((r) => !r.error);
  if (succeeded.length === 0) {
    const firstErr = results.find((r) => r.error)?.error || "Mangools SERPChecker returned no results";
    throw new Error(firstErr);
  }

  const location = succeeded.find((r) => r.locationLabel)?.locationLabel || "Miami, Florida, United States";
  const rows: CompetitorRow[] = results.map(({ locationLabel: _loc, ...rest }) => {
    void _loc;
    return rest;
  });
  const anyFailed = results.some((r) => !!r.error);

  return {
    success: true,
    status: anyFailed ? "partial" : "ok",
    location,
    rows,
    trackedSpanishCount: trackedSpanish.length,
    error: anyFailed ? "Some keyword SERP lookups failed; partial results shown." : null,
    fetchedAt: new Date().toISOString(),
  };
}

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
let memoryCache: { at: number; body: CompetitorsPayload } | null = null;

const getCachedCompetitors = unstable_cache(
  async () => fetchCompetitorsBatch(false),
  ["seo-competitors-serp-v1"],
  { revalidate: 86400, tags: ["seo-competitors-serp"] }
);

export async function loadCompetitors(refresh = false): Promise<CompetitorsPayload> {
  if (!refresh && memoryCache && Date.now() - memoryCache.at < CACHE_TTL_MS) {
    return { ...memoryCache.body, cached: true };
  }

  try {
    if (refresh) {
      revalidateTag("seo-competitors-serp", { expire: 0 });
      const fresh = await fetchCompetitorsBatch(true);
      memoryCache = { at: Date.now(), body: fresh };
      return { ...fresh, cached: false };
    }
    const cached = await getCachedCompetitors();
    memoryCache = { at: Date.now(), body: cached };
    return { ...cached, cached: true };
  } catch (error: unknown) {
    if (!refresh && memoryCache) {
      return { ...memoryCache.body, cached: true };
    }
    return {
      success: false,
      status: "unavailable",
      location: "Miami, Florida, United States",
      rows: [],
      trackedSpanishCount: 0,
      error: error instanceof Error ? error.message : String(error),
      fetchedAt: new Date().toISOString(),
    };
  }
}
