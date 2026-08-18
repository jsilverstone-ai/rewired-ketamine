"use client";

import { useState, useEffect } from "react";

export default function SeoDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  // On first load, we just show the login form.
  // After a successful login the page will stay unlocked until you click Logout.
  useEffect(() => {
    setChecking(false);
  }, []);

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
    // Clear the cookie
    document.cookie = "seo_auth=; Max-Age=0; path=/";
    setIsAuthenticated(false);
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center">
        <p className="text-[#0B1D36]">Loading...</p>
      </div>
    );
  }

  // ========== PASSWORD SCREEN ==========
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
              <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                Password
              </label>
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

            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

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

  // ========== DASHBOARD ==========
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <header className="bg-[#0B1D36] text-white py-4 px-6 flex justify-between items-center">
        <div className="font-semibold text-lg">Rewired Ketamine · SEO Control</div>
        <button
          onClick={handleLogout}
          className="text-sm bg-[#C9A66B] text-[#0B1D36] px-4 py-1.5 rounded font-medium hover:bg-[#b8955a]"
        >
          Logout
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-center mb-12">
          <a
            href="https://grok.x.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-[#0B1D36] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-[#C9A66B]">
              <div className="text-center">
                <div className="text-white text-2xl md:text-3xl font-bold mb-1">Grok</div>
                <div className="text-[#C9A66B] text-sm">Talk to me</div>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-[#555] whitespace-nowrap">
              Click to open Grok chat
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-3">Site Health</h2>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>• Google Search Console → <a href="https://search.google.com/search-console" target="_blank" className="text-[#C9A66B] underline">Open</a></li>
              <li>• PageSpeed Insights → <a href="https://pagespeed.web.dev/" target="_blank" className="text-[#C9A66B] underline">Test</a></li>
              <li>• Core Web Vitals: check regularly</li>
              <li>• Indexing status: monitor weekly</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-3">Keyword Tracker</h2>
            <p className="text-sm text-[#555] mb-3">Track your main terms here.</p>
            <ul className="space-y-1 text-sm text-[#444]">
              <li>• ketamine therapy Aventura</li>
              <li>• ketamine clinic Miami</li>
              <li>• ketamine infusion South Florida</li>
              <li>• treatment resistant depression Aventura</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-3">Competitors</h2>
            <p className="text-sm text-[#555] mb-3">Add your main competitors below.</p>
            <ul className="space-y-1 text-sm text-[#444]">
              <li>• Competitor 1 — (add URL)</li>
              <li>• Competitor 2 — (add URL)</li>
              <li>• Competitor 3 — (add URL)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 md:col-span-2">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-3">Google News · Ketamine & Mental Health</h2>
            <div className="space-y-2">
              <a href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en" target="_blank" className="block text-[#C9A66B] hover:underline text-sm">
                → Ketamine therapy news
              </a>
              <a href="https://news.google.com/search?q=ketamine%20depression%20treatment&hl=en-US&gl=US&ceid=US:en" target="_blank" className="block text-[#C9A66B] hover:underline text-sm">
                → Ketamine for depression
              </a>
              <a href="https://news.google.com/search?q=mental%20health%20South%20Florida&hl=en-US&gl=US&ceid=US:en" target="_blank" className="block text-[#C9A66B] hover:underline text-sm">
                → Mental health South Florida
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-3">Quick Tools</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="https://search.google.com/search-console" target="_blank" className="text-[#C9A66B] hover:underline">Google Search Console</a></li>
              <li><a href="https://analytics.google.com" target="_blank" className="text-[#C9A66B] hover:underline">Google Analytics</a></li>
              <li><a href="https://pagespeed.web.dev/" target="_blank" className="text-[#C9A66B] hover:underline">PageSpeed Insights</a></li>
              <li><a href="https://ahrefs.com/free-seo-tools" target="_blank" className="text-[#C9A66B] hover:underline">Ahrefs Free Tools</a></li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}