import type { Lang } from "@/lib/i18n";
import { reviews, maps } from "@/lib/business";

// Блок «Отзывы» на главной. Рейтинг и число оценок — из lib/business.ts (ручное
// обновление). Тексты самих отзывов НЕ копируются — только ссылка в 2ГИС.
export function ReviewsBlock({ lang = "ru" }: { lang?: Lang }) {
  const kk = lang === "kk";
  const t = kk
    ? {
        title: "Пікірлер",
        subtitle: "Клиенттердің 2ГИС-тегі бағалары.",
        countLabel: "2ГИС-тегі баға саны",
        button: "2ГИС-тегі барлық пікірлер",
        addReview: "Пікір қалдыру",
      }
    : {
        title: "Отзывы",
        subtitle: "Оценки клиентов в 2ГИС.",
        countLabel: "Оценок в 2ГИС",
        button: "Все отзывы в 2ГИС",
        addReview: "Оставить отзыв",
      };

  return (
    <section className="panel" style={{ marginTop: 30 }}>
      <h2 className="h2">{t.title}</h2>

      <div className="reviewsRating">
        <span className="reviewsStars" aria-hidden="true">★★★★★</span>
        <span className="reviewsScore">{reviews.rating}</span>
      </div>

      {reviews.count > 0 && (
        <p className="muted reviewsCount">
          {t.countLabel}: {reviews.count}
        </p>
      )}

      <p className="muted" style={{ marginTop: 8 }}>{t.subtitle}</p>

      <div className="reviewsButtons">
        <a
          className="btn btnPrimary"
          href={maps.gis2Card}
          target="_blank"
          rel="noreferrer nofollow"
        >
          {t.button}
        </a>
        <a
          className="btn"
          href={maps.gis2AddReview}
          target="_blank"
          rel="noreferrer nofollow"
        >
          {t.addReview}
        </a>
      </div>
    </section>
  );
}
