import type { Metadata } from "next";
import RuHome from "@/app/(ru)/page";
import { pageAlternates } from "@/lib/metadata";

// Казахская версия главной (/kz). Пока отображает русский контент с плашкой
// «перевод готовится» (TranslationPending в app/(kz)/layout.tsx). lang="kk" — из layout.
export const metadata: Metadata = {
  alternates: pageAlternates("/", "/kz", "/kz"),
};

export default function KzHome() {
  return <RuHome />;
}
