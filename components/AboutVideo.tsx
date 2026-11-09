import fs from "fs";
import path from "path";

// Видео «Об адвокате». Показывается ТОЛЬКО если есть файл public/about.mp4.
// Проверка файла — на этапе сборки (серверный компонент). Нет файла — блок скрыт.
export function AboutVideo() {
  if (!fs.existsSync(path.join(process.cwd(), "public", "about.mp4"))) return null;
  return (
    <video className="aboutVideo" controls preload="none" style={{ marginTop: 16 }}>
      <source src="/about.mp4" type="video/mp4" />
    </video>
  );
}
