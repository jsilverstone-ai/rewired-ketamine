import Link from "next/link";
import { pageJsonLd } from "@/data/page-meta";
import type { Source } from "@/data/medical-review";
import PageShell from "./PageShell";
import { SourceList, EducationNote } from "./ReviewAndSources";

export const HSA_PATH = "/services/hsa-fsa-ketamine";

const H2 = "text-2xl font-bold text-[#0B1D36] mt-12 mb-4";
const P = "text-[#555] mb-4";
const UL = "list-disc pl-5 space-y-2 text-[#555] mb-4";
const A = "text-[#C9A66B] font-semibold hover:underline";
const sup = (n: number) => (
  <sup>
    <a href={`#source-${n}`} className="text-[#C9A66B] hover:underline">[{n}]</a>
  </sup>
);

const SOURCES: Source[] = [
  { label: "Internal Revenue Service. Publication 502, Medical and Dental Expenses (see “What Are Medical Expenses?”, “Psychiatric Care” and “Medicines”).", href: "https://www.irs.gov/publications/p502", site: "irs.gov" },
  { label: "Internal Revenue Service. Publication 969, Health Savings Accounts and Other Tax-Favored Health Plans.", href: "https://www.irs.gov/publications/p969", site: "irs.gov" },
  { label: "HealthCare.gov Glossary. “Health Savings Account (HSA).”", href: "https://www.healthcare.gov/glossary/health-savings-account-hsa/", site: "healthcare.gov" },
  { label: "HealthCare.gov Glossary. “Flexible Spending Account (FSA).”", href: "https://www.healthcare.gov/glossary/flexible-spending-account-fsa/", site: "healthcare.gov" },
];

function English() {
  return (
    <>
      <div className="bg-[#F8F5F0] border-l-4 border-[#C9A66B] rounded-2xl p-6 mb-8">
        <h2 className="font-semibold text-lg text-[#0B1D36] mb-3">Short answer</h2>
        <p className="text-[#555]">
          In general, HSA and FSA money can be used for qualified medical expenses, and the IRS list of those expenses includes psychiatric care and prescribed medicines {sup(1)}{sup(2)}. Ketamine treatment that a licensed clinician prescribes and provides for a medical condition generally fits those categories. But your plan administrator decides what it will approve, so <strong>check with your plan administrator before you pay</strong>. We cannot guarantee that any expense will be accepted.
        </p>
      </div>

      <h2 className={H2}>What counts as a qualified medical expense?</h2>
      <p className={P}>
        IRS Publication 502 describes medical expenses as the costs of diagnosis, cure, mitigation, treatment, or prevention of disease. Among the items it lists are <strong>psychiatric care</strong> and <strong>prescribed medicines and drugs</strong> (a drug that requires a prescription) {sup(1)}. Publication 969 explains that HSA and health FSA funds can generally be used for expenses that would qualify for the medical and dental expenses deduction {sup(2)}.
      </p>
      <p className={P}>Depending on your plan, that may include:</p>
      <ul className={UL}>
        <li>IV ketamine sessions and packages (see our <Link href="/services/ketamine-therapy-cost" className={A}>published prices</Link>)</li>
        <li>Your share of the cost for Spravato visits, such as a copay, coinsurance, or deductible</li>
        <li>Prescribed at-home ketamine</li>
        <li>Medical evaluations and follow-up visits</li>
      </ul>
      <p className={P}>
        Some plans have their own rules or limits, and some employer FSAs are more restrictive than the IRS list. That is why the answer always depends on your plan.
      </p>

      <h2 className={H2}>Paperwork that helps</h2>
      <ul className={UL}>
        <li>
          <strong>An itemized receipt or superbill.</strong> It shows the date of service, the provider, what you received, and what you paid. We give a superbill to cash-pay patients (the same document described in our <Link href="/services/ketamine-insurance" className={A}>insurance guide</Link>).
        </li>
        <li>
          <strong>Possibly a letter of medical necessity.</strong> Some administrators ask for a short letter from your clinician explaining that the treatment is for a medical condition. Ask your administrator whether they need one, and ask us if they do.
        </li>
        <li>
          <strong>Your plan’s claim form,</strong> if you paid another way and are asking to be reimbursed.
        </li>
      </ul>
      <p className={P}>Keep copies of everything. The IRS can ask you to show that HSA money went to qualified medical expenses {sup(2)}.</p>

      <h2 className={H2}>Questions to ask your plan administrator</h2>
      <ul className={UL}>
        <li>Is medical ketamine treatment (IV ketamine, Spravato, or prescribed at-home ketamine) an eligible expense under my plan?</li>
        <li>What documentation do you need: an itemized receipt, a superbill, a letter of medical necessity?</li>
        <li>Can I pay with my HSA or FSA card, or do I need to pay first and submit a claim?</li>
        <li>For an FSA: what is my plan-year deadline, and is there a grace period or carryover?</li>
      </ul>

      <h2 className={H2}>Good to know</h2>
      <ul className={UL}>
        <li><strong>HSA vs. FSA.</strong> An HSA goes with a high-deductible health plan and the money stays yours from year to year. A health FSA is set up through an employer, and unused money may be lost at the end of the plan year unless your plan has a grace period or carryover {sup(3)}{sup(4)}.</li>
        <li><strong>If an expense does not qualify,</strong> HSA money used for it is generally taxable and may face an additional 20% tax if you are under 65 {sup(2)}.</li>
        <li><strong>This is not tax advice.</strong> For your situation, talk with your plan administrator or a tax professional.</li>
      </ul>
      <p className={P}>
        Want to see what a course may cost first? Try our <Link href="/tools/ketamine-cost-calculator" className={A}>ketamine cost calculator</Link>.
      </p>
    </>
  );
}

function Spanish() {
  return (
    <>
      <div className="bg-[#F8F5F0] border-l-4 border-[#C9A66B] rounded-2xl p-6 mb-8">
        <h2 className="font-semibold text-lg text-[#0B1D36] mb-3">Respuesta corta</h2>
        <p className="text-[#555]">
          En general, el dinero de una HSA o una FSA se puede usar para gastos médicos calificados, y la lista del IRS incluye la atención psiquiátrica y los medicamentos con receta {sup(1)}{sup(2)}. El tratamiento con ketamina que un profesional con licencia receta y administra para una condición médica generalmente entra en esas categorías. Pero quien decide qué aprueba es el administrador de su plan, así que <strong>consulte con el administrador de su plan antes de pagar</strong>. No podemos garantizar que se acepte ningún gasto.
        </p>
      </div>

      <h2 className={H2}>¿Qué es un gasto médico calificado?</h2>
      <p className={P}>
        La Publicación 502 del IRS describe los gastos médicos como los costos de diagnóstico, curación, alivio, tratamiento o prevención de una enfermedad. Entre lo que menciona están la <strong>atención psiquiátrica</strong> y los <strong>medicamentos recetados</strong> (los que requieren receta) {sup(1)}. La Publicación 969 explica que los fondos de una HSA y de una FSA de salud generalmente se pueden usar para gastos que calificarían para la deducción de gastos médicos y dentales {sup(2)}.
      </p>
      <p className={P}>Según su plan, eso puede incluir:</p>
      <ul className={UL}>
        <li>Sesiones y paquetes de ketamina IV (vea nuestros <Link href="/es/services/ketamine-therapy-cost" className={A}>precios publicados</Link>)</li>
        <li>Lo que usted paga por las visitas de Spravato, como copago, coseguro o deducible</li>
        <li>Ketamina en casa con receta</li>
        <li>Evaluaciones médicas y visitas de seguimiento</li>
      </ul>
      <p className={P}>
        Algunos planes tienen sus propias reglas o límites, y algunas FSA de empleadores son más estrictas que la lista del IRS. Por eso la respuesta siempre depende de su plan.
      </p>

      <h2 className={H2}>Documentos que ayudan</h2>
      <ul className={UL}>
        <li>
          <strong>Un recibo detallado o superfactura (superbill).</strong> Muestra la fecha del servicio, el proveedor, lo que recibió y lo que pagó. Entregamos una superfactura a los pacientes que pagan en efectivo (el mismo documento que explicamos en nuestra <Link href="/es/services/ketamine-insurance" className={A}>guía de seguros</Link>).
        </li>
        <li>
          <strong>Posiblemente una carta de necesidad médica.</strong> Algunos administradores piden una carta breve de su profesional de salud que explique que el tratamiento es para una condición médica. Pregunte a su administrador si la necesita y, si es así, pídanosla.
        </li>
        <li>
          <strong>El formulario de reclamo de su plan,</strong> si pagó de otra forma y está pidiendo un reembolso.
        </li>
      </ul>
      <p className={P}>Guarde copias de todo. El IRS puede pedirle que demuestre que el dinero de la HSA se usó para gastos médicos calificados {sup(2)}.</p>

      <h2 className={H2}>Preguntas para el administrador de su plan</h2>
      <ul className={UL}>
        <li>¿El tratamiento médico con ketamina (ketamina IV, Spravato o ketamina en casa con receta) es un gasto elegible en mi plan?</li>
        <li>¿Qué documentos necesitan: recibo detallado, superfactura, carta de necesidad médica?</li>
        <li>¿Puedo pagar con mi tarjeta de HSA o FSA, o tengo que pagar primero y enviar un reclamo?</li>
        <li>Para una FSA: ¿cuál es la fecha límite de mi año del plan y hay período de gracia o traspaso de saldo?</li>
      </ul>

      <h2 className={H2}>Bueno saber</h2>
      <ul className={UL}>
        <li><strong>HSA vs. FSA.</strong> Una HSA va con un plan de salud con deducible alto y el dinero sigue siendo suyo año tras año. Una FSA de salud se ofrece a través del empleador, y el dinero que no use puede perderse al final del año del plan, a menos que su plan tenga período de gracia o traspaso {sup(3)}{sup(4)}.</li>
        <li><strong>Si un gasto no califica,</strong> el dinero de la HSA usado para ese gasto generalmente paga impuestos y puede tener un impuesto adicional del 20% si usted es menor de 65 años {sup(2)}.</li>
        <li><strong>Esto no es asesoría fiscal.</strong> Para su caso, hable con el administrador de su plan o con un profesional de impuestos.</li>
      </ul>
      <p className={P}>
        ¿Quiere ver primero cuánto podría costar un tratamiento? Use nuestra <Link href="/es/tools/ketamine-cost-calculator" className={A}>calculadora de costos</Link>.
      </p>
    </>
  );
}

export default function HsaFsaPage({ lang, title, description }: { lang: "en" | "es"; title: string; description: string }) {
  const es = lang === "es";
  const path = es ? `/es${HSA_PATH}` : HSA_PATH;
  const jsonLd = pageJsonLd({
    lang,
    path,
    name: title,
    description,
    about: { "@type": "MedicalTherapy", name: es ? "Tratamiento con ketamina" : "Ketamine treatment" },
    crumbs: [
      { name: es ? "Inicio" : "Home", path: es ? "/es" : "/" },
      { name: es ? "Servicios" : "Services", path: es ? "/es/services" : "/services" },
      { name: title, path },
    ],
  });
  return (
    <PageShell
      lang={lang}
      title={title}
      subtitle={
        es
          ? "Cuándo se pueden usar los fondos de una HSA o FSA para el tratamiento con ketamina, qué documentos le pueden pedir y qué preguntar a su plan."
          : "When HSA and FSA funds can generally be used for ketamine treatment, the paperwork you may need, and what to ask your plan."
      }
      jsonLd={jsonLd}
      altHref={es ? HSA_PATH : `/es${HSA_PATH}`}
    >
      {es ? <Spanish /> : <English />}
      <EducationNote lang={lang} />
      <SourceList lang={lang} sources={SOURCES} />
    </PageShell>
  );
}
