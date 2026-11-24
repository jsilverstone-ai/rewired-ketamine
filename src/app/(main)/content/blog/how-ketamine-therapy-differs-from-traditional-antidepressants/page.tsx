import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineVsTraditionalAntidepressantsPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />



      {/* CONTENT */}
<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">How Ketamine Therapy Differs From Traditional Antidepressants</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">A practical comparison for people asking about treatment-resistant depression in Miami and Aventura.</p>
    <p className="text-[#C9A66B] font-semibold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Traditional antidepressants are often taken daily and may take weeks to show a full effect. Ketamine is usually given in supervised sessions and works through a different brain pathway. That is the core difference most people are trying to understand.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Pathway and timing</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Many standard medications focus on serotonin-related systems. Ketamine primarily affects glutamate and may support neuroplasticity. Some people notice changes sooner. Others need more time. Results vary.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">How care is delivered</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Antidepressants are typically managed through ongoing prescriptions. Ketamine for depression at our clinic happens in a monitored setting. Fully guided sessions are available. See our <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">depression page</Link>.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Not always an either-or choice</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Some people continue current medications. Others do not. That decision belongs with the clinical team after evaluation — not a blog post.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="faq-list space-y-0">
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do I have to stop my antidepressant to try ketamine?</h3><p className="text-[#555] leading-relaxed">Not automatically. Medication decisions are individualized during evaluation.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3><p className="text-[#555] leading-relaxed">Yes. Locally owned in Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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