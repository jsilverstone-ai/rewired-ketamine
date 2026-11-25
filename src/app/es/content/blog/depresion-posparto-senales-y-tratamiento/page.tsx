import BlogPostEs from "@/components/es/BlogPostEs";
import { H2, P, UL, A, Ref, Callout, Faq, CrisisNote } from "@/components/es/BlogProse";
import ScreenerPromo from "@/components/tools/ScreenerPromo";
import type { Source } from "@/data/medical-review";

const SOURCES: Source[] = [
  { label: "Depresión perinatal (folleto en español).", href: "https://www.nimh.nih.gov/health/publications/espanol/depresion-perinatal", site: "NIMH" },
  { label: "Depresión posparto.", href: "https://medlineplus.gov/spanish/postpartumdepression.html", site: "MedlinePlus en español" },
  { label: "La FDA aprueba el primer tratamiento oral para la depresión posparto (zuranolona, 2023).", href: "https://www.fda.gov/news-events/press-announcements/fda-approves-first-oral-treatment-postpartum-depression", site: "FDA" },
  { label: "Wang S y cols. Efficacy of a single low dose of esketamine after childbirth for mothers with symptoms of prenatal depression: randomised clinical trial. BMJ, 2024.", href: "https://pubmed.ncbi.nlm.nih.gov/38808490/", site: "PubMed" },
  { label: "Línea Nacional de Salud Mental Materna (1-833-TLC-MAMA), en inglés y español, las 24 horas.", href: "https://mchb.hrsa.gov/national-maternal-mental-health-hotline", site: "HRSA (Administración de Recursos y Servicios de Salud)" },
  { label: "Información de prescripción de Spravato (esketamina): embarazo y lactancia.", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed", site: "DailyMed" },
  { label: "Riesgos de la ketamina preparada en farmacias de compuestos (alerta del 10 de octubre de 2023).", href: "https://www.fda.gov/drugs/human-drug-compounding/compounding-risk-alerts", site: "FDA" },
];

export default function Page() {
  return (
    <BlogPostEs
      slug="depresion-posparto-senales-y-tratamiento"
      subtitle="Cómo distinguir la tristeza posparto de la depresión, qué tratamientos existen y qué hay que platicar sobre la ketamina y la lactancia."
      sources={SOURCES}
      about={{ "@type": "MedicalCondition", name: "Depresión posparto" }}
      related={[
        { href: "/es/treatments/postpartum-depression", label: "Apoyo para la depresión posparto en Aventura" },
        { href: "/es/tools/phq-9-depression-test", label: "Prueba de depresión PHQ-9 gratuita" },
        { href: "/es/content/blog/salud-mental-en-familias-latinas", label: "Salud mental en las familias latinas" },
        { href: "/es/content/blog/ketamina-vs-antidepresivos", label: "Ketamina vs. antidepresivos" },
      ]}
    >
      <P>
        Todo el mundo le dice que debería estar feliz. Y usted quiere a su bebé, pero se siente vacía, agotada, con ganas de
        llorar o con una angustia que no se quita. Muchas mamás latinas cargan esto en silencio, porque &quot;así es la
        maternidad&quot; o porque les da vergüenza decirlo. Queremos decirle algo claro desde el principio: la depresión posparto
        no es su culpa, no la hace mala madre y tiene tratamiento<Ref n={[1, 2]} />.
      </P>

      <Callout>
        <strong>Si se siente abrumada, llame o envíe un mensaje de texto a la Línea Nacional de Salud Mental Materna al{" "}
        <a href="tel:18338526262" className="underline">1-833-TLC-MAMA (1-833-852-6262)</a>.</strong> Es gratuita, confidencial,
        funciona las 24 horas y le atienden en español<Ref n={5} />. Su pareja o su familia también pueden llamar.
      </Callout>

      <H2>Tristeza posparto o depresión posparto: ¿cuál es la diferencia?</H2>
      <P>
        La <strong>tristeza posparto</strong> (los famosos &quot;baby blues&quot;) es muy común: cambios de humor, llanto fácil,
        preocupación y cansancio durante las primeras dos semanas después del parto. Suele pasar sola<Ref n={1} />.
      </P>
      <P>
        La <strong>depresión posparto</strong> es más fuerte y dura más. Puede empezar durante el embarazo o en las semanas y
        meses después del parto, y hace difícil cuidarse a sí misma o cuidar a otros<Ref n={1} />. Algunas señales son:
      </P>
      <UL>
        <li>Tristeza, vacío o desesperanza la mayor parte del día.</li>
        <li>Ansiedad o preocupación intensa, incluso miedo a quedarse sola con el bebé.</li>
        <li>Sentirse desconectada del bebé o con culpa constante.</li>
        <li>No poder dormir aunque el bebé duerma, o dormir demasiado.</li>
        <li>Pensamientos de hacerse daño o de hacerle daño al bebé.</li>
      </UL>
      <P>
        <strong>Si tiene pensamientos de hacerse daño o de hacer daño a su bebé, o si ve u oye cosas que otros no ven, busque
        ayuda de inmediato:</strong> llame al 911 o al 988 (oprima 2 para español). La psicosis posparto es poco común, pero es
        una emergencia médica.
      </P>
      <P>
        Y no solo les pasa a las mamás: las parejas y los papás también pueden tener depresión después de la llegada de un bebé.
      </P>

      <H2>¿Qué tratamientos existen?</H2>
      <UL>
        <li><strong>Psicoterapia</strong>, sola o junto con medicamentos<Ref n={1} />.</li>
        <li><strong>Antidepresivos</strong>, elegidos junto con su médico, tomando en cuenta si está amamantando<Ref n={1} />.</li>
        <li>
          <strong>Medicamentos aprobados específicamente para la depresión posparto</strong>, como la zuranolona, el primer
          tratamiento oral aprobado por la FDA para esta condición, en 2023<Ref n={3} />.
        </li>
        <li><strong>Apoyo práctico</strong>: ayuda con el bebé, horas de sueño protegidas, grupos de apoyo.</li>
      </UL>

      <H2>¿Dónde entra la ketamina?</H2>
      <P>
        La ketamina IV no está aprobada por la FDA para la depresión posparto; su uso es fuera de etiqueta<Ref n={7} />. La
        investigación es reciente. Un estudio publicado en el <em>BMJ</em> en 2024, hecho en hospitales de China, dio una sola
        dosis baja de esketamina por vena justo después del parto a mamás que tenían síntomas de depresión durante el embarazo.
        Las mamás que la recibieron tuvieron menos episodios de depresión mayor en las semanas siguientes que las que recibieron
        placebo. Los efectos secundarios, como mareo o sensación de desconexión, fueron más frecuentes con la esketamina, aunque
        duraron menos de un día<Ref n={4} />.
      </P>
      <P>
        Es una señal interesante, pero ese estudio se hizo en un hospital, en el momento del parto, y no es lo mismo que una
        serie de infusiones semanas o meses después. Para algunas mamás cuya depresión no ha mejorado con otros tratamientos, la
        ketamina <strong>puede ayudar</strong>. Para otras, no es la opción adecuada.
      </P>

      <H2>Ketamina y lactancia: lo que hay que platicar</H2>
      <P>
        Esta es una de las preguntas más importantes, y la información todavía es limitada. La ficha de Spravato, por ejemplo,
        no recomienda amamantar durante el tratamiento<Ref n={6} />. Con la ketamina IV, cualquier plan para la lactancia se
        decide de forma individual con su equipo médico y su pediatra antes de empezar. No tome esta decisión sola ni con
        información de internet.
      </P>

      <ScreenerPromo lang="es" tool="phq9" />

      <H2>Preguntas frecuentes</H2>
      <Faq
        items={[
          {
            q: "¿Puedo recibir ketamina si estoy embarazada?",
            a: "La ketamina para la depresión no se recomienda durante el embarazo. Si está embarazada o puede estarlo, díganos antes de cualquier evaluación y le orientamos hacia opciones seguras.",
          },
          {
            q: "¿Puedo traer a mi bebé a la sesión?",
            a: "Durante la sesión usted necesita descansar y estar monitoreada, sin cuidar a nadie más. Le recomendamos venir acompañada de un adulto que cuide al bebé y que la lleve a casa.",
          },
          {
            q: "¿Por dónde empiezo?",
            a: (
              <>
                Hable con su ginecólogo, partera o médico de cabecera, y si quiere platicar sobre la ketamina, reserve una{" "}
                <A href="/es#contact">consulta gratuita</A> con nosotros, en español.
              </>
            ),
          },
        ]}
      />

      <CrisisNote />
    </BlogPostEs>
  );
}
