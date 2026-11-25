import HsaFsaPage, { HSA_PATH } from "@/components/tools/HsaFsaPage";
import { pairedMetadata } from "@/data/page-meta";

const TITLE = "¿Puede usar su HSA o FSA para el tratamiento con ketamina?";
const DESCRIPTION = "Cómo se pueden usar en general los fondos de una HSA o FSA para el tratamiento médico con ketamina, qué documentos le pueden pedir y qué preguntar a su plan. Aventura, FL.";

export const metadata = pairedMetadata("es", HSA_PATH, TITLE, DESCRIPTION);

export default function Page() {
  return <HsaFsaPage lang="es" title={TITLE} description={DESCRIPTION} />;
}
