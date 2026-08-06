"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TalkTherapyPage() {
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
            Talk Therapy
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Integration-focused therapy to help insights take root.
          </p>
          <div>
            <span className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold text-lg px-6 py-3 rounded-full shadow-md">
              ¡Hablamos Español!
            </span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Image Placeholder */}
          <div className="h-64 md:h-80 bg-[#e8e0d5] rounded-2xl flex items-center justify-center text-[#888] mb-12">
            Warm therapy / conversation photo placeholder
          </div>

          <div className="prose prose-lg max-w-none text-[#444]">
            <p className="text-lg leading-relaxed mb-6">
              Talk therapy is an essential part of the healing process. We offer supportive, integration-focused conversations that help you process experiences from your sessions and turn insights into lasting change.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              You can work with our in-house therapists or be connected with carefully selected specialists who understand psychedelics and neuroplasticity. This ensures your therapeutic support is aligned with the unique nature of this work.
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
      <footer className="bg-[#081525] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-white/60 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida</p>
          <p>The information on this site is for general information purposes only.</p>
        </div>
      </footer>
    </main>
  );
}