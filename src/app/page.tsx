import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#1a1a1a]">
      {/* ===== HEADER ===== */}
      <header className="bg-white/95 backdrop-blur-md border-b border-[#e5e0d8] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Rewired Ketamine"
              width={220}
              height={70}
              className="h-12 md:h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-[#0B1D36]">
            <Link href="#how-we-help" className="hover:text-[#C9A66B] transition">How We Help</Link>
            <Link href="#experience" className="hover:text-[#C9A66B] transition">The Experience</Link>
            <Link href="#contact" className="hover:text-[#C9A66B] transition">Contact</Link>
          </nav>

          <div className="flex items-center gap-6">
            <a href="tel:3056766070" className="hidden md:block text-[#0B1D36] font-semibold hover:text-[#C9A66B] transition">
              305-676-6070
            </a>
            <a
              href="#contact"
              className="bg-[#0B1D36] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#C9A66B] transition"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative pt-24 pb-28 md:pt-32 md:pb-36 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-[#C9A66B] font-medium tracking-widest uppercase text-sm mb-6">
            Aventura’s Premier Ketamine Clinic
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B1D36] leading-[1.1] mb-8">
            Start Feeling<br className="hidden md:block" /> Better Today
          </h1>
          <p className="text-xl md:text-2xl text-[#444] max-w-3xl mx-auto mb-4 leading-relaxed">
            Fully guided ketamine therapy with hands-on integration support
          </p>
          <p className="text-lg text-[#666] max-w-2xl mx-auto mb-12">
            The only local 5-star Google-reviewed clinic in South Florida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#0B1D36] text-white font-semibold px-10 py-5 rounded-full text-lg hover:bg-[#C9A66B] transition shadow-lg"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:3056766070"
              className="inline-flex items-center justify-center border-2 border-[#0B1D36] text-[#0B1D36] font-semibold px-10 py-5 rounded-full text-lg hover:bg-[#0B1D36] hover:text-white transition"
            >
              Call 305-676-6070
            </a>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-[#0B1D36] py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white text-sm md:text-base font-medium">
          <div>★ Only local 5-star clinic</div>
          <div>Fully guided sessions</div>
          <div>Hands-on integration</div>
          <div>South Florida trusted</div>
        </div>
      </section>

      {/* ===== HOW WE HELP ===== */}
      <section id="how-we-help" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D36] mb-6">How We Help</h2>
            <p className="text-xl text-[#555] max-w-2xl mx-auto">
              A complete, supportive approach designed around you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fully Guided Sessions",
                text: "Every infusion is carefully supervised and guided by our clinical team so you feel safe and supported the entire time."
              },
              {
                title: "Hands-On Integration",
                text: "Our integration team works with you after each session to help you process insights and create lasting change."
              },
              {
                title: "Personalized Care",
                text: "Treatment plans tailored to you — whether you’re seeking relief from depression, anxiety, PTSD, chronic pain, or other conditions."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-10 shadow-sm border border-[#eee] hover:shadow-md transition">
                <h3 className="text-2xl font-semibold text-[#0B1D36] mb-5">{item.title}</h3>
                <p className="text-[#555] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D36] mb-8">The Experience</h2>
          <p className="text-xl text-[#444] mb-8 leading-relaxed">
            Your comfort comes first.
          </p>
          <p className="text-lg text-[#555] mb-8 leading-relaxed">
            Every treatment space is thoughtfully designed so you can create the exact environment that helps you feel safe and at ease. Prefer soft natural light or complete darkness? Quiet stillness, gentle music, or a television? We offer every combination so the room truly becomes <span className="italic">your</span> personal space.
          </p>
          <p className="text-lg text-[#555] leading-relaxed">
            Comfortable recliners, private rooms, and a caring team focused entirely on you. We fully guide every session and stay by your side through integration — so the benefits continue long after you leave.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="contact" className="py-28 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to take the first step?</h2>
          <p className="text-xl text-white/80 mb-12">
            Book a free consultation. No pressure — just honest answers and a clear path forward.
          </p>
          <a
            href="tel:3056766070"
            className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-12 py-5 rounded-full text-lg hover:bg-white transition"
          >
            Book Free Consultation
          </a>
          <p className="mt-10 text-lg text-white/70">
            305-676-6070<br />
            2820 NE 214th St #1002, Aventura, FL 33180
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#081525] py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Image
            src="/logo.png"
            alt="Rewired Ketamine"
            width={180}
            height={55}
            className="h-10 w-auto mx-auto mb-8 brightness-0 invert"
          />
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}