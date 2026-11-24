import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
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
            Ketamine Infusion
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Fully guided IV sessions in a calm, private setting designed around you.
          </p>
<p className="text-[#C9A66B] font-bold text-lg md:text-xl">
  <Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link>
</p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
{/* Service Image */}
<section className="py-12 px-6">
  <div className="max-w-4xl mx-auto">
    <div className="rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
      <Image
        src="/services/ketamine-infusion-aventura.jpg"
        alt="Private ketamine infusion suite at Rewired Ketamine clinic in Aventura, Florida"
        width={1200}
        height={900}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  </div>
</section>

          <div className="prose prose-lg max-w-none text-[#444]">
            <p className="text-lg leading-relaxed mb-6">
              We offer fully guided ketamine infusion therapy in a calm, private setting designed around you. Every room can be adjusted to hold space in the way that feels right — lighting, sound, temperature, and atmosphere are all flexible so the environment supports your process.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Patients looking for <strong>ketamine infusion Miami</strong> care are usually coming from the city and nearby neighborhoods to our Aventura clinic — the same rooms, the same team. If you want the wider menu of IV and at-home options, start with{" "}
              <Link href="/services" className="text-[#C9A66B] font-semibold hover:underline">
                our services
              </Link>
              {" "}or the{" "}
              <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">
                homepage
              </Link>
              . Fully guided sessions are available.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our guiding approach is rooted in compassion and true partnership. We walk alongside you with care and intention, creating the conditions for meaningful insight and lasting change. Each session is carefully supervised so you feel safe, supported, and never alone.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-12">
            Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Card 1 – Mental Health */}
            <div className="border border-[#ddd] rounded-2xl overflow-hidden">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Mental Health Protocol</h3>
                <p className="text-sm text-white/70">1 Hour IV Ketamine Infusion</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-[#eee] pb-3">
                  <span>Single Session</span>
                  <span className="font-bold text-[#0B1D36]">$440</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#eee] pb-3">
                  <span>Package of 3</span>
                  <span className="font-bold text-[#0B1D36]">$1,200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Package of 6</span>
                  <span className="font-bold text-[#0B1D36]">$2,300</span>
                </div>
              </div>
            </div>

            {/* Card 2 – Chronic Pain */}
            <div className="border border-[#ddd] rounded-2xl overflow-hidden">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Chronic Pain Protocol</h3>
                <p className="text-sm text-white/70">2 Hour IV Ketamine Infusion</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-[#eee] pb-3">
                  <span>Single Session</span>
                  <span className="font-bold text-[#0B1D36]">$590</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#eee] pb-3">
                  <span>Package of 3</span>
                  <span className="font-bold text-[#0B1D36]">$1,700</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Package of 6</span>
                  <span className="font-bold text-[#0B1D36]">$3,200</span>
                </div>
              </div>
            </div>

            {/* Card 3 – Guided Mental Health */}
            <div className="border border-[#ddd] rounded-2xl overflow-hidden">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Guided Sessions</h3>
                <p className="text-sm text-white/70">1 Hour IV + Guide</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-[#eee] pb-3">
                  <span>Single Session</span>
                  <span className="font-bold text-[#0B1D36]">$590</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#eee] pb-3">
                  <span>Package of 3</span>
                  <span className="font-bold text-[#0B1D36]">$1,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Package of 6</span>
                  <span className="font-bold text-[#0B1D36]">$2,900</span>
                </div>
              </div>
            </div>

            {/* Card 4 – Guided Chronic Pain */}
            <div className="border border-[#ddd] rounded-2xl overflow-hidden">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Guided Sessions</h3>
                <p className="text-sm text-white/70">2 Hour IV + Guide</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-[#eee] pb-3">
                  <span>Single Session</span>
                  <span className="font-bold text-[#0B1D36]">$690</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#eee] pb-3">
                  <span>Package of 3</span>
                  <span className="font-bold text-[#0B1D36]">$1,925</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Package of 6</span>
                  <span className="font-bold text-[#0B1D36]">$4,000</span>
                </div>
              </div>
            </div>

          </div>

          <p className="text-center text-[#666] text-sm mt-8">
            Ask us about available discounts. Consultation required.
          </p>
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