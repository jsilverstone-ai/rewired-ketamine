import CostCalculatorPage, { COST_PATH } from "@/components/tools/CostCalculatorPage";
import { pairedMetadata } from "@/data/page-meta";

const TITLE = "Calculadora de Costos de Ketamina";
const DESCRIPTION = "Compare sesiones individuales y paquetes de ketamina IV, Spravato y ketamina en casa con los precios publicados de Rewired Ketamine en Aventura. Funciona en su navegador.";

export const metadata = pairedMetadata("es", COST_PATH, TITLE, DESCRIPTION);

export default function Page() {
  return <CostCalculatorPage lang="es" title={TITLE} description={DESCRIPTION} />;
}
