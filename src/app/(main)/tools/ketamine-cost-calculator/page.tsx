import CostCalculatorPage, { COST_PATH } from "@/components/tools/CostCalculatorPage";
import { pairedMetadata } from "@/data/page-meta";

const TITLE = "Ketamine Cost Calculator";
const DESCRIPTION = "Compare IV ketamine single sessions vs. packages, Spravato, and at-home ketamine using Rewired Ketamine’s published Aventura prices. Runs in your browser. ¡Hablamos Español!";

export const metadata = pairedMetadata("en", COST_PATH, TITLE, DESCRIPTION);

export default function Page() {
  return <CostCalculatorPage lang="en" title={TITLE} description={DESCRIPTION} />;
}
