import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      {/* ===== TOP BAR ===== */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Logo */}
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

          {/* Contact Info with icons */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            
            {/* Address */}
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

            {/* Email */}
            <a
              href="mailto:info@rewiredketamine.com"
              className="flex items-center gap-2 hover:text-[#C9A66B] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@rewiredketamine.com
            </a>

            {/* Phone */}
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

          <div className="md:hidden text-sm">Menu</div>

          <div className="flex items-center gap-5">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/rewired_ketamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://www.youtube.com/@RewiredKetamine" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="YouTube">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/RewiredKetamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/jacob-silverstone-98414547/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* FREE CONSULTATION button */}
            <a
              href="#contact"
              className="bg-[#C9A66B] text-[#0B1D36] text-sm font-bold px-6 py-2.5 rounded hover:bg-white transition"
            >
              FREE CONSULTATION
            </a>
          </div>
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
            Offering fully guided ketamine therapy with real, hands-on support every step of the way
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
          <span>Offering fully guided sessions</span>
          <span>Hands-on integration support</span>
          <span>South Florida’s trusted team</span>
        </div>
      </section>
{/* ===== CLINIC PHOTO + GOOGLE REVIEWS ===== */}
<section className="py-20 px-6 bg-[#F8F5F0]">
  <div className="max-w-6xl mx-auto">
    
    {/* Clinic Image */}
    <div className="mb-16 rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/clinic.jpg"
        alt="Rewired Ketamine clinic in Aventura"
        width={1200}
        height={600}
        className="w-full h-auto object-cover"
        priority
      />
    </div>

    {/* Google Reviews Widget */}
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] mb-4">
        What Our Patients Say
      </h2>
      <p className="text-lg text-[#555]">
        Real reviews from real patients
      </p>
    </div>

    {/* Elfsight Google Reviews */}
    <div className="w-full">
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div className="elfsight-app-00d35db3-e7e4-417e-8a0b-dbc5664993a2" data-elfsight-app-lazy></div>
    </div>

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
              <h3 className="text-2xl font-semibold text-[#0B1D36] mb-4">Guided Sessions Available</h3>
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