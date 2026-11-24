import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhatDoesKetamineTherapyFeelLikePage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Does Ketamine Therapy Feel Like? A Guide For First-Timers</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">A first-timer’s guide from our locally owned ketamine clinic Miami patients visit in Aventura.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>No two first ketamine sessions feel exactly the same. Many people describe a sense of distance from usual thought patterns, a shift in perception, or a quieter mental space. Others feel more physical relaxation than expected.</p>
      <p>The setting matters. Rooms can be adjusted for light, sound, and comfort. Fully guided sessions are available.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">During the session</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>You remain in a monitored, private environment. Some people prefer quiet; others prefer gentle music. If you want more detail on arrival and check-in, see <Link href="/content/blog/what-happens-during-your-first-visit-to-a-ketamine-clinic" className="text-[#C9A66B] hover:underline">what happens during your first visit</Link>.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Afterward</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Plan time to rest and reorient before leaving. Our team stays available with clear next steps. You can also watch our first-session video on the <Link href="/content/videos" className="text-[#C9A66B] hover:underline">videos page</Link>.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Will I lose control?</h3><p className="text-[#555] leading-relaxed">You are monitored throughout. Many people remain aware they are in a clinic setting. Experiences vary.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available if you prefer additional support.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Where is the clinic?</h3><p className="text-[#555] leading-relaxed">Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation at our locally owned Aventura clinic. No pressure — just honest answers and a clear path forward. ¡Hablamos Español!</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}