import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function MigraineAndMentalHealthConnectionPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Migraine and Mental Health: Is There a Connection?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Understanding the link and how support may look at our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Many people who live with migraine also experience anxiety, depression, or other mental health challenges. The relationship appears to run in both directions — migraines can affect mood and emotional well-being, while stress, anxiety, or low mood can sometimes influence the frequency or intensity of headaches.
            </p>
            <p>
              At Rewired Ketamine, a locally owned clinic in Aventura, Florida, we offer fully guided sessions available as part of personalized care for individuals exploring support with chronic pain, tension headaches, and related mental health concerns. We serve patients from Miami, Fort Lauderdale, and across South Florida. ¡Hablamos Español!
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            The overlap between migraine and mental health
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Research shows that people with migraine are more likely to experience depression or anxiety than those without. Chronic migraine in particular is often linked with higher rates of mood and anxiety challenges. The shared pathways in the brain that process pain and emotion may help explain this connection.
            </p>
            <p>
              Living with unpredictable pain can also create frustration, anticipatory anxiety, and disrupted sleep — all of which can further impact emotional well-being.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            How ketamine therapy may fit into a broader plan
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Some individuals explore ketamine therapy when traditional approaches for pain or mood have not provided enough relief. Ketamine is studied for its potential effects on both chronic pain pathways and certain mental health symptoms. Fully guided sessions are available for those who prefer additional support during treatment.
            </p>
            <p>
              A thorough evaluation helps determine whether this approach may be appropriate as part of a larger wellness strategy.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Care at our Aventura clinic
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Every session takes place under professional monitoring in a calm, private setting. Comfort, safety, and clear communication remain priorities. Care plans are individualized and can evolve based on how someone responds.
            </p>
            <p>
              As a locally owned practice serving South Florida, we welcome patients who want thoughtful, clinically supervised options in both English and Spanish.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Building longer-term support
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Sustainable progress often includes professional care alongside supportive daily habits such as consistent sleep, gentle movement, stress management, and balanced nutrition. Ongoing check-ins help keep the plan aligned with real life.
            </p>
            <p>
              Rewired Ketamine is based in Aventura and serves Miami, Fort Lauderdale, and the greater South Florida community. We are locally owned and committed to providing accessible, compassionate care.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is there a connection between migraine and mental health?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Research shows people with migraine are more likely to experience anxiety or depression, and the relationship appears to work in both directions.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can ketamine therapy be considered for these concerns?</h3>
              <p className="text-[#555] leading-relaxed">Some individuals explore it when other approaches have not provided enough relief. A professional evaluation is the best way to determine whether it may be appropriate.</p>
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