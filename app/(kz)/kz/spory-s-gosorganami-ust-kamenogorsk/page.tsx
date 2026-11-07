import type { Metadata } from "next";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StagesAccordion, type Stage } from "@/components/StagesAccordion";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { pageAlternates } from "@/lib/metadata";

const SLUG = "/spory-s-gosorganami-ust-kamenogorsk";

export const metadata: Metadata = {
  title: "Өскемендегі мемлекеттік органдармен даулар жөніндегі адвокат — Маркабаев Е.Б.",
  description:
    "Өскемендегі (ШҚО) әкімшілік талаптар (ӘРПК) жөніндегі адвокат: мемлекеттік органдардың шешімдері мен әрекеттеріне шағым жасау, зейнетақы және төлемдер туралы даулар, әкімдіктермен даулар. Заң тәжірибесі 10 жылдан астам.",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzSporyGosorganamiPage() {
  const fullName = "Маркабаев Ерлан Бапашевич";
  const region = "ШҚО";

  const stages: Stage[] = [
    {
      icon: "💬",
      title: "Консультация",
      text: "Мемлекеттік органның қандай шешімі, әрекеті немесе әрекетсіздігі құқықтарыңызды бұзатынын талдап, шағым жасау мерзімдерін тексереміз.",
    },
    {
      icon: "📋",
      title: "Мемлекеттік орган шешімін талдау",
      text: "Шағым жасалатын шешімді, оның негіздерін және әкімшілік істің құжаттарын зерттеймін. Қажет болса, жетіспейтін материалдарды сұратамын.",
    },
    {
      icon: "📝",
      title: "Сотқа дейінгі шағым жасау",
      text: "Жоғары тұрған органға немесе жоғары тұрған лауазымды адамға шағым дайындап беремін. Жалпы ереже бойынша бұл кезең сотқа жүгінер алдында міндетті, егер заңда өзгеше көзделмесе.",
    },
    {
      icon: "⚖️",
      title: "Сотта өкілдік ету",
      text: "Әкімшілік талап қою дайындаймын, сот отырыстарына қатысамын, қажет болса соттың шешіміне шағым жасаймын.",
    },
  ];

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, Өскемен қ., Борис Александров көшесі, 3-үй, 101-кеңсе";
  const waText = encodeURIComponent("Сәлеметсіз бе! Мемлекеттік органмен дау бойынша консультация қажет");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  const faq: FaqItem[] = [
    {
      q: "Мемлекеттік органның шешімін немесе әрекетін даулауға бола ма?",
      a: "Иә. Мемлекеттік органдар мен лауазымды адамдардың шешімдері, әрекеттері және әрекетсіздігі әкімшілік сот ісін жүргізу тәртібімен шағымдануы мүмкін. Консультацияда талаптардың негізділігін бағалап, құжаттарды дайындаймыз.",
    },
    {
      q: "Алдымен жоғары тұрған органға жүгіну керек пе?",
      a: "Әдетте, иә. Жалпы ереже бойынша сотқа жүгіну шешімді жоғары тұрған органға немесе жоғары тұрған лауазымды адамға шағымданғаннан кейін рұқсат етіледі, егер заңда өзгеше көзделмесе. Сіздің жағдайыңызда қандай тәртіп қолданылатынын талдап, шағымды мерзімінде беруге көмектесеміз.",
    },
    {
      q: "Төлемдер бойынша қандай дауларды жүргізесіз?",
      a: "Еңбек сіңірген жылдары үшін зейнетақы туралы даулар, оның ішінде еңбек сіңірген жылдарды қайта қарау және зейнетақы мөлшерін азайту кезінде, қызметтен босатылу кезіндегі төлемдер туралы даулар, сондай-ақ төлемдерді тағайындаудан немесе қайта есептеуден бас тартуға шағым жасау.",
    },
    {
      q: "Қызмет құны қалай қалыптасады?",
      a: "Құны даудың күрделілігіне, жұмыс көлеміне және отырыстардың санына байланысты. Нақты сома құжаттарды зерттегеннен кейін талқыланады. Кезең-кезеңмен төлеу мүмкін.",
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
            <h1 className="h1">Өскемендегі мемлекеттік органдармен даулар жөніндегі адвокат</h1>

            <p className="sub">
              {fullName}. Заң тәжірибесі 10 жылдан астам, 2019 жылдан бері адвокат.
              Әкімшілік талаптар және мемлекеттік органдармен даулар.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Мемлекеттік орган шешімдеріне шағым жасау</div>
              <div className="kpi">✅ Зейнетақы және төлемдер туралы даулар</div>
              <div className="kpi">✅ Әкімдіктермен даулар</div>
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
          Өскемен қаласында және бүкіл {region} аумағында мемлекеттік органдармен даулар бойынша заң көмегі.
        </p>

        <ul style={{ marginTop: 20, lineHeight: 1.7 }}>
          <li>Әкімшілік сот ісін жүргізу тәртібіндегі әкімшілік талаптар (ӘРПК)</li>
          <li>Мемлекеттік органдардың шешімдеріне, әрекеттеріне және әрекетсіздігіне шағым жасау</li>
          <li>Лауазымды адамдардың шешімдері мен әрекеттеріне шағым жасау</li>
          <li>Еңбек сіңірген жылдары үшін зейнетақы туралы даулар (құқық қорғау органдары, қылмыстық-атқару жүйесі), еңбек сіңірген жылдарды қайта қарау, қызметтен босатылу кезіндегі төлемдер</li>
          <li>Әкімдіктермен, басқармалармен және департаменттермен даулар</li>
          <li>Әкімшілік талаптарды, шағымдарды және өтініштерді дайындау</li>
          <li>Әкімшілік істер бойынша сотта өкілдік ету</li>
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
