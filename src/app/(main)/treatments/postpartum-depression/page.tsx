import Link from "next/link";

export default function PostpartumDepressionPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold">
        Skip to main content
      </a>

      {/* Top bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.png" alt="Rewired Ketamine" width={600} height={180} className="h-16 md:h-20 w-auto" />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              2820 NE 214th St #1002, Aventura, FL 33180
            </a>
            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@rewiredketamine.com
            </a>
            <a href="tel:+13056766070" className="flex items-center gap-2 font-semibold hover:text-[#C9A66B] transition">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (305) 676-6070
            </a>
          </div>
        </div>
      </div>

      {/* Sticky header */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/" className="hover:text-[#C9A66B] transition">Home</Link>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">All Services</Link>
                  <Link href="/services/ketamine-infusion" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamine Infusion</Link>
                  <Link href="/services/home-ketamine" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Home Ketamine</Link>
                  <Link href="/services/spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Spravato</Link>
                  <Link href="/services/ketamine-therapy-cost" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Cost</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Treatments
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 max-h-80 overflow-y-auto">
                  <Link href="/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">All Treatments</Link>
                  <Link href="/treatments/depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Depression</Link>
                  <Link href="/treatments/anxiety" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Anxiety</Link>
                  <Link href="/treatments/ptsd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">PTSD</Link>
<Link href="/treatments/burnout" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Burnout</Link>
                  <Link href="/treatments/postpartum-depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Postpartum Depression</Link>
                </div>
              </div>
            </div>
            <Link href="/providers" className="hover:text-[#C9A66B] transition">Providers</Link>
            <Link href="/location" className="hover:text-[#C9A66B] transition">Location</Link>
            <Link href="/faq" className="hover:text-[#C9A66B] transition">FAQ</Link>
            <Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link>
          </nav>
          <button className="lg:hidden p-2" aria-label="Open menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#b8955e] transition">
              Free Consultation
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
        <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Ketamine for Postpartum Depression in Aventura</h1>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
          Fully guided IV ketamine support for new parents in Miami, Fort Lauderdale, and South Florida. Transparent pricing published so you know the cost of a full course before you book.
        </p>
        <p className="text-[#C9A66B] font-semibold">¡Hablamos Español!</p>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-[#555] mb-6">
            Postpartum depression can make the early months of parenthood feel overwhelming, isolating, and exhausting. Traditional treatments such as SSRIs or therapy can take weeks or months to show benefit. For some new parents, that timeline feels too long during a critical bonding window.
          </p>
          <p className="text-lg text-[#555] mb-6">
            At Rewired Ketamine in Aventura, we offer medically supervised IV ketamine as one supportive option alongside existing care. Sessions take place in a private, monitored treatment room. A clinical team member is present throughout. Fully guided sessions are available.
          </p>
          <p className="text-lg text-[#555] mb-8">
            We do not claim ketamine is right for everyone. A free consultation and medical screening determine whether it is appropriate. Individual results vary.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">What a course actually costs</h2>
          <p className="text-[#555] mb-4">
            Unlike clinics that require a consultation just to learn pricing, Rewired publishes package rates so the total cost of a typical course is visible before booking.
          </p>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Mental Health Protocol (1-hour IV)</h3>
            <div className="space-y-2">
              <div className="flex justify-between"><span>Single Session</span><span className="font-semibold">$440</span></div>
              <div className="flex justify-between"><span>Package of 3</span><span className="font-semibold">$1,200</span></div>
              <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$2,300</span></div>
            </div>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Guided Sessions (1-hour IV + Guide)</h3>
            <div className="space-y-2">
              <div className="flex justify-between"><span>Single Session</span><span className="font-semibold">$590</span></div>
              <div className="flex justify-between"><span>Package of 3</span><span className="font-semibold">$1,500</span></div>
              <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$2,900</span></div>
            </div>
          </div>
          <p className="text-sm text-[#555] mb-8">
            Consultation required before treatment. Ask us about available discounts. Full details on our <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">ketamine therapy cost page</Link>.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">What is included</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#555] mb-8">
            <li>Continuous monitoring in a private treatment room</li>
            <li>Clinical team presence during the session</li>
            <li>Fully guided sessions available</li>
            <li>Integration support (included with guided options or available separately)</li>
            <li>Follow-up as part of the care plan</li>
          </ul>
          <p className="text-[#555] mb-8">
            Spravato (esketamine nasal spray) is also available for treatment-resistant depression when insurance criteria are met. It is administered on-site under REMS observation and is different from IV ketamine.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Local care in Aventura</h2>
          <p className="text-[#555] mb-6">
            Our clinic is located at 2820 NE 214th Street, Suite 1002, Aventura, FL 33180 — convenient for patients coming from Miami, North Miami, and Fort Lauderdale. Spanish-language support is available. We are a locally owned practice, not part of a multi-location corporate chain.
          </p>
          <p className="text-[#555]">
            Start with a free consultation or visit our <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">homepage</Link> to learn how care begins.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">Ready to take the next step?</h2>
        <p className="text-lg text-[#555] mb-6">Book a free consultation. No pressure — just honest answers and a clear path forward.</p>
        <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">
          Book Free Consultation
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1D36] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <img src="/logo.png" alt="Rewired Ketamine" className="h-12 mb-4" />
            <p className="text-white/70">2820 NE 214th Street, Suite 1002<br />Aventura, FL 33180</p>
            <p className="mt-2"><a href="tel:+13056766070" className="hover:text-[#C9A66B]">(305) 676-6070</a></p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/" className="hover:text-[#C9A66B]">Home</Link></li>
              <li><Link href="/services" className="hover:text-[#C9A66B]">Services</Link></li>
              <li><Link href="/services/ketamine-therapy-cost" className="hover:text-[#C9A66B]">Cost</Link></li>
              <li><Link href="/location" className="hover:text-[#C9A66B]">Location</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Treatments</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link href="/treatments/depression" className="hover:text-[#C9A66B]">Depression</Link></li>
              <li><Link href="/treatments/postpartum-depression" className="hover:text-[#C9A66B]">Postpartum Depression</Link></li>
              <li><Link href="/treatments/anxiety" className="hover:text-[#C9A66B]">Anxiety</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p className="text-white/70">info@rewiredketamine.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · All Rights Reserved
        </div>
      </footer>
    </main>
  );
}
