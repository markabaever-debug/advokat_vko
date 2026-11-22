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

const title = "Сұрақтар мен жауаптар — адвокат Маркабаев Е.Б., Өскемен";
const description =
  "Қылмыстық істер, әкімшілік істер, отбасылық даулар, ЖКО-дан кейінгі залалды өтеу, сотта өкілдік ету және мүдделерді қорғау — адвокат Маркабаев Е.Б. жауаптары. Нормалар «Әділет» АҚЖ бойынша тексерілді.";

export const metadata: Metadata = {
  title,
  description,
  ...og(title, description, "kk", FAQ_PATH.kk),
  alternates: pageAlternates(FAQ_PATH.ru, FAQ_PATH.kk, FAQ_PATH.kk),
};

export default function KzSuraqtarPage() {
  const blocks = loadFaq("kk");
  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const waText = encodeURIComponent("Сәлеметсіз бе! Адвокаттың консультациясы қажет");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;
  const email = "advokatvko.rk@gmail.com";
  const address = "070010, Өскемен қ., Борис Александров көшесі, 3-үй, 101-кеңсе";

  return (
    <main className="container">
      <FaqPageJsonLd blocks={blocks} />
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome lang="kk" />

      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <LangSwitch />
        <HomeLink className="btn heroBackBtn" ariaLabel="Басты бетке">
          ← Басты бетке
        </HomeLink>
        <h1 className="h1">Сұрақтар мен жауаптар</h1>
        <FaqToc blocks={blocks} lang="kk" />
      </section>

      <FaqBlocks blocks={blocks} lang="kk" />

      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Байланысу</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          Телефон немесе WhatsApp арқылы консультация.
        </p>
        <HeroLeadButtons phoneCall={phoneCall} waLink={waLink} lang="kk" />
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
