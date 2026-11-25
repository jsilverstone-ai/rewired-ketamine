import HsaFsaPage, { HSA_PATH } from "@/components/tools/HsaFsaPage";
import { pairedMetadata } from "@/data/page-meta";

const TITLE = "Can You Use HSA or FSA Funds for Ketamine Treatment?";
const DESCRIPTION = "How HSA and FSA funds can generally be used for medical ketamine treatment, the paperwork (superbill, letter of medical necessity), and what to ask your plan. Aventura, FL.";

export const metadata = pairedMetadata("en", HSA_PATH, TITLE, DESCRIPTION);

export default function Page() {
  return <HsaFsaPage lang="en" title={TITLE} description={DESCRIPTION} />;
}
