import fs from "fs";
import path from "path";
import type { Lang } from "@/lib/i18n";

// Фото входа в офис. Показывается ТОЛЬКО если файл public/vhod.jpg существует.
// Проверка файла — на этапе сборки (серверный компонент, статическая генерация).
// Если фото нет — компонент ничего не выводит.
// Форматы по образцу оптимизации фото на сайте: AVIF → WebP → JPG, ленивая загрузка.
export function EntrancePhoto({ lang = "ru" }: { lang?: Lang }) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", "vhod.jpg"));
  if (!exists) return null;

  const alt = lang === "kk" ? "Кеңсеге кіреберіс" : "Вход в офис";
  const caption = lang === "kk" ? "Кеңсеге кіреберіс" : "Вход в офис";

  return (
    <figure className="entrancePhoto">
      <picture>
        <source srcSet="/vhod.avif" type="image/avif" />
        <source srcSet="/vhod.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/vhod.jpg"
          alt={alt}
          width={900}
          height={676}
          loading="lazy"
          decoding="async"
        />
      </picture>
      <figcaption className="entrancePhotoCaption">{caption}</figcaption>
    </figure>
  );
}
