import type { Metadata } from "next";
import RuPage from "@/app/(ru)/politika-konfidencialnosti/page";
import { pageAlternates } from "@/lib/metadata";

// Казахская версия (/kz/…). Русский контент + плашка «перевод готовится».
const SLUG = "/politika-konfidencialnosti";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Адвокат Маркабаев Е.Б.",
  alternates: pageAlternates(SLUG, `/kz${SLUG}`, `/kz${SLUG}`),
};

export default function KzPrivacyPolicyPage() {
  return <RuPage />;
}
