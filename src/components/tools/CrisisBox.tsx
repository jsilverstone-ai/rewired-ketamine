/** Prominent crisis resources. Shown on screener pages and whenever PHQ-9 item 9 is above 0. */
export default function CrisisBox({ lang, urgent = false }: { lang: "en" | "es"; urgent?: boolean }) {
  const es = lang === "es";
  return (
    <div
      role={urgent ? "alert" : undefined}
      className={
        urgent
          ? "bg-[#7A1F1F] text-white rounded-2xl p-6 md:p-8 shadow-lg"
          : "bg-white border-2 border-[#7A1F1F]/40 rounded-2xl p-6"
      }
    >
      <h2 className={`font-bold mb-3 ${urgent ? "text-2xl" : "text-lg text-[#7A1F1F]"}`}>
        {urgent
          ? es
            ? "Usted no está solo(a). Hay ayuda disponible ahora mismo."
            : "You are not alone. Help is available right now."
          : es
            ? "Si está en crisis, no espere el resultado"
            : "If you are in crisis, do not wait for a score"}
      </h2>
      {urgent && (
        <p className="mb-4 text-white/90">
          {es
            ? "Usted indicó que ha tenido pensamientos de que estaría mejor muerto(a) o de lastimarse. Eso merece atención hoy. Por favor, hable con alguien ahora."
            : "You said you have had thoughts that you would be better off dead or of hurting yourself. That deserves attention today. Please talk to someone now."}
        </p>
      )}
      <ul className={`space-y-2 ${urgent ? "text-lg" : "text-[#333]"}`}>
        {es ? (
          <>
            <li>
              <strong>Llame al <a href="tel:988" className="underline">988</a> y oprima 2</strong> para hablar en español con la Línea 988 de Prevención del Suicidio y Crisis, las 24 horas.
            </li>
            <li>
              <strong>Envíe la palabra AYUDA por mensaje de texto al <a href="sms:988" className="underline">988</a></strong>.
            </li>
            <li>
              <strong>Si está en peligro inmediato, llame al <a href="tel:911" className="underline">911</a></strong> o vaya a la sala de emergencias más cercana.
            </li>
          </>
        ) : (
          <>
            <li>
              <strong>Call or text <a href="tel:988" className="underline">988</a></strong> to reach the 988 Suicide &amp; Crisis Lifeline, 24/7. You can also chat at{" "}
              <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer" className="underline">988lifeline.org</a>.
            </li>
            <li>
              <strong>If you are in immediate danger, call <a href="tel:911" className="underline">911</a></strong> or go to the nearest emergency room.
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
