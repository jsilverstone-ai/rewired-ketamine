"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomeKetaminePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* ===== TOP BAR ===== */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
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

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            <a
              href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#C9A66B] transition"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              2820 NE 214th St #1002, Aventura, FL 33180
            </a>
            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@rewiredketamine.com
            </a>
            <a href="tel:+13056766070" className="flex items-center gap-2 font-semibold hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (305) 676-6070
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVIGATION ===== */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/" className="hover:text-[#C9A66B] transition">Home</Link>
            <Link href="/services" className="hover:text-[#C9A66B] transition">Our Services</Link>
            <Link href="/#how-we-help" className="hover:text-[#C9A66B] transition">How We Help</Link>
            <Link href="/#experience" className="hover:text-[#C9A66B] transition">The Experience</Link>
            <Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div className="hidden md:flex items-center gap-5">
            <Link href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] text-sm font-bold px-6 py-2.5 rounded hover:bg-white transition">
              FREE CONSULTATION
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1D36] border-t border-white/10">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link href="/" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/services" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Our Services</Link>
              <Link href="/#how-we-help" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>How We Help</Link>
              <Link href="/#experience" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>The Experience</Link>
              <Link href="/#contact" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] text-center font-bold px-6 py-3 rounded mt-2" onClick={() => setIsMenuOpen(false)}>
                FREE CONSULTATION
              </Link>
            </nav>
          </div>
        )}
      </header>

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
  ¡Hablamos Español!
</p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Image Placeholder */}
          <div className="h-64 md:h-80 bg-[#e8e0d5] rounded-2xl flex items-center justify-center text-[#888] mb-12">
            Warm at-home / Miami lifestyle photo placeholder
          </div>

          <div className="prose prose-lg max-w-none text-[#444]">
            <p className="text-lg leading-relaxed mb-6">
              For those who prefer treatment at home, we offer a thoughtfully structured home ketamine program with clear clinical guidance and ongoing support. We provide different at-home modalities — including oral (RDTs), nasal, and rectal options — chosen to support improved bioavailability and comfort.
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

          <div className="grid md:grid-cols-3 gap-8">

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
<footer className="bg-[#081525] text-white pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      
      <div>
        <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Contact Us</h4>
        <ul className="space-y-3 text-white/80 text-sm">
          <li>Open: Monday - Friday</li>
          <li>9:00AM - 5:00PM</li>
          <li>
            <a href="tel:+13056766070" className="hover:text-[#C9A66B] transition">Phone: (305) 676-6070</a>
          </li>
          <li>
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition">
              2820 NE 214th St #1002<br />Aventura, FL 33180
            </a>
          </li>
          <li>
            <a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">info@rewiredketamine.com</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center text-center">
        <Image
          src="/logo.png"
          alt="Rewired Ketamine"
          width={200}
          height={60}
          className="h-14 w-auto mb-6"
        />
        
        <div className="flex gap-4 mb-6">
          <a href="https://www.instagram.com/rewired_ketamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Instagram">
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.youtube.com/@RewiredKetamine" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="YouTube">
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://www.facebook.com/RewiredKetamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Facebook">
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/jacob-silverstone-98414547/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="LinkedIn">
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>

        <a 
          href="https://www.legitscript.com/websites/?checker_keywords=rewiredketamine.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Image
            src="/legitscript.png"
            alt="LegitScript Certified"
            width={150}
            height={75}
            className="h-16 w-auto"
          />
        </a>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Quick Links</h4>
        <ul className="space-y-3 text-white/80 text-sm">
          <li><Link href="/" className="hover:text-[#C9A66B] transition">Home</Link></li>
          <li><Link href="/services" className="hover:text-[#C9A66B] transition">Our Services</Link></li>
          <li><Link href="/#how-we-help" className="hover:text-[#C9A66B] transition">How We Help</Link></li>
          <li><Link href="/#experience" className="hover:text-[#C9A66B] transition">The Experience</Link></li>
          <li><Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link></li>
          <li><a href="/#contact" className="hover:text-[#C9A66B] transition">Free Consultation</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
      <p className="mb-4 max-w-4xl mx-auto">
        The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis, or treatment. All content is for general information purposes only.
      </p>
      © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · All Rights Reserved
    </div>
  </div>
</footer>
</main>
  );
}