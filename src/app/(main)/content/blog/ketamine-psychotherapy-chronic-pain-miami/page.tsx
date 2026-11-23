import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function KetaminePsychotherapyChronicPainPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Ketamine and Psychotherapy: A Combined Approach for Chronic Pain</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            New research explores pairing ketamine with psychotherapy for chronic neuropathic pain — and what it could mean for patients in Miami and Aventura.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              For many people living with chronic neuropathic pain, standard treatments do not always bring enough relief. A growing body of research is exploring whether combining ketamine with psychotherapy may offer a more complete path forward.
            </p>
            <p>
              A recent pilot study led by researchers at Unity Health Toronto and the University of Toronto examined this combined approach for chronic neuropathic pain. The work, highlighted by Medical Xpress, suggests that pairing ketamine with structured psychotherapy may help address both the physical and psychological dimensions of persistent pain.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Why Combine Ketamine and Psychotherapy?
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Ketamine is known for its rapid effects on the nervous system and its ability to support neuroplasticity — the brain’s capacity to form new connections. Psychotherapy, when timed thoughtfully around treatment, can help patients process insights, reduce fear around pain, and build more adaptive patterns.
            </p>
            <p>
              Together, the two approaches may create a window where meaningful change becomes more possible. This is especially relevant for individuals who have already tried multiple options without lasting improvement.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            What This Means for Patients Seeking Ketamine in Miami
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              At our locally owned clinic in Aventura, we regularly support patients from Miami, Fort Lauderdale, and across South Florida who are exploring <Link href="/treatments/chronic-pain" className="text-[#C9A66B] hover:underline">ketamine for chronic pain</Link>. Fully guided sessions are available, and many patients also benefit from integration support or talk therapy.
            </p>
            <p>
              If you have been searching for “ketamine miami,” “ketamine near me,” or “ketamine clinic florida,” it is worth knowing that care focused on both the biological and emotional aspects of pain is available locally.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            A Thoughtful, Individualized Path
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              There is no one-size-fits-all protocol. Every treatment plan is tailored. Some patients prefer fully guided sessions; others benefit from additional <Link href="/services/talk-therapy" className="text-[#C9A66B] hover:underline">talk therapy</Link> or integration support. Our team works in partnership with each person to determine what feels most supportive.
            </p>
            <p>
              Emerging research continues to reinforce what many clinicians already observe: when ketamine is paired with intentional psychological support, the potential for lasting change often expands.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Local Care in Aventura and South Florida
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Rewired Ketamine is a locally owned clinic serving Aventura, Miami, and the greater South Florida community. We offer fully guided sessions when desired, and we speak Spanish.
            </p>
            <p>
              If you are exploring ketamine treatment in Florida and want to understand whether a combined approach may be appropriate for you, we invite you to begin with a free consultation. There is no pressure — just a clear, compassionate conversation about your options.
            </p>
          </div>

          <p className="text-sm text-[#888] mt-12">
            Source: <a href="https://medicalxpress.com/news/2026-08-ketamine-psychotherapy-combined-approach-chronic.html" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">Medical Xpress – Ketamine and psychotherapy as a combined approach to chronic pain</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">Book a free consultation at our locally owned Aventura clinic. No pressure — just honest answers and a clear path forward. ¡Hablamos Español!</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">Book Free Consultation</Link>
        </div>
      </section>

      {/* FOOTER */}
      <SiteFooter />
    </main>
  );
}