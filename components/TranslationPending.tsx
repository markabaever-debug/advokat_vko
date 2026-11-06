"use client";

import { usePathname } from "next/navigation";

// Плашка «перевод готовится» на казахских страницах (/kz…): текст пока русский.
// Показывается только на kz-пути; на русских страницах ничего не рендерит.
export function TranslationPending() {
  const pathname = usePathname() || "/";
  const isKz = pathname === "/kz" || pathname.startsWith("/kz/");
  if (!isKz) return null;

  return (
    <div className="translatePending" role="note">
      Қазақша нұсқасы дайындалуда — мәтін уақытша орыс тілінде.
      {" "}
      <span className="translatePendingRu">Казахская версия готовится — текст временно на русском.</span>
    </div>
  );
}
