"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function IVKetamineVsSpravatoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold">
        Skip to main content
      </a>

      {/* TOP BAR */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col items-center gap-3 lg:flex-row lg:justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.png" alt="Rewired Ketamine" width={600} height={180} className="h-16 md:h-20 w-auto" priority />
            </Link>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36] text-center">
              <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition">
                2820 NE 214th St #1002, Aventura, FL 33180
              </a>
              <a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">info@rewiredketamine.com</a>
              <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B] transition">(305) 676-6070</a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
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
                  <Link href="/services/iv-ketamine-vs-spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">IV vs Spravato</Link>
<Link href="/services/ketamine-therapy-cost" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Cost</Link>
                  <Link href="/services/functional-wellness" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Functional Wellness</Link>
                  <Link href="/services/medical-management" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Medical Management</Link>
                  <Link href="/services/talk-therapy" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Talk Therapy</Link>
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
                  <Link href="/treatments/ocd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">OCD</Link>
                  <Link href="/treatments/chronic-pain" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Chronic Pain</Link>
                </div>
              </div>
            </div>
            <Link href="/providers" className="hover:text-[#C9A66B] transition">Providers</Link>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
                Content
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/content/blog" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Blog</Link>
                  <Link href="/content/videos" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Videos</Link>
                  <Link href="/content/ketamine-in-the-news" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamine in the News</Link>
                </div>
              </div>
            </div>
            <Link href="/location" className="hover:text-[#C9A66B] transition">Location</Link>
            <Link href="/faq" className="hover:text-[#C9A66B] transition">FAQ</Link>
            <Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>

          <div className="hidden md:flex items-center gap-5">
            <a href="https://www.instagram.com/rewired_ketamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Instagram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/@RewiredKetamine" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="YouTube">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.facebook.com/RewiredKetamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/jacob-silverstone-98414547/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <Link href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] text-sm font-bold px-6 py-2.5 rounded hover:bg-white transition">
              FREE CONSULTATION
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1D36] border-t border-white/10">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Home</Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Our Services</Link>
              <Link href="/services/ketamine-infusion" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Ketamine Infusion</Link>
              <Link href="/services/spravato" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Spravato</Link>
              <Link href="/services/iv-ketamine-vs-spravato" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">IV vs Spravato</Link>
              <Link href="/location" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Location</Link>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">FAQ</Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">IV Ketamine vs Spravato in Aventura and Miami</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
          A short clinical comparison of in-clinic IV ketamine and Spravato (esketamine) at Rewired Ketamine in Aventura. Serving Miami, Fort Lauderdale, and South Florida.
        </p>
        <p className="text-[#C9A66B] font-bold text-lg">¡Hablamos Español!</p>
      </section>

<section id="main-content" className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-[#0B1D36] mb-6">IV Ketamine vs Spravato in Aventura and Miami</h2>
    <p className="text-lg leading-relaxed mb-6">
      Rewired Ketamine offers both IV ketamine and Spravato (esketamine nasal spray) at our Aventura clinic. They are different treatments. This page explains the main differences so you can ask better questions and decide which conversation makes sense for you.
    </p>
    <p className="text-lg leading-relaxed mb-10">
      We do not claim one is better for everyone. The right option depends on your history, goals, insurance, and what kind of support you want during treatment.
    </p>

    <h3 className="text-2xl font-bold text-[#0B1D36] mb-6">Quick comparison</h3>
    <div className="overflow-x-auto mb-10">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-[#0B1D36] text-white">
          <tr>
            <th className="p-4 text-left"></th>
            <th className="p-4 text-left">IV Ketamine</th>
            <th className="p-4 text-left">Spravato (esketamine)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b"><td className="p-4 font-semibold">Route</td><td className="p-4">Intravenous infusion</td><td className="p-4">Nasal spray</td></tr>
          <tr className="border-b"><td className="p-4 font-semibold">Setting</td><td className="p-4">Private treatment room at our Aventura clinic</td><td className="p-4">Private treatment room at our Aventura clinic</td></tr>
          <tr className="border-b"><td className="p-4 font-semibold">Monitoring</td><td className="p-4">Continuous monitoring during the session</td><td className="p-4">Monitoring required under REMS</td></tr>
          <tr className="border-b"><td className="p-4 font-semibold">Insurance</td><td className="p-4">Typically cash-pay</td><td className="p-4">Often covered by insurance for treatment-resistant depression (prior authorization usually required)</td></tr>
          <tr className="border-b"><td className="p-4 font-semibold">Guidance</td><td className="p-4">Fully guided sessions available</td><td className="p-4">Administered under observation per REMS</td></tr>
          <tr><td className="p-4 font-semibold">Typical use</td><td className="p-4">Treatment-resistant depression, anxiety, PTSD, chronic pain, and related concerns</td><td className="p-4">FDA-approved for treatment-resistant depression (and certain other labeled uses)</td></tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-2xl font-bold text-[#0B1D36] mb-4">How IV ketamine works at Rewired</h3>
    <p className="leading-relaxed mb-6">
      IV ketamine is given as a controlled infusion in a private room. A clinical team member stays with you. Monitoring is continuous. Sessions are typically about an hour, with time afterward to settle before you leave with a driver.
    </p>
    <p className="leading-relaxed mb-6">
      Fully guided sessions are available. Pricing for mental-health IV starts at $440 per session and $2,300 for a six-session series. Guided options are listed separately so you can see the full cost. See the <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">cost page</Link> for details.
    </p>

    <h3 className="text-2xl font-bold text-[#0B1D36] mb-4">How Spravato works at Rewired</h3>
    <p className="leading-relaxed mb-6">
      Spravato is an FDA-approved nasal spray (esketamine). It is given in the office under observation. Rewired Ketamine is a REMS-certified clinic, which means we follow the required monitoring and reporting rules.
    </p>
    <p className="leading-relaxed mb-6">
      Most patients who qualify for Spravato use insurance. Prior authorization is usually required. The visit includes observation time after the dose.
    </p>

    <h3 className="text-2xl font-bold text-[#0B1D36] mb-4">Who each option may fit</h3>
    <p className="font-semibold mb-2">IV ketamine may be a better conversation if you:</p>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>Want a fully guided in-clinic experience</li>
      <li>Are looking at conditions beyond treatment-resistant depression (anxiety, PTSD, chronic pain, etc.)</li>
      <li>Prefer a cash-pay option with clear package pricing</li>
      <li>Want the option of longer or more supported sessions</li>
    </ul>
    <p className="font-semibold mb-2">Spravato may be a better conversation if you:</p>
    <ul className="list-disc pl-6 mb-6 space-y-1">
      <li>Have a diagnosis of treatment-resistant depression</li>
      <li>Want to use insurance</li>
      <li>Are comfortable with a nasal spray under REMS observation</li>
      <li>Prefer the structure of an FDA-approved product</li>
    </ul>
    <p className="mb-10">Many people start by asking about one and end up discussing both. That is normal.</p>

    <h3 className="text-2xl font-bold text-[#0B1D36] mb-4">What to ask when comparing clinics in Aventura</h3>
    <ul className="list-disc pl-6 mb-10 space-y-1">
      <li>Who stays with you during the session?</li>
      <li>What monitoring is used?</li>
      <li>Is the session fully guided?</li>
      <li>What happens after the infusion or Spravato dose?</li>
      <li>Is integration included or separate?</li>
      <li>What is the full cost of a typical course (IV) or the insurance process (Spravato)?</li>
      <li>If Spravato is discussed, is the clinic REMS-certified and will they handle prior authorization?</li>
    </ul>

    <div className="text-center">
      <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition">
        Book a Free Consultation
      </Link>
      <p className="mt-4 text-sm">Or call/text (305) 676-6070</p>
    </div>
  </div>
</section>

      <footer className="bg-[#081525] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Contact Us</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>Open: Monday - Friday</li>
                <li>9:00AM - 5:00PM</li>
                <li><a href="tel:+13056766070" className="hover:text-[#C9A66B] transition">Phone: (305) 676-6070</a></li>
                <li><a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition">2820 NE 214th St #1002<br />Aventura, FL 33180</a></li>
                <li><a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">info@rewiredketamine.com</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image src="/logo.png" alt="Rewired Ketamine" width={200} height={60} className="h-14 w-auto mb-6" />
              <a href="https://www.legitscript.com/websites/?checker_keywords=rewiredketamine.com" target="_blank" rel="noopener noreferrer">
                <Image src="/legitscript.png" alt="LegitScript Certified" width={150} height={75} className="h-16 w-auto" />
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-5 text-[#C9A66B]">Quick Links</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link href="/" className="hover:text-[#C9A66B] transition">Home</Link></li>
                <li><Link href="/services" className="hover:text-[#C9A66B] transition">Our Services</Link></li>
                <li><Link href="/services/iv-ketamine-vs-spravato" className="hover:text-[#C9A66B] transition">IV vs Spravato</Link></li>
                <li><Link href="/treatments" className="hover:text-[#C9A66B] transition">Treatments</Link></li>
                <li><Link href="/location" className="hover:text-[#C9A66B] transition">Location</Link></li>
                <li><Link href="/faq" className="hover:text-[#C9A66B] transition">FAQ</Link></li>
                <li><Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p className="mb-4 max-w-4xl mx-auto">The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis, or treatment. All content is for general information purposes only.</p>
            © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}