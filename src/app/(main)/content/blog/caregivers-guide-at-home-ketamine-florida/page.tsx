import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "A Caregiver’s Guide to At-Home Ketamine Treatment",
  "description": "How to support a loved one during at-home ketamine treatment: being present, safety basics, when to call us, and taking care of yourself. From our Aventura clinic. ¡Hablamos Español!",
  "mainEntityOfPage": "https://www.rewiredketamine.com/content/blog/caregivers-guide-at-home-ketamine-florida",
  "url": "https://www.rewiredketamine.com/content/blog/caregivers-guide-at-home-ketamine-florida",
  "datePublished": "2026-11-24",
  "dateModified": "2026-11-24",
  "inLanguage": "en-US",
  "author": {
    "@type": "Person",
    "name": "Dr. Jacob Silverstone",
    "url": "https://www.rewiredketamine.com/providers"
  },
  "publisher": {
    "@type": "MedicalClinic",
    "name": "Rewired Ketamine",
    "url": "https://www.rewiredketamine.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.rewiredketamine.com/logo.png"
    }
  },
  "image": "https://www.rewiredketamine.com/opengraph-image.png"
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I have to watch my loved one the whole time during an at-home dose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Stay in the home, check in from time to time, and make sure they do not drive or do anything risky until the effects have worn off and they feel normal again."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if something seems wrong?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call our clinic for non-urgent questions. Call 911 for chest pain, trouble breathing, a seizure, fainting, or if they cannot be woken."
      }
    },
    {
      "@type": "Question",
      "name": "Can I change the dose if it does not seem to be working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Only our medical team changes doses. Call us and we will review the plan."
      }
    }
  ]
};

export default function CaregiversGuideAtHomeKetaminePage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">A Caregiver’s Guide to At-Home Ketamine Treatment</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Practical ways to support someone you love through at-home ketamine in Florida, and how to look after yourself too.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>When someone you love starts <Link href="/services/home-ketamine" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">at-home ketamine treatment</Link>, you may be asked to be nearby during their doses. That can feel like a big responsibility. It does not need to be. Your role is simple: help keep the setting safe and calm, and know when to reach out.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Before the first dose</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Read the instructions from our team together, including the dose, timing, and what to avoid.</li>
              <li>Pick a quiet, comfortable room with a place to lie down.</li>
              <li>Save our number, (305) 676-6070, in your phone.</li>
              <li>Agree ahead of time on how much they want you to talk or stay quiet.</li>
            </ul>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">During a dose</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Stay in the home and check in from time to time. You do not need to watch every minute.</li>
              <li>Keep things calm: dim lights, low noise, no visitors.</li>
              <li>Make sure they do not drive, cook, swim, or handle anything risky until the effects have fully worn off and they feel normal again.</li>
              <li>Offer reassurance if they feel unsettled. The effects are temporary.</li>
            </ul>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Medication safety</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Store the medication out of sight and out of reach of children, guests, and pets.</li>
              <li>Never change the dose or give extra doses. Dose changes are decided by our medical team.</li>
              <li>Never share the medication with anyone else.</li>
            </ul>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">When to call</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Call our clinic if you have questions or something seems off but not urgent, such as nausea, unusual confusion that lasts, or a lot of distress afterward.</p>
            <p>Call 911 right away for chest pain, trouble breathing, a seizure, fainting, or if they cannot be woken. If they talk about harming themselves, call or text 988 or call 911.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">After the dose</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Many people feel tired and want to rest. Some want to talk about the experience, and some do not. Follow their lead. Integration, making sense of what came up, is part of treatment, and our team and their therapist can help with it.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Take care of yourself</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Supporting someone with depression, anxiety, or trauma is hard work. It is okay to have your own feelings about it, and to ask for help. You can talk to your own doctor or therapist, and you are welcome to call us with questions about the process.</p>
            <p>Want the bigger picture? Read <Link href="/content/blog/at-home-ketamine-treatment-in-florida" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">At-Home Ketamine Treatment in Florida: Options, Safety, and Cost</Link>.</p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do I have to watch my loved one the whole time during an at-home dose?</h3>
              <p className="text-[#555] leading-relaxed">No. Stay in the home, check in from time to time, and make sure they do not drive or do anything risky until the effects have worn off and they feel normal again.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">What should I do if something seems wrong?</h3>
              <p className="text-[#555] leading-relaxed">Call our clinic for non-urgent questions. Call 911 for chest pain, trouble breathing, a seizure, fainting, or if they cannot be woken.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can I change the dose if it does not seem to be working?</h3>
              <p className="text-[#555] leading-relaxed">No. Only our medical team changes doses. Call us and we will review the plan.</p>
            </div>
          </div>

          <p className="text-sm text-[#777] mt-12 leading-relaxed">
            This article is for general education and is not medical advice. Ketamine is not right for everyone. A medical evaluation decides whether it is appropriate for you. If you are in crisis, call or text 988 (Suicide &amp; Crisis Lifeline) or call 911.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation at our locally owned Aventura clinic. No pressure — just honest answers and a clear path forward. ¡Hablamos Español!</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
          <p className="text-white/70 mt-6">Call or text <a href="tel:+13056766070" className="underline hover:text-[#C9A66B]">(305) 676-6070</a> · Aventura, FL</p>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}
