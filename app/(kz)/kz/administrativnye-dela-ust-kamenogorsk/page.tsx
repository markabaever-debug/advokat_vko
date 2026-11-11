import type { Metadata } from "next";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StagesAccordion, type Stage } from "@/components/StagesAccordion";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { FaqAccordion, type FaqItem } from "@/components/FaqAccordion";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { pageAlternates } from "@/lib/metadata";

const SLUG = "/administrativnye-dela-ust-kamenogorsk";

export const metadata: Metadata = {
  title: "Өскемендегі әкімшілік істер жөніндегі адвокат — Маркабаев Е.Б.",
  description:
    "Өскемендегі (ШҚО) әкімшілік құқық бұзушылық туралы істер жөніндегі адвокат: ЖКО, құқықтан айыру, айыппұлдар, қаулыларға шағым жасау, сотта қорғау. Заң тәжірибесі 10 жылдан астам.",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzAdministrativnyeDelaPage() {
  const fullName = "Маркабаев Ерлан Бапашевич";
  const region = "ШҚО";

  const stages: Stage[] = [
    {
      icon: "💬",
      title: "Консультация",
      text: "Не болғанын және қолыңызда қандай құжаттар бар екенін талдаймыз: хаттама, қаулы, куәландыру актісі. Мерзімдерді айқындаймыз — шағым жасау мерзімі қысқа, сондықтан кейінге қалдырмаған маңызды.",
    },
    {
      icon: "📋",
      title: "Материалдарды талдау",
      text: "Хаттаманы, ЖКО схемасын, бейнежазбаларды, куәландыру актісін және басқа материалдарды зерттеймін: олар дұрыс жасалған ба, нақты мән-жайларға сәйкес келе ме, іс жүргізудегі бұзушылықтар бар ма.",
    },
    {
      icon: "🎯",
      title: "Ұстанымды дайындау",
      text: "Түсініктемелер мен ескертулерді, бейнежазбаларды талап ету, куәларды шақыру, сараптама тағайындау туралы өтінішхаттарды дайындаймын, ал қаулы болса — оған шағым.",
    },
    {
      icon: "🛡️",
      title: "Сотта қорғау",
      text: "Істі сотта немесе уәкілетті органда қарауға қатысамын, дәйектер мен дәлелдемелерді ұсынамын, қажет болса қабылданған шешімге шағым жасаймын.",
    },
  ];

  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, Өскемен қ., Борис Александров көшесі, 3-үй, 101-кеңсе";
  const waText = encodeURIComponent("Сәлеметсіз бе! Әкімшілік іс бойынша консультация қажет");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  const faq: FaqItem[] = [
    {
      q: "Маған қатысты әкімшілік құқық бұзушылық туралы хаттама жасалса, не істеу керек?",
      a: "Хаттаманы мұқият оқыңыз. Сіз түсініктеме беруге, хаттаманың мазмұны мен ресімделуіне ескертулер жасауға және немен келіспейтініңізді көрсетуге, сондай-ақ қорғаушының көмегін пайдалануға құқылысыз. Адвокатпен мүмкіндігінше ерте — іс қаралғанға дейін хабарласыңыз.",
    },
    {
      q: "Айыппұлға немесе құқықтан айыруға шағым жасауға бола ма?",
      a: "Иә. Әкімшілік құқық бұзушылық туралы іс бойынша қаулыға шағым жасауға болады. Шағымды дайындауға көмектесемін және оны қарау кезінде сенім білдірушінің мүддесін білдіремін.",
    },
    {
      q: "Шағымды қандай мерзімде беру керек?",
      a: "Шағым жасау үшін шектеулі мерзімдер белгіленген, сондықтан қаулыны алғаннан кейін бірден жүгінген жөн. Консультацияда сіздің ісіңіз бойынша мерзімдерді есептеп, құжаттарды дайындаймыз.",
    },
    {
      q: "Қызмет құны қалай қалыптасады?",
      a: "Құны істің санатына, жұмыс көлеміне және отырыстардың санына байланысты. Нақты сома материалдарды зерттегеннен кейін талқыланады. Кезең-кезеңмен төлеу мүмкін.",
    },
  ];

  return (
    <main className="container">
      <ServiceJsonLd lang="kk" slug="/administrativnye-dela-ust-kamenogorsk" breadcrumbName="Әкімшілік істер жөніндегі адвокат" faq={faq} />
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome lang="kk" />

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <div className="heroRow">
          <div className="heroText">
            <LangSwitch />
            <HomeLink className="btn heroBackBtn" ariaLabel="Басты бетке">
              ← Басты бетке
            </HomeLink>
            <h1 className="h1">Өскемендегі әкімшілік істер жөніндегі адвокат</h1>

            <p className="sub">
              {fullName}. Заң тәжірибесі 10 жылдан астам, 2019 жылдан бері адвокат.
              Әкімшілік құқық бұзушылық туралы істер бойынша қорғау.
            </p>

            <div className="kpis">
              <div className="kpi">✅ ЖКО істері</div>
              <div className="kpi">✅ Құқықтан айыру кезінде қорғау</div>
              <div className="kpi">✅ Қаулыларға шағым жасау</div>
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
          Өскемен қаласында және бүкіл {region} аумағында әкімшілік құқық бұзушылық туралы істер бойынша заң көмегі.
        </p>

        <ul style={{ marginTop: 20, lineHeight: 1.7 }}>
          <li>Әкімшілік құқық бұзушылық туралы істер бойынша қорғау</li>
          <li>Жол-көлік оқиғалары (ЖКО) туралы істер</li>
          <li>Көлік жүргізу құқығынан айыру қаупі кезінде қорғау</li>
          <li>Көлік құралын масаң күйде басқару және куәландырудан бас тарту туралы істер</li>
          <li>Айыппұл салу және өзге де әкімшілік жаза қолдану туралы қаулыларға шағым жасау</li>
          <li>Шағымдарды, өтінішхаттарды және өзге де құжаттарды дайындау</li>
          <li>Әкімшілік құқық бұзушылық туралы істер бойынша сотта өкілдік ету</li>
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
