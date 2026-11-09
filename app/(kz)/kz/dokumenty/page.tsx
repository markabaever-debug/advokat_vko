import type { Metadata } from "next";
import { StickyBar } from "@/components/StickyBar";
import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { DocsGallery } from "@/components/DocsGallery";
import { HeroLeadButtons } from "@/components/HeroLeadButtons";
import { pageAlternates } from "@/lib/metadata";

const SLUG = "/dokumenty";

export const metadata: Metadata = {
  title: "Құжаттар мен сертификаттар — адвокат Маркабаев Е.Б., Өскемен",
  description:
    "Адвокаттық қызметпен айналысуға лицензия, сақтандыру және біліктілікті арттыру сертификаттары — адвокат Маркабаев Е.Б. (Өскемен, ШҚО).",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzDokumentyPage() {
  const phoneCall = "+77775430791";
  const waNumber = "77775430791";
  const waText = encodeURIComponent("Сәлеметсіз бе! Адвокаттың консультациясы қажет");
  const waLink = `https://wa.me/${waNumber}?text=${waText}`;

  return (
    <main className="container">
      <StickyBar phoneCall={phoneCall} waLink={waLink} showHome lang="kk" />

      <section className="panel" style={{ marginTop: 20 }} data-hero>
        <LangSwitch />
        <HomeLink className="btn heroBackBtn" ariaLabel="Басты бетке">
          ← Басты бетке
        </HomeLink>
        <h1 className="h1">Құжаттар мен сертификаттар</h1>
        <p className="muted" style={{ marginTop: 10 }}>
          Құжатты қарау үшін оны басыңыз. Қарау терезесінде: ← → (парақтау), Esc (жабу).
        </p>

        <DocsGallery lang="kk" />
      </section>

      <section className="panel" style={{ marginTop: 30 }}>
        <h2 className="h2">Байланысу</h2>
        <p className="muted" style={{ marginTop: 10 }}>
          Телефон немесе WhatsApp арқылы консультация.
        </p>
        <HeroLeadButtons phoneCall={phoneCall} waLink={waLink} lang="kk" />
      </section>

      <footer style={{ marginTop: 40, opacity: 0.6, fontSize: 13 }}>
        <div>Сайттағы ақпарат анықтамалық сипатта және жария оферта болып табылмайды.</div>
      </footer>
    </main>
  );
}
