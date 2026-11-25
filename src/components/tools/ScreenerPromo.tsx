import Link from "next/link";

/** Small "take the free screener" block for treatment pages. */
export default function ScreenerPromo({ lang, tool }: { lang: "en" | "es"; tool: "phq9" | "gad7" }) {
  const es = lang === "es";
  const href = `${es ? "/es" : ""}/tools/${tool === "phq9" ? "phq-9-depression-test" : "gad-7-anxiety-test"}`;
  const name = tool === "phq9" ? "PHQ-9" : "GAD-7";
  const topic = tool === "phq9" ? (es ? "depresión" : "depression") : es ? "ansiedad" : "anxiety";
  return (
    <section className="py-12 px-6 bg-[#F8F5F0]">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-[#eee] text-center">
        <h2 className="text-2xl font-bold text-[#0B1D36] mb-3">
          {es ? `Prueba gratuita de ${topic} ${name}` : `Free ${name} ${topic} self-check`}
        </h2>
        <p className="text-[#555] mb-5">
          {es
            ? "Unos dos minutos, calificada en privado en su navegador. Es una herramienta de detección, no un diagnóstico."
            : "About two minutes, scored privately in your browser. It is a screening tool, not a diagnosis."}
        </p>
        <Link href={href} className="inline-block bg-[#C9A66B] text-[#0B1D36] font-bold px-6 py-3 rounded hover:bg-[#0B1D36] hover:text-white transition">
          {es ? `Hacer la prueba ${name}` : `Take the ${name}`}
        </Link>
      </div>
    </section>
  );
}
