"use client";

import { useState, useEffect } from "react";

type Priority = "high" | "medium" | "low";

interface Todo {
  id: number;
  text: string;
  done: boolean;
  priority: Priority;
}

export default function SeoDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  const [weeklyTodos, setWeeklyTodos] = useState<Todo[]>([]);
  const [nextSunday, setNextSunday] = useState("");
  const [myTodos, setMyTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [newPriority, setNewPriority] = useState<Priority>("medium");

  const defaultWeeklyTodos: Todo[] = [
    { id: 1, text: "Write 2 high-quality blog posts (Tier 2 keywords)", done: false, priority: "high" },
    { id: 2, text: "Publish 1 news / trend article", done: false, priority: "high" },
    { id: 3, text: "Create & upload 1 new video (HeyGen)", done: false, priority: "high" },
    { id: 4, text: "Optimize 1 existing page (title, H1, internal links)", done: false, priority: "high" },
    { id: 5, text: "Check competitor rankings (Nushama + Ketamine Aventura)", done: false, priority: "high" },
  ];

  const getNextSunday = () => {
    const now = new Date();
    const day = now.getDay();
    const daysUntilSunday = day === 0 ? 7 : 7 - day;
    const next = new Date(now);
    next.setDate(now.getDate() + daysUntilSunday);
    next.setHours(0, 0, 0, 0);
    return next;
  };

  useEffect(() => {
    setChecking(false);

    const savedWeekly = localStorage.getItem("seo-weekly-todos");
    const lastWeeklyReset = localStorage.getItem("seo-weekly-last-reset");
    const nextSun = getNextSunday();
    setNextSunday(nextSun.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }));

    const shouldResetWeekly = () => {
      if (!lastWeeklyReset) return true;
      const last = new Date(lastWeeklyReset);
      const today = new Date();
      return today.getDay() === 0 && last.toDateString() !== today.toDateString();
    };

    if (shouldResetWeekly()) {
      setWeeklyTodos(defaultWeeklyTodos);
      localStorage.setItem("seo-weekly-last-reset", new Date().toISOString());
    } else if (savedWeekly) {
      setWeeklyTodos(JSON.parse(savedWeekly));
    } else {
      setWeeklyTodos(defaultWeeklyTodos);
      localStorage.setItem("seo-weekly-last-reset", new Date().toISOString());
    }

    const savedMy = localStorage.getItem("seo-my-todos");
    if (savedMy) setMyTodos(JSON.parse(savedMy));
  }, []);

  useEffect(() => {
    localStorage.setItem("seo-weekly-todos", JSON.stringify(weeklyTodos));
  }, [weeklyTodos]);

  useEffect(() => {
    localStorage.setItem("seo-my-todos", JSON.stringify(myTodos));
  }, [myTodos]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/seo-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setError(data.message || "Incorrect password");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    document.cookie = "seo_auth=; Max-Age=0; path=/";
    setIsAuthenticated(false);
  };

  const toggleWeekly = (id: number) => {
    setWeeklyTodos(weeklyTodos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const resetWeekly = () => {
    if (confirm("Reset weekly tasks to defaults?")) {
      setWeeklyTodos(defaultWeeklyTodos);
      localStorage.setItem("seo-weekly-last-reset", new Date().toISOString());
    }
  };

  const addMyTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setMyTodos([...myTodos, { id: Date.now(), text: newTodo.trim(), done: false, priority: newPriority }]);
    setNewTodo("");
    setNewPriority("medium");
  };

  const toggleMy = (id: number) => {
    setMyTodos(myTodos.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteMy = (id: number) => {
    setMyTodos(myTodos.filter(t => t.id !== id));
  };

  const sortedMyTodos = [...myTodos].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    if (a.done !== b.done) return a.done ? 1 : -1;
    return order[a.priority] - order[b.priority];
  });

  const priorityColors = {
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-blue-100 text-blue-700",
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center">
        <p className="text-[#0B1D36] text-lg">Loading dashboard...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#0B1D36]">SEO Control Center</h1>
            <p className="text-[#555] mt-2">Protected area — enter password</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A66B] text-[#1a1a1a]"
                placeholder="Enter password"
                autoFocus
                disabled={loading}
              />
            </div>
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            <button type="submit" disabled={loading} className="w-full bg-[#C9A66B] hover:bg-[#b8955a] disabled:opacity-60 text-[#0B1D36] font-semibold py-3 px-6 rounded-lg transition">
              {loading ? "Checking..." : "Unlock Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <header className="bg-[#0B1D36] text-white py-4 px-6 flex justify-between items-center shadow-md">
        <div className="font-semibold text-lg tracking-wide">Rewired Ketamine · SEO Control Center</div>
        <button onClick={handleLogout} className="text-sm bg-[#C9A66B] text-[#0B1D36] px-4 py-1.5 rounded-md font-medium hover:bg-[#b8955a] transition">
          Logout
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Grok Button */}
        <div className="flex justify-center mb-12">
          <a href="https://x.com/i/grok" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-[#0B1D36] flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-[#C9A66B] group-hover:border-[#d4b57a]">
              <div className="text-center">
                <div className="text-white text-3xl font-bold mb-1">Grok</div>
                <div className="text-[#C9A66B] text-sm font-medium">Talk to me about SEO</div>
              </div>
            </div>
          </a>
        </div>

        {/* ===== ROW 1 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Weekly Tasks */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-bold text-[#0B1D36] flex items-center gap-2"><span>📅</span> Weekly Tasks</h2>
              <button onClick={resetWeekly} className="text-xs text-[#C9A66B] hover:underline">Reset</button>
            </div>
            <p className="text-xs text-[#888] mb-4">Resets every Sunday · Next: {nextSunday}</p>
            <ul className="space-y-2">
              {weeklyTodos.map((todo) => (
                <li key={todo.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                  <input type="checkbox" checked={todo.done} onChange={() => toggleWeekly(todo.id)} className="w-4 h-4 accent-[#C9A66B] cursor-pointer" />
                  <span className={`flex-1 text-sm ${todo.done ? "line-through text-gray-400" : "text-[#333]"}`}>{todo.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* My Tasks */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2"><span>✅</span> My Tasks</h2>
            <p className="text-sm text-[#666] mb-4">Personal list · never auto-resets</p>
            <form onSubmit={addMyTodo} className="space-y-3 mb-4">
              <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a personal task..." className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A66B]" />
              <div className="flex gap-2">
                <select value={newPriority} onChange={(e) => setNewPriority(e.target.value as Priority)} className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A66B]">
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <button type="submit" className="bg-[#C9A66B] text-[#0B1D36] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#b8955a] transition">Add</button>
              </div>
            </form>
            <ul className="space-y-2 max-h-52 overflow-y-auto">
              {sortedMyTodos.length === 0 && <li className="text-sm text-[#888] italic">No personal tasks yet.</li>}
              {sortedMyTodos.map((todo) => (
                <li key={todo.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group">
                  <input type="checkbox" checked={todo.done} onChange={() => toggleMy(todo.id)} className="w-4 h-4 accent-[#C9A66B] cursor-pointer" />
                  <span className={`flex-1 text-sm ${todo.done ? "line-through text-gray-400" : "text-[#333]"}`}>{todo.text}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColors[todo.priority]}`}>{todo.priority}</span>
                  <button onClick={() => deleteMy(todo.id)} className="text-red-400 opacity-0 group-hover:opacity-100 text-sm hover:text-red-600">✕</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Keyword Tracker */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2"><span>🎯</span> Keyword Tracker</h2>
            <p className="text-sm text-[#666] mb-4">Prioritized targets</p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-[#0B1D36] mb-1">Tier 1 – Protect</p>
                <ul className="space-y-1 text-[#333]">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Ketamine Aventura FL</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Ketamine therapy Aventura</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Ketamine Miami</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Ketamine South Florida</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0B1D36] mb-1">Tier 2 – Push</p>
                <ul className="space-y-1 text-[#333]">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Ketamine infusion therapy Florida</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Ketamine clinic Florida</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Ketamine for depression Miami</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Fully guided ketamine therapy Aventura</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===== ROW 2 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Site Health */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2"><span>🔍</span> Site Health</h2>
            <p className="text-sm text-[#666] mb-5">Run free scans</p>
            <div className="space-y-3">
              <a href="https://pagespeed.web.dev/analysis?url=https://www.rewiredketamine.com" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">PageSpeed Insights</a>
              <a href="https://securityheaders.com/?q=https://www.rewiredketamine.com&followRedirects=on" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">Security Headers</a>
              <a href="https://search.google.com/test/rich-results?url=https://www.rewiredketamine.com" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">Rich Results Test</a>
              <a href="https://www.ssllabs.com/ssltest/analyze.html?d=www.rewiredketamine.com" target="_blank" className="block w-full text-center border border-[#0B1D36] text-[#0B1D36] py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#0B1D36] hover:text-white transition">SSL Grade</a>
              <a href="https://search.google.com/search-console" target="_blank" className="block w-full text-center border border-[#C9A66B] text-[#0B1D36] py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#C9A66B] transition">Search Console</a>
            </div>
          </div>

          {/* Competitors */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2"><span>🏆</span> Competitors</h2>
            <p className="text-sm text-[#666] mb-5">Local clinics to monitor</p>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-[#0B1D36]">1. Nushama</p>
                <p className="text-xs text-[#666] mb-1">nushama.com</p>
                <div className="flex gap-3 text-xs">
                  <a href="https://nushama.com" target="_blank" className="text-[#C9A66B] hover:underline">Website</a>
                  <a href="https://www.similarweb.com/website/nushama.com/" target="_blank" className="text-[#C9A66B] hover:underline">Traffic</a>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0B1D36]">2. Ketamine Aventura</p>
                <p className="text-xs text-[#666] mb-1">ketamineaventura.com</p>
                <div className="flex gap-3 text-xs">
                  <a href="https://ketamineaventura.com" target="_blank" className="text-[#C9A66B] hover:underline">Website</a>
                  <a href="https://www.similarweb.com/website/ketamineaventura.com/" target="_blank" className="text-[#C9A66B] hover:underline">Traffic</a>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0B1D36]">3. One Mind Wellness</p>
                <p className="text-xs text-[#666] mb-1">onemindketamine.com</p>
                <div className="flex gap-3 text-xs">
                  <a href="https://onemindketamine.com" target="_blank" className="text-[#C9A66B] hover:underline">Website</a>
                  <a href="https://www.similarweb.com/website/onemindketamine.com/" target="_blank" className="text-[#C9A66B] hover:underline">Traffic</a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tools */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2"><span>⚡</span> Quick Tools</h2>
            <p className="text-sm text-[#666] mb-5">Everyday free resources</p>
            <ul className="space-y-3 text-sm">
              <li><a href="https://search.google.com/search-console" target="_blank" className="text-[#C9A66B] hover:underline">Google Search Console</a></li>
              <li><a href="https://analytics.google.com" target="_blank" className="text-[#C9A66B] hover:underline">Google Analytics 4</a></li>
              <li><a href="https://pagespeed.web.dev/" target="_blank" className="text-[#C9A66B] hover:underline">PageSpeed Insights</a></li>
              <li><a href="https://ahrefs.com/free-seo-tools" target="_blank" className="text-[#C9A66B] hover:underline">Ahrefs Free Tools</a></li>
            </ul>
          </div>
        </div>

        {/* ===== ROW 3 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Social Media */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2"><span>📱</span> Social Media</h2>
            <p className="text-sm text-[#666] mb-5">Manage all social posts</p>
            <a href="https://www.munchstudio.com/" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">
              Open Munch Studio
            </a>
          </div>

          {/* AI Video */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2"><span>🎬</span> AI Video</h2>
            <p className="text-sm text-[#666] mb-5">Generate weekly video content</p>
            <a href="https://www.heygen.com/" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">
              Open HeyGen
            </a>
          </div>

          {/* Industry News - Ketamine only */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2"><span>📰</span> Industry News</h2>
            <p className="text-sm text-[#666] mb-5">Latest ketamine headlines</p>
            <a href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">
              Ketamine in the News
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-[#888] mt-12">Private SEO Control Center · Rewired Ketamine</p>
      </main>
    </div>
  );
}