import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RelatedQuestions from "@/components/RelatedQuestions";

export default function PtsdPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />
      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">PTSD</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">Fully guided ketamine support for PTSD.</p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>
{/* Main Content */}
<section className="py-16 px-6">
  <div className="max-w-4xl mx-auto">
    
    <div className="prose prose-lg max-w-none text-[#444]">
      <p className="text-xl leading-relaxed mb-8">
        Living with PTSD can affect many parts of daily life. At our locally owned clinic in Aventura, we offer ketamine therapy as a supportive option for individuals who have not found enough relief through traditional approaches alone.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">How Ketamine May Support Individuals with PTSD</h2>
      <p className="mb-6">
        Ketamine interacts with the brain’s glutamate system and may help support neuroplasticity — the brain’s ability to form new connections. Some people experience a shift in how traumatic memories and emotional responses are processed, often more quickly than with standard treatments.
      </p>
      <p className="mb-6">
        Fully guided sessions are available for those who prefer additional support during the experience. Our focus is on creating a safe, private, and respectful environment.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">When Other Treatments Have Not Provided Enough Relief</h2>
      <p className="mb-6">
        Many individuals try multiple approaches before exploring ketamine therapy. For those whose symptoms have remained persistent, ketamine may offer another avenue of support. Results are often noticed more rapidly than with traditional therapies.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Thoughtful Care in Aventura</h2>
      <p className="mb-6">
        We are a locally owned clinic serving Miami, Fort Lauderdale, and the greater South Florida area. ¡Hablamos Español! Our team prioritizes clear communication, medical supervision, and a calm setting for every visit.
      </p>
      <p className="mb-6">
        Many of our PTSD patients come from Fort Lauderdale, Hollywood, and other parts of Broward County. The clinic sits just south of the county line, roughly 30 minutes from downtown Fort Lauderdale depending on traffic, and you will need someone to drive you home after each session.
      </p>
    </div>

    {/* CTA Box */}
    <div className="mt-14 bg-[#0B1D36] text-white rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to take the next step?</h3>
      <p className="text-white/80 mb-6">Book a free consultation at our Aventura clinic. We’re here to answer your questions with care and clarity.</p>
      <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
        Book Free Consultation
      </Link>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-[#0B1D36] mb-10 text-center">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">
      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Is ketamine used when other treatments for PTSD have not worked?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. Ketamine is frequently considered for people who have not experienced enough relief with traditional approaches.
        </p>
      </div>

      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Are fully guided sessions available for PTSD treatment at your Aventura clinic?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. Fully guided sessions are available in a calm, private setting at our Aventura location.
        </p>
      </div>

      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Do you offer ketamine therapy for PTSD to patients outside Aventura?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. We serve patients from Miami, Fort Lauderdale, and across South Florida.
        </p>
      </div>

      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          How is ketamine therapy for PTSD different from traditional approaches?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Ketamine interacts with the glutamate system and may support neuroplasticity, which some people find helpful when other methods have not provided enough relief.
        </p>
      </div>
    </div>
  </div>
</section>

      <RelatedQuestions path="/treatments/ptsd" />

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation. No pressure — just honest answers and a clear path forward.</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}