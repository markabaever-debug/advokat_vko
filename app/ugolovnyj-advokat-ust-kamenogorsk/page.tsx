"use client";

import { useState } from "react";

export default function UgolovnyAdvokatPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [memoOpen, setMemoOpen] = useState(false);
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорск";
  const region = "ВКО";

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const waText = encodeURIComponent("Здравствуйте! Нужна срочная помощь по уголовному делу");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;
  const tgLink = "https://t.me/ai_advokat_kz_bot";

  return (
    <main className="container">
      {/* Плавающая кнопка — Памятка при задержании */}
      <div className="memoFloatingWrap">
        <button
          type="button"
          className="memoFloatingBtn"
          onClick={() => setMemoOpen(true)}
          aria-label="Открыть памятку при задержании и допросе"
        >
          🚨 ПАМЯТКА ПРИ ЗАДЕРЖАНИИ И ДОПРОСЕ — ПРОЧИТАТЬ НЕМЕДЛЕННО
        </button>
      </div>

      {/* Модальное окно с памяткой */}
      {memoOpen && (
        <div
          className="modalOverlay"
          onClick={() => setMemoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="memo-title"
        >
          <div
            className="modalPanel memoModalPanel"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <div className="modalHeader">
              <h2 id="memo-title" className="memoModalTitle">
                🚨 Памятка при задержании и допросе
              </h2>
              <button
                type="button"
                className="modalBtn"
                onClick={() => setMemoOpen(false)}
                aria-label="Закрыть"
              >
                ✕ Закрыть
              </button>
            </div>
            <div className="memoModalBody">
              <section className="memoBlock">
                <h3>⚖️ ВЫ ИМЕЕТЕ ПРАВО МОЛЧАТЬ</h3>
                <p>
                  Согласно ст. 77 Конституции Республики Казахстан никто не обязан свидетельствовать против себя, супруга и близких родственников.
                </p>
                <p><strong>Вы вправе:</strong></p>
                <ul>
                  <li>отказаться от дачи показаний</li>
                  <li>не отвечать на вопросы</li>
                  <li>не подписывать объяснения</li>
                  <li>не признавать вину</li>
                </ul>
                <p className="memoNote">Использование молчания не является признанием вины.</p>
              </section>

              <section className="memoBlock">
                <h3>🛡 ВЫ ИМЕЕТЕ ПРАВО НА АДВОКАТА</h3>
                <p>
                  Согласно ст. 26 и 67 УПК РК вы имеете право на защитника с момента задержания или первого допроса.
                </p>
                <p className="memoNote">Без адвоката вы вправе отказаться от любых показаний.</p>
              </section>

              <section className="memoBlock memoBlockHighlight">
                <h3>❗ ГЛАВНОЕ ПРАВИЛО</h3>
                <p className="memoLead">НИЧЕГО НЕ ГОВОРИТЬ БЕЗ АДВОКАТА</p>
                <p>Никогда не:</p>
                <ul>
                  <li>не давайте объяснения «просто поговорить»</li>
                  <li>не подписывайте протоколы</li>
                  <li>не пишите объяснительные</li>
                  <li>не верьте словам «это формальность»</li>
                  <li>не соглашайтесь &quot;для облегчения&quot;</li>
                </ul>
                <p className="memoNote">Любое ваше слово фиксируется и может быть использовано против вас.</p>
              </section>

              <section className="memoBlock">
                <h3>🚨 ЧТО СКАЗАТЬ СРАЗУ</h3>
                <p>Спокойно и уверенно заявите:</p>
                <blockquote className="memoQuote">
                  «На основании ст. 77 Конституции РК и ст. 26, 67 УПК РК буду давать показания только в присутствии адвоката».
                </blockquote>
                <p>Повторяйте это на любые вопросы. Не объясняйте. Не оправдывайтесь. Не подписывайте.</p>
              </section>

              <section className="memoBlock">
                <h3>⛔ ПОЧЕМУ НЕЛЬЗЯ БЕЗ АДВОКАТА</h3>
                <p>
                  Большинство обвинительных доказательств появляются после первых объяснений без защиты.
                </p>
                <p>Без адвоката:</p>
                <ul>
                  <li>фиксируются оговорки</li>
                  <li>создаются противоречия</li>
                  <li>формируется база обвинения</li>
                  <li>получают признательные фразы</li>
                </ul>
                <p className="memoNote">После этого изменить позицию крайне сложно. Первые часы решают исход дела.</p>
              </section>

              <section className="memoBlock">
                <h3>📞 АДВОКАТ НУЖЕН СРОЧНО ЕСЛИ</h3>
                <ul>
                  <li>вас задержали</li>
                  <li>вызывают на допрос</li>
                  <li>проводят обыск</li>
                  <li>изъяли телефон</li>
                  <li>вызывают как свидетеля</li>
                  <li>угрожают уголовным делом</li>
                </ul>
                <p className="memoNote">Чем раньше подключается адвокат — тем сильнее защита.</p>
              </section>

              <section className="memoBlock memoBlockCta">
                <h3>⚖️ ВАШ АДВОКАТ И ЗАЩИТНИК</h3>
                <p className="memoLead">{fullName}</p>
                <ul className="memoServices">
                  <li>Уголовная защита</li>
                  <li>Срочный выезд</li>
                  <li>Конфиденциальные консультации</li>
                  <li>Полное сопровождение дела</li>
                </ul>
                <a className="btn btnWA memoCtaLink" href={waLink} target="_blank" rel="noreferrer">
                  📲 WhatsApp: 8-777-543-07-91
                </a>
                <p className="memoDisclaimer">Адвокатская тайна гарантирована законом</p>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }}>
        <div style={{ display: "flex", gap: 30, flexWrap: "wrap", alignItems: "flex-start" }}>
          
          <div style={{ flex: 1, minWidth: 260 }}>
            <h1 className="h1">
              Уголовный адвокат в {city}
            </h1>

            <p className="sub">
              {fullName}. Более 10 лет практики по уголовным делам. 
              Срочная защита на стадии задержания, следствия и суда.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Срочный выезд 24/7</div>
              <div className="kpi">✅ Конфиденциальность</div>
              <div className="kpi">✅ Опыт более 10 лет</div>
            </div>

            <div className="ctaRow" style={{ marginTop: 20 }}>
              <a className="btn btnPrimary" href={`tel:${phoneCall}`}>
                📞 Позвонить
              </a>

              <a className="btn btnWA" href={waLink} target="_blank" rel="noreferrer">
                💬 WhatsApp
              </a>

              <a className="btn btnTG" href={tgLink} target="_blank" rel="noreferrer">
                🤖 Telegram
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

      {/* SERVICES DESCRIPTION */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Защита по уголовным делам</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          Оказываю профессиональную юридическую помощь в {city} и по всей территории {region}.
        </p>

        <ul style={{ marginTop: 20, lineHeight: 1.7 }}>
          <li>Защита подозреваемых и обвиняемых</li>
          <li>Участие при задержании и допросах</li>
          <li>Обжалование меры пресечения</li>
          <li>Представительство в суде</li>
          <li>Апелляционные и кассационные жалобы</li>
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
            <h3 className="stageCardTitle">Анализ дела</h3>
          </div>
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>🎯</span>
            <h3 className="stageCardTitle">Стратегия</h3>
          </div>
          <div className="stageCard">
            <span className="stageIcon" aria-hidden>🛡️</span>
            <h3 className="stageCardTitle">Защита</h3>
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
          <div
            className="faqItem"
            data-open={faqOpenIndex === 0}
          >
            <button
              type="button"
              className="faqTrigger"
              onClick={() => setFaqOpenIndex((i: number | null) => (i === 0 ? null : 0))}
              aria-expanded={faqOpenIndex === 0}
            >
              Возможен ли срочный выезд?
              <span className="faqTriggerIcon">▼</span>
            </button>
            <div className="faqContent">
              <div className="faqContentInner">
                Да. При необходимости возможен срочный выезд к клиенту (в том числе в СИЗО, изолятор, к месту происшествия). Свяжитесь по телефону или мессенджеру — обсудим сроки и условия.
              </div>
            </div>
          </div>
          <div
            className="faqItem"
            data-open={faqOpenIndex === 1}
          >
            <button
              type="button"
              className="faqTrigger"
              onClick={() => setFaqOpenIndex((i: number | null) => (i === 1 ? null : 1))}
              aria-expanded={faqOpenIndex === 1}
            >
              Гарантирована ли конфиденциальность?
              <span className="faqTriggerIcon">▼</span>
            </button>
            <div className="faqContent">
              <div className="faqContentInner">
                Адвокатская тайна защищена законом. Вся информация, полученная в рамках оказания юридической помощи, не подлежит разглашению. Консультации и переписка строго конфиденциальны.
              </div>
            </div>
          </div>
          <div
            className="faqItem"
            data-open={faqOpenIndex === 2}
          >
            <button
              type="button"
              className="faqTrigger"
              onClick={() => setFaqOpenIndex((i: number | null) => (i === 2 ? null : 2))}
              aria-expanded={faqOpenIndex === 2}
            >
              Как формируется стоимость услуг?
              <span className="faqTriggerIcon">▼</span>
            </button>
            <div className="faqContent">
              <div className="faqContentInner">
                Стоимость зависит от категории дела, объёма работы и этапов (консультация, ведение на следствии, представительство в суде). Точная сумма обсуждается после анализа ситуации. Возможна поэтапная оплата.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LICENSE */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Официальная деятельность</h2>

        <p style={{ marginTop: 15 }}>
          Лицензия на занятие адвокатской деятельностью №19007753 
          от 03.04.2019 года.
        </p>
      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        Информация на сайте носит справочный характер и не является публичной офертой.
      </footer>

    </main>
  );
}
