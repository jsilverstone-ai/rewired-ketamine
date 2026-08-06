import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      {/* ===== TOP BAR ===== */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Logo - larger and clear */}
          <Link href="/" className="flex-shrink-0">
   <Image
  src="/logo.png"
  alt="Rewired Ketamine"
  width={600}
  height={180}
  className="h-16 md:h-20 w-auto"
  priority
/>
          </Link>

          {/* Contact Info - cleaner layout */}
          {/* Contact Info with icons and working links */}
{/* Contact Info with icons and working links */}
<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
  
  {/* Address with pin icon */}
  <a
    href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-[#C9A66B] transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    2820 NE 214th St #1002, Aventura, FL 33180
  </a>

  {/* Email with envelope icon */}
  <a
    href="mailto:info@rewiredketamine.com"
    className="flex items-center gap-2 hover:text-[#C9A66B] transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    info@rewiredketamine.com
  </a>

  {/* Phone with phone icon */}
  <a
    href="tel:+13056766070"
    className="flex items-center gap-2 font-semibold hover:text-[#C9A66B] transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
    (305) 676-6070
  </a>
</div>
        </div>
      </div>

      {/* ===== MAIN NAVIGATION BAR ===== */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/" className="hover:text-[#C9A66B] transition">Home</Link>
            <Link href="#how-we-help" className="hover:text-[#C9A66B] transition">How We Help</Link>
            <Link href="#experience" className="hover:text-[#C9A66B] transition">The Experience</Link>
            <Link href="#contact" className="hover:text-[#C9A66B] transition">Contact</Link>
          </nav>

          {/* Mobile menu button placeholder */}
          <div className="md:hidden text-sm">Menu</div>

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
            Avialable fully guided ketamine therapy with real, hands-on support every step of the way
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
            width={400}
            height={120}
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