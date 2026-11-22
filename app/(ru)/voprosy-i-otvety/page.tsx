import Link from "next/link";
import type { Metadata } from "next";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { HeroLeadButtons } from "@/components/HeroLeadButtons";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { FaqBlocks, FaqPageJsonLd, FaqToc } from "@/components/FaqContent";
import { FAQ_PATH, loadFaq } from "@/lib/faq";
import { og, pageAlternates } from "@/lib/metadata";

const title = "Вопросы и ответы — адвокат Маркабаев Е.Б., Усть‑Каменогорск";
const description =
  "Ответы адвоката Маркабаева Е.Б. на вопросы по уголовным и административным делам, семейным спорам, возмещению ущерба после ДТП и представительству в суде. Нормы проверены по ИПС «Әділет».";

export const metadata: Metadata = {
  title,
  description,
  ...og(title, description, "ru", FAQ_PATH.ru),
  alternates: pageAlternates(FAQ_PATH.ru, FAQ_PATH.kk, FAQ_PATH.ru),
};

export default function VoprosyIOtvetyPage() {
  const blocks = loadFaq("ru");
  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const waText = encodeURIComponent("Здравствуйте! Нужна консультация адвоката");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, г. Усть-Каменогорск, ул. Бориса Александрова, д. 3, офис 101";

  return (
    <main className="container">
      <FaqPageJsonLd blocks={blocks} />
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome />

      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <LangSwitch />
        <HomeLink className="btn heroBackBtn" ariaLabel="На главную">
          ← На главную
        </HomeLink>
        <h1 className="h1">Вопросы и ответы</h1>
        <FaqToc blocks={blocks} lang="ru" />
      </section>

      <FaqBlocks blocks={blocks} lang="ru" />

      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Связаться</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          Консультация по телефону или в WhatsApp.
        </p>
        <HeroLeadButtons phoneCall={phoneCall} waLink={waLink} />
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
