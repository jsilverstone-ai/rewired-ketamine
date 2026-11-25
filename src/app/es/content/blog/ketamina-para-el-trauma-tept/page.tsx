import BlogPostEs from "@/components/es/BlogPostEs";
import { H2, P, UL, A, Ref, Callout, Faq, CrisisNote } from "@/components/es/BlogProse";
import type { Source } from "@/data/medical-review";

const SOURCES: Source[] = [
  { label: "Trastorno por estrés postraumático (folleto en español).", href: "https://www.nimh.nih.gov/health/publications/espanol/trastorno-por-estres-postraumatico", site: "NIMH" },
  { label: "Trastorno de estrés postraumático (TEPT).", href: "https://medlineplus.gov/spanish/posttraumaticstressdisorder.html", site: "MedlinePlus en español" },
  { label: "Feder A y cols. Efficacy of intravenous ketamine for treatment of chronic posttraumatic stress disorder: a randomized clinical trial. JAMA Psychiatry, 2014.", href: "https://pubmed.ncbi.nlm.nih.gov/24740528/", site: "PubMed" },
  { label: "Feder A y cols. A randomized controlled trial of repeated ketamine administration for chronic posttraumatic stress disorder. Am J Psychiatry, 2021.", href: "https://pubmed.ncbi.nlm.nih.gov/33397139/", site: "PubMed" },
  { label: "Riesgos de la ketamina preparada en farmacias de compuestos (alerta del 10 de octubre de 2023).", href: "https://www.fda.gov/drugs/human-drug-compounding/compounding-risk-alerts", site: "FDA" },
];

export default function Page() {
  return (
    <BlogPostEs
      slug="ketamina-para-el-trauma-tept"
      subtitle="Qué dicen los estudios, qué tratamientos van primero y qué pasa si le da miedo revivir el trauma durante una sesión."
      sources={SOURCES}
      about={{ "@type": "MedicalCondition", name: "Trastorno de estrés postraumático (TEPT)" }}
      related={[
        { href: "/es/treatments/ptsd", label: "Terapia con ketamina para el TEPT en Aventura" },
        { href: "/es/services/talk-therapy", label: "Terapia de conversación e integración" },
        { href: "/es/content/blog/ketamina-para-la-ansiedad", label: "Ketamina para la ansiedad" },
        { href: "/es/content/blog/salud-mental-en-familias-latinas", label: "Salud mental en las familias latinas" },
      ]}
    >
      <P>
        El trauma no siempre se ve desde afuera. A veces es un accidente, un asalto o una experiencia de guerra. Otras veces es
        algo que pasó en la infancia, durante la migración o dentro de la propia casa. Cuando el cuerpo y la mente se quedan en
        alerta mucho tiempo después de que el peligro pasó, puede tratarse de un trastorno de estrés postraumático (TEPT). Esta
        guía responde, con honestidad, las preguntas que más nos hacen sobre la ketamina y el trauma.
      </P>

      <H2>¿Cómo se ve el TEPT?</H2>
      <P>Los síntomas suelen agruparse así<Ref n={[1, 2]} />:</P>
      <UL>
        <li><strong>Revivir</strong> lo que pasó: recuerdos que llegan sin querer, pesadillas, reacciones fuertes ante algo que se lo recuerda.</li>
        <li><strong>Evitar</strong> lugares, personas, conversaciones o pensamientos relacionados con el trauma.</li>
        <li><strong>Estar en alerta</strong>: sobresaltarse fácil, dormir mal, sentirse tenso o irritable.</li>
        <li><strong>Cambios en el ánimo y los pensamientos</strong>: culpa, vergüenza, sentirse desconectado de los demás.</li>
      </UL>

      <H2>Los tratamientos que van primero</H2>
      <P>
        El NIMH explica que los tratamientos principales del TEPT son la psicoterapia, los medicamentos o una combinación de
        ambos, con un profesional que tenga experiencia en trauma<Ref n={1} />. Las terapias centradas en el trauma tienen la
        evidencia más sólida. La ketamina, si se usa, se suma a ese trabajo; no lo reemplaza.
      </P>

      <H2>¿Qué dicen los estudios sobre la ketamina y el TEPT?</H2>
      <P>
        La ketamina no está aprobada por la FDA para el TEPT; su uso para el trauma es fuera de etiqueta<Ref n={5} />. Lo que
        sí existe son estudios controlados del equipo de Mount Sinai en Nueva York. En 2014 compararon una sola infusión de
        ketamina con un medicamento de control en personas con TEPT crónico, y observaron una reducción rápida de los síntomas
        con la ketamina<Ref n={3} />. En 2021 probaron infusiones repetidas durante dos semanas y también encontraron más mejoría
        con la ketamina que con el control<Ref n={4} />.
      </P>
      <Callout>
        Estos estudios son alentadores, pero fueron pequeños. Se necesitan estudios más grandes. Por eso decimos que la ketamina{" "}
        <strong>puede ayudar</strong> a algunas personas con TEPT, sobre todo cuando se combina con terapia, y nunca que
        &quot;borra&quot; el trauma.
      </Callout>

      <H2>&quot;Me da miedo revivir el trauma durante la sesión&quot;</H2>
      <P>
        Es probablemente la preocupación más común que escuchamos de personas con trauma, y es muy comprensible. Esto es lo que
        conviene saber:
      </P>
      <UL>
        <li>
          <strong>No tiene que contar su historia para recibir ketamina.</strong> Usted decide qué compartir, cuándo y con quién.
        </li>
        <li>
          <strong>Muchas personas describen la experiencia como más distante que intensa.</strong> La ketamina puede dar una
          sensación de observar las cosas desde lejos. Aun así, pueden aparecer recuerdos o emociones, y eso se habla antes.
        </li>
        <li>
          <strong>No está solo.</strong> En una sesión totalmente guiada, un miembro del equipo clínico permanece con usted todo
          el tiempo, y monitoreamos sus signos vitales.
        </li>
        <li>
          <strong>Lo que surja se trabaja después.</strong> La integración, idealmente con su terapeuta, ayuda a darle sentido a
          lo que vivió en la sesión. Si no tiene terapeuta, le podemos conectar con uno.
        </li>
      </UL>

      <H2>¿Es segura la ketamina para personas con trauma?</H2>
      <P>
        Con evaluación y monitoreo adecuados, la ketamina se usa en entornos médicos desde hace décadas. Pero no es para todos. En
        la evaluación revisamos su presión arterial, su corazón, sus medicamentos, antecedentes de psicosis y su historial de
        consumo de alcohol u otras sustancias, que es frecuente en personas con trauma. Si usted vive una situación de peligro
        actual, como una relación violenta, lo primero es su seguridad, y le ayudamos a buscar apoyo.
      </P>

      <H2>Veteranos, socorristas y familias</H2>
      <P>
        En el Sur de Florida atendemos a veteranos, policías, bomberos, paramédicos y personal de salud, además de familias que
        cargan con experiencias muy duras. Si usted es veterano, también puede pedir apoyo a su red del VA. Y si su familia no
        habla inglés, la consulta y el seguimiento pueden ser en español.
      </P>

      <H2>Preguntas frecuentes</H2>
      <Faq
        items={[
          {
            q: "¿Necesito tener un diagnóstico de TEPT?",
            a: "No necesita llegar con un diagnóstico. En la consulta revisamos sus síntomas y su historia, y si hace falta le orientamos hacia una evaluación más completa.",
          },
          {
            q: "¿La ketamina sirve para el trauma de la infancia?",
            a: "Los estudios incluyeron a personas con distintos tipos de trauma, pero hay poca investigación específica sobre el trauma infantil. Es un tema para platicar con calma en la consulta y con su terapeuta.",
          },
          {
            q: "¿Cuántas sesiones se necesitan?",
            a: (
              <>
                Depende de cada persona. Muchos planes empiezan con una serie de sesiones y luego se ajustan. Vea los precios en
                nuestra <A href="/es/tools/ketamine-cost-calculator">calculadora de costos</A>.
              </>
            ),
          },
        ]}
      />

      <CrisisNote />
    </BlogPostEs>
  );
}
