import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function HowManyKetamineSessionsPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">How Many Ketamine Sessions Are Needed For Depression Relief?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">A careful look at session planning. Individual results vary.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>There is no single ketamine protocol that fits every person. How many ketamine sessions may be recommended depends on history, response, and clinical judgment.</p>
      <p>Some people notice meaningful change after the first one or two sessions. Others need a series of visits and follow-up support. We do not treat this as a lifelong plan designed to keep patients in care forever.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What we can say clearly</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Plans are individualized. Dosing and session length can vary. Fully guided sessions are available. See our <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">ketamine for depression</Link> page for condition-specific context.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Why the number is not advertised as a guarantee</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Promising a fixed number of sessions for depression relief would be misleading. Response varies. A consultation is the right place to talk through a possible starting plan.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is there a standard number of sessions?</h3><p className="text-[#555] leading-relaxed">No single number fits everyone. Plans are individualized after evaluation.</p></div>
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