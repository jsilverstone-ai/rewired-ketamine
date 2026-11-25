"use client";

// Self-scoring screener. Everything happens in this component's React state:
// no network requests, no localStorage/sessionStorage/cookies, no analytics events,
// and no answers in the URL. Reloading the page clears the answers.

import Link from "next/link";
import { useState } from "react";
import type { ScreenerConfig } from "@/data/screeners";
import CrisisBox from "./CrisisBox";

const UI = {
  en: {
    question: "Question",
    of: "of",
    answered: "answered",
    results: "See my score",
    finish: "Answer every question to see your score.",
    reset: "Start over",
    yourScore: "Your score",
    outOf: "out of",
    level: "Symptom level",
    notDiagnosis:
      "This is a screening tool, not a diagnosis. Only a licensed clinician can diagnose depression or anxiety, after a full evaluation. Scores can be affected by grief, sleep, medical conditions, medications, or a hard couple of weeks.",
    privacy: "Your answers stay on this device. Nothing is sent, saved, or tracked, and they disappear when you leave or reload the page.",
    ctaTitle: "Want to talk about your score?",
    ctaBody:
      "A free, no-pressure consultation is a calm place to ask questions. We can talk about what your answers may mean and whether any care we offer may help, or point you to other options.",
    ctaButton: "Book a free consultation",
    ctaHref: "/#contact",
    difficultyNote: "This question is not part of the score.",
  },
  es: {
    question: "Pregunta",
    of: "de",
    answered: "respondidas",
    results: "Ver mi puntaje",
    finish: "Responda todas las preguntas para ver su puntaje.",
    reset: "Empezar de nuevo",
    yourScore: "Su puntaje",
    outOf: "de",
    level: "Nivel de síntomas",
    notDiagnosis:
      "Esta es una herramienta de detección, no un diagnóstico. Solo un profesional clínico con licencia puede diagnosticar depresión o ansiedad, después de una evaluación completa. El puntaje puede verse afectado por un duelo, el sueño, condiciones médicas, medicamentos o un par de semanas difíciles.",
    privacy: "Sus respuestas se quedan en este dispositivo. No se envían, no se guardan y no se rastrean; se borran al salir o recargar la página.",
    ctaTitle: "¿Quiere hablar sobre su puntaje?",
    ctaBody:
      "Una consulta gratuita y sin presión es un buen lugar para hacer preguntas. Podemos hablar de lo que pueden significar sus respuestas y de si algún tratamiento que ofrecemos podría ayudarle, o indicarle otras opciones.",
    ctaButton: "Reserve una consulta gratuita",
    ctaHref: "/es#contact",
    difficultyNote: "Esta pregunta no forma parte del puntaje.",
  },
};

export default function Screener({ config }: { config: ScreenerConfig }) {
  const t = UI[config.lang];
  const [answers, setAnswers] = useState<(number | null)[]>(() => config.items.map(() => null));
  const [difficulty, setDifficulty] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const answeredCount = answers.filter((a) => a !== null).length;
  const complete = answeredCount === config.items.length;
  const total = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
  const band = config.bands.find((b) => total >= b.min && total <= b.max) ?? config.bands[0];
  const crisis = config.crisisItem !== undefined && (answers[config.crisisItem] ?? 0) > 0;

  function choose(i: number, v: number) {
    setAnswers((prev) => prev.map((a, j) => (j === i ? v : a)));
  }

  function reset() {
    setAnswers(config.items.map(() => null));
    setDifficulty(null);
    setShowResult(false);
  }

  return (
    <div>
      <p className="text-sm text-[#555] bg-[#F8F5F0] rounded-xl p-4 mb-6">{t.privacy}</p>
      <p className="text-lg font-semibold text-[#0B1D36] mb-6">{config.intro}</p>

      <ol className="space-y-6">
        {config.items.map((item, i) => (
          <li key={i}>
            <fieldset className="bg-white rounded-xl p-5 border border-[#eee]">
              <legend className="sr-only">
                {t.question} {i + 1} {t.of} {config.items.length}
              </legend>
              <p className="font-semibold text-[#0B1D36] mb-4">
                <span className="text-[#C9A66B] mr-2">{i + 1}.</span>
                {item}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                {config.options.map((opt, v) => {
                  const selected = answers[i] === v;
                  return (
                    <label
                      key={v}
                      className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 cursor-pointer text-sm transition ${
                        selected ? "border-[#0B1D36] bg-[#0B1D36] text-white" : "border-gray-300 hover:border-[#C9A66B]"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`${config.id}-q${i}`}
                        value={v}
                        checked={selected}
                        onChange={() => choose(i, v)}
                        className="accent-[#C9A66B]"
                      />
                      <span>
                        {opt} <span className={selected ? "text-white/70" : "text-[#888]"}>({v})</span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
            {config.crisisItem === i && crisis && (
              <div className="mt-4">
                <CrisisBox lang={config.lang} urgent />
              </div>
            )}
          </li>
        ))}
      </ol>

      {config.difficultyQuestion && config.difficultyOptions && (
        <fieldset className="bg-white rounded-xl p-5 border border-[#eee] mt-6">
          <legend className="sr-only">{config.difficultyQuestion}</legend>
          <p className="font-semibold text-[#0B1D36] mb-1">{config.difficultyQuestion}</p>
          <p className="text-xs text-[#777] mb-4">{t.difficultyNote}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {config.difficultyOptions.map((opt, v) => (
              <label
                key={v}
                className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 cursor-pointer text-sm transition ${
                  difficulty === v ? "border-[#0B1D36] bg-[#0B1D36] text-white" : "border-gray-300 hover:border-[#C9A66B]"
                }`}
              >
                <input
                  type="radio"
                  name={`${config.id}-difficulty`}
                  value={v}
                  checked={difficulty === v}
                  onChange={() => setDifficulty(v)}
                  className="accent-[#C9A66B]"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <button
          type="button"
          onClick={() => setShowResult(true)}
          disabled={!complete}
          className="bg-[#C9A66B] text-[#0B1D36] font-bold px-8 py-4 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#0B1D36] hover:text-white transition"
        >
          {t.results}
        </button>
        <button type="button" onClick={reset} className="text-[#0B1D36] underline hover:text-[#C9A66B]">
          {t.reset}
        </button>
        <span className="text-sm text-[#555]" aria-live="polite">
          {answeredCount}/{config.items.length} {t.answered}
          {!complete ? ` · ${t.finish}` : ""}
        </span>
      </div>

      {showResult && complete && (
        <section aria-live="polite" className="mt-10 space-y-6">
          {crisis && <CrisisBox lang={config.lang} urgent />}
          <div className="bg-[#0B1D36] text-white rounded-2xl p-8">
            <p className="text-[#C9A66B] font-semibold uppercase tracking-widest text-sm mb-2">{t.yourScore}</p>
            <p className="text-5xl font-bold mb-2">
              {total} <span className="text-2xl text-white/70">{t.outOf} {config.maxScore}</span>
            </p>
            <p className="text-xl mb-4">
              {t.level}: <strong>{band.label}</strong> ({band.min}–{band.max})
            </p>
            <p className="text-white/85 leading-relaxed">{band.meaning}</p>
          </div>
          <p className="text-[#444] bg-[#F8F5F0] rounded-xl p-5">
            <strong>{config.lang === "es" ? "Importante: " : "Important: "}</strong>
            {t.notDiagnosis}
          </p>
          <div className="bg-white border border-[#eee] rounded-2xl p-6">
            <h3 className="text-xl font-bold text-[#0B1D36] mb-2">{t.ctaTitle}</h3>
            <p className="text-[#555] mb-4">{t.ctaBody}</p>
            <Link
              href={t.ctaHref}
              className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-6 py-3 rounded hover:bg-[#0B1D36] hover:text-white transition"
            >
              {t.ctaButton}
            </Link>
          </div>
        </section>
      )}

      <p className="text-xs text-[#777] mt-10">{config.attribution}</p>
    </div>
  );
}
