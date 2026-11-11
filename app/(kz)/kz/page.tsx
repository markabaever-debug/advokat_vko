import Link from "next/link";
import type { Metadata } from "next";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StickyBar } from "@/components/StickyBar";
import { HeroLeadButtons } from "@/components/HeroLeadButtons";
import { HeroRating } from "@/components/HeroRating";
import { DocsGallery } from "@/components/DocsGallery";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { ReviewsBlock } from "@/components/ReviewsBlock";
import { LocationBlock } from "@/components/LocationBlock";
import { WhatHappened } from "@/components/WhatHappened";
import { AfterContact } from "@/components/AfterContact";
import { AboutVideo } from "@/components/AboutVideo";
import { pageAlternates, og } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Өскемендегі қылмыстық істер жөніндегі адвокат — Маркабаев Е.Б.",
  description:
    "Адвокат Маркабаев Е.Б.: қылмыстық және азаматтық істер, отбасылық даулар, құжаттар, сотта өкілдік ету.",
  ...og(
    "Өскемендегі қылмыстық істер жөніндегі адвокат — Маркабаев Е.Б.",
    "Қылмыстық, азаматтық және әкімшілік істер. Өскемен (ШҚО). Сотта қорғау, қоңырау және WhatsApp.",
    "kk",
  ),
  alternates: pageAlternates("/", "/kz", "/kz"),
};

export default function KzHome() {
  const fullName = "Маркабаев Ерлан Бапашевич";
  const city = "Өскемен";
  const region = "ШҚО";

  const phoneDisplay = "+7 777 543 07 91";
  const phoneCall = "+77775430791";
  const waNumber = "77775430791";

  const email = "advokatvko.rk@gmail.com";
  const address = "070010, Өскемен қ., Борис Александров көшесі, 3-үй, 101-кеңсе";

  const waText = encodeURIComponent("Сәлеметсіз бе! Адвокаттың консультациясы қажет");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <main className="container">
      <StickyBar phoneCall={phoneCall} waLink={waLink} lang="kk" />

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <div className="heroRow">
          <div className="heroText">
            <h1 className="h1">Өскемендегі қылмыстық істер жөніндегі адвокат</h1>

            <p className="sub">
              Заң тәжірибесі 10 жылдан астам, 2019 жылдан бері адвокат. Тергеуде және
              барлық сатыдағы соттарда қорғау, оның ішінде ҚР Жоғарғы Сотында. Сондай-ақ
              азаматтық және әкімшілік істер.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Құпиялылық</div>
              <div className="kpi">✅ Шұғыл істер</div>
              <div className="kpi">✅ Сот / келіссөздер</div>
            </div>

            <HeroRating lang="kk" />

            <HeroLeadButtons phoneCall={phoneCall} waLink={waLink} lang="kk" />
          </div>

          <HeroPhoto alt="Адвокат Маркабаев Е.Б." />
        </div>
      </section>

      {/* WHAT HAPPENED */}
      <WhatHappened lang="kk" phoneCall={phoneCall} />

      {/* SERVICES */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Негізгі бағыттар</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          {city} қаласындағы ({region}) заң көмегі
        </p>

        <div className="servicesGrid" style={{ marginTop: 20 }}>

          <Link href="/kz/ugolovnyj-advokat-ust-kamenogorsk" className="serviceCard">
            <h3 className="serviceCardTitle">⚖️ Қылмыстық істер</h3>
            <p className="serviceCardText">
              Қылмыстық істер бойынша қорғау және өкілдік ету, тергеу мен сот сатысына қатысу.
            </p>
          </Link>

          <Link href="/kz/grazhdanskie-dela-ust-kamenogorsk" className="serviceCard">
            <h3 className="serviceCardTitle">📄 Азаматтық істер</h3>
            <p className="serviceCardText">
              Қолхат бойынша қарызды өндіріп алу, отбасылық және мұрагерлік істер, меншік даулары.
            </p>
          </Link>

          <Link href="/kz/administrativnye-dela-ust-kamenogorsk" className="serviceCard">
            <h3 className="serviceCardTitle">🚗 Әкімшілік істер</h3>
            <p className="serviceCardText">
              ЖКО, жол қозғалысы ережелерін бұзу, айыппұлдарға шағым жасау, көлік құралдарын басқару құқығынан айыру кезінде қорғау.
            </p>
          </Link>

          <Link href="/kz/spory-s-gosorganami-ust-kamenogorsk" className="serviceCard">
            <h3 className="serviceCardTitle">🏛 ӘРПК бойынша істер</h3>
            <p className="serviceCardText">
              Мемлекеттік органдармен даулар, лауазымды адамдардың шешімдері мен әрекеттеріне шағым жасау.
            </p>
          </Link>

        </div>
      </section>

      {/* AFTER CONTACT */}
      <AfterContact lang="kk" />

      {/* REVIEWS */}
      <ReviewsBlock lang="kk" />

      {/* ABOUT */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Адвокат туралы</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          {fullName}. Қылмыстық істер бойынша тергеуде және сотта қорғау, сондай-ақ
          азаматтық және әкімшілік істер, мемлекеттік органдармен даулар, процестік
          құжаттарды дайындау.
        </p>

        <p style={{ marginTop: 12 }}>
          Әр іске жоғары жауапкершілікпен қараймын: адам маған өзінің бостандығын,
          құқықтарын немесе болашағын сеніп тапсырады. Уақытқа ұқыптылықты, клиентпен
          сыпайы әрі сенімді қарым-қатынасты бағалаймын — ісіңіздің барысынан әрдайым
          хабардар боласыз. Біліктілігімді үнемі арттырамын және жұмысымда заманауи
          технологияларды, соның ішінде материалдарды талдау үшін жасанды интеллект
          құралдарын адвокаттық құпияны сақтай отырып қолданамын. Бұл жұмысты жылдам әрі
          мұқият атқаруға мүмкіндік береді, бірақ қорғау ұстанымын әрдайым өзім айқындаймын.
        </p>

        <AboutVideo />

        <div style={{ marginTop: 20 }}>
          <strong>Байланыс:</strong>
          <div>📞 {phoneDisplay}</div>
          <div>
            ✉️ <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div>📍 {address}</div>
          <div>🕐 Кеңседе қабылдау: дс–сб, 8:00–19:00. WhatsApp — кез келген уақытта.</div>
        </div>

        <div style={{ marginTop: 22 }}>
          <DocsGallery compact lang="kk" />
        </div>
      </section>

      {/* LOCATION */}
      <LocationBlock lang="kk" address={address} />

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        <div>📍 {address}</div>
        <div>
          ✉️ <a href={`mailto:${email}`} style={{ color: "inherit" }}>{email}</a>
        </div>
        <div style={{ marginTop: 8 }}>
          Сайттағы ақпарат анықтамалық сипатта және жария оферта болып табылмайды.
        </div>
        <div style={{ marginTop: 6 }}>
          <Link href="/kz/politika-konfidencialnosti" style={{ textDecoration: "underline" }}>
            Құпиялылық саясаты
          </Link>
          {" · "}
          <CookieSettingsButton lang="kk" />
        </div>
      </footer>
    </main>
  );
}
