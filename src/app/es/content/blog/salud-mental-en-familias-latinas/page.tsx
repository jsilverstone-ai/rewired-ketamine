import BlogPostEs from "@/components/es/BlogPostEs";
import { H2, P, UL, A, Ref, Callout, Faq, CrisisNote } from "@/components/es/BlogProse";
import type { Source } from "@/data/medical-review";

const SOURCES: Source[] = [
  { label: "Salud mental.", href: "https://medlineplus.gov/spanish/mentalhealth.html", site: "MedlinePlus en español" },
  { label: "¿Necesito ayuda para mi salud mental?", href: "https://www.nimh.nih.gov/health/publications/espanol/necesito-ayuda-para-mi-salud-mental", site: "NIMH" },
  { label: "Consejos sobre cómo hablar con su proveedor de atención médica sobre su salud mental.", href: "https://www.nimh.nih.gov/health/publications/espanol/consejos-para-hablar-con-su-proveedor", site: "NIMH" },
  { label: "Depresión (folleto en español).", href: "https://www.nimh.nih.gov/health/publications/espanol/depresion-sp", site: "NIMH" },
  { label: "Hispanic/Latinx: mental health in the Latino community.", href: "https://www.nami.org/community-and-culture/hispanic-latinx/", site: "NAMI (Alianza Nacional de Enfermedades Mentales)" },
  { label: "Compartiendo Esperanza: programa para la comunidad latina.", href: "https://www.nami.org/compartiendo-esperanza/", site: "NAMI" },
  { label: "Línea 988 en español.", href: "https://988lifeline.org/es/home/", site: "988 Lifeline" },
];

export default function Page() {
  return (
    <BlogPostEs
      slug="salud-mental-en-familias-latinas"
      subtitle="Cómo hablar de la depresión y la ansiedad con su familia sin vergüenza, y cómo pedir ayuda en español."
      sources={SOURCES}
      related={[
        { href: "/es/content/blog/ketamina-para-la-depresion-en-miami", label: "Ketamina para la depresión en Miami" },
        { href: "/es/content/blog/depresion-posparto-senales-y-tratamiento", label: "Depresión posparto: señales y tratamientos" },
        { href: "/es/tools", label: "Herramientas gratuitas de salud mental" },
        { href: "/es/services/talk-therapy", label: "Terapia de conversación" },
      ]}
    >
      <P>
        Yo crecí en México, y sé cómo se habla —o, mejor dicho, cómo no se habla— de la salud mental en muchas de nuestras casas.
        &quot;Los trapos sucios se lavan en casa.&quot; &quot;Échale ganas.&quot; &quot;Eso es cosa de locos.&quot; &quot;Rézale
        a Dios y se te va a pasar.&quot; Son frases que muchos escuchamos desde niños, casi siempre dichas con cariño, pero que
        hacen que pedir ayuda se sienta como una traición o como un fracaso.
      </P>
      <P>
        Escribo esto porque cada semana vemos en la clínica a personas que esperaron años antes de hablar de su depresión o su
        ansiedad, a veces sin que nadie en su familia lo supiera. Si usted se identifica, este artículo es para usted.
      </P>

      <H2>La depresión no es falta de ganas</H2>
      <P>
        La depresión y la ansiedad son condiciones de salud, como la diabetes o la presión alta. Afectan el sueño, la energía, la
        concentración, el apetito y la forma de ver la vida<Ref n={[1, 4]} />. No se quitan con pura fuerza de voluntad, igual que una
        infección no se quita &quot;echándole ganas&quot;. Pedir ayuda no es debilidad: es cuidar de usted y de los suyos.
      </P>

      <H2>¿Por qué nos cuesta tanto pedir ayuda?</H2>
      <UL>
        <li><strong>El estigma.</strong> El miedo a que nos vean como &quot;locos&quot; o débiles.</li>
        <li>
          <strong>La familia primero.</strong> El familismo es una de nuestras grandes fortalezas, pero a veces sentimos que hablar
          de lo que nos pasa es cargar a los demás.
        </li>
        <li><strong>El idioma.</strong> Es difícil explicar lo que uno siente en un idioma que no es el propio.</li>
        <li><strong>El costo, el seguro y el estatus migratorio</strong>, que generan dudas y miedo.</li>
        <li><strong>La fe.</strong> Para muchas personas, la fe es un apoyo enorme. Buscar atención médica no está peleado con ella.</li>
      </UL>
      <P>
        Organizaciones como NAMI reconocen estas mismas barreras en la comunidad latina, y tienen programas en español pensados
        para familias<Ref n={[5, 6]} />.
      </P>

      <H2>Señales de que es momento de buscar ayuda</H2>
      <P>El NIMH sugiere buscar ayuda profesional cuando los síntomas son fuertes y han durado dos semanas o más<Ref n={2} />. Por ejemplo, cuando:</P>
      <UL>
        <li>Le cuesta dormir, o duerme demasiado.</li>
        <li>Ha perdido el interés en cosas que antes disfrutaba.</li>
        <li>Se siente triste, irritable o sin esperanza casi todos los días.</li>
        <li>Le cuesta funcionar en el trabajo, en la escuela o en casa.</li>
        <li>Usa alcohol u otras sustancias para aguantar.</li>
      </UL>

      <H2>Cómo hablar del tema con su familia</H2>
      <UL>
        <li><strong>Escoja un momento tranquilo</strong>, no en medio de una discusión ni en una fiesta familiar.</li>
        <li>
          <strong>Use palabras sencillas.</strong> &quot;Me he sentido muy cansado y triste desde hace meses, y quiero ver a un
          profesional&quot; es suficiente. No tiene que explicar todo.
        </li>
        <li><strong>Compare con algo conocido.</strong> &quot;Es como cuando la abuela fue al doctor por la presión.&quot;</li>
        <li><strong>Pida algo concreto:</strong> que le acompañen a la cita, que cuiden a los niños o simplemente que no le juzguen.</li>
        <li><strong>Busque un aliado:</strong> un primo, un hermano o una persona de su iglesia que le apoye.</li>
      </UL>
      <Callout>
        <strong>Si usted es el familiar:</strong> a veces lo más útil es escuchar sin dar consejos. Frases como &quot;Gracias por
        contarme&quot; o &quot;¿Cómo te puedo ayudar?&quot; valen más que &quot;échale ganas&quot;.
      </Callout>

      <H2>Cómo prepararse para hablar con un profesional</H2>
      <P>El NIMH recomienda prepararse antes de la cita<Ref n={3} />:</P>
      <UL>
        <li>Anote sus síntomas, desde cuándo los tiene y qué los empeora o mejora.</li>
        <li>Lleve la lista de sus medicamentos, vitaminas y remedios, incluidos los tés o hierbas que toma.</li>
        <li>Pida atención en español si la prefiere. Tiene derecho a entender su tratamiento.</li>
        <li>Si quiere, haga antes una prueba de detección gratuita, como la <A href="/es/tools/phq-9-depression-test">PHQ-9 para la depresión</A> o la <A href="/es/tools/gad-7-anxiety-test">GAD-7 para la ansiedad</A>.</li>
      </UL>

      <H2>¿Y la ketamina?</H2>
      <P>
        La mayoría de las personas empieza con psicoterapia, medicamentos o ambos, y eso es lo correcto. La ketamina es una
        opción para algunas personas con depresión que no ha mejorado lo suficiente con esos tratamientos. Si ese es su caso,
        puede leer nuestra <A href="/es/content/blog/ketamina-para-la-depresion-en-miami">guía en español sobre la ketamina para
        la depresión</A>. En Rewired Ketamine, la consulta, las sesiones y el seguimiento pueden ser completamente en español.
      </P>

      <H2>Preguntas frecuentes</H2>
      <Faq
        items={[
          {
            q: "¿Mi información es confidencial?",
            a: "Sí. Su información médica está protegida por la ley federal de privacidad (HIPAA). No compartimos su información con su familia ni con su empleador sin su permiso.",
          },
          {
            q: "¿Puedo traer a un familiar a la consulta?",
            a: "Claro que sí, si usted quiere. Muchas personas se sienten más tranquilas con alguien de confianza a su lado.",
          },
          {
            q: "No tengo seguro. ¿Hay opciones?",
            a: (
              <>
                Sí. Nuestros precios de ketamina IV son públicos y de pago en efectivo, y la consulta es gratuita. Vea{" "}
                <A href="/es/content/blog/cuanto-cuesta-la-ketamina-en-miami">cuánto cuesta la ketamina en Miami</A>. Si la
                ketamina no es para usted, le orientamos hacia otros recursos.
              </>
            ),
          },
        ]}
      />

      <P>
        Para apoyo emocional en cualquier momento, la Línea 988 atiende en español: llame al 988 y oprima 2, o envíe AYUDA por
        mensaje de texto al 988<Ref n={7} />.
      </P>

      <CrisisNote />
    </BlogPostEs>
  );
}
