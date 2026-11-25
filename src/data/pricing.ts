// Published prices, copied from the live site. Keep in sync with:
//   IV prices:      src/app/(main)/services/ketamine-therapy-cost/page.tsx (and /es twin)
//   At-home prices: src/app/(main)/services/home-ketamine/page.tsx (and /es twin)
// Spravato has no published cash price; cost depends on the patient's insurance plan.

export type IvProtocol = {
  id: string;
  nameEn: string;
  nameEs: string;
  detailEn: string;
  detailEs: string;
  single: number;
  pack3: number;
  pack6: number;
};

export const IV_PROTOCOLS: IvProtocol[] = [
  { id: "mh-1h", nameEn: "Mental Health Protocol", nameEs: "Protocolo de Salud Mental", detailEn: "1 Hour IV Ketamine Infusion", detailEs: "Infusión de Ketamina IV de 1 hora", single: 440, pack3: 1200, pack6: 2300 },
  { id: "pain-2h", nameEn: "Chronic Pain Protocol", nameEs: "Protocolo de Dolor Crónico", detailEn: "2 Hour IV Ketamine Infusion", detailEs: "Infusión de Ketamina IV de 2 horas", single: 590, pack3: 1700, pack6: 3200 },
  { id: "guided-1h", nameEn: "Guided Sessions", nameEs: "Sesiones Guiadas", detailEn: "1 Hour IV + Guide", detailEs: "1 hora IV + Guía", single: 590, pack3: 1500, pack6: 2900 },
  { id: "guided-2h", nameEn: "Guided Sessions", nameEs: "Sesiones Guiadas", detailEn: "2 Hour IV + Guide", detailEs: "2 horas IV + Guía", single: 690, pack3: 1925, pack6: 3800 },
];

export const AT_HOME_STARTING = [
  { nameEn: "Oral (RDTs)", nameEs: "Oral (tabletas RDT)", from: 225 },
  { nameEn: "Nasal", nameEs: "Nasal", from: 325 },
  { nameEn: "Rectal", nameEs: "Rectal", from: 275 },
  { nameEn: "Subcutaneous", nameEs: "Subcutánea", from: 600 },
];

/** Labeled Spravato visit count for TRD in the first 8 weeks (twice weekly wk 1-4, weekly wk 5-8), per the insurance page. */
export const SPRAVATO_VISITS_FIRST_8_WEEKS = 12;
