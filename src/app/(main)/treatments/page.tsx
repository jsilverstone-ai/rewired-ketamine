"use client";

import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function TreatmentsPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />
      {/* ===== HERO ===== */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">
            Aventura • South Florida
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Treatments
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Fully guided ketamine support for a range of mental health and pain-related concerns — with care that prioritizes safety, compassion, and lasting change.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">
            <Link href="/es" className="hover:underline">¡Hablamos Español!</Link>
          </p>
        </div>
      </section>
      <p className="text-lg leading-relaxed mb-6">
  People searching <strong>ketamine treatment Miami</strong> are usually looking for in-person care in the Aventura / North Miami metro. That care is at{" "}
  <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">our clinic</Link>
  {" "}and listed under{" "}
  <Link href="/services" className="text-[#C9A66B] font-semibold hover:underline">services</Link>.
  Fully guided sessions are available.
</p>

      {/* ===== VIDEO ===== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/El4sovixl6Y"
              title="Rewired Ketamine Treatments"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <p>
  All treatments are offered at{" "}
  <Link href="/" className="text-[#C9A66B] underline underline-offset-2">
    our ketamine clinic in Aventura
  </Link>
  .
</p>

      {/* ===== COMPARISON CHART ===== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-10">
            How Ketamine Compares
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard */}
            <div className="bg-white rounded-2xl border border-[#eee] overflow-hidden shadow-sm">
              <div className="bg-[#6b7280] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Standard Antidepressants</h3>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <p className="text-sm text-[#666] mb-1">Typical Response Rate</p>
                  <p className="text-2xl font-bold text-[#0B1D36]">30% – 60%</p>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">Longer-Term Benefit</p>
                  <p className="text-2xl font-bold text-[#0B1D36]">5% – 15%</p>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">Time to Noticeable Effect</p>
                  <p className="text-lg font-semibold text-[#0B1D36]">Often 4–8 weeks</p>
                </div>
              </div>
            </div>

            {/* Ketamine */}
            <div className="bg-white rounded-2xl border-2 border-[#C9A66B] overflow-hidden shadow-sm">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Ketamine Therapy</h3>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <p className="text-sm text-[#666] mb-1">Typical Response Rate</p>
                  <p className="text-2xl font-bold text-[#C9A66B]">70% – 90%</p>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">Longer-Term Benefit</p>
                  <p className="text-2xl font-bold text-[#C9A66B]">60% – 80%</p>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">Time to Noticeable Effect</p>
                  <p className="text-lg font-semibold text-[#0B1D36]">Often hours to days</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-[#666] mt-8 max-w-2xl mx-auto">
            Many people explore ketamine when traditional approaches have not brought enough relief. Individual results vary, and care is always personalized.
          </p>
          <p>
  Looking for a <Link href="/" className="text-[#C9A66B] hover:underline">ketamine clinic Miami</Link> patients trust? Our Aventura location serves the greater Miami area with fully guided sessions.
</p>
        </div>
      </section>

      {/* ===== CONDITIONS GRID ===== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-12">
            Conditions We Support
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Depression", href: "/treatments/depression", desc: "Support for mood, energy, and presence when traditional approaches haven’t been enough." },
              { title: "Anxiety", href: "/treatments/anxiety", desc: "Help quieting racing thoughts and tension in a calm, guided setting." },
              { title: "PTSD", href: "/treatments/ptsd", desc: "Careful support for those navigating trauma and a nervous system on high alert." },
              { title: "Burnout", href: "/treatments/burnout", desc: "Support for high-stress exhaustion when it overlaps with depression or anxiety that has not responded well to usual care." },
              { title: "Mental Fogginess", href: "/treatments/mental-fogginess", desc: "Support for clearer thinking, focus, and cognitive ease." },
              { title: "Motivation", href: "/treatments/motivation", desc: "Helping restore a sense of possibility and forward movement." },
              { title: "Eating Disorder", href: "/treatments/eating-disorder", desc: "Sensitive, collaborative support as part of a broader care plan." },
              { title: "Postpartum Depression", href: "/treatments/postpartum-depression", desc: "Compassionate care that may support earlier bonding during a critical window." },
              { title: "OCD", href: "/treatments/ocd", desc: "Support for greater mental flexibility and interrupting rigid thought cycles." },
              { title: "Chronic Pain", href: "/treatments/chronic-pain", desc: "Whole-person support for pain that affects mood, sleep, and quality of life." },
              { title: "Tension Headaches", href: "/treatments/tension-headaches", desc: "Guided care for persistent tension-related head pain." },
              { title: "Palliative & Compassion Care", href: "/treatments/palliative-compassion-care", desc: "Comfort-focused support centered on dignity and quality of life." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-[#F8F5F0] rounded-2xl p-6 border border-[#eee] hover:border-[#C9A66B] transition flex flex-col"
              >
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-3">{item.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed flex-grow mb-4">{item.desc}</p>
                <span className="text-[#C9A66B] font-medium text-sm">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">
            Book a free consultation. No pressure — just honest answers and a clear path forward.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <SiteFooter />
    </main>
  );
}