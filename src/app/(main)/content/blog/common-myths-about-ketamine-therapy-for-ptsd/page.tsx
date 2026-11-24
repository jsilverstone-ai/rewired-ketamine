import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function CommonMythsKetaminePTSDPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Common Myths About Ketamine Therapy For PTSD</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Clearing up common ketamine myths with a calm, educational approach from our Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              There is a lot of information online about ketamine therapy for PTSD. Some of it is helpful. Some of it is incomplete or misleading. This article addresses a few common ketamine myths so you can ask better questions.
            </p>
            <p>
              Learn more on our <Link href="/treatments/ptsd" className="text-[#C9A66B] hover:underline">PTSD treatment page</Link>. Fully guided sessions are available.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Myth: Ketamine is only a party drug</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              In a clinical setting, ketamine is used under professional monitoring as part of an individualized plan. The setting, screening, and support are very different from recreational use.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Myth: Every session is fully guided</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Not every session is fully guided. Fully guided sessions are available as an option for those who prefer additional support.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Myth: Results are the same for everyone</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Experiences vary. Some people notice changes more quickly than with traditional therapy, while others need more time and support. Ketamine infusion Florida care should always start with a careful evaluation.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine therapy for PTSD experimental only?</h3>
              <p className="text-[#555] leading-relaxed">Some people explore ketamine as part of a broader support plan when other approaches have not provided enough relief. A clinical evaluation is essential.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Will I be left alone during treatment?</h3>
              <p className="text-[#555] leading-relaxed">Professional monitoring is part of care. Fully guided sessions are also available.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is Rewired Ketamine local?</h3>
              <p className="text-[#555] leading-relaxed">Yes. We are locally owned in Aventura and serve Miami and South Florida. ¡Hablamos Español!</p>
            </div>
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