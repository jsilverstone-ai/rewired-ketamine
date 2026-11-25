import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Ketamine for PTSD: A Guide for First Responders and Veterans in Florida",
  "description": "A guide for Florida firefighters, police, EMS, and veterans considering ketamine for PTSD: screening, confidentiality, what sessions look like, and costs. Aventura clinic. ¡Hablamos Español!",
  "mainEntityOfPage": "https://www.rewiredketamine.com/content/blog/ketamine-ptsd-first-responders-veterans-florida",
  "url": "https://www.rewiredketamine.com/content/blog/ketamine-ptsd-first-responders-veterans-florida",
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
      "name": "Can first responders and veterans get ketamine therapy for PTSD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, after a medical evaluation. Ketamine is used off-label for PTSD, usually alongside trauma-focused therapy. It is not right for everyone, and the evaluation decides whether it is appropriate."
      }
    },
    {
      "@type": "Question",
      "name": "Will my department or the VA find out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your care is private. We do not contact employers or the VA. If you use insurance, we can walk you through what is billed before you start."
      }
    },
    {
      "@type": "Question",
      "name": "Can I go to work after a session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Plan for the rest of the day off, and do not drive until the next day. You will need someone to take you home after an infusion."
      }
    }
  ]
};

export default function KetaminePtsdFirstRespondersVeteransPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ketamine for PTSD: A Guide for First Responders and Veterans in Florida</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            For firefighters, police officers, EMS crews, dispatchers, and veterans who have tried the usual options and want to know what else is out there.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>People who run toward emergencies carry a lot home with them. Years of calls, deployments, shift work, and the pressure to stay steady for everyone else can add up. Many of the first responders and veterans we meet in Aventura have already done therapy, tried medication, or both, and are still struggling with sleep, anger, numbness, or memories that will not settle.</p>
            <p>Ketamine is one option some of them explore. It is not a cure, and it is not right for everyone. Here is what we want you to know before you decide.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Is ketamine approved for PTSD?</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>No. Ketamine is not FDA-approved for PTSD, so using it for PTSD is off-label. Researchers are studying it for trauma, and some people find it helpful as part of a broader plan that includes trauma-focused therapy. Spravato (esketamine) is FDA-approved for treatment-resistant depression and for depression with suicidal thoughts, which many people with PTSD also live with. We will talk through which option, if any, fits your situation.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Confidentiality</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>We know many first responders worry about how treatment could affect their job. Your care here is private and protected by medical privacy law. We do not contact your department or command. If you choose to use insurance, we can explain what gets billed and how before you decide.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What the process looks like</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consult and screening:</strong> your history, current medications, blood pressure, sleep, substance use, and what you want to change.</li>
              <li><strong>A plan:</strong> in-clinic IV sessions are the most common starting point for PTSD. Fully guided sessions are available if you want someone with you the whole time.</li>
              <li><strong>Sessions:</strong> a private room with monitoring. You will need a ride home and should not drive or work until the next day.</li>
              <li><strong>Integration:</strong> making sense of what comes up, ideally with a trauma-informed therapist. We can coordinate with yours or help you find one.</li>
            </ul>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Shift work and scheduling</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Rotating shifts make consistency hard. Tell us your schedule up front so we can plan sessions around it, including time off afterward. Plan for the rest of the day off after each infusion.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Cost and coverage</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>IV ketamine is generally cash-pay, and we provide a superbill you can submit for possible out-of-network reimbursement. Spravato is billed through insurance with several major plans. See our <Link href="/services/ketamine-insurance" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">ketamine insurance page</Link> and <Link href="/services/ketamine-therapy-cost" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">cost page</Link> for details.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">If you need help right now</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>If you are in crisis, call or text 988. Veterans can press 1 after dialing 988 to reach the Veterans Crisis Line. If you are in immediate danger, call 911.</p>
            <p>Read more on our <Link href="/treatments/ptsd" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">PTSD treatment page</Link>, or about <Link href="/content/blog/what-does-ketamine-therapy-feel-like" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">what a session feels like</Link>.</p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can first responders and veterans get ketamine therapy for PTSD?</h3>
              <p className="text-[#555] leading-relaxed">Yes, after a medical evaluation. Ketamine is used off-label for PTSD, usually alongside trauma-focused therapy. It is not right for everyone, and the evaluation decides whether it is appropriate.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Will my department or the VA find out?</h3>
              <p className="text-[#555] leading-relaxed">Your care is private. We do not contact employers or the VA. If you use insurance, we can walk you through what is billed before you start.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can I go to work after a session?</h3>
              <p className="text-[#555] leading-relaxed">No. Plan for the rest of the day off, and do not drive until the next day. You will need someone to take you home after an infusion.</p>
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
