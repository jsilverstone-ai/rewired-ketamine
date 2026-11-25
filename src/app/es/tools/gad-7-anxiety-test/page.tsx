import ScreenerPage from "@/components/tools/ScreenerPage";
import { GAD7_ES } from "@/data/screeners";
import { pairedMetadata } from "@/data/page-meta";

const PATH = "/tools/gad-7-anxiety-test";
const TITLE = "Prueba de Ansiedad GAD-7 Gratis";
const DESCRIPTION = "Haga gratis el cuestionario GAD-7 para detectar síntomas de ansiedad, en español. Se califica al instante en su navegador; no se guarda ni se envía nada. No es un diagnóstico.";

export const metadata = pairedMetadata("es", PATH, TITLE, DESCRIPTION);

export default function Page() {
  return (
    <ScreenerPage
      config={GAD7_ES}
      enPath={PATH}
      title={TITLE}
      subtitle="El mismo cuestionario de 7 preguntas que usan los profesionales. Unos dos minutos, calificado en privado en su navegador."
      description={DESCRIPTION}
    />
  );
}
