import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "At-Home Ketamine Therapy",
  "description": "Clinician-supervised at-home ketamine (oral, nasal, rectal, and subcutaneous) after an in-person consult and medical screening, from a locally owned clinic in Aventura, Florida.",
  "url": "https://www.rewiredketamine.com/services/home-ketamine",
  "inLanguage": "en-US",
  "provider": {
    "@type": "MedicalClinic",
    "name": "Rewired Ketamine",
    "url": "https://www.rewiredketamine.com",
    "telephone": "+1-305-676-6070",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2820 NE 214th St #1002",
      "addressLocality": "Aventura",
      "addressRegion": "FL",
      "postalCode": "33180",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "State",
    "name": "Florida"
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is at-home ketamine legal in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, when it is prescribed by a licensed clinician after an evaluation. Ketamine is a controlled medication, so it should only come from a provider who screens you and follows up."
      }
    },
    {
      "@type": "Question",
      "name": "Who is a good candidate for at-home ketamine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adults whose health is stable, who have screened well, and who have a safe place and a trusted adult at home during doses. People with uncontrolled high blood pressure, certain heart conditions, or a history of substance misuse may be better served in the clinic or with another treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need someone with me during an at-home dose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We ask that a trusted adult be in the home during each dose. They do not need to watch you every minute. Our caregiver’s guide explains their role."
      }
    },
    {
      "@type": "Question",
      "name": "How much does at-home ketamine cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multiple-dose packages start at $225 for oral, $275 for rectal, $325 for nasal, and $600 for subcutaneous. Exact pricing is confirmed after screening."
      }
    },
    {
      "@type": "Question",
      "name": "Can I switch between at-home and in-clinic treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Some people start in the clinic and move to at-home care, and some do the reverse. We adjust the plan based on how you are doing."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer at-home ketamine in Spanish?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Consultations, instructions, and follow-up are available in Spanish. ¡Hablamos Español!"
      }
    }
  ]
};

export default function HomeKetaminePage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />

      {/* ===== HERO ===== */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">
            Aventura • Serving Florida
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            At-Home Ketamine Therapy in Florida
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Clinician-supervised ketamine you take at home, after a real consult and medical screening with our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl">
            <Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link>
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#eee] mb-12">
            <Image
              src="/services/home-ketamine-therapy-miami.jpg"
              alt="Comfortable home setting for at-home ketamine therapy serving Miami and South Florida"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>At-home ketamine has grown fast in Florida, and a lot of it is sold online with very little follow-up. We do it differently. Your care starts with a consult and medical screening with our team in Aventura. If at-home treatment is a good fit, we prescribe it, show you how to use it, and stay in touch throughout.</p>
            <p>For many people, at home is more comfortable, more private, and easier to fit around work and family. It can also cost less than a full series of in-clinic infusions or repeated Spravato copays. If at-home care is not the safer choice for you, we will tell you, and fully guided in-clinic sessions are always available.</p>
          </div>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D36] text-center mb-4">
            Options and Starting Prices
          </h2>
          <p className="text-center text-[#666] mb-12">
            Multiple-dose packages with clinical guidance — starting prices below
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Oral (RDTs)</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Starts at</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$225</p>
                <p className="text-sm text-[#555]">
                  Multiple doses with clinical guidance and support
                </p>
              </div>
            </div>
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Nasal</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Starts at</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$325</p>
                <p className="text-sm text-[#555]">
                  Multiple doses with clinical guidance and support
                </p>
              </div>
            </div>
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Rectal</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Starts at</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$275</p>
                <p className="text-sm text-[#555]">
                  Multiple doses with clinical guidance and support
                </p>
              </div>
            </div>
            <div className="border border-[#ddd] rounded-2xl overflow-hidden text-center">
              <div className="bg-[#0B1D36] text-white py-5">
                <h3 className="text-xl font-semibold">Subcutaneous</h3>
              </div>
              <div className="p-8">
                <p className="text-sm text-[#666] mb-2">Starts at</p>
                <p className="text-4xl font-bold text-[#0B1D36] mb-4">$600</p>
                <p className="text-sm text-[#555] mb-4">
                  Multiple doses with clinical guidance and support
                </p>
                <Link
                  href="/content/videos#jOiU_C-ng6A"
                  className="text-sm text-[#C9A66B] font-semibold hover:underline"
                >
                  Information video — click here
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center text-[#666] text-sm mt-10">
            Includes consultation, medication, and follow-up care. Exact pricing is confirmed after screening. See the <Link href="/services/ketamine-therapy-cost" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">cost page</Link> for full details.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS / SAFETY / COMPARISON ===== */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Which at-home option is right for you?</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Oral (rapid-dissolve tablets):</strong> easy to take and often the most affordable starting point.</li>
              <li><strong>Nasal:</strong> a spray that can absorb better than a swallowed tablet for some people.</li>
              <li><strong>Rectal:</strong> an option when oral absorption is limited or another route is more comfortable.</li>
              <li><strong>Subcutaneous:</strong> a small injection under the skin, for people who need more consistent absorption. We teach you how to do it.</li>
            </ul>
            <p>The right route depends on your history, your goals, and how your body handles the medication. We decide it together at the consult, not from a one-size-fits-all package.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">How at-home treatment works</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>1. Free consultation.</strong> Tell us what you are dealing with and what you have already tried.</li>
              <li><strong>2. Medical screening.</strong> We review your health history, medications, blood pressure, and substance-use history. At-home care is not right for everyone.</li>
              <li><strong>3. Your plan.</strong> If it is a good fit, we choose the route and dose and walk you through exactly how and when to take it.</li>
              <li><strong>4. Check-ins and follow-up.</strong> We stay in touch, adjust the plan when needed, and support integration so the work carries into daily life.</li>
            </ul>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Staying safe at home</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Take each dose in a quiet, safe place, with a trusted adult in the home.</li>
              <li>Do not drive, work, swim, or make big decisions until the effects have fully worn off.</li>
              <li>Store the medication securely, away from children, guests, and pets. Never share it.</li>
              <li>Never change your dose on your own. Call us and we will review it.</li>
              <li>Blood pressure matters: ketamine usually raises it for a short time. Read <Link href="/content/blog/does-ketamine-lower-blood-pressure" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">does ketamine lower blood pressure?</Link></li>
            </ul>
            <p>Family members helping out can read our <Link href="/content/blog/caregivers-guide-at-home-ketamine-florida" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">caregiver’s guide to at-home ketamine</Link>.</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">At home or in the clinic?</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#eee] bg-white">
            <table className="w-full text-left text-[#444]">
              <thead className="bg-[#0B1D36] text-white">
                <tr><th className="text-left p-4 font-semibold"></th><th className="text-left p-4 font-semibold">At home</th><th className="text-left p-4 font-semibold">In the clinic (IV)</th></tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Setting</td><td className="p-4 align-top">Your home, with a trusted adult nearby</td><td className="p-4 align-top">Private treatment room in Aventura</td></tr>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Monitoring</td><td className="p-4 align-top">Screening first, then check-ins and follow-up</td><td className="p-4 align-top">Continuous monitoring during the session</td></tr>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Getting there</td><td className="p-4 align-top">No travel or driver needed</td><td className="p-4 align-top">You need a ride home</td></tr>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Cost</td><td className="p-4 align-top">Lower starting prices</td><td className="p-4 align-top">Higher per session; packages available</td></tr>
                <tr className="border-t border-[#eee]"><td className="p-4 align-top font-semibold text-[#0B1D36]">Best for</td><td className="p-4 align-top">Stable health, comfortable with self-guided doses</td><td className="p-4 align-top">Closer monitoring, or a fully guided experience</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Why a local Florida clinic instead of a mail-order program?</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>National at-home programs often advertise lower monthly prices. The trade-off is usually less screening, less follow-up, and no in-person option if things change. With us, you have a local medical team in Aventura, a phone number that reaches real people, and the option to come into the clinic at any point. More on that in <Link href="/content/blog/why-at-home-ketamine-companies-advertise-lower-prices" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">why at-home ketamine companies advertise lower prices</Link>.</p>
            <p>We work with patients from Miami, Fort Lauderdale, North Miami Beach, Hollywood, and across Florida. For a full overview, read <Link href="/content/blog/at-home-ketamine-treatment-in-florida" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">At-Home Ketamine Treatment in Florida: Options, Safety, and Cost</Link>.</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">At-Home Ketamine: Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is at-home ketamine legal in Florida?</h3>
              <p className="text-[#555] leading-relaxed">Yes, when it is prescribed by a licensed clinician after an evaluation. Ketamine is a controlled medication, so it should only come from a provider who screens you and follows up.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Who is a good candidate for at-home ketamine?</h3>
              <p className="text-[#555] leading-relaxed">Adults whose health is stable, who have screened well, and who have a safe place and a trusted adult at home during doses. People with uncontrolled high blood pressure, certain heart conditions, or a history of substance misuse may be better served in the clinic or with another treatment.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do I need someone with me during an at-home dose?</h3>
              <p className="text-[#555] leading-relaxed">We ask that a trusted adult be in the home during each dose. They do not need to watch you every minute. Our <Link href="/content/blog/caregivers-guide-at-home-ketamine-florida" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">caregiver’s guide</Link> explains their role.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">How much does at-home ketamine cost?</h3>
              <p className="text-[#555] leading-relaxed">Multiple-dose packages start at $225 for oral, $275 for rectal, $325 for nasal, and $600 for subcutaneous. Exact pricing is confirmed after screening.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can I switch between at-home and in-clinic treatment?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Some people start in the clinic and move to at-home care, and some do the reverse. We adjust the plan based on how you are doing.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you offer at-home ketamine in Spanish?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Consultations, instructions, and follow-up are available in Spanish. ¡Hablamos Español!</p>
            </div>
          </div>

          <p className="text-sm text-[#777] mt-12 leading-relaxed">
            Ketamine is not right for everyone, and results vary. Many uses of ketamine for mental health are off-label. A medical evaluation decides whether treatment, and which setting, is appropriate for you. If you are in crisis, call or text 988 or call 911.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to see if at-home ketamine is right for you?</h2>
          <p className="text-xl text-white/80 mb-10">
            Book a free consultation with our locally owned Aventura clinic. No pressure — just honest answers and a clear plan.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition"
          >
            Book Free Consultation
          </Link>
          <p className="text-white/70 mt-6">Call or text <a href="tel:+13056766070" className="underline hover:text-[#C9A66B]">(305) 676-6070</a> · Aventura, FL</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <SiteFooter />
    </main>
  );
}
