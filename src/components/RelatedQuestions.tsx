import { relatedQuestions } from "@/data/related-questions";

export function CrisisNote({ lang = "en" }: { lang?: "en" | "es" }) {
  return (
    <div
      role="note"
      className="bg-[#F8F5F0] border-l-4 border-[#C9A66B] rounded-xl p-5 mb-8 text-[#333]"
    >
      {lang === "es" ? (
        <p>
          <strong>Si está en crisis o piensa en hacerse daño,</strong> llame al{" "}
          <a href="tel:988" className="font-semibold underline">988</a> y marque 2 para español, o envíe un mensaje
          de texto con la palabra AYUDA al 988 (Línea de Prevención del Suicidio y Crisis). En una emergencia, llame al{" "}
          <a href="tel:911" className="font-semibold underline">911</a>. La terapia con ketamina no es atención de emergencia.
        </p>
      ) : (
        <p>
          <strong>If you are in crisis or thinking about harming yourself,</strong> call or text{" "}
          <a href="tel:988" className="font-semibold underline">988</a> (Suicide &amp; Crisis Lifeline) or call{" "}
          <a href="tel:911" className="font-semibold underline">911</a>. Ketamine therapy is not emergency care.
        </p>
      )}
    </div>
  );
}

export default function RelatedQuestions({ path }: { path: string }) {
  const block = relatedQuestions[path];
  if (!block) return null;

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#0B1D36] mb-8 text-center">{block.heading}</h2>
        {block.crisisNote && <CrisisNote />}
        <div className="space-y-6">
          {block.items.map((item) => (
            <div key={item.question} className="bg-[#F8F5F0] rounded-xl p-6 border border-[#eee]">
              <h3 className="font-semibold text-[#0B1D36] text-lg mb-2">{item.question}</h3>
              <p className="text-[#555] leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
