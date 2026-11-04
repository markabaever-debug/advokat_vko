"use client";

import { useState } from "react";
import Link from "next/link";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StagesAccordion, type Stage } from "@/components/StagesAccordion";

export default function UgolovnyAdvokatPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [memoOpen, setMemoOpen] = useState(false);
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорске";
  const region = "ВКО";

  const stages: Stage[] = [
    {
      icon: "💬",
      title: "Консультация",
      text: "Выслушиваю ситуацию и выясняю ваш статус по делу: свидетель, подозреваемый или обвиняемый. Объясняю ваши права и что нужно сделать в ближайшее время. Если вы или близкий задержаны — выезд к месту нахождения по договорённости.",
    },
    {
      icon: "📋",
      title: "Анализ дела",
      text: "Изучаю документы и материалы, доступные защите: постановления, протоколы, предъявленное обвинение. Выявляю процессуальные нарушения, противоречия в доказательствах и слабые места обвинения.",
    },
    {
      icon: "🎯",
      title: "Стратегия",
      text: "Вместе с вами определяем позицию защиты: давать ли показания и какие, какие ходатайства заявлять, нужно ли обжаловать меру пресечения или действия следователя. Каждое важное решение согласовывается с вами.",
    },
    {
      icon: "🛡️",
      title: "Защита",
      text: "Участвую в допросах и иных следственных действиях, заявляю ходатайства и подаю жалобы, защищаю в суде. При необходимости обжалую приговор в апелляционном и кассационном порядке.",
    },
  ];

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, г. Усть-Каменогорск, ул. Бориса Александрова, д. 3, офис 101";
  const waText = encodeURIComponent("Здравствуйте! Нужна срочная помощь по уголовному делу");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

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
                  Согласно <strong>пункту 2 статьи 19</strong> Конституции Республики Казахстан никто не обязан давать показания против самого себя, супруга (супруги) и близких родственников, круг которых определяется законом.
                </p>
                <p>Если вы задержаны или признаны подозреваемым, вы вправе (<strong>часть девятая статьи 64 УПК РК</strong>):</p>
                <ul>
                  <li>отказаться от дачи показаний;</li>
                  <li>давать показания только в присутствии защитника;</li>
                  <li>до допроса встретиться с защитником наедине и конфиденциально;</li>
                  <li>знакомиться с протоколами и подавать на них замечания.</li>
                </ul>
              </section>

              <section className="memoBlock">
                <h3>🛡 ВЫ ИМЕЕТЕ ПРАВО НА АДВОКАТА</h3>
                <p>
                  Согласно <strong>пункту 4 статьи 18</strong> Конституции Республики Казахстан задержанный, подозреваемый, обвиняемый имеет право пользоваться помощью адвоката (защитника) с момента задержания, признания в качестве подозреваемого или предъявления обвинения.
                </p>
              </section>

              <section className="memoBlock memoBlockHighlight">
                <h3>❗ ГЛАВНОЕ ПРАВИЛО</h3>
                <p className="memoLead">НИЧЕГО НЕ ГОВОРИТЬ БЕЗ АДВОКАТА</p>
                <p>Никогда не:</p>
                <ul className="memoListDanger">
                  <li><span className="memoDangerIcon">🛑</span> не давайте объяснений «просто поговорить» без адвоката;</li>
                  <li><span className="memoDangerIcon">🛑</span> не подписывайте протокол, не прочитав его полностью; всё, с чем не согласны, впишите в протокол как замечание;</li>
                  <li><span className="memoDangerIcon">🛑</span> не пишите объяснительные без адвоката;</li>
                  <li><span className="memoDangerIcon">🛑</span> не верьте словам «это формальность».</li>
                </ul>
                <p className="memoNote">Всё сказанное вами может быть занесено в протокол и использовано как доказательство.</p>
              </section>

              <section className="memoBlock">
                <h3>🚨 ЧТО СКАЗАТЬ СРАЗУ</h3>
                <p>Спокойно и уверенно заявите:</p>
                <blockquote className="memoQuote">
                  «Прошу обеспечить участие защитника. На основании <strong>пункта 2 статьи 19</strong> Конституции Республики Казахстан и <strong>подпункта 6) части девятой статьи 64 УПК РК</strong> буду давать показания только в присутствии защитника».
                </blockquote>
                <p>Повторяйте это на любые вопросы. <span className="memoDangerText">Не объясняйте. Не оправдывайтесь. Не подписывайте.</span></p>
              </section>

              <section className="memoBlock">
                <h3>⚠️ ЕСЛИ ВАС ВЫЗВАЛИ КАК СВИДЕТЕЛЯ</h3>
                <p>
                  Свидетель обязан явиться по вызову и правдиво ответить на вопросы. Отказаться можно только от показаний, которые могут повлечь преследование вас самих, вашего супруга (супруги) или близких родственников (<strong>статья 78 УПК РК</strong>). Вы вправе давать показания в присутствии своего адвоката — свяжитесь с ним заранее, до допроса: неявка адвоката к назначенному времени допрос не останавливает.
                </p>
              </section>

              <section className="memoBlock">
                <h3>⛔ ПОЧЕМУ НЕЛЬЗЯ БЕЗ АДВОКАТА</h3>
                <p>
                  Объяснения и показания, данные без защитника в первые часы, нередко становятся основой обвинения.
                </p>
                <p>Без адвоката:</p>
                <ul>
                  <li>фиксируются оговорки</li>
                  <li>создаются противоречия</li>
                  <li>формируется база обвинения</li>
                  <li>получают признательные фразы</li>
                </ul>
                <p className="memoNote">Отказаться от них потом можно, но они всё равно могут быть использованы как доказательство (часть шестая статьи 64 УПК РК). Поэтому защитника нужно пригласить до первого допроса.</p>
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
                <div className="memoCtaButtons">
                  <a
                    className="btn btnPrimary memoCtaLink"
                    href={`tel:${phoneCall}`}
                  >
                    📞 Позвонить: +7 777 543 07 91
                  </a>
                  <a
                    className="btn btnWA memoCtaLink"
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    💬 WhatsApp: +7 777 543 07 91
                  </a>
                </div>
                <p className="memoDisclaimer">Адвокатская тайна гарантирована законом</p>
              </section>

              <p className="memoDisclaimer" style={{ textAlign: "center", marginTop: 20 }}>
                Нормы приведены по состоянию на ноябрь 2026 г.
              </p>
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
              {fullName}. Более 10 лет юридической практики, адвокат с 2019 года.
              Срочная защита на стадии задержания, следствия и суда.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Срочный выезд по договорённости</div>
              <div className="kpi">✅ Конфиденциальность</div>
              <div className="kpi">✅ Адвокат с 2019 года</div>
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
