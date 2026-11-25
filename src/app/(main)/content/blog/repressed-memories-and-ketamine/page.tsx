import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Repressed Memories and Ketamine: What to Know",
  "description": "Can ketamine bring up repressed memories? What people sometimes notice in sessions, what the research does and does not show, and how we support you in Aventura. ¡Hablamos Español!",
  "mainEntityOfPage": "https://www.rewiredketamine.com/content/blog/repressed-memories-and-ketamine",
  "url": "https://www.rewiredketamine.com/content/blog/repressed-memories-and-ketamine",
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
      "name": "Can ketamine bring back repressed memories?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ketamine is not a memory-recovery treatment. Some people notice old memories or feelings during a session, and many do not. Anything that comes up is best explored with a therapist rather than taken as fact."
      }
    },
    {
      "@type": "Question",
      "name": "What if something upsetting comes up during my session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team is nearby throughout, and fully guided sessions are available. After the session we make time to talk, and we can help you find a therapist for integration."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a therapist to do ketamine treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is not always required, but we recommend it, especially if you have a trauma history. We offer talk therapy and can coordinate with your current therapist."
      }
    }
  ]
};

export default function RepressedMemoriesAndKetaminePage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Repressed Memories and Ketamine: What to Know</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            An honest look at memories and emotions that can surface during ketamine sessions, and how we support you through them.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>One of the questions we hear most at our Aventura clinic is whether ketamine can “unlock” repressed memories. It is an understandable question. Many people who come to us carry experiences they have never fully talked about, and they want to know what might come up.</p>
            <p>The honest answer is that ketamine is not a tool for recovering memories, and we do not use it that way. What some people do describe is that old feelings, images, or memories feel closer to the surface during or after a session. Our job is to make sure that, if that happens, you are not alone with it.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What people sometimes notice</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Ketamine changes how the brain processes information for a short time. During a session, some people feel more distance from painful material, as if they can look at it without being overwhelmed. Others notice emotions they usually keep at arm’s length. Some people notice nothing like this at all.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A memory or feeling from years ago coming to mind</li>
              <li>Feeling calmer while thinking about something that is usually hard to face</li>
              <li>Strong emotion, tears, or relief, sometimes without a clear reason</li>
              <li>New ways of seeing an old situation</li>
            </ul>
            <p>None of these are guaranteed, and none of them are a sign that treatment is or is not working.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What the research does and does not show</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>Researchers are studying how ketamine affects learning and memory, including whether it may help the brain update the emotional charge of a painful memory when it is paired with therapy. This work is early, and the studies so far are small. It does not show that ketamine reveals hidden memories, and it does not show that anything recalled during a session is accurate.</p>
            <p>Memory is not a recording. Anything that comes up in an altered state should be treated as something to explore with a therapist, not as proof of what happened.</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">How we support you</h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Before:</strong> a medical and mental health evaluation, and a conversation about your history and what you hope for.</li>
              <li><strong>During:</strong> a private room, monitoring, and a team member nearby. Fully guided sessions are available if you want someone with you the whole time.</li>
              <li><strong>After:</strong> time to rest and talk, and integration support so you can make sense of what came up. We can connect you with <Link href="/services/talk-therapy" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">talk therapy</Link> if you do not already have a therapist.</li>
            </ul>
            <p>If you are living with trauma, our <Link href="/treatments/ptsd" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">PTSD page</Link> explains how ketamine may fit into a broader plan. Ketamine is not FDA-approved for PTSD, so this use is off-label and decided case by case.</p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Can ketamine bring back repressed memories?</h3>
              <p className="text-[#555] leading-relaxed">Ketamine is not a memory-recovery treatment. Some people notice old memories or feelings during a session, and many do not. Anything that comes up is best explored with a therapist rather than taken as fact.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">What if something upsetting comes up during my session?</h3>
              <p className="text-[#555] leading-relaxed">Our team is nearby throughout, and fully guided sessions are available. After the session we make time to talk, and we can help you find a therapist for integration.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do I need a therapist to do ketamine treatment?</h3>
              <p className="text-[#555] leading-relaxed">It is not always required, but we recommend it, especially if you have a trauma history. We offer <Link href="/services/talk-therapy" className="text-[#0B1D36] font-semibold underline decoration-[#C9A66B] underline-offset-4 hover:text-[#C9A66B]">talk therapy</Link> and can coordinate with your current therapist.</p>
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
