import ToolsHub from "@/components/tools/ToolsHub";
import { pairedMetadata } from "@/data/page-meta";

const TITLE = "Free Mental Health Screeners & Ketamine Cost Tools";
const DESCRIPTION = "Free PHQ-9 depression and GAD-7 anxiety screeners, a ketamine cost calculator, and HSA/FSA and Spravato insurance guides from our Aventura clinic. ¡Hablamos Español!";

export const metadata = pairedMetadata("en", "/tools", TITLE, DESCRIPTION);

export default function Page() {
  return <ToolsHub lang="en" title={TITLE} description={DESCRIPTION} />;
}
