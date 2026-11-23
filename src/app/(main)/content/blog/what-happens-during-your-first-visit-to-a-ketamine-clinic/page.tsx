import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function FirstVisitToAKetamineClinicPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">What Happens During Your First Visit To A Ketamine Clinic</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            A practical walkthrough of your first visit to our locally owned ketamine clinic in Aventura.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Knowing what to expect can make the first ketamine clinic visit feel calmer. At Rewired Ketamine, we want you to arrive informed, unrushed, and supported.
            </p>
            <p>
              We kindly ask that you arrive about 15 minutes early. Parking and arrival details are on our <Link href="/location" className="text-[#C9A66B] hover:underline">location page</Link>.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Warm welcome and check-in</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              You’ll be greeted by our front office team. There is time to complete paperwork or payment and settle in at a comfortable pace. Easy digital check-in is part of the process.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Time with clinicians</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              You’ll have time to speak with clinicians, ask questions, and review whether this approach may be appropriate. Fully guided sessions are available if you prefer additional support.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What to expect after</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Plan extra time after a session to rest and reorient before leaving. Our team remains available with clear next steps. If you want a visual walkthrough, visit our <Link href="/content/videos" className="text-[#C9A66B] hover:underline">videos page</Link>.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">How early should I arrive?</h3>
              <p className="text-[#555] leading-relaxed">About 15 minutes early is helpful so you can park, complete paperwork, and settle in without rushing.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Where is the clinic?</h3>
              <p className="text-[#555] leading-relaxed">2820 NE 214th St #1002, Aventura, FL 33180. We serve Miami and South Florida. ¡Hablamos Español!</p>
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