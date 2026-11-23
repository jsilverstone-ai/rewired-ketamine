import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineVsOtherDepressionTreatmentsPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Makes Ketamine Different From Other Depression Treatments?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">How ketamine vs antidepressants is often explained for people exploring care in Miami and Aventura.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Many traditional antidepressants work primarily through serotonin and related pathways and may take weeks to show a full effect. Ketamine primarily affects the glutamate system and may support neuroplasticity.</p>
      <p>That difference is one reason people with treatment-resistant depression look into <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">ketamine for depression Miami</Link> options.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Speed and setting</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Some people notice changes more quickly than with traditional medication. Sessions are monitored in clinic. Fully guided sessions are available. Results still vary.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">It is not automatically a replacement</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Some people continue current medications. Others do not. That decision belongs with the clinical team after evaluation.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine faster than antidepressants?</h3><p className="text-[#555] leading-relaxed">Some people notice changes sooner. That is not a guarantee, and plans remain individualized.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3><p className="text-[#555] leading-relaxed">Yes. Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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