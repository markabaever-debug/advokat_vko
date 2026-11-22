import type { MetadataRoute } from "next";

const baseUrl = "https://www.markabaev.com";

// Поисковые и ИИ-боты, которым обход разрешён явно: поиск ChatGPT (OAI-SearchBot), переходы
// по ссылкам из ChatGPT (ChatGPT-User), обучение моделей OpenAI (GPTBot), Perplexity, Google,
// Bing (в т. ч. ответы Copilot) и Яндекс. Остальным ботам обход тоже разрешён (правило «*»).
const allowedBots = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "Googlebot",
  "Bingbot",
  "YandexBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...allowedBots.map((userAgent) => ({ userAgent, allow: "/" })),
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
