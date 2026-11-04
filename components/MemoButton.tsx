"use client";

import { useState } from "react";

// Плавающая кнопка «Памятка при задержании» и модальное окно с её содержимым.
export function MemoButton({
  fullName,
  phoneCall,
  waLink,
}: {
  fullName: string;
  phoneCall: string;
  waLink: string;
}) {
  const [memoOpen, setMemoOpen] = useState(false);

  return (
    <>
      {/* Плавающая кнопка — Памятка при задержании */}
      <div className="memoFloatingWrap">
        <button
          type="button"
          className="memoFloatingBtn"
          onClick={() => setMemoOpen(true)}
          aria-label="Открыть памятку при задержании и допросе"
        >
          🚨 ПАМЯТКА ПРИ ЗАДЕРЖАНИИ И ДОПРОСЕ — ПРОЧИТАТЬ НЕМЕДЛЕННО
        </button>
      </div>

      {/* Модальное окно с памяткой */}
      {memoOpen && (
        <div
          className="modalOverlay"
          onClick={() => setMemoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="memo-title"
        >
          <div
            className="modalPanel memoModalPanel"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            <div className="modalHeader">
              <h2 id="memo-title" className="memoModalTitle">
                🚨 Памятка при задержании и допросе
              </h2>
              <button
                type="button"
                className="modalBtn"
                onClick={() => setMemoOpen(false)}
                aria-label="Закрыть"
              >
                ✕ Закрыть
              </button>
            </div>
            <div className="memoModalBody">
              <section className="memoBlock">
                <h3>⚖️ ВЫ ИМЕЕТЕ ПРАВО МОЛЧАТЬ</h3>
                <p>
                  Согласно <strong>пункту 2 статьи 19</strong> Конституции Республики Казахстан никто не обязан давать показания против самого себя, супруга (супруги) и близких родственников, круг которых определяется законом.
                </p>
                <p>Если вы задержаны или признаны подозреваемым, вы вправе (<strong>часть девятая статьи 64 УПК РК</strong>):</p>
                <ul>
                  <li>отказаться от дачи показаний;</li>
                  <li>давать показания только в присутствии защитника;</li>
                  <li>до допроса встретиться с защитником наедине и конфиденциально;</li>
                  <li>знакомиться с протоколами и подавать на них замечания.</li>
                </ul>
              </section>

              <section className="memoBlock">
                <h3>🛡 ВЫ ИМЕЕТЕ ПРАВО НА АДВОКАТА</h3>
                <p>
                  Согласно <strong>пункту 4 статьи 18</strong> Конституции Республики Казахстан задержанный, подозреваемый, обвиняемый имеет право пользоваться помощью адвоката (защитника) с момента задержания, признания в качестве подозреваемого или предъявления обвинения.
                </p>
              </section>

              <section className="memoBlock memoBlockHighlight">
                <h3>❗ ГЛАВНОЕ ПРАВИЛО</h3>
                <p className="memoLead">НИЧЕГО НЕ ГОВОРИТЬ БЕЗ АДВОКАТА</p>
                <p>Никогда не:</p>
                <ul className="memoListDanger">
                  <li><span className="memoDangerIcon">🛑</span> не давайте объяснений «просто поговорить» без адвоката;</li>
                  <li><span className="memoDangerIcon">🛑</span> не подписывайте протокол, не прочитав его полностью; всё, с чем не согласны, впишите в протокол как замечание;</li>
                  <li><span className="memoDangerIcon">🛑</span> не пишите объяснительные без адвоката;</li>
                  <li><span className="memoDangerIcon">🛑</span> не верьте словам «это формальность».</li>
                </ul>
                <p className="memoNote">Всё сказанное вами может быть занесено в протокол и использовано как доказательство.</p>
              </section>

              <section className="memoBlock">
                <h3>🚨 ЧТО СКАЗАТЬ СРАЗУ</h3>
                <p>Спокойно и уверенно заявите:</p>
                <blockquote className="memoQuote">
                  «Прошу обеспечить участие защитника. На основании <strong>пункта 2 статьи 19</strong> Конституции Республики Казахстан и <strong>подпункта 6) части девятой статьи 64 УПК РК</strong> буду давать показания только в присутствии защитника».
                </blockquote>
                <p>Повторяйте это на любые вопросы. <span className="memoDangerText">Не объясняйте. Не оправдывайтесь. Не подписывайте.</span></p>
              </section>

              <section className="memoBlock">
                <h3>⚠️ ЕСЛИ ВАС ВЫЗВАЛИ КАК СВИДЕТЕЛЯ</h3>
                <p>
                  Свидетель обязан явиться по вызову и правдиво ответить на вопросы. Отказаться можно только от показаний, которые могут повлечь преследование вас самих, вашего супруга (супруги) или близких родственников (<strong>статья 78 УПК РК</strong>). Вы вправе давать показания в присутствии своего адвоката — свяжитесь с ним заранее, до допроса: неявка адвоката к назначенному времени допрос не останавливает.
                </p>
              </section>

              <section className="memoBlock">
                <h3>⛔ ПОЧЕМУ НЕЛЬЗЯ БЕЗ АДВОКАТА</h3>
                <p>
                  Объяснения и показания, данные без защитника в первые часы, нередко становятся основой обвинения.
                </p>
                <p>Без адвоката:</p>
                <ul>
                  <li>фиксируются оговорки</li>
                  <li>создаются противоречия</li>
                  <li>формируется база обвинения</li>
                  <li>получают признательные фразы</li>
                </ul>
                <p className="memoNote">Отказаться от них потом можно, но они всё равно могут быть использованы как доказательство (часть шестая статьи 64 УПК РК). Поэтому защитника нужно пригласить до первого допроса.</p>
              </section>

              <section className="memoBlock">
                <h3>📞 АДВОКАТ НУЖЕН СРОЧНО ЕСЛИ</h3>
                <ul>
                  <li>вас задержали</li>
                  <li>вызывают на допрос</li>
                  <li>проводят обыск</li>
                  <li>изъяли телефон</li>
                  <li>вызывают как свидетеля</li>
                  <li>угрожают уголовным делом</li>
                </ul>
                <p className="memoNote">Чем раньше подключается адвокат — тем сильнее защита.</p>
              </section>

              <section className="memoBlock memoBlockCta">
                <h3>⚖️ ВАШ АДВОКАТ И ЗАЩИТНИК</h3>
                <p className="memoLead">{fullName}</p>
                <ul className="memoServices">
                  <li>Уголовная защита</li>
                  <li>Срочный выезд</li>
                  <li>Конфиденциальные консультации</li>
                  <li>Полное сопровождение дела</li>
                </ul>
                <div className="memoCtaButtons">
                  <a
                    className="btn btnPrimary memoCtaLink"
                    href={`tel:${phoneCall}`}
                  >
                    📞 Позвонить: +7 777 543 07 91
                  </a>
                  <a
                    className="btn btnWA memoCtaLink"
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    💬 WhatsApp: +7 777 543 07 91
                  </a>
                </div>
                <p className="memoDisclaimer">Адвокатская тайна гарантирована законом</p>
              </section>

              <p className="memoDisclaimer" style={{ textAlign: "center", marginTop: 20 }}>
                Нормы приведены по состоянию на ноябрь 2026 г.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
