import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhatConditionsCanKetamineHelpTreatPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Conditions Can Ketamine Therapy Help Treat?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">An overview of conditions people explore at our locally owned clinic serving Miami and South Florida.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>People come to ketamine South Florida clinics for different reasons. A careful evaluation is always first. Fully guided sessions are available.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Conditions people often ask about</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Common areas include <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">depression</Link>, <Link href="/treatments/anxiety" className="text-[#C9A66B] hover:underline">anxiety</Link>, <Link href="/treatments/ptsd" className="text-[#C9A66B] hover:underline">PTSD</Link>, and <Link href="/treatments/ocd" className="text-[#C9A66B] hover:underline">OCD</Link>. Some people also explore care for chronic pain, mental fogginess, or related concerns.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Why evaluation matters</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Ketamine is not appropriate for everyone. History, medications, and current symptoms help determine whether this approach may be a fit.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine only for depression?</h3><p className="text-[#555] leading-relaxed">No. People also explore it for anxiety, PTSD, OCD, chronic pain, and other concerns after evaluation.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you serve Miami?</h3><p className="text-[#555] leading-relaxed">Yes. Locally owned in Aventura. ¡Hablamos Español!</p></div>
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