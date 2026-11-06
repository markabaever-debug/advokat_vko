import type { Metadata } from "next";
import RuPage from "@/app/(ru)/ugolovnyj-advokat-ust-kamenogorsk/page";
import { pageAlternates } from "@/lib/metadata";

// Казахская версия (/kz/…). Русский контент + плашка «перевод готовится».
const SLUG = "/ugolovnyj-advokat-ust-kamenogorsk";

export const metadata: Metadata = {
  title: "Уголовный адвокат в Усть-Каменогорске – Маркабаев Ерлан Бапашевич",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzUgolovnyAdvokatPage() {
  return <RuPage />;
}
