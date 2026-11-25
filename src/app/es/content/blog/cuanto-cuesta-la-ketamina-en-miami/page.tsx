import BlogPostEs from "@/components/es/BlogPostEs";
import { H2, H3, P, UL, A, Ref, Callout, Faq, CrisisNote } from "@/components/es/BlogProse";
import { IV_PROTOCOLS, AT_HOME_STARTING } from "@/data/pricing";
import type { Source } from "@/data/medical-review";

const SOURCES: Source[] = [
  { label: "Publicación 502: gastos médicos y dentales.", href: "https://www.irs.gov/es/publications/p502", site: "IRS (Servicio de Impuestos Internos)" },
  { label: "Publicación 969: cuentas de ahorros para la salud (HSA) y otros planes con beneficios tributarios.", href: "https://www.irs.gov/es/publications/p969", site: "IRS" },
  { label: "Glosario: autorización previa.", href: "https://www.cuidadodesalud.gov/es/glossary/prior-authorization/", site: "CuidadoDeSalud.gov" },
  { label: "Información de prescripción de Spravato (esketamina).", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed", site: "DailyMed (Biblioteca Nacional de Medicina de EE. UU.)" },
  { label: "Riesgos de la ketamina preparada en farmacias de compuestos (alerta del 10 de octubre de 2023).", href: "https://www.fda.gov/drugs/human-drug-compounding/compounding-risk-alerts", site: "FDA" },
];

const money = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function Page() {
  return (
    <BlogPostEs
      slug="cuanto-cuesta-la-ketamina-en-miami"
      subtitle="Precios publicados, qué cambia el costo, qué cubre el seguro con Spravato y cómo usar su HSA o FSA. Sin letras chiquitas."
      sources={SOURCES}
      related={[
        { href: "/es/tools/ketamine-cost-calculator", label: "Calculadora de costos de ketamina" },
        { href: "/es/services/ketamine-therapy-cost", label: "Precios de la terapia con ketamina" },
        { href: "/es/services/hsa-fsa-ketamine", label: "Cómo usar su HSA o FSA" },
        { href: "/es/services/ketamine-insurance", label: "Seguro y ketamina: Spravato e IV" },
      ]}
    >
      <P>
        &quot;¿Cuánto cuesta?&quot; es casi siempre la primera pregunta que nos hacen, y está bien. Es una pregunta justa. En
        Miami hay anuncios de ketamina por todos lados, con precios que cambian mucho de un lugar a otro, y muchas veces no queda
        claro qué incluye cada precio. Aquí le explicamos nuestros precios publicados, qué hace que el costo suba o baje y cómo
        funcionan el seguro y las cuentas HSA/FSA.
      </P>

      <H2>Precios de la ketamina IV en nuestra clínica de Aventura</H2>
      <P>Estos son los precios publicados de nuestras infusiones. Todos requieren una consulta antes del tratamiento.</P>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border border-[#eee] text-sm md:text-base">
          <thead className="bg-[#F8F5F0] text-[#0B1D36]">
            <tr>
              <th className="p-2 md:p-3">Protocolo</th>
              <th className="p-2 md:p-3">1 sesión</th>
              <th className="p-2 md:p-3">Paquete de 3</th>
              <th className="p-2 md:p-3">Paquete de 6</th>
            </tr>
          </thead>
          <tbody>
            {IV_PROTOCOLS.map((p) => (
              <tr key={p.id} className="border-t border-[#eee]">
                <td className="p-2 md:p-3">
                  <strong>{p.nameEs}</strong>
                  <br />
                  <span className="text-sm text-[#555]">{p.detailEs}</span>
                </td>
                <td className="p-2 md:p-3">{money(p.single)}</td>
                <td className="p-2 md:p-3">{money(p.pack3)}</td>
                <td className="p-2 md:p-3">{money(p.pack6)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <P>
        Las <strong>sesiones guiadas</strong> cuestan más porque un miembro del equipo clínico permanece con usted durante toda
        la infusión. Los paquetes bajan el precio por sesión. Si quiere hacer cuentas con calma, use nuestra{" "}
        <A href="/es/tools/ketamine-cost-calculator">calculadora de costos</A>: funciona en su navegador y no guarda ningún dato.
      </P>

      <H2>Precios de la ketamina en casa</H2>
      <P>
        Para personas que pasan la evaluación y para quienes el tratamiento en casa es una opción segura, ofrecemos paquetes de
        varias dosis con guía clínica. Los precios iniciales son:
      </P>
      <UL>
        {AT_HOME_STARTING.map((o) => (
          <li key={o.nameEs}>
            <strong>{o.nameEs}:</strong> desde {money(o.from)}
          </li>
        ))}
      </UL>
      <P>
        El precio exacto se confirma después de la evaluación médica. Más detalles en nuestra página de{" "}
        <A href="/es/services/home-ketamine">ketamina en casa en Florida</A>.
      </P>

      <H2>¿Qué cambia el precio?</H2>
      <UL>
        <li>El protocolo: una infusión de salud mental de una hora o un protocolo de dolor crónico de dos horas.</li>
        <li>Si la sesión es estándar o totalmente guiada.</li>
        <li>Si paga una sesión suelta o un paquete de 3 o 6.</li>
        <li>Lo que incluye: consulta, monitoreo continuo, sala privada, seguimiento e integración.</li>
      </UL>

      <H3>Cuidado con los precios que parecen demasiado buenos</H3>
      <P>
        Algunos servicios por internet anuncian ketamina muy barata que se manda por correo, con poca o ninguna supervisión. La
        FDA ha advertido sobre los riesgos de usar ketamina preparada en farmacias de compuestos sin el monitoreo de un
        profesional de la salud<Ref n={5} />. Antes de comparar precios, pregunte siempre:
      </P>
      <UL>
        <li>¿Quién me evalúa antes de empezar, y en persona o por video?</li>
        <li>¿Quién está conmigo durante la dosis y cómo se monitorean mi presión y mi respiración?</li>
        <li>¿Qué pasa si me siento mal durante o después de la sesión?</li>
        <li>¿El precio incluye la consulta, el medicamento, el seguimiento y la integración?</li>
        <li>¿Cuál es el costo total de un curso típico, no solo de la primera sesión?</li>
      </UL>

      <H2>¿El seguro cubre la ketamina?</H2>
      <H3>Ketamina IV: normalmente de pago en efectivo</H3>
      <P>
        Como el uso de la ketamina IV para la salud mental es &quot;fuera de etiqueta&quot;, la mayoría de los seguros no la
        cubren. Lo que sí hacemos es darle una <strong>superfactura (superbill)</strong>, un estado de cuenta detallado que usted
        puede enviar a su seguro para pedir un reembolso fuera de la red. No podemos predecir si su plan pagará algo ni cuánto.
      </P>
      <H3>Spravato: puede estar cubierto con autorización previa</H3>
      <P>
        Spravato (esketamina) está aprobado por la FDA para la depresión resistente al tratamiento<Ref n={4} />, y por eso muchos
        planes lo cubren cuando se cumplen sus criterios. Casi siempre piden una <strong>autorización previa</strong>: el plan
        revisa su caso antes de aprobar el tratamiento<Ref n={3} />. Actualmente tramitamos Spravato dentro de la red con
        UnitedHealthcare, Cigna y Aetna, y con Florida Blue (Blue Cross Blue Shield) fuera de la red. La cobertura no está
        garantizada y su copago o deducible dependen de su póliza. Vea nuestras guías por aseguradora en{" "}
        <A href="/es/services/ketamine-insurance">seguro y ketamina</A>.
      </P>

      <H2>¿Puedo usar mi HSA o FSA?</H2>
      <P>
        Muchas veces, sí. El IRS permite usar los fondos de una HSA o FSA para gastos de atención médica que sirven para
        diagnosticar o tratar una enfermedad<Ref n={[1, 2]} />. Un tratamiento con ketamina recetado por un profesional para una
        condición diagnosticada puede calificar. Algunos administradores piden una carta de necesidad médica, y nosotros se la
        podemos proporcionar cuando corresponde. Confirme siempre las reglas con el administrador de su plan. Lo explicamos paso a
        paso en <A href="/es/services/hsa-fsa-ketamine">cómo usar su HSA o FSA</A>.
      </P>

      <Callout>
        <strong>Nuestra promesa:</strong> le damos el precio completo antes de empezar. Si el tratamiento no es adecuado para
        usted, se lo decimos en la consulta, que siempre es gratuita.
      </Callout>

      <H2>Preguntas frecuentes</H2>
      <Faq
        items={[
          {
            q: "¿La consulta tiene costo?",
            a: "No. La consulta inicial es gratuita y sin compromiso. Ahí revisamos si la ketamina es una opción para usted y cuánto costaría su plan.",
          },
          {
            q: "¿Hay descuentos?",
            a: "Los paquetes de 3 y 6 sesiones bajan el precio por sesión. Pregúntenos en la consulta por otros descuentos disponibles.",
          },
          {
            q: "¿Cuánto cuesta Spravato si tengo seguro?",
            a: "No hay un precio único: depende de su plan, su deducible y su copago. Después de la autorización previa le explicamos lo que su plan indica.",
          },
        ]}
      />

      <CrisisNote />
    </BlogPostEs>
  );
}
