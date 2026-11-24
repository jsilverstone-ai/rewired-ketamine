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
            Our Services
          </h1>
<p className="text-xl text-white/85 max-w-3xl mx-auto mb-6 leading-relaxed">
  Rewired Ketamine is a locally owned ketamine clinic in Aventura serving Miami, Fort Lauderdale, and South Florida. Patients looking for ketamine therapy Miami and ketamine infusion Miami options can start here: in-clinic IV sessions, at-home modalities, and fully guided sessions available. Care is individualized.
</p>
<p className="text-[#C9A66B] font-bold text-lg md:text-xl">
  <Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link>
</p>
        </div>
      </section>
            <section className="py-10 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mb-4">
            Ketamine infusion in Miami
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            IV ketamine infusions are done in the Aventura clinic. Patients come from Miami, North Miami, and Fort Lauderdale. Fully guided sessions are available. See the{" "}
            <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">
              homepage
            </Link>{" "}
            for how care starts.
          </p>
          <p className="mt-4">
  Looking for <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">ketamine infusion miami</Link>? Our Aventura clinic provides fully guided IV sessions for patients from Miami and North Miami.
</p>
        </div>
      </section>
{/* ===== VIDEO ===== */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-3xl mx-auto">
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
       src="https://www.youtube.com/embed/1eL6fOZefK4" 
        title="Rewired Ketamine Services"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <p className="text-center text-[#666] text-sm mt-4">
      Local Care Beats Corporate Clinics for Ketamine Therapy

    </p>
  </div>
</section>     
{/* Service Cards */}
<div className="max-w-6xl mx-auto">
  
  {/* Top row - 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Link href="/services/ketamine-infusion" className="group bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm hover:shadow-lg transition">
          <div className="h-48 overflow-hidden">
            <Image
              src="/services/ketamine-infusion-aventura.jpg"
              alt="Ketamine infusion session at Rewired Ketamine in Aventura, Florida"
              width={1200}
              height={800}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-3">Ketamine Infusion in Aventura</h3>
            <p className="text-[#555] leading-relaxed mb-4">IV ketamine therapy in a private, monitored setting. Fully guided sessions available.</p>
            <p className="text-[#C9A66B] font-semibold">ketamine infusion Miami</p>
          </div>
        </Link>

        <Link href="/services/spravato" className="group bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm hover:shadow-lg transition">
          <div className="h-48 overflow-hidden">
            <Image
              src="/services/spravato-aventura.jpg"
              alt="Spravato consult office at Rewired Ketamine in Aventura, Florida"
              width={1200}
              height={800}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-3">Spravato</h3>
            <p className="text-[#555] leading-relaxed mb-4">
              FDA-approved esketamine nasal spray for adults now available. REMS-certified clinic. Covered by most insurance plans.
            </p>
            <p className="text-[#C9A66B] font-semibold">Learn more</p>
          </div>
        </Link>

        <Link href="/services/home-ketamine" className="group bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm hover:shadow-lg transition">
          <div className="h-48 overflow-hidden">
            <Image
              src="/services/home-ketamine-therapy-miami.jpg"
              alt="At-home ketamine treatment options from Rewired Ketamine in Aventura"
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-3">At-Home Ketamine Treatment in Florida</h3>
            <p className="text-[#555] leading-relaxed mb-4">Oral, nasal, and rectal options with clinical guidance — often more affordable than many Spravato copays.</p>
            <p className="text-[#C9A66B] font-semibold">at home ketamine treatment</p>
          </div>
        </Link>

        <Link href="/services/functional-wellness" className="group bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm hover:shadow-lg transition">
          <div className="h-48 overflow-hidden">
            <Image
              src="/services/functional-wellness-aventura.jpg"
              alt="Functional wellness support at Rewired Ketamine in Aventura"
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-3">Functional Wellness Support</h3>
            <p className="text-[#555] leading-relaxed mb-4">Custom vitamins can be included with infusions when appropriate.</p>
            <p className="text-[#C9A66B] font-semibold">Learn more</p>
          </div>
        </Link>

        <Link href="/services/medical-management" className="group bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm hover:shadow-lg transition">
          <div className="h-48 overflow-hidden">
            <Image
              src="/services/medical-management-south-florida.jpg"
              alt="Medical management at Rewired Ketamine in Aventura"
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-3">Medical Management</h3>
            <p className="text-[#555] leading-relaxed mb-4">Our clinical team can review older diagnoses and current medications.</p>
            <p className="text-[#C9A66B] font-semibold">Learn more</p>
          </div>
        </Link>

        <Link href="/services/talk-therapy" className="group bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm hover:shadow-lg transition">
          <div className="h-48 overflow-hidden">
            <Image
              src="/services/talk-therapy-aventura-miami.jpg"
              alt="Talk therapy and integration support at Rewired Ketamine in Aventura"
              width={600}
              height={400}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-semibold text-[#0B1D36] mb-3">Talk Therapy & Integration</h3>
            <p className="text-[#555] leading-relaxed mb-4">In-house or referred specialists who understand psychedelics and neuroplasticity.</p>
            <p className="text-[#C9A66B] font-semibold">talk therapy</p>
          </div>
        </Link>
      </div>
    </div>
{/* Local service context */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-3xl mx-auto text-[#444] space-y-5 text-lg leading-relaxed">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B1D36] mb-4">
              Ketamine infusion in Miami
            </h2>
    <p>
      If you are searching for a{" "}
      <Link href="/" className="text-[#C9A66B] hover:underline">
        ketamine clinic Miami
      </Link>{" "}
      patients can reach in Aventura, this page is the starting point. In-clinic{" "}
      <Link href="/services/ketamine-infusion" className="text-[#C9A66B] hover:underline">
        ketamine infusion Miami
      </Link>{" "}
      care,{" "}
      <Link href="/services/home-ketamine" className="text-[#C9A66B] hover:underline">
        at home ketamine treatment
      </Link>
      , and supportive services are all available after evaluation.
    </p>
    <p>
      Many people come in after traditional care has not been enough, including those exploring{" "}
      <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">
        ketamine for depression Miami
      </Link>
      . Fully guided sessions are available. ¡Hablamos Español!
    </p>
                <p className="text-lg text-[#444] leading-relaxed">
              <Link
                href="/content/blog/ketamine-infusion-in-miami-aventura-clinic"
                className="text-[#C9A66B] font-semibold hover:underline"
              >
                What ketamine infusion looks like at our Aventura clinic →
              </Link>
            </p>
  </div>
</section>

{/* FAQ */}
<section className="py-16 px-6 bg-[#F6F1E8]">
  <div className="max-w-3xl mx-auto">
    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-10">
      Frequently Asked Questions
    </h2>

    <div className="faq-list space-y-0">
      <div className="py-6 border-b border-[#e6e0d6]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Is there a ketamine clinic in Miami?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. Rewired Ketamine is located in Aventura and serves Miami, Fort Lauderdale, and South Florida.
        </p>
      </div>

      <div className="py-6 border-b border-[#e6e0d6]">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Do you offer ketamine infusion in Miami and Aventura?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. IV ketamine infusion is offered at our Aventura clinic. Fully guided sessions are available.
        </p>
      </div>

      <div className="py-6">
        <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">
          Do you offer at-home ketamine in Florida?
        </h3>
        <p className="text-[#555] leading-relaxed">
          Yes. After evaluation, home options may include oral, nasal, and rectal modalities with clinical guidance.
        </p>
      </div>
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