import type { Metadata } from "next";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { DocsGallery } from "@/components/DocsGallery";
import { HeroLeadButtons } from "@/components/HeroLeadButtons";
import { pageAlternates } from "@/lib/metadata";

const SLUG = "/dokumenty";

export const metadata: Metadata = {
  title: "Документы и сертификаты — адвокат Маркабаев Е.Б., Усть‑Каменогорск",
  description:
    "Лицензия на адвокатскую деятельность, страхование и сертификаты повышения квалификации адвоката Маркабаева Е.Б. (Усть‑Каменогорск, ВКО).",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, SLUG),
};

export default function DokumentyPage() {
  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const waText = encodeURIComponent("Здравствуйте! Нужна консультация адвоката");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <main className="container">
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome />

      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <LangSwitch />
        <HomeLink className="btn heroBackBtn" ariaLabel="На главную">
          ← На главную
        </HomeLink>
        <h1 className="h1">Документы и сертификаты</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          Нажмите на документ для просмотра. В окне просмотра: ← → (листание), Esc (закрыть).
        </p>

        <DocsGallery />
      </section>

      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Связаться</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          Консультация по телефону или в WhatsApp.
        </p>
        <HeroLeadButtons phoneCall={phoneCall} waLink={waLink} />
      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        <div>Информация на сайте носит справочный характер и не является публичной офертой.</div>
      </footer>
    </main>
  );
}
