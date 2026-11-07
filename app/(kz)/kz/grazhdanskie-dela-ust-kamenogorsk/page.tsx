import type { Metadata } from "next";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StagesAccordion, type Stage } from "@/components/StagesAccordion";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { pageAlternates } from "@/lib/metadata";

const SLUG = "/grazhdanskie-dela-ust-kamenogorsk";

export const metadata: Metadata = {
  title: "Өскемендегі азаматтық істер жөніндегі адвокат — Маркабаев Е.Б.",
  description:
    "Өскемендегі (ШҚО) азаматтық істер жөніндегі адвокат: қарызды өндіріп алу, отбасылық және мұрагерлік даулар, меншік даулары, тұрғын үй даулары, МИБ және ПИК-ті сүйемелдеу, сотта өкілдік ету. Заң тәжірибесі 10 жылдан астам.",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzGrazhdanskieDelaPage() {
  const fullName = "Маркабаев Ерлан Бапашевич";
  const region = "ШҚО";

  const stages: Stage[] = [
    {
      icon: "💬",
      title: "Консультация",
      text: "Даудың мәнін, құжаттарыңыз бен мерзімдерді талдаймыз. Мүмкін жолдарды түсіндіремін: келіссөздер, жазбаша талап, бітімгершілік келісім немесе сотқа жүгіну, және олардың әрқайсысына не қажет болатынын.",
    },
    {
      icon: "📋",
      title: "Құжаттарды талдау",
      text: "Шарттарды, қолхаттарды, хат алмасуды, құқық белгілейтін және өзге де құжаттарды зерттеймін. Қандай дәлелдемелер бар, қайсысы жетіспейді және оларды қалай алуға болатынын, оның ішінде адвокаттық сауал арқылы, анықтаймын.",
    },
    {
      icon: "🎯",
      title: "Ұстанымды дайындау",
      text: "Жазбаша талап, талап арыз немесе талап қоюға пікір, талаптардың есебін, дәлелдемелерді талап ету және куәларды шақыру туралы өтінішхаттарды дайындаймын.",
    },
    {
      icon: "⚖️",
      title: "Сотта өкілдік ету",
      text: "Сот отырыстарына қатысамын, дәлелдемелерді ұсынамын, куәлардан жауап аламын, жарыссөзде сөйлеймін. Қажет болса, шешімге апелляциялық және кассациялық тәртіппен шағым жасаймын.",
    },
  ];

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, Өскемен қ., Борис Александров көшесі, 3-үй, 101-кеңсе";
  const waText = encodeURIComponent("Сәлеметсіз бе! Азаматтық іс бойынша консультация қажет");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  const faq: FaqItem[] = [
    {
      q: "Дау туындаса, неден бастау керек?",
      a: "Консультациядан бастаңыз. Онда құжаттар мен мән-жайларды талдап, болашағын бағалап, одан әрі әрекеттер тәртібін айқындаймыз: сотқа дейінгі реттеу немесе сотқа жүгіну.",
    },
    {
      q: "Дауды сотсыз шешуге бола ма?",
      a: "Көп жағдайда сотқа дейінгі реттеу мүмкін — келіссөздер, жазбаша талап, тараптардың келісімі. Келісе алмаса, дау соттың қарауына беріледі.",
    },
    {
      q: "Сотта менің мүддемді білдіресіз бе?",
      a: "Иә. Сенім білдірушінің мүддесін азаматтық процестің барлық сатысында білдіремін — бірінші сатыдағы сотта, сондай-ақ апелляциялық және кассациялық шағым жасау кезінде.",
    },
    {
      q: "Қызмет құны қалай қалыптасады?",
      a: "Құны даудың санатына, жұмыс көлеміне және сот отырыстарының санына байланысты. Нақты сома құжаттарды зерттегеннен кейін талқыланады. Кезең-кезеңмен төлеу мүмкін.",
    },
  ];

  return (
    <main className="container">
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome lang="kk" />

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <div className="heroRow">
          <div className="heroText">
            <LangSwitch />
            <HomeLink className="btn heroBackBtn" ariaLabel="Басты бетке">
              ← Басты бетке
            </HomeLink>
            <h1 className="h1">Өскемендегі азаматтық істер жөніндегі адвокат</h1>

            <p className="sub">
              {fullName}. Заң тәжірибесі 10 жылдан астам, 2019 жылдан бері адвокат.
              Азаматтық істерді сотқа дейінгі сатыда және сотта жүргізу.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Сотқа дейінгі реттеу</div>
              <div className="kpi">✅ Сотта өкілдік ету</div>
              <div className="kpi">✅ Апелляция және кассация</div>
            </div>

            <div className="ctaRow" style={{ marginTop: 20 }}>
              <a className="btn btnPrimary" href={`tel:${phoneCall}`}>
                📞 Қоңырау шалу
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
        <h2 className="h2">Қандай көмек көрсетемін</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          Өскемен қаласында және бүкіл {region} аумағында азаматтық істер бойынша заң көмегі.
        </p>

        <ul style={{ marginTop: 20, lineHeight: 1.7 }}>
          <li>Қолхат, қарыз шарты және өзге де міндеттемелер бойынша қарызды өндіріп алу</li>
          <li>Отбасылық даулар: некені бұзу, мүлікті бөлу, алименттер, балаларға қатысты даулар</li>
          <li>Мұрагерлік даулар: мұраға құқықты тану, мұрагерлер арасындағы даулар, мұраны қабылдау мерзімін қалпына келтіру</li>
          <li>Меншік даулары: құқықты тану, мүлікті талап ету, пайдалануға кедергілерді жою</li>
          <li>Тұрғын үй даулары: қоныстандыру, тұрғын үйден шығару, тұрғын үйді бөлу және пайдалану тәртібін айқындау</li>
          <li>МИБ және ПИК-ті сүйемелдеу: адвокаттық сауалдар, жарналар бойынша берешекті өндіріп алу</li>
          <li>Талап арыздарды, талапқа пікірлерді және өзге де процестік құжаттарды дайындау</li>
          <li>Азаматтық істер бойынша сотта өкілдік ету</li>
          <li>Сот актілеріне апелляциялық және кассациялық шағым жасау</li>
        </ul>
      </section>

      {/* ЭТАПЫ РАБОТЫ */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Жұмыс кезеңдері</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          Алғашқы консультациядан сотта өкілдік етуге дейін. Сипаттаманы ашу үшін кезеңді басыңыз.
        </p>
        <StagesAccordion stages={stages} />
      </section>

      {/* ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Жиі қойылатын сұрақтар</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          Клиенттердің тұрақты сұрақтарына жауаптар
        </p>
        <FaqAccordion items={faq} />
      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        <div>📍 {address}</div>
        <div>
          ✉️ <a href={`mailto:${email}`} style={{ color: "inherit" }}>{email}</a>
        </div>
        <div style={{ marginTop: 8 }}>
          Сайттағы ақпарат анықтамалық сипатта және жария оферта болып табылмайды.
        </div>
        <div style={{ marginTop: 6 }}>
          <a href="/kz/politika-konfidencialnosti" style={{ textDecoration: "underline", color: "inherit" }}>
            Құпиялылық саясаты
          </a>
          {" · "}
          <CookieSettingsButton lang="kk" />
        </div>
      </footer>
    </main>
  );
}
