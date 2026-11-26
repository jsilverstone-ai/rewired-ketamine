// Short Q&A blocks moved here from the retired template FAQ pages
// (/faq/<slug>, now 308-redirected to the page listed below).
// Only each old page's own questions were kept: what the condition is and
// whether ketamine may help. Keep answers conservative: no cure claims.

export type RelatedQuestion = { question: string; answer: string };

export type RelatedQuestionsBlock = {
  heading: string;
  /** Show the 988 crisis note above the questions. */
  crisisNote?: boolean;
  items: RelatedQuestion[];
};

export const relatedQuestions: Record<string, RelatedQuestionsBlock> = {
  "/treatments/depression": {
    heading: "Related questions about depression",
    crisisNote: true,
    items: [
      {
        question: "What is major depressive disorder, and can ketamine help?",
        answer:
          "Major depressive disorder involves persistent low mood, loss of interest, and other symptoms that affect daily life. Ketamine has been studied for people whose depression has not responded enough to usual treatments. Results vary, and we do not claim it cures depression.",
      },
      {
        question: "Can ketamine help with suicidal thoughts?",
        answer:
          "Some research has looked at ketamine for a rapid reduction in suicidal thoughts, but results vary and it is not emergency care. Anyone with suicidal thoughts needs a careful medical and psychiatric review first, and ketamine is only ever one part of a broader care plan.",
      },
      {
        question: "Is ketamine an option for bipolar depression or mood instability?",
        answer:
          "Only after a careful medical and psychiatric review. A history of mania, rapid mood shifts, or unstable mood can make ketamine inappropriate. It does not replace the treatment plan from your psychiatrist, and we do not schedule sessions without that review.",
      },
      {
        question: "Can ketamine help with emotional numbness, grief, or sleep problems that come with depression?",
        answer:
          "These often travel with depression. Research specific to each one is limited, and results vary. A consult looks at your full picture, and other care may be a better first step.",
      },
      {
        question: "What about anxiety, harsh self-criticism, or negative self-talk alongside depression?",
        answer:
          "Anxiety, a critical inner voice, and difficulty managing emotions often appear with depression. Research has explored ketamine for depression with anxiety, but results vary. Integration and ongoing therapy are usually part of working on these patterns.",
      },
      {
        question: "Do you treat substance use or addictive behaviors?",
        answer:
          "We are not an addiction treatment program. Substance use is part of every safety screening, and active or unstable use can mean ketamine is not appropriate. If substance use is a concern, we will talk through it honestly and point you toward the right kind of care.",
      },
    ],
  },
  "/treatments/postpartum-depression": {
    heading: "Related questions",
    items: [
      {
        question: "Can ketamine help with postpartum depression?",
        answer:
          "Research is ongoing and results vary. We do not claim it cures postpartum depression. A consult reviews your history, including pregnancy and breastfeeding, before anything is scheduled.",
      },
    ],
  },
  "/treatments/motivation": {
    heading: "Related questions",
    items: [
      {
        question: "What is anhedonia, and can ketamine help?",
        answer:
          "Anhedonia is a reduced ability to feel pleasure or interest, and it often comes with depression. Research is ongoing and results vary. Screening comes first.",
      },
      {
        question: "Can ketamine help with low motivation?",
        answer:
          "Low motivation can be a symptom of depression or other conditions, so the first step is understanding the cause. Research is ongoing and results vary.",
      },
    ],
  },
  "/treatments/burnout": {
    heading: "Related questions",
    items: [
      {
        question: "Can ketamine help with burnout?",
        answer:
          "Burnout involves emotional exhaustion and reduced effectiveness. Research on ketamine for burnout itself is limited and results vary. A consult helps sort out whether depression or anxiety is also part of the picture.",
      },
    ],
  },
  "/treatments/anxiety": {
    heading: "Related questions about anxiety",
    items: [
      {
        question: "What is treatment-resistant anxiety, and can ketamine help?",
        answer:
          "It is anxiety that has not improved enough with usual approaches. Some studies have reported reduced anxiety symptoms with ketamine, but results vary and screening is required.",
      },
      {
        question: "Can ketamine help with social anxiety or panic disorder?",
        answer:
          "Social anxiety involves intense fear of social situations; panic disorder involves recurring, unexpected panic attacks. Research is ongoing and results vary.",
      },
      {
        question: "Is ketamine used for phobias?",
        answer:
          "Phobias are intense fears of specific objects or situations. Research on ketamine for phobias is limited, and results vary.",
      },
      {
        question: "Can ketamine help with rumination?",
        answer:
          "Rumination is repetitive negative thinking. Research is ongoing and results vary. Integration and therapy are often part of the work.",
      },
    ],
  },
  "/treatments/ptsd": {
    heading: "Related questions about trauma",
    items: [
      {
        question: "Can ketamine help with complex PTSD?",
        answer:
          "Complex PTSD involves symptoms from prolonged or repeated trauma. Research is ongoing, and we do not claim ketamine replaces trauma therapy.",
      },
      {
        question: "What are trauma-related symptoms, and can ketamine help?",
        answer:
          "They can include intrusive memories, avoidance, and feeling on edge. Research is ongoing and results vary. Ketamine is not a replacement for trauma-focused therapy.",
      },
    ],
  },
  "/treatments/chronic-pain": {
    heading: "Related questions",
    items: [
      {
        question: "Can ketamine help with neuropathic pain?",
        answer:
          "Neuropathic pain comes from nerve damage or dysfunction. Research is ongoing and results vary. We do not claim it cures neuropathic pain, and screening is required before any session.",
      },
    ],
  },
  "/content/blog/ketamine-for-migraines-and-chronic-headaches": {
    heading: "Related questions",
    items: [
      {
        question: "Can ketamine help with migraines?",
        answer:
          "Migraines are severe headaches that often come with other symptoms. Some research explores ketamine for migraines that have not responded to other treatment. Results vary, and screening is required.",
      },
      {
        question: "What about cluster headaches?",
        answer:
          "Cluster headaches are severe, recurring headaches. Research on ketamine for cluster headaches is limited, and results vary.",
      },
    ],
  },
};
