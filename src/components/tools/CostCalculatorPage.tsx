import { pageJsonLd } from "@/data/page-meta";
import type { Source } from "@/data/medical-review";
import PageShell from "./PageShell";
import CostCalculator from "./CostCalculator";
import { SourceList, EducationNote } from "./ReviewAndSources";

export const COST_PATH = "/tools/ketamine-cost-calculator";

const SOURCES: Record<"en" | "es", Source[]> = {
  en: [
    { label: "Rewired Ketamine. Ketamine therapy cost (published IV prices).", href: "https://www.rewiredketamine.com/services/ketamine-therapy-cost", site: "rewiredketamine.com" },
    { label: "Rewired Ketamine. At-home ketamine (published starting prices).", href: "https://www.rewiredketamine.com/services/home-ketamine", site: "rewiredketamine.com" },
    { label: "Rewired Ketamine. Ketamine and Spravato insurance guide.", href: "https://www.rewiredketamine.com/services/ketamine-insurance", site: "rewiredketamine.com" },
    { label: "SPRAVATO (esketamine) prescribing information, Janssen Pharmaceuticals, via DailyMed (dosing schedule).", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed", site: "dailymed.nlm.nih.gov" },
  ],
  es: [
    { label: "Rewired Ketamine. Costo de la terapia con ketamina (precios IV publicados).", href: "https://www.rewiredketamine.com/es/services/ketamine-therapy-cost", site: "rewiredketamine.com" },
    { label: "Rewired Ketamine. Ketamina en casa (precios iniciales publicados).", href: "https://www.rewiredketamine.com/es/services/home-ketamine", site: "rewiredketamine.com" },
    { label: "Rewired Ketamine. Guía de seguros para ketamina y Spravato.", href: "https://www.rewiredketamine.com/es/services/ketamine-insurance", site: "rewiredketamine.com" },
    { label: "Información de prescripción de SPRAVATO (esketamina), Janssen Pharmaceuticals, en DailyMed (calendario de dosis; en inglés).", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed", site: "dailymed.nlm.nih.gov" },
  ],
};

export default function CostCalculatorPage({ lang, title, description }: { lang: "en" | "es"; title: string; description: string }) {
  const es = lang === "es";
  const path = es ? `/es${COST_PATH}` : COST_PATH;
  const jsonLd = pageJsonLd({
    lang,
    path,
    name: title,
    description,
    about: [
      { "@type": "MedicalTherapy", name: es ? "Infusión intravenosa de ketamina" : "Intravenous ketamine infusion" },
      { "@type": "Substance", name: "Spravato (esketamine nasal spray)", nonProprietaryName: "esketamine" },
    ],
    crumbs: [
      { name: es ? "Inicio" : "Home", path: es ? "/es" : "/" },
      { name: es ? "Herramientas" : "Tools", path: es ? "/es/tools" : "/tools" },
      { name: title, path },
    ],
  });
  return (
    <PageShell
      lang={lang}
      title={title}
      subtitle={
        es
          ? "Compare sesiones individuales y paquetes de ketamina IV, Spravato y ketamina en casa con nuestros precios publicados."
          : "Compare IV ketamine single sessions and packages, Spravato, and at-home ketamine using our published prices."
      }
      jsonLd={jsonLd}
      altHref={es ? COST_PATH : `/es${COST_PATH}`}
    >
      <p className="text-[#555] text-lg mb-8">
        {es
          ? "Esta calculadora usa solo los precios que publicamos en nuestro sitio. Es un estimado, no una cotización: el plan y el precio final se confirman en su consulta."
          : "This calculator uses only the prices we publish on our site. It is an estimate, not a quote: your plan and final price are confirmed at your consultation."}
      </p>
      <CostCalculator lang={lang} />
      <EducationNote lang={lang} />
      <SourceList lang={lang} sources={SOURCES[lang]} />
    </PageShell>
  );
}
