import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";


const faqs: { q: string; a: string; link?: { text: string; href: string } }[] = [
  { q: "Does insurance cover ketamine therapy?", a: "It depends on the treatment. Spravato (esketamine) is FDA-approved for treatment-resistant depression and is often covered with prior authorization. IV ketamine is not FDA-approved for depression, and plans generally do not cover it. Coverage is never guaranteed and is set by your policy." },
  { q: "Which insurance plans does Rewired bill for Spravato?", a: "We bill Spravato in-network with UnitedHealthcare, Cigna, and Aetna. Other plans can be reviewed at your free consultation. Approval depends on your medical evaluation and your insurer’s prior authorization." },
  { q: "Is Florida Blue or BCBS accepted for Spravato?", a: "Blue Cross Blue Shield plans, including Florida Blue, are out-of-network for Spravato at Rewired. Some plans offer out-of-network benefits, but what they pay varies and is not guaranteed. Call the number on your card and ask us to review your plan at your consultation." },
  { q: "Does insurance cover IV ketamine?", a: "Generally no. IV ketamine for depression is off-label, and insurers typically do not pay for it, so it is cash-pay at Rewired. Some patients submit our superbill for possible out-of-network reimbursement." },
  { q: "What is a ketamine superbill, and will my insurer reimburse me?", a: "A superbill is a detailed statement of the services you received and what you paid. We give one to cash-pay patients so they can submit it to their insurer. Reimbursement is not guaranteed and depends on your plan’s out-of-network benefits and deductible." },
  { q: "Can using insurance cost more than paying cash?", a: "Sometimes, yes. Deductibles, copays, and coinsurance can add up, especially early in the plan year or on a short course. In other cases insurance costs less. Check your own plan. The examples on this page are hypothetical." },
  { q: "How much does IV ketamine cost without insurance?", a: "Our published 1-hour mental-health IV protocol is $440 for a single session and $2,300 for a package of 6. Guided and 2-hour options are listed on the cost page. A consultation is required before treatment.", link: { text: "cost page", href: "/services/ketamine-therapy-cost" } },
];

const insuranceJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://www.rewiredketamine.com/#clinic",
      name: "Rewired Ketamine",
      url: "https://www.rewiredketamine.com",
      telephone: "+1-305-676-6070",
      email: "info@rewiredketamine.com",
      image: "https://www.rewiredketamine.com/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2820 NE 214th Street, Suite 1002",
        addressLocality: "Aventura",
        addressRegion: "FL",
        postalCode: "33180",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 25.9730993, longitude: -80.1475594 },
      areaServed: ["Aventura", "Miami", "Fort Lauderdale", "South Florida"],
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.rewiredketamine.com/services/ketamine-insurance#webpage",
      url: "https://www.rewiredketamine.com/services/ketamine-insurance",
      name: "Ketamine & Spravato Insurance in Aventura | Rewired",
      headline: "Ketamine Therapy and Insurance in Aventura: What You Might Actually Pay",
      description: "Spravato is billed in-network with UnitedHealthcare, Cigna and Aetna. IV ketamine is cash-pay with a superbill. See how costs add up. ¡Hablamos Español!",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.rewiredketamine.com/#clinic" },
      about: [
        {
          "@type": "Substance",
          name: "Spravato (esketamine nasal spray)",
          nonProprietaryName: "esketamine",
          activeIngredient: "esketamine",
          administrationRoute: "nasal",
          prescriptionStatus: "PrescriptionOnly",
        },
        { "@type": "MedicalTherapy", name: "Intravenous ketamine infusion" },
      ],
      dateModified: "2026-11-23",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rewiredketamine.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.rewiredketamine.com/services" },
        { "@type": "ListItem", position: 3, name: "Ketamine Insurance", item: "https://www.rewiredketamine.com/services/ketamine-insurance" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function KetamineInsurancePage() {

  return (
    <>
    <JsonLd data={insuranceJsonLd} />
    <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
      <SiteHeader />

      <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
        <p className="text-[#C9A66B] font-semibold tracking-wide mb-3">AVENTURA • SOUTH FLORIDA</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Ketamine Therapy and Insurance in Aventura: What You Might Actually Pay</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-6">
          Plain answers on what insurance covers for Spravato and IV ketamine, and why using insurance is not always the cheaper path. Serving Miami, Fort Lauderdale, and South Florida.
        </p>
        <p className="text-[#C9A66B] font-bold text-lg"><Link href="/es#bienvenida" className="hover:underline">¡Hablamos Español!</Link></p>
      </section>

      {/* Content */}
      <section id="main-content" className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F8F5F0] border-l-4 border-[#C9A66B] rounded-2xl p-6 mb-8">
            <h2 className="font-semibold text-lg text-[#0B1D36] mb-3">Quick answer</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#555]"><li><strong>Spravato (esketamine nasal spray):</strong> FDA-approved and often covered with prior authorization. We bill in-network with <strong>UnitedHealthcare, Cigna, and Aetna</strong>. <strong>BCBS, including Florida Blue, is out-of-network</strong> for Spravato. Approval is never guaranteed, and your policy sets your costs.</li><li><strong>IV ketamine:</strong> <strong>cash-pay.</strong> It is not FDA-approved for depression, and plans generally do not cover it. We give cash-pay patients a <strong>superbill</strong> to submit to their insurer for possible out-of-network reimbursement. Reimbursement is not promised.</li><li><strong>Insurance can cost more than you expect.</strong> Deductibles, copays, and coinsurance can add up quickly. The examples below are hypothetical, so check your own plan.</li></ul>
          </div>
          <p className="text-[#555] mb-4">We would rather you understand the numbers before you book than be surprised after your first visit. This page explains how coverage works for both treatments, shows with hypothetical examples how a plan can change your cost, and lists what to ask your insurer. For published IV pricing, see our <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">ketamine therapy cost</Link> page.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Spravato and insurance</h2>
          <p className="text-[#555] mb-4">Spravato is the brand name for esketamine nasal spray. The FDA label lists two uses in adults: treatment-resistant depression (as monotherapy or with an oral antidepressant), and depressive symptoms in major depressive disorder with acute suicidal ideation or behavior (together with an oral antidepressant) <sup><a href="#source-1" className="text-[#C9A66B] hover:underline">[1]</a></sup>. Because of the risks of sedation and dissociation, it is available only through a restricted program, the Spravato REMS. Patients must be monitored for at least two hours after each dose <sup><a href="#source-1" className="text-[#C9A66B] hover:underline">[1]</a></sup>. Our clinic is REMS-certified. See our <Link href="/services/spravato" className="text-[#C9A66B] font-semibold hover:underline">Spravato in Aventura</Link> page for how treatment works.</p>
          <p className="text-[#555] mb-4"><strong>Who we bill.</strong> Rewired Ketamine bills Spravato <strong>in-network with UnitedHealthcare, Cigna, and Aetna.</strong> <strong>Blue Cross Blue Shield plans, including Florida Blue, are out-of-network</strong> for Spravato at our clinic. Some plans have out-of-network benefits and some do not, and what yours pays depends on your policy. Other plans can be reviewed at your consultation.</p>
          <p className="text-[#555] mb-4"><strong>Prior authorization.</strong> This means your plan must approve a service before you receive it <sup><a href="#source-2" className="text-[#C9A66B] hover:underline">[2]</a></sup>. Published coverage policies from UnitedHealthcare, Aetna, and Cigna each require prior authorization or precertification for Spravato <sup><a href="#source-3" className="text-[#C9A66B] hover:underline">[3]</a></sup><sup><a href="#source-4" className="text-[#C9A66B] hover:underline">[4]</a></sup><sup><a href="#source-5" className="text-[#C9A66B] hover:underline">[5]</a></sup>. Their criteria typically include a diagnosis of treatment-resistant or severe major depression, a history of inadequate response to at least two antidepressants, a documented depression rating, and a prescriber who is, or consults with, a psychiatrist <sup><a href="#source-3" className="text-[#C9A66B] hover:underline">[3]</a></sup><sup><a href="#source-4" className="text-[#C9A66B] hover:underline">[4]</a></sup><sup><a href="#source-5" className="text-[#C9A66B] hover:underline">[5]</a></sup>. Details differ by insurer and plan and change over time, so treat this as a general picture, not a promise about your plan. Medicare and Medicaid follow separate rules.</p>
          <p className="text-[#555] mb-4"><strong>What happens at Rewired.</strong></p>
          <ol className="list-decimal pl-5 space-y-2 text-[#555] mb-4">
            <li><strong>Free consultation.</strong> We review your history, medications, and whether Spravato matches an approved use.</li>
            <li><strong>Records.</strong> We gather what your plan asks for.</li>
            <li><strong>Prior authorization.</strong> We submit it to your plan. Approval is not guaranteed, and timing depends on the insurer.</li>
            <li><strong>First visit,</strong> only after authorization.</li>
          </ol>
          <p className="text-[#555] mb-4"><strong>Visit count affects cost.</strong> The labeled schedule for treatment-resistant depression is twice a week in weeks 1–4, once a week in weeks 5–8, then every one to two weeks if appropriate <sup><a href="#source-1" className="text-[#C9A66B] hover:underline">[1]</a></sup>. That is 12 visits in the first two months, and your deductible, copay, or coinsurance can apply to each one.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">IV ketamine and the superbill</h2>
          <p className="text-[#555] mb-4"><strong>IV ketamine is cash-pay at Rewired.</strong> Ketamine injection is FDA-approved as an anesthetic. The FDA states that ketamine is not approved for the treatment of any psychiatric disorder <sup><a href="#source-6" className="text-[#C9A66B] hover:underline">[6]</a></sup>. Using it for depression or other mental health conditions is off-label. Insurers generally do not pay for off-label use. One national insurer’s published policy, for example, lists ketamine injection for psychiatric disorders as investigational and not proven or medically necessary <sup><a href="#source-3" className="text-[#C9A66B] hover:underline">[3]</a></sup>. That is why IV ketamine is self-pay here.</p>
          <p className="text-[#555] mb-4">Our published 1-hour mental-health IV protocol is <strong>$440 for a single session</strong> and <strong>$2,300 for a package of 6</strong>. Guided sessions, the 2-hour options, and the other packages are on the <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">ketamine therapy cost</Link> page. To compare both treatments, see <Link href="/services/iv-ketamine-vs-spravato" className="text-[#C9A66B] font-semibold hover:underline">IV ketamine vs Spravato</Link>.</p>
          <p className="text-[#555] mb-4"><strong>What is a superbill?</strong> It is a detailed statement of the services you received and what you paid. We give one to every cash-pay patient. You can submit it to your insurer to ask whether any of the cost can be reimbursed under your plan’s out-of-network benefits. The insurer decides. You submit the claim, and we cannot predict what, if anything, your plan will pay.</p>
          <p className="text-[#555] mb-4">Reimbursement depends on whether your plan has out-of-network benefits, whether it treats IV ketamine for your condition as an eligible service, whether you have met your out-of-network deductible, your out-of-network coinsurance, and the plan’s allowed amount, which can be lower than what you paid <sup><a href="#source-7" className="text-[#C9A66B] hover:underline">[7]</a></sup>. For many patients the answer will be little or nothing, so please do not count on reimbursement when deciding whether IV ketamine is right for you.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Why going through insurance can cost more than you expect</h2>
          <p className="text-[#555] mb-4">Using insurance does not always mean paying less. Here are the terms that decide what you owe:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
            <li><strong>Deductible:</strong> what you pay for covered services each year before your plan starts to pay <sup><a href="#source-8" className="text-[#C9A66B] hover:underline">[8]</a></sup>.</li>
            <li><strong>Copayment:</strong> a fixed amount, such as $30, for a covered service <sup><a href="#source-9" className="text-[#C9A66B] hover:underline">[9]</a></sup>.</li>
            <li><strong>Coinsurance:</strong> a percentage of the cost, such as 20%, that you pay after your deductible is met <sup><a href="#source-10" className="text-[#C9A66B] hover:underline">[10]</a></sup>.</li>
            <li><strong>Allowed amount:</strong> the most your plan will recognize for a service. Providers outside your network may bill you the difference <sup><a href="#source-7" className="text-[#C9A66B] hover:underline">[7]</a></sup><sup><a href="#source-11" className="text-[#C9A66B] hover:underline">[11]</a></sup>.</li>
            <li><strong>Out-of-pocket maximum:</strong> the most you pay for covered services in a plan year. It does not include out-of-network care, services your plan does not cover, or costs above the allowed amount <sup><a href="#source-12" className="text-[#C9A66B] hover:underline">[12]</a></sup>.</li>
            <li><strong>Out-of-network coinsurance:</strong> the percentage you pay providers outside your plan’s network, usually more than in-network coinsurance <sup><a href="#source-13" className="text-[#C9A66B] hover:underline">[13]</a></sup>.</li>
          </ul>
          <p className="text-[#555] mb-4">The examples below are <strong>hypothetical examples with round numbers</strong>. They are not Rewired prices, not any insurer’s rates, and not a prediction for your plan.</p>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Hypothetical Example 1: a deductible and coinsurance</h3>
            <p className="text-[#555]">Suppose your plan has a $3,000 deductible, 20% coinsurance, and a $6,000 in-network out-of-pocket maximum. Suppose the plan’s allowed amount for each treatment visit is $1,000. You would pay the full $1,000 for each of your first three visits, which satisfies the deductible. After that you would pay 20%, or $200, per visit. For the 8 visits in the first four weeks, your share would be $3,000 + (5 × $200) = <strong>$4,000</strong>. Over all 12 visits in the first two months it would be <strong>$4,800</strong>.</p>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Hypothetical Example 2: a copay plan</h3>
            <p className="text-[#555]">Suppose a different plan charges a flat $50 copay per visit after you have met your deductible. The same 12 visits would cost <strong>$600</strong>.</p>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Hypothetical Example 3: insurance versus cash</h3>
            <p className="text-[#555]">Suppose your plan has a $5,000 deductible and 20% coinsurance, and the allowed amount is $1,000 per visit. Suppose a cash price for a similar service is $600 per visit. For 4 visits, insurance would cost you <strong>$4,000</strong> (you are still inside the deductible) and cash would cost <strong>$2,400</strong>. For 12 visits, insurance would cost $5,000 + (7 × $200) = <strong>$6,400</strong> and cash would cost <strong>$7,200</strong>. A short course can cost more through insurance, and a longer one less, depending on the plan.</p>
          </div>
          <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
            <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Hypothetical Example 4: a superbill</h3>
            <p className="text-[#555]">Suppose you pay $2,000 in cash for a course of IV sessions and send the superbill to your insurer. Suppose your plan has a $1,000 out-of-network deductible you have not yet met, 50% out-of-network coinsurance, and an allowed amount of $1,200 for those services. The plan would count $1,200 of your $2,000. After the $1,000 deductible, 50% of the remaining $200 is <strong>$100</strong> back, so your net cost would be $1,900. If your plan has no out-of-network benefits, or does not cover the service, the reimbursement would be <strong>$0</strong>.</p>
          </div>
          <p className="text-[#555] mb-4"><strong>Takeaway.</strong> Deductibles usually reset each plan year, so the month you start matters. The only reliable numbers come from your own plan.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Spravato guides by insurer</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4"><li><Link href="/services/ketamine-insurance/spravato-unitedhealthcare" className="text-[#C9A66B] font-semibold hover:underline">UnitedHealthcare</Link></li><li><Link href="/services/ketamine-insurance/spravato-cigna" className="text-[#C9A66B] font-semibold hover:underline">Cigna</Link></li><li><Link href="/services/ketamine-insurance/spravato-aetna" className="text-[#C9A66B] font-semibold hover:underline">Aetna</Link></li><li><Link href="/services/ketamine-insurance/spravato-florida-blue-bcbs" className="text-[#C9A66B] font-semibold hover:underline">Florida Blue / BCBS</Link></li><li><Link href="/services/ketamine-insurance/spravato-medicare" className="text-[#C9A66B] font-semibold hover:underline">Medicare</Link></li><li><Link href="/services/ketamine-insurance/spravato-florida-medicaid" className="text-[#C9A66B] font-semibold hover:underline">Florida Medicaid</Link></li></ul>
          <p className="text-[#555] mb-4">Prior authorization steps and what to ask, plan by plan. You can also use our <Link href="/tools/ketamine-cost-calculator" className="text-[#C9A66B] font-semibold hover:underline">ketamine cost calculator</Link> and <Link href="/services/hsa-fsa-ketamine" className="text-[#C9A66B] font-semibold hover:underline">HSA/FSA guide</Link>.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Questions to ask your insurer</h2>
          <p className="text-[#555] mb-4">Call the member services number on your insurance card and ask:</p>
          <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
            <li>Is Spravato covered under my plan, under my medical or pharmacy benefit, and does it require prior authorization?</li>
            <li>Is Rewired Ketamine, a REMS-certified clinic in Aventura, in-network for my plan?</li>
            <li>What are my deductible, copay, and coinsurance for this service? How much of my deductible have I met this year?</li>
            <li>What is my out-of-pocket maximum, and how much have I used?</li>
            <li>What documentation do you require, and how long does prior authorization take and last?</li>
            <li>Do I have out-of-network benefits? What are my out-of-network deductible and coinsurance, and how is the allowed amount set?</li>
            <li>Will you consider reimbursing IV ketamine for my diagnosis if I submit a superbill? Is there a claim form or deadline?</li>
            <li>When does my plan year reset?</li>
          </ul>
          <p className="text-[#555] mb-4">Ask for a call reference number.</p>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">How to verify your benefits with Rewired</h2>
          <ol className="list-decimal pl-5 space-y-2 text-[#555] mb-4">
            <li><strong>Book a free consultation</strong> and tell us your insurance plan.</li>
            <li><strong>Bring your card.</strong> We use your plan details to start the Spravato prior authorization process.</li>
            <li><strong>Review your numbers together.</strong> Your insurer, not the clinic, sets your copay, coinsurance, and deductible. If your costs look higher than expected, or Spravato is not covered, we will tell you.</li>
          </ol>
          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Local care in Aventura</h2>
          <p className="text-[#555] mb-4">Our clinic is located at 2820 NE 214th Street, Suite 1002, Aventura, FL 33180 — about 25–45 minutes from the Miami area and about 20–35 minutes from Fort Lauderdale, depending on traffic. Spanish-language support is available. We are locally owned, not a multi-location chain.</p>
          <p className="text-[#555] mb-4">Rewired Ketamine is listed as the #1 ketamine clinic in Miami on HealingMaps’ 2026 review of clinics in the area. You can read the list here: <a href="https://healingmaps.com/the-best-ketamine-clinics-in-miami/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">8 Best Ketamine Clinics in Miami (2026)</a>.</p>
          <p className="text-[#555] mb-4">Learn more about our <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">ketamine clinic in Aventura</Link> or call us at (305) 676-6070. If you are in crisis, call or text 988.</p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-[#0B1D36] mb-2">{faq.q}</h3>
                <p className="text-[#555]">
                  {faq.link && faq.a.includes(faq.link.text) ? (
                    <>
                      {faq.a.slice(0, faq.a.indexOf(faq.link.text))}
                      <Link href={faq.link.href} className="text-[#C9A66B] font-semibold hover:underline">{faq.link.text}</Link>
                      {faq.a.slice(faq.a.indexOf(faq.link.text) + faq.link.text.length)}
                    </>
                  ) : (
                    faq.a
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* TODO: add Medically reviewed by NAME, CREDENTIALS */}

          <p className="text-sm text-[#555] italic mt-8"><em>Does insurance cover ketamine therapy?</em></p>

          <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">Sources</h2>
          <ol className="list-decimal pl-5 space-y-2 text-[#555] text-sm">
            <li id="source-1">SPRAVATO (esketamine) prescribing information, Janssen Pharmaceuticals. FDA-approved label via DailyMed. <a href="https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">dailymed.nlm.nih.gov</a> (indications, REMS monitoring, and dosing schedule checked November 23, 2026).</li>
            <li id="source-2">HealthCare.gov Glossary. “Prior authorization.” <a href="https://www.healthcare.gov/glossary/prior-authorization/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-3">UnitedHealthcare. “Ketalar (Ketamine) and Spravato (Esketamine), Commercial and Individual Exchange Medical Benefit Drug Policy,” policy 2026D0069Q, effective May 1, 2026. <a href="https://www.uhcprovider.com/content/dam/provider/docs/public/policies/comm-medical-drug/ketalar-spravato.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">uhcprovider.com</a>. See also UnitedHealthcare’s Spravato prior authorization program: <a href="https://www.uhcprovider.com/content/dam/provider/docs/public/prior-auth/drugs-pharmacy/commercial/r-z/PA-Med-Nec-Spravato.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">uhcprovider.com</a></li>
            <li id="source-4">Aetna. “Esketamine (Spravato),” Clinical Policy Bulletin 0950. <a href="https://www.aetna.com/cpb/medical/data/900_999/0950.html" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">aetna.com</a></li>
            <li id="source-5">Cigna. “Psychiatry – Spravato Prior Authorization Policy,” review date April 29, 2026. <a href="https://static.cigna.com/assets/chcp/pdf/coveragePolicies/cnf/cnf_606_coveragepositioncriteria_psychiatry_spravato_pa.pdf" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">static.cigna.com</a></li>
            <li id="source-6">U.S. Food and Drug Administration. “FDA warns patients and health care providers about potential risks associated with compounded ketamine products, including oral formulations, for the treatment of psychiatric disorders,” October 10, 2023. <a href="https://web.archive.org/web/20260530025451/https://www.fda.gov/drugs/human-drug-compounding/fda-warns-patients-and-health-care-providers-about-potential-risks-associated-compounded-ketamine" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">web.archive.org</a> (archived copy; listed on <a href="https://www.fda.gov/drugs/human-drug-compounding/compounding-risk-alerts" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">FDA’s Compounding Risk Alerts</a> page).</li>
            <li id="source-7">HealthCare.gov Glossary. “Allowed amount.” <a href="https://www.healthcare.gov/glossary/allowed-amount/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-8">HealthCare.gov Glossary. “Deductible.” <a href="https://www.healthcare.gov/glossary/deductible/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-9">HealthCare.gov Glossary. “Copayment.” <a href="https://www.healthcare.gov/glossary/co-payment/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-10">HealthCare.gov Glossary. “Coinsurance.” <a href="https://www.healthcare.gov/glossary/co-insurance/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-11">HealthCare.gov Glossary. “Balance billing.” <a href="https://www.healthcare.gov/glossary/balance-billing/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-12">HealthCare.gov Glossary. “Out-of-pocket maximum/limit.” <a href="https://www.healthcare.gov/glossary/out-of-pocket-maximum-limit/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
            <li id="source-13">HealthCare.gov Glossary. “Out-of-network coinsurance.” <a href="https://www.healthcare.gov/glossary/out-of-network-coinsurance/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">healthcare.gov</a></li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#F8F5F0] text-center">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-4">Ready to take the next step?</h2>
        <p className="text-lg text-[#555] mb-6 max-w-3xl mx-auto">Book a free consultation. We will tell you if Spravato is an option, what your plan needs, and what IV costs. No pressure — just honest answers.</p>
        <Link href="/#contact" className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded hover:bg-[#0B1D36] hover:text-white transition">
          Book Free Consultation
        </Link>
        <p className="mt-4 text-sm text-[#555]">Or call/text <a href="tel:+13056766070" className="font-semibold hover:text-[#C9A66B] transition">(305) 676-6070</a></p>
      </section>

      <SiteFooter />
    </main>
    </>
  );
}
