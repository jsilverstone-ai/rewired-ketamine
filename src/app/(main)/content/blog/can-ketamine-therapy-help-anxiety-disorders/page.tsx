import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function CanKetamineTherapyHelpAnxietyPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Can Ketamine Therapy Help Anxiety Disorders?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            A calm look at ketamine for anxiety at our locally owned clinic serving Miami and South Florida.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Anxiety can affect work, relationships, sleep, and daily comfort. Some people explore ketamine for anxiety when traditional approaches have not provided enough relief. At our Aventura clinic, care is individualized and professionally monitored.
            </p>
            <p>
              Fully guided sessions are available. Learn more on our <Link href="/treatments/anxiety" className="text-[#C9A66B] hover:underline">anxiety treatment page</Link>.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Why some people consider ketamine infusion Florida options</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Ketamine works differently from many standard anxiety medications. It may support neuroplasticity and create space for new patterns. Results vary, and an evaluation helps determine whether this approach may be appropriate.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Anxiety treatment Miami patients can access locally</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              You do not need to travel far. Rewired Ketamine is locally owned in Aventura and convenient for patients throughout Miami-Dade and South Florida.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can ketamine be considered for anxiety?</h3>
              <p className="text-[#555] leading-relaxed">Some individuals explore ketamine as part of a broader plan. A professional evaluation is the best way to determine appropriateness.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3>
              <p className="text-[#555] leading-relaxed">Yes. We serve Miami, Fort Lauderdale, and South Florida from Aventura. ¡Hablamos Español!</p>
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