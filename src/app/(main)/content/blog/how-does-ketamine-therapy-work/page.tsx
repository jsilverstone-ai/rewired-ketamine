import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function HowDoesKetamineTherapyWorkPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">How Does Ketamine Therapy Work?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Understanding the science behind ketamine and how it may support mental wellness in Aventura.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Understanding how ketamine therapy works can help people feel more prepared and informed. At Rewired Ketamine, a locally owned clinic in Aventura, Florida, we offer fully guided sessions available as part of personalized care.
            </p>
            <p>
              We serve patients from Miami, Fort Lauderdale, and across South Florida. ¡Hablamos Español!
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            A different mechanism from traditional antidepressants
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Traditional antidepressants primarily affect serotonin, norepinephrine, or dopamine. Ketamine primarily works on the glutamate system by blocking NMDA receptors. This can lead to increased neuroplasticity — the brain’s ability to form new connections.
            </p>
            <p>
              Because of this different pathway, some people notice shifts more quickly than with standard medications.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            What happens during a session
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Sessions take place in a calm, private setting under professional monitoring. Fully guided sessions are available for those who prefer additional support. Comfort and safety remain priorities throughout.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Care at our Aventura clinic
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Every plan is individualized. A thorough evaluation helps determine whether this approach may be appropriate. As a locally owned practice, we focus on thoughtful, clinically supervised care in both English and Spanish.
            </p>
            <p>
              Rewired Ketamine is based in Aventura and serves Miami, Fort Lauderdale, and the greater South Florida community.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">How does ketamine work differently from regular antidepressants?</h3>
              <p className="text-[#555] leading-relaxed">It primarily affects the glutamate system rather than serotonin pathways and may promote neuroplasticity.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic for those who prefer additional support.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Rewired Ketamine is locally owned and based in Aventura, serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!</p>
            </div>
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