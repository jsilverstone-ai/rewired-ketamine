"use client";

import { useEffect, useState } from "react";
import type { ActionItem } from "@/lib/seo-scorecard";
import { card, Pill, Skeleton } from "./ui";

const PRIORITY_TONE: Record<ActionItem["priority"], "bad" | "info" | "good"> = {
  high: "bad",
  medium: "info",
  low: "good",
};

export default function ActionPlan({
  actions,
  loading,
  weekKey,
}: {
  actions: ActionItem[];
  loading: boolean;
  weekKey: string;
}) {
  const storageKey = `seo-actions-done-${weekKey}`;
  const [doneIds, setDoneIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (Array.isArray(parsed)) setDoneIds(parsed);
      }
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const toggle = (id: string) => {
    setDoneIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const completedCount = actions.filter((a) => doneIds.includes(a.id)).length;

  return (
    <section className={`${card} mb-6`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#0B1D36] flex items-center gap-2">
            <span>🎯</span> Do This Week
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Top priorities auto-picked from your rankings, Search Console, and competitor gaps
          </p>
        </div>
        {actions.length > 0 && (
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl self-start sm:self-auto">
            {completedCount}/{actions.length} done
          </span>
        )}
      </div>

      {loading && actions.length === 0 ? (
        <Skeleton rows={3} />
      ) : actions.length === 0 ? (
        <p className="text-sm text-slate-400">
          No actions yet — waiting on Search Console or Mangools data.
        </p>
      ) : (
        <div className="space-y-2.5">
          {actions.map((a, idx) => {
            const done = doneIds.includes(a.id);
            return (
              <div
                key={a.id}
                className={`flex items-start gap-3.5 rounded-2xl p-4 border transition ${
                  done
                    ? "bg-slate-50/60 border-slate-100 opacity-65"
                    : "bg-slate-50/90 border-slate-200/60 hover:border-teal-200"
                }`}
              >
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => toggle(a.id)}
                  aria-label={`Mark "${a.title}" complete`}
                  className="mt-1 w-4 h-4 accent-teal-600 shrink-0 cursor-pointer"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-slate-400">#{idx + 1}</span>
                    <Pill tone={PRIORITY_TONE[a.priority]}>
                      {a.priority === "high" ? "High impact" : a.priority === "medium" ? "Medium" : "Momentum"}
                    </Pill>
                    <span className="text-[11px] font-medium text-slate-500">{a.category}</span>
                  </div>
                  <div className={`text-sm font-semibold text-[#0B1D36] ${done ? "line-through text-slate-400" : ""}`}>
                    {a.title}
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{a.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
