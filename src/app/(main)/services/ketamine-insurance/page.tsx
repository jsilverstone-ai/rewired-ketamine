"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { JsonLd } from "@/components/JsonLd";


const faqs: { q: string; a: string; link?: { text: string; href: string } }[] = [
  { q: "Does insurance cover ketamine therapy?", a: "It depends on the treatment. Spravato (esketamine) is FDA-approved for treatment-resistant depression and is often covered with prior authorization. IV ketamine is not FDA-approved for depression, and plans generally do not cover it. Coverage is never guaranteed and is set by your policy." },
  { q: "Which insurance plans does Rewired bill for Spravato?", a: "We bill Spravato in-network with UnitedHealthcare, Cigna, and Aetna. Other plans can be reviewed at your free consultation. Approval depends on your medical evaluation and your insurer’s prior authorization." },
  { q: "Is Florida Blue or BCBS accepted for Spravato?", a: "Blue Cross Blue Shield plans, including Florida Blue, are out-of-network for Spravato at Rewired. Some plans offer out-of-network benefits, but what they pay varies and is not guaranteed. Call the number on your card and ask us to review your plan at your consultation." },
  { q: "Does insurance cover IV ketamine?", a: "Generally no. IV ketamine for depression is off-label, and insurers typically do not pay for it, so it is cash-pay at Rewired. Some patients submit our superbill for possible out-of-network reimbursement." },
  { q: "What is a ketamine superbill, and will my insurer reimburse me?", a: "A superbill is a detailed statement of the services you received and what you paid. We give one to cash-pay patients so they can submit it to their insurer. Reimbursement is not guaranteed and depends on your plan’s out-of-network benefits and deductible." },
  { q: "Can using insurance cost more than paying cash?", a: "Sometimes, yes. Deductibles, copays, and coinsurance can add up, especially early in the plan year or on a short course. In other cases insurance costs less. Check your own plan. The examples on this page are hypothetical." },
  { q: "How much does IV ketamine cost without insurance?", a: "Our published 1-hour mental-health IV protocol is $440 for a single session and $2,300 for a package of 6. Guided and 2-hour options are listed on the cost page. A consultation is required before treatment.", link: { text: "cost page", href: "/services/ketamine-therapy-cost" } },
];

const insuranceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.rewiredketamine.com/#clinic",
      name: "Rewired Ketamine",
      url: "https://www.rewiredketamine.com",
      telephone: "+1-305-676-6070",
      email: "info@rewiredketamine.com",
      image: "https://www.rewiredketamine.com/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2820 NE 214th Street, Suite 1002",
        addressLocality: "Aventura",
        addressRegion: "FL",
        postalCode: "33180",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 25.9730993, longitude: -80.1475594 },
      areaServed: ["Aventura", "Miami", "Fort Lauderdale", "South Florida"],
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.rewiredketamine.com/services/ketamine-insurance#webpage",
      url: "https://www.rewiredketamine.com/services/ketamine-insurance",
      name: "Ketamine & Spravato Insurance in Aventura | Rewired",
      headline: "Ketamine Therapy and Insurance in Aventura: What You Might Actually Pay",
      description: "Spravato is billed in-network with UnitedHealthcare, Cigna and Aetna. IV ketamine is cash-pay with a superbill. See how costs add up. ¡Hablamos Español!",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.rewiredketamine.com/#clinic" },
      about: [
        { "@type": "Drug", name: "Spravato (esketamine nasal spray)" },
        { "@type": "MedicalTherapy", name: "Intravenous ketamine infusion" },
      ],
      dateModified: "2026-11-23",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rewiredketamine.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.rewiredketamine.com/services" },
        { "@type": "ListItem", position: 3, name: "Ketamine Insurance", item: "https://www.rewiredketamine.com/services/ketamine-insurance" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function KetamineInsurancePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <JsonLd data={insuranceJsonLd} />
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
                  <Link href="/services/ketamine-insurance" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Insurance</Link>
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
<Link href="/treatments/burnout" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Burnout</Link>
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
              <Link href="/services/ketamine-therapy-cost" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Cost</Link>
              <Link href="/services/iv-ketamine-vs-spravato" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">IV vs Spravato</Link>
              <Link href="/services/ketamine-insurance" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Insurance</Link>
              <Link href="/location" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Location</Link>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">FAQ</Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#C9A66B]">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Ketamine Therapy and Insurance in Aventura: What You Might Actually Pay</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
          Plain answers on what insurance covers for Spravato and IV ketamine, and why using insurance is not always the cheaper path. Serving Miami, Fort Lauderdale, and South Florida.
        </p>
        <p className="text-[#C9A66B] font-bold text-lg">¡Hablamos Español!</p>
      </section>

      {/* Content */}
      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F8F5F0] border-l-4 border-[#C9A66B] rounded-2xl p-6 mb-8">
            <h2 className="font-semibold text-lg text-[#0B1D36] mb-3">Quick answer</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#555]"><li><strong>Spravato (esketamine nasal spray):</strong> FDA-approved and often covered with prior authorization. We bill in-network with <strong>UnitedHealthcare, Cigna, and Aetna</strong>. <strong>BCBS, including Florida Blue, is out-of-network</strong> for Spravato. Approval is never guaranteed, and your policy sets your costs.</li><li><strong>IV ketamine:</strong> <strong>cash-pay.</strong> It is not FDA-approved for depression, and plans generally do not cover it. We give cash-pay patients a <strong>superbill</strong> to submit to their insurer for possible out-of-network reimbursement. Reimbursement is not promised.</li><li><strong>Insurance can cost more than you expect.</strong> Deductibles, copays, and coinsurance can add up quickly. The examples below are hypothetical, so check your own plan.</li></ul>
          </div>
          <p className="text-[#555] mb-4">We would rather you understand the numbers before you book than be surprised after your first visit. This page explains how coverage works for both treatments, shows with hypothetical examples how a plan can change your cost, and lists what to ask your insurer. For published IV pricing, see our <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">ketamine therapy cost</Link> page.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Spravato and insurance</h2>
          <p className="text-[#555] mb-4">Spravato is the brand name for esketamine nasal spray. The FDA label lists two uses in adults: treatment-resistant depression (as monotherapy or with an oral antidepressant), and depressive symptoms in major depressive disorder with acute suicidal ideation or behavior (together with an oral antidepressant) <sup><a href="#source-1" className="text-[#C9A66B] hover:underline">[1]</a></sup>. Because of the risks of sedation and dissociation, it is available only through a restricted program, the Spravato REMS. Patients must be monitored for at least two hours after each dose <sup><a href="#source-1" className="text-[#C9A66B] hover:underline">[1]</a></sup>. Our clinic is REMS-certified. See our <Link href="/services/spravato" className="text-[#C9A66B] font-semibold hover:underline">Spravato in Aventura</Link> page for how treatment works.</p>
          <p className="text-[#555] mb-4"><strong>Who we bill.</strong> Rewired Ketamine bills Spravato <strong>in-network with UnitedHealthcare, Cigna, and Aetna.</strong> <strong>Blue Cross Blue Shield plans, including Florida Blue, are out-of-network</strong> for Spravato at our clinic. Some plans have out-of-network benefits and some do not, and what yours pays depends on your policy. Other plans can be reviewed at your consultation.</p>
          <p className="text-[#555] mb-4"><strong>Prior authorization.</strong> This means your plan must approve a service before you receive it <sup><a href="#source-2" className="text-[#C9A66B] hover:underline">[2]</a></sup>. Published coverage policies from UnitedHealthcare, Aetna, and Cigna each require prior authorization or precertification for Spravato <sup><a href="#source-3" className="text-[#C9A66B] hover:underline">[3]</a></sup><sup><a href="#source-4" className="text-[#C9A66B] hover:underline">[4]</a></sup><sup><a href="#source-5" className="text-[#C9A66B] hover:underline">[5]</a></sup>. Their criteria typically include a diagnosis of treatment-resistant or severe major depression, a history of inadequate response to at least two antidepressants, a documented depression rating, and a prescriber who is, or consults with, a psychiatrist <sup><a href="#source-3" className="text-[#C9A66B] hover:underline">[3]</a></sup><sup><a href="#source-4" className="text-[#C9A66B] hover:underline">[4]</a></sup><sup><a href="#source-5" className="text-[#C9A66B] hover:underline">[5]</a></sup>. Details differ by insurer and plan and change over time, so treat this as a general picture, not a promise about your plan. Medicare and Medicaid follow separate rules.</p>
          <p className="text-[#555] mb-4"><strong>What happens at Rewired.</strong></p>
          <ol className="list-decimal pl-5 space-y-2 text-[#555] mb-4">
            <li><strong>Free consultation.</strong> We review your history, medications, and whether Spravato matches an approved use.</li>
            <li><strong>Records.</strong> We gather what your plan asks for.</li>
            <li><strong>Prior authorization.</strong> We submit it to your plan. Approval is not guaranteed, and timing depends on the insurer.</li>
            <li><strong>First visit,</strong> only after authorization.</li>
          </ol>
          <p className="text-[#555] mb-4"><strong>Visit count affects cost.</strong> The labeled schedule for treatment-resistant depression is twice a week in weeks 1–4, once a week in weeks 5–8, then every one to two weeks if appropriate <sup><a href="#source-1" className="text-[#C9A66B] hover:underline">[1]</a></sup>. That is 12 visits in the first two months, and your deductible, copay, or coinsurance can apply to each one.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">IV ketamine and the superbill</h2>
          <p className="text-[#555] mb-4"><strong>IV ketamine is cash-pay at Rewired.</strong> Ketamine injection is FDA-approved as an anesthetic. The FDA states that ketamine is not approved for the treatment of any psychiatric disorder <sup><a href="#source-6" className="text-[#C9A66B] hover:underline">[6]</a></sup>. Using it for depression or other mental health conditions is off-label. Insurers generally do not pay for off-label use. One national insurer’s published policy, for example, lists ketamine injection for psychiatric disorders as investigational and not proven or medically necessary <sup><a href="#source-3" className="text-[#C9A66B] hover:underline">[3]</a></sup>. That is why IV ketamine is self-pay here.</p>
          <p className="text-[#555] mb-4">Our published 1-hour mental-health IV protocol is <strong>$440 for a single session</strong> and <strong>$2,300 for a package of 6</strong>. Guided sessions, the 2-hour options, and the other packages are on the <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">ketamine therapy cost</Link> page. To compare both treatments, see <Link href="/services/iv-ketamine-vs-spravato" className="text-[#C9A66B] font-semibold hover:underline">IV ketamine vs Spravato</Link>.</p>
          <p className="text-[#555] mb-4"><strong>What is a superbill?</strong> It is a detailed statement of the services you received and what you paid. We give one to every cash-pay patient. You can submit it to your insurer to ask whether any of the cost can be reimbursed under your plan’s out-of-network benefits. The insurer decides. You submit the claim, and we cannot predict what, if anything, your plan will pay.</p>
          <p className="text-[#555] mb-4">Reimbursement depends on whether your plan has out-of-network benefits, whether it treats IV ketamine for your condition as an eligible service, whether you have met your out-of-network deductible, your out-of-network coinsurance, and the plan’s allowed amount, which can be lower than what you paid <sup><a href="#source-7" className="text-[#C9A66B] hover:underline">[7]</a></sup>. For many patients the answer will be little or nothing, so please do not count on reimbursement when deciding whether IV ketamine is right for you.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Why going through insurance can cost more than you expect</h2>
          <p className="text-[#555] mb-4">Using insurance does not always mean paying less. Here are the terms that decide what you owe:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
            <li><strong>Deductible:</strong> what you pay for covered services each year before your plan starts to pay <sup><a href="#source-8" className="text-[#C9A66B] hover:underline">[8]</a></sup>.</li>
            <li><strong>Copayment:</strong> a fixed amount, such as $30, for a covered service <sup><a href="#source-9" className="text-[#C9A66B] hover:underline">[9]</a></sup>.</li>
            <li><strong>Coinsurance:</strong> a percentage of the cost, such as 20%, that you pay after your deductible is met <sup><a href="#source-10" className="text-[#C9A66B] hover:underline">[10]</a></sup>.</li>
            <li><strong>Allowed amount:</strong> the most your plan will recognize for a service. Providers outside your network may bill you the difference <sup><a href="#source-7" className="text-[#C9A66B] hover:underline">[7]</a></sup><sup><a href="#source-11" className="text-[#C9A66B] hover:underline">[11]</a></sup>.</li>
            <li><strong>Out-of-pocket maximum:</strong> the most you pay for covered services in a plan year. It does not include out-of-network care, services your plan does not cover, or costs above the allowed amount <sup><a href="#source-12" className="text-[#C9A66B] hover:underline">[12]</a></sup>.</li>
            <li><strong>Out-of-network coinsurance:</strong> the percentage you pay providers outside your plan’s network, usually more than in-network coinsurance <sup><a href="#source-13" className="text-[#C9A66B] hover:underline">[13]</a></sup>.</li>
          </ul>
          <p className="text-[#555] mb-4">The examples below are <strong>hypothetical examples with round numbers</strong>. They are not Rewired prices, not any insurer’s rates, and not a prediction for your plan.</p>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Hypothetical Example 1: a deductible and coinsurance</h3>
            <p className="text-[#555]">Suppose your plan has a $3,000 deductible, 20% coinsurance, and a $6,000 in-network out-of-pocket maximum. Suppose the plan’s allowed amount for each treatment visit is $1,000. You would pay the full $1,000 for each of your first three visits, which satisfies the deductible. After that you would pay 20%, or $200, per visit. For the 8 visits in the first four weeks, your share would be $3,000 + (5 × $200) = <strong>$4,000</strong>. Over all 12 visits in the first two months it would be <strong>$4,800</strong>.</p>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Hypothetical Example 2: a copay plan</h3>
            <p className="text-[#555]">Suppose a different plan charges a flat $50 copay per visit after you have met your deductible. The same 12 visits would cost <strong>$600</strong>.</p>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Hypothetical Example 3: insurance versus cash</h3>
            <p className="text-[#555]">Suppose your plan has a $5,000 deductible and 20% coinsurance, and the allowed amount is $1,000 per visit. Suppose a cash price for a similar service is $600 per visit. For 4 visits, insurance would cost you <strong>$4,000</strong> (you are still inside the deductible) and cash would cost <strong>$2,400</strong>. For 12 visits, insurance would cost $5,000 + (7 × $200) = <strong>$6,400</strong> and cash would cost <strong>$7,200</strong>. A short course can cost more through insurance, and a longer one less, depending on the plan.</p>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Hypothetical Example 4: a superbill</h3>
            <p className="text-[#555]">Suppose you pay $2,000 in cash for a course of IV sessions and send the superbill to your insurer. Suppose your plan has a $1,000 out-of-network deductible you have not yet met, 50% out-of-network coinsurance, and an allowed amount of $1,200 for those services. The plan would count $1,200 of your $2,000. After the $1,000 deductible, 50% of the remaining $200 is <strong>$100</strong> back, so your net cost would be $1,900. If your plan has no out-of-network benefits, or does not cover the service, the reimbursement would be <strong>$0</strong>.</p>
          </div>
          <p className="text-[#555] mb-4"><strong>Takeaway.</strong> Deductibles usually reset each plan year, so the month you start matters. The only reliable numbers come from your own plan.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Questions to ask your insurer</h2>
          <p className="text-[#555] mb-4">Call the member services number on your insurance card and ask:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
            <li>Is Spravato covered under my plan, under my medical or pharmacy benefit, and does it require prior authorization?</li>
            <li>Is Rewired Ketamine, a REMS-certified clinic in Aventura, in-network for my plan?</li>
            <li>What are my deductible, copay, and coinsurance for this service? How much of my deductible have I met this year?</li>
            <li>What is my out-of-pocket maximum, and how much have I used?</li>
            <li>What documentation do you require, and how long does prior authorization take and last?</li>
            <li>Do I have out-of-network benefits? What are my out-of-network deductible and coinsurance, and how is the allowed amount set?</li>
            <li>Will you consider reimbursing IV ketamine for my diagnosis if I submit a superbill? Is there a claim form or deadline?</li>
            <li>When does my plan year reset?</li>
          </ul>
          <p className="text-[#555] mb-4">Ask for a call reference number.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">How to verify your benefits with Rewired</h2>
          <ol className="list-decimal pl-5 space-y-2 text-[#555] mb-4">
            <li><strong>Book a free consultation</strong> and tell us your insurance plan.</li>
            <li><strong>Bring your card.</strong> We use your plan details to start the Spravato prior authorization process.</li>
            <li><strong>Review your numbers together.</strong> Your insurer, not the clinic, sets your copay, coinsurance, and deductible. If your costs look higher than expected, or Spravato is not covered, we will tell you.</li>
          </ol>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Local care in Aventura</h2>
          <p className="text-[#555] mb-4">Our clinic is located at 2820 NE 214th Street, Suite 1002, Aventura, FL 33180 — about 25–45 minutes from the Miami area and about 20–35 minutes from Fort Lauderdale, depending on traffic. Spanish-language support is available. We are locally owned, not a multi-location chain.</p>
          <p className="text-[#555] mb-4">Rewired Ketamine is listed as the #1 ketamine clinic in Miami on HealingMaps’ 2026 review of clinics in the area. You can read the list here: <a href="https://healingmaps.com/the-best-ketamine-clinics-in-miami/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">8 Best Ketamine Clinics in Miami (2026)</a>.</p>
          <p className="text-[#555] mb-4">Learn more about our <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">ketamine clinic in Aventura</Link> or call us at (305) 676-6070. If you are in crisis, call or text 988.</p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-[#0B1D36] mb-2">{faq.q}</h3>
                <p className="text-[#555]">
                  {faq.link && faq.a.includes(faq.link.text) ? (
                    <>
                      {faq.a.slice(0, faq.a.indexOf(faq.link.text))}
                      <Link href={faq.link.href} className="text-[#C9A66B] font-semibold hover:underline">{faq.link.text}</Link>
                      {faq.a.slice(faq.a.indexOf(faq.link.text) + faq.link.text.length)}
                    </>
                  ) : (
                    faq.a
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* TODO: add Medically reviewed by NAME, CREDENTIALS */}

          <p className="text-sm text-[#555] italic mt-8"><em>Does insurance cover ketamine therapy?</em></p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Sources</h2>
          <ol className="list-decimal pl-5 space-y-2 text-[#555] text-sm">
            <li id="source-1">SPRAVATO (esketamine) prescribing information, Janssen Pharmaceuticals. FDA-approved label via DailyMed. <a href="https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">dailymed.nlm.nih.gov</a> (indications, REMS monitoring, and dosing schedule checked November 23, 2026).</li>
            <li id="source-2">HealthCare.gov Glossary. “Prior authorization.” <a href="https://www.healthcare.gov/glossary/prior-authorization/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-3">UnitedHealthcare. “Ketalar (Ketamine) and Spravato (Esketamine), Commercial and Individual Exchange Medical Benefit Drug Policy,” policy 2026D0069Q, effective May 1, 2026. <a href="https://www.uhcprovider.com/content/dam/provider/docs/public/policies/comm-medical-drug/ketalar-spravato.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">uhcprovider.com</a>. See also UnitedHealthcare’s Spravato prior authorization program: <a href="https://www.uhcprovider.com/content/dam/provider/docs/public/prior-auth/drugs-pharmacy/commercial/r-z/PA-Med-Nec-Spravato.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">uhcprovider.com</a></li>
            <li id="source-4">Aetna. “Esketamine (Spravato),” Clinical Policy Bulletin 0950. <a href="https://www.aetna.com/cpb/medical/data/900_999/0950.html" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">aetna.com</a></li>
            <li id="source-5">Cigna. “Psychiatry – Spravato Prior Authorization Policy,” review date April 29, 2026. <a href="https://static.cigna.com/assets/chcp/pdf/coveragePolicies/cnf/cnf_606_coveragepositioncriteria_psychiatry_spravato_pa.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">static.cigna.com</a></li>
            <li id="source-6">U.S. Food and Drug Administration. “FDA warns patients and health care providers about potential risks associated with compounded ketamine products, including oral formulations, for the treatment of psychiatric disorders,” October 10, 2023. <a href="https://web.archive.org/web/20260530025451/https://www.fda.gov/drugs/human-drug-compounding/fda-warns-patients-and-health-care-providers-about-potential-risks-associated-compounded-ketamine" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">web.archive.org</a> (archived copy; listed on <a href="https://www.fda.gov/drugs/human-drug-compounding/compounding-risk-alerts" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">FDA’s Compounding Risk Alerts</a> page).</li>
            <li id="source-7">HealthCare.gov Glossary. “Allowed amount.” <a href="https://www.healthcare.gov/glossary/allowed-amount/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-8">HealthCare.gov Glossary. “Deductible.” <a href="https://www.healthcare.gov/glossary/deductible/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-9">HealthCare.gov Glossary. “Copayment.” <a href="https://www.healthcare.gov/glossary/co-payment/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-10">HealthCare.gov Glossary. “Coinsurance.” <a href="https://www.healthcare.gov/glossary/co-insurance/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-11">HealthCare.gov Glossary. “Balance billing.” <a href="https://www.healthcare.gov/glossary/balance-billing/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-12">HealthCare.gov Glossary. “Out-of-pocket maximum/limit.” <a href="https://www.healthcare.gov/glossary/out-of-pocket-maximum-limit/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-13">HealthCare.gov Glossary. “Out-of-network coinsurance.” <a href="https://www.healthcare.gov/glossary/out-of-network-coinsurance/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">Ready to take the next step?</h2>
        <p className="text-lg text-[#555] mb-6 max-w-3xl mx-auto">Book a free consultation. We will tell you if Spravato is an option, what your plan needs, and what IV costs. No pressure — just honest answers.</p>
        <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition">
          Book Free Consultation
        </Link>
        <p className="mt-4 text-sm text-[#555]">Or call/text <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B] transition">(305) 676-6070</a></p>
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
                <li><Link href="/services/ketamine-therapy-cost" className="hover:text-[#C9A66B] transition">Cost</Link></li>
                <li><Link href="/services/iv-ketamine-vs-spravato" className="hover:text-[#C9A66B] transition">IV vs Spravato</Link></li>
                <li><Link href="/services/ketamine-insurance" className="hover:text-[#C9A66B] transition">Insurance</Link></li>
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
    </>
  );
}
