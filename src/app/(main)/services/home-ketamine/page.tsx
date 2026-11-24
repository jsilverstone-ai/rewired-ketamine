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
            Home Ketamine
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Guided ketamine support in the comfort of your home.
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
        src="/services/home-ketamine-therapy-miami.jpg"
        alt="Comfortable home setting for at-home ketamine therapy serving Miami and South Florida"
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
              For those who prefer treatment at home, we offer a thoughtfully structured home ketamine program with clear clinical guidance and ongoing support. We provide different at-home modalities — including oral (RDTs), nasal, rectal, and subcutaneous options — chosen to support improved bioavailability and comfort.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              In many cases, these approaches can also be more accessible than typical Spravato copays. You’ll receive the same careful oversight and integration focus, just in a setting that feels familiar and private.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-4">
            Pricing
          </h2>
          <p className="text-center text-[#666] mb-12">
            Multiple dose options — starts at the prices below
          </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Oral */}
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Oral (RDTs)</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Starts at</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$225</p>
                <p className="text-sm text-[#555]">
                  Multiple doses with clinical guidance and support
                </p>
              </div>
            </div>

            {/* Nasal */}
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Nasal</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Starts at</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$325</p>
                <p className="text-sm text-[#555]">
                  Multiple doses with clinical guidance and support
                </p>
              </div>
            </div>

            {/* Rectal */}
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Rectal</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Starts at</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$275</p>
                <p className="text-sm text-[#555]">
                  Multiple doses with clinical guidance and support
                </p>
              </div>
            </div>
            {/* Subcutaneous */}
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Subcutaneous</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Starts at</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$600</p>
                <p className="text-sm text-[#555] mb-4">
                  Multiple doses with clinical guidance and support
                </p>
              <Link
                href="/content/videos#jOiU_C-ng6A"
                className="text-sm text-[#C9A66B] font-semibold hover:underline"
              >
                Information video — click here
              </Link>
              </div>
            </div>
            </div>
          <p className="text-center text-[#666] text-sm mt-10">
            Includes consultation, medication, and follow-up care. Ask us about available options.
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