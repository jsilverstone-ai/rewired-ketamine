import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F1] text-[#2C2C2C]">
      {/* ===== HEADER / BRANDING ===== */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Rewired Ketamine logo"
              width={160}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[#0B1D36] font-medium">
            <Link href="/" className="hover:text-[#C9A66B] transition-colors">
              Home
            </Link>
            <Link href="#how-we-help" className="hover:text-[#C9A66B] transition-colors">
              How We Help
            </Link>
            <Link href="#experience" className="hover:text-[#C9A66B] transition-colors">
              The Experience
            </Link>
            <Link href="#contact" className="hover:text-[#C9A66B] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Phone */}
          <a
            href="tel:3056766070"
            className="hidden sm:inline-block text-[#0B1D36] font-semibold hover:text-[#C9A66B] transition-colors"
          >
            305-676-6070
          </a>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative px-6 py-20 md:py-28 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B1D36] mb-6 leading-tight">
            Start Feeling Better Today
          </h1>
          <p className="text-lg md:text-xl text-[#2C2C2C] mb-4 max-w-2xl mx-auto">
            Personalized ketamine therapy with real support every step of the way.
          </p>
          <p className="text-lg md:text-xl text-[#2C2C2C] mb-10 max-w-2xl mx-auto">
            Fully guided sessions + hands-on integration care in Aventura.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#0B1D36] text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#C9A66B] transition-colors focus:outline-none focus:ring-4 focus:ring-[#C9A66B] focus:ring-offset-2"
          >
            Book Free Consultation
          </a>
          <p className="mt-6 text-[#0B1D36] font-medium">
            Call 305-676-6070 · ¡Hablamos Español!
          </p>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-[#0B1D36] text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-center text-sm md:text-base">
          <span>★ Only local 5-star Google-reviewed ketamine clinic</span>
          <span>Fully guided sessions</span>
          <span>Hands-on integration support</span>
          <span>South Florida’s trusted team</span>
        </div>
      </section>

      {/* ===== HOW WE HELP ===== */}
      <section id="how-we-help" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-16">
            How We Help
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">Fully Guided Sessions</h3>
              <p>
                Every infusion is carefully supervised and guided by our clinical team so you feel safe and supported the entire time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">Hands-On Integration</h3>
              <p>
                Our integration team works with you after each session to help you process insights and create lasting change.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[#0B1D36] mb-4">Personalized Care</h3>
              <p>
                Treatment plans tailored to you — whether you’re seeking relief from depression, anxiety, PTSD, chronic pain, or other conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE EXPERIENCE ===== */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] mb-8">
            The Experience
          </h2>
          <p className="text-lg mb-6">
            Your comfort comes first.
          </p>
          <p className="text-lg mb-6">
            Every treatment space is thoughtfully designed so you can create the exact environment that helps you feel safe and at ease. Prefer soft natural light or complete darkness? Quiet stillness, gentle music, or a television? We offer every combination so the room truly becomes <em>your</em> personal space.
          </p>
          <p className="text-lg">
            Comfortable recliners, private rooms, and a caring team focused entirely on you.  
            We fully guide every session and stay by your side through integration — so the benefits continue long after you leave.
          </p>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="contact" className="py-20 px-6 bg-[#0B1D36] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to take the first step?
          </h2>
          <p className="text-lg mb-10">
            Book a free consultation and speak with our team. No pressure — just honest answers and a clear path forward.
          </p>
          <a
            href="tel:3056766070"
            className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white transition-colors focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0B1D36]"
          >
            Book Free Consultation
          </a>
          <p className="mt-8 text-lg">
            Phone: 305-676-6070<br />
            2820 NE 214th St #1002, Aventura, FL 33180
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0B1D36] text-white py-10 border-t border-[#C9A66B]/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Image
            src="/logo.png"
            alt="Rewired Ketamine logo"
            width={140}
            height={40}
            className="h-8 w-auto mx-auto mb-6 brightness-0 invert"
          />
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida
          </p>
        </div>
      </footer>
    </main>
  );
}