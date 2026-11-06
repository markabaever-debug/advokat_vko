import type { Metadata } from "next";
import RuPage from "@/app/(ru)/spory-s-gosorganami-ust-kamenogorsk/page";
import { pageAlternates } from "@/lib/metadata";

// Казахская версия (/kz/…). Русский контент + плашка «перевод готовится».
const SLUG = "/spory-s-gosorganami-ust-kamenogorsk";

export const metadata: Metadata = {
  title: "Адвокат по спорам с госорганами в Усть-Каменогорске — Маркабаев Е.Б.",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzSporyGosorganamiPage() {
  return <RuPage />;
}
