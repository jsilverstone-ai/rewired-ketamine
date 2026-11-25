// PHQ-9 and GAD-7 item wording, response options and severity bands.
//
// English wording: the official PHQ-9 / GAD-7 forms developed by Drs. Robert L. Spitzer,
// Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc.
// "No permission required to reproduce, translate, display or distribute."
// Spanish wording: the authors' official "Spanish for the USA" translations of the same forms
// (copies checked 2026-11-25 against the University of Washington AIMS/UWHATC PDFs).
// Do NOT edit item text: the questionnaires are only valid when used word for word.

export type Band = { min: number; max: number; label: string; meaning: string };

export type ScreenerConfig = {
  id: "phq9" | "gad7";
  lang: "en" | "es";
  intro: string;
  options: string[]; // index = score (0-3)
  items: string[];
  difficultyQuestion?: string;
  difficultyOptions?: string[];
  maxScore: number;
  bands: Band[];
  /** 0-based index of an item that triggers the crisis box when answered above 0. */
  crisisItem?: number;
  attribution: string;
};

const EN_OPTIONS = ["Not at all", "Several days", "More than half the days", "Nearly every day"];
const ES_OPTIONS = ["Ningún día", "Varios días", "Más de la mitad de los días", "Casi todos los días"];
const EN_DIFFICULTY = ["Not difficult at all", "Somewhat difficult", "Very difficult", "Extremely difficult"];
const ES_DIFFICULTY = ["No ha sido difícil", "Un poco difícil", "Muy difícil", "Extremadamente difícil"];

const EN_ATTRIBUTION =
  "Developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues, with an educational grant from Pfizer Inc. No permission required to reproduce, translate, display or distribute.";
const ES_ATTRIBUTION =
  "Elaborado por los doctores Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke y colegas, mediante una subvención educativa otorgada por Pfizer Inc. No se requiere permiso para reproducir, traducir, presentar o distribuir.";

export const PHQ9_EN: ScreenerConfig = {
  id: "phq9",
  lang: "en",
  intro: "Over the last 2 weeks, how often have you been bothered by any of the following problems?",
  options: EN_OPTIONS,
  items: [
    "Little interest or pleasure in doing things",
    "Feeling down, depressed, or hopeless",
    "Trouble falling or staying asleep, or sleeping too much",
    "Feeling tired or having little energy",
    "Poor appetite or overeating",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
    "Trouble concentrating on things, such as reading the newspaper or watching television",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
    "Thoughts that you would be better off dead or of hurting yourself in some way",
  ],
  difficultyQuestion:
    "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
  difficultyOptions: EN_DIFFICULTY,
  maxScore: 27,
  bands: [
    { min: 0, max: 4, label: "Minimal", meaning: "Your answers suggest few or no depression symptoms right now. If something still feels off, it is always okay to talk to someone." },
    { min: 5, max: 9, label: "Mild", meaning: "Your answers suggest mild depression symptoms. Many clinicians suggest keeping an eye on how you feel and repeating the questionnaire in a couple of weeks, and talking to a professional if things do not improve." },
    { min: 10, max: 14, label: "Moderate", meaning: "Your answers suggest moderate depression symptoms. This is a good point to talk with a doctor or mental health professional about what you are going through." },
    { min: 15, max: 19, label: "Moderately severe", meaning: "Your answers suggest moderately severe depression symptoms. We encourage you to reach out to a doctor or mental health professional soon for a full evaluation." },
    { min: 20, max: 27, label: "Severe", meaning: "Your answers suggest severe depression symptoms. Please contact a doctor or mental health professional as soon as you can. You do not have to handle this alone." },
  ],
  crisisItem: 8,
  attribution: EN_ATTRIBUTION,
};

export const PHQ9_ES: ScreenerConfig = {
  id: "phq9",
  lang: "es",
  intro: "Durante las últimas 2 semanas, ¿qué tan seguido ha tenido molestias debido a los siguientes problemas?",
  options: ES_OPTIONS,
  items: [
    "Poco interés o placer en hacer cosas",
    "Se ha sentido decaído(a), deprimido(a) o sin esperanzas",
    "Ha tenido dificultad para quedarse o permanecer dormido(a), o ha dormido demasiado",
    "Se ha sentido cansado(a) o con poca energía",
    "Sin apetito o ha comido en exceso",
    "Se ha sentido mal con usted mismo(a) – o que es un fracaso o que ha quedado mal con usted mismo(a) o con su familia",
    "Ha tenido dificultad para concentrarse en ciertas actividades, tales como leer el periódico o ver la televisión",
    "¿Se ha movido o hablado tan lento que otras personas podrían haberlo notado? o lo contrario – muy inquieto(a) o agitado(a) que ha estado moviéndose mucho más de lo normal",
    "Pensamientos de que estaría mejor muerto(a) o de lastimarse de alguna manera",
  ],
  difficultyQuestion:
    "Si marcó cualquiera de los problemas, ¿qué tanta dificultad le han dado estos problemas para hacer su trabajo, encargarse de las tareas del hogar, o llevarse bien con otras personas?",
  difficultyOptions: ES_DIFFICULTY,
  maxScore: 27,
  bands: [
    { min: 0, max: 4, label: "Mínima", meaning: "Sus respuestas sugieren pocos o ningún síntoma de depresión en este momento. Si aun así algo no se siente bien, siempre está bien hablar con alguien." },
    { min: 5, max: 9, label: "Leve", meaning: "Sus respuestas sugieren síntomas leves de depresión. Muchos profesionales recomiendan observar cómo se siente, repetir el cuestionario en un par de semanas y hablar con un profesional si no mejora." },
    { min: 10, max: 14, label: "Moderada", meaning: "Sus respuestas sugieren síntomas moderados de depresión. Es un buen momento para hablar con un médico o un profesional de salud mental sobre lo que está viviendo." },
    { min: 15, max: 19, label: "Moderadamente grave", meaning: "Sus respuestas sugieren síntomas de depresión moderadamente graves. Le recomendamos buscar pronto a un médico o profesional de salud mental para una evaluación completa." },
    { min: 20, max: 27, label: "Grave", meaning: "Sus respuestas sugieren síntomas graves de depresión. Por favor, comuníquese con un médico o profesional de salud mental lo antes posible. No tiene que enfrentar esto solo(a)." },
  ],
  crisisItem: 8,
  attribution: ES_ATTRIBUTION,
};

export const GAD7_EN: ScreenerConfig = {
  id: "gad7",
  lang: "en",
  intro: "Over the last 2 weeks, how often have you been bothered by the following problems?",
  options: EN_OPTIONS,
  items: [
    "Feeling nervous, anxious, or on edge",
    "Not being able to stop or control worrying",
    "Worrying too much about different things",
    "Trouble relaxing",
    "Being so restless that it is hard to sit still",
    "Becoming easily annoyed or irritable",
    "Feeling afraid as if something awful might happen",
  ],
  difficultyQuestion:
    "If you checked off any problems, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?",
  difficultyOptions: EN_DIFFICULTY,
  maxScore: 21,
  bands: [
    { min: 0, max: 4, label: "Minimal", meaning: "Your answers suggest few or no anxiety symptoms right now." },
    { min: 5, max: 9, label: "Mild", meaning: "Your answers suggest mild anxiety symptoms. It can help to notice what has changed recently and repeat the questionnaire in a couple of weeks." },
    { min: 10, max: 14, label: "Moderate", meaning: "Your answers suggest moderate anxiety symptoms. This is a good point to talk with a doctor or mental health professional for a fuller evaluation." },
    { min: 15, max: 21, label: "Severe", meaning: "Your answers suggest severe anxiety symptoms. We encourage you to reach out to a doctor or mental health professional soon. You do not have to handle this alone." },
  ],
  attribution: EN_ATTRIBUTION,
};

export const GAD7_ES: ScreenerConfig = {
  id: "gad7",
  lang: "es",
  intro: "Durante las últimas 2 semanas, ¿qué tan seguido ha tenido molestias debido a los siguientes problemas?",
  options: ES_OPTIONS,
  items: [
    "Se ha sentido nervioso(a), ansioso(a) o con los nervios de punta",
    "No ha sido capaz de parar o controlar su preocupación",
    "Se ha preocupado demasiado por motivos diferentes",
    "Ha tenido dificultad para relajarse",
    "Se ha sentido tan inquieto(a) que no ha podido quedarse quieto(a)",
    "Se ha molestado o irritado fácilmente",
    "Ha tenido miedo de que algo terrible fuera a pasar",
  ],
  // The official Spanish (USA) GAD-7 form has no difficulty question, so none is shown here.
  maxScore: 21,
  bands: [
    { min: 0, max: 4, label: "Mínima", meaning: "Sus respuestas sugieren pocos o ningún síntoma de ansiedad en este momento." },
    { min: 5, max: 9, label: "Leve", meaning: "Sus respuestas sugieren síntomas leves de ansiedad. Puede ayudar notar qué ha cambiado últimamente y repetir el cuestionario en un par de semanas." },
    { min: 10, max: 14, label: "Moderada", meaning: "Sus respuestas sugieren síntomas moderados de ansiedad. Es un buen momento para hablar con un médico o profesional de salud mental para una evaluación más completa." },
    { min: 15, max: 21, label: "Grave", meaning: "Sus respuestas sugieren síntomas graves de ansiedad. Le recomendamos buscar pronto a un médico o profesional de salud mental. No tiene que enfrentar esto solo(a)." },
  ],
  attribution: ES_ATTRIBUTION,
};
