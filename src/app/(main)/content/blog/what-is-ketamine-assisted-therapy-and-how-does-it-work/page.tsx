import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhatIsKetamineAssistedTherapyPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Is Ketamine-Assisted Therapy and How Does It Work?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            A clear explainer of ketamine-assisted therapy at our locally owned clinic in Aventura.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Ketamine-assisted therapy combines medically supervised ketamine treatment with thoughtful support before, during, and after a session. At our locally owned ketamine clinic Florida location in Aventura, the focus is on safety, comfort, and clear communication.
            </p>
            <p>
              Fully guided sessions are available. We serve Miami, Fort Lauderdale, and South Florida.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">How ketamine therapy works</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Ketamine works differently from many traditional medications. It primarily affects the glutamate system and may support neuroplasticity — the brain’s ability to form new connections. Experiences vary from person to person.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What a session may include</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              After an evaluation, sessions take place in a calm, private setting under professional monitoring. Some people prefer additional support through <Link href="/services/talk-therapy" className="text-[#C9A66B] hover:underline">talk therapy</Link> or integration. Fully guided options are available.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Local care in Aventura</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              If you are exploring how ketamine therapy works, a free consultation can help you understand whether this approach may be appropriate. Learn more about our <Link href="/services" className="text-[#C9A66B] hover:underline">services</Link> and <Link href="/location" className="text-[#C9A66B] hover:underline">Aventura location</Link>.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is every session fully guided?</h3>
              <p className="text-[#555] leading-relaxed">Not every session is fully guided. Fully guided sessions are available as an option.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is monitoring part of treatment?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Professional monitoring is part of care at our Aventura clinic.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you serve Miami?</h3>
              <p className="text-[#555] leading-relaxed">Yes. We are locally owned in Aventura and serve Miami and South Florida. ¡Hablamos Español!</p>
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