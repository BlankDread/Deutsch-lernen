const verbs = [
  {
    prompt: "Ich warte ___ den Bus.",
    correct: "auf",
    options: ["auf", "über", "mit"],
    explanation: "‘warten auf’ — ждать кого-то/чего-то (Akkusativ)",
    alternatives: [
      {
        usage: "warten auf + Akk",
        example: "Ich warte auf den Bus.",
        explanation: "Ждать кого-то/чего-то"
      }
    ],
    phrase: "Abwarten und Tee trinken.",
    exception: "",
    tip: ""
  },
  {
    prompt: "Er träumt ___ einer Reise.",
    correct: "von",
    options: ["an", "mit", "von"],
    explanation: "‘träumen von’ — мечтать о чём-то (Dativ)",
    alternatives: [],
    phrase: "",
    exception: "",
    tip: ""
  }
  // ... и так далее
];

export default verbs;
