// Per-insurer Spravato pages. Network status comes ONLY from the main insurance guide
// (src/app/(main)/services/ketamine-insurance/page.tsx):
//   in-network for Spravato: UnitedHealthcare, Cigna, Aetna
//   out-of-network for Spravato: Blue Cross Blue Shield, including Florida Blue
//   Medicare / Medicaid: not listed; "Medicare and Medicaid follow separate rules"
// Do not add coverage facts here that are not on that page or in a cited public source.

import type { Source } from "./medical-review";

export type InsurerStatus = "in-network" | "out-of-network" | "not-listed";

export type Insurer = {
  slug: string;
  name: string;
  nameEs: string;
  status: InsurerStatus;
  /** Plan-specific paragraph(s) under "How this plan usually handles Spravato". */
  planNotesEn: string[];
  planNotesEs: string[];
  sources: Source[];
  /** Whether the plan's published policy is summarized on the main guide (UHC, Aetna, Cigna). */
  hasPublishedPolicy: boolean;
};

const LABEL: Source = {
  label: "SPRAVATO (esketamine) prescribing information, Janssen Pharmaceuticals. FDA-approved label via DailyMed.",
  href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed",
  site: "dailymed.nlm.nih.gov",
};
const PRIOR_AUTH: Source = { label: "HealthCare.gov Glossary. “Prior authorization.”", href: "https://www.healthcare.gov/glossary/prior-authorization/", site: "healthcare.gov" };
const APPEALS: Source = { label: "HealthCare.gov. “Appealing a health plan decision.”", href: "https://www.healthcare.gov/appeal-insurance-company-decision/", site: "healthcare.gov" };

export const INSURERS: Insurer[] = [
  {
    slug: "spravato-unitedhealthcare",
    name: "UnitedHealthcare",
    nameEs: "UnitedHealthcare",
    status: "in-network",
    hasPublishedPolicy: true,
    planNotesEn: [
      "UnitedHealthcare’s published commercial medical benefit drug policy for Ketalar (ketamine) and Spravato (esketamine) requires prior authorization for Spravato. UnitedHealthcare also runs a Spravato prior authorization program for providers.",
    ],
    planNotesEs: [
      "La política publicada de UnitedHealthcare para medicamentos del beneficio médico comercial, Ketalar (ketamina) y Spravato (esketamina), exige autorización previa para Spravato. UnitedHealthcare también tiene un programa de autorización previa de Spravato para proveedores.",
    ],
    sources: [
      LABEL,
      PRIOR_AUTH,
      { label: "UnitedHealthcare. “Ketalar (Ketamine) and Spravato (Esketamine), Commercial and Individual Exchange Medical Benefit Drug Policy,” policy 2026D0069Q, effective May 1, 2026.", href: "https://www.uhcprovider.com/content/dam/provider/docs/public/policies/comm-medical-drug/ketalar-spravato.pdf", site: "uhcprovider.com" },
      { label: "UnitedHealthcare. Spravato prior authorization program.", href: "https://www.uhcprovider.com/content/dam/provider/docs/public/prior-auth/drugs-pharmacy/commercial/r-z/PA-Med-Nec-Spravato.pdf", site: "uhcprovider.com" },
      APPEALS,
    ],
  },
  {
    slug: "spravato-cigna",
    name: "Cigna",
    nameEs: "Cigna",
    status: "in-network",
    hasPublishedPolicy: true,
    planNotesEn: ["Cigna’s published Spravato prior authorization policy (Psychiatry – Spravato Prior Authorization Policy) requires prior authorization before treatment."],
    planNotesEs: ["La política publicada de Cigna para Spravato (Psychiatry – Spravato Prior Authorization Policy) exige autorización previa antes del tratamiento."],
    sources: [
      LABEL,
      PRIOR_AUTH,
      { label: "Cigna. “Psychiatry – Spravato Prior Authorization Policy,” review date April 29, 2026.", href: "https://static.cigna.com/assets/chcp/pdf/coveragePolicies/cnf/cnf_606_coveragepositioncriteria_psychiatry_spravato_pa.pdf", site: "static.cigna.com" },
      APPEALS,
    ],
  },
  {
    slug: "spravato-aetna",
    name: "Aetna",
    nameEs: "Aetna",
    status: "in-network",
    hasPublishedPolicy: true,
    planNotesEn: ["Aetna’s published Clinical Policy Bulletin for esketamine (Spravato), CPB 0950, requires precertification (Aetna’s term for prior authorization)."],
    planNotesEs: ["El boletín de política clínica publicado por Aetna para la esketamina (Spravato), CPB 0950, exige precertificación (el término que usa Aetna para la autorización previa)."],
    sources: [
      LABEL,
      PRIOR_AUTH,
      { label: "Aetna. “Esketamine (Spravato),” Clinical Policy Bulletin 0950.", href: "https://www.aetna.com/cpb/medical/data/900_999/0950.html", site: "aetna.com" },
      APPEALS,
    ],
  },
  {
    slug: "spravato-florida-blue-bcbs",
    name: "Florida Blue / BCBS",
    nameEs: "Florida Blue / BCBS",
    status: "out-of-network",
    hasPublishedPolicy: false,
    planNotesEn: [
      "Blue Cross Blue Shield plans, including Florida Blue, are out-of-network for Spravato at Rewired. Some plans have out-of-network benefits and some do not, and what yours pays depends on your policy. Your plan may still require prior authorization, and out-of-network costs are usually higher than in-network costs.",
    ],
    planNotesEs: [
      "Los planes de Blue Cross Blue Shield, incluido Florida Blue, están fuera de la red para Spravato en Rewired. Algunos planes tienen beneficios fuera de la red y otros no, y lo que paga el suyo depende de su póliza. Es posible que su plan igual exija autorización previa, y los costos fuera de la red suelen ser más altos que dentro de la red.",
    ],
    sources: [
      LABEL,
      PRIOR_AUTH,
      { label: "HealthCare.gov Glossary. “Out-of-network coinsurance.”", href: "https://www.healthcare.gov/glossary/out-of-network-coinsurance/", site: "healthcare.gov" },
      { label: "HealthCare.gov Glossary. “Balance billing.”", href: "https://www.healthcare.gov/glossary/balance-billing/", site: "healthcare.gov" },
      APPEALS,
    ],
  },
  {
    slug: "spravato-medicare",
    name: "Medicare",
    nameEs: "Medicare",
    status: "not-listed",
    hasPublishedPolicy: false,
    planNotesEn: [
      "Medicare follows its own rules, separate from commercial insurance. Original Medicare and Medicare Advantage plans can handle Spravato differently, and many Medicare Advantage plans use prior authorization. Coverage, costs, and paperwork depend on your specific plan.",
      "Medicare is not on the list of plans we bill in-network for Spravato on our insurance guide. Please ask us before you book whether we can work with your Medicare or Medicare Advantage plan, and confirm with Medicare or your plan.",
    ],
    planNotesEs: [
      "Medicare sigue sus propias reglas, distintas de las del seguro comercial. Medicare Original y los planes Medicare Advantage pueden manejar Spravato de manera diferente, y muchos planes Medicare Advantage usan autorización previa. La cobertura, los costos y los trámites dependen de su plan.",
      "Medicare no está en la lista de planes con los que facturamos Spravato dentro de la red en nuestra guía de seguros. Antes de reservar, pregúntenos si podemos trabajar con su plan de Medicare o Medicare Advantage, y confírmelo con Medicare o con su plan.",
    ],
    sources: [
      LABEL,
      PRIOR_AUTH,
      { label: "Medicare.gov. “Appeals.”", href: "https://www.medicare.gov/providers-services/claims-appeals-complaints/appeals", site: "medicare.gov" },
    ],
  },
  {
    slug: "spravato-florida-medicaid",
    name: "Florida Medicaid",
    nameEs: "Medicaid de Florida",
    status: "not-listed",
    hasPublishedPolicy: false,
    planNotesEn: [
      "Medicaid follows its own rules, separate from commercial insurance. Most Florida Medicaid members get their benefits through a Statewide Medicaid Managed Care (SMMC) health plan, and each plan sets its own prior authorization process and provider network.",
      "Florida Medicaid is not on the list of plans we bill in-network for Spravato on our insurance guide. Please ask us before you book whether we can work with your plan, and confirm with your Medicaid health plan.",
    ],
    planNotesEs: [
      "Medicaid sigue sus propias reglas, distintas de las del seguro comercial. La mayoría de los afiliados de Medicaid en Florida reciben sus beneficios a través de un plan de salud de Atención Administrada de Medicaid a Nivel Estatal (SMMC), y cada plan tiene su propio proceso de autorización previa y su propia red de proveedores.",
      "Medicaid de Florida no está en la lista de planes con los que facturamos Spravato dentro de la red en nuestra guía de seguros. Antes de reservar, pregúntenos si podemos trabajar con su plan y confírmelo con su plan de salud de Medicaid.",
    ],
    sources: [
      LABEL,
      PRIOR_AUTH,
      { label: "Florida Agency for Health Care Administration. Statewide Medicaid Managed Care.", href: "https://ahca.myflorida.com/medicaid/statewide-medicaid-managed-care.html", site: "ahca.myflorida.com" },
    ],
  },
];

export const INSURANCE_BASE = "/services/ketamine-insurance";
export const insurerPath = (slug: string) => `${INSURANCE_BASE}/${slug}`;
