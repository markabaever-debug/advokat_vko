// Адреса раздела «Вопросы и ответы» — без зависимостей (используется и в клиентских компонентах).
// У раздела разные адреса на языках, поэтому LangSwitch берёт пару отсюда, а не по правилу /X ↔ /kz/X.
export const FAQ_PATH = {
  ru: "/voprosy-i-otvety",
  kk: "/kz/suraqtar-men-zhauaptar",
} as const;
