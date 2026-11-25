// Weekly Search Console report ("Monday report") for the private /seo dashboard.
// Compares the last 7 finalized days against the 7 days before them.
// Every number comes straight from the Search Console API; nothing is estimated.

import type { GscQuery, GscRow, GscSitemap } from "./gsc";

export type DataSource = {
  searchAnalytics: (q: GscQuery) => Promise<GscRow[]>;
  listSitemaps: () => Promise<GscSitemap[]>;
};

export const KEY_QUERIES = [
  "rewired ketamine",
  "ketamine clinic aventura",
  "ketamine therapy miami",
  "ketamine clinic miami",
  "ketamine miami",
  "miami ketamine therapy",
  "ketamine clinic near me",
  "ketamine therapy near me",
  "ketamine near me",
  "ketamine for postpartum depression",
];

// Brand / Aventura / Miami head terms where the homepage should be the page that ranks.
export const HOMEPAGE_TERMS = [
  "rewired ketamine",
  "ketamine clinic aventura",
  "ketamine therapy miami",
  "ketamine clinic miami",
  "ketamine miami",
  "miami ketamine therapy",
];

const isBurnoutVariant = (q: string) => q.includes("burnout") || q.includes("burn out");

export type Metrics = { clicks: number; impressions: number; ctr: number | null; position: number | null };
export type Range = { start: string; end: string };

export type KeyQueryRow = {
  query: string;
  thisWeek: Metrics;
  lastWeek: Metrics;
  page: string | null;
  lastWeekPage: string | null;
  flags: Array<{ level: "bad" | "good" | "info"; text: string }>;
};

export type MoverRow = { key: string; thisWeek: Metrics; lastWeek: Metrics; clicksDelta: number; impressionsDelta: number };

export type NoiseDay = { date: string; device: string; impressions: number; clicks: number; position: number; reason: string };

export type SitemapRow = {
  path: string;
  lastSubmitted: string | null;
  lastDownloaded: string | null;
  isPending: boolean;
  errors: number;
  warnings: number;
  submitted: number | null;
  indexed: number | null;
  /** Google hasn't read it in 30+ days (e.g. old WordPress sitemaps still submitted). */
  stale: boolean;
};

export type WeeklyReport = {
  status: "ok";
  site: string;
  thisWeek: Range;
  lastWeek: Range;
  daysWithData: { thisWeek: number; lastWeek: number };
  totals: { thisWeek: Metrics; lastWeek: Metrics };
  adjustedPosition: { thisWeek: number | null; lastWeek: number | null } | null;
  noise: NoiseDay[];
  keyQueries: KeyQueryRow[];
  homepageAlerts: string[];
  movers: { pagesUp: MoverRow[]; pagesDown: MoverRow[]; queriesUp: MoverRow[]; queriesDown: MoverRow[] };
  spanish: { pages: MoverRow[]; totals: { thisWeek: Metrics; lastWeek: Metrics }; gaining: number };
  newPages: MoverRow[];
  sitemaps: SitemapRow[];
  sitemapError: string | null;
  summary: string;
  positives: string[];
  generatedAt: string;
};

// ---------- helpers ----------

const DAY = 24 * 60 * 60 * 1000;
const iso = (d: Date) => d.toISOString().slice(0, 10);
const addDays = (day: string, n: number) => iso(new Date(new Date(`${day}T00:00:00Z`).getTime() + n * DAY));

function emptyMetrics(): Metrics {
  return { clicks: 0, impressions: 0, ctr: null, position: null };
}

// Sum rows; position is impression-weighted.
function aggregate(rows: GscRow[]): Metrics {
  let clicks = 0;
  let impressions = 0;
  let posWeighted = 0;
  for (const r of rows) {
    clicks += r.clicks;
    impressions += r.impressions;
    posWeighted += r.position * r.impressions;
  }
  return {
    clicks,
    impressions,
    ctr: impressions > 0 ? clicks / impressions : null,
    position: impressions > 0 ? posWeighted / impressions : null,
  };
}

function fromRow(r: GscRow | undefined): Metrics {
  if (!r) return emptyMetrics();
  return { clicks: r.clicks, impressions: r.impressions, ctr: r.ctr, position: r.position };
}

export function pathOf(url: string): string {
  try {
    const u = new URL(url);
    return u.pathname || "/";
  } catch {
    return url;
  }
}

const isHomepage = (url: string | null) => !!url && (pathOf(url) === "/" || pathOf(url) === "");
const isSpanish = (url: string) => {
  const p = pathOf(url);
  return p === "/es" || p.startsWith("/es/");
};

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const s = [...values].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

function inRange(day: string, r: Range) {
  return day >= r.start && day <= r.end;
}

function movers(thisRows: GscRow[], lastRows: GscRow[], minImpressions = 10): MoverRow[] {
  const map = new Map<string, MoverRow>();
  for (const r of thisRows) {
    const key = r.keys?.[0] ?? "";
    map.set(key, { key, thisWeek: fromRow(r), lastWeek: emptyMetrics(), clicksDelta: 0, impressionsDelta: 0 });
  }
  for (const r of lastRows) {
    const key = r.keys?.[0] ?? "";
    const existing = map.get(key);
    if (existing) existing.lastWeek = fromRow(r);
    else map.set(key, { key, thisWeek: emptyMetrics(), lastWeek: fromRow(r), clicksDelta: 0, impressionsDelta: 0 });
  }
  const out: MoverRow[] = [];
  for (const m of map.values()) {
    m.clicksDelta = m.thisWeek.clicks - m.lastWeek.clicks;
    m.impressionsDelta = m.thisWeek.impressions - m.lastWeek.impressions;
    if (Math.max(m.thisWeek.impressions, m.lastWeek.impressions) >= minImpressions) out.push(m);
  }
  return out;
}

const byGain = (a: MoverRow, b: MoverRow) => b.clicksDelta - a.clicksDelta || b.impressionsDelta - a.impressionsDelta;
const byLoss = (a: MoverRow, b: MoverRow) => a.clicksDelta - b.clicksDelta || a.impressionsDelta - b.impressionsDelta;

function pct(now: number, before: number): string {
  if (before === 0) return now === 0 ? "no change" : "new";
  const p = ((now - before) / before) * 100;
  return `${p >= 0 ? "+" : ""}${p.toFixed(0)}%`;
}

const fmtDay = (d: string) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

// ---------- main ----------

export async function buildWeeklyReport(src: DataSource, site: string, today = new Date()): Promise<WeeklyReport | { status: "no-data"; message: string }> {
  // 1. Find the latest finalized day (Search Console lags 2–3 days).
  const probeStart = iso(new Date(today.getTime() - 24 * DAY));
  const probeEnd = iso(today);
  const dateRows = await src.searchAnalytics({ startDate: probeStart, endDate: probeEnd, dimensions: ["date"], dataState: "final" });
  const days = dateRows.map((r) => r.keys?.[0] ?? "").filter(Boolean).sort();
  if (days.length === 0) {
    return { status: "no-data", message: "Search Console returned no finalized data for the last 24 days." };
  }
  const end = days[days.length - 1];
  const thisWeek: Range = { start: addDays(end, -6), end };
  const lastWeek: Range = { start: addDays(end, -13), end: addDays(end, -7) };

  const q = (r: Range, dimensions: GscQuery["dimensions"]) =>
    src.searchAnalytics({ startDate: r.start, endDate: r.end, dimensions, dataState: "final" });

  const both: Range = { start: lastWeek.start, end: thisWeek.end };
  const [deviceDaily, qpThis, qpLast, pThis, pLast, qThis, qLast, sitemapResult] = await Promise.all([
    q(both, ["date", "device"]),
    q(thisWeek, ["query", "page"]),
    q(lastWeek, ["query", "page"]),
    q(thisWeek, ["page"]),
    q(lastWeek, ["page"]),
    q(thisWeek, ["query"]),
    q(lastWeek, ["query"]),
    src.listSitemaps().then(
      (s) => ({ ok: true as const, s }),
      (e: unknown) => ({ ok: false as const, e: e instanceof Error ? e.message : String(e) })
    ),
  ]);

  // 2. Totals (straight from the date rows).
  const dailyThis = dateRows.filter((r) => inRange(r.keys![0], thisWeek));
  const dailyLast = dateRows.filter((r) => inRange(r.keys![0], lastWeek));
  const totals = { thisWeek: aggregate(dailyThis), lastWeek: aggregate(dailyLast) };

  // 3. Noise: zero-click desktop bursts at ~position 1 (bot/rank-checker pattern, often around the 5th/17th).
  const desktop = deviceDaily.filter((r) => r.keys?.[1] === "DESKTOP");
  const desktopMedian = median(desktop.map((r) => r.impressions));
  const noise: NoiseDay[] = [];
  for (const r of desktop) {
    const date = r.keys![0];
    if (r.clicks === 0 && r.position <= 1.5 && r.impressions >= Math.max(10, desktopMedian * 3)) {
      const dom = Number(date.slice(8, 10));
      const nearPattern = [4, 5, 6, 16, 17, 18].includes(dom);
      noise.push({
        date,
        device: "desktop",
        impressions: r.impressions,
        clicks: r.clicks,
        position: r.position,
        reason: `zero-click desktop burst at position ${r.position.toFixed(1)}${nearPattern ? " (matches the 5th/17th pattern)" : ""}`,
      });
    }
  }
  let adjustedPosition: WeeklyReport["adjustedPosition"] = null;
  if (noise.length > 0) {
    const noisy = new Set(noise.map((n) => `${n.date}|DESKTOP`));
    const clean = deviceDaily.filter((r) => !noisy.has(`${r.keys![0]}|${r.keys![1]}`));
    adjustedPosition = {
      thisWeek: aggregate(clean.filter((r) => inRange(r.keys![0], thisWeek))).position,
      lastWeek: aggregate(clean.filter((r) => inRange(r.keys![0], lastWeek))).position,
    };
  }

  // 4. Key queries.
  const qThisMap = new Map(qThis.map((r) => [r.keys![0].toLowerCase(), r]));
  const qLastMap = new Map(qLast.map((r) => [r.keys![0].toLowerCase(), r]));
  const burnout = new Set<string>();
  for (const k of [...qThisMap.keys(), ...qLastMap.keys()]) if (isBurnoutVariant(k)) burnout.add(k);
  const tracked = [...KEY_QUERIES, ...[...burnout].sort()];

  const topPage = (rows: GscRow[], query: string) => {
    let best: GscRow | null = null;
    for (const r of rows) {
      if (r.keys![0].toLowerCase() !== query) continue;
      if (!best || r.impressions > best.impressions || (r.impressions === best.impressions && r.position < best.position)) best = r;
    }
    return best ? best.keys![1] : null;
  };
  const homepageHas = (rows: GscRow[], query: string) =>
    rows.some((r) => r.keys![0].toLowerCase() === query && isHomepage(r.keys![1]) && r.impressions > 0);

  const homepageAlerts: string[] = [];
  const keyQueries: KeyQueryRow[] = tracked.map((query) => {
    const t = fromRow(qThisMap.get(query));
    const l = fromRow(qLastMap.get(query));
    const flags: KeyQueryRow["flags"] = [];
    const lowVolume = Math.max(t.impressions, l.impressions) < 5;
    if (l.impressions > 0 && t.impressions === 0) flags.push({ level: lowVolume ? "info" : "bad", text: "No impressions this week" });
    if (l.impressions === 0 && t.impressions > 0) flags.push({ level: "good", text: "New this week" });
    if (t.position !== null && l.position !== null && !lowVolume) {
      const d = t.position - l.position;
      if (d >= 3) flags.push({ level: "bad", text: `Down ${d.toFixed(1)} positions` });
      if (d <= -3) flags.push({ level: "good", text: `Up ${Math.abs(d).toFixed(1)} positions` });
    }
    if (HOMEPAGE_TERMS.includes(query)) {
      const hadHome = homepageHas(qpLast, query);
      const hasHome = homepageHas(qpThis, query);
      if (hadHome && !hasHome) {
        flags.push({ level: "bad", text: "Homepage stopped ranking" });
        homepageAlerts.push(`Homepage no longer shows for “${query}” (it did last week).`);
      } else if (!hasHome && t.impressions > 0) {
        flags.push({ level: "info", text: "Homepage not the ranking page" });
      }
    }
    if (lowVolume && (t.impressions > 0 || l.impressions > 0)) flags.push({ level: "info", text: "Low volume (<5 impressions)" });
    return { query, thisWeek: t, lastWeek: l, page: topPage(qpThis, query), lastWeekPage: topPage(qpLast, query), flags };
  });

  // 5. Movers.
  const pageMovers = movers(pThis, pLast);
  const queryMovers = movers(qThis, qLast);
  const up = (rows: MoverRow[]) => rows.filter((r) => r.clicksDelta > 0 || (r.clicksDelta === 0 && r.impressionsDelta > 0)).sort(byGain).slice(0, 5);
  const down = (rows: MoverRow[]) => rows.filter((r) => r.clicksDelta < 0 || (r.clicksDelta === 0 && r.impressionsDelta < 0)).sort(byLoss).slice(0, 5);

  // 6. Spanish pages (no volume floor: they're new, every impression counts).
  const allPages = movers(pThis, pLast, 0);
  const spanishPages = allPages.filter((r) => isSpanish(r.key)).sort((a, b) => b.thisWeek.impressions - a.thisWeek.impressions);
  const spanishTotals = {
    thisWeek: aggregate(pThis.filter((r) => isSpanish(r.keys![0]))),
    lastWeek: aggregate(pLast.filter((r) => isSpanish(r.keys![0]))),
  };
  const spanishGaining = spanishPages.filter((r) => r.impressionsDelta > 0).length;

  // 7. New pages (impressions this week, none last week).
  const newPages = allPages
    .filter((r) => r.thisWeek.impressions > 0 && r.lastWeek.impressions === 0)
    .sort((a, b) => b.thisWeek.impressions - a.thisWeek.impressions)
    .slice(0, 15);

  // 8. Sitemaps.
  const sitemaps: SitemapRow[] = sitemapResult.ok
    ? sitemapResult.s.map((s) => {
        const num = (v: string | undefined) => (v === undefined ? null : Number(v));
        const submitted = (s.contents ?? []).reduce<number | null>((acc, c) => (c.submitted === undefined ? acc : (acc ?? 0) + Number(c.submitted)), null);
        const indexed = (s.contents ?? []).reduce<number | null>((acc, c) => (c.indexed === undefined ? acc : (acc ?? 0) + Number(c.indexed)), null);
        return {
          path: s.path,
          lastSubmitted: s.lastSubmitted ?? null,
          lastDownloaded: s.lastDownloaded ?? null,
          isPending: !!s.isPending,
          errors: num(s.errors) ?? 0,
          warnings: num(s.warnings) ?? 0,
          submitted,
          indexed,
          stale: !!s.lastDownloaded && today.getTime() - new Date(s.lastDownloaded).getTime() > 30 * DAY,
        };
      })
    : [];

  // 9. Positives + summary, built only from the numbers above.
  const positives: string[] = [];
  if (newPages.length > 0) positives.push(`${newPages.length} page${newPages.length === 1 ? "" : "s"} got impressions for the first time vs last week.`);
  if (spanishGaining > 0) positives.push(`${spanishGaining} Spanish (/es) page${spanishGaining === 1 ? "" : "s"} gained impressions.`);
  for (const k of keyQueries) {
    if (k.flags.some((f) => f.level === "good" && f.text.startsWith("Up"))) positives.push(`“${k.query}” moved up to position ${k.thisWeek.position!.toFixed(1)}.`);
  }

  const t = totals.thisWeek;
  const l = totals.lastWeek;
  const posPart =
    t.position !== null && l.position !== null
      ? `avg position ${t.position.toFixed(1)} (${t.position <= l.position ? "better" : "worse"} by ${Math.abs(t.position - l.position).toFixed(1)})`
      : t.position !== null
        ? `avg position ${t.position.toFixed(1)}`
        : "no position data";
  const parts = [
    `${fmtDay(thisWeek.start)}–${fmtDay(thisWeek.end)} vs ${fmtDay(lastWeek.start)}–${fmtDay(lastWeek.end)}: ${t.clicks.toLocaleString()} clicks (${pct(t.clicks, l.clicks)}), ${t.impressions.toLocaleString()} impressions (${pct(t.impressions, l.impressions)}), ${posPart}.`,
  ];
  parts.push(
    homepageAlerts.length > 0
      ? `⚠️ ${homepageAlerts.length} homepage ranking alert${homepageAlerts.length === 1 ? "" : "s"}.`
      : "Homepage still holds every brand/Aventura/Miami term it held last week."
  );
  if (noise.length > 0) parts.push(`${noise.length} noisy desktop day${noise.length === 1 ? "" : "s"} detected; see the adjusted position.`);
  if (spanishTotals.thisWeek.impressions > 0)
    parts.push(`Spanish pages: ${spanishTotals.thisWeek.impressions.toLocaleString()} impressions (${pct(spanishTotals.thisWeek.impressions, spanishTotals.lastWeek.impressions)}).`);
  const live = sitemaps.filter((s) => !s.stale);
  const stale = sitemaps.filter((s) => s.stale);
  const sitemapIssues = live.reduce((n, s) => n + s.errors + s.warnings, 0);
  if (sitemapIssues > 0) parts.push(`Current sitemaps report ${sitemapIssues} error/warning${sitemapIssues === 1 ? "" : "s"}.`);
  if (stale.length > 0) parts.push(`${stale.length} old sitemap${stale.length === 1 ? " is" : "s are"} still submitted and can be removed in Search Console.`);

  return {
    status: "ok",
    site,
    thisWeek,
    lastWeek,
    daysWithData: { thisWeek: dailyThis.length, lastWeek: dailyLast.length },
    totals,
    adjustedPosition,
    noise,
    keyQueries,
    homepageAlerts,
    movers: { pagesUp: up(pageMovers), pagesDown: down(pageMovers), queriesUp: up(queryMovers), queriesDown: down(queryMovers) },
    spanish: { pages: spanishPages.slice(0, 20), totals: spanishTotals, gaining: spanishGaining },
    newPages,
    sitemaps,
    sitemapError: sitemapResult.ok ? null : sitemapResult.e,
    summary: parts.join(" "),
    positives,
    generatedAt: new Date().toISOString(),
  };
}
