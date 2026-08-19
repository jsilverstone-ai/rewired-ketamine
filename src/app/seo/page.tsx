"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Priority = "high" | "medium" | "low";

interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority?: Priority;
}

interface Keyword {
  keyword: string;
  rank: number | null;
  previousRank: number | null;
  searchVolume: number | null;
  url: string | null;
}

const WEEKLY_DEFAULTS: Task[] = [
  { id: "w1", text: "Check rankings in Mangools", completed: false },
  { id: "w2", text: "Review Keyword Tracker card", completed: false },
  { id: "w3", text: "Review Google Search Console", completed: false },
  { id: "w4", text: "Run Screaming Frog crawl (or key pages)", completed: false },
  { id: "w5", text: "Check Core Web Vitals (homepage + 2–3 service pages)", completed: false },
  { id: "w6", text: "Pick 1–2 pages ranking 4–15 to improve", completed: false },
  { id: "w7", text: "Add stronger internal links to improved pages", completed: false },
];

const TIER_1 = [
  "ketamine therapy near me",
  "ketamine clinic aventura",
  "ketamine clinic miami",
  "ketamine infusion miami",
  "ketamine therapy aventura",
  "ketamine for depression miami",
  "iv ketamine therapy near me",
];

const TIER_2 = [
  "ketamine treatment florida",
  "ketamine clinic florida",
  "ketamine south florida",
  "ketamine near me",
  "ketamine for depression",
  "ketamine therapy for ptsd",
  "ketamine infusion therapy florida",
  "ketamine treatment in florida",
  "ketamine aventura fl",
  "ketamine miami",
];

const priorityColors = {
  high: "bg-red-500/20 text-red-300 border-red-500/50",
  medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500/50",
  low: "bg-emerald-500/20 text-emerald-300 border-emerald-500/50",
};

export default function SEOPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [weeklyTodos, setWeeklyTodos] = useState<Task[]>(WEEKLY_DEFAULTS);
  const [myTodos, setMyTodos] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState<Priority>("medium");

  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [siteData, setSiteData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedWeekly = localStorage.getItem("seo-weekly-todos");
    const savedMy = localStorage.getItem("seo-my-todos");
    const lastReset = localStorage.getItem("seo-last-reset");

    const today = new Date();
    const day = today.getDay();
    const lastResetDate = lastReset ? new Date(lastReset) : null;

    const shouldReset =
      day === 0 &&
      (!lastResetDate || lastResetDate.toDateString() !== today.toDateString());

    if (shouldReset) {
      setWeeklyTodos(WEEKLY_DEFAULTS);
      localStorage.setItem("seo-weekly-todos", JSON.stringify(WEEKLY_DEFAULTS));
      localStorage.setItem("seo-last-reset", today.toISOString());
    } else if (savedWeekly) {
      setWeeklyTodos(JSON.parse(savedWeekly));
    }

    if (savedMy) {
      setMyTodos(JSON.parse(savedMy));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("seo-weekly-todos", JSON.stringify(weeklyTodos));
  }, [weeklyTodos]);

  useEffect(() => {
    localStorage.setItem("seo-my-todos", JSON.stringify(myTodos));
  }, [myTodos]);

  useEffect(() => {
    async function loadData() {
      try {
        const [rankRes, siteRes] = await Promise.all([
          fetch("/api/mangools/rankings"),
          fetch("/api/mangools/site"),
        ]);

        const rankData = await rankRes.json();
        const site = await siteRes.json();

        if (rankData.success) setKeywords(rankData.keywords || []);
        if (site.success) setSiteData(site);
      } catch (err) {
        console.error("Failed to load Mangools data", err);
      } finally {
        setLoading(false);
      }
    }

    if (authenticated) loadData();
  }, [authenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/seo-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) setAuthenticated(true);
      else setError("Incorrect password");
    } catch {
      setError("Login failed");
    }
  };

  const toggleWeekly = (id: string) => {
    setWeeklyTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const toggleMy = (id: string) => {
    setMyTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteWeekly = (id: string) => {
    setWeeklyTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const deleteMy = (id: string) => {
    setMyTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const addMyTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setMyTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        priority: newPriority,
      },
    ]);
    setNewTask("");
  };

  const sortedMyTodos = [...myTodos].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return (order[a.priority || "medium"] || 1) - (order[b.priority || "medium"] || 1);
  });

  const normalize = (str: string) => str.toLowerCase().trim();

  const tier1Keywords = keywords.filter((k) =>
    TIER_1.some((t) => normalize(k.keyword).includes(normalize(t)) || normalize(t).includes(normalize(k.keyword)))
  );

  const tier2Keywords = keywords.filter((k) =>
    TIER_2.some((t) => normalize(k.keyword).includes(normalize(t)) || normalize(t).includes(normalize(k.keyword)))
  );

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="bg-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-md shadow-2xl"
        >
          <h1 className="text-2xl font-bold text-white mb-6 text-center">SEO Control Center</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition"
          >
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top bar */}
      <div className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            ← Home
          </Link>
          <h1 className="text-lg font-semibold text-white hidden sm:block">SEO Control Center</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Large centered Grok button */}
      <div className="flex justify-center py-8">
        <a
          href="https://x.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center text-center font-bold text-sm shadow-2xl shadow-cyan-500/30 transition-transform hover:scale-105"
        >
          Talk to<br />Grok
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Weekly Tasks */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Weekly Tasks
            </h2>
            <div className="space-y-2 flex-1">
              {weeklyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 group bg-slate-800/50 hover:bg-slate-800 rounded-lg p-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleWeekly(task.id)}
                    className="mt-1 w-4 h-4 accent-cyan-500"
                  />
                  <span className={`flex-1 text-sm ${task.completed ? "line-through text-slate-500" : "text-slate-200"}`}>
                    {task.text}
                  </span>
                  <button
                    onClick={() => deleteWeekly(task.id)}
                    className="opacity-80 hover:opacity-100 text-red-400 hover:text-red-300 p-1.5 rounded-md hover:bg-red-500/20 transition text-xl leading-none font-bold"
                    title="Delete"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">Resets every Sunday</p>
          </div>

          {/* My Tasks */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400"></span>
              My Tasks
            </h2>

            <form onSubmit={addMyTask} className="mb-4 space-y-2">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a task..."
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-violet-500"
              />
              <div className="flex gap-2">
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as Priority)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-2 py-2 text-sm text-white"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button type="submit" className="flex-1 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium py-2 rounded-lg transition">
                  Add
                </button>
              </div>
            </form>

            <div className="space-y-2 flex-1 overflow-y-auto max-h-80">
              {sortedMyTodos.length === 0 && <p className="text-sm text-slate-500">No personal tasks yet</p>}
              {sortedMyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 group bg-slate-800/50 hover:bg-slate-800 rounded-lg p-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleMy(task.id)}
                    className="mt-1 w-4 h-4 accent-violet-500"
                  />
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm block ${task.completed ? "line-through text-slate-500" : "text-slate-200"}`}>
                      {task.text}
                    </span>
                    {task.priority && (
                      <span className={`inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded border ${priorityColors[task.priority]}`}>
                        {task.priority}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => deleteMy(task.id)}
                    className="opacity-80 hover:opacity-100 text-red-400 hover:text-red-300 p-1.5 rounded-md hover:bg-red-500/20 transition text-xl leading-none font-bold"
                    title="Delete"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Keyword Tracker - Tier 1 & Tier 2 */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Keyword Tracker
            </h2>

            {loading ? (
              <p className="text-sm text-slate-400">Loading rankings...</p>
            ) : (
              <div className="space-y-5 flex-1 overflow-y-auto max-h-[28rem]">
                {/* Tier 1 */}
                <div>
                  <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                    Tier 1 – High Priority
                  </h3>
                  <div className="space-y-1.5">
                    {tier1Keywords.length === 0 ? (
                      <p className="text-xs text-slate-500">No Tier 1 matches yet</p>
                    ) : (
                      tier1Keywords.map((k, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-800/60 rounded-lg px-3 py-2 text-sm">
                          <span className="truncate pr-2 text-slate-200">{k.keyword}</span>
                          <span className={`font-mono font-semibold min-w-[2rem] text-right ${
                            k.rank === null ? "text-slate-500" : k.rank <= 3 ? "text-emerald-400" : k.rank <= 10 ? "text-cyan-400" : "text-slate-300"
                          }`}>
                            {k.rank ?? "—"}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Tier 2 */}
                <div>
                  <h3 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
                    Tier 2 – Supporting
                  </h3>
                  <div className="space-y-1.5">
                    {tier2Keywords.length === 0 ? (
                      <p className="text-xs text-slate-500">No Tier 2 matches yet</p>
                    ) : (
                      tier2Keywords.map((k, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-800/40 rounded-lg px-3 py-2 text-sm">
                          <span className="truncate pr-2 text-slate-300">{k.keyword}</span>
                          <span className={`font-mono font-semibold min-w-[2rem] text-right ${
                            k.rank === null ? "text-slate-500" : k.rank <= 10 ? "text-cyan-400" : "text-slate-400"
                          }`}>
                            {k.rank ?? "—"}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            <a
              href="https://app.mangools.com/serpwatcher"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs text-cyan-400 hover:text-cyan-300"
            >
              Open full Mangools report →
            </a>
          </div>

          {/* Site Health */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Site Health
            </h2>
            {siteData ? (
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-slate-800/60 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Domain Authority</div>
                  <div className="text-xl font-bold text-white">{siteData.domainAuthority ?? "—"}</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Page Authority</div>
                  <div className="text-xl font-bold text-white">{siteData.pageAuthority ?? "—"}</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Citation Flow</div>
                  <div className="text-xl font-bold text-white">{siteData.citationFlow ?? "—"}</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Trust Flow</div>
                  <div className="text-xl font-bold text-white">{siteData.trustFlow ?? "—"}</div>
                </div>
                <div className="bg-slate-800/60 rounded-lg p-3 col-span-2">
                  <div className="text-slate-400 text-xs mb-1">Referring IPs</div>
                  <div className="text-xl font-bold text-white">{siteData.referringIPs ?? "—"}</div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-400">Loading site metrics...</p>
            )}
            <div className="mt-4 pt-4 border-t border-slate-700 space-y-2 text-sm">
              <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="block text-cyan-400 hover:text-cyan-300">
                Google Search Console →
              </a>
              <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="block text-cyan-400 hover:text-cyan-300">
                PageSpeed Insights →
              </a>
            </div>
          </div>

          {/* Competitors */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              Competitors
            </h2>
            <div className="space-y-3 text-sm">
              <a href="https://app.mangools.com/siteprofiler?url=nushama.com" target="_blank" rel="noopener noreferrer" className="block bg-slate-800/60 hover:bg-slate-800 rounded-lg p-3 transition">
                nushama.com
              </a>
              <a href="https://app.mangools.com/siteprofiler" target="_blank" rel="noopener noreferrer" className="block bg-slate-800/60 hover:bg-slate-800 rounded-lg p-3 transition">
                Add more competitors →
              </a>
            </div>
          </div>

          {/* Quick Tools */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400"></span>
              Quick Tools
            </h2>
            <div className="space-y-2 text-sm">
              <a href="https://app.mangools.com/" target="_blank" rel="noopener noreferrer" className="block bg-slate-800/60 hover:bg-slate-800 rounded-lg px-3 py-2.5 transition">Mangools Dashboard</a>
              <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="block bg-slate-800/60 hover:bg-slate-800 rounded-lg px-3 py-2.5 transition">Google Search Console</a>
              <a href="https://www.screamingfrog.co.uk/seo-spider/" target="_blank" rel="noopener noreferrer" className="block bg-slate-800/60 hover:bg-slate-800 rounded-lg px-3 py-2.5 transition">Screaming Frog</a>
              <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="block bg-slate-800/60 hover:bg-slate-800 rounded-lg px-3 py-2.5 transition">PageSpeed Insights</a>
            </div>
          </div>

          {/* Munch */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-3">Social Media</h2>
            <p className="text-sm text-slate-400 mb-4">Managed with Munch Studio</p>
            <a href="https://www.munchstudio.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              Open Munch Studio
            </a>
          </div>

          {/* HeyGen */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-3">AI Video</h2>
            <p className="text-sm text-slate-400 mb-4">Create videos with HeyGen</p>
            <a href="https://www.heygen.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              Open HeyGen
            </a>
          </div>

          {/* News */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-semibold mb-3">Ketamine in the News</h2>
            <p className="text-sm text-slate-400 mb-4">Latest industry news</p>
            <a href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en" target="_blank" rel="noopener noreferrer" className="inline-block bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
              View Ketamine News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}