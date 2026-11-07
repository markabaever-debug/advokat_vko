import Link from "next/link";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StagesAccordion, type Stage } from "@/components/StagesAccordion";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { MemoButton } from "@/components/MemoButton";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export default function UgolovnyAdvokatPage() {
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

  const faq: FaqItem[] = [
    {
      q: "Возможен ли срочный выезд?",
      a: "Да. При необходимости возможен срочный выезд к клиенту (в том числе в СИЗО, изолятор, к месту происшествия). Свяжитесь по телефону или мессенджеру — обсудим сроки и условия.",
    },
    {
      q: "Гарантирована ли конфиденциальность?",
      a: "Адвокатская тайна защищена законом. Вся информация, полученная в рамках оказания юридической помощи, не подлежит разглашению. Консультации и переписка строго конфиденциальны.",
    },
    {
      q: "Как формируется стоимость услуг?",
      a: "Стоимость зависит от категории дела, объёма работы и этапов (консультация, ведение на следствии, представительство в суде). Точная сумма обсуждается после анализа ситуации. Возможна поэтапная оплата.",
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
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome />

      <MemoButton fullName={fullName} phoneCall={phoneCall} waLink={waLink} />

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <div className="heroRow">
          <div className="heroText">
            <LangSwitch />
            <HomeLink className="btn heroBackBtn" ariaLabel="На главную">
              ← На главную
            </HomeLink>
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
        <FaqAccordion items={faq} />
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
          <CookieSettingsButton />
        </div>
      </footer>

    </main>
  );
}
