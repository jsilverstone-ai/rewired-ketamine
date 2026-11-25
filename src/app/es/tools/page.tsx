import ToolsHub from "@/components/tools/ToolsHub";
import { pairedMetadata } from "@/data/page-meta";

const TITLE = "Herramientas Gratuitas de Salud Mental y Costos";
const DESCRIPTION = "Cuestionarios gratuitos PHQ-9 de depresión y GAD-7 de ansiedad, calculadora de costos de ketamina y guías de HSA/FSA y seguros para Spravato, en español.";

export const metadata = pairedMetadata("es", "/tools", TITLE, DESCRIPTION);

export default function Page() {
  return <ToolsHub lang="es" title={TITLE} description={DESCRIPTION} />;
}
