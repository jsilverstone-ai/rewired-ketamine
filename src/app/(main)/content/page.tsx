import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ContentPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Content</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Articles, videos, and the latest ketamine news — curated for patients and families.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* ===== BLOG SECTION ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36]">Blog</h2>
              <p className="text-[#666] mt-2">Thoughtful articles from the Rewired Ketamine team</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog card 1 – placeholder */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
              <div className="h-48 bg-[#e8e0d5] flex items-center justify-center text-[#888]">Image placeholder</div>
              <div className="p-6">
                <p className="text-sm text-[#C9A66B] font-medium mb-2">Coming soon</p>
                <h3 className="text-xl font-bold text-[#0B1D36] mb-3">Who May Be a Good Candidate for Ketamine Therapy?</h3>
                <p className="text-[#555] text-sm leading-relaxed mb-4">A clear look at who may benefit from guided ketamine therapy and what to expect during the consultation process.</p>
                <span className="text-[#0B1D36] font-semibold text-sm">Read more →</span>
              </div>
            </article>

            {/* Blog card 2 – placeholder */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
              <div className="h-48 bg-[#e8e0d5] flex items-center justify-center text-[#888]">Image placeholder</div>
              <div className="p-6">
                <p className="text-sm text-[#C9A66B] font-medium mb-2">Coming soon</p>
                <h3 className="text-xl font-bold text-[#0B1D36] mb-3">What Is Ketamine-Assisted Therapy?</h3>
                <p className="text-[#555] text-sm leading-relaxed mb-4">Understanding how ketamine can create space for new perspectives when traditional approaches have not been enough.</p>
                <span className="text-[#0B1D36] font-semibold text-sm">Read more →</span>
              </div>
            </article>

            {/* Blog card 3 – placeholder */}
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
              <div className="h-48 bg-[#e8e0d5] flex items-center justify-center text-[#888]">Image placeholder</div>
              <div className="p-6">
                <p className="text-sm text-[#C9A66B] font-medium mb-2">Coming soon</p>
                <h3 className="text-xl font-bold text-[#0B1D36] mb-3">How Neuroplasticity Supports Healing</h3>
                <p className="text-[#555] text-sm leading-relaxed mb-4">A soft introduction to how the brain can form new connections and why that matters in ketamine therapy.</p>
                <span className="text-[#0B1D36] font-semibold text-sm">Read more →</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== VIDEOS SECTION ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36]">Videos</h2>
            <p className="text-[#666] mt-2">Short videos and patient education from our clinic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
              <div className="aspect-video bg-[#e8e0d5] flex items-center justify-center text-[#888]">
                YouTube embed placeholder
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0B1D36]">Welcome to Rewired Ketamine</h3>
                <p className="text-sm text-[#666] mt-1">A short introduction to our Aventura clinic and approach.</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
              <div className="aspect-video bg-[#e8e0d5] flex items-center justify-center text-[#888]">
                YouTube embed placeholder
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0B1D36]">What to Expect in a Session</h3>
                <p className="text-sm text-[#666] mt-1">A calm walkthrough of the guided ketamine experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KETAMINE IN THE NEWS ===== */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36]">Ketamine in the News</h2>
            <p className="text-[#666] mt-2">Selected recent coverage and research about ketamine therapy</p>
          </div>

          <div className="space-y-5">
            {/* News item 1 – easy to copy/paste */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl p-6 border border-[#eee] hover:border-[#C9A66B] transition">
              <p className="text-sm text-[#C9A66B] font-medium mb-1">Source · Date</p>
              <h3 className="text-lg font-bold text-[#0B1D36] mb-2">Headline of the news article goes here</h3>
              <p className="text-[#555] text-sm leading-relaxed">One or two sentences summarizing the article. Keep it soft and factual.</p>
            </a>

            {/* News item 2 */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl p-6 border border-[#eee] hover:border-[#C9A66B] transition">
              <p className="text-sm text-[#C9A66B] font-medium mb-1">Source · Date</p>
              <h3 className="text-lg font-bold text-[#0B1D36] mb-2">Another recent ketamine news headline</h3>
              <p className="text-[#555] text-sm leading-relaxed">Short summary of why this article is relevant for patients and families.</p>
            </a>

            {/* News item 3 */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl p-6 border border-[#eee] hover:border-[#C9A66B] transition">
              <p className="text-sm text-[#C9A66B] font-medium mb-1">Source · Date</p>
              <h3 className="text-lg font-bold text-[#0B1D36] mb-2">Third news item placeholder</h3>
              <p className="text-[#555] text-sm leading-relaxed">You can replace these with real articles whenever you find good coverage.</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation. No pressure — just honest answers and a clear path forward.</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}