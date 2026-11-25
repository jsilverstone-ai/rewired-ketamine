"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Shared English site header: skip link, top bar, desktop nav with dropdowns
// and mobile menu. The English and Spanish headers are generated from one
// template, so they always have the same structure and classes.
// The full desktop menu shows from the xl breakpoint (1280px) up; below that
// the mobile menu is used, so the menu never overflows on tablets.

const MAPS_URL =
  "https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu";

const SERVICES = [
  { href: "/services", label: "All Services" },
  { href: "/services/ketamine-infusion", label: "Ketamine Infusion" },
  { href: "/services/home-ketamine", label: "Home Ketamine" },
  { href: "/services/spravato", label: "Spravato" },
  { href: "/services/iv-ketamine-vs-spravato", label: "IV vs Spravato" },
  { href: "/services/ketamine-therapy-cost", label: "Cost" },
  { href: "/services/ketamine-insurance", label: "Insurance" },
  { href: "/services/hsa-fsa-ketamine", label: "HSA / FSA" },
  { href: "/services/functional-wellness", label: "Functional Wellness" },
  { href: "/services/medical-management", label: "Medical Management" },
  { href: "/services/talk-therapy", label: "Talk Therapy" },
];

const TREATMENTS = [
  { href: "/treatments", label: "All Treatments" },
  { href: "/treatments/depression", label: "Depression" },
  { href: "/treatments/anxiety", label: "Anxiety" },
  { href: "/treatments/ptsd", label: "PTSD" },
  { href: "/treatments/burnout", label: "Burnout" },
  { href: "/treatments/mental-fogginess", label: "Mental Fogginess" },
  { href: "/treatments/motivation", label: "Motivation" },
  { href: "/treatments/eating-disorder", label: "Eating Disorder" },
  { href: "/treatments/postpartum-depression", label: "Postpartum Depression" },
  { href: "/treatments/ocd", label: "OCD" },
  { href: "/treatments/chronic-pain", label: "Chronic Pain" },
  { href: "/treatments/tension-headaches", label: "Tension Headaches" },
  { href: "/treatments/palliative-compassion-care", label: "Palliative & Compassion Care" },
];

const CONTENT = [
  { href: "/content/blog", label: "Blog" },
  { href: "/content/videos", label: "Videos" },
  { href: "/content/ketamine-in-the-news", label: "Ketamine in the News" },
];

const TOOLS = [
  { href: "/tools", label: "All Tools" },
  { href: "/tools/phq-9-depression-test", label: "PHQ-9 Depression Test" },
  { href: "/tools/gad-7-anxiety-test", label: "GAD-7 Anxiety Test" },
  { href: "/tools/ketamine-cost-calculator", label: "Cost Calculator" },
];

const SOCIAL = [
  { href: "https://www.instagram.com/rewired_ketamine/", label: "Instagram", d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { href: "https://www.youtube.com/@RewiredKetamine", label: "YouTube", d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { href: "https://www.facebook.com/RewiredKetamine/", label: "Facebook", d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { href: "https://www.linkedin.com/in/jacob-silverstone-98414547/", label: "LinkedIn", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
];

const DROPDOWN_LINK = "block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition";
const NAV_LINK = "hover:text-[#C9A66B] transition";

// English pages that have a Spanish twin (generated from src/app/es).
const ES_PAGES = new Set<string>(["/content", "/content/blog", "/content/ketamine-in-the-news", "/content/videos", "/faq", "/location", "/providers", "/services", "/services/functional-wellness", "/services/home-ketamine", "/services/hsa-fsa-ketamine", "/services/iv-ketamine-vs-spravato", "/services/ketamine-infusion", "/services/ketamine-insurance", "/services/ketamine-insurance/spravato-aetna", "/services/ketamine-insurance/spravato-cigna", "/services/ketamine-insurance/spravato-florida-blue-bcbs", "/services/ketamine-insurance/spravato-florida-medicaid", "/services/ketamine-insurance/spravato-medicare", "/services/ketamine-insurance/spravato-unitedhealthcare", "/services/ketamine-therapy-cost", "/services/medical-management", "/services/spravato", "/services/talk-therapy", "/tools", "/tools/gad-7-anxiety-test", "/tools/ketamine-cost-calculator", "/tools/phq-9-depression-test", "/treatments", "/treatments/anxiety", "/treatments/burnout", "/treatments/chronic-pain", "/treatments/depression", "/treatments/eating-disorder", "/treatments/mental-fogginess", "/treatments/motivation", "/treatments/ocd", "/treatments/palliative-compassion-care", "/treatments/postpartum-depression", "/treatments/ptsd", "/treatments/tension-headaches"]);

/** Matching Spanish URL for the current English page, or /es if there is none. */
function altLangHref(pathname: string | null): string {
  if (!pathname) return "/es";
  const p = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (p === "/") return "/es";
  if (p.startsWith("/faq/")) return "/es" + p;
  return ES_PAGES.has(p) ? "/es" + p : "/es";
}

function Chevron({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
  );
}

function SocialIcons() {
  return (
    <>
      {SOCIAL.map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={NAV_LINK} aria-label={s.label}>
          <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
        </a>
      ))}
    </>
  );
}

function DesktopDropdown({ label, items, width, scroll }: { label: string; items: { href: string; label: string }[]; width: string; scroll?: boolean }) {
  return (
    <div className="relative group">
      <button className="hover:text-[#C9A66B] transition flex items-center gap-1">
        {label}
        <Chevron />
      </button>
      <div className={`absolute left-0 top-full mt-2 ${width} bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50`}>
        <div className={scroll ? "py-2 max-h-80 overflow-y-auto" : "py-2"}>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={DROPDOWN_LINK}>{item.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ label, items, open, onToggle, onNavigate }: { label: string; items: { href: string; label: string }[]; open: boolean; onToggle: () => void; onNavigate: () => void }) {
  return (
    <div>
      <button onClick={onToggle} className="flex items-center justify-between w-full hover:text-[#C9A66B] transition" aria-expanded={open}>
        <span>{label}</span>
        <Chevron className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 mt-3 flex flex-col space-y-3 text-sm">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className={NAV_LINK} onClick={onNavigate}>{item.label}</Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteHeader({ spanishHref: altOverride }: { spanishHref?: string } = {}) {
  const pathname = usePathname();
  const altHref = altOverride ?? altLangHref(pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
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
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
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
            <Link href={altHref} hrefLang="es" lang="es" className="text-[#C9A66B] font-semibold hover:underline">Español</Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <nav className="hidden xl:flex items-center gap-3.5 text-[15px] font-medium whitespace-nowrap">
            <Link href="/" className={NAV_LINK}>Home</Link>
            <DesktopDropdown label="Our Services" items={SERVICES} width="w-56" />
            <DesktopDropdown label="Treatments" items={TREATMENTS} width="w-64" scroll />
            <Link href="/providers" className={NAV_LINK}>Providers</Link>
            <DesktopDropdown label="Content" items={CONTENT} width="w-56" />
            <DesktopDropdown label="Tools" items={TOOLS} width="w-64" />
            <Link href="/location" className={NAV_LINK}>Location</Link>
            <Link href="/faq" className={NAV_LINK}>FAQ</Link>
            <Link href="/#contact" className={NAV_LINK}>Contact</Link>
          </nav>

          <button className="xl:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>

          <div className="hidden xl:flex items-center gap-3">
            <SocialIcons />
            <Link href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] text-sm font-bold px-5 py-2.5 rounded hover:bg-white transition whitespace-nowrap">
              FREE CONSULTATION
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="xl:hidden bg-[#0B1D36] border-t border-white/10">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link href="/" className={NAV_LINK} onClick={closeMenu}>Home</Link>
              <MobileGroup label="Our Services" items={SERVICES} open={isServicesOpen} onToggle={() => setIsServicesOpen(!isServicesOpen)} onNavigate={closeMenu} />
              <MobileGroup label="Treatments" items={TREATMENTS} open={isTreatmentsOpen} onToggle={() => setIsTreatmentsOpen(!isTreatmentsOpen)} onNavigate={closeMenu} />
              <Link href="/providers" className={NAV_LINK} onClick={closeMenu}>Providers</Link>
              <MobileGroup label="Content" items={CONTENT} open={isContentOpen} onToggle={() => setIsContentOpen(!isContentOpen)} onNavigate={closeMenu} />
              <MobileGroup label="Tools" items={TOOLS} open={isToolsOpen} onToggle={() => setIsToolsOpen(!isToolsOpen)} onNavigate={closeMenu} />
              <Link href="/location" className={NAV_LINK} onClick={closeMenu}>Location</Link>
              <Link href="/faq" className={NAV_LINK} onClick={closeMenu}>FAQ</Link>
              <Link href="/#contact" className={NAV_LINK} onClick={closeMenu}>Contact</Link>
              <Link href={altHref} hrefLang="es" lang="es" className="text-[#C9A66B] font-semibold" onClick={closeMenu}>Español</Link>

              <Link href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] text-center font-bold px-6 py-3 rounded mt-2" onClick={closeMenu}>
                FREE CONSULTATION
              </Link>

              <div className="flex items-center justify-center gap-6 pt-4 border-t border-white/10 mt-2">
                <SocialIcons />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
