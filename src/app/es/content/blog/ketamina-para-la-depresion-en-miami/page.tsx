import BlogPostEs from "@/components/es/BlogPostEs";
import { H2, P, UL, A, Ref, Callout, Faq, CrisisNote } from "@/components/es/BlogProse";
import ScreenerPromo from "@/components/tools/ScreenerPromo";
import type { Source } from "@/data/medical-review";

const SOURCES: Source[] = [
  { label: "Depresión.", href: "https://medlineplus.gov/spanish/depression.html", site: "MedlinePlus en español (Biblioteca Nacional de Medicina de EE. UU.)" },
  { label: "Depresión (folleto en español).", href: "https://www.nimh.nih.gov/health/publications/espanol/depresion-sp", site: "Instituto Nacional de la Salud Mental (NIMH)" },
  { label: "Berman RM y cols. Antidepressant effects of ketamine in depressed patients. Biol Psychiatry, 2000.", href: "https://pubmed.ncbi.nlm.nih.gov/10686270/", site: "PubMed" },
  { label: "Zarate CA y cols. A randomized trial of an N-methyl-D-aspartate antagonist in treatment-resistant major depression. Arch Gen Psychiatry, 2006.", href: "https://pubmed.ncbi.nlm.nih.gov/16894061/", site: "PubMed" },
  { label: "McIntyre RS y cols. Synthesizing the evidence for ketamine and esketamine in treatment-resistant depression: an international expert opinion. Am J Psychiatry, 2021.", href: "https://pubmed.ncbi.nlm.nih.gov/33726522/", site: "PubMed" },
  { label: "Aerosol nasal de esketamina (Spravato): información para pacientes.", href: "https://medlineplus.gov/spanish/druginfo/meds/a619017-es.html", site: "MedlinePlus en español" },
  { label: "Riesgos de la ketamina preparada en farmacias de compuestos (alerta del 10 de octubre de 2023).", href: "https://www.fda.gov/drugs/human-drug-compounding/compounding-risk-alerts", site: "FDA (Administración de Alimentos y Medicamentos)" },
];

export default function Page() {
  return (
    <BlogPostEs
      slug="ketamina-para-la-depresion-en-miami"
      subtitle="Qué es, para quién puede ser una opción y cómo es el proceso en nuestra clínica de Aventura, explicado con calma y en su idioma."
      sources={SOURCES}
      about={{ "@type": "MedicalCondition", name: "Depresión resistente al tratamiento" }}
      related={[
        { href: "/es/treatments/depression", label: "Terapia con ketamina para la depresión en Aventura" },
        { href: "/es/services/iv-ketamine-vs-spravato", label: "Ketamina IV vs. Spravato: diferencias" },
        { href: "/es/content/blog/cuanto-cuesta-la-ketamina-en-miami", label: "¿Cuánto cuesta la ketamina en Miami?" },
        { href: "/es/content/blog/ketamina-vs-antidepresivos", label: "Ketamina vs. antidepresivos" },
      ]}
    >
      <P>
        Cada semana platicamos con personas de Miami, Hialeah, North Miami y Fort Lauderdale que llevan años con depresión, que ya
        probaron uno, dos o tres antidepresivos, y que buscan información sobre la ketamina en español. Lo que encuentran casi
        siempre está en inglés o suena a publicidad. Por eso escribimos esta guía: para explicarle, sin rodeos y sin promesas,
        qué es la terapia con ketamina, para quién puede ser una opción y cómo es el proceso en nuestra clínica de Aventura.
      </P>

      <H2>Primero lo primero: la depresión es una condición médica</H2>
      <P>
        La depresión no es flojera ni falta de fe. Es una condición médica que afecta cómo piensa, cómo siente y cómo funciona
        una persona en su día a día: el sueño, el apetito, la energía, la concentración y las ganas de hacer las cosas que antes
        disfrutaba<Ref n={[1, 2]} />. También tiene tratamiento. La mayoría de las personas empieza con psicoterapia,
        antidepresivos o ambos, y para muchas eso es suficiente.
      </P>
      <P>
        Cuando una persona ha probado al menos dos antidepresivos, a la dosis y por el tiempo adecuados, y la depresión sigue ahí,
        los médicos suelen hablar de <strong>depresión resistente al tratamiento</strong>. Ese es el grupo en el que más se ha
        estudiado la ketamina.
      </P>

      <H2>¿Cómo actúa la ketamina?</H2>
      <P>
        La mayoría de los antidepresivos que se toman a diario actúan sobre la serotonina y otros mensajeros químicos, y suelen
        tardar varias semanas en notarse. La ketamina actúa de otra forma: sobre el glutamato, uno de los mensajeros principales
        del cerebro, a través de los receptores NMDA. Desde los primeros estudios controlados, publicados en 2000 y 2006, los
        investigadores observaron que en algunas personas con depresión el ánimo podía mejorar en horas o días, no en semanas
        <Ref n={[3, 4]} />.
      </P>
      <P>
        Un grupo internacional de expertos revisó la evidencia en 2021 y concluyó que la ketamina y la esketamina tienen un lugar
        en el tratamiento de la depresión resistente, siempre con evaluación y monitoreo adecuados<Ref n={5} />. Dicho de forma
        sencilla: la ketamina <strong>puede ayudar</strong> a algunas personas cuyo ánimo no ha mejorado con otros tratamientos.
        No funciona para todos, el efecto puede ir bajando con el tiempo y no sustituye la psicoterapia ni el seguimiento.
      </P>

      <H2>Ketamina IV y Spravato no son lo mismo</H2>
      <UL>
        <li>
          <strong>Ketamina intravenosa (IV).</strong> La ketamina está aprobada por la FDA como anestésico. Usarla en dosis bajas
          para la depresión es un uso &quot;fuera de etiqueta&quot; (off-label): un uso legal que decide un profesional con
          licencia, pero que la FDA no ha aprobado para ninguna condición psiquiátrica<Ref n={7} />. Se administra en una sala
          privada, con monitoreo continuo.
        </li>
        <li>
          <strong>Spravato (esketamina en espray nasal).</strong> Está aprobado por la FDA para adultos con depresión resistente
          al tratamiento y para síntomas depresivos en adultos con ideación o conducta suicida aguda (en ese caso, junto con un
          antidepresivo oral). Solo se usa en clínicas certificadas en el programa REMS, con al menos dos horas de observación
          <Ref n={6} />.
        </li>
      </UL>
      <P>
        Si quiere ver las dos opciones lado a lado, tenemos una página que compara la{" "}
        <A href="/es/services/iv-ketamine-vs-spravato">ketamina IV y Spravato</A>, y una guía completa de{" "}
        <A href="/es/content/blog/spravato-esketamina-en-espanol">Spravato en español</A>.
      </P>

      <H2>¿Quién puede ser candidato y quién no?</H2>
      <P>
        La única forma de saberlo es con una evaluación médica. En general, la ketamina se considera en adultos con depresión que
        no ha mejorado lo suficiente con otros tratamientos. Hay situaciones que piden mucha precaución o que pueden hacer que no
        sea adecuada:
      </P>
      <UL>
        <li>Presión arterial alta no controlada o ciertas enfermedades del corazón o de los vasos sanguíneos.</li>
        <li>Antecedentes de psicosis.</li>
        <li>Consumo problemático de alcohol u otras sustancias, actual o reciente.</li>
        <li>Embarazo o lactancia.</li>
      </UL>
      <P>
        En la consulta revisamos su historial de salud, sus medicamentos y lo que ya ha intentado. Si la ketamina no es la opción
        más segura para usted, se lo decimos con claridad y le orientamos hacia otras opciones.
      </P>

      <H2>¿Cómo es el proceso en Rewired Ketamine?</H2>
      <UL>
        <li><strong>Consulta gratuita.</strong> Nos cuenta qué está viviendo y qué ha probado. Puede ser completamente en español.</li>
        <li><strong>Evaluación médica.</strong> Historial, medicamentos, presión arterial y metas.</li>
        <li>
          <strong>Sesiones en sala privada.</strong> La infusión de salud mental dura alrededor de una hora, con monitoreo
          continuo. Hay sesiones totalmente guiadas, en las que un miembro del equipo clínico permanece con usted.
        </li>
        <li><strong>Después de la sesión.</strong> Descansa un rato y se va a casa con alguien que maneje. Ese día no debe manejar.</li>
        <li><strong>Integración.</strong> Le ayudamos a llevar lo que vivió en las sesiones a su vida diaria.</li>
      </UL>

      <H2>Efectos secundarios más comunes</H2>
      <P>
        Durante la sesión y poco después, es común sentirse &quot;desconectado&quot; o como en un sueño (disociación), con mareo,
        náusea, somnolencia o un aumento temporal de la presión arterial. Por eso el monitoreo importa tanto<Ref n={6} />. La FDA
        también ha advertido sobre los riesgos de usar ketamina sin supervisión de un profesional<Ref n={7} />.
      </P>

      <ScreenerPromo lang="es" tool="phq9" />

      <Callout>
        <strong>Un consejo importante:</strong> no deje ni cambie sus antidepresivos por su cuenta para &quot;probar&quot; la
        ketamina. Hable primero con quien se los receta. Muchas personas siguen con su tratamiento actual mientras evaluamos si la
        ketamina tiene sentido.
      </Callout>

      <H2>Preguntas frecuentes</H2>
      <Faq
        items={[
          {
            q: "¿Me pueden atender completamente en español?",
            a: "Sí. La consulta, las instrucciones, las sesiones y el seguimiento pueden ser en español. ¡Hablamos Español, de verdad!",
          },
          {
            q: "¿Cuántas sesiones se necesitan?",
            a: (
              <>
                Depende de cada persona. Muchos planes empiezan con una serie de varias sesiones y luego se ajustan según cómo
                responde. Lo decidimos con usted en la consulta. Puede ver los precios en nuestra{" "}
                <A href="/es/tools/ketamine-cost-calculator">calculadora de costos</A>.
              </>
            ),
          },
          {
            q: "¿Lo cubre el seguro?",
            a: (
              <>
                La ketamina IV normalmente se paga en efectivo y le damos una superfactura (superbill). Spravato puede estar cubierto
                por algunos planes con autorización previa, pero la cobertura no está garantizada. Más detalles en{" "}
                <A href="/es/services/ketamine-insurance">seguro y ketamina</A>.
              </>
            ),
          },
        ]}
      />

      <CrisisNote />
    </BlogPostEs>
  );
}
