"use client";

import { useEffect, useState } from "react";
import { card, Pill } from "./ui";

type Check = { name: string; route: string; status: "ok" | "error" | "not-configured"; detail: string; ms: number };

export default function ApiStatus() {
  const [checks, setChecks] = useState<Check[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/seo/status", { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const body = (await res.json()) as { checks: Check[] };
        if (alive) setChecks(body.checks);
      })
      .catch((e: unknown) => alive && setError(e instanceof Error ? e.message : "Network error"));
    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className={`${card} mb-10`}>
      <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <span className="text-teal-500">🔌</span> Data Connections
      </h2>
      {error ? (
        <p className="text-sm text-rose-600">Status check failed: {error}</p>
      ) : !checks ? (
        <p className="text-sm text-slate-400">Checking APIs…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {checks.map((c) => (
            <div key={c.name} className="bg-slate-50 rounded-2xl p-4 text-sm">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-medium text-slate-700">{c.name}</span>
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
