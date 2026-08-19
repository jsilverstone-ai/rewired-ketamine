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
  high: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  medium: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  low: "bg-teal-500/15 text-teal-300 border-teal-500/30",
};

export default function SEOPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [weeklyTodos, setWeeklyTodos] = useState<Task[]>(WEEKLY_DEFAULTS);
  const [myTodos, setMyTodos] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState<Priority>("medium");

  // Live data
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

  // Fetch all live Mangools data
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
      <div className="min-h-screen bg-[#0f1419] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-[#1a2332] border border-[#2d3a4f] rounded-2xl p-8 w-full max-w-md shadow-2xl">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">SEO Control Center</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-[#0f1419] border border-[#2d3a4f] rounded-xl px-4 py-3 text-white mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {error && <p className="text-rose-400 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-3 rounded-xl transition">
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1419] via-[#141b24] to-[#0f1419] text-slate-100">
      {/* Top bar */}
      <div className="border-b border-[#2d3a4f]/80 bg-[#1a2332]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 bg-[#243044] hover:bg-[#2d3a4f] text-white px-4 py-2 rounded-xl text-sm font-medium transition">
            ← Home
          </Link>
          <h1 className="text-lg font-semibold text-white/90 hidden sm:block tracking-wide">SEO Control Center</h1>
          <div className="w-24" />
        </div>
      </div>

      {/* Large centered Grok button */}
      <div className="flex justify-center py-10">
        <a
          href="https://grok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 hover:from-teal-300 hover:to-blue-400 text-white flex items-center justify-center text-center font-bold text-base shadow-[0_0_40px_rgba(45,212,191,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_55px_rgba(45,212,191,0.5)]"
        >
          Talk to<br />Grok
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-16">
        {/* ROW 1: Battle Plan | Weekly Tasks | My Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Battle Plan */}
          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-5 shadow-xl shadow-black/30">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
              Battle Plan
            </h2>
            <p className="text-xs text-slate-400 mb-4">1-Hour Weekly SEO Flow</p>
            <ol className="space-y-2.5 text-sm text-slate-300">
              <li className="flex gap-2.5"><span className="text-orange-400 font-bold w-4">1</span> Rank Review – Tier 1 (positions 4–15)</li>
              <li className="flex gap-2.5"><span className="text-orange-400 font-bold w-4">2</span> Competitor Snapshot</li>
              <li className="flex gap-2.5"><span className="text-orange-400 font-bold w-4">3</span> Site Health – GSC + PageSpeed</li>
              <li className="flex gap-2.5"><span className="text-orange-400 font-bold w-4">4</span> Technical + Internal Links</li>
              <li className="flex gap-2.5"><span className="text-orange-400 font-bold w-4">5</span> Optimize 1 page ranking 4–15</li>
            </ol>
            <p className="text-xs text-slate-500 mt-4">Do this once per week</p>
          </div>

          {/* Weekly Tasks */}
          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-5 shadow-xl shadow-black/30 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
              Weekly Tasks
            </h2>
            <div className="space-y-2 flex-1">
              {weeklyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 bg-[#243044]/60 hover:bg-[#243044] rounded-xl p-3 transition">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleWeekly(task.id)} className="mt-1 w-4 h-4 accent-teal-500" />
                  <span className={`flex-1 text-sm ${task.completed ? "line-through text-slate-500" : "text-slate-200"}`}>{task.text}</span>
                  <button onClick={() => deleteWeekly(task.id)} className="text-rose-400/90 hover:text-rose-300 hover:bg-rose-500/20 p-1.5 rounded-lg transition text-xl font-bold leading-none">×</button>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">Resets every Sunday</p>
          </div>

          {/* My Tasks */}
          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-5 shadow-xl shadow-black/30 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-400"></span>
              My Tasks
            </h2>
            <form onSubmit={addMyTask} className="mb-4 space-y-2">
              <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a task..." className="w-full bg-[#0f1419] border border-[#2d3a4f] rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50" />
              <div className="flex gap-2">
                <select value={newPriority} onChange={(e) => setNewPriority(e.target.value as Priority)} className="bg-[#0f1419] border border-[#2d3a4f] rounded-xl px-2 py-2 text-sm text-white">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button type="submit" className="flex-1 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium py-2 rounded-xl transition">Add</button>
              </div>
            </form>
            <div className="space-y-2 flex-1 overflow-y-auto max-h-72">
              {sortedMyTodos.length === 0 && <p className="text-sm text-slate-500">No personal tasks yet</p>}
              {sortedMyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 bg-[#243044]/60 hover:bg-[#243044] rounded-xl p-3 transition">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleMy(task.id)} className="mt-1 w-4 h-4 accent-violet-500" />
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm block ${task.completed ? "line-through text-slate-500" : "text-slate-200"}`}>{task.text}</span>
                    {task.priority && <span className={`inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded border ${priorityColors[task.priority]}`}>{task.priority}</span>}
                  </div>
                  <button onClick={() => deleteMy(task.id)} className="text-rose-400/90 hover:text-rose-300 hover:bg-rose-500/20 p-1.5 rounded-lg transition text-xl font-bold leading-none">×</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ROW 2: Keyword Tracker | Site Health | Competitors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Keyword Tracker */}
          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-5 shadow-xl shadow-black/30 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              Keyword Tracker
            </h2>
            {loading ? (
              <p className="text-sm text-slate-400">Loading rankings...</p>
            ) : (
              <div className="space-y-5 flex-1 overflow-y-auto max-h-[26rem]">
                <div>
                  <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Tier 1 – High Priority</h3>
                  <div className="space-y-1.5">
                    {tier1Keywords.length === 0 ? (
                      <p className="text-xs text-slate-500">No matches yet</p>
                    ) : (
                      tier1Keywords.map((k, i) => (
                        <div key={i} className="flex items-center justify-between bg-[#243044]/70 rounded-xl px-3 py-2.5 text-sm">
                          <span className="truncate pr-3 text-slate-200">{k.keyword}</span>
                          <div className="flex items-center gap-3 shrink-0">
                            <span className="text-slate-500 text-xs">{k.searchVolume ?? "—"}</span>
                            <span className={`font-mono font-bold min-w-[1.8rem] text-right ${k.rank === null ? "text-slate-500" : k.rank <= 3 ? "text-emerald-400" : k.rank <= 10 ? "text-teal-300" : "text-slate-300"}`}>
                              {k.rank ?? "—"}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">Tier 2 – Supporting</h3>
                  <div className="space-y-1.5">
                    {tier2Keywords.length === 0 ? (
                      <p className="text-xs text-slate-500">No matches yet</p>
                    ) : (
                      tier2Keywords.map((k, i) => (
                        <div key={i} className="flex items-center justify-between bg-[#243044]/40 rounded-xl px-3 py-2 text-sm">
                          <span className="truncate pr-3 text-slate-300">{k.keyword}</span>
                          <span className={`font-mono font-semibold min-w-[1.8rem] text-right ${k.rank === null ? "text-slate-500" : k.rank <= 10 ? "text-teal-300" : "text-slate-400"}`}>
                            {k.rank ?? "—"}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Site Health (with live Backlinks) */}
          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-5 shadow-xl shadow-black/30">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              Site Health
            </h2>

            {siteData ? (
              <div className="grid grid-cols-2 gap-3 text-sm mb-5">
                <div className="bg-[#243044]/70 rounded-xl p-3">
                  <div className="text-slate-400 text-xs mb-1">Domain Authority</div>
                  <div className="text-2xl font-bold text-white">{siteData.domainAuthority ?? "—"}</div>
                </div>
                <div className="bg-[#243044]/70 rounded-xl p-3">
                  <div className="text-slate-400 text-xs mb-1">Page Authority</div>
                  <div className="text-2xl font-bold text-white">{siteData.pageAuthority ?? "—"}</div>
                </div>
                <div className="bg-[#243044]/70 rounded-xl p-3">
                  <div className="text-slate-400 text-xs mb-1">Citation Flow</div>
                  <div className="text-2xl font-bold text-white">{siteData.citationFlow ?? "—"}</div>
                </div>
                <div className="bg-[#243044]/70 rounded-xl p-3">
                  <div className="text-slate-400 text-xs mb-1">Trust Flow</div>
                  <div className="text-2xl font-bold text-white">{siteData.trustFlow ?? "—"}</div>
                </div>
                <div className="bg-[#243044]/70 rounded-xl p-3 col-span-2">
                  <div className="text-slate-400 text-xs mb-1">Referring IPs</div>
                  <div className="text-2xl font-bold text-white">{siteData.referringIPs ?? "—"}</div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-400 mb-4">Loading site metrics...</p>
            )}

            {/* Live Backlinks inside Site Health */}
            <div className="border-t border-[#2d3a4f]/60 pt-4">
              <h3 className="text-xs font-semibold text-amber-400/90 uppercase tracking-wider mb-2">Recent Backlinks</h3>
              {backlinks.length === 0 ? (
                <p className="text-xs text-slate-500">No backlink data yet</p>
              ) : (
                <div className="space-y-1.5 max-h-40 overflow-y-auto">
                  {backlinks.slice(0, 6).map((link, i) => (
                    <div key={i} className="text-xs bg-[#243044]/50 rounded-lg px-2.5 py-1.5 truncate">
                      <span className="text-slate-300">{link.source?.replace("https://", "").replace("http://", "").split("/")[0] || "—"}</span>
                      {link.anchor && <span className="text-slate-500 ml-2">“{link.anchor.slice(0, 30)}”</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Competitors with live SERP */}
          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-5 shadow-xl shadow-black/30">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
              Competitors
            </h2>

            <p className="text-xs text-slate-400 mb-3">Live SERP: ketamine clinic miami</p>

            {serpData?.organic?.length > 0 ? (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {serpData.organic.slice(0, 6).map((item: any, i: number) => (
                  <div key={i} className="bg-[#243044]/60 rounded-xl px-3 py-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-rose-400 font-mono text-xs w-5">{item.position}</span>
                      <span className="truncate text-slate-200">{item.title || item.domain || "—"}</span>
                    </div>
                    <div className="text-xs text-slate-500 truncate mt-0.5 pl-7">{item.domain || item.url}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400">Loading SERP data...</p>
            )}

            <div className="mt-4 pt-3 border-t border-[#2d3a4f]/60">
              <a href="https://app.mangools.com/siteprofiler?url=nushama.com" target="_blank" rel="noopener noreferrer" className="text-xs text-teal-400 hover:text-teal-300">
                nushama.com in SiteProfiler →
              </a>
            </div>
          </div>
        </div>

        {/* ROW 3: Social | AI Video | News */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-5 shadow-xl shadow-black/30">
            <h2 className="text-lg font-semibold mb-3">Social Media</h2>
            <p className="text-sm text-slate-400 mb-4">Managed with Munch Studio</p>
            <a href="https://www.munchstudio.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition">
              Open Munch Studio
            </a>
          </div>

          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-5 shadow-xl shadow-black/30">
            <h2 className="text-lg font-semibold mb-3">AI Video</h2>
            <p className="text-sm text-slate-400 mb-4">Create videos with HeyGen</p>
            <a href="https://www.heygen.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition">
              Open HeyGen
            </a>
          </div>

          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-5 shadow-xl shadow-black/30">
            <h2 className="text-lg font-semibold mb-3">Ketamine in the News</h2>
            <p className="text-sm text-slate-400 mb-4">Latest industry news</p>
            <a href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en" target="_blank" rel="noopener noreferrer" className="inline-block bg-rose-600 hover:bg-rose-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition">
              View Ketamine News
            </a>
          </div>
        </div>

        {/* Centered Quick Tools */}
        <div className="flex justify-center">
          <div className="bg-[#1a2332]/90 border border-[#2d3a4f]/70 rounded-2xl p-6 shadow-xl shadow-black/30 max-w-2xl w-full">
            <h2 className="text-lg font-semibold mb-4 text-center flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
              Quick Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <a href="https://app.mangools.com/" target="_blank" rel="noopener noreferrer" className="bg-[#243044]/80 hover:bg-[#243044] rounded-xl px-3 py-3 text-center transition">Mangools</a>
              <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="bg-[#243044]/80 hover:bg-[#243044] rounded-xl px-3 py-3 text-center transition">Search Console</a>
              <a href="https://www.screamingfrog.co.uk/seo-spider/" target="_blank" rel="noopener noreferrer" className="bg-[#243044]/80 hover:bg-[#243044] rounded-xl px-3 py-3 text-center transition">Screaming Frog</a>
              <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="bg-[#243044]/80 hover:bg-[#243044] rounded-xl px-3 py-3 text-center transition">PageSpeed</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}