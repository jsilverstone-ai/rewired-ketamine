import Link from "next/link";
import {
  MEDICAL_REVIEWER,
  LAST_REVIEWED,
  LAST_REVIEWED_LABEL_EN,
  LAST_REVIEWED_LABEL_ES,
  type Source,
} from "@/data/medical-review";

/** "Medically reviewed by" line + last-reviewed date, used on every new YMYL page. */
export function ReviewedBy({ lang }: { lang: "en" | "es" }) {
  const es = lang === "es";
  return (
    <p className="text-sm text-[#555] border-l-4 border-[#C9A66B] pl-4 py-1">
      {es ? "Revisado médicamente por " : "Medically reviewed by "}
      <Link
        href={es ? MEDICAL_REVIEWER.providersHrefEs : MEDICAL_REVIEWER.providersHrefEn}
        className="font-semibold text-[#0B1D36] hover:text-[#C9A66B]"
      >
        {MEDICAL_REVIEWER.name}
      </Link>
      {", "}
      {es ? MEDICAL_REVIEWER.roleEs : MEDICAL_REVIEWER.roleEn}
      {". "}
      {es ? "Última revisión: " : "Last reviewed: "}
      <time dateTime={LAST_REVIEWED}>{es ? LAST_REVIEWED_LABEL_ES : LAST_REVIEWED_LABEL_EN}</time>.
    </p>
  );
}

export function SourceList({ lang, sources }: { lang: "en" | "es"; sources: Source[] }) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-[#0B1D36] mb-4">{lang === "es" ? "Fuentes" : "Sources"}</h2>
      <ol className="list-decimal pl-5 space-y-2 text-[#555] text-sm">
        {sources.map((s, i) => (
          <li key={i} id={`source-${i + 1}`}>
            {s.label}{" "}
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-[#C9A66B] hover:underline">
              {s.site}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Education-only disclaimer shared by the new pages. */
export function EducationNote({ lang }: { lang: "en" | "es" }) {
  return (
    <p className="text-sm text-[#555] mt-8">
      {lang === "es"
        ? "Esta página es solo para fines educativos y no es un consejo médico, legal ni fiscal. La ketamina no es adecuada para todas las personas. Si está en crisis, llame al 988 y oprima 2 para español, o envíe la palabra AYUDA por mensaje de texto al 988. En una emergencia, llame al 911."
        : "This page is for general education and is not medical, legal, or tax advice. Ketamine is not right for everyone. If you are in crisis, call or text 988. In an emergency, call 911."}
    </p>
  );
}
