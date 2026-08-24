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
  { id: "w3", text: "Review Google Search Console – Pages (watch 404s)", completed: false },
  { id: "w4", text: "Check GSC Performance (clicks & impressions)", completed: false },
  { id: "w5", text: "Spot-check 1–2 old URLs for proper redirects", completed: false },
  { id: "w6", text: "Run PageSpeed on homepage + 1–2 key pages", completed: false },
  { id: "w7", text: "Pick 1 page ranking 4–15 and optimize it", completed: false },
  { id: "w8", text: "Add stronger internal links to the optimized page", completed: false },
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
  high: "bg-rose-100 text-rose-700 border-rose-200",
  medium: "bg-amber-100 text-amber-700 border-amber-200",
  low: "bg-teal-100 text-teal-700 border-teal-200",
};

export default function SEOPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [weeklyTodos, setWeeklyTodos] = useState<Task[]>(WEEKLY_DEFAULTS);
  const [myTodos, setMyTodos] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  const [newPriority, setNewPriority] = useState<Priority>("medium");
  const [showGuide, setShowGuide] = useState(true);

  const [note1, setNote1] = useState("");
  const [note2, setNote2] = useState("");
  const [note3, setNote3] = useState("");
  const [note4, setNote4] = useState("");
  const [note5, setNote5] = useState("");

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

    setNote1(localStorage.getItem("seo-note-1") || "");
    setNote2(localStorage.getItem("seo-note-2") || "");
    setNote3(localStorage.getItem("seo-note-3") || "");
    setNote4(localStorage.getItem("seo-note-4") || "");
    setNote5(localStorage.getItem("seo-note-5") || "");
  }, []);

  useEffect(() => {
    localStorage.setItem("seo-weekly-todos", JSON.stringify(weeklyTodos));
  }, [weeklyTodos]);

  useEffect(() => {
    localStorage.setItem("seo-my-todos", JSON.stringify(myTodos));
  }, [myTodos]);

  useEffect(() => { localStorage.setItem("seo-note-1", note1); }, [note1]);
  useEffect(() => { localStorage.setItem("seo-note-2", note2); }, [note2]);
  useEffect(() => { localStorage.setItem("seo-note-3", note3); }, [note3]);
  useEffect(() => { localStorage.setItem("seo-note-4", note4); }, [note4]);
  useEffect(() => { localStorage.setItem("seo-note-5", note5); }, [note5]);

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
      <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white border border-slate-200 rounded-3xl p-10 w-full max-w-md shadow-xl">
          <h1 className="text-2xl font-bold text-slate-800 mb-8 text-center">SEO Control Center</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 mb-5 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
          {error && <p className="text-rose-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-white font-semibold py-4 rounded-2xl transition">
            Unlock Dashboard
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-700">
      {/* Top bar */}
      <div className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-2.5 rounded-2xl text-sm font-medium transition">
            ← Home
          </Link>
          <h1 className="text-lg font-semibold text-slate-700 hidden sm:block">SEO Control Center</h1>
          <div className="w-28" />
        </div>
      </div>

      {/* Large centered Grok button */}
      <div className="flex justify-center py-10">
        <a
          href="https://grok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-white flex items-center justify-center text-center font-bold text-base shadow-lg shadow-teal-200 transition-all hover:scale-105"
        >
          Talk to<br />Grok
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-5 pb-16">

        {/* 5 STEP CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="text-3xl mb-3">📊</div>
            <div className="text-xs font-bold text-teal-600 mb-1">STEP 1</div>
            <div className="font-semibold text-slate-800 text-sm mb-1">Rank Review</div>
            <div className="text-xs text-slate-500 leading-relaxed">Check Tier 1 keywords. Focus on positions 4–15.</div>
          </div>
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="text-3xl mb-3">👀</div>
            <div className="text-xs font-bold text-teal-600 mb-1">STEP 2</div>
            <div className="font-semibold text-slate-800 text-sm mb-1">Competitor Check</div>
            <div className="text-xs text-slate-500 leading-relaxed">See who ranks above you and what they’re doing.</div>
          </div>
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="text-3xl mb-3">🩺</div>
            <div className="text-xs font-bold text-teal-600 mb-1">STEP 3</div>
            <div className="font-semibold text-slate-800 text-sm mb-1">Site Health</div>
            <div className="text-xs text-slate-500 leading-relaxed">Search Console + PageSpeed on key pages.</div>
          </div>
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="text-3xl mb-3">🔗</div>
            <div className="text-xs font-bold text-teal-600 mb-1">STEP 4</div>
            <div className="font-semibold text-slate-800 text-sm mb-1">Technical + Links</div>
            <div className="text-xs text-slate-500 leading-relaxed">Screaming Frog + stronger internal links.</div>
          </div>
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
            <div className="text-3xl mb-3">✨</div>
            <div className="text-xs font-bold text-teal-600 mb-1">STEP 5</div>
            <div className="font-semibold text-slate-800 text-sm mb-1">Optimize 1 Page</div>
            <div className="text-xs text-slate-500 leading-relaxed">Improve one page ranking 4–15 and publish.</div>
          </div>
        </div>

        {/* DETAILED GUIDE WITH NOTES */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span>📋</span> How to Execute the Weekly Plan
            </h2>
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="text-sm text-teal-600 hover:text-teal-500 font-medium"
            >
              {showGuide ? "Hide Guide" : "Show Guide"}
            </button>
          </div>

          {showGuide && (
            <div className="space-y-10 text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="bg-teal-100 text-teal-700 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  Rank Review (10 min)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 ml-2 mb-3">
                  <li>Open Keyword Tracker + Mangools Rank Tracking</li>
                  <li>Look only at Tier 1 keywords</li>
                  <li>Write down every keyword ranking between position 4 and 15</li>
                </ol>
                <textarea
                  value={note1}
                  onChange={(e) => setNote1(e.target.value)}
                  placeholder="Your notes for Step 1 (example: ketamine clinic miami → #7)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[90px]"
                />
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="bg-teal-100 text-teal-700 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  Competitor Check (10 min)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 ml-2 mb-3">
                  <li>Take one keyword from Step 1</li>
                  <li>Look at the Competitors card or search in Google</li>
                  <li>Note the top 2–3 sites ranking above you and what you notice</li>
                </ol>
                <textarea
                  value={note2}
                  onChange={(e) => setNote2(e.target.value)}
                  placeholder="Your notes for Step 2 (who is ranking above you and why)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[90px]"
                />
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="bg-teal-100 text-teal-700 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  Site Health (8 min)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 ml-2 mb-3">
                  <li>Check the Site Health card</li>
                  <li>Open Google Search Console → Coverage / Pages</li>
                  <li>Run PageSpeed Insights on homepage + one service page</li>
                </ol>
                <textarea
                  value={note3}
                  onChange={(e) => setNote3(e.target.value)}
                  placeholder="Your notes for Step 3 (any errors, low scores, etc.)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[90px]"
                />
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="bg-teal-100 text-teal-700 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  Technical + Internal Links (15 min)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 ml-2 mb-3">
                  <li>Check for broken links or missing titles</li>
                  <li>Add 2–4 stronger internal links to the pages from Step 1</li>
                </ol>
                <textarea
                  value={note4}
                  onChange={(e) => setNote4(e.target.value)}
                  placeholder="Your notes for Step 4 (pages you linked from / to)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[90px]"
                />
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <span className="bg-teal-100 text-teal-700 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                  Optimize 1 Page (20–25 min)
                </h3>
                <ol className="list-decimal list-inside space-y-1 text-slate-600 ml-2 mb-3">
                  <li>Pick one page ranking between 4–15</li>
                  <li>Improve Title + Meta Description</li>
                  <li>Strengthen content + add FAQ if needed</li>
                  <li>Publish the changes</li>
                </ol>
                <textarea
                  value={note5}
                  onChange={(e) => setNote5(e.target.value)}
                  placeholder="Your notes for Step 5 (which page you chose and what you changed)"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-200 min-h-[90px]"
                />
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-xl">🤖</span> After finishing → Copy your notes into Grok
                </h3>
                <p className="text-slate-600 mb-3">Use this prompt and paste everything you wrote above:</p>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-700 font-mono leading-relaxed whitespace-pre-wrap">
{`I’m working on SEO for rewiredketamine.com (ketamine clinic in Aventura / Miami).

Here’s what I found this week:

**Step 1 – Keywords ranking 4–15:**
[paste your Step 1 notes]

**Step 2 – Competitors:**
[paste your Step 2 notes]

**Step 3 – Site Health:**
[paste your Step 3 notes]

**Step 4 – Technical + Links:**
[paste your Step 4 notes]

**Step 5 – Page I optimized:**
[paste your Step 5 notes]

Please give me a clear, practical action plan for the page I’m focusing on. Tell me exactly what else I should change.`}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MAIN CARDS - Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Weekly Tasks */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <h2 className="text-lg font-semibold text-slate-800 mb-5 flex items-center gap-2">
              <span className="text-teal-500">✓</span> Weekly Tasks
            </h2>
            <div className="space-y-2.5 flex-1">
              {weeklyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 bg-slate-50 hover:bg-slate-100 rounded-2xl p-3.5 transition">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleWeekly(task.id)} className="mt-1 w-4 h-4 accent-teal-500" />
                  <span className={`flex-1 text-sm ${task.completed ? "line-through text-slate-400" : "text-slate-700"}`}>{task.text}</span>
                  <button onClick={() => deleteWeekly(task.id)} className="text-slate-400 hover:text-rose-500 p-1 rounded-lg transition text-xl font-bold leading-none">×</button>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-4">Resets every Sunday</p>
          </div>

          {/* My Tasks */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <h2 className="text-lg font-semibold text-slate-800 mb-5 flex items-center gap-2">
              <span className="text-violet-500">✎</span> My Tasks
            </h2>
            <form onSubmit={addMyTask} className="mb-4 space-y-2.5">
              <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a task..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200" />
              <div className="flex gap-2">
                <select value={newPriority} onChange={(e) => setNewPriority(e.target.value as Priority)} className="bg-slate-50 border border-slate-200 rounded-2xl px-3 py-2.5 text-sm">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button type="submit" className="flex-1 bg-violet-500 hover:bg-violet-400 text-white text-sm font-medium py-2.5 rounded-2xl transition">Add</button>
              </div>
            </form>
            <div className="space-y-2.5 flex-1 overflow-y-auto max-h-72">
              {sortedMyTodos.length === 0 && <p className="text-sm text-slate-400">No personal tasks yet</p>}
              {sortedMyTodos.map((task) => (
                <div key={task.id} className="flex items-start gap-3 bg-slate-50 hover:bg-slate-100 rounded-2xl p-3.5 transition">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleMy(task.id)} className="mt-1 w-4 h-4 accent-violet-500" />
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm block ${task.completed ? "line-through text-slate-400" : "text-slate-700"}`}>{task.text}</span>
                    {task.priority && <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-lg border ${priorityColors[task.priority]}`}>{task.priority}</span>}
                  </div>
                  <button onClick={() => deleteMy(task.id)} className="text-slate-400 hover:text-rose-500 p-1 rounded-lg transition text-xl font-bold leading-none">×</button>
                </div>
              ))}
            </div>
          </div>

          {/* Keyword Tracker */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
            <h2 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-emerald-500">📈</span> Keyword Tracker
            </h2>
            <p className="text-xs text-slate-400 mb-4">Open Mangools for full rankings</p>
            {loading ? (
              <p className="text-sm text-slate-400">Loading...</p>
            ) : (
              <div className="space-y-5 flex-1 overflow-y-auto max-h-80">
                <div>
                  <h3 className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Tier 1</h3>
                  <div className="space-y-1.5">
                    {tier1Keywords.length === 0 ? <p className="text-xs text-slate-400">No matches yet</p> : tier1Keywords.map((k, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2 text-sm">
                        <span className="truncate pr-2 text-slate-700">{k.keyword}</span>
                        <span className="font-mono font-semibold text-slate-400">{k.rank ?? "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-sky-600 uppercase tracking-wider mb-2">Tier 2</h3>
                  <div className="space-y-1.5">
                    {tier2Keywords.length === 0 ? <p className="text-xs text-slate-400">No matches yet</p> : tier2Keywords.map((k, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-50/70 rounded-xl px-3 py-2 text-sm">
                        <span className="truncate pr-2 text-slate-600">{k.keyword}</span>
                        <span className="font-mono text-slate-400">{k.rank ?? "—"}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <a href="https://app.mangools.com/serpwatcher" target="_blank" rel="noopener noreferrer" className="mt-4 text-xs text-teal-600 hover:text-teal-500">
              Open full Rank Tracking →
            </a>
          </div>
        </div>

        {/* MAIN CARDS - Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Site Health */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800 mb-5 flex items-center gap-2">
              <span className="text-amber-500">🩺</span> Site Health
            </h2>
            {siteData ? (
              <div className="grid grid-cols-2 gap-3 text-sm mb-5">
                <div className="bg-slate-50 rounded-2xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Domain Authority</div>
                  <div className="text-2xl font-bold text-slate-800">{siteData.domainAuthority ?? "—"}</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Page Authority</div>
                  <div className="text-2xl font-bold text-slate-800">{siteData.pageAuthority ?? "—"}</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Citation Flow</div>
                  <div className="text-2xl font-bold text-slate-800">{siteData.citationFlow ?? "—"}</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4">
                  <div className="text-slate-400 text-xs mb-1">Trust Flow</div>
                  <div className="text-2xl font-bold text-slate-800">{siteData.trustFlow ?? "—"}</div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 col-span-2">
                  <div className="text-slate-400 text-xs mb-1">Referring IPs</div>
                  <div className="text-2xl font-bold text-slate-800">{siteData.referringIPs ?? "—"}</div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-400 mb-4">Loading metrics...</p>
            )}
            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">Recent Backlinks</h3>
              {backlinks.length === 0 ? (
                <p className="text-xs text-slate-400">No backlink data yet</p>
              ) : (
                <div className="space-y-1.5 max-h-32 overflow-y-auto">
                  {backlinks.slice(0, 5).map((link, i) => (
                    <div key={i} className="text-xs bg-slate-50 rounded-xl px-3 py-1.5 truncate text-slate-600">
                      {link.source?.replace("https://", "").replace("http://", "").split("/")[0] || "—"}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Google Search Console Monitoring */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-blue-500">📊</span> Google Search Console
            </h2>
            <p className="text-sm text-slate-500 mb-4">Simple monitoring plan (next 2–4 weeks)</p>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="font-medium mb-1">1. Pages / Coverage</div>
                <div className="text-slate-500 text-xs leading-relaxed">
                  Watch the “Not found (404)” number. It should start declining as old pages drop off.
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="font-medium mb-1">2. Performance Report</div>
                <div className="text-slate-500 text-xs leading-relaxed">
                  Check total clicks & impressions. A small temporary dip is normal after the site move.
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4">
                <div className="font-medium mb-1">3. Spot-check old URLs</div>
                <div className="text-slate-500 text-xs leading-relaxed">
                  Test a few old links. They should redirect correctly to the new pages.
                </div>
              </div>
            </div>
            <a
              href="https://search.google.com/search-console"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-sm text-blue-600 hover:text-blue-500 font-medium"
            >
              Open Google Search Console →
            </a>
          </div>

          {/* Competitors */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <span className="text-rose-500">👀</span> Competitors
            </h2>
            <p className="text-xs text-slate-400 mb-4">Live SERP: ketamine clinic miami</p>
            {serpData?.organic?.length > 0 ? (
              <div className="space-y-2 max-h-72 overflow-y-auto">
                {serpData.organic.slice(0, 6).map((item: any, i: number) => (
                  <div key={i} className="bg-slate-50 rounded-2xl px-3.5 py-2.5 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-rose-500 font-mono text-xs font-bold w-5">{item.position}</span>
                      <span className="truncate text-slate-700">{item.title || item.domain || "—"}</span>
                    </div>
                    <div className="text-xs text-slate-400 truncate mt-0.5 pl-7">{item.domain || item.url}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-400">Loading SERP data...</p>
            )}
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">📱 Social Media</h2>
            <p className="text-sm text-slate-500 mb-5">Managed with Munch Studio</p>
            <a href="https://www.munchstudio.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-500 hover:bg-teal-400 text-white text-sm font-medium px-5 py-2.5 rounded-2xl transition">
              Open Munch Studio
            </a>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">🎬 AI Video</h2>
            <p className="text-sm text-slate-500 mb-5">Create videos with HeyGen</p>
            <a href="https://www.heygen.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-violet-500 hover:bg-violet-400 text-white text-sm font-medium px-5 py-2.5 rounded-2xl transition">
              Open HeyGen
            </a>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">📰 Ketamine News</h2>
            <p className="text-sm text-slate-500 mb-5">Latest industry news</p>
            <a href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en" target="_blank" rel="noopener noreferrer" className="inline-block bg-rose-500 hover:bg-rose-400 text-white text-sm font-medium px-5 py-2.5 rounded-2xl transition">
              View News
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}