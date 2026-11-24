import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineIntegrationAventuraPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Ketamine Integration in Aventura
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Application after the session — not the same as therapy.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">
            <Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link>
          </p>
        </div>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-sm text-[#C9A66B] font-semibold mb-2">October 2026</p>
          <p className="text-lg leading-relaxed mb-6">
            At Rewired Ketamine, integration is the shorter, focused step of applying what came up in a guided ketamine session to daily life. It is not the same as therapy. Therapy is the ongoing work of building tools and processing over a longer relationship. Integration is the practical bridge right after the session.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We do not claim that integration replaces therapy, or that ketamine alone is therapy. A consult decides whether a guided session is appropriate. Integration is available as part of how we support that process at our Aventura clinic.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">What is ketamine integration?</h2>
          <p className="text-lg leading-relaxed mb-6">
            A ketamine integration session is a structured conversation after the infusion or Spravato visit. The goal is simple: notice what stood out during the session and name one or two ways it can show up in ordinary days — sleep, relationships, work, or the next decision. It is brief by design. It is not a full course of talk therapy.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Literature on ketamine-assisted approaches often separates the medicine session from the follow-up work of making meaning of it. One supporting review on ketamine and pain pathways notes the importance of context and follow-through around the intervention itself (see source below). We use that idea locally: the session opens something; integration helps apply it.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">What happens in an integration visit</h2>
          <p className="text-lg leading-relaxed mb-6">
            Timing is usually within a few days after the guided session, while details are still clear. You sit with a clinician who was connected to the visit. The conversation covers what you noticed, how the guided setting felt, and what you want to carry forward. There is no requirement to share everything. The focus stays on application, not on reprocessing the whole history.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Fully guided sessions are available. Integration is the follow-up step that ties the session to the rest of your week. Rooms and pacing stay calm and adjustable.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">Integration vs therapy</h2>
          <p className="text-lg leading-relaxed mb-6">
            Therapy is the longer relationship for building skills, patterns, and ongoing processing. Integration is the shorter, session-linked step. Some people already have a therapist and use integration only for the ketamine piece. Others start with a consult and decide what else they need. We do not treat integration as a substitute for therapy.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">At our Aventura clinic</h2>
          <p className="text-lg leading-relaxed mb-6">
            Rewired Ketamine is a locally owned clinic in Aventura. People looking for ketamine integration Aventura or a ketamine integration session are usually looking for in-person follow-up after a guided visit in the North Miami metro. We serve Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!
          </p>
          <p className="text-lg leading-relaxed mb-6">
            See{" "}
            <Link href="/services" className="text-[#C9A66B] font-semibold hover:underline">our services</Link>
            {" "}for how guided sessions and integration fit together, and the{" "}
            <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">homepage</Link>
            {" "}for how care starts. A free consult is the place to ask whether integration is part of your plan.
          </p>
          <p className="text-sm text-[#666] mt-8">
            Supporting cite: Journal of Pain Research, 2022. DOI 10.2147/JPR.S360733. This page describes the clinic’s integration model, not a claim that ketamine or integration treats any condition.
          </p>
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