import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

const burnoutJsonLd = {
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
      "@id": "https://www.rewiredketamine.com/treatments/burnout#webpage",
      url: "https://www.rewiredketamine.com/treatments/burnout",
      name: "Ketamine for Burnout & High-Stress Professionals | Aventura, FL",
      headline: "Ketamine for Burnout and High-Stress Professionals in Aventura",
      description: "Guided IV ketamine for high-stress professionals in Aventura. Transparent package pricing. Serving Miami and Fort Lauderdale. ¡Hablamos Español!",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.rewiredketamine.com/#clinic" },
      about: { "@type": "Thing", name: "Burnout" },
      lastReviewed: "2026-11-20",
      dateModified: "2026-11-20",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rewiredketamine.com/" },
        { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.rewiredketamine.com/treatments" },
        { "@type": "ListItem", position: 3, name: "Burnout", item: "https://www.rewiredketamine.com/treatments/burnout" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Is burnout the same as clinical depression?", acceptedAnswer: { "@type": "Answer", text: "No. Burnout is described by the World Health Organization as an occupational phenomenon tied to chronic workplace stress — often exhaustion, cynicism or distance from work, and reduced professional efficacy. Clinical depression is a medical condition that can overlap with burnout but is not the same thing. A consultation is how we tell those presentations apart." } },
        { "@type": "Question", name: "Is ketamine a first-step treatment for burnout?", acceptedAnswer: { "@type": "Answer", text: "No. If burnout is present without depression or anxiety that needs medical treatment, the usual first steps are rest, boundaries, therapy, and changes in the work situation. Ketamine is considered only when an evaluation finds that burnout overlaps with depression or anxiety, especially when usual care has not been enough. Individual results vary." } },
        { "@type": "Question", name: "Do you work with my existing psychiatrist or therapist?", acceptedAnswer: { "@type": "Answer", text: "Yes. If you already have a psychiatrist or therapist, care here is meant to complement that relationship. With your permission, we will coordinate with those clinicians and keep them updated." } },
        { "@type": "Question", name: "What does a typical course cost?", acceptedAnswer: { "@type": "Answer", text: "Our published mental-health IV protocol is $440 for a single session, $1,200 for a package of 3, and $2,300 for a package of 6. Guided sessions (1-hour IV plus a guide) are $590, $1,500, and $2,900 respectively. Full details are on the cost page." } },
        { "@type": "Question", name: "What is a guided session, and is integration included?", acceptedAnswer: { "@type": "Answer", text: "A guided session is a 1-hour IV infusion with a guide present. Integration support is included with guided options, or it can be arranged separately. Every session, guided or not, takes place in a private, monitored room with a clinical team member present." } },
        { "@type": "Question", name: "How long does it take to get to the clinic from Miami or Fort Lauderdale?", acceptedAnswer: { "@type": "Answer", text: "The clinic is in Aventura, at 2820 NE 214th Street, Suite 1002. The drive is about 25–45 minutes from the Miami area and about 20–35 minutes from Fort Lauderdale, depending on traffic. A driver is required after sessions." } },
        { "@type": "Question", name: "Do you offer Spanish-language support?", acceptedAnswer: { "@type": "Answer", text: "Yes. Spanish-language support is available. Ask about language preferences when you book a consultation." } },
      ],
    },
  ],
};

const faqs = [
  { q: "Is burnout the same as clinical depression?", a: "No. Burnout is described by the World Health Organization as an occupational phenomenon tied to chronic workplace stress — often exhaustion, cynicism or distance from work, and reduced professional efficacy. Clinical depression is a medical condition that can overlap with burnout but is not the same thing. A consultation is how we tell those presentations apart." },
  { q: "Is ketamine a first-step treatment for burnout?", a: "No. If burnout is present without depression or anxiety that needs medical treatment, the usual first steps are rest, boundaries, therapy, and changes in the work situation. Ketamine is considered only when an evaluation finds that burnout overlaps with depression or anxiety, especially when usual care has not been enough. Individual results vary." },
  { q: "Do you work with my existing psychiatrist or therapist?", a: "Yes. If you already have a psychiatrist or therapist, care here is meant to complement that relationship. With your permission, we will coordinate with those clinicians and keep them updated." },
  { q: "What does a typical course cost?", a: "Our published mental-health IV protocol is $440 for a single session, $1,200 for a package of 3, and $2,300 for a package of 6. Guided sessions (1-hour IV plus a guide) are $590, $1,500, and $2,900 respectively. Full details are on the cost page." },
  { q: "What is a guided session, and is integration included?", a: "A guided session is a 1-hour IV infusion with a guide present. Integration support is included with guided options, or it can be arranged separately. Every session, guided or not, takes place in a private, monitored room with a clinical team member present." },
  { q: "How long does it take to get to the clinic from Miami or Fort Lauderdale?", a: "The clinic is in Aventura, at 2820 NE 214th Street, Suite 1002. The drive is about 25–45 minutes from the Miami area and about 20–35 minutes from Fort Lauderdale, depending on traffic. A driver is required after sessions." },
  { q: "Do you offer Spanish-language support?", a: "Yes. Spanish-language support is available. Ask about language preferences when you book a consultation." },
];

export default function BurnoutPage() {
  return (
    <>
      <JsonLd data={burnoutJsonLd} />
      <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#C9A66B] focus:text-[#0B1D36] focus:px-4 focus:py-2 focus:rounded focus:font-semibold">
          Skip to main content
        </a>

        {/* Top bar */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Rewired Ketamine" width={600} height={180} className="h-16 md:h-20 w-auto" />
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#0B1D36]">
              <a href="https://www.google.com/maps/place/Rewired+Ketamine/@25.9730993,-80.1475594,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                2820 NE 214th St #1002, Aventura, FL 33180
              </a>
              <a href="mailto:info@rewiredketamine.com" className="flex items-center gap-2 hover:text-[#C9A66B] transition">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@rewiredketamine.com
              </a>
              <a href="tel:+13056766070" className="flex items-center gap-2 font-semibold hover:text-[#C9A66B] transition">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (305) 676-6070
              </a>
            </div>
          </div>
        </div>

        {/* Sticky header */}
        <header className="bg-[#0B1D36] text-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
              <Link href="/" className="hover:text-[#C9A66B] transition">Home</Link>
              <div className="relative group">
                <button className="hover:text-[#C9A66B] transition flex items-center gap-1">Our Services <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                <div className="absolute left-0 top-full mt-2 w-56 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/services" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">All Services</Link>
                    <Link href="/services/ketamine-infusion" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Ketamine Infusion</Link>
                    <Link href="/services/home-ketamine" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Home Ketamine</Link>
                    <Link href="/services/spravato" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Spravato</Link>
                    <Link href="/services/ketamine-therapy-cost" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Cost</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-[#C9A66B] transition flex items-center gap-1">Treatments <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
                <div className="absolute left-0 top-full mt-2 w-64 bg-white text-[#0B1D36] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2 max-h-80 overflow-y-auto">
                    <Link href="/treatments" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">All Treatments</Link>
                    <Link href="/treatments/depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Depression</Link>
                    <Link href="/treatments/anxiety" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Anxiety</Link>
                    <Link href="/treatments/ptsd" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">PTSD</Link>
                    <Link href="/treatments/burnout" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Burnout</Link>
                    <Link href="/treatments/postpartum-depression" className="block px-4 py-2.5 hover:bg-[#F8F5F0] hover:text-[#C9A66B] transition">Postpartum Depression</Link>
                  </div>
                </div>
              </div>
              <Link href="/providers" className="hover:text-[#C9A66B] transition">Providers</Link>
              <Link href="/location" className="hover:text-[#C9A66B] transition">Location</Link>
              <Link href="/faq" className="hover:text-[#C9A66B] transition">FAQ</Link>
              <Link href="/#contact" className="hover:text-[#C9A66B] transition">Contact</Link>
            </nav>
            <button className="lg:hidden p-2" aria-label="Open menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/#contact" className="bg-[#C9A66B] text-[#0B1D36] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#b8955e] transition">Free Consultation</Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="bg-[#0B1D36] text-white py-20 px-6 text-center" id="main-content">
          <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SOUTH FLORIDA</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ketamine for Burnout and High-Stress Professionals in Aventura</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">Guided IV sessions for high-functioning professionals from Miami and Fort Lauderdale. Clear package pricing so you know the full cost of a course before you schedule.</p>
          <p className="text-[#C9A66B] font-semibold">¡Hablamos Español!</p>
        </section>

        {/* Content */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#555] mb-6">Burnout and clinical depression are not the same. Burnout often shows up as exhaustion, cynicism, and reduced performance under sustained high stress — common among executives, entrepreneurs, and professionals in competitive fields. When it overlaps with depression or anxiety that has not responded well to usual care, some people explore medically supervised ketamine.</p>
            <p className="text-lg text-[#555] mb-6">At Rewired Ketamine in Aventura, guided IV sessions take place in a private, monitored room. A clinical team member stays with you. Sessions are typically about an hour, with time afterward to settle. Fully guided options are available for those who want additional support during the process.</p>
            <p className="text-lg text-[#555] mb-8">Integration support helps translate insights into practical changes. Care is individualized. A free consultation and screening determine whether ketamine is appropriate. We do not claim it is superior for everyone. Individual results vary.</p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Burnout is not automatically a reason to start ketamine</h2>
            <p className="text-[#555] mb-4">The World Health Organization includes burnout in ICD-11 as an occupational phenomenon: a syndrome of chronic workplace stress that has not been successfully managed. It is described along three dimensions — energy depletion or exhaustion, mental distance or cynicism related to work, and reduced professional efficacy — and it refers specifically to the occupational context.</p>
            <p className="text-[#555] mb-4">That distinction matters for treatment choices. If what you are experiencing is burnout without depression or another psychiatric condition, the first steps are usually changes in the conditions producing the stress: real rest and time away, clearer boundaries around work, a conversation about workload or role, and therapy aimed at coping and recovery. Ketamine is not a first-step treatment for burnout itself, and it will not fix an unsustainable job. We do not treat burnout as a stand-alone indication for infusion therapy.</p>
            <p className="text-[#555] mb-4">Ketamine is considered only when a clinical evaluation finds that burnout overlaps with depression or anxiety — especially when those symptoms have not responded well to usual care such as therapy or medication. In that situation, the medical issue being evaluated is the depression or anxiety, not burnout alone. Antidepressant medication, when it is part of usual care, commonly takes 4–8 weeks to work. Even then, ketamine is one possible supportive option after screening, not a requirement and not a promise of a particular outcome.</p>
            <p className="text-[#555] mb-8">If a consultation suggests that rest, therapy, or a change in work circumstances is the better fit, we will say so. If you already have a psychiatrist or therapist, treatment here is meant to add to that care, not replace it. With your permission, we will coordinate with those clinicians and keep them updated on your plan and your progress.</p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">How guided IV sessions are structured</h2>
            <p className="text-[#555] mb-4">Guided IV sessions take place in a private, monitored room. A clinical team member stays with you. Sessions are typically about an hour, with time afterward to settle before you leave. You should not drive yourself after a session; plan for a driver or a ride.</p>
            <p className="text-[#555] mb-4">Fully guided options are available if you want additional support during the infusion. Integration support helps turn whatever comes up in a session into practical changes in daily life. Integration is included with guided options, or it can be arranged separately.</p>
            <p className="text-[#555] mb-8">A free consultation and medical screening come first. That visit reviews your history, current medications, and symptoms so we can determine whether a supervised course is appropriate.</p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">When burnout overlaps with depression or anxiety</h2>
            <p className="text-[#555] mb-4">High-functioning professionals often continue working even when exhaustion, cynicism, and reduced performance have been present for months. In some cases those symptoms sit alongside clinical depression or anxiety that has not improved with therapy, medication, or time off. When that overlap is present, a clinician may consider whether a medically supervised course of IV ketamine could be one supportive option.</p>
            <p className="text-[#555] mb-4">Ketamine is not a treatment for an unsustainable job, and it does not replace the need for rest, clearer boundaries, or changes in workload. It is evaluated only after a consultation and medical screening that looks at your history, current medications, and whether depression or anxiety is part of the picture. Individual results vary, and not everyone is a candidate.</p>
            <p className="text-[#555] mb-4">Sessions take place in a private, monitored room at our Aventura clinic. A clinical team member is present throughout. Fully guided sessions are available if you want additional support during the infusion. Integration work afterward helps turn any insights into practical changes in daily life and work. Many people schedule around existing commitments; a driver is required after each session.</p>
            <p className="text-[#555] mb-8">If a consultation shows that rest, therapy, or a change in work circumstances is the better next step, we will say so. If you already work with a psychiatrist or therapist, care here is meant to complement that relationship. With your permission we coordinate and keep them updated.</p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Transparent pricing for a standard course</h2>
            <p className="text-[#555] mb-4">Many clinics require a consultation before disclosing rates. Rewired lists package pricing publicly so the total cost of six sessions is clear in advance.</p>
            <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Mental Health Protocol (1-hour IV)</h3>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Single Session</span><span className="font-semibold">$440</span></div>
                <div className="flex justify-between"><span>Package of 3</span><span className="font-semibold">$1,200</span></div>
                <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$2,300</span></div>
              </div>
            </div>
            <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Guided Sessions (1-hour IV + Guide)</h3>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Single Session</span><span className="font-semibold">$590</span></div>
                <div className="flex justify-between"><span>Package of 3</span><span className="font-semibold">$1,500</span></div>
                <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$2,900</span></div>
              </div>
            </div>
            <p className="text-sm text-[#555] mb-8">Consultation required. Full pricing details are on our <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">cost page</Link>.</p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">What is included</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#555] mb-8">
              <li>Private treatment room with continuous monitoring</li>
              <li>Clinical team presence throughout the session</li>
              <li>Fully guided sessions available</li>
              <li>Integration support (included in guided options or available separately)</li>
              <li>Local access for Miami and Fort Lauderdale patients</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Convenient for professionals in the area</h2>
            <p className="text-[#555] mb-4">Our Aventura clinic at 2820 NE 214th Street, Suite 1002, Aventura, FL 33180 is about 25–45 minutes from the Miami area and about 20–35 minutes from Fort Lauderdale, depending on traffic. Spanish-language support is available. We are a locally owned clinic focused on mental health, not a multi-location wellness chain.</p>
            <p className="text-[#555] mb-6">Rewired Ketamine is listed as the #1 ketamine clinic in Miami on HealingMaps’ 2026 review of clinics in the area. You can read the list here: <a href="https://healingmaps.com/the-best-ketamine-clinics-in-miami/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] font-semibold hover:underline">8 Best Ketamine Clinics in Miami (2026)</a>.</p>
            <p className="text-[#555]">Learn more about how care begins on our <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">homepage</Link>, or book a free consultation.</p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-6">Frequently asked questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-[#0B1D36] mb-2">{faq.q}</h3>
                  <p className="text-[#555]">{faq.a}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#555] text-sm">
              <li>
                World Health Organization. “Burn-out an ‘occupational phenomenon’: International Classification of Diseases.” 28 May 2019.{" "}
                <a href="https://www.who.int/news/item/28-05-2019-burn-out-an-occupational-phenomenon-international-classification-of-diseases" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">who.int</a>
              </li>
              <li>
                National Institute of Mental Health. “Depression.”{" "}
                <a href="https://www.nimh.nih.gov/health/topics/depression" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">nimh.nih.gov</a>
              </li>
              <li>
                National Institute of Mental Health. “Mental Health Medications.”{" "}
                <a href="https://www.nimh.nih.gov/health/topics/mental-health-medications" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">nimh.nih.gov</a>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-[#F8F5F0] text-center">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">Ready to take the next step?</h2>
          <p className="text-lg text-[#555] mb-6">Book a free consultation. No pressure — just honest answers and a clear path forward.</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-semibold px-8 py-3 rounded-lg hover:bg-[#b8955e] transition">Book Free Consultation</Link>
        </section>

        {/* Footer */}
        <footer className="bg-[#0B1D36] text-white py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
            <div>
              <img src="/logo.png" alt="Rewired Ketamine" className="h-12 mb-4" />
              <p className="text-white/70">2820 NE 214th Street, Suite 1002<br />Aventura, FL 33180</p>
              <p className="mt-2"><a href="tel:+13056766070" className="hover:text-[#C9A66B]">(305) 676-6070</a></p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/" className="hover:text-[#C9A66B]">Home</Link></li>
                <li><Link href="/services" className="hover:text-[#C9A66B]">Services</Link></li>
                <li><Link href="/services/ketamine-therapy-cost" className="hover:text-[#C9A66B]">Cost</Link></li>
                <li><Link href="/location" className="hover:text-[#C9A66B]">Location</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Treatments</h3>
              <ul className="space-y-2 text-white/70">
                <li><Link href="/treatments/depression" className="hover:text-[#C9A66B]">Depression</Link></li>
                <li><Link href="/treatments/burnout" className="hover:text-[#C9A66B]">Burnout</Link></li>
                <li><Link href="/treatments/postpartum-depression" className="hover:text-[#C9A66B]">Postpartum Depression</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Contact</h3>
              <p className="text-white/70">info@rewiredketamine.com</p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
            © {new Date().getFullYear()} Rewired Ketamine · Aventura, Florida · All Rights Reserved
          </div>
        </footer>
      </main>
    </>
  );
}
