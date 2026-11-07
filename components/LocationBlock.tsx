import type { Lang } from "@/lib/i18n";
import { maps } from "@/lib/business";
import { EntrancePhoto } from "@/components/EntrancePhoto";

// Блок «Как нас найти» на главной. Статичная схема-превью карты — инлайновый SVG,
// БЕЗ сторонних скриптов и iframe (не грузит ничего извне, не ставит cookie).
// Клик по схеме и кнопки ведут на внешние карты.
export function LocationBlock({
  lang = "ru",
  address,
}: {
  lang?: Lang;
  address: string;
}) {
  const kk = lang === "kk";
  const t = kk
    ? {
        title: "Бізді қалай табуға болады",
        landmark: "1-қабат, 101-кеңсе",
        gis: "2ГИС-те маршрут",
        google: "Google Карталарда ашу",
        mapAria: "Картаны Google Карталарда ашу",
        mapChip: "Картаны ашу ↗",
      }
    : {
        title: "Как нас найти",
        landmark: "1 этаж, офис 101",
        gis: "Маршрут в 2ГИС",
        google: "Открыть в Google Картах",
        mapAria: "Открыть карту в Google Картах",
        mapChip: "Открыть карту ↗",
      };

  return (
    <section className="panel" style={{ marginTop: 30 }}>
      <h2 className="h2">{t.title}</h2>

      <div className="locationRow">
        <div className="locationInfo">
          <div className="locationAddress">📍 {address}</div>
          <div className="muted locationLandmark">{t.landmark}</div>

          <div className="locationButtons">
            <a className="btn" href={maps.gis2Route} target="_blank" rel="noreferrer nofollow">
              {t.gis}
            </a>
            <a className="btn" href={maps.google} target="_blank" rel="noreferrer nofollow">
              {t.google}
            </a>
          </div>

          <EntrancePhoto lang={lang} />
        </div>

        <a
          className="locationMap"
          href={maps.google}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label={t.mapAria}
        >
          <svg viewBox="0 0 400 260" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="260" fill="#0e1830" />
            {/* кварталы */}
            <g fill="rgba(255,255,255,0.045)">
              <rect x="18" y="18" width="130" height="86" rx="7" />
              <rect x="190" y="18" width="92" height="86" rx="7" />
              <rect x="300" y="18" width="82" height="86" rx="7" />
              <rect x="18" y="150" width="130" height="92" rx="7" />
              <rect x="190" y="150" width="92" height="92" rx="7" />
              <rect x="300" y="150" width="82" height="92" rx="7" />
            </g>
            {/* улицы */}
            <g stroke="rgba(255,255,255,0.14)" strokeWidth="14" fill="none" strokeLinecap="round">
              <line x1="0" y1="127" x2="400" y2="127" />
              <line x1="168" y1="0" x2="168" y2="260" />
            </g>
            <g stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" strokeLinecap="round">
              <line x1="290" y1="0" x2="290" y2="260" />
              <line x1="0" y1="34" x2="400" y2="34" />
            </g>
            {/* акцентная улица к точке */}
            <line
              x1="168"
              y1="127"
              x2="300"
              y2="200"
              stroke="rgba(59,130,246,0.55)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* метка-пин */}
            <g transform="translate(228,120)">
              <ellipse cx="0" cy="40" rx="13" ry="5" fill="rgba(0,0,0,0.35)" />
              <path
                d="M0 40 C -16 14 -18 2 -18 -6 A 18 18 0 1 1 18 -6 C 18 2 16 14 0 40 Z"
                fill="#3b82f6"
                stroke="#ffffff"
                strokeWidth="2.5"
              />
              <circle cx="0" cy="-6" r="6.5" fill="#ffffff" />
            </g>
          </svg>
          <span className="locationMapChip">{t.mapChip}</span>
        </a>
      </div>
    </section>
  );
}
