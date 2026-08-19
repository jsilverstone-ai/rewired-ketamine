"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function KetamineChronicFatiguePage() {
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
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Rewired Ketamine" width={600} height={180} className="h-16 md:h-20 w-auto" priority />
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              2820 NE 214th St #1002, Aventura, FL 33180
            </a>
            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              info@rewiredketamine.com
            </a>
            <a href="tel:+13056766070" className="flex items-center gap-2 font-semibold hover:text-[#C9A66B] transition">
              (305) 676-6070
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            <Link href="/" className="hover:text-[#C9A66B] transition">Home</Link>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">Our Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">Treatments
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
            <Link href="/providers" className="hover:text-[#C9A66B] transition">Providers</Link>
            <div className="relative group">
              <button className="hover:text-[#C9A66B] transition flex items-center gap-1">Content
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
            <Link href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] text-sm font-bold px-6 py-2.5 rounded hover:bg-white transition">FREE CONSULTATION</Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1D36] border-t border-white/10">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link href="/" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/providers" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Providers</Link>
              <Link href="/location" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Location</Link>
              <Link href="/#contact" className="hover:text-[#C9A66B] transition" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <a href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] text-center font-bold px-6 py-3 rounded mt-2" onClick={() => setIsMenuOpen(false)}>FREE CONSULTATION</a>
            </nav>
          </div>
        )}
      </header>

      {/* ARTICLE */}
      <article id="main-content" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          
          <p className="text-sm text-[#C9A66B] font-semibold mb-3">Blog · August 2026</p>
          
          <h1 className="text-3xl md:text-5xl font-bold text-[#0B1D36] mb-6 leading-tight">
            Can Ketamine Help with Chronic Fatigue? What a New Study Suggests for Patients in South Florida
          </h1>

          <p className="text-lg text-[#555] leading-relaxed mb-8">
            Chronic fatigue can be exhausting in every sense of the word — physically, mentally, and emotionally. For many people in South Florida, the persistent tiredness doesn’t improve with rest, and traditional approaches sometimes fall short.
          </p>

          <p className="text-[#555] leading-relaxed mb-6">
            A recent study from Rutgers University has drawn attention to an interesting possibility: ketamine may help reduce symptoms of chronic fatigue in some individuals. While more research is still needed, the findings add to a growing conversation about the broader potential of ketamine therapy.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">What the Rutgers Study Suggests</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Researchers at Rutgers explored whether ketamine could influence symptoms associated with chronic fatigue. Early results suggest that ketamine’s effects on the brain and nervous system may offer relief for certain patients who have not found enough improvement through other options.
          </p>
          <p className="text-[#555] leading-relaxed mb-6">
            This kind of research is still developing, but it aligns with what many clinicians are already observing — that ketamine treatment can support people dealing with complex, treatment-resistant conditions.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Why This Matters for Patients in Aventura and Miami</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            At our locally owned ketamine clinic in Aventura, we regularly work with individuals seeking relief from depression, anxiety, PTSD, and related challenges. Some patients also experience profound fatigue as part of their overall picture.
          </p>
          <p className="text-[#555] leading-relaxed mb-6">
            Ketamine infusion therapy in Florida is most often discussed for mood-related conditions, yet emerging research continues to expand our understanding of how this treatment may support the nervous system more broadly.
          </p>
          <p className="text-[#555] leading-relaxed mb-6">
            If you have been searching for “ketamine near me,” “ketamine for depression Miami,” or “ketamine clinic Florida,” it’s worth knowing that care is available right here in Aventura — with fully guided sessions available for those who prefer additional support.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">A Thoughtful, Individualized Approach</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            There is no single standard response to ketamine. Every treatment plan is tailored. We carefully consider each person’s history, goals, and clinical picture before recommending a path forward.
          </p>
          <p className="text-[#555] leading-relaxed mb-6">
            For some patients exploring ketamine therapy for PTSD, depression, or persistent fatigue-related symptoms, the possibility of meaningful improvement is real — especially when previous treatments have not provided enough relief.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Local Care in South Florida</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Rewired Ketamine is a locally owned clinic serving Aventura, Miami, Fort Lauderdale, and the greater South Florida community. We offer fully guided sessions when desired, and we speak Spanish.
          </p>
          <p className="text-[#555] leading-relaxed mb-10">
            If you are looking for ketamine treatment in Florida and want to understand whether it may be appropriate for you, we invite you to start with a free consultation. There is no pressure — just a clear, compassionate conversation about your options.
          </p>

          <div className="bg-[#0B1D36] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to take the next step?</h3>
            <p className="text-white/80 mb-6">Book a free consultation at our locally owned Aventura clinic. ¡Hablamos Español!</p>
            <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
              Book Free Consultation
            </Link>
          </div>

        </div>
      </article>

      {/* FOOTER */}
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
                <li><Link href="/providers" className="hover:text-[#C9A66B] transition">Providers</Link></li>
                <li><Link href="/location" className="hover:text-[#C9A66B] transition">Location</Link></li>
                <li><Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p className="mb-4 max-w-4xl mx-auto">The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis, or treatment.</p>
            © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  );
}