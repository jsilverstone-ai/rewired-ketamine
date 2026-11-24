import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetamineClinicMiamiVsAventuraPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      Ketamine Clinic in Miami vs Aventura: How to Choose a Local Provider
    </h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
      Most “ketamine miami” searches mean the metro area. Here is how to decide whether an Aventura clinic is the right local fit.
    </p>
    <p className="text-[#C9A66B] font-semibold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>

<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>
        People searching <strong>ketamine miami</strong> or <strong>ketamine clinic miami</strong> are usually looking for care in the greater Miami area — not only a downtown Miami ZIP code. Rewired Ketamine is a locally owned clinic in Aventura that serves Miami, Fort Lauderdale, and South Florida.
      </p>
      <p>
        The useful question is not “Which city name is on the sign?” It is whether the provider is close enough, medically supervised, and a place you trust. Start with our{" "}
        <Link href="/" className="text-[#C9A66B] hover:underline">ketamine clinic Miami</Link> homepage and{" "}
        <Link href="/location" className="text-[#C9A66B] hover:underline">Aventura location</Link>.
      </p>
      <p>
  We are a locally owned <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">ketamine clinic south florida</Link> serving Aventura, Miami, and Fort Lauderdale.
</p>
    </div>

    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
      What does “ketamine clinic Miami” actually mean?
    </h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>
        Google often groups Aventura with Miami-area results. Patients in North Miami, Sunny Isles, Miami Beach, and Broward regularly drive to Aventura. “Miami” in search is usually metro intent: a clinic that is reachable, reviewed, and set up for ketamine therapy Miami patients actually use.
      </p>
    </div>

    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
      Who should drive to Aventura?
    </h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>
        Aventura is a practical choice if you want a locally owned clinic rather than a national chain, prefer a quieter medical-office setting, and can arrive about 15 minutes early for parking and check-in. We are in the Serena Hotel Offices at 2820 NE 214th Street, Suite 1002.
      </p>
    </div>

    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
      How should I compare local providers?
    </h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>
        Look at Google reviews, whether sessions can be fully guided, who is on the clinical team, and whether the plan is individualized. Locally owned care is different from a multi-city brand. Fully guided sessions are available here. Results vary. No clinic should promise a cure.
      </p>
    </div>

    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="faq-list space-y-0">
      <div className="py-6 border-b border-[#e6e0d6]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is Rewired Ketamine a Miami clinic or an Aventura clinic?</h3>
        <p className="text-[#555] leading-relaxed">Both, in the way people search. The office is in Aventura and serves Miami and South Florida.</p>
      </div>
      <div className="py-6 border-b border-[#e6e0d6]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
        <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available. Not every visit uses the same format.</p>
      </div>
      <div className="py-6">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Where do I start?</h3>
        <p className="text-[#555] leading-relaxed">Read the homepage, then book a free consultation or call/text (305) 676-6070. ¡Hablamos Español!</p>
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