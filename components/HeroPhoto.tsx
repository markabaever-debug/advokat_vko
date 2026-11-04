// Фото адвоката в hero. Единый вид на главной и всех подстраницах:
// размер, пропорции, скругление, рамка, тень и поведение на мобильном совпадают.
export function HeroPhoto({
  alt = "Адвокат Маркабаев Ерлан Бапашевич",
}: {
  alt?: string;
}) {
  return (
    <div
      style={{
        width: 160,
        height: 220,
        borderRadius: 14,
        overflow: "hidden",
        border: "2px solid rgba(255,255,255,0.15)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.45)",
        flexShrink: 0,
      }}
    >
      <img
        src="/me.jpg"
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}
