import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function AnxietyPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />
      {/* ===== HERO ===== */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Anxiety</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">Fully guided ketamine support for anxiety.</p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>
{/* Main Content */}
<section className="py-16 px-6">
  <div className="max-w-4xl mx-auto">
    
    <div className="prose prose-lg max-w-none text-[#444]">
      <p className="text-xl leading-relaxed mb-8">
        Anxiety can feel overwhelming, persistent, and hard to manage with traditional approaches alone. At our locally owned clinic in Aventura, we offer ketamine therapy as a supportive option for individuals seeking relief when other treatments have not provided enough help.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">How Ketamine May Help with Anxiety</h2>
      <p className="mb-6">
        Ketamine works differently from standard anti-anxiety medications. It interacts with the glutamate system in the brain and may support the growth of new neural connections. Many people notice a shift in how they experience anxiety, often more quickly than with traditional therapies.
      </p>
      <p className="mb-6">
        Fully guided sessions are available for those who prefer additional support during treatment. Our approach focuses on safety, comfort, and individualized care in a calm private setting.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">When Traditional Treatments Haven’t Been Enough</h2>
      <p className="mb-6">
        For some individuals, standard medications and talk therapy provide limited relief. Ketamine therapy may offer another path forward, particularly when anxiety has been persistent or treatment-resistant. Results are often noticed more quickly than with conventional approaches.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Care at Our Aventura Clinic</h2>
      <p className="mb-6">
        As a locally owned practice serving Miami, Fort Lauderdale, and South Florida, we prioritize a thoughtful, medically supervised experience. ¡Hablamos Español! We welcome patients seeking a calm and supportive environment for their care.
      </p>
    </div>

    {/* CTA Box */}
    <div className="mt-14 bg-[#0B1D36] text-white rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to explore support for anxiety?</h3>
      <p className="text-white/80 mb-6">Schedule a free consultation at our Aventura clinic. No pressure — just clear information and compassionate guidance.</p>
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
          Is ketamine used when other treatments for anxiety have not worked?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. Ketamine is frequently considered for people who have not experienced enough relief with traditional approaches.
        </p>
      </div>

      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Are fully guided sessions available for anxiety treatment at your Aventura clinic?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. At Rewired Ketamine in Aventura, fully guided sessions are available in a calm, monitored setting.
        </p>
      </div>

      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Do you offer ketamine therapy for anxiety to patients outside Aventura?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. We serve patients from Miami, Fort Lauderdale, and across South Florida from our Aventura location.
        </p>
      </div>

      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          How is ketamine therapy for anxiety different from traditional approaches?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Most traditional approaches gradually influence specific systems over time. Ketamine interacts with the glutamate system and may support more rapid changes for some individuals.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation. No pressure — just honest answers and a clear path forward.</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <SiteFooter />
    </main>
  );
}