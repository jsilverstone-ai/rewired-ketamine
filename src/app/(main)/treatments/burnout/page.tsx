import Link from "next/link";
import { JsonLd } from "@/components/JsonLd"; // create this helper if it doesn't exist

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
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.9730993,
        longitude: -80.1475594,
      },
      areaServed: ["Aventura", "Miami", "Fort Lauderdale", "South Florida"],
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.rewiredketamine.com/treatments/burnout#webpage",
      url: "https://www.rewiredketamine.com/treatments/burnout",
      name: "Ketamine for Burnout & High-Stress Professionals | Aventura, FL",
      headline: "Ketamine for Burnout and High-Stress Professionals in Aventura",
      description:
        "Guided IV ketamine sessions for high-functioning professionals in Aventura. Transparent package pricing. Serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.rewiredketamine.com/#clinic" },
      about: {
        "@type": "Thing",
        name: "Burnout",
      },
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
        {
          "@type": "Question",
          name: "Is burnout the same as clinical depression?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Burnout is described by the World Health Organization as an occupational phenomenon tied to chronic workplace stress — often exhaustion, cynicism or distance from work, and reduced professional efficacy. Clinical depression is a medical condition that can overlap with burnout but is not the same thing. A consultation is how we tell those presentations apart.",
          },
        },
        {
          "@type": "Question",
          name: "Is ketamine a first-step treatment for burnout?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. If burnout is present without depression or anxiety that needs medical treatment, the usual first steps are rest, boundaries, therapy, and changes in the work situation. Ketamine is considered only when an evaluation finds that burnout overlaps with depression or anxiety, especially when usual care has not been enough. Individual results vary.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with my existing psychiatrist or therapist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you already have a psychiatrist or therapist, care here is meant to complement that relationship. With your permission, we will coordinate with those clinicians and keep them updated.",
          },
        },
        {
          "@type": "Question",
          name: "What does a typical course cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our published mental-health IV protocol is $440 for a single session, $1,200 for a package of 3, and $2,300 for a package of 6. Guided sessions (1-hour IV plus a guide) are $590, $1,500, and $2,900 respectively. Full details are on the cost page.",
          },
        },
        {
          "@type": "Question",
          name: "What is a guided session, and is integration included?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A guided session is a 1-hour IV infusion with a guide present. Integration support is included with guided options, or it can be arranged separately. Every session, guided or not, takes place in a private, monitored room with a clinical team member present.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to get to the clinic from Miami or Fort Lauderdale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The clinic is in Aventura, at 2820 NE 214th Street, Suite 1002. The drive is about 25–45 minutes from the Miami area and about 20–35 minutes from Fort Lauderdale, depending on traffic. A driver is required after sessions.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer Spanish-language support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Spanish-language support is available. Ask about language preferences when you book a consultation.",
          },
        },
      ],
    },
  ],
};

export default function BurnoutPage() {
  return (
    <>
      <JsonLd data={burnoutJsonLd} />
      <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
        {/* Keep your existing full header / top bar / nav / footer exactly as on the live site */}
        {/* Paste the updated content sections below inside the main content area */}

        <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SOUTH FLORIDA</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ketamine for Burnout and High-Stress Professionals in Aventura</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
            Guided IV sessions for high-functioning professionals from Miami and Fort Lauderdale. Clear package pricing so you know the full cost of a course before you schedule.
          </p>
          <p className="text-[#C9A66B] font-semibold">¡Hablamos Español!</p>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#555] mb-6">
              Burnout and clinical depression are not the same. Burnout often shows up as exhaustion, cynicism, and reduced performance under sustained high stress — common among executives, entrepreneurs, and professionals in competitive fields. When it overlaps with depression or anxiety that has not responded well to usual care, some people explore medically supervised ketamine.
            </p>
            <p className="text-lg text-[#555] mb-6">
              At Rewired Ketamine in Aventura, guided IV sessions take place in a private, monitored room. A clinical team member stays with you. Sessions are typically about an hour, with time afterward to settle. Fully guided options are available for those who want additional support during the process.
            </p>
            <p className="text-lg text-[#555] mb-8">
              Integration support helps translate insights into practical changes. Care is individualized. A free consultation and screening determine whether ketamine is appropriate. We do not claim it is superior for everyone. Individual results vary.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Burnout is not automatically a reason to start ketamine</h2>
            <p className="text-[#555] mb-4">
              The World Health Organization includes burnout in ICD-11 as an occupational phenomenon: a syndrome of chronic workplace stress that has not been successfully managed. It is described along three dimensions — energy depletion or exhaustion, mental distance or cynicism related to work, and reduced professional efficacy — and it refers specifically to the occupational context.
            </p>
            <p className="text-[#555] mb-4">
              That distinction matters for treatment choices. If what you are experiencing is burnout without depression or another psychiatric condition, the first steps are usually changes in the conditions producing the stress: real rest and time away, clearer boundaries around work, a conversation about workload or role, and therapy aimed at coping and recovery. Ketamine is not a first-step treatment for burnout itself, and it will not fix an unsustainable job. We do not treat burnout as a stand-alone indication for infusion therapy.
            </p>
            <p className="text-[#555] mb-4">
              Ketamine is considered only when a clinical evaluation finds that burnout overlaps with depression or anxiety — especially when those symptoms have not responded well to usual care such as therapy or medication. In that situation, the medical issue being evaluated is the depression or anxiety, not burnout alone. Antidepressant medication, when it is part of usual care, commonly takes 4–8 weeks to work. Even then, ketamine is one possible supportive option after screening, not a requirement and not a promise of a particular outcome.
            </p>
            <p className="text-[#555] mb-8">
              If a consultation suggests that rest, therapy, or a change in work circumstances is the better fit, we will say so. If you already have a psychiatrist or therapist, treatment here is meant to add to that care, not replace it. With your permission, we will coordinate with those clinicians and keep them updated on your plan and your progress.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">How guided IV sessions are structured</h2>
            <p className="text-[#555] mb-4">
              Guided IV sessions take place in a private, monitored room. A clinical team member stays with you. Sessions are typically about an hour, with time afterward to settle before you leave. You should not drive yourself after a session; plan for a driver or a ride.
            </p>
            <p className="text-[#555] mb-4">
              Fully guided options are available if you want additional support during the infusion. Integration support helps turn whatever comes up in a session into practical changes in daily life. Integration is included with guided options, or it can be arranged separately.
            </p>
            <p className="text-[#555] mb-8">
              A free consultation and medical screening come first. That visit reviews your history, current medications, and symptoms so we can determine whether a supervised course is appropriate.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Transparent pricing for a standard course</h2>
            <p className="text-[#555] mb-4">
              Many clinics require a consultation before disclosing rates. Rewired lists package pricing publicly so the total cost of six sessions is clear in advance.
            </p>
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
            <p className="text-sm text-[#555] mb-8">
              Consultation required. Full pricing details are on our <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">cost page</Link>.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">What is included</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#555] mb-8">
              <li>Private treatment room with continuous monitoring</li>
              <li>Clinical team presence throughout the session</li>
              <li>Fully guided sessions available</li>
              <li>Integration support (included in guided options or available separately)</li>
              <li>Local access for Miami and Fort Lauderdale patients</li>
            </ul>
            <p className="text-[#555] mb-8">
              When you compare clinics, ask whether monitoring, a private room, a clinician present during the session, and integration support are included in the quoted rate or billed separately. Those details change what a “per session” number actually covers.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Convenient for professionals in the area</h2>
            <p className="text-[#555] mb-4">
              Our Aventura clinic at 2820 NE 214th Street, Suite 1002, Aventura, FL 33180 is about 25–45 minutes from the Miami area and about 20–35 minutes from Fort Lauderdale, depending on traffic. Spanish-language support is available. We are a locally owned clinic focused on mental health, not a multi-location wellness chain.
            </p>
            <p className="text-[#555] mb-6">
              Rewired Ketamine is listed as the #1 ketamine clinic in Miami on HealingMaps’ 2026 review of clinics in the area. You can read the list here: <a href="https://healingmaps.com/the-best-ketamine-clinics-in-miami/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] font-semibold hover:underline">8 Best Ketamine Clinics in Miami (2026)</a>.
            </p>
            <p className="text-[#555]">
              Learn more about how care begins on our <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">homepage</Link>, or book a free consultation.
            </p>

            {/* FAQ section - keep your existing styling */}
            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-6">Frequently asked questions</h2>
            {/* Insert the FAQ items from the markdown here, matching your site's accordion or static style */}

            <p className="text-sm text-[#777] mt-12">
              Medically reviewed by [REVIEWER_NAME, CREDENTIALS] — Last updated November 20, 2026
            </p>
          </div>
        </section>

        {/* Keep your existing CTA and footer */}
      </main>
    </>
  );
}
