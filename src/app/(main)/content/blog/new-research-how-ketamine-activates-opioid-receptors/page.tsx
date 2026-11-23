import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineOpioidReceptorsSciencePage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">New Research: How Ketamine Activates Opioid Receptors</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            A 2026 Nature study offers structural evidence that may help explain ketamine’s rapid effects — relevant for patients exploring ketamine Miami options.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              A landmark 2026 study published in <em>Nature Structural & Molecular Biology</em> has provided the first high-resolution structural evidence that ketamine and its analog PCP can directly bind and activate human opioid receptors. This adds an important layer to our understanding of why ketamine can produce rapid relief for treatment-resistant depression and severe pain.
            </p>
            <p>
              For individuals in South Florida exploring <strong>ketamine Miami</strong> care, the findings reinforce the multi-target nature of ketamine and support the thoughtful, clinically supervised approach used at Rewired Ketamine in Aventura.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            What the 2026 Nature study found
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Researchers used cryo-electron microscopy, pharmacological assays, mutagenesis, and molecular dynamics simulations to examine how (S)-ketamine and PCP interact with kappa (KOR) and mu (MOR) opioid receptors.
            </p>
            <p>
              Key findings include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ketamine and PCP act as partial agonists at KOR and MOR, with lower activity at the delta receptor.</li>
              <li>Both compounds bind in the orthosteric site of the receptors.</li>
              <li>Ketamine shows more dynamic binding than PCP, which may contribute to its distinct clinical profile.</li>
              <li>In mouse models, ketamine’s antinociceptive effects were blocked by opioid receptor antagonists.</li>
              <li>The team also determined the first structure of the ligand-free human kappa opioid receptor.</li>
            </ul>
            <p>
              While NMDA receptor antagonism remains central, the authors conclude that opioid receptor engagement is an important part of ketamine’s versatility in clinical settings.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Why this matters for patients seeking ketamine Miami therapy
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              These structural insights help explain why many people experience relatively rapid improvement with ketamine when traditional approaches have not been enough. The combination of NMDA and opioid receptor activity supports the faster onset often reported for depression, anxiety, PTSD, and chronic pain.
            </p>
            <p>
              At <Link href="/" className="text-[#0B1D36] font-semibold underline hover:text-[#C9A66B] transition">Rewired Ketamine</Link>, our Aventura clinic focuses on fully guided IV ketamine therapy informed by current science on neuroplasticity and multi-receptor mechanisms. We serve patients from Miami, Fort Lauderdale, and across South Florida.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Care at our Aventura clinic
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              As a locally owned practice, we prioritize thoughtful, medically supervised care. Fully guided sessions are available, and integration support helps patients process insights and support lasting change. Treatment plans are individualized based on each person’s needs and response.
            </p>
            <p>
              You can learn more about the conditions we support on our <Link href="/treatments" className="text-[#0B1D36] font-semibold underline hover:text-[#C9A66B] transition">Treatments page</Link> and meet the clinical team on our <Link href="/providers" className="text-[#0B1D36] font-semibold underline hover:text-[#C9A66B] transition">Providers page</Link>. Details about our location and arrival are available on the <Link href="/location" className="text-[#0B1D36] font-semibold underline hover:text-[#C9A66B] transition">Location page</Link>.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Does this research change how ketamine is used clinically?</h3>
              <p className="text-[#555] leading-relaxed">The study provides structural evidence that helps explain existing clinical observations. It supports the importance of careful medical supervision and individualized care rather than changing standard protocols overnight.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine still primarily an NMDA receptor medication?</h3>
              <p className="text-[#555] leading-relaxed">Yes. NMDA receptor antagonism remains a core mechanism. The new work shows that opioid receptor engagement is an additional, relevant part of its overall profile.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available at Rewired Ketamine?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic for those who prefer additional support during treatment. ¡Hablamos Español!</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Who is this approach intended for?</h3>
              <p className="text-[#555] leading-relaxed">Individuals exploring support for treatment-resistant depression, anxiety, PTSD, chronic pain, and related conditions may consider ketamine therapy after a thorough clinical evaluation. A professional consultation is the best next step.</p>
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