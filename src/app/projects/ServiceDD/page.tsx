"use client";

import Link from "next/link";
import styles from "./page.module.css";
import AnimatedBackground from "../../../components/AnimatedBackground";

function ImageSlot({ label, hint }: { label: string; hint?: string }) {
  return (
    <>
      <div className={styles.imageLabel}>{label}</div>
      <div className={styles.imageBlock}>
        <div className={styles.imagePlaceholder}>
          <span>Место для скриншота</span>
          {hint ? <kbd>{hint}</kbd> : null}
        </div>
      </div>
    </>
  );
}

export default function ServiceDDPage() {
  return (
    <>
      <AnimatedBackground />
      <main id="main-content" className={styles.page}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <nav className={styles.breadcrumbs}>
              <Link href="/" className={styles.breadcrumbMuted}>
                Главная
              </Link>
              <span
                className={styles.breadcrumbSeparator}
                aria-hidden="true"
              >
                ›
              </span>
              <span className={styles.breadcrumbCurrent}>
                ML-сервис проверки договорных документов
              </span>
            </nav>

            <header className={styles.hero}>
              <h1 className={styles.title}>
                ML-сервис проверки договорных документов
              </h1>
              <p className={styles.period}>2025 — настоящее время</p>
            </header>

            <section id="about" className={styles.section}>
              <h2 className={styles.sectionTitle}>О проекте</h2>
              <div className={styles.sectionText}>
                <p>
                  Я спроектировала MVP внутреннего сервиса, который помогает
                  юристам и финансистам проверять договорные документы на
                  соответствие корпоративным правилам. Система анализирует текст
                  договора с помощью ML-модели, находит возможные совпадения с
                  правилами и показывает результаты пользователю для проверки.
                  <span className={styles.blockLabel}>
                    Цель сервиса — ускорить проверку договоров и сократить объём
                    ручной работы.
                  </span>
                </p>
              </div>
            </section>

            <section id="problem" className={styles.section}>
              <h2 className={styles.sectionTitle}>Проблема</h2>
              <div className={styles.sectionText}>
                <p>
                  Проверка договорных документов выполнялась полностью вручную.
                  Юристы и финансисты сверяли текст договора с набором
                  обязательных правил, которые должны присутствовать в
                  документе.
                  <span className={styles.blockLabel}>
                    Основные сложности процесса:
                  </span>
                  • проверка занимала много времени
                  <br />
                  • пользователям приходилось вручную перечитывать весь документ
                  <br />
                  • одно правило могло встречаться в тексте в разных
                  формулировках
                  <br />
                  • фрагменты текста, относящиеся к одному правилу, могли
                  находиться в разных частях документа
                  <span className={styles.blockSpacer} />
                  В результате проверка договоров была медленной и требовала
                  значительных усилий специалистов.
                </p>
              </div>
            </section>

            <section id="task" className={styles.section}>
              <h2 className={styles.sectionTitle}>Задача</h2>
              <div className={styles.sectionText}>
                <p>
                  Создать MVP-инструмент, который позволит автоматизировать
                  первичную проверку договорных документов.
                  <span className={styles.blockLabel}>Сервис должен:</span>
                  • анализировать текст договора
                  <br />
                  • сопоставлять текст с набором правил
                  <br />
                  • находить возможные совпадения
                  <br />
                  • показывать степень совпадения
                  <br />• позволять пользователю принимать решение по каждому
                  правилу
                </p>
              </div>
            </section>

            <section id="role" className={styles.section}>
              <h2 className={styles.sectionTitle}>Роль и вклад</h2>
              <div className={styles.sectionText}>
                <p>
                  Product Designer.
                  <span className={styles.blockLabel}>Моя работа включала:</span>
                  • проектирование пользовательских сценариев
                  <br />
                  • разработку UX-архитектуры сервиса
                  <br />
                  • создание прототипов и финальных макетов
                  <br />
                  • проектирование взаимодействия пользователя с результатами
                  ML-анализа
                  <br />
                  • работу с аналитиками, разработчиками и ML-командой
                  <span className={styles.blockSpacer} />
                  Сейчас я также провожу UX-исследование и собираю обратную связь
                  пользователей.
                </p>
              </div>
            </section>

            <section id="solution" className={styles.section}>
              <h2 className={styles.sectionTitle}>Решение</h2>

              <h3 className={styles.subsectionTitle}>
                1. Загрузка документа
              </h3>
              <div className={styles.sectionText}>
                <p>
                  Пользователь загружает договорный документ или открывает
                  ранее загруженный файл. После загрузки документ появляется в
                  списке со статусом анализа и результатами проверки.
                </p>
              </div>
              <ImageSlot
                label="Интерфейс: загрузка и список документов"
                hint="public/service-dd-upload.png"
              />

              <h3 className={styles.subsectionTitle}>
                2. Настройка параметров
              </h3>
              <div className={styles.sectionText}>
                <p>
                  Перед запуском анализа пользователь указывает параметры
                  документа. На их основе система определяет набор правил,
                  применимых к документу.
                </p>
              </div>
              <ImageSlot
                label="Модальное окно: атрибуты документа и направления проверки"
                hint="public/service-dd-params.png"
              />

              <h3 className={styles.subsectionTitle}>
                3. Автоматический анализ
              </h3>
              <div className={styles.sectionText}>
                <p>
                  ML-модель анализирует текст договора и ищет совпадения с
                  правилами. После обработки система показывает результаты
                  анализа.
                </p>
              </div>

              <h3 className={styles.subsectionTitle}>
                4. Проверка результатов анализа
              </h3>
              <div className={styles.sectionText}>
                <p>
                  После анализа пользователь проверяет результаты системы.
                  Экран разделён на две части: слева отображается текст
                  документа с подсвеченными фрагментами совпадений, справа —
                  список правил. Для каждого правила показывается его название,
                  количество найденных фрагментов, процент совпадения и статус
                  проверки.
                </p>
              </div>
              <ImageSlot
                label="Документ и список правил"
                hint="public/service-dd-results.png"
              />

              <h3 className={styles.subsectionTitle}>
                5. Проверка конкретного правила
              </h3>
              <div className={styles.sectionText}>
                <p>
                  <span className={styles.blockLabel}>UX-челлендж</span>
                  Основной сложностью проекта стало сопоставление правил с
                  текстом договора. Одно правило может соответствовать нескольким
                  фрагментам текста, которые находятся в разных частях документа
                  и могут быть сформулированы по-разному. Пользователю важно
                  быстро понять, какие фрагменты относятся к правилу и достаточно
                  ли их для того, чтобы считать правило выполненным. Мне нужно
                  было спроектировать интерфейс, который позволит одновременно
                  работать с длинным юридическим текстом, большим списком правил
                  и результатами ML-анализа.
                </p>
              </div>
              <ImageSlot
                label="Детальный вид правила и фрагменты в документе"
                hint="public/service-dd-rule-detail.png"
              />
            </section>

            <section id="ux-solution" className={styles.section}>
              <h2 className={styles.sectionTitle}>UX-решение</h2>
              <div className={styles.sectionText}>
                <p>
                  Чтобы упростить работу пользователей с результатами анализа, я
                  реализовала несколько решений:
                  <span className={styles.blockLabel}>
                    1. Синхронная навигация
                  </span>
                  — пользователь может быстро переходить от правила к
                  соответствующим фрагментам текста.
                  <span className={styles.blockLabel}>
                    2. Подсветка совпадений
                  </span>
                  — фрагменты текста, соответствующие правилам, подсвечиваются в
                  документе.
                  <span className={styles.blockLabel}>
                    3. Отображение степени совпадения
                  </span>
                  — для каждого фрагмента показывается процент совпадения и тип
                  найденного соответствия.
                  <span className={styles.blockLabel}>
                    4. Корректировка результатов модели
                  </span>
                  — если система определила правило неправильно, пользователь
                  может исключить его из проверки.
                </p>
              </div>
            </section>

            <section id="result" className={styles.section}>
              <h2 className={styles.sectionTitle}>Результат</h2>
              <div className={styles.sectionText}>
                <p>
                  <span className={styles.blockLabel}>
                    После внедрения MVP сервиса:
                  </span>
                  • пользователи стали быстрее проверять договорные документы
                  <br />
                  • сократился объём ручной работы
                  <br />
                  • процесс проверки стал более структурированным
                  <br />
                  • пользователям стало проще отслеживать невыполненные правила
                  <span className={styles.blockSpacer} />
                  Сейчас команда собирает обратную связь пользователей и
                  улучшает точность модели.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
