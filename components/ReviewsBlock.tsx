import type { Lang } from "@/lib/i18n";
import { reviews, maps } from "@/lib/business";

// Отзывы клиентов из 2ГИС. Цитаты приведены как написаны клиентами (на русском);
// подпись — имя, 2ГИС, месяц и год.
const QUOTES: { text: string; signRu: string; signKk: string }[] = [
  {
    text: "Спасибо грамотному юристу и в первую очередь человеку, который спас мою ситуацию по поводу ПДД. Всем советую!",
    signRu: "Ирина П., 2ГИС, август 2026",
    signKk: "Ирина П., 2ГИС, 2026 ж. тамыз",
  },
  {
    text: "Благодаря чётко выработанной позиции защиты и аргументированным ссылкам на законодательство суд признал отсутствие состава правонарушения. Благодарю Ерлана Бапашевича за юридическую грамотность, активность в суде и честность прогнозов.",
    signRu: "Владимир О., 2ГИС, апрель 2026",
    signKk: "Владимир О., 2ГИС, 2026 ж. сәуір",
  },
  {
    text: "Очень полезная консультация. Ответ на мой вопрос был корректный, полный, исчерпывающий. Спасибо за ваш профессионализм!",
    signRu: "Сагдат Н., 2ГИС, март 2026",
    signKk: "Сагдат Н., 2ГИС, 2026 ж. наурыз",
  },
];

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

      <div className="reviewQuotes">
        {QUOTES.map((q, i) => (
          <figure key={i} className="reviewQuote">
            <blockquote>{q.text}</blockquote>
            <figcaption>{kk ? q.signKk : q.signRu}</figcaption>
          </figure>
        ))}
      </div>

      <div className="reviewsRating">
        <span className="reviewsStars" aria-hidden="true">★★★★★</span>
        <span className="reviewsScore">{reviews.rating}</span>
      </div>

      {reviews.count > 0 && (
        <p className="muted reviewsCount">
          {t.countLabel}: {reviews.count}
        </p>
      )}

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
