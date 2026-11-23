import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function SpravatoForTreatmentResistantDepressionPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section className="relative bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Spravato for Treatment-Resistant Depression
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            What a 2025 review found about in-clinic esketamine, and how visits work at our REMS-certified Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">
            <Link href="/es" className="hover:underline">¡Hablamos Español!</Link>
          </p>
        </div>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-sm text-[#C9A66B] font-semibold mb-2">October 2026</p>
          <p className="text-lg leading-relaxed mb-6">
            A 2025 review in <em>Neuropsychiatric Disease and Treatment</em> looked at intranasal esketamine, sold as Spravato, for major depression and treatment-resistant depression. The authors summarized trials that reported rapid antidepressant effects, often within hours, through NMDA receptor antagonism. This is a research summary, not a promise about any one person.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Spravato is FDA-approved esketamine nasal spray for adults with treatment-resistant depression. It is not taken home. Under the REMS program it is self-administered in a certified clinic and followed by a monitoring period. That is different from IV ketamine. At Rewired Ketamine in Aventura we offer both, and the right fit is decided after a consult.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">What the review covered</h2>
          <p className="text-lg leading-relaxed mb-6">
            Raza and colleagues reviewed evidence from trials including TRANSFORM-2, SUSTAIN-1, and ASPIRE. Those studies are often cited for rapid mood change in people who had not improved enough on standard antidepressants. Side effects discussed in the literature include dissociation and changes in blood pressure, which is why the observation window exists. A 2025 review reported lower rates of sexual side effects than many SSRIs. Individual results vary, and that is not a reason to choose the medicine.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">Spravato vs ketamine</h2>
          <p className="text-lg leading-relaxed mb-6">
            People comparing Spravato and ketamine are usually asking about setting, monitoring, and insurance. Spravato is a branded nasal spray given in clinic under REMS. IV ketamine is a different route, also given in clinic, and is used off-label for depression. Neither is a cure. Both are options to discuss when usual treatments have not been enough.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-10 mb-4">In Aventura, serving Miami</h2>
          <p className="text-lg leading-relaxed mb-6">
            Rewired Ketamine is a locally owned, REMS-certified clinic in Aventura. Patients searching Spravato Miami or Spravato Aventura are usually looking for an in-person visit in the North Miami metro, not a mail-order product. We serve Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Details on visits, monitoring, and insurance are on our{" "}
            <Link href="/services/spravato" className="text-[#C9A66B] font-semibold hover:underline">Spravato</Link>
            {" "}page. Depression care is described on{" "}
            <Link href="/treatments/depression" className="text-[#C9A66B] font-semibold hover:underline">ketamine and depression</Link>.
            A free consult is the place to ask which option, if either, fits.
          </p>
          <p className="text-sm text-[#666] mt-8">
            Source: Raza et al., <em>Neuropsychiatric Disease and Treatment</em>, 2025;21:2125–2140. DOI 10.2147/NDT.S548944.
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