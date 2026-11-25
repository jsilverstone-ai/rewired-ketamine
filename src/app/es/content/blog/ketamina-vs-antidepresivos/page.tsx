import BlogPostEs from "@/components/es/BlogPostEs";
import { H2, P, A, Ref, Callout, Faq, CrisisNote } from "@/components/es/BlogProse";
import ScreenerPromo from "@/components/tools/ScreenerPromo";
import type { Source } from "@/data/medical-review";

const SOURCES: Source[] = [
  { label: "Antidepresivos.", href: "https://medlineplus.gov/spanish/antidepressants.html", site: "MedlinePlus en español" },
  { label: "Depresión (folleto en español).", href: "https://www.nimh.nih.gov/health/publications/espanol/depresion-sp", site: "NIMH" },
  { label: "Rush AJ y cols. Acute and longer-term outcomes in depressed outpatients requiring one or several treatment steps: a STAR*D report. Am J Psychiatry, 2006.", href: "https://pubmed.ncbi.nlm.nih.gov/17074942/", site: "PubMed" },
  { label: "Zarate CA y cols. A randomized trial of an N-methyl-D-aspartate antagonist in treatment-resistant major depression. Arch Gen Psychiatry, 2006.", href: "https://pubmed.ncbi.nlm.nih.gov/16894061/", site: "PubMed" },
  { label: "McIntyre RS y cols. Synthesizing the evidence for ketamine and esketamine in treatment-resistant depression. Am J Psychiatry, 2021.", href: "https://pubmed.ncbi.nlm.nih.gov/33726522/", site: "PubMed" },
  { label: "Anand A y cols. Ketamine versus ECT for nonpsychotic treatment-resistant major depression. N Engl J Med, 2023.", href: "https://pubmed.ncbi.nlm.nih.gov/37224232/", site: "PubMed" },
  { label: "Carta de aprobación de la FDA: Spravato como monoterapia para la depresión resistente al tratamiento (17 de enero de 2025).", href: "https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2025/211243Orig1s016ltr.pdf", site: "FDA" },
  { label: "Aerosol nasal de esketamina (Spravato): información para pacientes.", href: "https://medlineplus.gov/spanish/druginfo/meds/a619017-es.html", site: "MedlinePlus en español" },
];

export default function Page() {
  return (
    <BlogPostEs
      slug="ketamina-vs-antidepresivos"
      subtitle="Cómo actúan, cuánto tardan, cómo se toman y por qué muchas veces no es una cosa o la otra."
      sources={SOURCES}
      related={[
        { href: "/es/content/blog/ketamina-para-la-depresion-en-miami", label: "Ketamina para la depresión en Miami: guía en español" },
        { href: "/es/content/blog/spravato-esketamina-en-espanol", label: "Spravato (esketamina) en español" },
        { href: "/es/treatments/depression", label: "Terapia con ketamina para la depresión" },
        { href: "/es/tools/phq-9-depression-test", label: "Prueba de depresión PHQ-9 gratuita" },
      ]}
    >
      <P>
        &quot;Doctor, ya probé tres pastillas y sigo igual. ¿La ketamina es otra pastilla más?&quot; Es una de las preguntas que más
        escuchamos. La respuesta corta es no: la ketamina es un tratamiento distinto, con otra forma de actuar y de administrarse.
        Pero tampoco es un reemplazo automático de los antidepresivos. Aquí le explicamos las diferencias con calma.
      </P>

      <H2>Cómo actúan los antidepresivos de todos los días</H2>
      <P>
        Los antidepresivos más recetados, como los ISRS (por ejemplo, sertralina, fluoxetina o escitalopram) y los IRSN, actúan
        sobre la serotonina y la noradrenalina. Se toman todos los días, por la boca, y suelen tardar varias semanas en mostrar su
        efecto completo<Ref n={1} />. Para muchas personas funcionan bien, sobre todo junto con psicoterapia<Ref n={2} />.
      </P>
      <P>
        Pero no siempre funciona el primero. En el estudio STAR*D, uno de los más grandes sobre el tratamiento de la depresión,
        muchas personas necesitaron probar más de un tratamiento, uno tras otro, y cada paso adicional fue más difícil
        <Ref n={3} />. Por eso existe el término &quot;depresión resistente al tratamiento&quot;.
      </P>

      <H2>Cómo actúa la ketamina</H2>
      <P>
        La ketamina actúa sobre el glutamato, otro mensajero químico del cerebro, bloqueando los receptores NMDA. En los estudios,
        algunas personas con depresión resistente notaron mejoría en horas o días<Ref n={4} />. Los expertos creen que este efecto
        tiene que ver con cambios en las conexiones entre neuronas (lo que a veces se llama neuroplasticidad), aunque todavía se
        sigue investigando cómo funciona exactamente<Ref n={5} />.
      </P>
      <P>
        En 2023, un estudio grande publicado en el <em>New England Journal of Medicine</em> comparó la ketamina IV con la terapia
        electroconvulsiva (TEC) en personas con depresión resistente sin psicosis, y encontró que la ketamina no fue inferior
        <Ref n={6} />. Es una señal importante, pero no significa que la ketamina sea la mejor opción para todos.
      </P>

      <H2>Las diferencias, lado a lado</H2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border border-[#eee] text-sm md:text-base">
          <thead className="bg-[#F8F5F0] text-[#0B1D36]">
            <tr>
              <th className="p-2 md:p-3"></th>
              <th className="p-2 md:p-3">Antidepresivos orales</th>
              <th className="p-2 md:p-3">Ketamina / esketamina</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#eee]">
              <td className="p-2 md:p-3 font-semibold">Cómo actúan</td>
              <td className="p-2 md:p-3">Serotonina y noradrenalina, principalmente</td>
              <td className="p-2 md:p-3">Glutamato (receptores NMDA)</td>
            </tr>
            <tr className="border-t border-[#eee]">
              <td className="p-2 md:p-3 font-semibold">Cómo se toman</td>
              <td className="p-2 md:p-3">Pastilla diaria en casa</td>
              <td className="p-2 md:p-3">Infusión IV o espray nasal en clínica, en sesiones programadas</td>
            </tr>
            <tr className="border-t border-[#eee]">
              <td className="p-2 md:p-3 font-semibold">Cuándo se nota</td>
              <td className="p-2 md:p-3">Por lo general, varias semanas</td>
              <td className="p-2 md:p-3">En algunas personas, horas o días; no en todas</td>
            </tr>
            <tr className="border-t border-[#eee]">
              <td className="p-2 md:p-3 font-semibold">Efectos secundarios comunes</td>
              <td className="p-2 md:p-3">Náusea, cambios en el sueño, el peso o la función sexual</td>
              <td className="p-2 md:p-3">Disociación, mareo, náusea, somnolencia y aumento temporal de la presión durante la sesión</td>
            </tr>
            <tr className="border-t border-[#eee]">
              <td className="p-2 md:p-3 font-semibold">Aprobación de la FDA para depresión</td>
              <td className="p-2 md:p-3">Sí</td>
              <td className="p-2 md:p-3">Spravato, sí. La ketamina IV es un uso fuera de etiqueta</td>
            </tr>
          </tbody>
        </table>
      </div>
      <P>Fuentes de la tabla: MedlinePlus y la información de Spravato<Ref n={[1, 8]} />.</P>

      <H2>¿Tengo que dejar mis antidepresivos?</H2>
      <P>
        No necesariamente, y nunca de golpe ni por su cuenta. Suspender un antidepresivo de repente puede causar síntomas
        molestos<Ref n={1} />. Muchas personas reciben ketamina IV mientras siguen con su medicamento actual. En el caso de
        Spravato, desde enero de 2025 la FDA permite usarlo solo o junto con un antidepresivo oral para la depresión resistente al
        tratamiento<Ref n={7} />. Esa decisión se toma con su profesional de salud, revisando su caso.
      </P>

      <Callout>
        La pregunta no es &quot;¿ketamina o antidepresivos?&quot;, sino &quot;¿qué combinación de tratamientos tiene más sentido
        para mí ahora?&quot;. Para algunas personas la respuesta incluye ketamina, para otras no. Lo importante es que la decisión
        sea informada.
      </Callout>

      <ScreenerPromo lang="es" tool="phq9" />

      <H2>Preguntas frecuentes</H2>
      <Faq
        items={[
          {
            q: "¿La ketamina crea adicción?",
            a: "La ketamina tiene potencial de abuso, sobre todo fuera de un entorno médico. Por eso solo debe usarse con evaluación, dosis medidas y supervisión. En la consulta revisamos su historial de consumo de sustancias.",
          },
          {
            q: "¿El efecto de la ketamina es permanente?",
            a: "No se puede prometer eso. En muchas personas el efecto va bajando con el tiempo, por eso se trabaja con series de sesiones, seguimiento e integración, y a veces con sesiones de mantenimiento.",
          },
          {
            q: "¿Quién decide si la ketamina es para mí?",
            a: (
              <>
                Usted, junto con nuestro equipo clínico, después de una evaluación. Puede empezar con una{" "}
                <A href="/es#contact">consulta gratuita</A>.
              </>
            ),
          },
        ]}
      />

      <CrisisNote />
    </BlogPostEs>
  );
}
