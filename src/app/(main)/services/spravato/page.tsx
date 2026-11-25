import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { ReviewedBy, SourceList, EducationNote } from "@/components/tools/ReviewAndSources";
import { pageJsonLd } from "@/data/page-meta";
import type { Source } from "@/data/medical-review";

const TITLE = "Spravato (esketamine) in Aventura";
const DESCRIPTION =
  "Spravato (esketamine) at our REMS-certified Aventura clinic. FDA-approved for treatment-resistant depression in adults, used on its own or with an oral antidepressant. In-network with UnitedHealthcare, Cigna, and Aetna; Florida Blue is out-of-network.";

const SOURCES: Source[] = [
  {
    label: "SPRAVATO (esketamine) prescribing information, Janssen Pharmaceuticals. FDA-approved label via DailyMed (indications, REMS monitoring, dosing schedule, and driving precautions checked November 25, 2026).",
    href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed",
    site: "dailymed.nlm.nih.gov",
  },
  {
    label: "U.S. Food and Drug Administration. Supplemental approval letter for Spravato (esketamine) nasal spray, NDA 211243/S-016, January 17, 2025 (monotherapy for treatment-resistant depression in adults).",
    href: "https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2025/211243Orig1s016ltr.pdf",
    site: "accessdata.fda.gov",
  },
  {
    label: "MedlinePlus. Esketamine nasal spray: patient information.",
    href: "https://medlineplus.gov/druginfo/meds/a619017.html",
    site: "medlineplus.gov",
  },
];

const A = "text-[#C9A66B] font-semibold hover:underline";

export default function SpravatoPage() {
  const jsonLd = pageJsonLd({
    lang: "en",
    path: "/services/spravato",
    name: TITLE,
    description: DESCRIPTION,
    about: {
      "@type": "Substance",
      name: "Spravato (esketamine nasal spray)",
      nonProprietaryName: "esketamine",
      administrationRoute: "nasal",
      prescriptionStatus: "PrescriptionOnly",
    },
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Spravato", path: "/services/spravato" },
    ],
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
        <SiteHeader spanishHref="/es/services/spravato" />

        <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest uppercase text-sm mb-4">Aventura • South Florida</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{TITLE}</h1>
          <p className="text-xl text-white/85 max-w-3xl mx-auto mb-8">
            An FDA-approved nasal spray for adults with treatment-resistant depression, used on its own or with an oral
            antidepressant. Given in our REMS-certified clinic and monitored on site. Patients come from Miami, Fort
            Lauderdale, and South Florida.
          </p>
          <p className="text-[#C9A66B] font-semibold text-lg mb-8">
            <Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link>
          </p>
          <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-3 rounded-full hover:bg-white transition">
            Ask about a Spravato consult
          </Link>
        </section>

        <section id="main-content" className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <ReviewedBy lang="en" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-4 mb-5">What is Spravato?</h2>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-lg mb-6" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/lUwX9q-Mu-0"
                title="Spravato at Rewired Ketamine in Aventura"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-sm text-[#666] text-center mb-6">Spravato is self-administered under observation. It is not taken home.</p>
            <p className="text-[#555] mb-4">
              Spravato is the brand name for esketamine nasal spray, made by Johnson &amp; Johnson. It is not the same visit as an
              IV ketamine infusion. Prescribing at this clinic is led by our mental health team. The office is REMS-certified,
              which is required before anyone can receive a dose.
            </p>
            <p className="text-[#555] mb-4">
              We are locally owned in Aventura. Our initial consult is always free. Whether Spravato is appropriate depends on
              your medical evaluation, chart review, and insurance authorization.
            </p>
            <p className="text-[#555] mb-10">
              Spravato <strong>may help</strong> some adults with treatment-resistant depression. It does not work for everyone,
              and it is not a cure. Individual results vary.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Current FDA-approved uses</h2>
            <p className="text-[#555] mb-4">
              The current FDA label lists two uses in adults<sup><a href="#source-1" className={A}>[1]</a></sup>
              <sup><a href="#source-2" className={A}>[2]</a></sup>:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[#555] mb-6">
              <li>
                <strong>Treatment-resistant depression (TRD)</strong> — depression that has not improved enough after at least
                two oral antidepressants. Since January 17, 2025, Spravato may be used <strong>on its own or together with an
                oral antidepressant</strong> for this use.
              </li>
              <li>
                <strong>Depressive symptoms in adults with major depressive disorder (MDD) and acute suicidal ideation or
                behavior</strong>, <strong>together with an oral antidepressant</strong>. Spravato is not proven to prevent
                suicide, and it does not replace emergency care or hospitalization when those are needed.
              </li>
            </ul>
            <p className="text-[#555] mb-10">Spravato is not approved for children or adolescents.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">FDA approval history</h2>
            <p className="text-[#555] mb-4">This is the approval history. The current label is summarized above.</p>
            <div className="overflow-x-auto rounded-2xl border border-[#eee] mb-10">
              <table className="w-full text-left text-sm md:text-base">
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
                    <td className="px-4 py-4">
                      Depressive symptoms in adults with major depressive disorder and acute suicidal ideation or behavior,
                      together with an oral antidepressant. Not proven to prevent suicide.
                    </td>
                  </tr>
                  <tr className="border-t border-[#eee]">
                    <td className="px-4 py-4 align-top whitespace-nowrap">January 17, 2025</td>
                    <td className="px-4 py-4">
                      Treatment-resistant depression in adults as monotherapy — an oral antidepressant is no longer required
                      for that use<sup><a href="#source-2" className={A}>[2]</a></sup>.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">What a visit and a course look like</h2>
            <p className="text-[#555] mb-4">
              Because of the risks of sedation, dissociation, respiratory depression, and blood-pressure changes, Spravato is
              available only through a restricted program called the Spravato REMS. Our clinic is certified in that program
              <sup><a href="#source-1" className={A}>[1]</a></sup>
              <sup><a href="#source-3" className={A}>[3]</a></sup>.
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[#555] mb-6">
              <li>Plan to avoid food for at least 2 hours and liquids for at least 30 minutes before the dose.</li>
              <li>We check your blood pressure before the spray.</li>
              <li>You give yourself the nasal spray in the clinic, with our team guiding you.</li>
              <li>
                You stay for <strong>at least 2 hours of monitoring</strong> after each dose, until the team confirms you are
                stable enough to leave.
              </li>
              <li>
                Leave with someone who can drive. <strong>Do not drive or operate machinery until the next day, after a
                restful night of sleep.</strong>
              </li>
            </ol>
            <p className="text-[#555] mb-4">
              For treatment-resistant depression, the labeled schedule is twice a week in weeks 1–4, once a week in weeks 5–8,
              then every 1–2 weeks if it is still appropriate. Your clinician confirms the dose and the plan. Spravato is not
              approved for use at home.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-[#eee] mb-10">
              <table className="w-full text-left text-sm md:text-base">
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
                    <td className="px-4 py-4">Nasal spray under observation, then at least 2 hours of monitoring.</td>
                  </tr>
                  <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                    <td className="px-4 py-4">Weeks 5–8</td>
                    <td className="px-4 py-4">Once a week</td>
                    <td className="px-4 py-4">Same observation and monitoring.</td>
                  </tr>
                  <tr className="border-t border-[#eee]">
                    <td className="px-4 py-4">Week 9 on</td>
                    <td className="px-4 py-4">Every 1–2 weeks</td>
                    <td className="px-4 py-4">Continued only if it is still appropriate. Not for home use.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Insurance and prior authorization</h2>
            <p className="text-[#555] mb-4">
              We bill Spravato <strong>in-network with UnitedHealthcare, Cigna, and Aetna</strong>.{" "}
              <strong>Florida Blue (Blue Cross Blue Shield) is out-of-network</strong>. Other plans can be reviewed at the
              consult. Coverage is not guaranteed. Copays, coinsurance, and deductibles are set by your policy, not by the
              clinic. Prior authorization is usually required.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#555] mb-6">
              <li>
                <Link href="/services/ketamine-insurance" className={A}>Ketamine and Spravato insurance guide</Link>
              </li>
              <li>
                <Link href="/services/ketamine-insurance/spravato-unitedhealthcare" className={A}>UnitedHealthcare</Link>
                {" · "}
                <Link href="/services/ketamine-insurance/spravato-cigna" className={A}>Cigna</Link>
                {" · "}
                <Link href="/services/ketamine-insurance/spravato-aetna" className={A}>Aetna</Link>
              </li>
              <li>
                <Link href="/services/ketamine-insurance/spravato-florida-blue-bcbs" className={A}>Florida Blue (BCBS)</Link>
                {" · "}
                <Link href="/services/ketamine-insurance/spravato-medicare" className={A}>Medicare</Link>
                {" · "}
                <Link href="/services/ketamine-insurance/spravato-florida-medicaid" className={A}>Florida Medicaid</Link>
              </li>
              <li>
                <Link href="/tools/ketamine-cost-calculator" className={A}>Cost calculator</Link>
                {" · "}
                <Link href="/services/iv-ketamine-vs-spravato" className={A}>IV ketamine vs. Spravato</Link>
              </li>
            </ul>
            <div className="overflow-x-auto rounded-2xl border border-[#eee] mb-6">
              <table className="w-full text-left text-sm md:text-base">
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
                    <td className="px-4 py-4">
                      Most plans want major depression that did not improve after at least two antidepressant trials, plus a
                      depression score. We gather what your plan asks for.
                    </td>
                  </tr>
                  <tr className="border-t border-[#eee]">
                    <td className="px-4 py-4 align-top">3. Prior authorization</td>
                    <td className="px-4 py-4">We submit to the plan. Approval is not guaranteed. Timing depends on the insurer.</td>
                  </tr>
                  <tr className="border-t border-[#eee] bg-[#F8F5F0]">
                    <td className="px-4 py-4 align-top">4. First visit</td>
                    <td className="px-4 py-4">Only after authorization, in this certified setting.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D36] mt-14 mb-5">Common questions</h2>
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-6 border border-[#eee]">
                <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">Do I have to stay on an oral antidepressant?</h3>
                <p className="text-[#444] leading-relaxed">
                  Not always, and never stop a medicine on your own. For treatment-resistant depression, Spravato may be used
                  alone or with an oral antidepressant. For MDD with acute suicidal ideation or behavior, it is used with an
                  oral antidepressant. That decision is made with your clinician.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#eee]">
                <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">Can I take Spravato at home?</h3>
                <p className="text-[#444] leading-relaxed">
                  No. Under the REMS program it is only given in a certified clinic, with at least two hours of monitoring after
                  each dose.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-[#eee]">
                <h3 className="text-lg font-semibold text-[#0B1D36] mb-2">Can I drive myself home?</h3>
                <p className="text-[#444] leading-relaxed">
                  No. Arrange a driver. You should not drive or operate machinery until the next day after a restful night of
                  sleep.
                </p>
              </div>
            </div>

            <SourceList lang="en" sources={SOURCES} />
            <EducationNote lang="en" />
          </div>
        </section>

        <section className="py-16 px-6 bg-[#F8F5F0] text-center">
          <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">Ready to take the next step?</h2>
          <p className="text-lg text-[#555] mb-6 max-w-3xl mx-auto">
            Book a free consultation. No pressure — just honest answers. We will tell you if Spravato is an option and what
            your plan needs. ¡Hablamos Español!
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition"
          >
            Book Free Consultation
          </Link>
          <p className="mt-4 text-sm text-[#555]">
            Or call/text{" "}
            <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B] transition">(305) 676-6070</a>
          </p>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
