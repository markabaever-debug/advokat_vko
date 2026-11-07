import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { CookieNotice } from "@/components/CookieNotice";
import { type Lang } from "@/lib/i18n";

// Выполняется до гидратации (инлайн в конце <body>, hero уже в DOM).
// Переключает html[data-hero-visible] = виден ли hero; полоса управляется этим
// атрибутом через CSS, поэтому не зависит от загрузки клиентского бандла.
const heroVisibilityScript = `
(function () {
  var root = document.documentElement;
  var hero = document.querySelector('[data-hero]');
  if (!hero) return;
  function apply(v) { root.setAttribute('data-hero-visible', v ? 'true' : 'false'); }
  try {
    var io = new IntersectionObserver(function (e) { apply(e[0].isIntersecting); }, { threshold: 0 });
    io.observe(hero);
  } catch (e) {}
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      apply(hero.getBoundingClientRect().bottom > 0);
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  apply(hero.getBoundingClientRect().bottom > 0);
})();
`;

// Общий «низ» <body> для обеих языковых версий: ранний hero-скрипт, плавающие кнопки,
// баннер cookie и плашка «перевод готовится» (видна только на /kz).
export function SiteFooterScripts({ lang = "ru" }: { lang?: Lang }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: heroVisibilityScript }} />
      <FloatingContactButtons lang={lang} />
      <CookieNotice lang={lang} />
    </>
  );
}
