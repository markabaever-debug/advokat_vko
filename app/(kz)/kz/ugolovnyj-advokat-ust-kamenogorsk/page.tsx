import type { Metadata } from "next";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StagesAccordion, type Stage } from "@/components/StagesAccordion";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { MemoButton } from "@/components/MemoButton";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { pageAlternates, og } from "@/lib/metadata";

const SLUG = "/ugolovnyj-advokat-ust-kamenogorsk";
const title = "Өскемендегі қылмыстық істер жөніндегі адвокат — Маркабаев Е.Б.";
const description =
  "Өскемендегі (ШҚО) қылмыстық істер жөніндегі адвокат. Заң тәжірибесі 10 жылдан астам, 2019 жылдан бері адвокат. Шұғыл қорғау. Лицензия №19007753.";

export const metadata: Metadata = {
  title,
  description,
  ...og(title, description, "kk", `/kz${SLUG}`),
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzUgolovnyAdvokatPage() {
  const fullName = "Маркабаев Ерлан Бапашевич";
  const region = "ШҚО";

  const stages: Stage[] = [
    {
      icon: "💬",
      title: "Консультация",
      text: "Жағдайды тыңдап, іс бойынша мәртебеңізді анықтаймын: куә, күдікті немесе айыпталушы. Құқықтарыңызды және жақын арада не істеу керектігін түсіндіремін. Егер сіз немесе жақыныңыз ұстап алынған болса — келісім бойынша тұрған жеріне барамын.",
    },
    {
      icon: "📋",
      title: "Істі талдау",
      text: "Қорғауға қолжетімді құжаттар мен материалдарды зерттеймін: қаулылар, хаттамалар, тағылған айып. Қылмыстық-процестік заңды бұзушылықтарды, дәлелдемелердегі қайшылықтарды және айыптаудың әлсіз тұстарын анықтаймын.",
    },
    {
      icon: "🎯",
      title: "Ұстаным",
      text: "Сізбен бірге қорғау ұстанымын айқындаймыз: айғақтар беру керек пе және қандай, қандай өтінішхат мәлімдеу, бұлтартпау шарасына немесе тергеушінің әрекеттеріне шағым жасау керек пе. Әрбір маңызды шешім сізбен келісіледі.",
    },
    {
      icon: "🛡️",
      title: "Қорғау",
      text: "Жауап алуға және өзге де тергеу әрекеттеріне қатысамын, өтінішхат мәлімдеймін және шағым беремін, сотта қорғаймын. Қажет болса, үкімге апелляциялық және кассациялық тәртіппен шағым жасаймын.",
    },
  ];

  const faq: FaqItem[] = [
    {
      q: "Шұғыл келу мүмкін бе?",
      a: "Иә. Қажет болса, клиентке шұғыл келу мүмкін (оның ішінде тергеу изоляторына, уақытша ұстау изоляторына, оқиға орнына). Телефон немесе мессенджер арқылы хабарласыңыз — мерзімдер мен шарттарды талқылаймыз.",
    },
    {
      q: "Құпиялылыққа кепілдік бар ма?",
      a: "Адвокаттық құпия заңмен қорғалады: заң көмегін көрсетуге байланысты маған белгілі болған мәліметтер сіздің келісіміңізсіз жарияланбайды.",
    },
    {
      q: "Қызмет құны қалай қалыптасады?",
      a: "Құны істің санатына, жұмыс көлеміне және кезеңдерге (консультация, тергеуде жүргізу, сотта өкілдік ету) байланысты. Нақты сома жағдайды талдағаннан кейін талқыланады. Кезең-кезеңмен төлеу мүмкін.",
    },
  ];

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, Өскемен қ., Борис Александров көшесі, 3-үй, 101-кеңсе";
  const waText = encodeURIComponent("Сәлеметсіз бе! Қылмыстық іс бойынша шұғыл көмек қажет");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <main className="container">
      <ServiceJsonLd lang="kk" slug="/ugolovnyj-advokat-ust-kamenogorsk" breadcrumbName="Қылмыстық істер жөніндегі адвокат" faq={faq} />
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome lang="kk" />

      <MemoButton fullName={fullName} phoneCall={phoneCall} waLink={waLink} lang="kk" />

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <div className="heroRow">
          <div className="heroText">
            <LangSwitch />
            <HomeLink className="btn heroBackBtn" ariaLabel="Басты бетке">
              ← Басты бетке
            </HomeLink>
            <h1 className="h1">
              Өскемендегі қылмыстық істер жөніндегі адвокат
            </h1>

            <p className="sub">
              {fullName}. Заң тәжірибесі 10 жылдан астам, 2019 жылдан бері адвокат.
              Ұстап алу, тергеу және сот сатысында шұғыл қорғау.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Келісім бойынша шұғыл келу</div>
              <div className="kpi">✅ Құпиялылық</div>
              <div className="kpi">✅ 2019 жылдан бері адвокат</div>
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

      {/* SERVICES DESCRIPTION */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Қылмыстық істер бойынша қорғау</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          Өскемен қаласында және бүкіл {region} аумағында кәсіби заң көмегін көрсетемін.
        </p>

        <ul style={{ marginTop: 20, lineHeight: 1.7 }}>
          <li>Күдіктілер мен айыпталушыларды қорғау</li>
          <li>Ұстап алу және жауап алу кезінде қатысу</li>
          <li>Бұлтартпау шарасына шағым жасау</li>
          <li>Сотта өкілдік ету</li>
          <li>Апелляциялық және кассациялық шағымдар</li>
        </ul>
      </section>

      {/* ЭТАПЫ РАБОТЫ */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Жұмыс кезеңдері</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          Алғашқы консультациядан сотта қорғауға дейін. Сипаттаманы ашу үшін кезеңді басыңыз.
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

      {/* LICENSE */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Ресми қызмет</h2>

        <p style={{ marginTop: 15 }}>
          Адвокаттық қызметпен айналысуға 19007753 нөмірлі лицензия, 03.04.2019 жылы берілген.
        </p>
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
