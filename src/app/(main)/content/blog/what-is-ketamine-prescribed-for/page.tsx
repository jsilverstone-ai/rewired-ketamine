import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhatIsKetaminePrescribedForPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Is Ketamine Prescribed For?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            A clear overview of the conditions ketamine may support, from our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Many people ask what ketamine is prescribed for when they are looking for additional options beyond traditional treatments. At Rewired Ketamine, a locally owned clinic in Aventura, Florida, we offer fully guided sessions available as part of personalized care for a range of mental health and pain-related concerns.
            </p>
            <p>
              We serve patients from Miami, Fort Lauderdale, and across South Florida. ¡Hablamos Español!
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Treatment-resistant depression
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              One of the most common reasons people explore ketamine is treatment-resistant depression — depression that has not responded adequately to at least two different antidepressant trials. Because ketamine works through a different mechanism than traditional medications, some individuals notice meaningful shifts more quickly.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Anxiety, PTSD, and related conditions
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Ketamine is also explored for certain anxiety disorders, PTSD, and related mental health challenges. Fully guided sessions are available for those who prefer additional support during treatment. A thorough evaluation helps determine whether this approach may be appropriate.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Chronic pain and migraines
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Some individuals with chronic pain, tension headaches, or refractory migraines also explore ketamine as part of a broader care plan. Results vary from person to person, and professional monitoring remains essential.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Care at our Aventura clinic
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Every session takes place under professional monitoring in a calm, private setting. Comfort, safety, and clear communication remain priorities. As a locally owned practice, we welcome patients who want thoughtful, clinically supervised options in both English and Spanish.
            </p>
            <p>
              Rewired Ketamine is based in Aventura and serves Miami, Fort Lauderdale, and the greater South Florida community.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">What is ketamine most commonly prescribed for?</h3>
              <p className="text-[#555] leading-relaxed">Treatment-resistant depression is one of the most common reasons people explore ketamine therapy.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can it be used for anxiety or PTSD?</h3>
              <p className="text-[#555] leading-relaxed">Some individuals explore ketamine for certain anxiety disorders and PTSD. A professional evaluation is the best way to determine appropriateness.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic for those who prefer additional support.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Rewired Ketamine is locally owned and based in Aventura, serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!</p>
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