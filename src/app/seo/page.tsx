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

  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [newPriority, setNewPriority] = useState<Priority>("medium");
  const [nextResetDate, setNextResetDate] = useState<string>("");

  const defaultTodos: Todo[] = [
    { id: 1, text: "Write 2 high-quality blog posts (Tier 2 keywords)", done: false, priority: "high" },
    { id: 2, text: "Publish 1 news / trend article", done: false, priority: "high" },
    { id: 3, text: "Create & upload 1 new video (HeyGen)", done: false, priority: "high" },
    { id: 4, text: "Optimize 1 existing page (title, H1, internal links)", done: false, priority: "high" },
    { id: 5, text: "Check competitor rankings (Nushama + Ketamine Aventura)", done: false, priority: "high" },
    { id: 6, text: "Update keyword ranking tracker in Google Sheets", done: false, priority: "high" },
    { id: 7, text: "Review Google Search Console performance", done: false, priority: "high" },
    { id: 8, text: "Audit top 5 landing pages for Core Web Vitals", done: false, priority: "medium" },
    { id: 9, text: "Check backlinks & fix any broken ones", done: false, priority: "medium" },
  ];

  // Calculate the next 1st Monday of the month
  const getNextFirstMonday = () => {
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();

    // Start from current month
    let date = new Date(year, month, 1);

    // Find the first Monday
    while (date.getDay() !== 1) {
      date.setDate(date.getDate() + 1);
    }

    // If that Monday has already passed this month, go to next month
    if (date < now) {
      month += 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
      date = new Date(year, month, 1);
      while (date.getDay() !== 1) {
        date.setDate(date.getDate() + 1);
      }
    }

    return date;
  };

  useEffect(() => {
    setChecking(false);

    const saved = localStorage.getItem("seo-todos");
    const lastReset = localStorage.getItem("seo-todos-last-reset");
    const nextMonday = getNextFirstMonday();
    setNextResetDate(nextMonday.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }));

    const shouldReset = () => {
      if (!lastReset) return true;

      const lastResetDate = new Date(lastReset);
      const today = new Date();

      // Check if today is the 1st Monday and we haven't reset yet this month
      const isFirstMonday =
        today.getDay() === 1 &&
        today.getDate() <= 7;

      const alreadyResetThisMonth =
        lastResetDate.getMonth() === today.getMonth() &&
        lastResetDate.getFullYear() === today.getFullYear();

      return isFirstMonday && !alreadyResetThisMonth;
    };

    if (shouldReset()) {
      setTodos(defaultTodos);
      localStorage.setItem("seo-todos-last-reset", new Date().toISOString());
    } else if (saved) {
      setTodos(JSON.parse(saved));
    } else {
      setTodos(defaultTodos);
      localStorage.setItem("seo-todos-last-reset", new Date().toISOString());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("seo-todos", JSON.stringify(todos));
  }, [todos]);

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
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    document.cookie = "seo_auth=; Max-Age=0; path=/";
    setIsAuthenticated(false);
  };

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        done: false,
        priority: newPriority,
      },
    ]);
    setNewTodo("");
    setNewPriority("medium");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const resetToDefaults = () => {
    if (confirm("This will replace your current list with the default weekly + monthly tasks. Continue?")) {
      setTodos(defaultTodos);
      localStorage.setItem("seo-todos-last-reset", new Date().toISOString());
    }
  };

  const sortedTodos = [...todos].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    if (a.done !== b.done) return a.done ? 1 : -1;
    return priorityOrder[a.priority] - priorityOrder[b.priority];
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C9A66B] hover:bg-[#b8955a] disabled:opacity-60 text-[#0B1D36] font-semibold py-3 px-6 rounded-lg transition"
            >
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
        <div className="font-semibold text-lg tracking-wide">
          Rewired Ketamine · SEO Control Center
        </div>
        <button
          onClick={handleLogout}
          className="text-sm bg-[#C9A66B] text-[#0B1D36] px-4 py-1.5 rounded-md font-medium hover:bg-[#b8955a] transition"
        >
          Logout
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-center mb-14">
          <a href="https://x.com/i/grok" target="_blank" rel="noopener noreferrer" className="group relative">
            <div className="w-52 h-52 md:w-60 md:h-60 rounded-full bg-[#0B1D36] flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-[#C9A66B] group-hover:border-[#d4b57a]">
              <div className="text-center">
                <div className="text-white text-3xl md:text-4xl font-bold mb-1">Grok</div>
                <div className="text-[#C9A66B] text-sm font-medium">Talk to me about SEO</div>
              </div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* SITE HEALTH */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>🔍</span> Site Health
            </h2>
            <p className="text-sm text-[#666] mb-5">Run free scans on your website</p>
            <div className="space-y-3">
              <a href="https://pagespeed.web.dev/analysis?url=https://www.rewiredketamine.com" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">PageSpeed Insights</a>
              <a href="https://securityheaders.com/?q=https://www.rewiredketamine.com&followRedirects=on" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">Security Headers Check</a>
              <a href="https://search.google.com/test/rich-results?url=https://www.rewiredketamine.com" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">Rich Results / Schema Test</a>
              <a href="https://www.ssllabs.com/ssltest/analyze.html?d=www.rewiredketamine.com" target="_blank" className="block w-full text-center border border-[#0B1D36] text-[#0B1D36] py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#0B1D36] hover:text-white transition">SSL / HTTPS Grade</a>
              <a href="https://search.google.com/search-console" target="_blank" className="block w-full text-center border border-[#C9A66B] text-[#0B1D36] py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#C9A66B] transition">Google Search Console</a>
            </div>
          </div>

          {/* KEYWORD TRACKER */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>🎯</span> Keyword Tracker
            </h2>
            <p className="text-sm text-[#666] mb-4">Prioritized targets (July 2026 baseline)</p>
            <div className="space-y-4 text-sm">
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
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Ketamine for PTSD South Florida</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> Fully guided ketamine therapy Aventura</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0B1D36] mb-1">Tier 3 – Opportunity</p>
                <ul className="space-y-1 text-[#333]">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Best ketamine clinic Aventura</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> At-home ketamine Florida</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Ketamine assisted therapy Florida</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TO-DO LIST */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-lg font-bold text-[#0B1D36] flex items-center gap-2">
                <span>✅</span> SEO To-Do List
              </h2>
              <button onClick={resetToDefaults} className="text-xs text-[#C9A66B] hover:underline">
                Reset defaults
              </button>
            </div>
            <p className="text-sm text-[#666] mb-1">Weekly + Monthly high-priority tasks</p>
            <p className="text-xs text-[#888] mb-4">
              Next auto-reset: {nextResetDate}
            </p>

            <form onSubmit={addTodo} className="space-y-3 mb-4">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task..."
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A66B]"
              />
              <div className="flex gap-2">
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value as Priority)}
                  className="flex-1 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A66B]"
                >
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
                <button type="submit" className="bg-[#C9A66B] text-[#0B1D36] px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#b8955a] transition">
                  Add
                </button>
              </div>
            </form>

            <ul className="space-y-2 max-h-80 overflow-y-auto">
              {sortedTodos.length === 0 && (
                <li className="text-sm text-[#888] italic">No tasks yet.</li>
              )}
              {sortedTodos.map((todo) => (
                <li key={todo.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 group">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                    className="w-4 h-4 accent-[#C9A66B] cursor-pointer"
                  />
                  <span className={`flex-1 text-sm ${todo.done ? "line-through text-gray-400" : "text-[#333]"}`}>
                    {todo.text}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColors[todo.priority]}`}>
                    {todo.priority}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-400 opacity-0 group-hover:opacity-100 text-sm hover:text-red-600 transition"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPETITORS */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>🏆</span> Competitors
            </h2>
            <p className="text-sm text-[#666] mb-5">Local ketamine clinics to monitor</p>
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-[#0B1D36]">1. Nushama (Aventura)</p>
                <p className="text-xs text-[#666] mb-1">nushama.com</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <a href="https://nushama.com" target="_blank" className="text-xs text-[#C9A66B] hover:underline">Website</a>
                  <a href="https://www.similarweb.com/website/nushama.com/" target="_blank" className="text-xs text-[#C9A66B] hover:underline">Traffic</a>
                  <a href="https://ahrefs.com/website-authority-checker" target="_blank" className="text-xs text-[#C9A66B] hover:underline">Authority</a>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0B1D36]">2. Ketamine Aventura</p>
                <p className="text-xs text-[#666] mb-1">ketamineaventura.com</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <a href="https://ketamineaventura.com" target="_blank" className="text-xs text-[#C9A66B] hover:underline">Website</a>
                  <a href="https://www.similarweb.com/website/ketamineaventura.com/" target="_blank" className="text-xs text-[#C9A66B] hover:underline">Traffic</a>
                  <a href="https://ahrefs.com/website-authority-checker" target="_blank" className="text-xs text-[#C9A66B] hover:underline">Authority</a>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0B1D36]">3. One Mind Wellness</p>
                <p className="text-xs text-[#666] mb-1">onemindketamine.com</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  <a href="https://onemindketamine.com" target="_blank" className="text-xs text-[#C9A66B] hover:underline">Website</a>
                  <a href="https://www.similarweb.com/website/onemindketamine.com/" target="_blank" className="text-xs text-[#C9A66B] hover:underline">Traffic</a>
                  <a href="https://ahrefs.com/website-authority-checker" target="_blank" className="text-xs text-[#C9A66B] hover:underline">Authority</a>
                </div>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>📱</span> Social Media
            </h2>
            <p className="text-sm text-[#666] mb-5">Manage all social posts</p>
            <div className="space-y-3">
              <a href="https://www.munchstudio.com/" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">
                Open Munch Studio
              </a>
              <p className="text-xs text-[#888] text-center">Schedule & manage Instagram, Facebook, TikTok, etc.</p>
            </div>
          </div>

          {/* AI VIDEO */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>🎬</span> AI Video
            </h2>
            <p className="text-sm text-[#666] mb-5">Generate weekly video content</p>
            <div className="space-y-3">
              <a href="https://www.heygen.com/" target="_blank" className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition">
                Open HeyGen
              </a>
              <p className="text-xs text-[#888] text-center">Create AI avatar videos for YouTube & social</p>
            </div>
          </div>

          {/* GOOGLE NEWS */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow md:col-span-2">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>📰</span> Industry News
            </h2>
            <p className="text-sm text-[#666] mb-5">Latest ketamine & mental health headlines</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en" target="_blank" className="block text-center border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-[#0B1D36] hover:border-[#C9A66B] hover:bg-[#FDF8F0] transition">Ketamine Therapy</a>
              <a href="https://news.google.com/search?q=ketamine%20depression%20treatment&hl=en-US&gl=US&ceid=US:en" target="_blank" className="block text-center border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-[#0B1D36] hover:border-[#C9A66B] hover:bg-[#FDF8F0] transition">Depression Treatment</a>
              <a href="https://news.google.com/search?q=mental%20health%20South%20Florida&hl=en-US&gl=US&ceid=US:en" target="_blank" className="block text-center border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-[#0B1D36] hover:border-[#C9A66B] hover:bg-[#FDF8F0] transition">South Florida Mental Health</a>
            </div>
          </div>

          {/* QUICK TOOLS */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>⚡</span> Quick Tools
            </h2>
            <p className="text-sm text-[#666] mb-5">Everyday free resources</p>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://search.google.com/search-console" target="_blank" className="text-[#C9A66B] hover:underline">Google Search Console</a></li>
              <li><a href="https://analytics.google.com" target="_blank" className="text-[#C9A66B] hover:underline">Google Analytics 4</a></li>
              <li><a href="https://pagespeed.web.dev/" target="_blank" className="text-[#C9A66B] hover:underline">PageSpeed Insights</a></li>
              <li><a href="https://ahrefs.com/free-seo-tools" target="_blank" className="text-[#C9A66B] hover:underline">Ahrefs Free Tools</a></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm text-[#888] mt-12">
          Private SEO Control Center · Rewired Ketamine
        </p>
      </main>
    </div>
  );
}