import ScreenerPage from "@/components/tools/ScreenerPage";
import { PHQ9_EN } from "@/data/screeners";
import { pairedMetadata } from "@/data/page-meta";

const PATH = "/tools/phq-9-depression-test";
const TITLE = "Free PHQ-9 Depression Test";
const DESCRIPTION = "Take the free PHQ-9 depression screening questionnaire. Scored instantly in your browser; nothing is saved or sent. A screening tool, not a diagnosis. ¡Hablamos Español!";

export const metadata = pairedMetadata("en", PATH, TITLE, DESCRIPTION);

export default function Page() {
  return (
    <ScreenerPage
      config={PHQ9_EN}
      enPath={PATH}
      title={TITLE}
      subtitle="The same 9-question depression screener clinicians use. About two minutes, scored privately in your browser."
      description={DESCRIPTION}
    />
  );
}
