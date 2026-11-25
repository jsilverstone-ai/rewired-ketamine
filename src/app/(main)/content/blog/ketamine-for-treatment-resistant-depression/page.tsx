import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineForTreatmentResistantDepressionPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Why Is Ketamine Used for Treatment-Resistant Depression?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Understanding how ketamine may help when other treatments have not worked, from our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Treatment-resistant depression refers to depression that has not responded adequately to at least two different antidepressant trials at appropriate doses and durations. For many people in this situation, the search for additional options becomes important.
            </p>
            <p>
              At Rewired Ketamine, a locally owned clinic in Aventura, Florida, we offer fully guided sessions available as part of personalized care for individuals exploring support with treatment-resistant depression. We serve patients from Miami, Fort Lauderdale, and across South Florida. ¡Hablamos Español!
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Why ketamine is considered in these cases
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Traditional antidepressants primarily work on serotonin, norepinephrine, or dopamine pathways and often take several weeks to show effects. Ketamine works differently. It primarily affects the glutamate system and may promote rapid changes in brain connectivity (neuroplasticity).
            </p>
            <p>
              Because of this different mechanism, some people who have not found sufficient relief from standard medications notice meaningful shifts more quickly — sometimes within hours to days rather than weeks.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            What the research suggests
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Clinical studies have shown that ketamine can produce rapid antidepressant effects in a significant portion of people with treatment-resistant depression. Results vary from person to person, and not everyone responds the same way.
            </p>
            <p>
              A thorough medical evaluation is always the first step to determine whether this approach may be appropriate.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Care at our Aventura clinic
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Every session takes place under professional monitoring in a calm, private setting. Fully guided sessions are available for those who prefer additional support. Comfort, safety, and clear communication remain priorities throughout.
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
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">What is treatment-resistant depression?</h3>
              <p className="text-[#555] leading-relaxed">It generally refers to depression that has not responded adequately to at least two different antidepressant trials at appropriate doses and durations.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Why is ketamine considered for treatment-resistant depression?</h3>
              <p className="text-[#555] leading-relaxed">It works through a different mechanism than traditional antidepressants and may produce more rapid effects for some individuals.</p>
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
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Does ketamine replace antidepressants for everyone?</h3>
              <p className="text-[#555] leading-relaxed">No. Plans are individualized. Some people continue other care alongside ketamine; others do not. That decision belongs with the clinical team.</p>
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