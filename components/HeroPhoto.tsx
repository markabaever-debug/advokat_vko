// Фото адвоката в hero — LCP-элемент на всех страницах. Отдаётся в AVIF/WebP
// нужного размера (160×220 и 2× для ретины) с JPEG-фолбэком; один небольшой
// файл кэшируется и переиспользуется на всех страницах. LCP-картинка
// предзагружается. Фиксированные width/height исключают сдвиг макета.
export function HeroPhoto({
  alt = "Адвокат Маркабаев Ерлан Бапашевич",
}: {
  alt?: string;
}) {
  return (
    <div
      className="heroPhoto"
      style={{
        width: 160,
        height: 220,
        borderRadius: 14,
        overflow: "hidden",
        border: "2px solid rgba(255,255,255,0.15)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.45)",
        flexShrink: 0,
        alignSelf: "flex-start",
      }}
    >
      {/* Предзагрузка LCP-изображения (React 19 поднимает link в <head>). */}
      <link rel="preload" as="image" href="/me-320.avif" type="image/avif" fetchPriority="high" />
      <picture>
        <source type="image/avif" srcSet="/me-160.avif 1x, /me-320.avif 2x" />
        <source type="image/webp" srcSet="/me-160.webp 1x, /me-320.webp 2x" />
        <img
          src="/me-320.jpg"
          alt={alt}
          width={160}
          height={220}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </picture>
    </div>
  );
}
