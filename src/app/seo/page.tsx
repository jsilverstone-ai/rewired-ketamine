"use client";

import { useState, useEffect } from "react";

export default function SeoDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

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
    document.cookie = "seo_auth=; Max-Age=0; path=/";
    setIsAuthenticated(false);
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center">
        <p className="text-[#0B1D36] text-lg">Loading dashboard...</p>
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
      {/* Top Bar */}
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
        {/* Big Grok Button */}
        <div className="flex justify-center mb-14">
          <a
            href="https://x.com/i/grok"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-52 h-52 md:w-60 md:h-60 rounded-full bg-[#0B1D36] flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-[#C9A66B] group-hover:border-[#d4b57a]">
              <div className="text-center">
                <div className="text-white text-3xl md:text-4xl font-bold mb-1">Grok</div>
                <div className="text-[#C9A66B] text-sm font-medium">Talk to me about SEO</div>
              </div>
            </div>
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* SITE HEALTH */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>🔍</span> Site Health
            </h2>
            <p className="text-sm text-[#666] mb-5">Run free scans on your website</p>

            <div className="space-y-3">
              <a
                href="https://pagespeed.web.dev/analysis?url=https://www.rewiredketamine.com"
                target="_blank"
                className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition"
              >
                PageSpeed Insights
              </a>
<a
  href="https://pagespeed.web.dev/analysis?url=https://www.rewiredketamine.com&form_factor=mobile"
  target="_blank"
  className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition"
>
  Mobile PageSpeed Test
</a>
              <a
                href="https://search.google.com/test/rich-results?url=https://www.rewiredketamine.com"
                target="_blank"
                className="block w-full text-center bg-[#0B1D36] text-white py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#122a4a] transition"
              >
                Rich Results Test
              </a>
              <a
                href="https://securityheaders.com/?q=https://www.rewiredketamine.com"
                target="_blank"
                className="block w-full text-center border border-[#0B1D36] text-[#0B1D36] py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#0B1D36] hover:text-white transition"
              >
                Security Headers
              </a>
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                className="block w-full text-center border border-[#C9A66B] text-[#0B1D36] py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-[#C9A66B] transition"
              >
                Google Search Console
              </a>
            </div>
          </div>

          {/* KEYWORD TRACKER */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>🎯</span> Keyword Tracker
            </h2>
            <p className="text-sm text-[#666] mb-5">Main terms to monitor</p>

            <ul className="space-y-2.5 text-sm text-[#333]">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A66B]"></span>
                ketamine therapy Aventura
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A66B]"></span>
                ketamine clinic Miami
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A66B]"></span>
                ketamine infusion South Florida
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A66B]"></span>
                treatment resistant depression Aventura
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A66B]"></span>
                ketamine for anxiety Fort Lauderdale
              </li>
            </ul>

            <p className="text-xs text-[#888] mt-5">
              Tip: Later we can connect a Google Sheet for live rankings.
            </p>
          </div>

          {/* COMPETITORS */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>🏆</span> Competitors
            </h2>
            <p className="text-sm text-[#666] mb-5">Quick free analysis links</p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-[#333] mb-1">Competitor 1</p>
                <a
                  href="https://app.neilpatel.com/en/ubersuggest/overview?keyword=ketamine+therapy&lang=en&loc=2840"
                  target="_blank"
                  className="text-sm text-[#C9A66B] hover:underline"
                >
                  Analyze with Ubersuggest →
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-[#333] mb-1">Competitor 2</p>
                <a
                  href="https://ahrefs.com/website-authority-checker"
                  target="_blank"
                  className="text-sm text-[#C9A66B] hover:underline"
                >
                  Check Authority (Ahrefs free) →
                </a>
              </div>
              <div>
                <p className="text-sm font-medium text-[#333] mb-1">Competitor 3</p>
                <a
                  href="https://www.similarweb.com/"
                  target="_blank"
                  className="text-sm text-[#C9A66B] hover:underline"
                >
                  Traffic overview (Similarweb) →
                </a>
              </div>
            </div>

            <p className="text-xs text-[#888] mt-5">
              Replace with real competitor domains later.
            </p>
          </div>

          {/* GOOGLE NEWS */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow md:col-span-2">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>📰</span> Industry News
            </h2>
            <p className="text-sm text-[#666] mb-5">Latest ketamine & mental health headlines</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="https://news.google.com/search?q=ketamine%20therapy&hl=en-US&gl=US&ceid=US:en"
                target="_blank"
                className="block text-center border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-[#0B1D36] hover:border-[#C9A66B] hover:bg-[#FDF8F0] transition"
              >
                Ketamine Therapy
              </a>
              <a
                href="https://news.google.com/search?q=ketamine%20depression%20treatment&hl=en-US&gl=US&ceid=US:en"
                target="_blank"
                className="block text-center border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-[#0B1D36] hover:border-[#C9A66B] hover:bg-[#FDF8F0] transition"
              >
                Depression Treatment
              </a>
              <a
                href="https://news.google.com/search?q=mental%20health%20South%20Florida&hl=en-US&gl=US&ceid=US:en"
                target="_blank"
                className="block text-center border border-gray-200 rounded-lg py-3 px-4 text-sm font-medium text-[#0B1D36] hover:border-[#C9A66B] hover:bg-[#FDF8F0] transition"
              >
                South Florida Mental Health
              </a>
            </div>
          </div>

          {/* QUICK TOOLS */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <h2 className="text-lg font-bold text-[#0B1D36] mb-1 flex items-center gap-2">
              <span>⚡</span> Quick Tools
            </h2>
            <p className="text-sm text-[#666] mb-5">Everyday free resources</p>

            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://search.google.com/search-console" target="_blank" className="text-[#C9A66B] hover:underline">
                  Google Search Console
                </a>
              </li>
              <li>
                <a href="https://analytics.google.com" target="_blank" className="text-[#C9A66B] hover:underline">
                  Google Analytics 4
                </a>
              </li>
              <li>
                <a href="https://pagespeed.web.dev/" target="_blank" className="text-[#C9A66B] hover:underline">
                  PageSpeed Insights
                </a>
              </li>
              <li>
                <a href="https://ahrefs.com/free-seo-tools" target="_blank" className="text-[#C9A66B] hover:underline">
                  Ahrefs Free Tools
                </a>
              </li>
              <li>
                <a href="https://www.google.com/webmasters/tools/mobile-friendly" target="_blank" className="text-[#C9A66B] hover:underline">
                  Mobile-Friendly Test
                </a>
              </li>
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