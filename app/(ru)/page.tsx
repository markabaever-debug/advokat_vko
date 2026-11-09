import Link from "next/link";
import type { Metadata } from "next";
import { HeroPhoto } from "@/components/HeroPhoto";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HeroLeadButtons } from "@/components/HeroLeadButtons";
import { DocsGallery } from "@/components/DocsGallery";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { ReviewsBlock } from "@/components/ReviewsBlock";
import { LocationBlock } from "@/components/LocationBlock";
import { WhatHappened } from "@/components/WhatHappened";
import { AfterContact } from "@/components/AfterContact";
import { AboutVideo } from "@/components/AboutVideo";
import { Fillme } from "@/components/Fillme";
import { pageAlternates } from "@/lib/metadata";

export const metadata: Metadata = {
  alternates: pageAlternates("/", "/kz", "/"),
};

export default function Home() {
  const fullName = "Маркабаев Ерлан Бапашевич";
  const region = "ВКО";

  const phoneDisplay = "+7 777 543 07 91";
  const phoneCall = "+77775430791";
  const waNumber = "77775430791";

  const email = "advokatvko.rk@gmail.com";
  const address = "070010, г. Усть-Каменогорск, ул. Бориса Александрова, д. 3, офис 101";

  const waText = encodeURIComponent("Здравствуйте! Нужна консультация адвоката");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <main className="container">
      <StickyBar phoneCall={phoneCall} waLink={waLink} />

      {/* HERO */}
      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <div className="heroRow">
          <div className="heroText">
            <LangSwitch />
            <h1 className="h1">Адвокат по уголовным делам в Усть-Каменогорске</h1>

            <p className="sub">
              Более 10 лет юридической практики, адвокат с 2019 года. Защита на следствии
              и в суде всех инстанций, включая Верховный суд РК. Также гражданские и
              административные дела.
            </p>

            <div className="kpis">
              <div className="kpi">✅ Конфиденциально</div>
              <div className="kpi">✅ Срочные дела</div>
              <div className="kpi">✅ Суд / переговоры</div>
            </div>

            <HeroLeadButtons phoneCall={phoneCall} waLink={waLink} />
          </div>

          <HeroPhoto alt="Адвокат Маркабаев Е.Б." />
        </div>
      </section>

      {/* WHAT HAPPENED */}
      <WhatHappened />

      {/* SERVICES */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Основные направления</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          Юридическая помощь в Усть-Каменогорске ({region})
        </p>

        <div className="servicesGrid" style={{ marginTop: 20 }}>

          <Link href="/ugolovnyj-advokat-ust-kamenogorsk" className="serviceCard">
            <h3 className="serviceCardTitle">⚖️ Уголовные дела</h3>
            <p className="serviceCardText">
              Защита и представительство по уголовным делам, участие на стадии следствия и суда.
            </p>
          </Link>

          <Link href="/grazhdanskie-dela-ust-kamenogorsk" className="serviceCard">
            <h3 className="serviceCardTitle">📄 Гражданские дела</h3>
            <p className="serviceCardText">
              Взыскание долгов по расписке, семейные и наследственные дела, споры о собственности.
            </p>
          </Link>

          <Link href="/administrativnye-dela-ust-kamenogorsk" className="serviceCard">
            <h3 className="serviceCardTitle">🚗 Административные дела</h3>
            <p className="serviceCardText">
              ДТП, нарушения ПДД, обжалование штрафов, защита при лишении водительских прав.
            </p>
          </Link>

          <Link href="/spory-s-gosorganami-ust-kamenogorsk" className="serviceCard">
            <h3 className="serviceCardTitle">🏛 Дела по АППК</h3>
            <p className="serviceCardText">
              Споры с государственными органами, оспаривание решений и действий должностных лиц.
            </p>
          </Link>

        </div>
      </section>

      {/* AFTER CONTACT */}
      <AfterContact />

      {/* REVIEWS */}
      <ReviewsBlock />

      {/* ABOUT */}
      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Об адвокате</h2>

        <p className="muted" style={{ marginTop: 10 }}>
          {fullName}. Консультации и ведение дел: уголовные, гражданские, семейные споры,
          подготовка процессуальных документов, представительство в суде.
        </p>

        <p style={{ marginTop: 12 }}>
          <Fillme>текст «Об адвокате» от первого лица</Fillme>
        </p>

        <AboutVideo />

        <div style={{ marginTop: 20 }}>
          <strong>Контакты:</strong>
          <div>📞 {phoneDisplay}</div>
          <div>
            ✉️ <a href={`mailto:${email}`}>{email}</a>
          </div>
          <div>📍 {address}</div>
          <div>🕐 Часы работы: <Fillme>часы работы</Fillme></div>
        </div>

        <h3 style={{ marginTop: 25 }}>Документы и сертификаты</h3>
        <p className="muted" style={{ marginTop: 8 }}>
          Нажмите на документ для просмотра. В окне просмотра: ← → (листание), Esc (закрыть).
        </p>

        <DocsGallery />
      </section>

      {/* LOCATION */}
      <LocationBlock address={address} />

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
