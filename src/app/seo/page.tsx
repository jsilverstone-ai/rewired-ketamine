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
  high: "bg-rose-500/20 text-rose-200 border-rose-400/40",
  medium: "bg-amber-500/20 text-amber-200 border-amber-400/40",
  low: "bg-teal-500/20 text-teal-200 border-teal-400/40",
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
  const [backlinks, setBacklinks] = useState<any[]>([]);
  const [serpData, setSerpData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedWeekly = localStorage.getItem("seo-weekly-todos");
    const savedMy = localStorage.getItem("seo-my-todos");
    const lastReset = localStorage.getItem("seo-last-reset");
    const today = new Date();
    const day = today.getDay();
    const lastResetDate = lastReset ? new Date(lastReset) : null;
    const shouldReset = day === 0 && (!lastResetDate || lastResetDate.toDateString() !== today.toDateString());

    if (shouldReset) {
      setWeeklyTodos(WEEKLY_DEFAULTS);
      localStorage.setItem("seo-weekly-todos", JSON.stringify(WEEKLY_DEFAULTS));
      localStorage.setItem("seo-last-reset", today.toISOString());
    } else if (savedWeekly) {
      setWeeklyTodos(JSON.parse(savedWeekly));
    }
    if (savedMy) setMyTodos(JSON.parse(savedMy));
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
        const [rankRes, siteRes, backRes, serpRes] = await Promise.all([
          fetch("/api/mangools/rankings"),
          fetch("/api/mangools/site"),
          fetch("/api/mangools/backlinks"),
          fetch("/api/mangools/serp?kw=ketamine%20clinic%20miami"),
        ]);

        const rankData = await rankRes.json();
        const site = await siteRes.json();
        const back = await backRes.json();
        const serp = await serpRes.json();

        if (rankData.success) setKeywords(rankData.keywords || []);
        if (site.success) setSiteData(site);
        if (back.success) setBacklinks(back.links || []);
        if (serp.success) setSerpData(serp);
      } catch (err) {
        console.error(err);
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
    setWeeklyTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };
  const toggleMy = (id: string) => {
    setMyTodos((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };
  const deleteWeekly = (id: string) => setWeeklyTodos((prev) => prev.filter((t) => t.id !== id));
  const deleteMy = (id: string) => setMyTodos((prev) => prev.filter((t) => t.id !== id));

  const addMyTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setMyTodos((prev) => [
      ...prev,
      { id: Date.now().toString(), text: newTask.trim(), completed: false, priority: newPriority },
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
      <div className="min-h-screen bg-[#0c1222] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-[#152038] border border-[#2a3a5c] rounded-3xl p-10 w-full max-w-md shadow-2xl">
          <h1 className="text-2xl font-bold text-white mb-8 text-center">SEO Control Center</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-[#0c1222] border border-[#2a3a5c] rounded-2xl px-5 py-4 text-white mb-5 focus:outline-none focus:ring-2 focus:ring-teal-400/60"
          />
          {error && <p className="text-rose-300 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold py-4 rounded-2xl transition">
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1222] via-[#111827] to-[#0c1222] text-slate-100">
      {/* Top bar */}
      <div className="border-b border-[#1e2d4a] bg-[#152038]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 bg-[#1e2d4a] hover:bg-[#2a3a5c] text-white px-5 py-2.5 rounded-2xl text-sm font-medium transition">
            ← Home
          </Link>
          <h1 className="text-lg font-semibold text-white/90 hidden sm:block tracking-wide">SEO Control Center</h1>
          <div className="w-28" />
        </div>
      </div>

      {/* Large centered Grok button */}
      <div className="flex justify-center py-12">
        <a
          href="https://grok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-36 h-36 rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 hover:from-teal-300 hover:to-blue-400 text-white flex items-center justify-center text-center font-bold text-lg shadow-[0_0_50px_rgba(45,212,191,0.4)] transition-all hover:scale-105"
        >
          Talk to<br />Grok
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-5 pb-20">
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-7">
          {/* Battle Plan - clearer version */}
          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-7 shadow-xl">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-orange-400"></span>
              Battle Plan
            </h2>
            <p className="text-sm text-slate-400 mb-6">Your 1-hour weekly routine</p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <div className="font-medium text-white">Rank Review</div>
                  <div className="text-sm text-slate-400 mt-0.5">Look at Tier 1 keywords. Focus on anything ranking 4–15.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <div className="font-medium text-white">Competitor Check</div>
                  <div className="text-sm text-slate-400 mt-0.5">See who is ranking above you for your main keywords.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <div className="font-medium text-white">Site Health</div>
                  <div className="text-sm text-slate-400 mt-0.5">Check Search Console + PageSpeed on key pages.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <div className="font-medium text-white">Technical + Links</div>
                  <div className="text-sm text-slate-400 mt-0.5">Screaming Frog + add stronger internal links.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center font-bold text-sm">5</div>
                <div>
                  <div className="font-medium text-white">Optimize 1 Page</div>
                  <div className="text-sm text-slate-400 mt-0.5">Improve one page that is ranking between 4–15.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Tasks */}
          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-7 shadow-xl flex flex-col">
            <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-teal-400"></span>
              Weekly Tasks
            </h2>
            <div className="space-y-3 flex-1">
              {weeklyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 bg-[#1e2d4a]/50 hover:bg-[#1e2d4a] rounded-2xl p-4 transition">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleWeekly(task.id)} className="mt-1 w-5 h-5 accent-teal-400" />
                  <span className={`flex-1 text-sm leading-relaxed ${task.completed ? "line-through text-slate-500" : "text-slate-200"}`}>{task.text}</span>
                  <button onClick={() => deleteWeekly(task.id)} className="text-rose-400/80 hover:text-rose-300 hover:bg-rose-500/20 p-1.5 rounded-xl transition text-2xl font-bold leading-none">×</button>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-5">Resets every Sunday</p>
          </div>

          {/* My Tasks */}
          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-7 shadow-xl flex flex-col">
            <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-violet-400"></span>
              My Tasks
            </h2>
            <form onSubmit={addMyTask} className="mb-5 space-y-3">
              <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a task..." className="w-full bg-[#0c1222] border border-[#2a3a5c] rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-400/50" />
              <div className="flex gap-3">
                <select value={newPriority} onChange={(e) => setNewPriority(e.target.value as Priority)} className="bg-[#0c1222] border border-[#2a3a5c] rounded-2xl px-3 py-3 text-sm text-white">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button type="submit" className="flex-1 bg-violet-500 hover:bg-violet-400 text-white text-sm font-medium py-3 rounded-2xl transition">Add</button>
              </div>
            </form>
            <div className="space-y-3 flex-1 overflow-y-auto max-h-80">
              {sortedMyTodos.length === 0 && <p className="text-sm text-slate-500">No personal tasks yet</p>}
              {sortedMyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 bg-[#1e2d4a]/50 hover:bg-[#1e2d4a] rounded-2xl p-4 transition">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleMy(task.id)} className="mt-1 w-5 h-5 accent-violet-400" />
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm block ${task.completed ? "line-through text-slate-500" : "text-slate-200"}`}>{task.text}</span>
                    {task.priority && <span className={`inline-block mt-1.5 text-[11px] px-2 py-0.5 rounded-lg border ${priorityColors[task.priority]}`}>{task.priority}</span>}
                  </div>
                  <button onClick={() => deleteMy(task.id)} className="text-rose-400/80 hover:text-rose-300 hover:bg-rose-500/20 p-1.5 rounded-xl transition text-2xl font-bold leading-none">×</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-7">
          {/* Keyword Tracker */}
          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-7 shadow-xl flex flex-col">
            <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              Keyword Tracker
            </h2>
            <p className="text-xs text-slate-400 mb-4">Open Mangools for full rankings (API limitation)</p>
            {loading ? (
              <p className="text-sm text-slate-400">Loading...</p>
            ) : (
              <div className="space-y-6 flex-1 overflow-y-auto max-h-[26rem]">
                <div>
                  <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">Tier 1 – High Priority</h3>
                  <div className="space-y-2">
                    {tier1Keywords.length === 0 ? <p className="text-xs text-slate-500">No matches yet</p> : tier1Keywords.map((k, i) => (
                      <div key={i} className="flex items-center justify-between bg-[#1e2d4a]/60 rounded-2xl px-4 py-3 text-sm">
                        <span className="truncate pr-3 text-slate-200">{k.keyword}</span>
                        <span className="font-mono font-bold text-slate-400">{k.rank ?? "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-3">Tier 2 – Supporting</h3>
                  <div className="space-y-2">
                    {tier2Keywords.length === 0 ? <p className="text-xs text-slate-500">No matches yet</p> : tier2Keywords.map((k, i) => (
                      <div key={i} className="flex items-center justify-between bg-[#1e2d4a]/40 rounded-2xl px-4 py-2.5 text-sm">
                        <span className="truncate pr-3 text-slate-300">{k.keyword}</span>
                        <span className="font-mono font-semibold text-slate-500">{k.rank ?? "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <a href="https://app.mangools.com/serpwatcher" target="_blank" rel="noopener noreferrer" className="mt-5 text-sm text-teal-400 hover:text-teal-300">
              Open full Rank Tracking in Mangools →
            </a>
          </div>

          {/* Site Health */}
          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-7 shadow-xl">
            <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              Site Health
            </h2>
            {siteData ? (
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                <div className="bg-[#1e2d4a]/70 rounded-2xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Domain Authority</div>
                  <div className="text-3xl font-bold text-white">{siteData.domainAuthority ?? "—"}</div>
                </div>
                <div className="bg-[#1e2d4a]/70 rounded-2xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Page Authority</div>
                  <div className="text-3xl font-bold text-white">{siteData.pageAuthority ?? "—"}</div>
                </div>
                <div className="bg-[#1e2d4a]/70 rounded-2xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Citation Flow</div>
                  <div className="text-3xl font-bold text-white">{siteData.citationFlow ?? "—"}</div>
                </div>
                <div className="bg-[#1e2d4a]/70 rounded-2xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Trust Flow</div>
                  <div className="text-3xl font-bold text-white">{siteData.trustFlow ?? "—"}</div>
                </div>
                <div className="bg-[#1e2d4a]/70 rounded-2xl p-4 col-span-2">
                  <div className="text-slate-400 text-xs mb-1">Referring IPs</div>
                  <div className="text-3xl font-bold text-white">{siteData.referringIPs ?? "—"}</div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-400 mb-4">Loading metrics...</p>
            )}

            <div className="border-t border-[#2a3a5c]/60 pt-5">
              <h3 className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider mb-3">Recent Backlinks</h3>
              {backlinks.length === 0 ? (
                <p className="text-xs text-slate-500">No backlink data yet</p>
              ) : (
                <div className="space-y-2 max-h-36 overflow-y-auto">
                  {backlinks.slice(0, 5).map((link, i) => (
                    <div key={i} className="text-xs bg-[#1e2d4a]/50 rounded-xl px-3 py-2 truncate">
                      {link.source?.replace("https://", "").replace("http://", "").split("/")[0] || "—"}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Competitors */}
          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-7 shadow-xl">
            <h2 className="text-xl font-semibold mb-5 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-rose-400"></span>
              Competitors
            </h2>
            <p className="text-xs text-slate-400 mb-4">Live SERP: ketamine clinic miami</p>
            {serpData?.organic?.length > 0 ? (
              <div className="space-y-2.5 max-h-72 overflow-y-auto">
                {serpData.organic.slice(0, 6).map((item: any, i: number) => (
                  <div key={i} className="bg-[#1e2d4a]/60 rounded-2xl px-4 py-3 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-rose-400 font-mono text-xs font-bold w-5">{item.position}</span>
                      <span className="truncate text-slate-200">{item.title || item.domain || "—"}</span>
                    </div>
                    <div className="text-xs text-slate-500 truncate mt-1 pl-8">{item.domain || item.url}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400">Loading SERP data...</p>
            )}
          </div>
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-7 shadow-xl">
            <h2 className="text-xl font-semibold mb-3">Social Media</h2>
            <p className="text-sm text-slate-400 mb-6">Managed with Munch Studio</p>
            <a href="https://www.munchstudio.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium px-6 py-3 rounded-2xl transition">
              Open Munch Studio
            </a>
          </div>

          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-7 shadow-xl">
            <h2 className="text-xl font-semibold mb-3">AI Video</h2>
            <p className="text-sm text-slate-400 mb-6">Create videos with HeyGen</p>
            <a href="https://www.heygen.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-violet-500 hover:bg-violet-400 text-white text-sm font-medium px-6 py-3 rounded-2xl transition">
              Open HeyGen
            </a>
          </div>

          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-7 shadow-xl">
            <h2 className="text-xl font-semibold mb-3">Ketamine in the News</h2>
            <p className="text-sm text-slate-400 mb-6">Latest industry news</p>
            <a href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en" target="_blank" rel="noopener noreferrer" className="inline-block bg-rose-500 hover:bg-rose-400 text-white text-sm font-medium px-6 py-3 rounded-2xl transition">
              View Ketamine News
            </a>
          </div>
        </div>

        {/* Centered Quick Tools */}
        <div className="flex justify-center">
          <div className="bg-[#152038]/95 border border-[#2a3a5c]/80 rounded-3xl p-8 shadow-xl max-w-3xl w-full">
            <h2 className="text-xl font-semibold mb-6 text-center">Quick Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <a href="https://app.mangools.com/" target="_blank" rel="noopener noreferrer" className="bg-[#1e2d4a]/80 hover:bg-[#1e2d4a] rounded-2xl px-4 py-4 text-center transition">Mangools</a>
              <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="bg-[#1e2d4a]/80 hover:bg-[#1e2d4a] rounded-2xl px-4 py-4 text-center transition">Search Console</a>
              <a href="https://www.screamingfrog.co.uk/seo-spider/" target="_blank" rel="noopener noreferrer" className="bg-[#1e2d4a]/80 hover:bg-[#1e2d4a] rounded-2xl px-4 py-4 text-center transition">Screaming Frog</a>
              <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="bg-[#1e2d4a]/80 hover:bg-[#1e2d4a] rounded-2xl px-4 py-4 text-center transition">PageSpeed</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}