"use client";

import { useState } from "react";

export const card = "bg-white rounded-3xl p-6 shadow-sm border border-slate-100";
export const tile = "bg-slate-50 rounded-2xl p-4";

export function SectionTitle({ icon, title, subtitle, right }: { icon: string; title: string; subtitle?: string; right?: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5">
      <div>
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <span>{icon}</span> {title}
        </h2>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>
      {right}
    </div>
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
          // Fallback for browsers that block the async clipboard API.
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
    info: "bg-sky-100 text-sky-700",
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
