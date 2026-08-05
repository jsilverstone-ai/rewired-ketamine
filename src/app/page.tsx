import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      {/* ===== TOP BAR (Logo + Contact Info) ===== */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo - larger */}
          <Link href="/">
<Image
  src="/logo.png"
  alt="Rewired Ketamine"
  width={8000}
  height={2400}
  className="h-[2400px] w-auto"
  priority
/>
          </Link>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#0B1D36]">
            <div className="flex items-center gap-2">
              <span className="font-medium">2820 NE 214th St #1002</span>
              <span className="text-gray-400">|</span>
              <span>Aventura, FL 33180</span>
            </div>
            <a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">
              info@rewiredketamine.com
            </a>
            <a href="tel:3056766070" className="font-semibold hover:text-[#C9A66B] transition">
              (305) 676-6070
            </a>
          </div>
        </div>
      </div>

      {/* ===== NAVIGATION BAR ===== */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/" className="hover:text-[#C9A66B] transition">Home</Link>
            <Link href="#how-we-help" className="hover:text-[#C9A66B] transition">How We Help</Link>
            <Link href="#experience" className="hover:text-[#C9A66B] transition">The Experience</Link>
            <Link href="#contact" className="hover:text-[#C9A66B] transition">Contact</Link>
          </nav>

          <a
            href="#contact"
            className="bg-[#C9A66B] text-[#0B1D36] text-sm font-bold px-6 py-2.5 rounded hover:bg-white transition"
          >
            FREE CONSULTATION
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="pt-20 pb-24 md:pt-28 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-5">
            Aventura • South Florida
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0B1D36] leading-[1.1] mb-8">
            Start Feeling Better Today
          </h1>
          <p className="text-xl md:text-2xl text-[#444] max-w-3xl mx-auto mb-6">
            Fully guided ketamine therapy with real, hands-on support every step of the way
          </p>
          <p className="text-lg text-[#666] mb-12">
            The only local 5-star Google-reviewed ketamine clinic
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#0B1D36] text-white font-semibold px-10 py-5 rounded-full text-lg hover:bg-[#C9A66B] transition"
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
      <section className="bg-[#0B1D36] py-7">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-white text-sm md:text-base font-medium text-center">
          <span>★ Only local 5-star Google-reviewed clinic</span>
          <span>Fully guided sessions</span>
          <span>Hands-on integration support</span>
          <span>South Florida’s trusted team</span>
        </div>
      </section>

      {/* ===== HOW WE HELP ===== */}
      <section id="how-we-help" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D36] mb-5">How We Help</h2>
            <p className="text-xl text-[#555]">A complete, supportive approach designed around you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#eee]">
              <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Fully Guided Sessions</h3>
              <p className="text-[#555] leading-relaxed">
                Every infusion is carefully supervised and guided by our clinical team so you feel safe and supported the entire time.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#eee]">
              <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Hands-On Integration</h3>
              <p className="text-[#555] leading-relaxed">
                Our integration team works with you after each session to help you process insights and create lasting change.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-[#eee]">
              <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Personalized Care</h3>
              <p className="text-[#555] leading-relaxed">
                Treatment plans tailored to you — whether you’re seeking relief from depression, anxiety, PTSD, chronic pain, or other conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1D36] mb-8">The Experience</h2>
          <p className="text-xl text-[#444] mb-8">Your comfort comes first.</p>
          <p className="text-lg text-[#555] mb-6 leading-relaxed">
            Every treatment space is thoughtfully designed so you can create the exact environment that helps you feel safe and at ease. Prefer soft natural light or complete darkness? Quiet stillness, gentle music, or a television? We offer every combination so the room truly becomes <em>your</em> personal space.
          </p>
          <p className="text-lg text-[#555] leading-relaxed">
            Comfortable recliners, private rooms, and a caring team focused entirely on you. We fully guide every session and stay by your side through integration — so the benefits continue long after you leave.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="contact" className="py-28 px-6 bg-[#0B1D36] text-white text-center">
        <div className="max-w-3xl mx-auto">
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
      <footer className="bg-[#081525] py-14 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <Image
            src="/logo.png"
            alt="Rewired Ketamine"
            width={1263}
            height={395}
            className="h-12 w-auto mx-auto mb-8"
          />
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida
          </p>
        </div>
      </footer>
    </main>
  );
}