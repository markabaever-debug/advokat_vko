import Link from "next/link";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StagesAccordion, type Stage } from "@/components/StagesAccordion";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export default function GrazhdanskieDelaPage() {
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Усть-Каменогорске";
  const region = "ВКО";

  const stages: Stage[] = [
    {
      icon: "💬",
      title: "Консультация",
      text: "Разбираем суть спора, ваши документы и сроки. Объясняю возможные пути: переговоры, претензия, мировое соглашение или обращение в суд, и что потребуется для каждого из них.",
    },
    {
      icon: "📋",
      title: "Анализ документов",
      text: "Изучаю договоры, расписки, переписку, правоустанавливающие и иные документы. Определяю, какие доказательства есть, каких не хватает и как их получить, в том числе через адвокатский запрос.",
    },
    {
      icon: "🎯",
      title: "Подготовка позиции",
      text: "Готовлю претензию, исковое заявление или возражение на иск, расчёт требований, ходатайства об истребовании доказательств и вызове свидетелей.",
    },
    {
      icon: "⚖️",
      title: "Представительство в суде",
      text: "Участвую в судебных заседаниях, представляю доказательства, допрашиваю свидетелей, выступаю в прениях. При необходимости обжалую решение в апелляционном и кассационном порядке.",
    },
  ];

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, г. Усть-Каменогорск, ул. Бориса Александрова, д. 3, офис 101";
  const waText = encodeURIComponent("Здравствуйте! Нужна консультация по гражданскому делу");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  const faq: FaqItem[] = [
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
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome />

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <div className="heroRow">
          <div className="heroText">
            <LangSwitch />
            <HomeLink className="btn heroBackBtn" ariaLabel="На главную">
              ← На главную
            </HomeLink>
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

          <HeroPhoto />
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
          <li>Наследственные споры: признание права на наследство, споры между наследниками, восстановление срока для принятия наследства</li>
          <li>Споры о собственности: признание права, истребование имущества, устранение препятствий в пользовании</li>
          <li>Жилищные споры: вселение, выселение, раздел и определение порядка пользования жильём</li>
          <li>Сопровождение ОСИ и КСК: адвокатские запросы, взыскание задолженности по взносам</li>
          <li>Подготовка исковых заявлений, возражений и иных процессуальных документов</li>
          <li>Представительство в суде по гражданским делам</li>
          <li>Апелляционное и кассационное обжалование судебных актов</li>
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
        <FaqAccordion items={faq} />
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
