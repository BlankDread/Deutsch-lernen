const verbs = [
  {
    prompt: "Ich warte ___ den Bus.",
    correct: "auf",
    options: ["auf", "über", "an"],
    explanation: "‘warten auf’ — ждать кого-то/чего-то (Akkusativ).",
    phrase: "Abwarten und Tee trinken. — Терпеливо ждать.",
    exception: "Только warten auf (+ Akk) — ждать КОГО/ЧЕГО. Не путай с warten an (находиться где-то).",
    tip: "Вспоминай: жду НА что-то (auf), всегда Akkusativ!",
    alternatives: []
  },
  {
    prompt: "Er träumt ___ einer Reise.",
    correct: "von",
    options: ["an", "mit", "von"],
    explanation: "‘träumen von’ — мечтать о чём-то (Dativ).",
    phrase: "Träumen kostet nichts. — Мечтать не вредно.",
    exception: "‘träumen von’ — только о чём-то реальном или желаемом. Не путай с träumen über.",
    tip: "von всегда с Dativ, после von — einer Reise.",
    alternatives: []
  },
  {
    prompt: "Sie spricht ___ ihrer Mutter.",
    correct: "mit",
    options: ["über", "mit", "zu"],
    explanation: "‘sprechen mit’ — говорить с кем-то (Dativ).",
    phrase: "Mit jemandem ein Wörtchen reden. — Серьёзно поговорить с кем-то.",
    exception: "mit — с кем-то, über — о чём-то. Не путай!",
    tip: "mit всегда с Dativ, собеседник — объект после mit.",
    alternatives: [
      { usage: "sprechen über + Akk", example: "Wir sprechen über das Wetter.", explanation: "Говорить о чём-то" }
    ]
  },
  {
    prompt: "Wir sprechen ___ das Problem.",
    correct: "über",
    options: ["mit", "über", "auf"],
    explanation: "‘sprechen über’ — говорить о чём-то (Akkusativ).",
    phrase: "Über Gott und die Welt sprechen. — Говорить обо всём на свете.",
    exception: "über — о чём-то, mit — с кем-то.",
    tip: "Если говорим о предмете — всегда über.",
    alternatives: [
      { usage: "sprechen mit + Dat", example: "Ich spreche mit dir.", explanation: "Говорить с кем-то" }
    ]
  },
  {
    prompt: "Ich frage ___ dem Preis.",
    correct: "nach",
    options: ["an", "nach", "zu"],
    explanation: "‘fragen nach’ — спрашивать о чём-то (Dativ).",
    phrase: "Nach dem Weg fragen. — Спросить дорогу.",
    exception: "nach всегда с Dativ и значением 'о чём-то'.",
    tip: "Спрашиваешь о чём-то — используй nach.",
    alternatives: []
  },
  {
    prompt: "Er bittet ___ Hilfe.",
    correct: "um",
    options: ["um", "nach", "an"],
    explanation: "‘bitten um’ — просить о чём-то (Akkusativ).",
    phrase: "Um Hilfe bitten. — Просить о помощи.",
    exception: "um всегда с Akkusativ. Не путай с bitten nach (такого нет).",
    tip: "Просишь о чём-то — всегда um + Akkusativ.",
    alternatives: []
  },
  {
    prompt: "Ich erinnere mich ___ unseren Urlaub.",
    correct: "an",
    options: ["an", "mit", "über"],
    explanation: "‘sich erinnern an’ — помнить о чём-то (Akkusativ).",
    phrase: "Sich an etwas erinnern wie gestern. — Помнить что-то, как будто это было вчера.",
    exception: "an всегда с Akkusativ. Не путать с sich erinnern mit.",
    tip: "Вспоминаешь о чём-то — an + Akk.",
    alternatives: []
  },
  {
    prompt: "Wir gewöhnen uns ___ das neue Leben.",
    correct: "an",
    options: ["auf", "an", "mit"],
    explanation: "‘sich gewöhnen an’ — привыкать к чему-то (Akkusativ).",
    phrase: "Sich an ein neues Umfeld gewöhnen. — Привыкать к новой среде.",
    exception: "an + Akk — привыкать к чему-то.",
    tip: "Привыкаешь к новому — an + Akk.",
    alternatives: []
  },
  {
    prompt: "Ich nehme ___ dem Kurs teil.",
    correct: "an",
    options: ["an", "mit", "bei"],
    explanation: "‘teilnehmen an’ — участвовать в чём-то (Dativ).",
    phrase: "An einer Veranstaltung teilnehmen. — Принять участие в мероприятии.",
    exception: "an + Dativ — только для участия!",
    tip: "Teilnehmen всегда an + Dativ.",
    alternatives: []
  },
  {
    prompt: "Sie ist interessiert ___ Geschichte.",
    correct: "an",
    options: ["an", "in", "auf"],
    explanation: "‘interessiert sein an’ — быть заинтересованным в чём-то (Dativ).",
    phrase: "An etwas großes Interesse zeigen. — Проявлять большой интерес к чему-то.",
    exception: "an + Dativ — только для выражения интереса.",
    tip: "Интерес к чему-то — всегда an + Dativ.",
    alternatives: []
  },
  {
    prompt: "Ich habe Angst ___ Hunden.",
    correct: "vor",
    options: ["vor", "auf", "an"],
    explanation: "‘Angst haben vor’ — бояться чего-то (Dativ).",
    phrase: "Angst vor etwas haben. — Бояться чего-либо.",
    exception: "vor + Dativ — выражение страха.",
    tip: "Боишься — всегда vor + Dativ.",
    alternatives: []
  },
  {
    prompt: "Er träumt ___ seiner Zukunft.",
    correct: "von",
    options: ["von", "über", "an"],
    explanation: "‘träumen von’ — мечтать о чём-то (Dativ).",
    phrase: "Von einer besseren Zukunft träumen. — Мечтать о лучшем будущем.",
    exception: "von + Dativ. Не путать mit или an.",
    tip: "Von — всегда мечтать О чём-то.",
    alternatives: []
  },
  {
    prompt: "Wir denken ___ das Problem.",
    correct: "an",
    options: ["an", "über", "zu"],
    explanation: "‘denken an’ — думать о чём-то (Akkusativ).",
    phrase: "Immer an die Zukunft denken. — Всегда думать о будущем.",
    exception: "an + Akk — думать о чём-то (а не über!).",
    tip: "Думать О чём-то — an + Akk.",
    alternatives: [
      { usage: "nachdenken über + Akk", example: "Ich denke über die Lösung nach.", explanation: "Размышлять о чём-то" }
    ]
  },
  {
    prompt: "Sie denkt ___ ihre Zukunft nach.",
    correct: "über",
    options: ["über", "an", "mit"],
    explanation: "‘nachdenken über’ — размышлять о чём-то (Akkusativ).",
    phrase: "Über das Leben nachdenken. — Размышлять о жизни.",
    exception: "über + Akk — только для глубокого размышления.",
    tip: "Глубоко думаешь — über + Akk.",
    alternatives: []
  },
  {
    prompt: "Ich spreche ___ meinen Freund.",
    correct: "mit",
    options: ["mit", "über", "an"],
    explanation: "‘sprechen mit’ — говорить с кем-то (Dativ).",
    phrase: "Mit jemandem ins Gespräch kommen. — Завязать разговор с кем-то.",
    exception: "mit + Dativ — с кем-то, über + Akk — о чём-то.",
    tip: "С кем-то — mit + Dativ.",
    alternatives: [
      { usage: "sprechen über + Akk", example: "Wir sprechen über Musik.", explanation: "Говорить о чём-то" }
    ]
  },
  {
    prompt: "Wir sprechen ___ Musik.",
    correct: "über",
    options: ["über", "mit", "an"],
    explanation: "‘sprechen über’ — говорить о чём-то (Akkusativ).",
    phrase: "Über etwas reden wie ein Wasserfall. — Болтать без умолку.",
    exception: "über + Akk — о чём-то, mit + Dativ — с кем-то.",
    tip: "О чём-то — über + Akk.",
    alternatives: [
      { usage: "sprechen mit + Dat", example: "Ich spreche mit Anna.", explanation: "Говорить с кем-то" }
    ]
  },
  {
    prompt: "Sie fragt ___ dem Weg.",
    correct: "nach",
    options: ["nach", "an", "um"],
    explanation: "‘fragen nach’ — спрашивать о чём-то (Dativ).",
    phrase: "Nach dem Weg fragen. — Спросить дорогу.",
    exception: "nach + Dativ — всегда спрашивать О чём-то.",
    tip: "О чём спрашиваешь? nach + Dativ.",
    alternatives: []
  },
  {
    prompt: "Ich bitte ___ Ruhe.",
    correct: "um",
    options: ["um", "an", "nach"],
    explanation: "‘bitten um’ — просить о чём-то (Akkusativ).",
    phrase: "Jemanden um einen Gefallen bitten. — Просить кого-то об одолжении.",
    exception: "um + Akk — просить о чём-то.",
    tip: "Просишь о чём-то — um + Akk.",
    alternatives: []
  },
  {
    prompt: "Sie erinnert sich ___ ihren Geburtstag.",
    correct: "an",
    options: ["an", "mit", "bei"],
    explanation: "‘sich erinnern an’ — помнить о чём-то (Akkusativ).",
    phrase: "Sich an die Kindheit erinnern. — Вспоминать детство.",
    exception: "an + Akk — помнить о чём-то.",
    tip: "Помнишь о чём-то — an + Akk.",
    alternatives: []
  },
  {
    prompt: "Wir gewöhnen uns ___ das Wetter.",
    correct: "an",
    options: ["an", "bei", "mit"],
    explanation: "‘sich gewöhnen an’ — привыкать к чему-то (Akkusativ).",
    phrase: "Sich an das neue Klima gewöhnen. — Привыкать к новому климату.",
    exception: "an + Akk — привыкать к чему-то.",
    tip: "Привыкаешь — an + Akk.",
    alternatives: []
  },
  {
    prompt: "Er nimmt ___ der Sitzung teil.",
    correct: "an",
    options: ["an", "mit", "bei"],
    explanation: "‘teilnehmen an’ — участвовать в чём-то (Dativ).",
    phrase: "An einer Besprechung teilnehmen. — Присутствовать на совещании.",
    exception: "an + Dativ — участвовать в чём-то.",
    tip: "Участвуешь — an + Dativ.",
    alternatives: []
  },
  {
    prompt: "Sie ist interessiert ___ Kunst.",
    correct: "an",
    options: ["an", "in", "auf"],
    explanation: "‘interessiert sein an’ — интересоваться чем-то (Dativ).",
    phrase: "Großes Interesse an Musik haben. — Проявлять большой интерес к музыке.",
    exception: "an + Dativ — интерес к чему-то.",
    tip: "Интерес к — an + Dativ.",
    alternatives: []
  },
  {
    prompt: "Ich habe Angst ___ der Prüfung.",
    correct: "vor",
    options: ["vor", "an", "mit"],
    explanation: "‘Angst haben vor’ — бояться чего-то (Dativ).",
    phrase: "Angst vor Fehlern haben. — Бояться ошибок.",
    exception: "vor + Dativ — страх.",
    tip: "Боишься — vor + Dativ.",
    alternatives: []
  },
  {
    prompt: "Sie träumt ___ einer langen Reise.",
    correct: "von",
    options: ["von", "mit", "über"],
    explanation: "‘träumen von’ — мечтать о чём-то (Dativ).",
    phrase: "Von fernen Ländern träumen. — Мечтать о дальних странах.",
    exception: "von + Dativ — мечтаешь о чём-то.",
    tip: "Мечтаешь — von + Dativ.",
    alternatives: []
  },
  {
    prompt: "Wir denken ___ das Wetter.",
    correct: "an",
    options: ["an", "über", "zu"],
    explanation: "‘denken an’ — думать о чём-то (Akkusativ).",
    phrase: "An das Gute denken. — Думать о хорошем.",
    exception: "an + Akk — думать о чём-то.",
    tip: "Думаешь о чём-то — an + Akk.",
    alternatives: []
  }
];

export default verbs;
