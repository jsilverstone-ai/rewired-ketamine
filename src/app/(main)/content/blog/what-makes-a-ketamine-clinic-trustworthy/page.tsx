import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhatMakesAKetamineClinicTrustworthyPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Makes A Ketamine Clinic Trustworthy?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">How to choose a safe ketamine clinic in Florida — and what to look for in Aventura.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Choosing a ketamine clinic should feel careful, not rushed. Look for clear medical oversight, honest language, transparent location details, and a team that answers questions without pressure.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Signals of a safer clinic</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>A trustworthy clinic explains who is on the team, where treatment happens, and how sessions are monitored. Meet our <Link href="/providers" className="text-[#C9A66B] hover:underline">providers</Link> and review our <Link href="/location" className="text-[#C9A66B] hover:underline">Aventura location</Link>.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What we emphasize at Rewired Ketamine Aventura</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>We are locally owned. Fully guided sessions are available. We do not use hard-sell language, and we do not treat ketamine as a lifelong program designed to retain patients forever. The goal is the right care, if it is appropriate.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">What should I ask a ketamine clinic before booking?</h3><p className="text-[#555] leading-relaxed">Ask who supervises care, whether guided sessions are available, how evaluation works, and what recovery time to plan for.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is Rewired Ketamine local?</h3><p className="text-[#555] leading-relaxed">Yes. Locally owned in Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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