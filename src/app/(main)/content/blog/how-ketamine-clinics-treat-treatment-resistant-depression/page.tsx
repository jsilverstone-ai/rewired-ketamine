import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function HowKetamineClinicsTreatTRDPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">How Ketamine Clinics Treat Treatment-Resistant Depression</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">A calm look at how a locally owned ketamine clinic in Aventura may support people living with treatment-resistant depression in Miami.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>

<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Treatment-resistant depression is a term used when standard approaches have not provided enough relief. At our locally owned <Link href="/" className="text-[#C9A66B] hover:underline">ketamine clinic Florida</Link> location in Aventura, care begins with a thorough evaluation — not a one-size-fits-all protocol.</p>
      <p>Fully guided sessions are available. Learn more on our <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">depression treatment page</Link>.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What the process usually includes</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>A typical plan starts with medical and mental-health review, then monitored sessions in a private setting. Some people also use <Link href="/services/talk-therapy" className="text-[#C9A66B] hover:underline">talk therapy</Link> or integration support.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Ketamine for depression Miami patients often ask about</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Ketamine works differently from many traditional antidepressants. Some people notice changes more quickly, though results vary. The goal is thoughtful, supervised care — not pressure.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">What does treatment-resistant mean?</h3><p className="text-[#555] leading-relaxed">It usually means earlier treatments have not provided enough relief. An evaluation helps determine next steps.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you serve Miami?</h3><p className="text-[#555] leading-relaxed">Yes. We are locally owned in Aventura and serve Miami and South Florida. ¡Hablamos Español!</p></div>
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