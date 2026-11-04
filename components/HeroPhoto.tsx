// Фото адвоката в hero. Единый вид и единое положение на главной и всех
// подстраницах: размер, пропорции, скругление, рамка, тень, выравнивание по
// верхнему краю блока и поведение на мобильном совпадают. Фиксированные
// width/height и eager-загрузка исключают сдвиг макета при загрузке картинки.
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
      <img
        src="/me.jpg"
        alt={alt}
        width={160}
        height={220}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}
