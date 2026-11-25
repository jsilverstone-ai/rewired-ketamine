"use client";

import { useState } from "react";

export const card = "bg-white rounded-3xl p-6 shadow-sm border border-slate-200/70";
export const tile = "bg-slate-50/90 rounded-2xl p-4 border border-slate-100";

export function SectionTitle({ icon, title, subtitle, right }: { icon: string; title: string; subtitle?: string; right?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
      <div>
        <h2 className="font-serif text-xl font-bold text-[#0B1D36] flex items-center gap-2">
          <span>{icon}</span> {title}
        </h2>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
      {right}
    </div>
  );
}

export function AccordionCard({
  icon,
  title,
  summary,
  badge,
  right,
  defaultOpen = false,
  children,
}: {
  icon: string;
  title: string;
  summary: React.ReactNode;
  badge?: React.ReactNode;
  right?: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200/70 mb-5 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="flex-1 min-w-0 text-left flex items-start sm:items-center gap-3 group"
        >
          <span className="text-xl shrink-0 mt-0.5 sm:mt-0">{icon}</span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="font-serif text-lg font-bold text-[#0B1D36] group-hover:text-teal-700 transition">
                {title}
              </h2>
              {badge}
            </div>
            <div className="text-xs sm:text-sm text-slate-500 mt-0.5 truncate">{summary}</div>
          </div>
          <span className="text-xs font-medium text-teal-700 bg-teal-50 group-hover:bg-teal-100 px-3 py-1.5 rounded-xl shrink-0 transition">
            {open ? "▾ Collapse" : "▸ Expand"}
          </span>
        </button>
        {open && right && <div className="shrink-0 pl-8 sm:pl-0">{right}</div>}
      </div>
      {open && <div className="px-6 pb-6 pt-3 border-t border-slate-100">{children}</div>}
    </section>
  );
}

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        }
        setDone(true);
        setTimeout(() => setDone(false), 1500);
      }}
      className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-xl transition ${
        done ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 hover:bg-slate-200 text-slate-600"
      }`}
    >
      {done ? "Copied ✓" : label}
    </button>
  );
}

export function Pill({ tone, children }: { tone: "bad" | "good" | "info" | "neutral"; children: React.ReactNode }) {
  const tones = {
    bad: "bg-rose-100 text-rose-700",
    good: "bg-emerald-100 text-emerald-700",
    info: "bg-teal-50 text-teal-700 border border-teal-200/60",
    neutral: "bg-slate-100 text-slate-600",
  };
  return <span className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-lg whitespace-nowrap ${tones[tone]}`}>{children}</span>;
}

/** Week-over-week delta. For position, lower is better (invert). */
export function Delta({ now, before, invert = false, digits = 0, percent = false }: { now: number | null; before: number | null; invert?: boolean; digits?: number; percent?: boolean }) {
  if (now === null || before === null) return <span className="text-xs text-slate-400">—</span>;
  const diff = now - before;
  if (Math.abs(diff) < Math.pow(10, -digits) / 2) return <span className="text-xs text-slate-400">no change</span>;
  const good = invert ? diff < 0 : diff > 0;
  const pctText = percent && before !== 0 ? ` (${diff > 0 ? "+" : ""}${((diff / before) * 100).toFixed(0)}%)` : "";
  return (
    <span className={`text-xs font-semibold ${good ? "text-emerald-600" : "text-rose-600"}`}>
      {diff > 0 ? "▲" : "▼"} {Math.abs(diff).toFixed(digits)}
      {pctText}
    </span>
  );
}

export function shortUrl(url: string | null): string {
  if (!url) return "—";
  try {
    const u = new URL(url);
    const path = decodeURIComponent(u.pathname) || "/";
    return path === "/" ? "/ (homepage)" : path;
  } catch {
    return url;
  }
}

export function Skeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-10 bg-slate-100 rounded-2xl" />
      ))}
    </div>
  );
}
