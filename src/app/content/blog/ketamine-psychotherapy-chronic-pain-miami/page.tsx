"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function KetaminePsychotherapyChronicPainPage() {
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
            <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9ad36917b816d:0x35046cce92dab559!8m2!3d25.9730993!4d-80.1449845!16s%2Fg%2F11srrh9xgl?entry=ttu" target="_blank" rel="noopener noreferrer" className="hover:text-[#C9A66B] transition">
              2820 NE 214th St #1002, Aventura, FL 33180
            </a>
            <a href="mailto:info@rewiredketamine.com" className="hover:text-[#C9A66B] transition">info@rewiredketamine.com</a>
            <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B] transition">(305) 676-6070</a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION - use your standard full menu here */}
      <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
        {/* Paste your complete working menu block here (the one that includes Services, Treatments, Content dropdowns + social icons) */}
      </header>

      {/* ARTICLE */}
      <article id="main-content" className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          
          <p className="text-sm text-[#C9A66B] font-semibold mb-3">Blog · August 2026</p>
          
          <h1 className="text-3xl md:text-5xl font-bold text-[#0B1D36] mb-6 leading-tight">
            Ketamine and Psychotherapy: A Combined Approach for Chronic Pain
          </h1>

          <p className="text-lg text-[#555] leading-relaxed mb-8">
            For many people living with chronic neuropathic pain, standard treatments do not always bring enough relief. A growing body of research is exploring whether combining ketamine with psychotherapy may offer a more complete path forward.
          </p>

          <p className="text-[#555] leading-relaxed mb-6">
            A recent pilot study led by researchers at Unity Health Toronto and the University of Toronto examined this combined approach for chronic neuropathic pain. The work, highlighted by Medical Xpress, suggests that pairing ketamine with structured psychotherapy may help address both the physical and psychological dimensions of persistent pain.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Why Combine Ketamine and Psychotherapy?</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Ketamine is known for its rapid effects on the nervous system and its ability to support neuroplasticity — the brain’s capacity to form new connections. Psychotherapy, when timed thoughtfully around treatment, can help patients process insights, reduce fear around pain, and build more adaptive patterns.
          </p>
          <p className="text-[#555] leading-relaxed mb-6">
            Together, the two approaches may create a window where meaningful change becomes more possible. This is especially relevant for individuals who have already tried multiple options without lasting improvement.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">What This Means for Patients Seeking Ketamine in Miami</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            At our locally owned clinic in Aventura, we regularly support patients from Miami, Fort Lauderdale, and across South Florida who are exploring <Link href="/treatments/chronic-pain" className="text-[#C9A66B] hover:underline">ketamine for chronic pain</Link>. Fully guided sessions are available, and many patients also benefit from integration support or talk therapy.
          </p>
          <p className="text-[#555] leading-relaxed mb-6">
            If you have been searching for “ketamine miami,” “ketamine near me,” or “ketamine clinic florida,” it is worth knowing that care focused on both the biological and emotional aspects of pain is available locally.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">A Thoughtful, Individualized Path</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            There is no one-size-fits-all protocol. Every treatment plan is tailored. Some patients prefer fully guided sessions; others benefit from additional <Link href="/services/talk-therapy" className="text-[#C9A66B] hover:underline">talk therapy</Link> or integration support. Our team works in partnership with each person to determine what feels most supportive.
          </p>
          <p className="text-[#555] leading-relaxed mb-6">
            Emerging research continues to reinforce what many clinicians already observe: when ketamine is paired with intentional psychological support, the potential for lasting change often expands.
          </p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Local Care in Aventura and South Florida</h2>
          <p className="text-[#555] leading-relaxed mb-6">
            Rewired Ketamine is a locally owned clinic serving Aventura, Miami, and the greater South Florida community. We offer fully guided sessions when desired, and we speak Spanish.
          </p>
          <p className="text-[#555] leading-relaxed mb-10">
            If you are exploring ketamine treatment in Florida and want to understand whether a combined approach may be appropriate for you, we invite you to begin with a free consultation. There is no pressure — just a clear, compassionate conversation about your options.
          </p>

          <div className="bg-[#0B1D36] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to take the next step?</h3>
            <p className="text-white/80 mb-6">Book a free consultation at our locally owned Aventura clinic. ¡Hablamos Español!</p>
            <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
              Book Free Consultation
            </Link>
          </div>

          <p className="text-sm text-[#888] mt-10">
            Source: <a href="https://medicalxpress.com/news/2026-08-ketamine-psychotherapy-combined-approach-chronic.html" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">Medical Xpress – Ketamine and psychotherapy as a combined approach to chronic pain</a>
          </p>

        </div>
      </article>

      {/* FOOTER - use your standard footer */}
      <footer className="bg-[#081525] text-white pt-16 pb-8">
        {/* Paste your standard footer here */}
      </footer>
    </main>
  );
}