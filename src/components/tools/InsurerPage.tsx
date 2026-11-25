import Link from "next/link";
import { pageJsonLd } from "@/data/page-meta";
import { INSURERS, INSURANCE_BASE, insurerPath, type Insurer } from "@/data/insurers";
import PageShell from "./PageShell";
import { SourceList, EducationNote } from "./ReviewAndSources";

const H2 = "text-2xl font-bold text-[#0B1D36] mt-12 mb-4";
const P = "text-[#555] mb-4";
const A = "text-[#C9A66B] font-semibold hover:underline";

export function insurerTitle(ins: Insurer, lang: "en" | "es") {
  return lang === "es" ? `Spravato con ${ins.nameEs}: autorización previa en Aventura` : `Spravato and ${ins.name}: Prior Authorization in Aventura`;
}

export function insurerDescription(ins: Insurer, lang: "en" | "es") {
  const es = lang === "es";
  const status = {
    "in-network": es ? `Rewired factura Spravato dentro de la red con ${ins.nameEs}.` : `Rewired bills Spravato in-network with ${ins.name}.`,
    "out-of-network": es ? `${ins.nameEs} está fuera de la red para Spravato en Rewired.` : `${ins.name} is out-of-network for Spravato at Rewired.`,
    "not-listed": es ? `${ins.nameEs} sigue reglas distintas; verifique su plan.` : `${ins.name} follows separate rules; verify your plan.`,
  }[ins.status];
  return es
    ? `${status} Pasos de autorización previa, preguntas para su plan y qué hacer si se niega. La cobertura no está garantizada.`
    : `${status} Prior authorization steps, questions for your plan, and what to do if it is denied. Coverage is not guaranteed.`;
}

function StatusBox({ ins, lang }: { ins: Insurer; lang: "en" | "es" }) {
  const es = lang === "es";
  const text = {
    "in-network": es
      ? <>Rewired Ketamine factura Spravato <strong>dentro de la red con {ins.nameEs}</strong>. La aprobación depende de su evaluación médica y de la autorización previa de su aseguradora. La cobertura no está garantizada y su póliza determina sus costos.</>
      : <>Rewired Ketamine bills Spravato <strong>in-network with {ins.name}</strong>. Approval depends on your medical evaluation and your insurer’s prior authorization. Coverage is not guaranteed, and your policy sets your costs.</>,
    "out-of-network": es
      ? <><strong>{ins.nameEs} está fuera de la red</strong> para Spravato en Rewired. Algunos planes pagan una parte fuera de la red y otros no. Lo que paga el suyo no está garantizado.</>
      : <><strong>{ins.name} is out-of-network</strong> for Spravato at Rewired. Some plans pay part of out-of-network care and some do not. What yours pays is not guaranteed.</>,
    "not-listed": es
      ? <><strong>{ins.nameEs} no está en nuestra lista de planes dentro de la red</strong> para Spravato. {ins.nameEs} sigue reglas distintas. Verifique con su plan y pregúntenos antes de reservar.</>
      : <><strong>{ins.name} is not on our list of in-network plans</strong> for Spravato. {ins.name} follows separate rules. Verify with your plan and ask us before you book.</>,
  }[ins.status];
  return (
    <div className="bg-[#F8F5F0] border-l-4 border-[#C9A66B] rounded-2xl p-6 mb-8">
      <h2 className="font-semibold text-lg text-[#0B1D36] mb-3">{es ? "Estado en Rewired" : "Status at Rewired"}</h2>
      <p className="text-[#555]">{text}</p>
    </div>
  );
}

function AppealTemplate({ ins, lang }: { ins: Insurer; lang: "en" | "es" }) {
  const es = lang === "es";
  const lines = es
    ? [
        "[Fecha]",
        `${ins.nameEs}: Departamento de Apelaciones`,
        "[Dirección o fax que aparece en su carta de negación]",
        "",
        "Asunto: Solicitud de apelación. Afiliado(a): [Nombre]. Número de afiliado: [Número]. Número de referencia o reclamo: [Número].",
        "",
        "Solicito una apelación de su decisión del [fecha de la carta] de negar la autorización previa de Spravato (esketamina) en espray nasal, recetado por [nombre del profesional] en Rewired Ketamine, Aventura, FL.",
        "",
        "Le pido que revise la información adjunta de mi profesional tratante, que explica por qué este tratamiento es médicamente necesario en mi caso según los criterios de su política de cobertura.",
        "",
        "Adjunto: copia de la carta de negación; carta de necesidad médica de mi profesional tratante; expedientes médicos pertinentes.",
        "",
        "Por favor, envíeme su decisión por escrito.",
        "",
        "Atentamente,",
        "[Nombre] · [Teléfono] · [Correo electrónico]",
      ]
    : [
        "[Date]",
        `${ins.name} – Appeals Department`,
        "[Address or fax number from your denial letter]",
        "",
        "Re: Request for appeal. Member: [Name]. Member ID: [Number]. Reference or claim number: [Number].",
        "",
        "I am requesting an appeal of your decision dated [date of letter] to deny prior authorization for Spravato (esketamine) nasal spray, prescribed by [clinician’s name] at Rewired Ketamine, Aventura, FL.",
        "",
        "Please review the enclosed information from my treating clinician, which explains why this treatment is medically necessary for me under the criteria in your coverage policy.",
        "",
        "Enclosed: a copy of the denial letter; a letter of medical necessity from my treating clinician; relevant medical records.",
        "",
        "Please send me your decision in writing.",
        "",
        "Sincerely,",
        "[Name] · [Phone] · [Email]",
      ];
  return (
    <pre className="whitespace-pre-wrap font-sans text-sm text-[#333] bg-white border border-gray-200 rounded-xl p-5 mb-4">{lines.join("\n")}</pre>
  );
}

export default function InsurerPage({ ins, lang }: { ins: Insurer; lang: "en" | "es" }) {
  const es = lang === "es";
  const enPath = insurerPath(ins.slug);
  const path = es ? `/es${enPath}` : enPath;
  const guide = es ? `/es${INSURANCE_BASE}` : INSURANCE_BASE;
  const title = insurerTitle(ins, lang);
  const name = es ? ins.nameEs : ins.name;
  const jsonLd = pageJsonLd({
    lang,
    path,
    name: title,
    description: insurerDescription(ins, lang),
    about: { "@type": "Substance", name: "Spravato (esketamine nasal spray)", nonProprietaryName: "esketamine", administrationRoute: "nasal", prescriptionStatus: "PrescriptionOnly" },
    crumbs: [
      { name: es ? "Inicio" : "Home", path: es ? "/es" : "/" },
      { name: es ? "Seguro Médico" : "Ketamine Insurance", path: guide },
      { name, path },
    ],
  });
  const others = INSURERS.filter((x) => x.slug !== ins.slug);
  const isGov = ins.status === "not-listed";
  const appealIdx = ins.sources.findIndex((x) => /appeal/i.test(x.label));
  const appealRef = appealIdx >= 0 ? ` [${appealIdx + 1}]` : "";

  return (
    <PageShell
      lang={lang}
      title={title}
      subtitle={
        es
          ? `Lo que necesita saber sobre Spravato (esketamina) y ${name}: estado de la red, autorización previa y qué preguntar.`
          : `What to know about Spravato (esketamine) and ${name}: network status, prior authorization, and what to ask.`
      }
      jsonLd={jsonLd}
      altHref={es ? enPath : `/es${enPath}`}
    >
      <StatusBox ins={ins} lang={lang} />
      <p className={P}>
        {es ? "Esta página resume nuestra " : "This page summarizes our "}
        <Link href={guide} className={A}>{es ? "guía completa de seguros para ketamina y Spravato" : "full ketamine and Spravato insurance guide"}</Link>
        {es
          ? ". Spravato es el nombre comercial de la esketamina en espray nasal, aprobada por la FDA para adultos con depresión resistente al tratamiento y para síntomas depresivos en el trastorno depresivo mayor con ideación o conducta suicida aguda (junto con un antidepresivo oral). Solo está disponible a través del programa restringido Spravato REMS, con monitoreo en la clínica [1]."
          : ". Spravato is the brand name for esketamine nasal spray. The FDA label lists two uses in adults: treatment-resistant depression, and depressive symptoms in major depressive disorder with acute suicidal ideation or behavior (with an oral antidepressant). It is available only through the restricted Spravato REMS program, with monitoring in the clinic [1]."}
      </p>

      <h2 className={H2}>{es ? `Cómo suele manejar Spravato ${name}` : `How ${name} usually handles Spravato`}</h2>
      {(es ? ins.planNotesEs : ins.planNotesEn).map((t, i) => (
        <p key={i} className={P}>{t}</p>
      ))}
      {ins.hasPublishedPolicy && (
        <p className={P}>
          {es
            ? "Los criterios de las políticas publicadas de UnitedHealthcare, Aetna y Cigna suelen incluir un diagnóstico de depresión mayor resistente al tratamiento o grave, antecedentes de respuesta inadecuada a al menos dos antidepresivos, una escala de depresión documentada y un prescriptor que sea psiquiatra o consulte con uno. Los detalles varían según el plan y cambian con el tiempo; considere esto una descripción general, no una promesa sobre su plan."
            : "Criteria in the published UnitedHealthcare, Aetna, and Cigna policies usually include a diagnosis of treatment-resistant or severe major depression, a history of inadequate response to at least two antidepressants, a documented depression rating scale, and a prescriber who is a psychiatrist or consults with one. Details differ by plan and change over time, so treat this as a general picture, not a promise about your plan."}
        </p>
      )}
      <p className={P}>
        {es
          ? "El calendario de la etiqueta para la depresión resistente al tratamiento es dos veces por semana en las semanas 1 a 4 y una vez por semana en las semanas 5 a 8: 12 visitas en los primeros dos meses [1]. Su deducible, copago o coseguro puede aplicarse a cada visita."
          : "The labeled schedule for treatment-resistant depression is twice a week in weeks 1–4 and once a week in weeks 5–8: 12 visits in the first two months [1]. Your deductible, copay, or coinsurance can apply to each visit."}
      </p>

      <h2 className={H2}>{es ? "Pasos de la autorización previa en Rewired" : "Prior authorization steps at Rewired"}</h2>
      <p className={P}>
        {es ? "La autorización previa significa que su plan debe aprobar un servicio antes de que usted lo reciba [2]." : "Prior authorization means your plan must approve a service before you receive it [2]."}
      </p>
      <ol className="list-decimal pl-5 space-y-2 text-[#555] mb-4">
        {es ? (
          <>
            <li><strong>Consulta gratuita.</strong> Revisamos su historial, sus medicamentos y si Spravato corresponde a un uso aprobado.</li>
            <li><strong>Expedientes.</strong> Reunimos lo que pide su plan.</li>
            <li><strong>Autorización previa.</strong> La enviamos a su plan. La aprobación no está garantizada, y el tiempo depende de la aseguradora.</li>
            <li><strong>Primera visita,</strong> solo después de la autorización.</li>
          </>
        ) : (
          <>
            <li><strong>Free consultation.</strong> We review your history, medications, and whether Spravato matches an approved use.</li>
            <li><strong>Records.</strong> We gather what your plan asks for.</li>
            <li><strong>Prior authorization.</strong> We submit it to your plan. Approval is not guaranteed, and timing depends on the insurer.</li>
            <li><strong>First visit,</strong> only after authorization.</li>
          </>
        )}
      </ol>
      {isGov && (
        <p className={P}>
          {es
            ? "Como este plan no está en nuestra lista dentro de la red, primero confirmaremos con usted si podemos trabajar con su plan antes de iniciar estos pasos."
            : "Because this plan is not on our in-network list, we will first confirm with you whether we can work with your plan before starting these steps."}
        </p>
      )}

      <h2 className={H2}>{es ? `Preguntas para ${name}` : `Questions to ask ${name}`}</h2>
      <p className={P}>{es ? "Llame al número de servicios para afiliados que aparece en su tarjeta y pregunte:" : "Call the member services number on your card and ask:"}</p>
      <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
        {es ? (
          <>
            <li>¿Mi plan cubre Spravato? ¿Por el beneficio médico o el de farmacia? ¿Requiere autorización previa?</li>
            <li>¿Rewired Ketamine, una clínica certificada REMS en Aventura, está dentro de la red de mi plan?</li>
            <li>¿Cuáles son mi deducible, copago y coseguro para este servicio? ¿Cuánto de mi deducible he pagado este año?</li>
            <li>¿Qué documentos necesitan y cuánto tarda y cuánto dura la autorización previa?</li>
            <li>¿Cuándo se reinicia el año de mi plan?</li>
          </>
        ) : (
          <>
            <li>Is Spravato covered under my plan, under my medical or pharmacy benefit, and does it require prior authorization?</li>
            <li>Is Rewired Ketamine, a REMS-certified clinic in Aventura, in-network for my plan?</li>
            <li>What are my deductible, copay, and coinsurance for this service? How much of my deductible have I met this year?</li>
            <li>What documentation do you require, and how long does prior authorization take and last?</li>
            <li>When does my plan year reset?</li>
          </>
        )}
      </ul>
      <p className={P}>{es ? "Pida un número de referencia de la llamada." : "Ask for a call reference number."}</p>

      <h2 className={H2}>{es ? "Si se niega la autorización" : "If prior authorization is denied"}</h2>
      <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
        {es ? (
          <>
            <li>Lea la carta de negación: explica el motivo, sus derechos de apelación y los plazos.</li>
            <li>Avísenos. A veces falta información que su profesional tratante puede enviar.</li>
            <li>Usted tiene derecho a apelar. Siga las instrucciones y los plazos de su carta{appealRef}.</li>
          </>
        ) : (
          <>
            <li>Read the denial letter. It explains the reason, your appeal rights, and the deadlines.</li>
            <li>Tell us. Sometimes information is missing that your treating clinician can send.</li>
            <li>You have the right to appeal. Follow the instructions and deadlines in your letter{appealRef}.</li>
          </>
        )}
      </ul>
      <p className={P}>
        {es
          ? "Si decide apelar, puede usar esta carta general como punto de partida. Reemplace todo lo que está entre corchetes y use la dirección y el formato que indique su carta de negación."
          : "If you decide to appeal, you can use this general letter as a starting point. Replace everything in brackets, and use the address and format your denial letter asks for."}
      </p>
      <AppealTemplate ins={ins} lang={lang} />
      <p className="text-sm text-[#555] mb-4">
        {es
          ? "Esta plantilla es general y no es asesoría legal. No incluya en la carta información médica que no quiera compartir; su profesional tratante enviará los detalles clínicos."
          : "This template is general and is not legal advice. Do not put medical details in it that you do not want to share; your treating clinician sends the clinical details."}
      </p>

      <h2 className={H2}>{es ? "Otras aseguradoras" : "Other insurers"}</h2>
      <ul className="list-disc pl-5 space-y-2 text-[#555] mb-4">
        {others.map((o) => (
          <li key={o.slug}>
            <Link href={es ? `/es${insurerPath(o.slug)}` : insurerPath(o.slug)} className={A}>
              {es ? `Spravato con ${o.nameEs}` : `Spravato and ${o.name}`}
            </Link>
          </li>
        ))}
        <li>
          <Link href={guide} className={A}>{es ? "Guía completa de seguros" : "Full insurance guide"}</Link>
        </li>
        <li>
          <Link href={es ? "/es/tools/ketamine-cost-calculator" : "/tools/ketamine-cost-calculator"} className={A}>
            {es ? "Calculadora de costos" : "Ketamine cost calculator"}
          </Link>
        </li>
      </ul>
      <EducationNote lang={lang} />
      <SourceList lang={lang} sources={ins.sources} />
    </PageShell>
  );
}
