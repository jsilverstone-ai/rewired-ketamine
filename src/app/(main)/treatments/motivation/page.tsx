import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RelatedQuestions from "@/components/RelatedQuestions";

export default function MotivationPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ketamine for Motivation</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-6">
            Supportive care for individuals seeking to reconnect with drive and purpose at our locally owned Aventura clinic.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-[#444]">
            <p className="text-xl leading-relaxed mb-8">
              Low motivation can make everyday tasks feel heavy and distant. At our locally owned clinic in Aventura, we offer ketamine therapy as a supportive option for individuals seeking to reconnect with drive and purpose.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">How Ketamine May Help with Motivation</h2>
            <p className="mb-6">
              Ketamine may support changes in brain pathways related to mood, reward, and motivation. Some people notice a renewed sense of energy and engagement more quickly than with traditional approaches.
            </p>
            <p className="mb-6">
              Fully guided sessions are available for those who prefer additional support during treatment. We focus on safety, comfort, and individualized care.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">When Other Efforts Have Not Been Enough</h2>
            <p className="mb-6">
              For individuals who continue to struggle with low motivation despite other treatments, ketamine therapy may offer another path forward. Results are often noticed more rapidly than with conventional methods.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Care at Our Aventura Clinic</h2>
            <p className="mb-6">
              As a locally owned practice serving Miami, Fort Lauderdale, and South Florida, we provide thoughtful, medically supervised care. ¡Hablamos Español!
            </p>
          </div>

          <div className="mt-14 bg-[#0B1D36] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to explore support for motivation?</h3>
            <p className="text-white/80 mb-6">Schedule a free consultation at our Aventura clinic.</p>
            <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is ketamine used when other treatments for motivation have not worked?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Ketamine is frequently considered for people who have not experienced enough relief with traditional approaches.</p>
            </div>

            <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available for motivation treatment at your Aventura clinic?</h3>
              <p className="text-[#555] leading-relaxed">Yes. At Rewired Ketamine in Aventura, fully guided sessions are available in a calm, monitored setting.</p>
            </div>

            <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Do you offer ketamine therapy for motivation to patients outside Aventura?</h3>
              <p className="text-[#555] leading-relaxed">Yes. We serve patients from Miami, Fort Lauderdale, and across South Florida from our Aventura location.</p>
            </div>

            <div className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">How is ketamine therapy for motivation different from traditional approaches?</h3>
              <p className="text-[#555] leading-relaxed">Most traditional approaches gradually influence specific systems over time. Ketamine interacts with the glutamate system and may support more rapid changes in mood and motivation for some individuals.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedQuestions path="/treatments/motivation" />

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}