import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineNeuroplasticityMicrogliaPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ketamine and Neuroplasticity in Female Brains
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            New research explores how ketamine may support neuroplasticity through microglia — and what it could mean for patients seeking ketamine for depression in Miami and Aventura.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              A recent study highlighted by News-Medical.net (sourced from the Allen Institute) offers new insight into how ketamine may influence the brain. Researchers found that ketamine increased neuroplasticity in female mice by activating microglia through a pathway involving corticosterone, the Fkbp5 gene, and the FKBP51 protein.
            </p>
            <p>
              This process appeared to support extracellular matrix remodeling and the formation of new synapses. The effect was observed in female animals but not in males, underscoring important sex differences in how the brain may respond to ketamine.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Why this research matters
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Neuroplasticity — the brain’s ability to form new connections — is one of the key reasons many clinicians and patients explore ketamine. Findings like these help us better understand the biological pathways that may contribute to the rapid changes some people experience.
            </p>
            <p>
              While this study was conducted in animals, it adds to a growing body of research examining how ketamine interacts with the brain’s support systems, including immune cells such as microglia.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            What this could mean for patients in Miami and Aventura
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              At our locally owned <Link href="/" className="text-[#C9A66B] hover:underline">ketamine clinic in Aventura</Link>, we regularly support individuals exploring <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">ketamine for depression</Link> when traditional approaches have not provided enough relief. Fully guided sessions are available.
            </p>
            <p>
              Research into sex differences and neuroplasticity may eventually help refine how care is personalized. For now, it reinforces the importance of individualized evaluation and thoughtful clinical supervision.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Care at our South Florida clinic
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Rewired Ketamine is a locally owned practice serving Miami, Fort Lauderdale, and the greater South Florida community. We focus on clear communication, safety, and supportive care. Plans are tailored to each person’s needs and response.
            </p>
            <p>
              If you are searching for “ketamine therapy near me” or “ketamine for depression Miami,” we invite you to begin with a free consultation. There is no pressure — just an opportunity to ask questions and explore whether this approach may be appropriate for you.
            </p>
          </div>

          <p className="text-sm text-[#888] mt-12">
            Source: <a href="https://www.news-medical.net/news/20260731/Ketamine-boosts-neuroplasticity-through-microglia-in-female-brains.aspx" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">News-Medical.net – Ketamine boosts neuroplasticity through microglia in female brains</a>
          </p>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Does this research mean ketamine works differently in women?</h3>
              <p className="text-[#555] leading-relaxed">The study found sex differences in mice. Human research is still needed. Clinical care remains individualized regardless of sex.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic for those who prefer additional support.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is Rewired Ketamine a local clinic?</h3>
              <p className="text-[#555] leading-relaxed">Yes. We are a locally owned ketamine clinic in Aventura serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!</p>
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