import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhatIsKetamineAssistedTherapyPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Is Ketamine-Assisted Therapy and How Does It Work?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            A clear look at this approach from our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Ketamine-assisted therapy combines the administration of ketamine with intentional support and guidance. At Rewired Ketamine, a locally owned clinic in Aventura, Florida, fully guided sessions are available as part of personalized care.
            </p>
            <p>
              We serve patients from Miami, Fort Lauderdale, and across South Florida. ¡Hablamos Español!
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            How ketamine-assisted therapy works
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Ketamine primarily affects the glutamate system in the brain and may promote changes in neural connectivity (neuroplasticity). This is different from traditional antidepressants that mainly target serotonin or other monoamine pathways.
            </p>
            <p>
              Sessions take place in a calm, private setting under professional monitoring. Fully guided sessions are available for those who prefer additional support during the experience.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            What to expect
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Before beginning, a thorough evaluation helps determine whether this approach may be appropriate. During the session, comfort and safety remain priorities. Afterward, integration and follow-up support help make sense of the experience.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Care at our Aventura clinic
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              As a locally owned practice, we focus on thoughtful, clinically supervised care. Every session is monitored, and plans are individualized based on each person’s needs and response.
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
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">What is ketamine-assisted therapy?</h3>
              <p className="text-[#555] leading-relaxed">It combines ketamine administration with intentional support and guidance in a supervised clinical setting.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic for those who prefer additional support.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Rewired Ketamine is locally owned and based in Aventura, serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is every session fully guided?</h3>
              <p className="text-[#555] leading-relaxed">Not every session is fully guided. Fully guided sessions are available as an option.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is monitoring part of treatment?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Professional monitoring is part of care at our Aventura clinic.</p>
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