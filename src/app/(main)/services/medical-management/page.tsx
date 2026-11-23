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
            Medical Management
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Thoughtful clinical oversight throughout your care.
          </p>
<p className="text-[#C9A66B] font-bold text-lg md:text-xl">
  <Link href="/es" className="hover:underline">¡Hablamos Español!</Link>
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
        src="/services/medical-management-south-florida.jpg"
        alt="Personalized medical management consultation at our Aventura ketamine clinic"
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
              Our medical team provides careful evaluation and ongoing management so your treatment plan remains safe, appropriate, and personalized. Our clinical director can review previous diagnoses and help ensure your overall medical management is aligned and current.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We stay closely involved to monitor progress and adjust support as needed, always with your long-term well-being in mind.
            </p>
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