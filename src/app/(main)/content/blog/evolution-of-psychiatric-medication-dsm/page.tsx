import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function EvolutionOfPsychiatricMedicationDSMPage() {

  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />

      {/* HERO */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Evolution of Psychiatric Medication & the DSM
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            A clear look at how psychiatric diagnosis and medication have changed over time — and what it means for patients exploring newer options like ketamine for depression in Miami and Aventura.
          </p>
          <p className="text-[#C9A66B] font-bold text-lg md:text-xl"><Link href="/es" className="hover:underline">¡Hablamos Español!</Link></p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-[#444] space-y-6 text-lg leading-relaxed">
            <p>
              Understanding the history of psychiatric diagnosis and medication can help patients make more informed decisions about their care. At our locally owned <Link href="/" className="text-[#C9A66B] hover:underline">ketamine clinic in Aventura</Link>, we often speak with people who have tried multiple approaches and are looking for a clearer picture of how the field has evolved.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Early DSM editions and the psychoanalytic era
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              The first Diagnostic and Statistical Manual (DSM-I) was published in 1952 and was strongly influenced by psychoanalytic and psychodynamic thinking. DSM-II, released in 1968, continued in that tradition. Diagnosis at the time was more interpretive and less standardized than what most people encounter today.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            The 1950s medication revolution
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              A major shift occurred with the introduction of chlorpromazine (Thorazine). Synthesized in the early 1950s and brought into clinical use shortly afterward, it is widely regarded as the beginning of modern psychopharmacology. Its arrival is also closely linked to the broader movement of deinstitutionalization.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            DSM-III and the push for reliability
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              In 1980, DSM-III marked a significant break from earlier editions. It introduced more explicit, symptom-based, and “atheoretical” diagnostic criteria. The goal was to improve agreement between clinicians and to strengthen the scientific standing of psychiatry at a time when the field faced criticism over diagnostic consistency, professional legitimacy, and insurance requirements.
            </p>
            <p>
              While reliability improved for many categories, questions about long-term validity and real-world patient outcomes have continued for some diagnoses.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            The arrival of SSRIs
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Fluoxetine (Prozac) was approved in 1987 and entered the market in 1988. The rapid growth of SSRIs through the 1990s changed how depression and related conditions were commonly treated and discussed.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Where newer approaches fit
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Many people who come to us have already tried traditional medications. Some are exploring <Link href="/treatments/depression" className="text-[#C9A66B] hover:underline">ketamine for depression</Link> because earlier options did not provide enough relief. Fully guided sessions are available at our clinic.
            </p>
            <p>
              Understanding the history of diagnosis and medication can make the current landscape feel less confusing. It also highlights why individualized, carefully supervised care remains essential.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">
            Care at our Aventura clinic
          </h2>
          <div className="text-[#444] space-y-5 text-lg leading-relaxed">
            <p>
              Rewired Ketamine is a locally owned practice serving Miami, Fort Lauderdale, and South Florida. We focus on clear communication, safety, and supportive care for patients who are exploring whether ketamine therapy may be appropriate for them.
            </p>
            <p>
              If you have been searching for “ketamine therapy near me” or “ketamine for depression Miami,” we invite you to start with a free consultation. There is no pressure — just an opportunity to ask questions and learn more.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Why does the history of the DSM matter for patients today?</h3>
              <p className="text-[#555] leading-relaxed">It helps explain how diagnoses and treatment approaches have changed over time, and why some people continue to look for additional options when traditional methods have not been enough.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Are fully guided sessions available?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Fully guided sessions are available at our Aventura clinic for those who prefer additional support.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">Is this a local clinic?</h3>
              <p className="text-[#555] leading-relaxed">Yes. Rewired Ketamine is a locally owned ketamine clinic in Aventura serving Miami, Fort Lauderdale, and South Florida. ¡Hablamos Español!</p>
            </div>
          </div>
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