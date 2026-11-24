import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function EatingDisorderPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />
      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Eating Disorder</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">Fully guided ketamine support for eating disorders.</p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

{/* Main Content */}
<section className="py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <div className="prose prose-lg max-w-none text-[#444]">
      <p className="text-xl leading-relaxed mb-8">
        Eating disorders can be complex and deeply personal. At our locally owned clinic in Aventura, we offer ketamine therapy as a supportive option for individuals seeking additional help alongside their broader care plan.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">How Ketamine May Support Recovery</h2>
      <p className="mb-6">
        Ketamine interacts with the glutamate system and may support neuroplasticity. Some individuals experience shifts in rigid thought patterns and emotional responses that can accompany disordered eating.
      </p>
      <p className="mb-6">
        Fully guided sessions are available for those who prefer additional support during treatment. Our focus is on creating a safe, respectful, and private environment.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">When Traditional Approaches Have Not Been Enough</h2>
      <p className="mb-6">
        For some people, standard treatments provide limited relief. Ketamine therapy may be considered as part of a broader supportive plan when other approaches have not been sufficient. Changes are often noticed more quickly.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Care at Our Aventura Clinic</h2>
      <p className="mb-6">
        We are a locally owned practice serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español! We prioritize clear communication and medically supervised care.
      </p>
    </div>

    <div className="mt-14 bg-[#0B1D36] text-white rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to take the next step?</h3>
      <p className="text-white/80 mb-6">Book a free consultation at our Aventura clinic.</p>
      <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
        Book Free Consultation
      </Link>
    </div>
  


    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">
      Frequently Asked Questions about Ketamine for Eating Disorders
    </h2>
    <div className="space-y-6">

      <div className="bg-white rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          How quickly can ketamine therapy help with symptoms related to eating disorders?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Many people notice supportive changes within hours to a few days after a session. This is often faster than the several weeks typically required for traditional approaches to reach full effect.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Is ketamine used when other treatments for eating disorders have not worked?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. Ketamine is frequently considered for people who have not experienced enough relief from standard approaches. It works through a different pathway in the brain than most daily treatments.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Are fully guided sessions available for eating disorder support at your Aventura clinic?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. At Rewired Ketamine in Aventura, fully guided sessions are available in a calm, monitored clinical setting. Our team prioritizes safety, comfort, and partnership before, during, and after treatment.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Do you offer ketamine therapy for eating disorders to patients outside Aventura?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. We serve patients from Miami, Fort Lauderdale, and across South Florida from our Aventura clinic. We also provide Spanish-language support and welcome individuals seeking thoughtful, clinically supervised care.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          How is ketamine therapy for eating disorders different from traditional approaches?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Most traditional approaches gradually influence specific systems over time. Ketamine interacts with the glutamate system and is associated with more rapid changes in neuroplasticity. Sessions are intermittent and always medically supervised.
        </p>
      </div>

    </div>
  </div>
</section>

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