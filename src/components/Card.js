import React, { useState } from "react";

export default function Card({ data }) {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);

  function handleSelect(option) {
    if (isCorrect) return;
    setSelected(option);
    if (option === data.correct) setIsCorrect(true);
  }

  return (
    <div className="card">
      <h2>{data.verb}</h2>
      <div className="prompt">
        {data.prompt.split("___").map((part, idx, arr) =>
          idx < arr.length - 1 ? (
            <span key={idx}>
              {part}
              <b style={{ color: "#a82c2c" }}>___</b>
            </span>
          ) : (
            <span key={idx}>{part}</span>
          )
        )}
      </div>
      <div className="options">
        {data.options.map((opt) => (
          <button
            key={opt}
            className={
              selected === opt
                ? opt === data.correct
                  ? "correct"
                  : "wrong"
                : ""
            }
            onClick={() => handleSelect(opt)}
            disabled={isCorrect}
          >
            {opt}
          </button>
        ))}
      </div>
      {selected && !isCorrect && (
        <div className="explanation">
          <b>Неверно. Попробуй ещё!</b>
        </div>
      )}
      {isCorrect && (
        <div className="explanation">
          <b>Правильно!</b> <br />
          <span>{data.explanation}</span>
          {data.alternatives && data.alternatives.length > 0 && (
            <div className="alternatives">
              <b>Альтернативные управления:</b>
              <ul>
                {data.alternatives.map((alt, i) => (
                  <li key={i}>
                    <b>{alt.usage}</b>: {alt.example} — {alt.explanation}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {data.phrase && (
        <div className="phrase">
          <b>🗨️ Устойчивое выражение:</b>
          <br />
          {data.phrase}
        </div>
      )}
      {/* Новый блок с exception и tip */}
      {data.exception && (
        <div className="exception">
          <b>❗ Трудный случай:</b>
          <br />
          {data.exception}
        </div>
      )}
      {data.tip && (
        <div className="tip">
          <b>💡 Совет:</b>
          <br />
          {data.tip}
        </div>
      )}
    </div>
  );
}
