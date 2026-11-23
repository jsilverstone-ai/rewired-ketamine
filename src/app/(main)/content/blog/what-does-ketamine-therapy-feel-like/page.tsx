import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function WhatDoesKetamineTherapyFeelLikePage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Does Ketamine Therapy Feel Like?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            A gentle, honest overview of the experience at our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              One of the most common questions people ask is what a ketamine session actually feels like. The experience is different for each person, yet many describe a sense of calm, spaciousness, and gentle detachment from everyday mental noise.
            </p>
            <p>
              At Rewired Ketamine, a locally owned clinic in Aventura, Florida, we offer fully guided sessions available in a calm, monitored setting. We serve patients from Miami, Fort Lauderdale, and across South Florida. ¡Hablamos Español!
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            The early phase of a session
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              As the session begins, many people notice a gradual softening. Muscles may relax, breathing can slow, and the usual sense of urgency often fades. Some describe a mild warmth or lightness in the body. These changes tend to arrive gently rather than suddenly.
            </p>
            <p>
              You remain aware and able to communicate if needed. The setting is designed for comfort and safety throughout.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            The peak of the experience
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              During the more immersive portion of the session, many people experience a temporary shift in perception. Time may feel different. Thoughts can become quieter or easier to observe without being pulled into them. Some notice gentle visual patterns with eyes closed or a floating, weightless sensation.
            </p>
            <p>
              This temporary detachment is often described as a useful space for reflection. Fully guided sessions are available for those who prefer additional support during this time.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            After the session
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              As the effects fade, most people feel calm and a bit reflective. Mild fatigue or lightheadedness can occur and usually settles within a short time. You will rest at the clinic before heading home with a trusted driver.
            </p>
            <p>
              Many patients notice a shift in mood or perspective in the hours and days that follow. Individual responses vary, and follow-up support is part of the care we provide.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            A calm, supervised environment
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Every session at our Aventura clinic takes place under professional monitoring. Comfort, privacy, and clear communication are priorities. The goal is to create a setting where people can feel safe exploring this experience.
            </p>
            <p>
              As a locally owned practice serving South Florida, we welcome patients who want thoughtful, clinically supervised care in both English and Spanish.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">What does a ketamine session feel like?</h3>
              <p className="text-[#555] leading-relaxed">Many people describe a sense of calm, mental quiet, and temporary detachment. Experiences vary, and the setting is designed for comfort and safety.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic for those who prefer additional support.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Rewired Ketamine is locally owned and based in Aventura, serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Will I need a ride home?</h3>
              <p className="text-[#555] leading-relaxed">Yes. You will need a trusted driver after the session. Driving is not recommended the day of treatment.</p>
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