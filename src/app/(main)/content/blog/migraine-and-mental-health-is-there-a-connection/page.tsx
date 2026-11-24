import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function MigraineAndMentalHealthPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />


<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Migraine and Mental Health: Is There A Connection?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">How migraines and mental health can overlap — and what patients in Aventura and Miami may want to know.</p>
    <p className="text-[#C9A66B] font-semibold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Migraine is more than head pain. Many people also notice changes in mood, sleep, concentration, or anxiety around attacks. The relationship can go both ways: pain can affect mental health, and mental stress can make migraine patterns harder to manage.</p>
      <p>At our locally owned clinic in Aventura, we take that overlap seriously. Fully guided sessions are available.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Why the connection matters</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>When migraine and mood symptoms show up together, care often works better when both are considered. Some people exploring <Link href="/treatments/chronic-pain" className="text-[#C9A66B] hover:underline">chronic pain</Link> support also ask about mental health options.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Local care in Aventura</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>If you are looking into ketamine Aventura FL options because migraines and mental health feel connected, a free consultation is a calm place to start. No pressure — just clear questions and honest answers.</p>
    </div>
    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="faq-list space-y-0">
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can migraines affect mood?</h3><p className="text-[#555] leading-relaxed">Yes. Many people notice mood, sleep, or anxiety changes around migraine patterns. An evaluation can help sort out next steps.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you serve Miami?</h3><p className="text-[#555] leading-relaxed">Yes. Locally owned in Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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