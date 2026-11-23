import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhyKetamineUsedForTRDPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Why Is Ketamine Used For Treatment-Resistant Depression?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">An educational look at how ketamine works differently from many traditional depression treatments.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Ketamine is used for treatment-resistant depression because it works through a different pathway than many standard antidepressants. That difference is why some people explore it after other options have not provided enough relief.</p>
      <p>This is educational, not a promise of results. Care at our Aventura clinic is individualized.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">How ketamine works</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Ketamine primarily affects the glutamate system and may support neuroplasticity — the brain’s ability to form new connections. Some people notice changes more quickly than with traditional medications, though experiences vary.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Where this fits in local care</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>If you are looking into <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">ketamine for depression</Link> in Miami or Aventura, start with an evaluation. Fully guided sessions are available.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Does ketamine replace antidepressants for everyone?</h3><p className="text-[#555] leading-relaxed">No. Plans are individualized. Some people continue other care alongside ketamine; others do not. That decision belongs with the clinical team.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3><p className="text-[#555] leading-relaxed">Yes. Locally owned in Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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