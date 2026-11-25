import BlogPostEs from "@/components/es/BlogPostEs";
import { H2, P, UL, A, Ref, Callout, Faq, CrisisNote } from "@/components/es/BlogProse";
import ScreenerPromo from "@/components/tools/ScreenerPromo";
import type { Source } from "@/data/medical-review";

const SOURCES: Source[] = [
  { label: "Ansiedad.", href: "https://medlineplus.gov/spanish/anxiety.html", site: "MedlinePlus en español" },
  { label: "El trastorno de ansiedad generalizada: lo que debe saber.", href: "https://www.nimh.nih.gov/health/publications/espanol/trastorno-de-ansiedad-generalizada-cuando-no-se-pueden-controlar-las-preocupaciones-new", site: "NIMH" },
  { label: "Masdrakis y cols. Ketamine/esketamine pharmacotherapy for treatment of anxiety disorders and anxiety symptoms in depression: systematic review. J Psychopharmacol, publicado en línea en diciembre de 2025.", href: "https://doi.org/10.1177/02698811251389583", site: "Journal of Psychopharmacology" },
  { label: "Ionescu DF y cols. Effect of baseline anxious depression on initial and sustained antidepressant response to ketamine. J Clin Psychiatry, 2014.", href: "https://pubmed.ncbi.nlm.nih.gov/25295436/", site: "PubMed" },
  { label: "Riesgos de la ketamina preparada en farmacias de compuestos (alerta del 10 de octubre de 2023).", href: "https://www.fda.gov/drugs/human-drug-compounding/compounding-risk-alerts", site: "FDA" },
  { label: "Spitzer RL y cols. A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 2006.", href: "https://pubmed.ncbi.nlm.nih.gov/16717171/", site: "PubMed" },
];

export default function Page() {
  return (
    <BlogPostEs
      slug="ketamina-para-la-ansiedad"
      subtitle="Lo que se sabe, lo que todavía no se sabe y cuándo vale la pena preguntar por ella."
      sources={SOURCES}
      about={{ "@type": "MedicalCondition", name: "Trastornos de ansiedad" }}
      related={[
        { href: "/es/treatments/anxiety", label: "Terapia con ketamina para la ansiedad en Aventura" },
        { href: "/es/tools/gad-7-anxiety-test", label: "Prueba de ansiedad GAD-7 gratuita" },
        { href: "/es/content/blog/ketamina-para-el-trauma-tept", label: "Ketamina y trauma (TEPT)" },
        { href: "/es/content/blog/ketamina-para-la-depresion-en-miami", label: "Ketamina para la depresión en Miami" },
      ]}
    >
      <P>
        La ansiedad es parte de la vida. Nos ayuda a prepararnos para un examen, una entrevista o una cita médica. El problema
        empieza cuando la preocupación no se apaga: cuando se despierta a las tres de la mañana con el corazón acelerado, cuando
        evita salir o cuando la tensión le acompaña todo el día, por semanas o meses<Ref n={[1, 2]} />. Cada vez más personas nos
        preguntan si la ketamina puede ayudar con eso. Aquí le damos una respuesta honesta.
      </P>

      <H2>Primero: la ansiedad tiene tratamientos que funcionan</H2>
      <P>
        Para los trastornos de ansiedad, los tratamientos de primera línea son la psicoterapia (sobre todo la terapia
        cognitivo-conductual), ciertos medicamentos como los ISRS y los IRSN, o una combinación de ambos<Ref n={2} />. Para muchas
        personas, eso es suficiente. La ketamina no es el primer paso, y nadie debería ofrecérsela como si lo fuera.
      </P>

      <H2>¿Qué dice la investigación sobre la ketamina y la ansiedad?</H2>
      <P>
        La ketamina no está aprobada por la FDA para ningún trastorno de ansiedad; usarla para la ansiedad es un uso fuera de
        etiqueta<Ref n={5} />. Dicho eso, la investigación ha crecido. Una revisión sistemática publicada en el{" "}
        <em>Journal of Psychopharmacology</em> analizó los estudios de ketamina y esketamina en trastornos de ansiedad y en la
        ansiedad que acompaña a la depresión. Los autores reportaron que la ketamina se asoció con menos ansiedad, y que el efecto
        tendía a durar más cuando las dosis se repetían<Ref n={3} />.
      </P>
      <P>
        También hay estudios en la llamada <strong>depresión ansiosa</strong>, es decir, depresión con mucha ansiedad. En uno de
        ellos, las personas con depresión ansiosa también respondieron a la ketamina<Ref n={4} />. Esto importa porque muchas de las
        personas que vemos en la clínica no tienen solo depresión o solo ansiedad, sino las dos.
      </P>
      <Callout>
        <strong>En resumen:</strong> la evidencia sobre la ketamina para la ansiedad es prometedora, pero todavía es más limitada
        que para la depresión. La ketamina <strong>puede ayudar</strong> a algunas personas cuya ansiedad no ha mejorado con
        otros tratamientos. No es una cura, y no es adecuada para todos.
      </Callout>

      <H2>&quot;¿Y si la sesión me da más ansiedad?&quot;</H2>
      <P>
        Es una pregunta muy común y muy válida. La ketamina puede producir sensaciones extrañas, como sentirse flotando o
        desconectado, y para una persona ansiosa eso puede dar miedo. Por eso cuidamos mucho el entorno:
      </P>
      <UL>
        <li>Le explicamos con calma qué puede sentir antes de empezar, para que no le tome por sorpresa.</li>
        <li>La sesión es en una sala privada, con luz, música y temperatura que puede ajustar.</li>
        <li>Puede elegir una sesión totalmente guiada, con un miembro del equipo clínico a su lado todo el tiempo.</li>
        <li>Monitoreamos su presión arterial y su ritmo cardiaco durante toda la sesión.</li>
        <li>Si algo se siente demasiado intenso, el equipo puede ajustar la infusión.</li>
      </UL>

      <H2>¿Quién podría preguntar por la ketamina?</H2>
      <P>
        Puede tener sentido platicarlo si usted tiene ansiedad, con o sin depresión, que no ha mejorado lo suficiente después de
        intentar psicoterapia y medicamentos. La evaluación revisa su presión arterial, su corazón, sus medicamentos y su historial
        de consumo de sustancias. Si la ketamina no es una opción segura para usted, se lo diremos.
      </P>

      <ScreenerPromo lang="es" tool="gad7" />
      <P>
        La prueba GAD-7 es un cuestionario de siete preguntas que se usa en todo el mundo para medir la ansiedad
        <Ref n={6} />. No es un diagnóstico, pero le puede ayudar a ponerle palabras a lo que siente antes de hablar con un
        profesional.
      </P>

      <H2>Preguntas frecuentes</H2>
      <Faq
        items={[
          {
            q: "¿La ketamina sirve para los ataques de pánico?",
            a: "Hay menos estudios sobre el trastorno de pánico que sobre la depresión. Si los ataques de pánico son su problema principal, lo primero es una buena evaluación y los tratamientos de primera línea. En la consulta vemos si la ketamina tiene un lugar en su caso.",
          },
          {
            q: "¿Puedo seguir con mi medicamento para la ansiedad?",
            a: "Muchas personas sí, pero algunos medicamentos, como las benzodiacepinas, pueden interactuar con la ketamina. No cambie nada por su cuenta; lo revisamos en la evaluación.",
          },
          {
            q: "¿Cuánto cuesta?",
            a: (
              <>
                Puede ver nuestros precios publicados en{" "}
                <A href="/es/content/blog/cuanto-cuesta-la-ketamina-en-miami">¿Cuánto cuesta la ketamina en Miami?</A>
              </>
            ),
          },
        ]}
      />

      <CrisisNote />
    </BlogPostEs>
  );
}
