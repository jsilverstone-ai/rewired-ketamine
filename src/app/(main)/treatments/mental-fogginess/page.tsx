import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function MentalFogginessPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />
      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Mental Fogginess</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">Fully guided ketamine support for mental fogginess.</p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

{/* Main Content */}
<section className="py-16 px-6">
  <div className="max-w-4xl mx-auto">
    <div className="prose prose-lg max-w-none text-[#444]">
      <p className="text-xl leading-relaxed mb-8">
        Mental fogginess can make it harder to focus, think clearly, and feel fully present. At our locally owned clinic in Aventura, we offer ketamine therapy as a supportive option for individuals seeking greater mental clarity.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">How Ketamine May Support Mental Clarity</h2>
      <p className="mb-6">
        Ketamine interacts with the brain’s glutamate system and may support neuroplasticity — the ability to form new neural connections. Some people notice improvements in focus, mental sharpness, and overall cognitive clarity.
      </p>
      <p className="mb-6">
        Fully guided sessions are available for those who prefer additional support during treatment. Our focus is on creating a safe, private, and calm environment.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">When Other Approaches Have Not Been Enough</h2>
      <p className="mb-6">
        For individuals who continue to experience mental fog despite other efforts, ketamine therapy may offer another avenue of support. Changes are often noticed more quickly than with traditional methods.
      </p>

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Care at Our Aventura Clinic</h2>
      <p className="mb-6">
        We are a locally owned practice serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español! Our team prioritizes clear communication and medically supervised care.
      </p>
    </div>

    <div className="mt-14 bg-[#0B1D36] text-white rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-4">Ready to take the next step?</h3>
      <p className="text-white/80 mb-6">Book a free consultation at our Aventura clinic.</p>
      <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
        Book Free Consultation
      </Link>
    </div>
  </div>
</section>
{/* FAQ */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-[#0B1D36] mb-10 text-center">Frequently Asked Questions</h2>
    
    <div className="space-y-6">
      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can ketamine help with mental fogginess or lack of clarity?</h3>
        <p className="text-[#555] leading-relaxed">Some individuals explore ketamine therapy when they experience persistent mental fog and have not found enough relief with other approaches.</p>
      </div>

      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available for mental fogginess treatment at your Aventura clinic?</h3>
        <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available in a calm, private setting at our Aventura location.</p>
      </div>

      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you see patients from outside Aventura for this concern?</h3>
        <p className="text-[#555] leading-relaxed">Yes. We welcome patients from Miami, Fort Lauderdale, and across South Florida.</p>
      </div>

      <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">How is ketamine different from traditional approaches for mental clarity?</h3>
        <p className="text-[#555] leading-relaxed">Ketamine interacts with the glutamate system and may support neuroplasticity, which some people find helpful for mental clarity when other methods have not been enough.</p>
      </div>
    </div>
  </div>
</section>
      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation. No pressure — just honest answers and a clear path forward.</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}