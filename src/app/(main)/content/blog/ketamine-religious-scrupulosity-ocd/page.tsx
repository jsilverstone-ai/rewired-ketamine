import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Religious Scrupulosity OCD and Ketamine",
  "description": "Scrupulosity is OCD focused on religious or moral fears. How ketamine may fit alongside ERP therapy, with respect for your faith, at our Aventura clinic. ¡Hablamos Español!",
  "mainEntityOfPage": "https://www.rewiredketamine.com/content/blog/ketamine-religious-scrupulosity-ocd",
  "url": "https://www.rewiredketamine.com/content/blog/ketamine-religious-scrupulosity-ocd",
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
      "name": "What is religious scrupulosity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scrupulosity is OCD focused on religious or moral fears, such as worrying about sin or repeating prayers until they feel right. It can affect people of any faith."
      }
    },
    {
      "@type": "Question",
      "name": "Can ketamine help scrupulosity OCD?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ketamine is used off-label for OCD. Early research suggests it may ease symptoms for some people, usually alongside ERP therapy. A medical evaluation decides whether it is appropriate for you."
      }
    },
    {
      "@type": "Question",
      "name": "Will treatment conflict with my religious practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treatment targets OCD, not your beliefs. We are glad to plan around observances and to coordinate with your therapist or religious leader if you want."
      }
    }
  ]
};

export default function KetamineReligiousScrupulosityOcdPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Religious Scrupulosity OCD and Ketamine</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            When faith becomes a source of fear instead of comfort. How ketamine may fit alongside therapy, with respect for your beliefs.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Scrupulosity is a form of OCD where the obsessions focus on religion or morality. It can show up in any faith. Aventura and South Florida are home to Jewish, Catholic, Christian, Muslim, and many other communities, and we see people from all of them.</p>
            <p>People with scrupulosity are often deeply committed to their faith. That is part of what makes it so painful. The fear is not about believing too little. It is about never feeling sure you have done enough, or done it right.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What scrupulosity can look like</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Repeating prayers or blessings until they feel “just right”</li>
              <li>Constant worry about having sinned, offended God, or broken a rule</li>
              <li>Fear of impure or blasphemous thoughts, and trying hard to push them away</li>
              <li>Asking clergy or family again and again for reassurance</li>
              <li>Spending hours on rituals in a way that crowds out the rest of life</li>
            </ul>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">First-line treatment comes first</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>The best-studied treatment for OCD, including scrupulosity, is exposure and response prevention (ERP), a type of therapy, often combined with medication. If you have not tried ERP with a therapist who understands scrupulosity, that is usually the place to start.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Where ketamine may fit</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Ketamine is not FDA-approved for OCD, so using it for OCD is off-label. Early research suggests it may ease obsessive symptoms for some people for a period of time, and some clinicians use it to help people engage more fully with ERP. It is not a replacement for therapy, and results vary.</p>
            <p>Our <Link href="/treatments/ocd" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">OCD page</Link> explains how we evaluate whether ketamine is appropriate and what sessions look like.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Respect for your faith</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>The goal of treatment is to reduce OCD’s hold on you, not to change what you believe.</li>
              <li>If you want, we can coordinate with your therapist, and you are welcome to involve your rabbi, priest, pastor, or imam in your support.</li>
              <li>Tell us about holidays, fasts, or observances so we can plan sessions around them.</li>
              <li>Care is private, and we offer it in English and Spanish.</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">What is religious scrupulosity?</h3>
              <p className="text-[#555] leading-relaxed">Scrupulosity is OCD focused on religious or moral fears, such as worrying about sin or repeating prayers until they feel right. It can affect people of any faith.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can ketamine help scrupulosity OCD?</h3>
              <p className="text-[#555] leading-relaxed">Ketamine is used off-label for OCD. Early research suggests it may ease symptoms for some people, usually alongside ERP therapy. A medical evaluation decides whether it is appropriate for you.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Will treatment conflict with my religious practice?</h3>
              <p className="text-[#555] leading-relaxed">Treatment targets OCD, not your beliefs. We are glad to plan around observances and to coordinate with your therapist or religious leader if you want.</p>
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
