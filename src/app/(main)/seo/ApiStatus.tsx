"use client";

import { useEffect, useState } from "react";
import { Pill } from "./ui";

type Check = { name: string; route: string; status: "ok" | "error" | "not-configured"; detail: string; ms: number };

const SHORT_NAMES: Record<string, string> = {
  "Mangools rank tracking (SERPWatcher)": "SERPWatcher",
  "Mangools API key": "Mangools API",
  "Google Search Console": "Search Console",
  "Dashboard password": "Password",
};

export default function ApiStatus() {
  const [checks, setChecks] = useState<Check[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch("/api/seo/status", { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const body = (await res.json()) as { checks: Check[] };
        if (alive) {
          setChecks(body.checks);
          if (body.checks.some((c) => c.status !== "ok")) setExpanded(true);
        }
      })
      .catch((e: unknown) => {
        if (alive) {
          setError(e instanceof Error ? e.message : "Network error");
          setExpanded(true);
        }
      });
    return () => {
      alive = false;
    };
  }, []);

  const hasIssue = Boolean(error) || Boolean(checks?.some((c) => c.status !== "ok"));

  return (
    <div className={`rounded-2xl border px-4 py-2.5 mb-6 transition ${hasIssue ? "bg-rose-50/70 border-rose-200" : "bg-white/90 border-slate-200/70 shadow-sm"}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
          <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">Data Connections</span>
          {error ? (
            <span className="text-rose-600 font-medium">Status check failed: {error}</span>
          ) : !checks ? (
            <span className="text-slate-400">Checking connections…</span>
          ) : (
            checks.map((c) => {
              const dot = c.status === "ok" ? "bg-emerald-500" : c.status === "not-configured" ? "bg-amber-400" : "bg-rose-500";
              return (
                <span key={c.name} className="inline-flex items-center gap-1.5 text-slate-700" title={c.detail}>
                  <span className={`w-2 h-2 rounded-full ${dot}`} />
                  <span>{SHORT_NAMES[c.name] ?? c.name}</span>
                </span>
              );
            })
          )}
        </div>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="text-xs font-medium text-slate-500 hover:text-teal-700 transition"
        >
          {expanded ? "Hide details" : "Details"}
        </button>
      </div>

      {expanded && checks && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3 pt-3 border-t border-slate-200/70">
          {checks.map((c) => (
            <div key={c.name} className="bg-slate-50 rounded-2xl p-3.5 text-sm">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-medium text-slate-700 text-xs">{c.name}</span>
                <Pill tone={c.status === "ok" ? "good" : c.status === "not-configured" ? "info" : "bad"}>
                  {c.status === "ok" ? "Working" : c.status === "not-configured" ? "Not connected" : "Error"}
                </Pill>
              </div>
              <div className="text-xs text-slate-500 break-words">{c.detail}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
