import type { Lang } from "@/lib/i18n";
import { reviews, maps } from "@/lib/business";

// Склонение для русского: 21 оценка, 22 оценки, 25 оценок.
function ruPlural(n: number, one: string, few: string, many: string) {
  const m10 = n % 10;
  const m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}

// Бейдж в hero: «★ 5,0 · 21 оценка в 2ГИС» со ссылкой на отзывы.
// Рейтинг и число оценок — из lib/business.ts (тот же источник, что и у ReviewsBlock).
export function HeroRating({ lang = "ru" }: { lang?: Lang }) {
  const kk = lang === "kk";
  const label = kk
    ? `★ ${reviews.rating} · 2ГИС-те ${reviews.count} баға`
    : `★ ${reviews.rating} · ${reviews.count} ${ruPlural(reviews.count, "оценка", "оценки", "оценок")} в 2ГИС`;

  return (
    <a className="heroRating" href={maps.gis2Card} target="_blank" rel="noreferrer nofollow">
      {label}
    </a>
  );
}
