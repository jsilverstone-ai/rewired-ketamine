import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineBenefitsPTSDPatientsPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />



      {/* CONTENT */}
<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Top Benefits Of Ketamine Treatment For PTSD Patients</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">A careful overview for people exploring ketamine therapy for PTSD in Miami and Aventura.</p>
    <p className="text-[#C9A66B] font-semibold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Some people explore ketamine when traditional approaches have not provided enough relief. Possible benefits people discuss include a different pathway than many standard medications, a monitored session setting, and the chance to pair treatment with integration or therapy.</p>
      <p>None of this is a guarantee. Read more on our <Link href="/treatments/ptsd" className="text-[#C9A66B] hover:underline">PTSD treatment page</Link>.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What we can say carefully</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Some people notice changes more quickly than with traditional therapy alone. Fully guided sessions are available. Plans are individualized and reviewed over time.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What we will not claim</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>We will not promise that every PTSD patient will respond the same way. We will not frame ketamine as a lifelong program designed to keep people in treatment forever.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="faq-list space-y-0">
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine right for every PTSD patient?</h3><p className="text-[#555] leading-relaxed">No. Evaluation comes first.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you serve Miami?</h3><p className="text-[#555] leading-relaxed">Yes. Our ketamine clinic Miami patients visit is in Aventura. ¡Hablamos Español!</p></div>
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