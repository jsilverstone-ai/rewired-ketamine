import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineBreakthroughOrTrendPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />



      {/* CONTENT */}
<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Is Ketamine Infusion Therapy A Breakthrough Or Just A Trend?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">A trust-focused answer for people asking whether ketamine treatment in Florida is legitimate care.</p>
    <p className="text-[#C9A66B] font-semibold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Ketamine is not a social-media trend invented last year. It has a long medical history. At the same time, online hype can make it sound simpler than real clinic care. The useful question is not “breakthrough or trend.” It is whether supervised care may be appropriate for you.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What legitimacy looks like</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Look for evaluation, monitoring, clear communication, and a team that does not over-promise. See <Link href="/providers" className="text-[#C9A66B] hover:underline">our providers</Link> and <Link href="/location" className="text-[#C9A66B] hover:underline">Aventura location</Link>.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Our stance</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>We are a locally owned practice. Fully guided sessions are available. We do not treat ketamine as a lifelong retention plan. If it is not a fit, we will say so.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="faq-list space-y-0">
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine infusion therapy legitimate?</h3><p className="text-[#555] leading-relaxed">In a clinical setting with screening and monitoring, it can be part of individualized care. Hype is not the same as a care plan.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is Rewired Ketamine local?</h3><p className="text-[#555] leading-relaxed">Yes. Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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