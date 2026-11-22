// Отправка всех адресов из sitemap.xml в IndexNow (api.indexnow.org → Bing, Яндекс и др.).
// Запускается GitHub Actions после каждой успешной публикации на Vercel (Production),
// см. .github/workflows/indexnow.yml; вручную: INDEXNOW_KEY=… node scripts/indexnow.mjs
// Флаг --dry-run — показать адреса без отправки.
//
// Ключ — переменная окружения INDEXNOW_KEY; файл ключа public/<ключ>.txt (тот же ключ) сайт
// отдаёт из корня: https://www.markabaev.com/<ключ>.txt — по нему IndexNow проверяет владельца.

const SITE = "https://www.markabaev.com";
const HOST = "www.markabaev.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const dryRun = process.argv.includes("--dry-run");

const key = (process.env.INDEXNOW_KEY || "").trim();
if (!/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
  console.error("INDEXNOW_KEY не задан или неверного вида (8–128 символов: a-z, A-Z, 0-9, -).");
  process.exit(1);
}
const keyLocation = `${SITE}/${key}.txt`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url) {
  const res = await fetch(url, { headers: { "cache-control": "no-cache" } });
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
  return res.text();
}

// Сразу после публикации домен может ещё секунды отдавать прежнюю версию — повторяем проверку.
async function checkKeyFile() {
  for (let i = 1; i <= 6; i++) {
    try {
      const text = (await fetchText(keyLocation)).trim();
      if (text === key) return;
      console.warn(`Файл ключа отдаёт другое содержимое (попытка ${i}).`);
    } catch (e) {
      console.warn(`Файл ключа недоступен (попытка ${i}): ${e.message}`);
    }
    await sleep(10_000);
  }
  throw new Error(`Файл ключа ${keyLocation} не совпадает с INDEXNOW_KEY — отправка отменена.`);
}

async function main() {
  await checkKeyFile();
  const xml = await fetchText(`${SITE}/sitemap.xml`);
  const urlList = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => u.startsWith(`${SITE}/`) || u === SITE);
  if (urlList.length === 0) throw new Error("В sitemap.xml нет адресов.");

  console.log(`Адресов из sitemap.xml: ${urlList.length}`);
  for (const u of urlList) console.log(`  ${u}`);
  if (dryRun) {
    console.log("--dry-run: не отправлено.");
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
  });
  const body = await res.text();
  console.log(`IndexNow: HTTP ${res.status} ${res.statusText}${body ? `\n${body}` : ""}`);
  // 200 — принято; 202 — принято, ключ ещё проверяется. Остальное — ошибка.
  if (res.status !== 200 && res.status !== 202) process.exit(1);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
