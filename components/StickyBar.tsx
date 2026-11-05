import Link from "next/link";

type Props = {
  phoneCall: string;
  waLink: string;
  // На подстраницах показываем ещё и кнопку «← На главную»
  showHome?: boolean;
};

// Закреплённая компактная полоса сверху. Её видимость управляется не React, а
// ранним скриптом в app/layout.tsx (см. heroVisibilityScript): он навешивает
// IntersectionObserver + запасной обработчик scroll ещё ДО гидратации и
// переключает атрибут html[data-hero-visible]. Благодаря этому полоса
// появляется/скрывается за один кадр, не дожидаясь загрузки клиентского JS.
// Сам компонент — чисто презентационный, без состояния и эффектов.
export function StickyBar({ phoneCall, waLink, showHome = false }: Props) {
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
          {showHome && (
            <Link href="/" className="btn stickyBtn stickyBtnHome" aria-label="На главную">
              <span className="stickyBtnIcon" aria-hidden>←</span>
              <span className="stickyBtnLabel">На главную</span>
            </Link>
          )}

          <a href={`tel:${phoneCall}`} className="btn btnPrimary stickyBtn" aria-label="Позвонить">
            <span className="stickyBtnIcon" aria-hidden>📞</span>
            <span className="stickyBtnLabel">Позвонить</span>
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="btn btnWA stickyBtn"
            aria-label="WhatsApp"
          >
            <span className="stickyBtnIcon" aria-hidden>💬</span>
            <span className="stickyBtnLabel">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
