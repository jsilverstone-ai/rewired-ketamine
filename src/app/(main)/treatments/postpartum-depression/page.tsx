import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

const postpartumJsonLd = {
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
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.9730993,
        longitude: -80.1475594,
      },
      areaServed: ["Aventura", "Miami", "Fort Lauderdale", "South Florida"],
    },
    {
      "@type": "MedicalWebPage",
      "@id": "https://www.rewiredketamine.com/treatments/postpartum-depression#webpage",
      url: "https://www.rewiredketamine.com/treatments/postpartum-depression",
      name: "Ketamine for Postpartum Depression | Aventura, FL",
      headline: "Ketamine for Postpartum Depression in Aventura",
      description:
        "Support for postpartum depression with ketamine therapy at our Aventura clinic. Fully guided sessions available. ¡Hablamos Español!",
      inLanguage: "en-US",
      isPartOf: { "@id": "https://www.rewiredketamine.com/#clinic" },
      about: {
        "@type": "MedicalCondition",
        name: "Postpartum depression",
      },
      lastReviewed: "2026-11-20",
      dateModified: "2026-11-20",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rewiredketamine.com/" },
        { "@type": "ListItem", position: 2, name: "Treatments", item: "https://www.rewiredketamine.com/treatments" },
        { "@type": "ListItem", position: 3, name: "Postpartum Depression", item: "https://www.rewiredketamine.com/treatments/postpartum-depression" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is ketamine a proven treatment for postpartum depression?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It may be used in medically supervised settings for some adults with depression, but it is not a guaranteed treatment for postpartum depression. Further studies are still needed, and a consultation determines whether it is appropriate for you. Individual results vary.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with my OB, psychiatrist, or therapist?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Care here is meant to complement the clinicians you already see, not replace them. With your permission, we will coordinate with your existing care team and keep them updated.",
          },
        },
        {
          "@type": "Question",
          name: "What does a typical course cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The published mental-health IV protocol is $440 for a single session, $1,200 for a package of 3, and $2,300 for a package of 6. Guided sessions (1-hour IV plus a guide) are $590, $1,500, and $2,900. Full details are on the cost page.",
          },
        },
        {
          "@type": "Question",
          name: "Will I need a driver, and can I bring my baby?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A driver is required after sessions. Please arrange childcare in advance; we cannot provide childcare on site.",
          },
        },
        {
          "@type": "Question",
          name: "I am breastfeeding. Can I still be evaluated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Bring your feeding questions to the consultation so your clinician can discuss them with you and, as appropriate, with your obstetrician or pediatrician. Do not change your feeding plan based on this page alone.",
          },
        },
        {
          "@type": "Question",
          name: "How is Spravato different from IV ketamine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spravato (esketamine nasal spray) is available for treatment-resistant depression when insurance criteria are met. It is given on site under REMS observation and is a different treatment from IV ketamine. Eligibility is determined in a medical screening.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer Spanish-language support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Spanish-language support is available. Ask about language preferences when you book a consultation.",
          },
        },
      ],
    },
  ],
};

export default function PostpartumDepressionPage() {
  return (
    <>
      <JsonLd data={postpartumJsonLd} />
      <main className="min-h-screen bg-[#F8F5F0] text-[#1a1a1a]">
        {/* Keep your existing full header / top bar / sticky nav / footer exactly as on the live site */}

        <section className="bg-[#0B1D36] text-white py-20 px-6 text-center">
          <p className="text-[#C9A66B] font-semibold tracking-widest text-sm mb-4">AVENTURA • SOUTH FLORIDA</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ketamine for Postpartum Depression in Aventura</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-6">
            Fully guided IV ketamine support for new parents in Miami, Fort Lauderdale, and South Florida. Transparent pricing published so you know the cost of a full course before you book.
          </p>
          <p className="text-[#C9A66B] font-semibold">¡Hablamos Español!</p>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[#555] mb-6">
              Postpartum depression can make the early months of parenthood feel overwhelming, isolating, and exhausting. Traditional treatments such as SSRIs or therapy can take weeks or months to show benefit — antidepressants commonly take 4–8 weeks to work. For some new parents, that timeline feels too long during a critical bonding window.
            </p>
            <p className="text-lg text-[#555] mb-6">
              At Rewired Ketamine in Aventura, we offer medically supervised IV ketamine as one supportive option alongside existing care. Sessions take place in a private, monitored treatment room. A clinical team member is present throughout. Fully guided sessions are available.
            </p>
            <p className="text-lg text-[#555] mb-8">
              We do not claim ketamine is right for everyone. A free consultation and medical screening determine whether it is appropriate. Individual results vary.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">What postpartum depression can look like</h2>
            <p className="text-[#555] mb-4">
              Feeling tired or overwhelmed after a baby arrives is common. Postpartum depression is different: symptoms last longer, feel heavier, and can interfere with daily life and with bonding. The U.S. Office on Women’s Health reports that 1 in 8 new mothers experience symptoms of postpartum depression in the year after childbirth.
            </p>
            <p className="text-[#555] mb-4">
              Symptoms may include persistent sadness or anxiety, irritability, guilt, fatigue, trouble sleeping even when the baby is asleep, difficulty concentrating, or trouble bonding with the baby. Thoughts of death or of harming yourself or the baby are a reason to contact a clinician right away. If you or someone you love is in immediate danger, call 911. For 24/7 support, call or text 988.
            </p>
            <p className="text-[#555] mb-8">
              Postpartum depression is a medical condition, not a measure of how much you love your child. Help is available, and you do not have to sort this out alone.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Baby blues and postpartum depression are not the same</h2>
            <p className="text-[#555] mb-4">
              Many new parents have the “baby blues” — milder, short-lasting mood changes, worry, unhappiness, or exhaustion after birth. The National Institute of Mental Health describes baby blues as mild symptoms that many women experience in the first two weeks after giving birth. The Office on Women’s Health notes that baby blues often ease within a few days.
            </p>
            <p className="text-[#555] mb-8">
              If sad, anxious, hopeless, or overwhelmed feelings last longer than two weeks, feel more intense than a brief adjustment, or make it hard to care for yourself or your baby, that may be postpartum depression and is worth a clinical evaluation. Only a qualified clinician can make that determination.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">How IV ketamine and Spravato fit alongside the care you already have</h2>
            <p className="text-[#555] mb-4">
              Ketamine is not a replacement for the obstetric, psychiatric, or therapy relationships you already have. If you are already working with an OB, midwife, psychiatrist, or therapist, treatment here is meant to sit alongside that care. With your permission, we will coordinate with those clinicians and keep them updated on your plan and your progress.
            </p>
            <p className="text-[#555] mb-4">
              Standard care often includes psychotherapy, antidepressant medication, or both. Those approaches help many people, but antidepressants usually take 4–8 weeks to work, and not everyone gets enough relief.
            </p>
            <p className="text-[#555] mb-4">
              IV ketamine is a medically supervised option some adults explore when usual care has not been enough, or when a faster-acting approach is being considered as part of a broader plan. It is not a first-line treatment for every new parent, and it is not appropriate for everyone. Research on ketamine and esketamine in the postpartum period is still evolving. Much of the published work looks at prevention of symptoms when the medication is given during or after cesarean delivery. The Massachusetts General Hospital Center for Women’s Mental Health has noted that further studies are needed to determine whether ketamine and esketamine are effective for the treatment of postpartum depression once it is present. We share that limitation.
            </p>
            <p className="text-[#555] mb-8">
              Spravato (esketamine nasal spray) is also available for treatment-resistant depression when insurance criteria are met. It is administered on-site under REMS observation and is different from IV ketamine. It is not approved specifically for postpartum depression. Whether IV ketamine, Spravato, or neither is appropriate depends on a medical screening.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Monitoring and practical logistics for new parents</h2>
            <p className="text-[#555] mb-4">
              Sessions take place in a private, monitored treatment room, with a clinical team member present throughout. Fully guided sessions are available if you want additional support during the infusion. Plan the practical side of the visit before you come:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
              <li><strong>A driver is required after sessions.</strong> You should not drive yourself home. Arrange a partner, family member, friend, or car service in advance.</li>
              <li><strong>Childcare.</strong> You will need a trusted person to care for your baby during the visit and while you recover afterward. We cannot provide childcare on site.</li>
              <li><strong>Breastfeeding or nursing.</strong> If you are breastfeeding, pumping, or considering it, bring that up during your consultation. Questions about timing, feeding plans, and infant monitoring belong in a conversation with your Rewired clinician and, as appropriate, your obstetrician or pediatrician. Do not change a feeding plan based on this page alone.</li>
            </ul>
            <p className="text-[#555] mb-8">
              A free consultation and medical screening come first. That visit is the time to review your history, current medications, and logistics so you can decide whether to proceed.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">What a course actually costs</h2>
            <p className="text-[#555] mb-4">
              Unlike clinics that require a consultation just to learn pricing, Rewired publishes package rates so the total cost of a typical course is visible before booking.
            </p>
            <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Mental Health Protocol (1-hour IV)</h3>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Single Session</span><span className="font-semibold">$440</span></div>
                <div className="flex justify-between"><span>Package of 3</span><span className="font-semibold">$1,200</span></div>
                <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$2,300</span></div>
              </div>
            </div>
            <div className="bg-[#F8F5F0] rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-lg text-[#0B1D36] mb-3">Guided Sessions (1-hour IV + Guide)</h3>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Single Session</span><span className="font-semibold">$590</span></div>
                <div className="flex justify-between"><span>Package of 3</span><span className="font-semibold">$1,500</span></div>
                <div className="flex justify-between"><span>Package of 6</span><span className="font-semibold">$2,900</span></div>
              </div>
            </div>
            <p className="text-sm text-[#555] mb-8">
              Consultation required before treatment. Ask us about available discounts. Full details are on our <Link href="/services/ketamine-therapy-cost" className="text-[#C9A66B] font-semibold hover:underline">ketamine therapy cost</Link> page.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">What is included</h2>
            <ul className="list-disc pl-5 space-y-2 text-[#555] mb-8">
              <li>Continuous monitoring in a private treatment room</li>
              <li>Clinical team presence during the session</li>
              <li>Fully guided sessions available</li>
              <li>Integration support (included with guided options or available separately)</li>
              <li>Follow-up as part of the care plan</li>
            </ul>
            <p className="text-[#555] mb-8">
              When you compare clinics, ask whether monitoring, a private room, a clinician present during the session, and integration support are included in the quoted rate or billed separately. Those details change what a “per session” number actually covers.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">Local care in Aventura</h2>
            <p className="text-[#555] mb-4">
              Our clinic is located at 2820 NE 214th Street, Suite 1002, Aventura, FL 33180 — about 25–45 minutes from the Miami area and about 20–35 minutes from Fort Lauderdale, depending on traffic. Spanish-language support is available. We are a locally owned practice, not part of a multi-location corporate chain.
            </p>
            <p className="text-[#555] mb-6">
              Rewired Ketamine is listed as the #1 ketamine clinic in Miami on HealingMaps’ 2026 review of clinics in the area. You can read the list here: <a href="https://healingmaps.com/the-best-ketamine-clinics-in-miami/" target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] font-semibold hover:underline">8 Best Ketamine Clinics in Miami (2026)</a>.
            </p>
            <p className="text-[#555]">
              Start with a free consultation, or visit our <Link href="/" className="text-[#C9A66B] font-semibold hover:underline">homepage</Link> to learn how care begins.
            </p>

            <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-6">Frequently asked questions</h2>
            {/* Add your existing FAQ accordion or static list using the questions from the JSON-LD / markdown */}

            <p className="text-sm text-[#777] mt-12">
              Medically reviewed by [REVIEWER_NAME, CREDENTIALS] — Last updated November 20, 2026
            </p>
          </div>
        </section>

        {/* Keep your existing CTA section and footer */}
      </main>
    </>
  );
}
