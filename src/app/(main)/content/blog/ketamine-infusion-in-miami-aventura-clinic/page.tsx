import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineLongTermPTSDPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      Ketamine Infusion in Miami: What Treatment Looks Like at Our Aventura Clinic
    </h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
      A straightforward look at IV ketamine infusion for Miami-area patients treated in Aventura.
    </p>
    <p className="text-[#C9A66B] font-semibold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>

<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>
        Searches for <strong>ketamine infusion miami</strong> and <strong>IV ketamine Miami</strong> usually want one thing: what the visit actually involves. Infusions happen at our Aventura clinic, which serves Miami and South Florida. Details live on{" "}
        <Link href="/services" className="text-[#C9A66B] hover:underline">Our Services</Link> and{" "}
        <Link href="/services/ketamine-infusion" className="text-[#C9A66B] hover:underline">ketamine infusion</Link>.
      </p>
    </div>

    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
      What is an IV ketamine infusion?
    </h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>
        Medication is given through an IV in a monitored room. Session length depends on the plan — often about one hour for mental-health protocols, and longer when clinically appropriate. There is not one standard dose for every person.
      </p>
    </div>

    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
      How is infusion different from at-home ketamine?
    </h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>
        Infusion is in-clinic and closely monitored. At-home options may include oral, nasal, or rectal modalities after evaluation. Some people use one path; some discuss both. See{" "}
        <Link href="/services/home-ketamine" className="text-[#C9A66B] hover:underline">at-home ketamine treatment</Link>.
      </p>
    </div>

    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
      Who may explore ketamine infusion?
    </h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>
        Adults sometimes explore ketamine therapy Miami care for treatment-resistant depression, anxiety, or PTSD when traditional approaches have not been enough. It is not a cure, and it is not right for everyone. A clinical evaluation comes first. Fully guided sessions are available.
      </p>
      <p>
  If you searched <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">iv ketamine near me</Link>, our Aventura clinic is a short drive from North Miami and Miami.
</p>
    </div>

    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
      Where do Miami-area patients go?
    </h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>
        2820 NE 214th Street, Suite 1002, Aventura, FL 33180. That is the clinic behind most of our ketamine infusion South Florida visits. Start at the{" "}
        <Link href="/" className="text-[#C9A66B] hover:underline">homepage</Link> if you still need the broader clinic overview.
      </p>
    </div>

    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="faq-list space-y-0">
      <div className="py-6 border-b border-[#e6e0d6]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you offer ketamine infusion in Miami?</h3>
        <p className="text-[#555] leading-relaxed">IV infusions are done at our Aventura clinic, which serves Miami and South Florida.</p>
      </div>
      <div className="py-6 border-b border-[#e6e0d6]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">How long is a session?</h3>
        <p className="text-[#555] leading-relaxed">Plans vary. Many mental-health infusions are about an hour, with extra time to arrive and recover.</p>
      </div>
      <div className="py-6">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
        <p className="text-[#555] leading-relaxed">Yes. ¡Hablamos Español!</p>
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