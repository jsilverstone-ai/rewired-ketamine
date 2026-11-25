import Link from "next/link";
import type { ScreenerConfig } from "@/data/screeners";
import { pageJsonLd } from "@/data/page-meta";
import type { Source } from "@/data/medical-review";
import PageShell from "./PageShell";
import Screener from "./Screener";
import CrisisBox from "./CrisisBox";
import { SourceList, EducationNote } from "./ReviewAndSources";

const SPANISH_FORM_SOURCE: Record<"phq9" | "gad7", Source> = {
  phq9: {
    label: "Spitzer RL, Williams JBW, Kroenke K y colegas. Cuestionario sobre la Salud del Paciente-9 (PHQ-9), versión oficial en español para EE. UU.",
    href: "https://uwhatc.uw.edu/wp-content/uploads/2022/07/PHQ9_Spanish-for-the-USA.pdf",
    site: "uwhatc.uw.edu",
  },
  gad7: {
    label: "Spitzer RL, Williams JBW, Kroenke K y colegas. GAD-7, versión oficial en español para EE. UU.",
    href: "https://uwhatc.uw.edu/wp-content/uploads/2022/07/GAD7_Spanish-for-the-USA.pdf",
    site: "uwhatc.uw.edu",
  },
};

const SOURCES: Record<"phq9" | "gad7", Source[]> = {
  phq9: [
    { label: "Kroenke K, Spitzer RL, Williams JBW. The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med. 2001;16(9):606-613.", href: "https://pubmed.ncbi.nlm.nih.gov/11556941/", site: "pubmed.ncbi.nlm.nih.gov" },
    { label: "Patient Health Questionnaire-9 (PHQ-9) form, developed by Drs. Spitzer, Williams, Kroenke and colleagues with an educational grant from Pfizer Inc.", href: "https://www.apa.org/depression-guideline/patient-health-questionnaire.pdf", site: "apa.org" },
    { label: "National Institute of Mental Health. Depression.", href: "https://www.nimh.nih.gov/health/topics/depression", site: "nimh.nih.gov" },
    { label: "988 Suicide & Crisis Lifeline.", href: "https://988lifeline.org/", site: "988lifeline.org" },
  ],
  gad7: [
    { label: "Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med. 2006;166(10):1092-1097.", href: "https://pubmed.ncbi.nlm.nih.gov/16717171/", site: "pubmed.ncbi.nlm.nih.gov" },
    { label: "Generalized Anxiety Disorder-7 (GAD-7) self-assessment form.", href: "https://adaa.org/sites/default/files/GAD-7_Anxiety-updated_0.pdf", site: "adaa.org" },
    { label: "National Institute of Mental Health. Anxiety Disorders.", href: "https://www.nimh.nih.gov/health/topics/anxiety-disorders", site: "nimh.nih.gov" },
    { label: "988 Suicide & Crisis Lifeline.", href: "https://988lifeline.org/", site: "988lifeline.org" },
  ],
};

const COPY = {
  phq9: {
    en: {
      what: "The PHQ-9 (Patient Health Questionnaire-9) is a 9-question depression screener that doctors and therapists use in everyday practice. It asks how often you have been bothered by common symptoms over the last two weeks. It takes about two minutes.",
      treatment: { href: "/treatments/depression", label: "depression care at our Aventura clinic" },
      other: { href: "/tools/gad-7-anxiety-test", label: "GAD-7 anxiety test" },
    },
    es: {
      what: "El PHQ-9 (Cuestionario sobre la Salud del Paciente-9) es un cuestionario de 9 preguntas para detectar síntomas de depresión que médicos y terapeutas usan todos los días. Pregunta con qué frecuencia le han molestado ciertos síntomas durante las últimas dos semanas. Toma unos dos minutos.",
      treatment: { href: "/es/treatments/depression", label: "la atención para la depresión en nuestra clínica de Aventura" },
      other: { href: "/es/tools/gad-7-anxiety-test", label: "prueba de ansiedad GAD-7" },
    },
  },
  gad7: {
    en: {
      what: "The GAD-7 (Generalized Anxiety Disorder-7) is a 7-question anxiety screener used widely in primary care and mental health care. It asks how often you have been bothered by common anxiety symptoms over the last two weeks. It takes about two minutes.",
      treatment: { href: "/treatments/anxiety", label: "anxiety care at our Aventura clinic" },
      other: { href: "/tools/phq-9-depression-test", label: "PHQ-9 depression test" },
    },
    es: {
      what: "El GAD-7 (Trastorno de Ansiedad Generalizada-7) es un cuestionario de 7 preguntas para detectar síntomas de ansiedad que se usa ampliamente en atención primaria y salud mental. Pregunta con qué frecuencia le han molestado ciertos síntomas de ansiedad durante las últimas dos semanas. Toma unos dos minutos.",
      treatment: { href: "/es/treatments/anxiety", label: "la atención para la ansiedad en nuestra clínica de Aventura" },
      other: { href: "/es/tools/phq-9-depression-test", label: "prueba de depresión PHQ-9" },
    },
  },
};

export default function ScreenerPage({
  config,
  enPath,
  title,
  subtitle,
  description,
}: {
  config: ScreenerConfig;
  enPath: string;
  title: string;
  subtitle: string;
  description: string;
}) {
  const lang = config.lang;
  const es = lang === "es";
  const path = es ? `/es${enPath}` : enPath;
  const copy = COPY[config.id][lang];
  const sources = es ? [SPANISH_FORM_SOURCE[config.id], ...SOURCES[config.id]] : SOURCES[config.id];
  const jsonLd = pageJsonLd({
    lang,
    path,
    name: title,
    description,
    about: { "@type": "MedicalCondition", name: config.id === "phq9" ? (es ? "Depresión" : "Depression") : es ? "Ansiedad" : "Anxiety" },
    crumbs: [
      { name: es ? "Inicio" : "Home", path: es ? "/es" : "/" },
      { name: es ? "Herramientas" : "Tools", path: es ? "/es/tools" : "/tools" },
      { name: title, path },
    ],
  });

  return (
    <PageShell lang={lang} title={title} subtitle={subtitle} jsonLd={jsonLd} altHref={es ? enPath : `/es${enPath}`}>
      <p className="text-[#555] text-lg mb-6">{copy.what}</p>
      <p className="text-[#555] mb-8">
        {es
          ? "Esta es una herramienta de detección, no un diagnóstico. Úsela como punto de partida para una conversación con un profesional."
          : "This is a screening tool, not a diagnosis. Use it as a starting point for a conversation with a professional."}
      </p>
      <div className="mb-10">
        <CrisisBox lang={lang} />
      </div>

      <Screener config={config} />

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-14 mb-4">{es ? "Cómo se calcula el puntaje" : "How the score works"}</h2>
      <p className="text-[#555] mb-4">
        {es
          ? `Cada respuesta vale de 0 (“${config.options[0]}”) a 3 (“${config.options[3]}”). Se suman todas las respuestas para un total de 0 a ${config.maxScore}. Estos son los rangos estándar publicados por los autores del cuestionario:`
          : `Each answer is worth 0 (“${config.options[0]}”) to 3 (“${config.options[3]}”). The answers are added up for a total from 0 to ${config.maxScore}. These are the standard ranges published by the questionnaire’s authors:`}
      </p>
      <table className="w-full text-left text-[#444] mb-6 border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-[#0B1D36] text-white">
          <tr>
            <th className="px-4 py-2">{es ? "Puntaje" : "Score"}</th>
            <th className="px-4 py-2">{es ? "Nivel de síntomas" : "Symptom level"}</th>
          </tr>
        </thead>
        <tbody>
          {config.bands.map((b) => (
            <tr key={b.label} className="border-t border-gray-200">
              <td className="px-4 py-2">{b.min}–{b.max}</td>
              <td className="px-4 py-2">{b.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {config.id === "phq9" && (
        <p className="text-[#555] mb-4">
          {es
            ? "Cualquier respuesta distinta de “Ningún día” en la pregunta 9 es importante, sin importar el puntaje total. Si ese es su caso, por favor llame al 988 y oprima 2, envíe AYUDA por mensaje de texto al 988, o llame al 911 si está en peligro inmediato."
            : "Any answer other than “Not at all” on question 9 matters, whatever your total score. If that is you, please call or text 988, or call 911 if you are in immediate danger."}
        </p>
      )}

      <h2 className="text-2xl font-bold text-[#0B1D36] mt-12 mb-4">{es ? "Qué hacer con su resultado" : "What to do with your result"}</h2>
      <ul className="list-disc pl-5 space-y-2 text-[#555] mb-6">
        {es ? (
          <>
            <li>Comparta su puntaje con su médico de cabecera, psiquiatra o terapeuta. Puede anotarlo o tomar una captura de pantalla; nosotros no lo guardamos.</li>
            <li>Repetir el cuestionario cada pocas semanas puede mostrar si sus síntomas están cambiando.</li>
            <li>Si quiere hablar de opciones, incluida {" "}<Link href={copy.treatment.href} className="text-[#C9A66B] font-semibold hover:underline">{copy.treatment.label}</Link>, puede reservar una consulta gratuita.</li>
            <li>También puede hacer la <Link href={copy.other.href} className="text-[#C9A66B] font-semibold hover:underline">{copy.other.label}</Link>.</li>
          </>
        ) : (
          <>
            <li>Share your score with your primary care doctor, psychiatrist, or therapist. You can write it down or take a screenshot; we do not keep it.</li>
            <li>Repeating the questionnaire every few weeks can show whether your symptoms are changing.</li>
            <li>If you want to talk through options, including <Link href={copy.treatment.href} className="text-[#C9A66B] font-semibold hover:underline">{copy.treatment.label}</Link>, you can book a free consultation.</li>
            <li>You can also take the <Link href={copy.other.href} className="text-[#C9A66B] font-semibold hover:underline">{copy.other.label}</Link>.</li>
          </>
        )}
      </ul>
      <EducationNote lang={lang} />
      <SourceList lang={lang} sources={sources} />
    </PageShell>
  );
}
