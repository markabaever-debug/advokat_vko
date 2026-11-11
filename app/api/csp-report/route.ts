import type { NextRequest } from "next/server";

// Приёмник отчётов о нарушениях CSP (пока работает только Report-Only — ничего не
// блокируется). В лог пишутся ТОЛЬКО три поля: нарушенная директива, заблокированный
// ресурс и адрес страницы. Никакие данные о посетителе (IP, заголовки, cookie) не
// читаются и не логируются. Ответ — всегда 204 без тела.
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const text = await req.text();
    if (text) {
      const data = JSON.parse(text);
      // Два формата тела:
      //  - report-uri:    { "csp-report": { "violated-directive", "blocked-uri", "document-uri" } }
      //  - Reporting API: [ { "type": "csp-violation", "body": { "effectiveDirective", "blockedURL", "documentURL" } } ]
      const items = Array.isArray(data) ? data : [data];
      for (const it of items) {
        const r = it["csp-report"] || it.body || it;
        const directive =
          r["effective-directive"] || r.effectiveDirective || r["violated-directive"] || r.violatedDirective || "";
        const blocked = r["blocked-uri"] || r.blockedURL || r.blockedURI || "";
        const doc = r["document-uri"] || r.documentURL || r.documentURI || "";
        if (directive || blocked || doc) {
          console.log(`[CSP] directive=${directive} blocked-uri=${blocked} document-uri=${doc}`);
        }
      }
    }
  } catch {
    // некорректное/пустое тело — молча игнорируем
  }
  return new Response(null, { status: 204 });
}
