import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineMigrainesEffectivenessPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />



      {/* CONTENT */}
<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Is Ketamine Infusion A New Option For Migraine Treatment?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">A careful look at ketamine infusion for migraines at our locally owned Aventura clinic.</p>
    <p className="text-[#C9A66B] font-semibold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Some people explore ketamine infusion for migraines when standard approaches have not provided enough relief. It is not brand-new in medicine, and it is not right for everyone. A clinical evaluation comes first.</p>
      <p>We keep claims careful. Results vary. Fully guided sessions are available.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What “option” means here</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>An option means something to discuss after history, medications, and goals are reviewed. It does not mean a guaranteed migraine treatment Miami patients should expect to work the same way for every person.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Care at our Florida clinic</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Ketamine infusion therapy Florida patients receive at Rewired Ketamine is monitored and individualized. Learn more about <Link href="/services/ketamine-infusion" className="text-[#C9A66B] hover:underline">ketamine infusion</Link> and <Link href="/treatments/chronic-pain" className="text-[#C9A66B] hover:underline">chronic pain</Link> support.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="faq-list space-y-0">
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine approved specifically as a first-line migraine drug?</h3><p className="text-[#555] leading-relaxed">Care decisions are individualized. Ask during consultation what may be appropriate for your history.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Where is the clinic?</h3><p className="text-[#555] leading-relaxed">Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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