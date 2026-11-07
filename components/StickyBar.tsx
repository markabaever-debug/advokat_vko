import { LangSwitch } from "@/components/LangSwitch";
import { HomeLink } from "@/components/HomeLink";
import { ui, type Lang } from "@/lib/i18n";

type Props = {
  phoneCall: string;
  waLink: string;
  // На подстраницах показываем ещё и кнопку «← На главную»
  showHome?: boolean;
  lang?: Lang;
};

// Закреплённая компактная полоса сверху. Её видимость управляется не React, а
// ранним скриптом в components/SiteFooterScripts.tsx (heroVisibilityScript): он навешивает
// IntersectionObserver + запасной обработчик scroll ещё ДО гидратации и
// переключает атрибут html[data-hero-visible]. Благодаря этому полоса
// появляется/скрывается за один кадр, не дожидаясь загрузки клиентского JS.
// Сам компонент — чисто презентационный, без состояния и эффектов.
export function StickyBar({ phoneCall, waLink, showHome = false, lang = "ru" }: Props) {
  const t = ui[lang];
  return (
    <div className="stickyBar">
      <div className="stickyBarInner">
        <div className="stickyBrand">
          <picture>
            <source type="image/avif" srcSet="/me-avatar.avif" />
            <source type="image/webp" srcSet="/me-avatar.webp" />
            <img src="/me-320.jpg" alt="" className="stickyAvatar" width={38} height={38} loading="lazy" decoding="async" />
          </picture>
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
