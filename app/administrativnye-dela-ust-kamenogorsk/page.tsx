"use client";

import { useState } from "react";
import Link from "next/link";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StagesAccordion, type Stage } from "@/components/StagesAccordion";
import { StickyBar } from "@/components/StickyBar";

export default function AdministrativnyeDelaPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорске";
  const region = "ВКО";

  const stages: Stage[] = [
    {
      icon: "💬",
      title: "Консультация",
      text: "Разбираем, что произошло и какие документы у вас на руках: протокол, постановление, акт освидетельствования. Определяем сроки — для обжалования они короткие, поэтому важно не откладывать.",
    },
    {
      icon: "📋",
      title: "Анализ материалов",
      text: "Изучаю протокол, схему ДТП, видеозаписи, акт освидетельствования и другие материалы: правильно ли они составлены, соответствуют ли фактическим обстоятельствам, есть ли процессуальные нарушения.",
    },
    {
      icon: "🎯",
      title: "Подготовка позиции",
      text: "Готовлю объяснения и замечания, ходатайства об истребовании видеозаписей, вызове свидетелей, назначении экспертизы, а при наличии постановления — жалобу на него.",
    },
    {
      icon: "🛡️",
      title: "Защита в суде",
      text: "Участвую в рассмотрении дела в суде или в уполномоченном органе, представляю доводы и доказательства, при необходимости обжалую принятое решение.",
    },
  ];

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, г. Усть-Каменогорск, ул. Бориса Александрова, д. 3, офис 101";
  const waText = encodeURIComponent("Здравствуйте! Нужна консультация по административному делу");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  const faq = [
    {
      q: "Что делать, если в отношении меня составлен протокол об административном правонарушении?",
      a: "Внимательно прочитайте протокол. Вы вправе дать объяснения, сделать замечания по содержанию и оформлению протокола и указать, с чем не согласны, а также воспользоваться помощью защитника. Свяжитесь с адвокатом как можно раньше — до рассмотрения дела.",
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
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome />

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <div className="heroRow">
          <div className="heroText">
            <Link href="/" className="btn heroBackBtn" aria-label="На главную">
              ← На главную
            </Link>
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

          <HeroPhoto />
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
          <li>Дела об управлении транспортным средством в состоянии опьянения и об отказе от освидетельствования</li>
          <li>Обжалование постановлений о наложении штрафа и иных административных взысканий</li>
          <li>Подготовка жалоб, ходатайств и иных документов</li>
          <li>Представительство в суде по делам об административных правонарушениях</li>
        </ul>
      </section>

      {/* ЭТАПЫ РАБОТЫ */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Этапы работы</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          От первой консультации до защиты в суде. Нажмите на этап, чтобы раскрыть описание.
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
