"use client";

import { useState } from "react";
import Link from "next/link";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StagesAccordion, type Stage } from "@/components/StagesAccordion";

export default function SporyGosorganamiPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорске";
  const region = "ВКО";

  const stages: Stage[] = [
    {
      icon: "💬",
      title: "Консультация",
      text: "Разбираем, какое решение, действие или бездействие госоргана нарушает ваши права, и проверяем сроки для обжалования.",
    },
    {
      icon: "📋",
      title: "Анализ решения госоргана",
      text: "Изучаю обжалуемое решение, его основания и документы административного дела. При необходимости запрашиваю недостающие материалы.",
    },
    {
      icon: "📝",
      title: "Досудебное обжалование",
      text: "Готовлю и подаю жалобу в вышестоящий орган или вышестоящему должностному лицу. По общему правилу этот этап обязателен перед обращением в суд, если законом не предусмотрено иное.",
    },
    {
      icon: "⚖️",
      title: "Представительство в суде",
      text: "Готовлю административный иск, участвую в судебных заседаниях, при необходимости обжалую решение суда.",
    },
  ];

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
        <Link href="/" className="btn navHomeBtn" aria-label="Вернуться на главную">
          ← На главную
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

          <HeroPhoto />
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
          От первой консультации до представительства в суде. Нажмите на этап, чтобы раскрыть описание.
        </p>
        <StagesAccordion stages={stages} />
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
