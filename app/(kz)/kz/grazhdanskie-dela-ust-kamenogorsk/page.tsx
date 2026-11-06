import type { Metadata } from "next";
import RuPage from "@/app/(ru)/grazhdanskie-dela-ust-kamenogorsk/page";
import { pageAlternates } from "@/lib/metadata";

// Казахская версия (/kz/…). Русский контент + плашка «перевод готовится».
const SLUG = "/grazhdanskie-dela-ust-kamenogorsk";

export const metadata: Metadata = {
  title: "Адвокат по гражданским делам в Усть-Каменогорске — Маркабаев Е.Б.",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzGrazhdanskieDelaPage() {
  return <RuPage />;
}
