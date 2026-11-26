export type FAQItem = { question: string; answer: string };

export type FAQLocaleCopy = {
  title: string;
  description: string;
  h1: string;
  related?: string;
  relatedLabel?: string;
  faqs: FAQItem[];
};

export type FAQPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  related?: string;
  relatedLabel?: string;
  es?: FAQLocaleCopy;
  faqs: FAQItem[];
};

export const faqs: FAQPage[] = [
{
  slug: "treatment-resistant-depression",
  title: "Treatment-Resistant Depression FAQ | Rewired Ketamine Aventura",
  h1: "Treatment-Resistant Depression FAQ",
  description: "Rewired Ketamine is a locally owned clinic at 2820 NE 214th St Suite 1002, Aventura, FL 33180. We provide guided in-clinic ketamine sessions for people in Aventura, Miami, Fort Lauderdale, and South Florida whose depression has not improved enough with standard antidepressants. Fully guided sessions are available. ¡Hablamos Español!",
  related: "/treatments/depression",
  faqs: [
    { question: "What is treatment-resistant depression?", answer: "It is the term used when a person has tried usual antidepressants and therapy and still does not have enough relief. At Rewired Ketamine in Aventura we review that history in a consult before any ketamine session is considered." },
    { question: "Can ketamine help treatment-resistant depression?", answer: "Research has studied ketamine for people whose depression has not responded to standard care. Some patients report shifts in mood within hours to days. Results vary and we do not claim it cures depression. Screening at our Aventura clinic decides if a guided session is appropriate." },
    { question: "How is this different from at-home ketamine?", answer: "Sessions happen in a private treatment room at 2820 NE 214th St Suite 1002 in Aventura with monitoring and staff present. Dosing and support occur in the same room. This is not a mail-order kit. Patients come from Miami, North Miami Beach, Fort Lauderdale, and the rest of South Florida." },
    { question: "Do you offer Spravato for treatment-resistant depression?", answer: "Yes. Rewired Ketamine is REMS-certified for Spravato (esketamine nasal spray). It is given in the Aventura office under observation and is different from IV ketamine. The consult decides which, if either, fits. Some insurance plans cover Spravato when REMS criteria are met. IV ketamine is usually cash-pay." },
    { question: "What happens after a session?", answer: "You stay for monitoring and recovery. You need a driver. Integration is the shorter step of applying what came up; it is not the same as ongoing therapy. Many people start with a short series over a few weeks, then decide on boosters based on how they feel." },
    { question: "How do I start?", answer: "Book a free consult. We review history, medications, goals, and safety factors (including blood pressure and substance use). Treatment is only scheduled if you are a candidate. Call or text (305) 676-6070. The clinic serves Miami and Fort Lauderdale from the Aventura office." },
  ],
},
{
  slug: "generalized-anxiety",
  title: "Ketamine for Anxiety FAQ | Rewired Ketamine Aventura & Miami",
  h1: "Ketamine for Anxiety FAQ",
  description: "Rewired Ketamine in Aventura offers guided ketamine sessions for people with generalized anxiety who have not gotten enough relief from usual care. The clinic is at 2820 NE 214th St Suite 1002 and sees patients from Miami, Fort Lauderdale, and South Florida. Fully guided sessions are available. ¡Hablamos Español!",
  related: "/treatments/anxiety",
  faqs: [
    { question: "What does generalized anxiety look like when people come in?", answer: "Ongoing worry that is hard to turn off, tension, and difficulty settling. A consult at the Aventura clinic reviews history, medications, and whether a guided ketamine session is appropriate. It is not a first-line option for everyone." },
    { question: "Can ketamine help anxiety?", answer: "A 2026 review noted ketamine was associated with reduced anxiety symptoms in some studies. Results vary. We do not claim it cures anxiety. Screening decides if a session at our Aventura office makes sense." },
    { question: "Is the session in Miami or Aventura?", answer: "The office is in Aventura (2820 NE 214th St Suite 1002). Patients from Miami, North Miami Beach, and Fort Lauderdale come to this location. If you searched “ketamine for anxiety Miami” or “ketamine near me,” this is the clinic those searches should reach." },
    { question: "What happens during a guided session?", answer: "You are in a private room with monitoring. Sessions are typically about an hour, plus time to settle. Rooms can be adjusted for light and sound. You are not left alone. A driver is required afterward." },
    { question: "How is integration different from therapy?", answer: "Integration is the shorter step after the session to apply what came up to daily life. Therapy is the longer ongoing relationship. We do not treat ketamine or integration as a replacement for therapy." },
    { question: "How do I start?", answer: "Book a free consult at Rewired Ketamine in Aventura. We explain off-label use and possible dissociation before anything is scheduled. (305) 676-6070. ¡Hablamos Español!" },
  ],
},
{
  slug: "ptsd",
  title: "Ketamine for PTSD FAQ | Rewired Ketamine Aventura",
  h1: "Ketamine for PTSD FAQ",
  description: "Rewired Ketamine provides guided in-clinic ketamine sessions for people with PTSD at our Aventura office (2820 NE 214th St Suite 1002). We see patients from Miami, Fort Lauderdale, and South Florida. Care is monitored and staffed. Fully guided sessions are available. ¡Hablamos Español!",
  related: "/treatments/ptsd",
  faqs: [
    { question: "How do people with PTSD use ketamine here?", answer: "After screening, sessions take place in a private treatment room with monitoring. The goal is a guided medical process, not an unsupervised experience. History of trauma, current symptoms, and medications are reviewed in the consult at the Aventura clinic." },
    { question: "Is this the same as therapy?", answer: "No. The ketamine session is medical. Integration afterward is the shorter step of applying what came up. Ongoing therapy is a separate, longer relationship. We do not present ketamine as a replacement for trauma therapy." },
    { question: "Where do Miami and Fort Lauderdale patients go?", answer: "All sessions are at 2820 NE 214th St Suite 1002, Aventura, FL 33180. That is the North Miami metro office for anyone searching ketamine for PTSD in Miami or South Florida." },
    { question: "What safety steps are in place?", answer: "Monitoring during the session and a staffed recovery window. We screen for issues such as uncontrolled blood pressure, active psychosis, or unstable substance use before anyone starts. Exact risks are covered in consent. A driver is required." },
    { question: "How many sessions are typical?", answer: "Many people begin with a short series over a few weeks, then decide on next steps based on how they feel. There is no fixed calendar." },
    { question: "How do I start?", answer: "Free consult at Rewired Ketamine in Aventura. (305) 676-6070. We serve Miami and Fort Lauderdale. ¡Hablamos Español!" },
  ],
},
{
  slug: "ocd",
  title: "Ketamine for OCD FAQ | Rewired Ketamine Aventura",
  h1: "Ketamine for OCD FAQ",
  description: "Rewired Ketamine in Aventura offers guided ketamine sessions for people with OCD who have not found enough relief with standard approaches. The clinic is at 2820 NE 214th St Suite 1002 and serves Miami, Fort Lauderdale, and South Florida. Fully guided sessions are available. ¡Hablamos Español!",
  related: "/treatments/ocd",
  faqs: [
    { question: "Can ketamine be considered for OCD?", answer: "Some people explore it when usual treatments have not been enough. A consult at the Aventura clinic reviews history and decides whether a guided session is appropriate. We do not claim it cures OCD." },
    { question: "What does a session look like?", answer: "Private treatment room, monitoring, staff nearby. Typically about an hour plus recovery time. You need a driver. This is in-clinic care in Aventura, not a mail-order option." },
    { question: "Do you see patients from Miami and Fort Lauderdale?", answer: "Yes. The office is in Aventura. Patients regularly come from Miami, North Miami Beach, Fort Lauderdale, and the rest of South Florida." },
    { question: "How is integration handled?", answer: "Integration is the shorter, focused step after the session. It is not the same as ongoing ERP or talk therapy. Both can exist; one does not replace the other." },
    { question: "How do I start?", answer: "Book a free consult. (305) 676-6070. Rewired Ketamine, 2820 NE 214th St Suite 1002, Aventura. ¡Hablamos Español!" },
  ],
},
{
  slug: "spravato",
  title: "Spravato FAQ | Rewired Ketamine Aventura (REMS-Certified)",
  h1: "Spravato FAQ",
  description: "Rewired Ketamine is a REMS-certified clinic in Aventura offering Spravato (esketamine nasal spray) for treatment-resistant depression. The office is at 2820 NE 214th St Suite 1002. We serve patients from Miami, Fort Lauderdale, and South Florida. Spravato is given in-clinic under observation and is different from IV ketamine. ¡Hablamos Español!",
  related: "/services/spravato",
  faqs: [
    { question: "What is Spravato?", answer: "It is the brand name for esketamine nasal spray. The FDA has approved it for treatment-resistant depression in adults, used on its own or with an oral antidepressant, and for depressive symptoms in major depressive disorder with acute suicidal ideation or behavior, used with an oral antidepressant. It must be administered in a certified healthcare setting under the REMS program, with at least two hours of monitoring after each dose. Rewired Ketamine in Aventura holds that certification." },
    { question: "How is Spravato different from IV ketamine?", answer: "Different route, different regulatory status, still in-person and monitored. IV ketamine is a separate service at the same Aventura clinic. The consult decides which, if either, fits. We do not claim one is better than the other." },
    { question: "What does a Spravato visit include?", answer: "Administration in the office plus at least two hours of monitoring for dissociation, blood-pressure changes, sedation, and breathing before you leave. A driver is required; you should not drive until the next day after a restful night of sleep. This happens at 2820 NE 214th St Suite 1002 in Aventura." },
    { question: "Does insurance cover it?", answer: "Some plans cover Spravato when REMS criteria are met. IV ketamine is usually cash-pay. We can review options during the consult for patients from Miami and Fort Lauderdale." },
    { question: "How do I start?", answer: "Book a free consult at Rewired Ketamine in Aventura. (305) 676-6070. Confirm current Spravato availability. ¡Hablamos Español!" },
  ],
},
{
  slug: "chronic-pain",
  title: "Ketamine for Chronic Pain FAQ | Rewired Ketamine Aventura",
  h1: "Ketamine for Chronic Pain FAQ",
  description: "Rewired Ketamine provides guided ketamine sessions for certain chronic pain concerns at our Aventura clinic (2820 NE 214th St Suite 1002). Patients come from Miami, Fort Lauderdale, and South Florida. Screening is required. Fully guided sessions are available. ¡Hablamos Español!",
  related: "/treatments/chronic-pain",
  faqs: [
    { question: "When do people ask about ketamine for pain?", answer: "When usual pain approaches have not brought enough relief. The consult at the Aventura office reviews the type of pain, history, and whether a guided session is appropriate. We do not claim it cures pain." },
    { question: "Is the session different from mental-health infusions?", answer: "The setting is the same: private room, monitoring, staff present, driver required. Dosing and length are individualized. This is in-clinic care in Aventura, not unsupervised." },
    { question: "Where is the clinic for Miami and Fort Lauderdale patients?", answer: "2820 NE 214th St Suite 1002, Aventura, FL 33180. That is the location for anyone searching ketamine for chronic pain in Miami or South Florida." },
    { question: "What about side effects and safety?", answer: "Dissociation and blood-pressure changes can occur. Monitoring happens on site. Uncontrolled blood pressure and certain other conditions require careful screening. Exact risks are in the consent." },
    { question: "How do I start?", answer: "Free consult at Rewired Ketamine in Aventura. (305) 676-6070. ¡Hablamos Español!" },
  ],
},
{
    slug: "cost-and-coverage",
    title: "Cost and Insurance FAQ | Rewired Ketamine Aventura",
    h1: "Cost and Insurance FAQ",
    description: "Prices for IV ketamine at Rewired Ketamine in Aventura, and how Spravato insurance billing works. Cash-pay IV sessions include a superbill. ¡Hablamos Español!",
    related: "/services/ketamine-insurance",
    relatedLabel: "Insurance page",
    faqs: [
      { question: "How much does an IV ketamine session cost?", answer: "Our published 1-hour mental-health IV protocol is $440 for a single session and $2,300 for a package of 6. Guided sessions, 2-hour options, and other packages are listed on the cost page. A free consult is required before treatment." },
      { question: "Does insurance cover Spravato?", answer: "We bill Spravato in-network with UnitedHealthcare, Cigna, and Aetna. Approval is never guaranteed and depends on your plan and prior authorization. More detail is on our insurance page." },
      { question: "Is Blue Cross Blue Shield or Florida Blue accepted for Spravato?", answer: "Blue Cross Blue Shield plans, including Florida Blue, are out-of-network for Spravato at Rewired Ketamine. Some plans have out-of-network benefits, but what they pay varies and is not guaranteed. We can review your plan at a free consult." },
      { question: "Does insurance cover IV ketamine?", answer: "IV ketamine is cash-pay. It is not FDA-approved for depression, and plans generally do not cover it. We give cash-pay patients a superbill (a detailed statement of the services you received and what you paid) that you may submit to your insurer for possible out-of-network reimbursement. Reimbursement is not guaranteed and depends on your plan." },
      { question: "What is a superbill?", answer: "A superbill is a detailed statement of the services you received and what you paid. We give one to every cash-pay patient. You submit the claim; we cannot predict what, if anything, your plan will pay." },
      { question: "How do I get started or learn more about coverage?", answer: "See our insurance page, or book a free consult. Call or text (305) 676-6070. Rewired Ketamine is at 2820 NE 214th St Suite 1002, Aventura, FL 33180. ¡Hablamos Español!" },
    ],
    es: {
      title: "Costo y Seguro Médico | Preguntas Frecuentes | Rewired Ketamine Aventura",
      h1: "Costo y Seguro Médico",
      description: "Precios de la ketamina IV en Rewired Ketamine en Aventura, y cómo se factura Spravato al seguro. Las sesiones IV de pago en efectivo incluyen una superfactura. ¡Hablamos Español!",
      related: "/es/services/ketamine-insurance",
      relatedLabel: "página de seguro médico",
      faqs: [
        { question: "¿Cuánto cuesta una sesión de ketamina IV?", answer: "Nuestro protocolo IV publicado de salud mental de 1 hora cuesta $440 por una sesión individual y $2,300 por un paquete de 6. Las sesiones guiadas, las opciones de 2 horas y los demás paquetes están en la página de costos. Se requiere una consulta gratuita antes del tratamiento." },
        { question: "¿El seguro cubre Spravato?", answer: "Facturamos Spravato dentro de la red (in-network) con UnitedHealthcare, Cigna y Aetna. La aprobación nunca está garantizada y depende de su plan y de la autorización previa. Encontrará más detalles en nuestra página de seguro médico." },
        { question: "¿Aceptan Blue Cross Blue Shield o Florida Blue para Spravato?", answer: "Los planes de Blue Cross Blue Shield, incluido Florida Blue, están fuera de la red (out-of-network) para Spravato en Rewired Ketamine. Algunos planes tienen beneficios fuera de la red, pero lo que pagan varía y no está garantizado. Podemos revisar su plan en una consulta gratuita." },
        { question: "¿El seguro cubre la ketamina IV?", answer: "La ketamina IV se paga en efectivo (cash-pay). No está aprobada por la FDA para la depresión, y los planes generalmente no la cubren. A los pacientes que pagan en efectivo les entregamos una superfactura (superbill) — un estado de cuenta detallado de los servicios que usted recibió y lo que pagó — para que la presente a su aseguradora y solicite un posible reembolso fuera de la red. El reembolso no está garantizado y depende de su plan." },
        { question: "¿Qué es una superfactura (superbill)?", answer: "Es un estado de cuenta detallado de los servicios que usted recibió y lo que pagó. Entregamos una a cada paciente que paga en efectivo. Usted presenta el reclamo; nosotros no podemos predecir qué pagará su plan, si es que paga algo." },
        { question: "¿Cómo empiezo o dónde obtengo más información sobre la cobertura?", answer: "Consulte nuestra página de seguro médico, o reserve una consulta gratuita. Llame o envíe un mensaje de texto al (305) 676-6070. Rewired Ketamine está en 2820 NE 214th St Suite 1002, Aventura, FL 33180. ¡Hablamos Español!" },
      ],
    },
  },
];