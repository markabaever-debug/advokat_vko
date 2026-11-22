import Link from "next/link";
import { LangSwitch } from "@/components/LangSwitch";
import { FAQ_PATH } from "@/lib/faqPaths";
import { HomeLink } from "@/components/HomeLink";
import { ui, type Lang } from "@/lib/i18n";

type Props = {
  phoneCall: string;
  waLink: string;
  // На подстраницах показываем ещё и кнопку «← На главную»
  showHome?: boolean;
  lang?: Lang;
};

// Закреплённая компактная полоса сверху — видна всегда, сразу при открытии страницы
// (место под неё отведено отступом body в globals.css). Кнопки «Позвонить»/WhatsApp
// только здесь: в первом блоке с фото их нет. Чисто презентационный компонент.
export function StickyBar({ phoneCall, waLink, showHome = false, lang = "ru" }: Props) {
  const t = ui[lang];
  return (
    <div className="stickyBar">
      <div className="stickyBarInner">
        <div className="stickyBrand">
          <span className="stickyName">
            <span className="stickyNameFull">Маркабаев Е.Б., адвокат</span>
            <span className="stickyNameShort">Маркабаев Е.Б.</span>
          </span>
        </div>

        <div className="stickyActions">
          <LangSwitch />

          {showHome && (
            <HomeLink className="btn stickyBtn stickyBtnHome" ariaLabel={t.home}>
              <span className="stickyBtnIcon" aria-hidden>←</span>
              <span className="stickyBtnLabel">{t.home}</span>
            </HomeLink>
          )}

          <Link href={FAQ_PATH[lang]} className="btn stickyBtn" aria-label={t.faq}>
            <span className="stickyBtnIcon" aria-hidden>❓</span>
            <span className="stickyBtnLabel">{t.faqShort}</span>
          </Link>

          <a href={`tel:${phoneCall}`} className="btn btnPrimary stickyBtn" aria-label={t.call}>
            <span className="stickyBtnIcon" aria-hidden>📞</span>
            <span className="stickyBtnLabel">{t.call}</span>
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="btn btnWA stickyBtn"
            aria-label={t.whatsapp}
          >
            <span className="stickyBtnIcon" aria-hidden>💬</span>
            <span className="stickyBtnLabel">{t.whatsapp}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
