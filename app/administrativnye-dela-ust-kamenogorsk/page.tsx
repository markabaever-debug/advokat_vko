"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdministrativnyeDelaPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорске";
  const region = "ВКО";

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, г. Усть-Каменогорск, ул. Бориса Александрова, д. 3, офис 101";
  const waText = encodeURIComponent("Здравствуйте! Нужна консультация по административному делу");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  const faq = [
    {
      q: "Что делать, если в отношении меня составлен протокол об административном правонарушении?",
      a: "Не подписывайте документы, с содержанием которых не согласны, без изучения. Обратитесь за консультацией: мы разберём материалы дела, оценим доводы и определим порядок защиты.",
    },
    {
      q: "Можно ли обжаловать штраф или лишение прав?",
      a: "Да. Постановление по делу об административном правонарушении можно обжаловать. Помогаю подготовить жалобу и представляю интересы доверителя при её рассмотрении.",
    },
    {
      q: "В какие сроки нужно подать жалобу?",
      a: "Для обжалования установлены ограниченные сроки, поэтому обращаться лучше сразу после получения постановления. На консультации рассчитаем сроки по вашему делу и подготовим документы.",
    },
    {
      q: "Как формируется стоимость услуг?",
      a: "Стоимость зависит от категории дела, объёма работы и количества заседаний. Точная сумма обсуждается после изучения материалов. Возможна поэтапная оплата.",
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
            <h1 className="h1">Адвокат по административным делам в {city}</h1>

            <p className="sub">
              {fullName}. Более 10 лет юридической практики, адвокат с 2019 года.
              Защита по делам об административных правонарушениях.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Дела о ДТП</div>
              <div className="kpi">✅ Защита при лишении прав</div>
              <div className="kpi">✅ Обжалование постановлений</div>
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
          Юридическая помощь по делам об административных правонарушениях в {city} и по всей территории {region}.
        </p>

        <ul style={{ marginTop: 20, lineHeight: 1.7 }}>
          <li>Защита по делам об административных правонарушениях</li>
          <li>Дела о дорожно-транспортных происшествиях (ДТП)</li>
          <li>Защита при угрозе лишения водительских прав</li>
          <li>Оспаривание и обжалование административных штрафов</li>
          <li>Обжалование постановлений о привлечении к административной ответственности</li>
          <li>Подготовка жалоб, ходатайств и иных документов</li>
          <li>Представительство в суде по делам об административных правонарушениях</li>
        </ul>
      </section>

      {/* ЭТАПЫ РАБОТЫ */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Этапы работы</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          От первой консультации до защиты в суде
        </p>
        <div className="stagesGrid">
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>💬</span>
            <h3 className="stageCardTitle">Консультация</h3>
          </div>
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>📋</span>
            <h3 className="stageCardTitle">Анализ материалов</h3>
          </div>
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>🎯</span>
            <h3 className="stageCardTitle">Подготовка позиции</h3>
          </div>
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>🛡️</span>
            <h3 className="stageCardTitle">Защита в суде</h3>
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
