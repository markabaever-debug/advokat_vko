import type { NextConfig } from "next";

// Кандидат CSP — пока ТОЛЬКО в режиме Report-Only (ничего не блокирует, только пишет
// нарушения в консоль). Учтены: GTM, Google Analytics (GA4), Google Ads/conversion,
// Vercel Web Analytics (same-origin /_vercel/*), inline-стили (style={{…}}) и JSON-LD.
// Google Fonts не используются (системные шрифты), поэтому fonts.* не добавлены.
const cspReportOnly = [
  "default-src 'self'",
  // 'unsafe-inline' нужен для inline-бутстрапа Next и JSON-LD; GTM/GA — по их доменам.
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://ssl.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.google.com https://*.google.com https://www.google.kz https://*.g.doubleclick.net https://*.gstatic.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.g.doubleclick.net https://www.google.com https://pagead2.googlesyndication.com https://*.doubleclick.net https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-src 'self' https://www.googletagmanager.com https://*.doubleclick.net",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  // Куда браузер шлёт отчёты о нарушениях (route /api/csp-report).
  "report-uri /api/csp-report",
  "report-to csp-endpoint",
].join("; ");

// Заголовки безопасности для всех маршрутов.
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
  // Группа приёмника отчётов для директивы report-to (Reporting API).
  { key: "Reporting-Endpoints", value: 'csp-endpoint="/api/csp-report"' },
  // CSP — пока только отчёт о нарушениях (не блокирует).
  { key: "Content-Security-Policy-Report-Only", value: cspReportOnly },
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
