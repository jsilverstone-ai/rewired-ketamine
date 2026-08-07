"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TreatmentsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

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

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/services" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">All Services</Link>
                  <Link href="/services/ketamine-infusion" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamine Infusion</Link>
                  <Link href="/services/home-ketamine" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Home Ketamine</Link>
                  <Link href="/services/functional-wellness" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Functional Wellness</Link>
                  <Link href="/services/medical-management" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Medical Management</Link>
                  <Link href="/services/talk-therapy" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Talk Therapy</Link>
                </div>
              </div>
            </div>

            {/* Treatments Dropdown */}
            <div className="relative group">
              <button className="text-[#C9A66B] transition flex items-center gap-1">
                Treatments
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-64 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 max-h-80 overflow-y-auto">
                  <Link href="/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">All Treatments</Link>
                  <Link href="/treatments/depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Depression</Link>
                  <Link href="/treatments/anxiety" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Anxiety</Link>
                  <Link href="/treatments/ptsd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">PTSD</Link>
                  <Link href="/treatments/mental-fogginess" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Mental Fogginess</Link>
                  <Link href="/treatments/motivation" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Motivation</Link>
                  <Link href="/treatments/eating-disorder" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Eating Disorder</Link>
                  <Link href="/treatments/postpartum-depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Postpartum Depression</Link>
                  <Link href="/treatments/ocd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">OCD</Link>
                  <Link href="/treatments/chronic-pain" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Chronic Pain</Link>
                  <Link href="/treatments/tension-headaches" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Tension Headaches</Link>
                  <Link href="/treatments/palliative-compassion-care" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Palliative & Compassion Care</Link>
                </div>
              </div>
            </div>

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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1D36] border-t border-white/10">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link href="/" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Home</Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full hover:text-[#C9A66B] transition"
                >
                  <span>Our Services</span>
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-3 flex flex-col space-y-3 text-sm">
                    <Link href="/services" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>All Services</Link>
                    <Link href="/services/ketamine-infusion" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Ketamine Infusion</Link>
                    <Link href="/services/home-ketamine" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Home Ketamine</Link>
                    <Link href="/services/functional-wellness" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Functional Wellness</Link>
                    <Link href="/services/medical-management" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Medical Management</Link>
                    <Link href="/services/talk-therapy" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Talk Therapy</Link>
                  </div>
                )}
              </div>

              {/* Treatments Accordion */}
              <div>
                <button
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                  className="flex items-center justify-between w-full text-[#C9A66B]"
                >
                  <span>Treatments</span>
                  <svg className={`w-4 h-4 transition-transform ${isTreatmentsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isTreatmentsOpen && (
                  <div className="pl-4 mt-3 flex flex-col space-y-3 text-sm">
                    <Link href="/treatments" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>All Treatments</Link>
                    <Link href="/treatments/depression" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Depression</Link>
                    <Link href="/treatments/anxiety" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Anxiety</Link>
                    <Link href="/treatments/ptsd" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>PTSD</Link>
                    <Link href="/treatments/mental-fogginess" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Mental Fogginess</Link>
                    <Link href="/treatments/motivation" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Motivation</Link>
                    <Link href="/treatments/eating-disorder" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Eating Disorder</Link>
                    <Link href="/treatments/postpartum-depression" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Postpartum Depression</Link>
                    <Link href="/treatments/ocd" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>OCD</Link>
                    <Link href="/treatments/chronic-pain" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Chronic Pain</Link>
                    <Link href="/treatments/tension-headaches" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Tension Headaches</Link>
                    <Link href="/treatments/palliative-compassion-care" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Palliative & Compassion Care</Link>
                  </div>
                )}
              </div>

              <Link href="/#contact" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>

              <a href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] text-center font-bold px-6 py-3 rounded mt-2" onClick={() => setIsMenuOpen(false)}>
                FREE CONSULTATION
              </a>
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
            Treatments
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Fully guided ketamine support for a range of mental health and pain-related concerns — with care that prioritizes safety, compassion, and lasting change.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">
            ¡Hablamos Español!
          </p>
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/El4sovixl6Y"
              title="Rewired Ketamine Treatments"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===== COMPARISON CHART ===== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-10">
            How Ketamine Compares
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Standard */}
            <div className="bg-white rounded-2xl border border-[#eee] overflow-hidden shadow-sm">
              <div className="bg-[#6b7280] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Standard Antidepressants</h3>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <p className="text-sm text-[#666] mb-1">Typical Response Rate</p>
                  <p className="text-2xl font-bold text-[#0B1D36]">30% – 60%</p>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">Longer-Term Benefit</p>
                  <p className="text-2xl font-bold text-[#0B1D36]">5% – 15%</p>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">Time to Noticeable Effect</p>
                  <p className="text-lg font-semibold text-[#0B1D36]">Often 4–8 weeks</p>
                </div>
              </div>
            </div>

            {/* Ketamine */}
            <div className="bg-white rounded-2xl border-2 border-[#C9A66B] overflow-hidden shadow-sm">
              <div className="bg-[#0B1D36] text-white text-center py-4">
                <h3 className="text-xl font-semibold">Ketamine Therapy</h3>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <p className="text-sm text-[#666] mb-1">Typical Response Rate</p>
                  <p className="text-2xl font-bold text-[#C9A66B]">70% – 90%</p>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">Longer-Term Benefit</p>
                  <p className="text-2xl font-bold text-[#C9A66B]">60% – 80%</p>
                </div>
                <div>
                  <p className="text-sm text-[#666] mb-1">Time to Noticeable Effect</p>
                  <p className="text-lg font-semibold text-[#0B1D36]">Often hours to days</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-[#666] mt-8 max-w-2xl mx-auto">
            Many people explore ketamine when traditional approaches have not brought enough relief. Individual results vary, and care is always personalized.
          </p>
        </div>
      </section>

      {/* ===== CONDITIONS GRID ===== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-12">
            Conditions We Support
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Depression", href: "/treatments/depression", desc: "Support for mood, energy, and presence when traditional approaches haven’t been enough." },
              { title: "Anxiety", href: "/treatments/anxiety", desc: "Help quieting racing thoughts and tension in a calm, guided setting." },
              { title: "PTSD", href: "/treatments/ptsd", desc: "Careful support for those navigating trauma and a nervous system on high alert." },
              { title: "Mental Fogginess", href: "/treatments/mental-fogginess", desc: "Support for clearer thinking, focus, and cognitive ease." },
              { title: "Motivation", href: "/treatments/motivation", desc: "Helping restore a sense of possibility and forward movement." },
              { title: "Eating Disorder", href: "/treatments/eating-disorder", desc: "Sensitive, collaborative support as part of a broader care plan." },
              { title: "Postpartum Depression", href: "/treatments/postpartum-depression", desc: "Compassionate care that may support earlier bonding during a critical window." },
              { title: "OCD", href: "/treatments/ocd", desc: "Support for greater mental flexibility and interrupting rigid thought cycles." },
              { title: "Chronic Pain", href: "/treatments/chronic-pain", desc: "Whole-person support for pain that affects mood, sleep, and quality of life." },
              { title: "Tension Headaches", href: "/treatments/tension-headaches", desc: "Guided care for persistent tension-related head pain." },
              { title: "Palliative & Compassion Care", href: "/treatments/palliative-compassion-care", desc: "Comfort-focused support centered on dignity and quality of life." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-[#F8F5F0] rounded-2xl p-6 border border-[#eee] hover:border-[#C9A66B] transition flex flex-col"
              >
                <h3 className="text-xl font-semibold text-[#0B1D36] mb-3">{item.title}</h3>
                <p className="text-[#555] text-sm leading-relaxed flex-grow mb-4">{item.desc}</p>
                <span className="text-[#C9A66B] font-medium text-sm">Learn more →</span>
              </Link>
            ))}
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
      <footer className="bg-[#081525] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Contact Us</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>Open: Monday - Friday</li>
                <li>9:00AM - 5:00PM</li>
                <li><a href="tel:+13056766070" className="hover:text-[#C9A66B] transition">Phone: (305) 676-6070</a></li>
                <li>
                  <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition">
                    2820 NE 214th St #1002<br />Aventura, FL 33180
                  </a>
                </li>
                <li><a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">info@rewiredketamine.com</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src="/logo.png" alt="Rewired Ketamine" width={200} height={60} className="h-14 w-auto mb-6" />
              <a href="https://www.legitscript.com/websites/?checker_keywords=rewiredketamine.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                <Image src="/legitscript.png" alt="LegitScript Certified" width={150} height={75} className="h-16 w-auto" />
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Quick Links</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link href="/" className="hover:text-[#C9A66B] transition">Home</Link></li>
                <li><Link href="/services" className="hover:text-[#C9A66B] transition">Our Services</Link></li>
                <li><Link href="/treatments" className="hover:text-[#C9A66B] transition">Treatments</Link></li>
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