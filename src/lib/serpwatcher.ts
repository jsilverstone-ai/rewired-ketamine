// SERPWatcher helpers for the private /seo dashboard.
//
// Mangools binds device to the tracking itself (platform_id: 1 = desktop, 2 = mobile).
// GET/POST /serpwatcher/trackings/{id}/detail and /stats have no device parameter,
// so the dashboard lists every tracking for rewiredketamine.com and prefers the
// Mobile tracking for Miami and for Aventura. The Desktop/Mobile tabs in the
// Mangools UI are separate trackings, not a toggle the API can flip.

import {
  MANGOOLS_DOMAIN,
  PLATFORM_DESKTOP,
  PLATFORM_MOBILE,
  SERPWATCHER_TRACKING_ID,
  mangoolsFetch,
} from "./mangools";
import type { TrackedKeyword } from "./seo-scorecard";

export type PlatformName = "mobile" | "desktop" | "unknown";
export type LocationKey = "miami" | "aventura" | "other";

export type RawTracking = {
  _id?: string;
  domain?: string;
  location?: { _id?: number; label?: string; code?: string | null };
  platform_id?: number;
  count?: number;
  is_deleted?: boolean;
};

export type TrackingMeta = {
  id: string;
  domain: string;
  locationLabel: string;
  locationKey: LocationKey;
  locationId: number | null;
  platformId: number | null;
  platform: PlatformName;
  keywordCount: number | null;
};

export type LocationRanks = {
  meta: TrackingMeta;
  keywords: TrackedKeyword[];
  usedPreferredDevice: boolean;
  warning: string | null;
};

export type RankingsPayload = {
  success: true;
  preferredDevice: "mobile";
  locations: {
    miami: LocationRanks | null;
    aventura: LocationRanks | null;
  };
  /** Miami ranks (preferred device), for callers that only need the primary set. */
  keywords: TrackedKeyword[];
  warnings: string[];
  range: { from: string; to: string };
  fetchedAt: string;
};

type DetailKeyword = { _id?: string; kw?: string; url?: string | null };
type DetailResponse = {
  tracking?: RawTracking & { platform_id?: number };
  keywords?: DetailKeyword[];
};
type StatsKeyword = {
  _id?: string;
  rank?: { last?: number | null; avg?: number | null; best?: number | null } | null;
  rank_change?: number | null;
  rank_history?: Array<number | null>;
  search_volume?: number | null;
  map_pack?: { rank?: number | null; url?: string | null } | null;
};
type StatsResponse = { keywords?: StatsKeyword[]; history_dates?: string[] };

export function platformName(id: number | null | undefined): PlatformName {
  if (id === PLATFORM_MOBILE) return "mobile";
  if (id === PLATFORM_DESKTOP) return "desktop";
  return "unknown";
}

export function platformBadge(platform: PlatformName): string {
  if (platform === "mobile") return "📱";
  if (platform === "desktop") return "🖥️";
  return "";
}

export function locationDisplayName(key: LocationKey, platform: PlatformName): string {
  const city = key === "miami" ? "Miami" : key === "aventura" ? "Aventura" : "Other";
  const mark = platformBadge(platform);
  if (platform === "mobile") return `${city} ${mark}`.trim();
  if (platform === "desktop") return `${city} ${mark} Desktop`.trim();
  return city;
}

export function locationKeyFromLabel(label: string | null | undefined): LocationKey {
  const s = (label || "").toLowerCase();
  // Check Aventura first so "Aventura, Miami-Dade, Florida" (if ever labeled that way) is not tagged Miami.
  if (s.includes("aventura")) return "aventura";
  if (s.includes("miami")) return "miami";
  return "other";
}

export function normalizeDomain(value: string | null | undefined): string {
  return (value || "")
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/.*$/, "")
    .trim();
}

/** Mangools uses 0 (or null) for "not in the top 100". */
export function toRank(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : null;
}

export function isoDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// Rank at the start of the window: the oldest non-empty point in rank_history,
// using history_dates to find which end is oldest.
export function previousRankOf(stats: StatsKeyword, dates: string[] | undefined): number | null {
  const history = Array.isArray(stats.rank_history) ? stats.rank_history : [];
  if (history.length === 0) {
    const last = toRank(stats.rank?.last);
    const change = typeof stats.rank_change === "number" ? stats.rank_change : null;
    return last !== null && change !== null ? toRank(last + change) : null;
  }
  let oldestFirst = false;
  if (dates && dates.length >= 2) {
    oldestFirst = new Date(dates[0]).getTime() < new Date(dates[dates.length - 1]).getTime();
  }
  const ordered = oldestFirst ? history : [...history].reverse();
  for (const value of ordered) {
    const rank = toRank(value);
    if (rank !== null) return rank;
  }
  return null;
}

export function desktopDeviceWarning(locationLabel: string): string {
  return `The ${locationLabel} SERPWatcher tracking is set to Desktop. Mangools binds device to the tracking itself (platform_id), so the API cannot flip the Desktop/Mobile tab on one tracking. In SERPWatcher, open ${locationLabel} and switch to the Mobile tab — if that is a separate Mobile tracking, this dashboard will pick it up automatically. Until then, ${locationLabel} ranks shown here are Desktop.`;
}

function toMeta(raw: RawTracking, fallbackId?: string): TrackingMeta | null {
  const id = raw._id || fallbackId;
  if (!id) return null;
  const locationLabel = raw.location?.label || "Unknown location";
  return {
    id,
    domain: normalizeDomain(raw.domain) || MANGOOLS_DOMAIN,
    locationLabel,
    locationKey: locationKeyFromLabel(locationLabel),
    locationId: typeof raw.location?._id === "number" ? raw.location._id : null,
    platformId: typeof raw.platform_id === "number" ? raw.platform_id : null,
    platform: platformName(raw.platform_id),
    keywordCount: typeof raw.count === "number" ? raw.count : null,
  };
}

/**
 * From a SERPWatcher tracking list, pick the Mobile tracking for Miami and for
 * Aventura (falling back to Desktop with a warning if no Mobile tracking exists).
 * Exported so the selection rules can be unit-tested without an API key.
 */
export function selectLocationTrackings(
  list: RawTracking[],
  domain: string = MANGOOLS_DOMAIN,
  preferredPlatformId: number = PLATFORM_MOBILE
): { miami: TrackingMeta | null; aventura: TrackingMeta | null; warnings: string[] } {
  const wanted = normalizeDomain(domain);
  const live = list.filter((t) => !t.is_deleted && normalizeDomain(t.domain) === wanted);

  const pick = (key: LocationKey, pretty: string): { meta: TrackingMeta | null; warning: string | null } => {
    const candidates = live
      .map((t) => toMeta(t))
      .filter((m): m is TrackingMeta => !!m && m.locationKey === key);
    if (candidates.length === 0) return { meta: null, warning: null };

    const preferred = candidates
      .filter((m) => m.platformId === preferredPlatformId)
      .sort((a, b) => (b.keywordCount ?? 0) - (a.keywordCount ?? 0));
    if (preferred[0]) return { meta: preferred[0], warning: null };

    const fallback = [...candidates].sort((a, b) => (b.keywordCount ?? 0) - (a.keywordCount ?? 0))[0];
    const warning =
      fallback.platform === "desktop"
        ? desktopDeviceWarning(fallback.locationLabel || pretty)
        : `The ${pretty} SERPWatcher tracking is not Mobile (platform_id=${fallback.platformId ?? "unknown"}). The API cannot change device on an existing tracking.`;
    return { meta: fallback, warning };
  };

  const miami = pick("miami", "Miami");
  const aventura = pick("aventura", "Aventura");
  const warnings = [miami.warning, aventura.warning].filter((w): w is string => !!w);

  if (!miami.meta && !aventura.meta && live.length > 0) {
    warnings.push(
      `Found ${live.length} SERPWatcher tracking(s) for ${wanted}, but none were labeled Miami or Aventura. Location labels: ${live
        .map((t) => t.location?.label || "unknown")
        .join(", ")}.`
    );
  }

  return { miami: miami.meta, aventura: aventura.meta, warnings };
}

export async function listAccountTrackings(
  cacheMode: "no-store" | "default" = "no-store"
): Promise<RawTracking[]> {
  const data = await mangoolsFetch<RawTracking[] | { trackings?: RawTracking[] }>(
    "/serpwatcher/trackings",
    undefined,
    cacheMode
  );
  return Array.isArray(data) ? data : (data.trackings ?? []);
}

export async function fetchTrackingKeywords(
  trackingId: string,
  range: { from: string; to: string },
  cacheMode: "no-store" | "default" = "no-store"
): Promise<{ metaFromDetail: TrackingMeta | null; keywords: TrackedKeyword[] }> {
  const qs = `from=${range.from}&to=${range.to}`;
  const [detail, stats] = await Promise.all([
    mangoolsFetch<DetailResponse>(`/serpwatcher/trackings/${trackingId}/detail`, undefined, cacheMode),
    mangoolsFetch<StatsResponse>(`/serpwatcher/trackings/${trackingId}/stats?${qs}`, {
      method: "POST",
      body: JSON.stringify({}),
    }, cacheMode),
  ]);

  const statsById = new Map<string, StatsKeyword>();
  for (const item of stats.keywords ?? []) {
    if (item._id) statsById.set(item._id, item);
  }

  const keywords: TrackedKeyword[] = (detail.keywords ?? []).map((item) => {
    const s = item._id ? statsById.get(item._id) : undefined;
    return {
      keyword: item.kw ?? "",
      rank: toRank(s?.rank?.last),
      previousRank: s ? previousRankOf(s, stats.history_dates) : null,
      bestRank: toRank(s?.rank?.best),
      mapPackRank: toRank(s?.map_pack?.rank),
      searchVolume: typeof s?.search_volume === "number" ? s.search_volume : null,
      url: item.url ?? null,
    };
  });

  const raw = detail.tracking ? { ...detail.tracking, count: detail.keywords?.length ?? detail.tracking.count } : { _id: trackingId };
  return { metaFromDetail: toMeta(raw, trackingId), keywords };
}

async function loadOne(
  meta: TrackingMeta,
  range: { from: string; to: string },
  cacheMode: "no-store" | "default"
): Promise<LocationRanks> {
  const { metaFromDetail, keywords } = await fetchTrackingKeywords(meta.id, range, cacheMode);
  const merged: TrackingMeta = {
    ...meta,
    ...metaFromDetail,
    id: meta.id,
    locationKey: meta.locationKey !== "other" ? meta.locationKey : (metaFromDetail?.locationKey ?? meta.locationKey),
  };
  const usedPreferredDevice = merged.platform === "mobile";
  const warning = usedPreferredDevice ? null : desktopDeviceWarning(merged.locationLabel);
  return {
    meta: { ...merged, keywordCount: merged.keywordCount ?? keywords.length },
    keywords,
    usedPreferredDevice,
    warning,
  };
}

/**
 * Load Miami + Aventura ranks, preferring Mobile trackings.
 * If the tracking list is unavailable, falls back to the known Miami tracking id
 * and inspects its platform_id so a Desktop tracking is flagged clearly.
 */
export async function loadPreferredRankings(
  cacheMode: "no-store" | "default" = "no-store"
): Promise<RankingsPayload> {
  const to = new Date();
  const from = new Date(to.getTime() - 30 * 24 * 60 * 60 * 1000);
  const range = { from: isoDay(from), to: isoDay(to) };
  const warnings: string[] = [];

  let miamiMeta: TrackingMeta | null = null;
  let aventuraMeta: TrackingMeta | null = null;

  try {
    const list = await listAccountTrackings(cacheMode);
    const selected = selectLocationTrackings(list, MANGOOLS_DOMAIN, PLATFORM_MOBILE);
    miamiMeta = selected.miami;
    aventuraMeta = selected.aventura;
    warnings.push(...selected.warnings);
  } catch (error: unknown) {
    warnings.push(
      `Could not list SERPWatcher trackings (${error instanceof Error ? error.message : String(error)}). Falling back to the known Miami tracking.`
    );
  }

  if (!miamiMeta && !aventuraMeta) {
    miamiMeta = {
      id: SERPWATCHER_TRACKING_ID,
      domain: MANGOOLS_DOMAIN,
      locationLabel: "Miami, Florida, United States",
      locationKey: "miami",
      locationId: null,
      platformId: null,
      platform: "unknown",
      keywordCount: null,
    };
  }

  const [miami, aventura] = await Promise.all([
    miamiMeta ? loadOne(miamiMeta, range, cacheMode) : Promise.resolve(null),
    aventuraMeta ? loadOne(aventuraMeta, range, cacheMode) : Promise.resolve(null),
  ]);

  if (miami?.warning) warnings.push(miami.warning);
  if (aventura?.warning) warnings.push(aventura.warning);
  if (!aventura) {
    warnings.push(
      "No Aventura SERPWatcher tracking was found for rewiredketamine.com. Once a Mobile Aventura tracking exists in Mangools, it will show up here automatically."
    );
  }

  // Deduplicate warnings (fallback path can add the desktop warning twice).
  const uniqueWarnings = [...new Set(warnings)];

  return {
    success: true,
    preferredDevice: "mobile",
    locations: { miami, aventura },
    keywords: miami?.keywords ?? [],
    warnings: uniqueWarnings,
    range,
    fetchedAt: new Date().toISOString(),
  };
}

export function summarizeRankings(payload: RankingsPayload): string {
  const bits: string[] = [];
  for (const key of ["miami", "aventura"] as const) {
    const loc = payload.locations[key];
    if (!loc) continue;
    const label = locationDisplayName(loc.meta.locationKey, loc.meta.platform);
    bits.push(`${label}: ${loc.keywords.length} keywords`);
  }
  if (bits.length === 0) return "No SERPWatcher trackings found";
  return bits.join(" · ");
}
