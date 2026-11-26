import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RelatedQuestions from "@/components/RelatedQuestions";

export default function KetamineForMigrainesAndChronicHeadachesPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ketamine for Migraines and Chronic Headaches</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Exploring how ketamine may help with refractory migraines at our Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Chronic migraines and persistent headaches can significantly affect quality of life. At Rewired Ketamine, a locally owned clinic in Aventura, Florida, some individuals explore ketamine as part of a broader care plan when other approaches have not provided enough relief.
            </p>
            <p>
              Fully guided sessions are available. We serve patients from Miami, Fort Lauderdale, and across South Florida. ¡Hablamos Español!
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            How ketamine may relate to pain pathways
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Ketamine primarily affects NMDA receptors involved in pain signaling and central sensitization. For some people with refractory migraines or chronic headaches, this different mechanism may offer an additional option when traditional treatments have not been sufficient.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            What the process looks like
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              A thorough evaluation helps determine whether this approach may be appropriate. Sessions take place under professional monitoring in a calm, private setting. Fully guided sessions are available for those who prefer additional support.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Care at our Aventura clinic
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              As a locally owned practice, we focus on thoughtful, clinically supervised care. Comfort, safety, and clear communication remain priorities. Plans are individualized based on each person’s needs and response.
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
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can ketamine be considered for migraines?</h3>
              <p className="text-[#555] leading-relaxed">Some individuals with refractory migraines or chronic headaches explore ketamine when other treatments have not provided enough relief. A professional evaluation is essential.</p>
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
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Will ketamine stop all migraines?</h3>
              <p className="text-[#555] leading-relaxed">No treatment works that way for everyone. Ketamine may help some people, and evaluation and follow-up matter more than marketing claims.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine FDA-approved for migraine?</h3>
              <p className="text-[#555] leading-relaxed">No. Ketamine is not FDA-approved for migraine, so using it for headache conditions is off-label. Care decisions are individualized; ask during your consultation what may be appropriate for your history.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedQuestions path="/content/blog/ketamine-for-migraines-and-chronic-headaches" />

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