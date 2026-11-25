import ScreenerPage from "@/components/tools/ScreenerPage";
import { GAD7_EN } from "@/data/screeners";
import { pairedMetadata } from "@/data/page-meta";

const PATH = "/tools/gad-7-anxiety-test";
const TITLE = "Free GAD-7 Anxiety Test";
const DESCRIPTION = "Take the free GAD-7 anxiety screening questionnaire. Scored instantly in your browser; nothing is saved or sent. A screening tool, not a diagnosis. ¡Hablamos Español!";

export const metadata = pairedMetadata("en", PATH, TITLE, DESCRIPTION);

export default function Page() {
  return (
    <ScreenerPage
      config={GAD7_EN}
      enPath={PATH}
      title={TITLE}
      subtitle="The same 7-question anxiety screener clinicians use. About two minutes, scored privately in your browser."
      description={DESCRIPTION}
    />
  );
}
