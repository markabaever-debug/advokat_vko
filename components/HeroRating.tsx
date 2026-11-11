import type { Lang } from "@/lib/i18n";
import { reviews, maps } from "@/lib/business";

// Бейдж в hero: «★ 5,0 по данным 2ГИС (ноябрь 2026 г.)» со ссылкой на отзывы.
// Рейтинг — из lib/business.ts (тот же источник, что и у ReviewsBlock).
export function HeroRating({ lang = "ru" }: { lang?: Lang }) {
  const kk = lang === "kk";
  const label = kk
    ? `★ ${reviews.rating} 2ГИС деректері бойынша (2026 ж. қараша)`
    : `★ ${reviews.rating} по данным 2ГИС (ноябрь 2026 г.)`;

  return (
    <a className="heroRating" href={maps.gis2Card} target="_blank" rel="noreferrer nofollow">
      {label}
    </a>
  );
}
