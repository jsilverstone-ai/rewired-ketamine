import ScreenerPage from "@/components/tools/ScreenerPage";
import { PHQ9_ES } from "@/data/screeners";
import { pairedMetadata } from "@/data/page-meta";

const PATH = "/tools/phq-9-depression-test";
const TITLE = "Prueba de Depresión PHQ-9 Gratis";
const DESCRIPTION = "Haga gratis el cuestionario PHQ-9 para detectar síntomas de depresión, en español. Se califica al instante en su navegador; no se guarda ni se envía nada. No es un diagnóstico.";

export const metadata = pairedMetadata("es", PATH, TITLE, DESCRIPTION);

export default function Page() {
  return (
    <ScreenerPage
      config={PHQ9_ES}
      enPath={PATH}
      title={TITLE}
      subtitle="El mismo cuestionario de 9 preguntas que usan los profesionales. Unos dos minutos, calificado en privado en su navegador."
      description={DESCRIPTION}
    />
  );
}
