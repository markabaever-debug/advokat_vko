"use client";

import { useState } from "react";
import Link from "next/link";

export default function GrazhdanskieDelaPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорске";
  const region = "ВКО";

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, г. Усть-Каменогорск, ул. Бориса Александрова, д. 3, офис 101";
  const waText = encodeURIComponent("Здравствуйте! Нужна консультация по гражданскому делу");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  const faq = [
    {
      q: "С чего начать, если возник спор?",
      a: "Начните с консультации. На ней мы разберём документы и обстоятельства, оценим перспективы и определим порядок дальнейших действий: досудебное урегулирование или обращение в суд.",
    },
    {
      q: "Можно ли решить спор без суда?",
      a: "Во многих случаях возможно досудебное урегулирование — переговоры, претензия, соглашение сторон. Если договориться не удаётся, спор передаётся на рассмотрение суда.",
    },
    {
      q: "Будете ли вы представлять мои интересы в суде?",
      a: "Да. Представляю интересы доверителя на всех стадиях гражданского процесса — в суде первой инстанции, а также при апелляционном и кассационном обжаловании.",
    },
    {
      q: "Как формируется стоимость услуг?",
      a: "Стоимость зависит от категории спора, объёма работы и количества судебных заседаний. Точная сумма обсуждается после изучения документов. Возможна поэтапная оплата.",
    },
  ];

  return (
    <main className="container">
      {/* HEADER */}
      <header className="nav">
        <Link href="/" className="brand" aria-label="На главную">
          ⚖️ Маркабаев Е.Б.
          <span className="badge">Усть-Каменогорск • {region}</span>
        </Link>
      </header>

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }}>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 className="h1">Адвокат по гражданским делам в {city}</h1>

            <p className="sub">
              {fullName}. Более 10 лет юридической практики, адвокат с 2019 года.
              Ведение гражданских дел на досудебной стадии и в суде.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Досудебное урегулирование</div>
              <div className="kpi">✅ Представительство в суде</div>
              <div className="kpi">✅ Апелляция и кассация</div>
            </div>

            <div className="ctaRow" style={{ marginTop: 20 }}>
              <a className="btn btnPrimary" href={`tel:${phoneCall}`}>
                📞 Позвонить
              </a>
              <a className="btn btnWA" href={waLink} target="_blank" rel="noreferrer">
                💬 WhatsApp
              </a>
            </div>
          </div>

          <div
            style={{
              width: 210,
              height: 216,
              borderRadius: 14,
              overflow: "hidden",
              border: "2px solid rgba(255,255,255,0.15)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.45)",
              flexShrink: 0,
            }}
          >
            <img
              src="/me.jpg"
              alt="Адвокат Маркабаев Ерлан Бапашевич"
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
                objectPosition: "center 20%",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
      </section>

      {/* ЧЕМ ПОМОГАЮ */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Чем помогаю</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          Юридическая помощь по гражданским делам в {city} и по всей территории {region}.
        </p>

        <ul style={{ marginTop: 20, lineHeight: 1.7 }}>
          <li>Взыскание долгов по расписке, договору займа и иным обязательствам</li>
          <li>Семейные споры: расторжение брака, раздел имущества, алименты, споры о детях</li>
          <li>Наследственные споры: оформление наследства, споры между наследниками, восстановление сроков</li>
          <li>Споры о собственности: признание права, истребование имущества, устранение препятствий в пользовании</li>
          <li>Жилищные споры: вселение, выселение, споры по общему имуществу</li>
          <li>Подготовка исковых заявлений, возражений и иных процессуальных документов</li>
          <li>Представительство в суде по гражданским делам</li>
          <li>Апелляционное и кассационное обжалование судебных актов</li>
        </ul>
      </section>

      {/* ЭТАПЫ РАБОТЫ */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Этапы работы</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          От первой консультации до представительства в суде
        </p>
        <div className="stagesGrid">
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>💬</span>
            <h3 className="stageCardTitle">Консультация</h3>
          </div>
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>📋</span>
            <h3 className="stageCardTitle">Анализ документов</h3>
          </div>
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>🎯</span>
            <h3 className="stageCardTitle">Подготовка позиции</h3>
          </div>
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>⚖️</span>
            <h3 className="stageCardTitle">Представительство в суде</h3>
          </div>
        </div>
      </section>

      {/* ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Часто задаваемые вопросы</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          Ответы на типичные вопросы клиентов
        </p>
        <div className="faqList">
          {faq.map((item, idx) => (
            <div key={idx} className="faqItem" data-open={faqOpenIndex === idx}>
              <button
                type="button"
                className="faqTrigger"
                onClick={() => setFaqOpenIndex((i: number | null) => (i === idx ? null : idx))}
                aria-expanded={faqOpenIndex === idx}
              >
                {item.q}
                <span className="faqTriggerIcon">▼</span>
              </button>
              <div className="faqContent">
                <div className="faqContentInner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        <div>📍 {address}</div>
        <div>
          ✉️ <a href={`mailto:${email}`} style={{ color: "inherit" }}>{email}</a>
        </div>
        <div style={{ marginTop: 8 }}>
          Информация на сайте носит справочный характер и не является публичной офертой.
        </div>
        <div style={{ marginTop: 6 }}>
          <Link href="/politika-konfidencialnosti" style={{ textDecoration: "underline" }}>
            Политика конфиденциальности
          </Link>
          {" · "}
          <button
            type="button"
            className="footerLinkBtn"
            onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
          >
            Настройки cookie
          </button>
        </div>
      </footer>
    </main>
  );
}
