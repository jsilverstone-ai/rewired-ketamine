import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function IsKetamineTherapyRightForYouPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Is Ketamine Therapy Right For You?</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">A consult-focused look at whether ketamine treatment in Florida may be appropriate for you.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>This is one of the most common questions we hear. The honest answer is: it depends on your history, current symptoms, medications, and goals. A free consultation is the calmest way to find out.</p>
      <p>You can also read <Link href="/content/blog/who-may-be-a-good-candidate-for-ketamine-therapy" className="text-[#C9A66B] hover:underline">who may be a good candidate for ketamine therapy</Link>.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Questions we consider together</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Have other approaches provided enough relief? Are you able to complete a medical evaluation? Do you have time for monitored sessions and recovery afterward? These questions help determine whether our <Link href="/" className="text-[#C9A66B] hover:underline">ketamine clinic Aventura</Link> may be a fit.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">No pressure to decide on the first call</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>We are locally owned and focused on clear answers. Fully guided sessions are available if you move forward.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">How do I know if I am a good candidate for ketamine?</h3><p className="text-[#555] leading-relaxed">A professional evaluation is the best way to determine appropriateness. History, medications, and current symptoms all matter.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Where are you located?</h3><p className="text-[#555] leading-relaxed">Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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