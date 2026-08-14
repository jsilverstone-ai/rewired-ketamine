"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProvidersPage() {
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

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>
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

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Clinical Team</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-6">
            Experienced providers dedicated to thoughtful, medically supervised care at our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">¡Hablamos Español!</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#0B1D36] font-medium">
            Medically supervised care • Locally owned in Aventura • Fully guided sessions available • LegitScript certified
          </p>
        </div>
      </section>

{/* PROVIDERS */}
<section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Top two */}
    <div className="grid md:grid-cols-2 gap-10 mb-16">
      
      {/* Kelsey Vivatson, PMHNP-BC, APRN */}
      <div className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src="/providers/kelsey-vivatson.jpg"
            alt="Kelsey Vivatson, PMHNP-BC, APRN - Clinical Director at Rewired Ketamine in Aventura"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Clinical Director</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-1">Kelsey Vivatson, PMHNP-BC, APRN</h2>
          <p className="text-[#666] text-sm mb-4">Board-Certified Psychiatric Mental Health Nurse Practitioner</p>
          <p className="text-[#555] leading-relaxed mb-4">
            Kelsey Vivatson, PMHNP-BC, APRN is a board-certified Psychiatric Mental Health Nurse Practitioner licensed in Florida and North Dakota. She serves as Clinical Director at Rewired Ketamine in Aventura and focuses on thoughtful, individualized care that combines medication management, supportive therapy, and clear collaboration with patients and families.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            Her approach blends diagnostic assessment, evidence-based prescribing, and personalized treatment planning to support individuals across the lifespan.
          </p>
          <div className="border-t border-gray-100 pt-4 mt-4">
            <p className="text-sm text-[#666]">
              <span className="font-semibold text-[#0B1D36]">Education & Credentials:</span> MSN in Psychiatric Mental Health (Walden University) • BSN (University of Mary) • ANCC Board-Certified PMHNP • Licensed in Florida & North Dakota
            </p>
          </div>
        </div>
      </div>

      {/* Jacob Silverstone, DPM */}
      <div className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src="/providers/jacob-silverstone.jpg"
            alt="Jacob Silverstone, DPM - Medical Director at Rewired Ketamine in Aventura"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Medical Director</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mb-1">Jacob Silverstone, DPM</h2>
          <p className="text-[#666] text-sm mb-4">Medical Director</p>
          <p className="text-[#555] leading-relaxed mb-4">
            Jacob Silverstone, DPM, serves as Medical Director at Rewired Ketamine. He brings clinical insight and a deep interest in mental wellness, neuroplasticity, and supportive care approaches. He is also the author of <em>Chronically Misunderstood</em> and <em>Stuck in Reverse: Rewiring Your ADHD Brain</em>.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            His work focuses on helping individuals better understand their mental health journey and explore options when traditional approaches have not provided enough relief.
          </p>
          <a 
            href="https://a.co/d/0753tyCg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C9A66B] font-semibold hover:underline"
          >
            View book on Amazon →
          </a>
        </div>
      </div>
    </div>

    {/* Bottom two */}
    <div className="grid md:grid-cols-2 gap-10">
      
      {/* Shlomo Slatus,  RCSWI */}
      <div className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src="/providers/shlomo-slatus.jpg"
            alt="Shlomo Slatus, RCSWI - Clinical Team at Rewired Ketamine in Aventura"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Clinical Team</p>
          <h2 className="text-xl font-bold text-[#0B1D36] mb-1">Shlomo Slat us, RCSWI</h2>
          <p className="text-[#666] text-sm mb-4">Registered Clinical Social Worker Intern</p>
          <p className="text-[#555] leading-relaxed mb-4">
            Shlomo Slatus, RCSWI is a Registered Clinical Social Worker Intern with a Master of Social Work from Yeshiva University’s Wurzweiler School of Social Work. He graduated as valedictorian of his MSW program with a specialty certification in Trauma-Informed Practice and was inducted into the Phi Alpha Honor Society for academic excellence.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            Shlomo believes that expressing thoughts, feelings, and experiences in a safe and supportive environment can serve as a powerful catalyst for change. He is committed to establishing a genuine therapeutic rapport that fosters a confidential space where individuals can communicate openly and honestly.
          </p>
          <div className="border-t border-gray-100 pt-4 mt-4">
            <p className="text-sm text-[#666] mb-2">
              <span className="font-semibold text-[#0B1D36]">Areas of Focus:</span>
            </p>
            <ul className="text-sm text-[#555] space-y-1 list-disc list-inside">
              <li>Addiction and substance misuse</li>
              <li>Anxiety and panic disorders</li>
              <li>Depression</li>
              <li>Relationship challenges</li>
              <li>Personal growth and self-esteem</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sorelle Silverstone */}
      <div className="bg-white rounded-2xl overflow-hidden border border-[#eee] shadow-sm">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src="/providers/sorelle-silverstone.jpg"
            alt="Sorelle Silverstone - Life Coach & Integration Support at Rewired Ketamine in Aventura"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8">
          <p className="text-[#C9A66B] font-semibold text-sm uppercase tracking-wide mb-1">Patient Experience</p>
          <h2 className="text-xl font-bold text-[#0B1D36] mb-1">Sorelle Silverstone</h2>
          <p className="text-[#666] text-sm mb-4">Life Coach & Integration Support</p>
          <p className="text-[#555] leading-relaxed mb-4">
            Sorelle Silverstone is a life coach who integrates business experience, emotional intelligence, and holistic wellness to support clients in personal and professional growth. As a mother of five, she draws from real-life insight to help individuals navigate challenges such as work-life balance, resilience, and meaningful goal-setting.
          </p>
          <p className="text-[#555] leading-relaxed mb-4">
            Her approach combines strategic planning experience with empathetic coaching, mindfulness, and practical tools that support authentic self-alignment and lasting personal development.
          </p>
          <div className="border-t border-gray-100 pt-4 mt-4">
            <p className="text-sm text-[#666]">
              <span className="font-semibold text-[#0B1D36]">Education:</span> Bachelor of Science in Business Organization, Nyack University
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CLINICAL STANDARDS */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mb-6">Our Clinical Standards</h2>
    <div className="grid sm:grid-cols-3 gap-8 text-left">
      <div>
        <h3 className="font-semibold text-[#0B1D36] mb-2">Medically Supervised</h3>
        <p className="text-[#555] text-sm leading-relaxed">Every session takes place under professional monitoring in a calm, private setting.</p>
      </div>
      <div>
        <h3 className="font-semibold text-[#0B1D36] mb-2">Fully Guided Options</h3>
        <p className="text-[#555] text-sm leading-relaxed">Fully guided sessions are available for those who prefer additional support during treatment.</p>
      </div>
      <div>
        <h3 className="font-semibold text-[#0B1D36] mb-2">Locally Owned</h3>
        <p className="text-[#555] text-sm leading-relaxed">We are a locally owned practice based in Aventura, serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!</p>
      </div>
    </div>
  </div>
</section>

{/* CTA */}
<section className="py-20 px-6 bg-[#0B1D36] text-white">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
    <p className="text-xl text-white/80 mb-10">Book a free consultation at our locally owned Aventura clinic.</p>
    <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">
      Book Free Consultation
    </Link>
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
          <li>2820 NE 214th St #1002, Aventura, FL 33180</li>
          <li><a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">info@rewiredketamine.com</a></li>
        </ul>
      </div>
      <div className="flex flex-col items-center text-center">
        <Image src="/logo.png" alt="Rewired Ketamine" width={200} height={60} className="h-14 w-auto mb-6" />
        <Image src="/legitscript.png" alt="LegitScript Certified" width={150} height={75} className="h-16 w-auto" />
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