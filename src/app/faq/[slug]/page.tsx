"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { notFound } from "next/navigation";
import { faqs } from "../../../data/faqs";

export default function FAQPage({ params }: { params: { slug: string } }) {
  const page = faqs.find((f) => f.slug === params.slug);
  if (!page) return notFound();

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
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
              <span>2820 NE 214th St #1002, Aventura, FL</span>
            </a>
            <a href="tel:+13056766070" className="flex items-center gap-2 hover:text-[#C9A66B] transition">(305) 676-6070</a>
            <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">info@rewiredketamine.com</a>
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
                  <Link href="/services/spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Spravato</Link>
                  <Link href="/services/home-ketamine" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Home Ketamine</Link>
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
              <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">All Treatments</Link>
                  <Link href="/treatments/depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Depression</Link>
                  <Link href="/treatments/anxiety" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Anxiety</Link>
                  <Link href="/treatments/ptsd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">PTSD</Link>
                  <Link href="/treatments/ocd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">OCD</Link>
                  <Link href="/treatments/chronic-pain" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Chronic Pain</Link>
                </div>
              </div>
            </div>
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
            <Link href="/providers" className="hover:text-[#C9A66B] transition">Providers</Link>
            <Link href="/location" className="hover:text-[#C9A66B] transition">Location</Link>
            <Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-5 py-2.5 rounded-full hover:bg-[#d4b57a] transition">Free Consultation</a>
            <div className="flex items-center gap-3 text-white">
              <a href="https://www.instagram.com/rewiredketamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.facebook.com/RewiredKetamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/jacob-silverstone-98414547/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#0B1D36] border-t border-white/10 px-6 py-4 space-y-3">
            <Link href="/" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <div>
              <button className="flex items-center justify-between w-full py-2 hover:text-[#C9A66B]" onClick={() => setIsServicesOpen(!isServicesOpen)}>
                Our Services <svg className={`w-4 h-4 transition ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 space-y-2 text-sm">
                  <Link href="/services" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>All Services</Link>
                  <Link href="/services/ketamine-infusion" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Ketamine Infusion</Link>
                  <Link href="/services/spravato" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Spravato</Link>
                  <Link href="/services/home-ketamine" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Home Ketamine</Link>
                  <Link href="/services/functional-wellness" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Functional Wellness</Link>
                  <Link href="/services/medical-management" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Medical Management</Link>
                  <Link href="/services/talk-therapy" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Talk Therapy</Link>
                </div>
              )}
            </div>
            <div>
              <button className="flex items-center justify-between w-full py-2 hover:text-[#C9A66B]" onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}>
                Treatments <svg className={`w-4 h-4 transition ${isTreatmentsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isTreatmentsOpen && (
                <div className="pl-4 space-y-2 text-sm">
                  <Link href="/treatments" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>All Treatments</Link>
                  <Link href="/treatments/depression" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Depression</Link>
                  <Link href="/treatments/anxiety" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Anxiety</Link>
                  <Link href="/treatments/ptsd" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>PTSD</Link>
                  <Link href="/treatments/ocd" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>OCD</Link>
                  <Link href="/treatments/chronic-pain" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Chronic Pain</Link>
                </div>
              )}
            </div>
            <div>
              <button className="flex items-center justify-between w-full py-2 hover:text-[#C9A66B]" onClick={() => setIsContentOpen(!isContentOpen)}>
                Content <svg className={`w-4 h-4 transition ${isContentOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isContentOpen && (
                <div className="pl-4 space-y-2 text-sm">
                  <Link href="/content/blog" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                  <Link href="/content/videos" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Videos</Link>
                  <Link href="/content/ketamine-in-the-news" className="block py-1.5 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Ketamine in the News</Link>
                </div>
              )}
            </div>
            <Link href="/providers" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Providers</Link>
            <Link href="/location" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Location</Link>
            <Link href="/#contact" className="block py-2 hover:text-[#C9A66B]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <a href="/#contact" className="block bg-[#C9A66B] text-[#0B1D36] font-semibold text-center py-2.5 rounded-full mt-2" onClick={() => setIsMenuOpen(false)}>Free Consultation</a>
            <div className="flex gap-4 pt-3 border-t border-white/10">
              <a href="https://www.instagram.com/rewiredketamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B]" aria-label="Instagram"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              <a href="https://www.facebook.com/RewiredKetamine/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B]" aria-label="Facebook"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="https://www.linkedin.com/in/jacob-silverstone-98414547/" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B]" aria-label="LinkedIn"><svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
            </div>
          </div>
        )}
      </header>

      <section className="relative bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">{page.h1}</h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">{page.description}</p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">¡Hablamos Español!</p>
        </div>
      </section>

      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          {page.faqs.map((item, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-[#0B1D36] mb-2">{item.question}</h2>
              <p className="text-[#555] leading-relaxed">{item.answer}</p>
            </div>
          ))}
          {page.related && (
            <p className="mt-10">
              Learn more on our{" "}
              <Link href={page.related} className="text-[#C9A66B] font-semibold hover:underline">
                related treatment page
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <footer className="bg-[#0B1D36] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <Image src="/logo.png" alt="Rewired Ketamine" width={200} height={60} className="h-12 w-auto mb-4" />
              <p className="text-white/70 text-sm">Locally owned ketamine clinic in Aventura serving Miami and South Florida.</p>
            </div>
            <div>
              <a href="https://www.legitscript.com/websites/?checker_keywords=rewiredketamine.com" target="_blank" rel="noopener noreferrer">
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
                <li><Link href="/content/blog" className="hover:text-[#C9A66B] transition">Blog</Link></li>
                <li><Link href="/location" className="hover:text-[#C9A66B] transition">Location</Link></li>
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
