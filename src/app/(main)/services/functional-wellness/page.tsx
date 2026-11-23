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
            Functional Wellness
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Supporting the whole person alongside ketamine care.
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
        src="/services/functional-wellness-aventura.jpg"
        alt="Functional wellness and custom vitamin support at Rewired Ketamine in Aventura"
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
              Our functional wellness approach looks at the broader picture of your health — sleep, stress, nutrition, and lifestyle — to help create the strongest possible foundation for healing. These supports are designed to work alongside your ketamine treatment and integration process.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              When appropriate, we can also order custom vitamins to be included in your ketamine infusions, offering an additional layer of personalized support.
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