import type { NextConfig } from "next";

// Заголовки безопасности для всех маршрутов.
// CSP (Content-Security-Policy) пока намеренно не добавляем — он требует отдельной
// проверки, чтобы не сломать GTM / Google Analytics / Vercel Analytics.
const securityHeaders = [
  // Принудительный HTTPS на 2 года (сайт и так доступен только по https).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  // Запрет «угадывания» MIME-типа содержимого браузером.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Не передавать полный URL-реферер на сторонние сайты.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Запрет встраивания сайта в чужие фреймы (защита от кликджекинга).
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Отключение неиспользуемых браузерных API.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
