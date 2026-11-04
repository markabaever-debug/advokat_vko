"use client";

import { useState } from "react";
import Link from "next/link";

export default function SporyGosorganamiPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорске";
  const region = "ВКО";

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, г. Усть-Каменогорск, ул. Бориса Александрова, д. 3, офис 101";
  const waText = encodeURIComponent("Здравствуйте! Нужна консультация по спору с госорганом");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  const faq = [
    {
      q: "Можно ли оспорить решение или действие государственного органа?",
      a: "Да. Решения, действия и бездействие государственных органов и должностных лиц могут быть обжалованы в порядке административного судопроизводства. На консультации оценим обоснованность требований и подготовим документы.",
    },
    {
      q: "Нужно ли сначала обращаться в вышестоящий орган?",
      a: "Как правило, да. По общему правилу обращение в суд допускается после обжалования решения в вышестоящий орган или вышестоящему должностному лицу, если законом не предусмотрено иное. Разберём, какой порядок действует в вашем случае, и поможем подать жалобу в срок.",
    },
    {
      q: "Какие споры по выплатам вы ведёте?",
      a: "Споры о пенсиях за выслугу лет, в том числе при пересмотре выслуги лет и снижении размера пенсии, споры о выплатах при увольнении со службы, а также обжалование отказов в назначении или перерасчёте выплат.",
    },
    {
      q: "Как формируется стоимость услуг?",
      a: "Стоимость зависит от сложности спора, объёма работы и количества заседаний. Точная сумма обсуждается после изучения документов. Возможна поэтапная оплата.",
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
            <h1 className="h1">Адвокат по спорам с госорганами в {city}</h1>

            <p className="sub">
              {fullName}. Более 10 лет юридической практики, адвокат с 2019 года.
              Административные иски и споры с государственными органами.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Обжалование решений госорганов</div>
              <div className="kpi">✅ Споры о пенсиях и выплатах</div>
              <div className="kpi">✅ Споры с акиматами</div>
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
          Юридическая помощь по спорам с государственными органами в {city} и по всей территории {region}.
        </p>

        <ul style={{ marginTop: 20, lineHeight: 1.7 }}>
          <li>Административные иски в порядке административного судопроизводства (АППК)</li>
          <li>Обжалование решений, действий и бездействия государственных органов</li>
          <li>Обжалование решений и действий должностных лиц</li>
          <li>Споры о пенсиях за выслугу лет (правоохранительные органы, уголовно-исполнительная система), пересмотр выслуги лет, выплаты при увольнении со службы</li>
          <li>Споры с акиматами, управлениями и департаментами</li>
          <li>Подготовка административных исков, жалоб и обращений</li>
          <li>Представительство в суде по административным делам</li>
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
            <h3 className="stageCardTitle">Анализ решения госоргана</h3>
          </div>
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>🎯</span>
            <h3 className="stageCardTitle">Досудебное обжалование</h3>
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
