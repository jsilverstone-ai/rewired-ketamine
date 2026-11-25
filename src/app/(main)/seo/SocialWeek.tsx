"use client";

import { useCallback, useEffect, useState } from "react";
import type { SocialCarousel, SocialPost, SocialWeek as Week } from "@/data/social/schema";
import { card, CopyButton, Pill, SectionTitle, Skeleton, shortUrl } from "./ui";

type ApiResult = {
  status: "ok" | "empty" | "not-found";
  available: Array<{ weekOf: string; theme: string | null; posts: number; carousels: number }>;
  week: Week | null;
  problems: string[];
};

const fmtDay = (d: string) =>
  new Date(`${d}T12:00:00Z`).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", timeZone: "UTC" });

function Field({ label, text, mono = false }: { label: string; text: string; mono?: boolean }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-3">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</span>
        <CopyButton text={text} />
      </div>
      <div className={`text-xs text-slate-700 whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto ${mono ? "font-mono" : ""}`}>{text}</div>
    </div>
  );
}

function PostCard({ post }: { post: SocialPost }) {
  const [open, setOpen] = useState(false);
  const graphics = post.heygen?.onScreenGraphics?.join("\n") ?? "";
  return (
    <div className={`${card} flex flex-col`}>
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        <Pill tone="neutral">{fmtDay(post.date)}{post.time ? ` · ${post.time}` : ""}</Pill>
        <Pill tone={post.language === "es" ? "good" : "info"}>{post.language === "es" ? "Español" : "English"}</Pill>
        <Pill tone={post.isVideo ? "bad" : "neutral"}>{post.format ?? (post.isVideo ? "HeyGen video" : "Post")}</Pill>
      </div>
      <h3 className="font-bold text-slate-800 mb-1">{post.topic}</h3>
      <p className="text-xs text-slate-500 mb-1">{post.platform}</p>
      <p className="text-sm text-slate-600 mb-3">{post.hook}</p>
      <a href={post.linkedPage} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:text-teal-500 truncate mb-3" title={post.linkedPage}>
        → {shortUrl(post.linkedPage)}
      </a>

      <div className="space-y-2">
        <Field label="Caption" text={post.caption} />
        {post.carouselSlides && post.carouselSlides.length > 0 && (
          <Field label="Carousel slides" text={post.carouselSlides.map((s, i) => `${i + 1}. ${s}`).join("\n")} />
        )}
      </div>

      {post.isVideo && post.heygen && (
        <div className="mt-3">
          <button type="button" onClick={() => setOpen((o) => !o)} className="text-sm font-medium text-violet-600 hover:text-violet-500">
            {open ? "▾ Hide HeyGen script" : "▸ Show HeyGen script"}
          </button>
          {open && (
            <div className="space-y-2 mt-2">
              <Field label="HeyGen script" text={post.heygen.script} />
              <Field label="Outfit" text={post.heygen.outfit} />
              <Field label="Setting / background" text={post.heygen.setting} />
              {graphics && <Field label="On-screen graphics" text={graphics} mono />}
            </div>
          )}
        </div>
      )}
      {(post.whyThisWeek || post.notes) && (
        <p className="text-[11px] text-slate-400 mt-3">{post.whyThisWeek ? `Why this week: ${post.whyThisWeek}` : ""} {post.notes ?? ""}</p>
      )}
    </div>
  );
}

function CarouselCard({ c }: { c: SocialCarousel }) {
  const [open, setOpen] = useState(false);
  const allSlides = c.slides.map((sl, i) => `Slide ${i + 1}\n${sl.headline}${sl.body ? `\n${sl.body}` : ""}`).join("\n\n");
  return (
    <div className={`${card} flex flex-col`}>
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        <Pill tone="neutral">{fmtDay(c.date)}{c.time ? ` · ${c.time}` : ""}</Pill>
        <Pill tone={c.platform === "linkedin" ? "info" : "bad"}>{c.platform === "linkedin" ? "LinkedIn" : "Instagram"}</Pill>
        <Pill tone={c.language === "es" ? "good" : "info"}>{c.language === "es" ? "Español" : "English"}</Pill>
        <Pill tone="neutral">{c.aspect}</Pill>
      </div>
      <h3 className="font-bold text-slate-800 mb-1">{c.title}</h3>
      <p className="text-xs text-slate-500 mb-1">{c.slides.length} slides</p>
      {c.tone && <p className="text-sm text-slate-600 mb-3">{c.tone}</p>}
      <a href={c.linkedPage} target="_blank" rel="noopener noreferrer" className="text-xs text-teal-600 hover:text-teal-500 truncate mb-3" title={c.linkedPage}>
        → {shortUrl(c.linkedPage)}
      </a>
      <ol className="space-y-2 mb-3">
        {c.slides.map((sl, i) => (
          <li key={i} className="bg-slate-50 rounded-2xl p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Slide {i + 1}</div>
                <div className="text-sm font-semibold text-slate-800">{sl.headline}</div>
                {sl.body && <div className="text-xs text-slate-600 whitespace-pre-wrap mt-1">{sl.body}</div>}
              </div>
              <CopyButton text={sl.body ? `${sl.headline}\n${sl.body}` : sl.headline} />
            </div>
          </li>
        ))}
      </ol>
      <div className="space-y-2">
        <div className="flex justify-end"><CopyButton text={allSlides} label="Copy all slides" /></div>
        <Field label="Caption" text={c.caption} />
        <button type="button" onClick={() => setOpen((o) => !o)} className="text-sm font-medium text-violet-600 hover:text-violet-500 text-left">
          {open ? "▾ Hide design & alt text" : "▸ Design direction & alt text"}
        </button>
        {open && (
          <>
            <Field label="Design direction" text={c.designDirection} />
            <Field label="Alt text" text={c.altText} />
          </>
        )}
      </div>
    </div>
  );
}

export default function SocialWeek() {
  const [data, setData] = useState<ApiResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lang, setLang] = useState<"all" | "en" | "es">("all");
  const [showNotes, setShowNotes] = useState(false);

  const load = useCallback(async (week?: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/seo/social${week ? `?week=${encodeURIComponent(week)}` : ""}`, { cache: "no-store" });
      if (!res.ok) throw new Error(res.status === 401 ? "Session expired. Reload and sign in again." : `HTTP ${res.status}`);
      setData((await res.json()) as ApiResult);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Network error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    load();
  }, [load]);

  const week = data?.week ?? null;
  const posts = (week?.posts ?? []).filter((p) => lang === "all" || p.language === lang).sort((a, b) => a.date.localeCompare(b.date) || (a.time ?? "").localeCompare(b.time ?? ""));

  const carousels = (week?.carousels ?? []).filter((c) => lang === "all" || c.language === lang).sort((a, b) => a.date.localeCompare(b.date));

  const selector = data && data.available.length > 0 && (
    <div className="flex flex-wrap items-center gap-2">
      <select
        value={week?.weekOf ?? ""}
        onChange={(e) => load(e.target.value)}
        className="bg-white border border-slate-200 rounded-2xl px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-200"
      >
        {data.available.map((w) => (
          <option key={w.weekOf} value={w.weekOf}>
            Week of {fmtDay(w.weekOf)} ({w.posts} posts{w.carousels ? `, ${w.carousels} carousels` : ""})
          </option>
        ))}
      </select>
      <div className="flex bg-slate-100 rounded-2xl p-1 text-xs">
        {(["all", "en", "es"] as const).map((l) => (
          <button key={l} type="button" onClick={() => setLang(l)} className={`px-3 py-1.5 rounded-xl ${lang === l ? "bg-white shadow-sm text-slate-800" : "text-slate-500"}`}>
            {l === "all" ? "All" : l.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="mb-10">
      <SectionTitle icon="📱" title="Social This Week" subtitle={week?.theme ?? "Post ideas and HeyGen scripts, refreshed every Monday"} right={selector} />
      {loading && !data ? (
        <div className={card}><Skeleton rows={3} /></div>
      ) : error ? (
        <div className={`${card} text-sm text-rose-600`}>Couldn’t load the social plan: {error}</div>
      ) : !week ? (
        <div className={`${card} text-sm text-slate-500`}>
          No social plan yet. Each Monday a new file is added at <code className="bg-slate-100 px-1 rounded">src/data/social/YYYY-MM-DD.json</code> and it shows up here.
        </div>
      ) : (
        <>
          {data && data.problems.length > 0 && (
            <div className={`${card} mb-4 text-xs text-amber-700`}>This week’s file has {data.problems.length} formatting issue(s): {data.problems.slice(0, 5).join("; ")}</div>
          )}
          {week.notes && (
            <div className={`${card} mb-4`}>
              <button type="button" onClick={() => setShowNotes((s) => !s)} className="text-sm font-medium text-slate-700">
                {showNotes ? "▾" : "▸"} Guardrails &amp; production notes
              </button>
              {showNotes && <div className="text-xs text-slate-600 whitespace-pre-wrap leading-relaxed mt-3">{week.notes}</div>}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
            {posts.map((p, i) => <PostCard key={`${p.date}-${i}`} post={p} />)}
          </div>
          {carousels.length > 0 && (
            <>
              <h3 className="text-lg font-semibold text-slate-800 mt-8 mb-4 flex items-center gap-2">
                <span className="text-amber-500">✨</span> Inspirational carousels
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
                {carousels.map((c, i) => <CarouselCard key={`${c.date}-${i}`} c={c} />)}
              </div>
            </>
          )}
          {loading && <p className="text-xs text-slate-400 mt-2">Loading…</p>}
        </>
      )}
    </section>
  );
}
