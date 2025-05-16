import React, { useState } from "react";
import verbs from "./data/verbs";
import Card from "./components/Card";
import "./index.css";

export default function App() {
  const [idx, setIdx] = useState(0);

  function next() {
    setIdx((prev) => (prev + 1) % verbs.length);
  }

  function prev() {
    setIdx((prev) => (prev - 1 + verbs.length) % verbs.length);
  }

  return (
    <div className="app">
      <Card key={idx} data={verbs[idx]} />
      <div className="button-row">
        <button className="button-zurueck" onClick={prev}>
          Zurück
        </button>
        <button className="button-weiter" onClick={next}>
          Weiter
        </button>
      </div>
      <div className="counter">
        {idx + 1} / {verbs.length}
      </div>

      {/* ----- БЛОК: индивидуальная история к заданию ----- */}
      {verbs[idx].story && (
        <div
          className="story-block"
          style={{
            margin: "24px auto 18px auto",
            background: "#fef4fd",
            borderRadius: 18,
            padding: "15px 21px 13px 18px",
            boxShadow: "0 1px 7px #edb2db2a",
            maxWidth: 540,
            color: "#71346b",
            fontSize: "1.08em",
          }}
        >
          <div
            style={{
              color: "#cf25a2",
              fontWeight: 700,
              marginBottom: 4,
              fontSize: "1em",
            }}
          >
            <span role="img" aria-label="⚡" style={{ marginRight: 6 }}>
              ⚡
            </span>
            Трудный случай / мини-история:
          </div>
          <div>{verbs[idx].story}</div>
        </div>
      )}

      {/* ------ Футер как был ------ */}
      <footer className="footer">
        <div className="footer-section tip">
          <b>🎯 Как учить немецкий эффективно?</b>
          <ul>
            <li>Проговаривайте вслух примеры из упражнений.</li>
            <li>Придумывайте свои предложения с новыми глаголами.</li>
            <li>Используйте ассоциации и реальные ситуации.</li>
            <li>
              Повторяйте коротко, но регулярно — лучше 5 минут каждый день, чем
              час раз в неделю!
            </li>
            <li>Делайте паузы, чтобы мозг успел “уложить” информацию.</li>
            <li>Пробуйте “учить других” — объясните правило кому-то вслух.</li>
            <li>Не бойтесь ошибаться — ошибки это тоже учёба!</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
