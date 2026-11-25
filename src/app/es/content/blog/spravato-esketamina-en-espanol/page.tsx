import BlogPostEs from "@/components/es/BlogPostEs";
import { H2, P, UL, OL, A, Ref, Callout, Faq, CrisisNote } from "@/components/es/BlogProse";
import type { Source } from "@/data/medical-review";

const SOURCES: Source[] = [
  { label: "Aerosol nasal de esketamina (Spravato): información para pacientes.", href: "https://medlineplus.gov/spanish/druginfo/meds/a619017-es.html", site: "MedlinePlus en español" },
  { label: "Información de prescripción de Spravato (esketamina), incluida la Guía del medicamento.", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed", site: "DailyMed (Biblioteca Nacional de Medicina de EE. UU.)" },
  { label: "Carta de aprobación de la FDA: Spravato como monoterapia para la depresión resistente al tratamiento (17 de enero de 2025).", href: "https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2025/211243Orig1s016ltr.pdf", site: "FDA" },
  { label: "Popova V y cols. Efficacy and safety of flexibly dosed esketamine nasal spray combined with a newly initiated oral antidepressant in treatment-resistant depression (TRANSFORM-2). Am J Psychiatry, 2019.", href: "https://pubmed.ncbi.nlm.nih.gov/31109201/", site: "PubMed" },
  { label: "Glosario: autorización previa.", href: "https://www.cuidadodesalud.gov/es/glossary/prior-authorization/", site: "CuidadoDeSalud.gov" },
];

export default function Page() {
  return (
    <BlogPostEs
      slug="spravato-esketamina-en-espanol"
      subtitle="Para qué está aprobado, cómo es una visita, qué pide el seguro y qué preguntar antes de empezar."
      sources={SOURCES}
      about={{ "@type": "Drug", name: "Spravato (esketamina)", nonProprietaryName: "esketamine" }}
      related={[
        { href: "/es/services/spravato", label: "Spravato en nuestra clínica de Aventura" },
        { href: "/es/services/ketamine-insurance", label: "Seguro y ketamina: guías por aseguradora" },
        { href: "/es/services/iv-ketamine-vs-spravato", label: "Ketamina IV vs. Spravato" },
        { href: "/es/content/blog/ketamina-vs-antidepresivos", label: "Ketamina vs. antidepresivos" },
      ]}
    >
      <P>
        Muchas personas llegan a nuestra clínica con una receta, un folleto o un mensaje de su seguro que dice
        &quot;Spravato&quot;, y casi nada de información en español. Esta guía es para usted: qué es Spravato, para quién está
        aprobado, cómo es una visita y cómo funciona el seguro.
      </P>

      <H2>¿Qué es Spravato?</H2>
      <P>
        Spravato es el nombre comercial de la <strong>esketamina en espray nasal</strong>. La esketamina es una forma de la
        molécula de ketamina. Pertenece a un grupo de medicamentos llamados antagonistas de los receptores NMDA, que actúan sobre
        el glutamato en el cerebro<Ref n={1} />. No es una pastilla y no se lleva a casa: siempre se aplica en una clínica
        certificada, bajo observación.
      </P>

      <H2>¿Para qué está aprobado por la FDA?</H2>
      <UL>
        <li>
          <strong>Depresión resistente al tratamiento en adultos</strong>, es decir, depresión que no mejoró lo suficiente con al
          menos dos antidepresivos orales. Desde enero de 2025 se puede usar solo o junto con un antidepresivo oral
          <Ref n={[1, 3]} />.
        </li>
        <li>
          <strong>Síntomas depresivos en adultos con trastorno depresivo mayor y pensamientos o conductas suicidas
          agudas</strong>, junto con un antidepresivo oral<Ref n={1} />. Spravato no sustituye la atención de emergencia ni la
          hospitalización cuando se necesitan, y no se ha demostrado que prevenga el suicidio<Ref n={2} />.
        </li>
      </UL>
      <P>Spravato no está aprobado para niños ni adolescentes.</P>

      <H2>¿Cómo es una visita?</H2>
      <OL>
        <li>Llega a la clínica. Se recomienda no comer durante 2 horas ni beber líquidos durante 30 minutos antes<Ref n={1} />.</li>
        <li>Revisamos su presión arterial.</li>
        <li>Usted mismo se aplica el espray en la nariz, con la guía de nuestro equipo.</li>
        <li>
          Se queda en observación <strong>al menos 2 horas</strong>, hasta que el equipo confirme que puede irse. Así lo exige el
          programa de seguridad REMS<Ref n={[1, 2]} />.
        </li>
        <li>
          Se va a casa con alguien que maneje. <strong>No debe manejar ni operar maquinaria hasta el día siguiente</strong>,
          después de una noche de buen descanso<Ref n={1} />.
        </li>
      </OL>
      <P>
        Para la depresión resistente, el calendario habitual es dos veces por semana durante las semanas 1 a 4, una vez por semana
        durante las semanas 5 a 8, y después una vez por semana o cada dos semanas, según cómo responda<Ref n={1} />. Su
        profesional de salud confirma la dosis y el calendario.
      </P>

      <H2>¿Qué dicen los estudios?</H2>
      <P>
        Spravato fue aprobado después de estudios controlados en adultos con depresión resistente. En uno de los principales,
        las personas que usaron esketamina junto con un antidepresivo nuevo mejoraron más que las que recibieron el antidepresivo
        con un espray de placebo<Ref n={4} />. Eso quiere decir que Spravato <strong>puede ayudar</strong> a algunas personas; no
        que vaya a funcionar en todos los casos.
      </P>

      <H2>Efectos secundarios y precauciones</H2>
      <P>
        Los efectos más comunes aparecen durante la visita y suelen pasar en unas horas: sentirse desconectado del cuerpo o del
        entorno (disociación), mareo, náusea, somnolencia, sensación de embriaguez y aumento de la presión arterial<Ref n={[1, 2]} />.
        Por eso es obligatoria la observación. Spravato puede no ser adecuado si usted tiene ciertas enfermedades de los vasos
        sanguíneos (como un aneurisma), una malformación arteriovenosa o antecedentes de sangrado en el cerebro<Ref n={1} />.
        También debe hablarlo con su profesional si está embarazada, planea embarazarse o está amamantando<Ref n={2} />.
      </P>

      <H2>Spravato y el seguro: cómo funciona</H2>
      <P>
        Como Spravato está aprobado por la FDA, muchos planes lo cubren cuando se cumplen sus criterios. Casi siempre piden una{" "}
        <strong>autorización previa</strong><Ref n={5} />. En general, el plan quiere ver:
      </P>
      <UL>
        <li>Un diagnóstico de depresión mayor.</li>
        <li>Al menos dos antidepresivos probados, a dosis y tiempo adecuados, sin mejoría suficiente.</li>
        <li>Un puntaje de depresión con una escala estándar (como el PHQ-9).</li>
        <li>Que la clínica esté certificada en el programa REMS.</li>
      </UL>
      <P>
        Nosotros reunimos los documentos y enviamos la solicitud. Actualmente tramitamos Spravato dentro de la red con
        UnitedHealthcare, Cigna y Aetna, y con Florida Blue (Blue Cross Blue Shield) fuera de la red. Revisamos otros planes en
        la consulta. La aprobación no está garantizada, y el copago y el deducible dependen de su póliza. Tenemos guías para{" "}
        <A href="/es/services/ketamine-insurance/spravato-unitedhealthcare">UnitedHealthcare</A>,{" "}
        <A href="/es/services/ketamine-insurance/spravato-cigna">Cigna</A>,{" "}
        <A href="/es/services/ketamine-insurance/spravato-aetna">Aetna</A>,{" "}
        <A href="/es/services/ketamine-insurance/spravato-florida-blue-bcbs">Florida Blue</A>,{" "}
        <A href="/es/services/ketamine-insurance/spravato-medicare">Medicare</A> y{" "}
        <A href="/es/services/ketamine-insurance/spravato-florida-medicaid">Medicaid de Florida</A>.
      </P>

      <Callout>
        <strong>Antes de su primera visita, pregunte:</strong> ¿la clínica está certificada en REMS? ¿Quién tramita la autorización
        previa? ¿Cuánto tiempo tendré que quedarme? ¿Quién me llevará a casa? ¿Qué pasa si el seguro lo niega?
      </Callout>

      <H2>Preguntas frecuentes</H2>
      <Faq
        items={[
          {
            q: "¿Spravato es lo mismo que la ketamina IV?",
            a: (
              <>
                No. Están relacionados, pero son tratamientos distintos, con aprobaciones, formas de aplicación y coberturas
                diferentes. Lo explicamos en <A href="/es/services/iv-ketamine-vs-spravato">ketamina IV vs. Spravato</A>.
              </>
            ),
          },
          {
            q: "¿Puedo usar Spravato en casa?",
            a: "No. Por las reglas del programa REMS, Spravato solo se aplica en una clínica certificada, con observación de al menos dos horas.",
          },
          {
            q: "¿Tengo que dejar mi antidepresivo?",
            a: "No por su cuenta. Para la depresión resistente, Spravato puede usarse solo o con un antidepresivo oral. Esa decisión se toma con su profesional de salud.",
          },
        ]}
      />

      <CrisisNote />
    </BlogPostEs>
  );
}
