import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Does Ketamine Lower Blood Pressure?",
  "description": "Ketamine usually raises blood pressure for a short time rather than lowering it. How we screen and monitor blood pressure at our Aventura clinic, and what to tell us. ¡Hablamos Español!",
  "mainEntityOfPage": "https://www.rewiredketamine.com/content/blog/does-ketamine-lower-blood-pressure",
  "url": "https://www.rewiredketamine.com/content/blog/does-ketamine-lower-blood-pressure",
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
      "name": "Does ketamine lower blood pressure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Ketamine usually raises blood pressure and heart rate for a short time during and soon after a dose. It is not a blood pressure treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Can I have ketamine therapy if I have high blood pressure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes. People with well-controlled blood pressure are often treated safely with monitoring. Uncontrolled high blood pressure or certain heart conditions may make ketamine inappropriate. The evaluation decides."
      }
    },
    {
      "@type": "Question",
      "name": "Should I take my blood pressure medication before my session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In most cases, yes. Keep taking it as prescribed unless your doctor or our team tells you otherwise."
      }
    }
  ]
};

export default function DoesKetamineLowerBloodPressurePage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Does Ketamine Lower Blood Pressure?</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Usually the opposite. Here is how ketamine affects blood pressure, and how we screen and monitor you.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>It is a common question, and the short answer is no. Ketamine does not lower blood pressure. At the doses used for mental health care, it usually raises blood pressure and heart rate for a short time during and soon after a dose. For most healthy people this rise is temporary and returns toward their usual level after the session.</p>
            <p>That is why blood pressure is one of the first things we look at before recommending ketamine, and one of the things we watch most closely during treatment.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Why ketamine raises blood pressure</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Ketamine stimulates the part of the nervous system that controls heart rate and blood vessel tone. The effect is strongest while the medication is active. How much it rises varies from person to person and depends on the dose, how fast it is given, and your health.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Who needs extra caution</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Ketamine may not be appropriate, or may need extra precautions, if you have:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>High blood pressure that is not well controlled</li>
              <li>A history of heart attack, stroke, aneurysm, or certain heart rhythm problems</li>
              <li>Heart failure or other significant heart or blood vessel disease</li>
              <li>Pregnancy, or conditions where a rise in pressure could be risky</li>
            </ul>
            <p>Having high blood pressure does not automatically rule you out. Many people with well-controlled blood pressure are treated safely. The evaluation decides, sometimes with input from your primary care doctor or cardiologist.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">How we monitor</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Before:</strong> we review your history and medications and check your blood pressure.</li>
              <li><strong>During an infusion:</strong> blood pressure and heart rate are monitored, and the team can slow or adjust the infusion.</li>
              <li><strong>After:</strong> we check again before you leave.</li>
              <li><strong>Spravato:</strong> the label requires blood pressure checks before and after each dose and observation for at least two hours.</li>
              <li><strong>At home:</strong> blood pressure history is a key part of screening. If it is a concern, we recommend <Link href="/services/ketamine-infusion" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">in-clinic care</Link> instead of <Link href="/services/home-ketamine" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">at-home treatment</Link>.</li>
            </ul>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What to tell us</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Every medication and supplement you take, including blood pressure medication</li>
              <li>Caffeine, energy drinks, stimulants, or decongestants, which can also raise blood pressure</li>
              <li>Any chest pain, fainting, or palpitations you have had</li>
              <li>Your home blood pressure readings, if you track them</li>
            </ul>
            <p>Unless your doctor tells you otherwise, keep taking your usual blood pressure medication on treatment days.</p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Does ketamine lower blood pressure?</h3>
              <p className="text-[#555] leading-relaxed">No. Ketamine usually raises blood pressure and heart rate for a short time during and soon after a dose. It is not a blood pressure treatment.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can I have ketamine therapy if I have high blood pressure?</h3>
              <p className="text-[#555] leading-relaxed">Sometimes. People with well-controlled blood pressure are often treated safely with monitoring. Uncontrolled high blood pressure or certain heart conditions may make ketamine inappropriate. The evaluation decides.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Should I take my blood pressure medication before my session?</h3>
              <p className="text-[#555] leading-relaxed">In most cases, yes. Keep taking it as prescribed unless your doctor or our team tells you otherwise.</p>
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
