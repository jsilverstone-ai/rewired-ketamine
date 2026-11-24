import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      
      <SiteHeader />
      {/* ===== HERO ===== */}
      <section id="main-content" className="bg-[#0B1D36] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Spravato (esketamine) in Aventura</h1>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            An FDA-approved nasal spray for adults with treatment-resistant depression, given in our REMS-certified clinic and monitored on site. Patients come from Miami, Fort Lauderdale, and South Florida.
          </p>
          <p className="text-[#C9A66B] font-semibold text-lg mb-8"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
            Ask about a Spravato consult
          </Link>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#0B1D36] text-center mb-6">What is Spravato?</h2>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/lUwX9q-Mu-0"
              title="Spravato at Rewired Ketamine in Aventura"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-[#666] text-center mt-4">Spravato is self-administered under observation. It is not taken home.</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-[#444] text-lg leading-relaxed space-y-6">
          <p>
            Spravato is the brand name for esketamine nasal spray, made by Johnson &amp; Johnson. It is not the same visit as an IV ketamine infusion. Prescribing at this clinic is led by our mental healthcare team. The office is REMS-certified, which is required before anyone can receive a dose.
          </p>
          <p>
            We are locally owned in Aventura. Our initial consult is always free. Spravato approval is dependant on your medical evaluation, chart review and insurance authorization.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#0B1D36] text-center mb-8">FDA approval, in plain language</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#eee]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0B1D36] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">What the FDA approved</th>
                </tr>
              </thead>
              <tbody className="text-[#444]">
                <tr className="border-t border-[#eee]">
                  <td className="px-4 py-4 align-top whitespace-nowrap">March 5, 2019</td>
                  <td className="px-4 py-4">Treatment-resistant depression in adults, with an oral antidepressant.</td>
                </tr>
                <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                  <td className="px-4 py-4 align-top whitespace-nowrap">August 3, 2020</td>
                  <td className="px-4 py-4">Depressive symptoms in adults with major depressive disorder and acute suicidal ideation or behavior, together with an oral antidepressant. Not proven to prevent suicide.</td>
                </tr>
                <tr className="border-t border-[#eee]">
                  <td className="px-4 py-4 align-top whitespace-nowrap">January 21, 2025</td>
                  <td className="px-4 py-4">Treatment-resistant depression in adults as monotherapy — an oral antidepressant is no longer required for that use.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#666] mt-4">Spravato is not approved for children.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#0B1D36] text-center mb-8">What a course looks like</h2>
          <p className="text-[#444] text-center mb-8">This follows the labeled schedule for treatment-resistant depression. Your clinician confirms the dose.</p>
          <div className="overflow-x-auto rounded-2xl border border-[#eee]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0B1D36] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Phase</th>
                  <th className="px-4 py-3 font-semibold">How often</th>
                  <th className="px-4 py-3 font-semibold">On site</th>
                </tr>
              </thead>
              <tbody className="text-[#444]">
                <tr className="border-t border-[#eee]">
                  <td className="px-4 py-4">Weeks 1–4</td>
                  <td className="px-4 py-4">Twice a week</td>
                  <td className="px-4 py-4">Nasal spray under observation, then at least 2 hours of monitoring. We can customize the treatment plan based on your needs.</td>
                </tr>
                <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                  <td className="px-4 py-4">Weeks 5–8</td>
                  <td className="px-4 py-4">Once a week</td>
                  <td className="px-4 py-4">Same observation and monitoring.</td>
                </tr>
                <tr className="border-t border-[#eee]">
                  <td className="px-4 py-4">Week 9 on</td>
                  <td className="px-4 py-4">Every 1–2 weeks</td>
                  <td className="px-4 py-4">Continued only if it is still appropriate. Spravato is not approved for home use.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#0B1D36] text-center mb-8">Insurance and approval</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#eee]">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0B1D36] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Step</th>
                  <th className="px-4 py-3 font-semibold">What usually happens</th>
                </tr>
              </thead>
              <tbody className="text-[#444]">
                <tr className="border-t border-[#eee]">
                  <td className="px-4 py-4 align-top">1. Consult</td>
                  <td className="px-4 py-4">History, current medicines, and whether Spravato matches an approved use.</td>
                </tr>
                <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                  <td className="px-4 py-4 align-top">2. Records</td>
                  <td className="px-4 py-4">Most plans want major depression that did not improve after at least two antidepressant trials, plus a depression score. We gather what your plan asks for.</td>
                </tr>
                <tr className="border-t border-[#eee]">
                  <td className="px-4 py-4 align-top">3. Prior authorization</td>
                  <td className="px-4 py-4">We submit to the plan. Approval is not guaranteed. Unfortunately, timing depends on the insurer.</td>
                </tr>
                <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                  <td className="px-4 py-4 align-top">4. First visit</td>
                  <td className="px-4 py-4">Only after authorization, in this certified setting.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#444] mt-6 leading-relaxed">
            We currently submit Spravato authorizations for Cigna, UnitedHealthcare, and Aetna and Blue Cross Blue Shield out of network. Other plans can be reviewed at the consult. Coverage, copays, and deductibles are set by your policy, not by the clinic.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start with a free consult</h2>
          <p className="text-xl text-white/80 mb-10">We will tell you if Spravato is an option and what your plan needs. ¡Hablamos Español!</p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition">
            BookFree Consultation
          </Link>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-6 bg-[#0B1D36] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to take the next step?</h2>
          <p className="text-xl text-white/80 mb-10">
            Book a free consultation. No pressure — just honest answers with industry-leading expertise. We will tell you if Spravato is an option and what your plan needs. ¡Hablamos Español!
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-10 py-4 rounded-full text-lg hover:bg-white transition"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>

{/* ===== FOOTER ===== */}
<SiteFooter />    
</main>
  );
}