import Link from "next/link";
import { pageJsonLd } from "@/data/page-meta";
import PageShell from "./PageShell";
import CrisisBox from "./CrisisBox";
import { EducationNote } from "./ReviewAndSources";

const TOOLS = {
  en: [
    { href: "/tools/phq-9-depression-test", title: "PHQ-9 Depression Test", body: "9 questions, about 2 minutes. The depression screener clinicians use." },
    { href: "/tools/gad-7-anxiety-test", title: "GAD-7 Anxiety Test", body: "7 questions, about 2 minutes. The anxiety screener clinicians use." },
    { href: "/tools/ketamine-cost-calculator", title: "Ketamine Cost Calculator", body: "Compare IV single sessions and packages, Spravato, and at-home options with our published prices." },
    { href: "/services/hsa-fsa-ketamine", title: "HSA/FSA Guide", body: "Can you use HSA or FSA funds for ketamine treatment, and what paperwork helps." },
    { href: "/services/ketamine-insurance", title: "Spravato Insurance Guides", body: "Prior authorization steps for UnitedHealthcare, Cigna, Aetna, Florida Blue, Medicare and Florida Medicaid." },
  ],
  es: [
    { href: "/es/tools/phq-9-depression-test", title: "Prueba de Depresión PHQ-9", body: "9 preguntas, unos 2 minutos. El cuestionario que usan los profesionales." },
    { href: "/es/tools/gad-7-anxiety-test", title: "Prueba de Ansiedad GAD-7", body: "7 preguntas, unos 2 minutos. El cuestionario que usan los profesionales." },
    { href: "/es/tools/ketamine-cost-calculator", title: "Calculadora de Costos", body: "Compare sesiones IV individuales y paquetes, Spravato y opciones en casa con nuestros precios publicados." },
    { href: "/es/services/hsa-fsa-ketamine", title: "Guía de HSA/FSA", body: "¿Puede usar fondos de una HSA o FSA para el tratamiento con ketamina? Qué documentos le pueden pedir." },
    { href: "/es/services/ketamine-insurance", title: "Guías de Seguro para Spravato", body: "Pasos de autorización previa con UnitedHealthcare, Cigna, Aetna, Florida Blue, Medicare y Medicaid de Florida." },
  ],
};

export default function ToolsHub({ lang, title, description }: { lang: "en" | "es"; title: string; description: string }) {
  const es = lang === "es";
  const path = es ? "/es/tools" : "/tools";
  const jsonLd = pageJsonLd({
    lang,
    path,
    name: title,
    description,
    crumbs: [
      { name: es ? "Inicio" : "Home", path: es ? "/es" : "/" },
      { name: title, path },
    ],
  });
  return (
    <PageShell
      lang={lang}
      title={title}
      subtitle={
        es
          ? "Cuestionarios de detección y herramientas de costos gratuitos. Todo funciona en su navegador: no guardamos ni enviamos sus respuestas."
          : "Free screening questionnaires and cost tools. Everything runs in your browser: we do not save or send your answers."
      }
      jsonLd={jsonLd}
      altHref={es ? "/tools" : "/es/tools"}
    >
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {TOOLS[lang].map((tool) => (
          <Link key={tool.href} href={tool.href} className="block bg-[#F8F5F0] rounded-2xl p-6 border border-transparent hover:border-[#C9A66B] transition">
            <h2 className="text-xl font-bold text-[#0B1D36] mb-2">{tool.title}</h2>
            <p className="text-[#555] mb-3">{tool.body}</p>
            <span className="text-[#C9A66B] font-semibold">{es ? "Abrir →" : "Open →"}</span>
          </Link>
        ))}
      </div>
      <p className="text-[#555] mb-8">
        {es
          ? "Los cuestionarios de detección no son un diagnóstico. Son un punto de partida para hablar con un profesional de salud."
          : "Screening questionnaires are not a diagnosis. They are a starting point for a conversation with a health professional."}
      </p>
      <CrisisBox lang={lang} />
      <EducationNote lang={lang} />
    </PageShell>
  );
}
