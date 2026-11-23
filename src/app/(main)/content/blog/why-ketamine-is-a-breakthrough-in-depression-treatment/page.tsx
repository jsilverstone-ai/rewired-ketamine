import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhyKetamineForDepressionTreatmentPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Why Ketamine Is Being Explored As A Different Approach To Depression</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">An educational look at ketamine for depression when traditional treatments have not provided enough relief.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Ketamine has received attention because it works differently from many standard antidepressants and because some people notice changes more quickly. That does not make it a miracle, and it does not mean it is right for everyone.</p>
      <p>At our locally owned clinic offering ketamine treatment Florida patients can access in Aventura, we keep the language careful and the evaluation thorough.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Why people call it a different option</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>The glutamate pathway, possible support for neuroplasticity, and a monitored session format are the main differences. See our <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">depression page</Link> for local context.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What we will not claim</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>We will not promise rapid relief for every person. We will not treat ketamine as a lifelong program. Fully guided sessions are available when extra support is wanted.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine guaranteed to work quickly?</h3><p className="text-[#555] leading-relaxed">No. Some people notice change sooner than with traditional treatments. Results vary.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3><p className="text-[#555] leading-relaxed">Yes. Locally owned in Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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