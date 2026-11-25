import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function HowToPrepareForKetamineTherapyPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

<section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">How To Prepare Mentally and Physically For Ketamine Therapy</h1>
    <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">Practical preparation for your first ketamine session at our Aventura clinic.</p>
    <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
  </div>
</section>
<section className="py-20 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="text-[#444] space-y-6 text-lg leading-relaxed">
      <p>Preparing for a first ketamine session is mostly about reducing rush and uncertainty. Arrive about 15 minutes early. Wear comfortable clothing. Plan a ride home if advised during your evaluation.</p>
      <p>For arrival details, see <Link href="/content/blog/what-to-expect-during-your-first-ketamine-session" className="text-[#C9A66B] hover:underline">what to expect during your first session</Link> and our <Link href="/location" className="text-[#C9A66B] hover:underline">parking instructions</Link>.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Mental preparation</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>You do not need a perfect mindset. It helps to bring questions, an open but grounded attitude, and a willingness to rest afterward. Fully guided sessions are available if extra support would feel better.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Physical preparation</h2>
    <div className="text-[#444] space-y-5 text-lg leading-relaxed">
      <p>Follow any eating, medication, or arrival instructions given during your consult. Give yourself time after the session before returning to a busy schedule.</p>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Should I eat before a session?</h3><p className="text-[#555] leading-relaxed">Follow the instructions given during your evaluation. Plans can differ from person to person.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3><p className="text-[#555] leading-relaxed">Yes.</p></div>
      <div className="bg-white rounded-xl p-6 border border-[#eee]"><h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Where is the clinic?</h3><p className="text-[#555] leading-relaxed">Aventura, serving Miami and South Florida. ¡Hablamos Español!</p></div>
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