import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineTherapyForAnxietyPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Can Ketamine Therapy Help Anxiety Disorders?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Exploring this option at our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Anxiety can show up in many forms — persistent worry, social discomfort, panic, or a constant sense of unease that makes daily life feel harder. Traditional approaches help many people, yet some continue looking for additional options when progress feels slow.
            </p>
            <p>
              At Rewired Ketamine, a locally owned clinic in Aventura, Florida, we offer fully guided sessions available as part of personalized care for individuals exploring support with anxiety. We serve patients from Miami, Fort Lauderdale, and across South Florida. ¡Hablamos Español!
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            How ketamine may support people with anxiety
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Research suggests that ketamine may help reduce symptoms of certain anxiety disorders for some individuals, sometimes more quickly than traditional medications. Effects can appear within hours to days rather than weeks.
            </p>
            <p>
              Many people also notice that the temporary shift in perception during a session creates space to step back from racing thoughts or worry loops. Fully guided sessions are available for those who prefer additional support during this process.
            </p>
            Learn more about <Link href="/">ketamine treatment in Aventura</Link> and how it may help with depression, anxiety, and PTSD.
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            When traditional approaches have not been enough
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Some individuals explore ketamine therapy after trying other treatments with limited relief. Others seek it as part of a broader wellness plan that includes therapy, lifestyle support, or medical management.
            </p>
            <p>
              A thorough evaluation helps determine whether this approach may be appropriate. At our Aventura clinic, this conversation is collaborative and focused on each person’s unique history and goals.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            What care looks like at our clinic
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
              Sustainable progress often includes professional care alongside supportive daily habits such as balanced nutrition, movement, rest, and stress management. Ongoing check-ins help keep the plan aligned with real life.
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
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can ketamine therapy help with anxiety?</h3>
              <p className="text-[#555] leading-relaxed">Research suggests it may help reduce symptoms for some individuals. A professional evaluation is the best way to determine whether it may be appropriate for you.</p>
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
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">How quickly might someone notice changes?</h3>
              <p className="text-[#555] leading-relaxed">Some people notice shifts within hours to days. Individual responses vary, and follow-up support is part of care.</p>
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