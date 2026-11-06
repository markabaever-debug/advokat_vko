import type { Metadata } from "next";
import RuPage from "@/app/(ru)/administrativnye-dela-ust-kamenogorsk/page";
import { pageAlternates } from "@/lib/metadata";

// Казахская версия (/kz/…). Русский контент + плашка «перевод готовится».
const SLUG = "/administrativnye-dela-ust-kamenogorsk";

export const metadata: Metadata = {
  title: "Адвокат по административным делам в Усть-Каменогорске — Маркабаев Е.Б.",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzAdministrativnyeDelaPage() {
  return <RuPage />;
}
