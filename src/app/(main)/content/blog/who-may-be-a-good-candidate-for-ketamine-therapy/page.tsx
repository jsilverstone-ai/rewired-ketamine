import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhoMayBeAGoodCandidatePage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

{/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Who May Be A Good Candidate For Ketamine Therapy?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            An educational guide for people considering ketamine treatment in Miami, Aventura, and South Florida.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Not everyone is a candidate for ketamine therapy, and a thoughtful evaluation is the first step. At our locally owned <Link href="/" className="text-[#C9A66B] hover:underline">ketamine clinic in Aventura</Link>, we take time to understand each person’s history, current symptoms, and goals before recommending a plan.
            </p>
            <p>
              Fully guided sessions are available. We serve patients from Miami, Fort Lauderdale, and across South Florida.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Who often explores ketamine therapy</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Many people who consider ketamine treatment Florida options have already tried traditional approaches without enough relief. This may include <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">treatment-resistant depression</Link>, anxiety, PTSD, or related conditions.
            </p>
            <p>
              A good candidate is typically an adult who can complete a medical evaluation, discuss current medications, and participate in a monitored plan.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What the evaluation looks for</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              We review medical history, mental health history, current medications, and practical questions about support and recovery time. The goal is to determine whether ketamine therapy may be appropriate — not to rush anyone into treatment.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Care at our Aventura clinic</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Rewired Ketamine is locally owned and focused on clear communication. If you have been searching for ketamine Miami options or asking who may be a candidate for ketamine, a free consultation is a calm place to start.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do I need a diagnosis first?</h3>
              <p className="text-[#555] leading-relaxed">A professional evaluation helps determine whether this approach may be appropriate. We review history and current symptoms before recommending next steps.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3>
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