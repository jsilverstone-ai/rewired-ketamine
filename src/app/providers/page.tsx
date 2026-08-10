"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProvidersPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

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
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              2820 NE 214th St #1002, Aventura, FL 33180
            </a>
            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@rewiredketamine.com
            </a>
            <a href="tel:+13056766070" className="flex items-center gap-2 font-semibold hover:text-[#C9A66B] transition">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              (305) 676-6070
            </a>
          </div>
        </div>
      </div>



      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Providers</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            A dedicated clinical team focused on safety, partnership, and thoughtful care.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">¡Hablamos Español!</p>
        </div>
      </section>

      {/* PROVIDERS GRID */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Top row – larger cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            
            {/* Kelsey Vivatson – Clinical Director */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
              <div className="h-72 bg-[#e8e0d5] flex items-center justify-center text-[#888]">
                Photo placeholder
              </div>
              <div className="p-8">
                <p className="text-[#C9A66B] font-semibold text-sm tracking-wide uppercase mb-1">Clinical Director</p>
                <h2 className="text-2xl font-bold text-[#0B1D36] mb-3">Kelsey Vivatson, PMHNP-BC, APRN</h2>
                <p className="text-[#555] leading-relaxed">
                  Board-certified Psychiatric Mental Health Nurse Practitioner licensed in Florida. Kelsey Vivatson integrates medication management, psychotherapy, and collaborative care across the lifespan. She brings experience in diagnostic assessment, evidence-based prescribing, and personalized treatment planning for mood, anxiety, and related concerns.
                </p>
              </div>
            </div>

            {/* Jacob Silverstone, DPM – Medical Director */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
              <div className="h-72 bg-[#e8e0d5] flex items-center justify-center text-[#888]">
                Photo placeholder
              </div>
              <div className="p-8">
                <p className="text-[#C9A66B] font-semibold text-sm tracking-wide uppercase mb-1">Medical Director</p>
                <h2 className="text-2xl font-bold text-[#0B1D36] mb-3">Jacob Silverstone</h2>
                <p className="text-[#555] leading-relaxed mb-4">
                  Founder of Rewired Ketamine with extensive training and expertise in ketamine therapy and pain management. His focus is collaborating with therapists and mental health providers to help patients reduce suffering, support neuroplasticity, and regain a greater sense of control over their lives.
                </p>
                <p className="text-[#555] leading-relaxed mb-3">
                  Author of <em>Chronically Misunderstood</em> and <em>Stuck in Reverse: Rewiring Your ADHD Brain</em>.
                </p>
                <a 
                  href="https://a.co/d/0753tyCg" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block text-sm font-semibold text-[#0B1D36] bg-[#C9A66B] px-5 py-2.5 rounded hover:bg-[#0B1D36] hover:text-white transition"
                >
                  Available on Amazon →
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row – equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Shlomo Slatus, RCSWI */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
              <div className="h-56 bg-[#e8e0d5] flex items-center justify-center text-[#888]">
                Photo placeholder
              </div>
              <div className="p-7">
                <h2 className="text-xl font-bold text-[#0B1D36] mb-2">Shlomo Slatus, RCSWI</h2>
                <p className="text-[#555] leading-relaxed text-[15px]">
                  Registered Clinical Social Worker with an MSW from Yeshiva University (valedictorian) and specialty certification in Trauma-Informed Practice. Shlomo Slatus creates a supportive, nonjudgmental space and works with anxiety, depression, addiction, relationship challenges, and personal growth.
                </p>
              </div>
            </div>

            {/* Sorelle Silverstone */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#eee]">
              <div className="h-56 bg-[#e8e0d5] flex items-center justify-center text-[#888]">
                Photo placeholder
              </div>
              <div className="p-7">
                <h2 className="text-xl font-bold text-[#0B1D36] mb-2">Sorelle Silverstone</h2>
                <p className="text-[#555] leading-relaxed text-[15px]">
                  Life coach and experienced trip sitter who integrates business acumen, emotional intelligence, and holistic wellness. As a mother of five, Sorelle Silverstone draws on real-life insight to support leadership, mindfulness, goal-setting, resilience, and work-life balance.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation. No pressure — just honest answers and a clear path forward.</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
        </div>
      </section>

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
                <li><a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition">2820 NE 214th St #1002<br />Aventura, FL 33180</a></li>
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
                <li><Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link></li>
                <li><a href="/#contact" className="hover:text-[#C9A66B] transition">Free Consultation</a></li>
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