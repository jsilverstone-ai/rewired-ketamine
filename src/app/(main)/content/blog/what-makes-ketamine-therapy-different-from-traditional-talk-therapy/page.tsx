import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineVsTalkTherapyPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Makes Ketamine Therapy Different From Traditional Talk Therapy?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">Ketamine-assisted therapy can work with your therapist — not replace the relationship you already have.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Talk therapy helps many people make sense of patterns, relationships, and emotions over time. Ketamine-assisted therapy is different because it adds a medically supervised session that may support neuroplasticity and create a window for new perspective.</p>
      <p>At our locally owned ketamine clinic Florida location in Aventura, we do not frame ketamine as a replacement for therapy. It can sit alongside the work you are already doing.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">How the two can work together</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Some people continue with an outside therapist. Others use our in-house or referred specialists who understand psychedelics and neuroplasticity. See our <Link href="/services/talk-therapy" className="text-[#C9A66B] hover:underline">talk therapy page</Link>.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What stays the same</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Listening, partnership, and integration still matter. Fully guided sessions are available if you want extra support during treatment.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do I have to stop seeing my therapist?</h3><p className="text-[#555] leading-relaxed">No. Many people continue existing therapy. Coordination can be helpful when it is appropriate.</p></div>
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