"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SeoDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if the cookie already exists
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/seo-login", {
          method: "GET",
        });
        // We'll use a simple cookie check via document for client-side feel
        // The real protection is the httpOnly cookie + the login API
        const hasCookie = document.cookie.includes("seo_auth=authenticated");
        setIsAuthenticated(hasCookie);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }
    checkAuth();
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
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    // Clear the cookie by setting it to expire
    document.cookie = "seo_auth=; Max-Age=0; path=/";
    setIsAuthenticated(false);
    router.refresh();
  };

  if (loading) {
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
      {/* Header */}
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
        {/* Big Grok Button */}
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {/* Site Health */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-3">Site Health</h2>
            <ul className="space-y-2 text-sm text-[#444]">
              <li>• Google Search Console → <a href="https://search.google.com/search-console" target="_blank" className="text-[#C9A66B] underline">Open</a></li>
              <li>• PageSpeed Insights → <a href="https://pagespeed.web.dev/" target="_blank" className="text-[#C9A66B] underline">Test</a></li>
              <li>• Core Web Vitals: check regularly</li>
              <li>• Indexing status: monitor weekly</li>
            </ul>
          </div>

          {/* Keyword Tracker */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-3">Keyword Tracker</h2>
            <p className="text-sm text-[#555] mb-3">Track your main terms here (or link a Google Sheet).</p>
            <ul className="space-y-1 text-sm text-[#444]">
              <li>• ketamine therapy Aventura</li>
              <li>• ketamine clinic Miami</li>
              <li>• ketamine infusion South Florida</li>
              <li>• treatment resistant depression Aventura</li>
            </ul>
            <p className="text-xs text-[#888] mt-4">Tip: Create a Google Sheet and paste the link here later.</p>
          </div>

          {/* Competitors */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-3">Competitors</h2>
            <p className="text-sm text-[#555] mb-3">Add your main competitors below.</p>
            <ul className="space-y-1 text-sm text-[#444]">
              <li>• Competitor 1 — (add URL)</li>
              <li>• Competitor 2 — (add URL)</li>
              <li>• Competitor 3 — (add URL)</li>
            </ul>
          </div>

          {/* Google News */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 md:col-span-2">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-3">Google News · Ketamine & Mental Health</h2>
            <p className="text-sm text-[#555] mb-4">
              Latest headlines (open in new tab for full feed):
            </p>
            <div className="space-y-2">
              <a
                href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en"
                target="_blank"
                className="block text-[#C9A66B] hover:underline text-sm"
              >
                → Ketamine therapy news
              </a>
              <a
                href="https://news.google.com/search?q=ketamine%20depression%20treatment&hl=en-US&gl=US&ceid=US:en"
                target="_blank"
                className="block text-[#C9A66B] hover:underline text-sm"
              >
                → Ketamine for depression
              </a>
              <a
                href="https://news.google.com/search?q=mental%20health%20South%20Florida&hl=en-US&gl=US&ceid=US:en"
                target="_blank"
                className="block text-[#C9A66B] hover:underline text-sm"
              >
                → Mental health South Florida
              </a>
            </div>
          </div>

          {/* Quick Tools */}
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

        <p className="text-center text-sm text-[#888] mt-12">
          This is your private SEO control center. Edit the cards anytime by updating the code.
        </p>
      </main>
    </div>
  );
}