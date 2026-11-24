import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineInfusionMigraineOptionPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />



      {/* CONTENT */}
<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ketamine Infusion Therapy For Migraines: Is It Effective?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">What we can say carefully about ketamine for migraines and chronic migraine care.</p>
    <p className="text-[#C9A66B] font-semibold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Effectiveness depends on the person. Some people with hard-to-manage migraines explore ketamine after other treatments have not been enough. Others may not be candidates. We do not promise a specific outcome.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">How we talk about results</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Research and clinical experience continue to evolve. The honest answer is that response varies. Chronic migraine treatment decisions should stay individualized and supervised.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Local Florida care</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>At our Aventura clinic, ketamine infusion Florida care includes evaluation, monitoring, and optional fully guided sessions. Pair this article with our other migraine posts for a fuller picture.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="faq-list space-y-0">
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Will ketamine stop all migraines?</h3><p className="text-[#555] leading-relaxed">No treatment works that way for everyone. Evaluation and follow-up matter more than marketing claims.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you serve Miami?</h3><p className="text-[#555] leading-relaxed">Yes. Locally owned in Aventura. ¡Hablamos Español!</p></div>
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