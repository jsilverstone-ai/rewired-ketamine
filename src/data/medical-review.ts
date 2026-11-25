// Clinical reviewer shown on the YMYL tool, HSA/FSA and insurer pages.
// Name and credentials come from the providers page (src/app/(main)/providers).
// Update LAST_REVIEWED whenever the reviewer signs off on a change.
export const MEDICAL_REVIEWER = {
  name: "Kelsey Vivatson, PMHNP-BC, APRN",
  roleEn: "Clinical Director, Rewired Ketamine",
  roleEs: "Directora Clínica, Rewired Ketamine",
  providersHrefEn: "/providers",
  providersHrefEs: "/es/providers",
};

export const LAST_REVIEWED = "2026-11-25";
export const LAST_REVIEWED_LABEL_EN = "November 25, 2026";
export const LAST_REVIEWED_LABEL_ES = "25 de noviembre de 2026";

export const SITE = "https://www.rewiredketamine.com";

export const CLINIC_REF = { "@id": `${SITE}/#clinic` };

export const REVIEWER_JSONLD = {
  "@type": "Person",
  name: "Kelsey Vivatson",
  jobTitle: "Psychiatric Mental Health Nurse Practitioner (PMHNP-BC, APRN)",
  url: `${SITE}/providers`,
};

export type Source = { label: string; href: string; site: string };
