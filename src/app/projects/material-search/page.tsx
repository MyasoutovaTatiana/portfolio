"use client";

import Link from "next/link";
import styles from "./page.module.css";
import AnimatedBackground from "../../../components/AnimatedBackground";
import StatsGrid from "../../../components/StatsGrid";
import ImageLightbox from "../../../components/ImageLightbox";
import YearReviewCarousel from "../../../components/YearReviewCarousel";

export default function MaterialSearchPage() {
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
                Поиск по материалам
              </span>
            </nav>

            <header className={styles.hero}>
              <h1 className={styles.title}>Поиск по материалам</h1>
              <p className={styles.period}>2022 – 2025</p>
            </header>

            <section id="about" className={styles.section}>
              <h2 className={styles.sectionTitle}>О продукте</h2>
              <div className={styles.sectionText}>
                <p>
                  Внутренний сервис для работы с нормативно-справочной
                  информацией предприятия.
                  <span className={styles.blockLabel}>Сервис помогает сотрудникам:</span>
                  • находить материалы в справочнике
                  <br />
                  • проверять наличие материалов на заводах
                  <br />
                  • подбирать аналоги
                  <br />
                  • работать с закупками и заявками
                  <br />
                  <span className={styles.blockLabel}>
                    Основные пользователи системы:
                  </span>
                  • специалисты по МТО
                  <br />
                  • специалисты по закупкам
                  <br />
                  • консультанты по мастер-данным
                </p>
              </div>
            </section>

            <div className={styles.statsWrapper}>
              <StatsGrid
                items={[
                  { value: "+31%", label: "рост пользователей с 2023 года" },
                  {
                    value: "+116%",
                    label: "рост поисковых запросов в системе",
                  },
                  {
                    value: "в 12 раз",
                    label: "рост использования табличного поиска",
                  },
                ]}
              />
            </div>

            <section id="problem" className={styles.section}>
              <h2 className={styles.sectionTitle}>Проблема</h2>
              <div className={styles.sectionText}>
                <p>
                  До появления сервиса сотрудники работали со справочником
                  материалов через 1С.
                  <span className={styles.blockLabel}>
                    Поиск в системе был неудобным:
                  </span>
                  • справочник содержал большое количество материалов
                  <br />
                  • поиск работал медленно и часто зависал
                  <br />
                  • пользователям приходилось тратить много времени на поиск
                  нужных позиций
                  <br />
                  • было сложно проверять наличие материалов на разных
                  предприятиях
                  <span className={styles.blockSpacer} />
                  В результате работа со справочником занимала значительную
                  часть рабочего времени.
                </p>
              </div>
            </section>

            <section id="goal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Задача</h2>
              <div className={styles.sectionText}>
                <p>
                  Создать удобный инструмент для работы с НСИ, который позволит:
                  • быстро находить материалы
                  <br />
                  • проверять наличие на предприятиях
                  <br />
                  • подбирать аналоги
                  <br />
                  • сократить время работы со справочником
                </p>
              </div>
            </section>

            <section id="role" className={styles.section}>
              <h2 className={styles.sectionTitle}>Роль и вклад</h2>
              <div className={styles.sectionText}>
                <p>
                  Product Designer.
                  <br />
                  К моменту моего подключения уже существовал MVP интерфейс,
                  который требовал переработки.
                  <span className={styles.blockLabel}>Моя работа включала:</span>
                  • редизайн интерфейса продукта
                  <br />
                  • интеграцию дизайн-системы
                  <br />
                  • проектирование новых функций
                  <br />
                  • создание макетов и интерактивных прототипов
                  <br />
                  • проведение UX-исследований
                  <br />
                  • работу с аналитиками и разработчиками
                  <span className={styles.blockSpacer} />
                  За время работы над продуктом я участвовала как в крупных
                  задачах, так и в небольших улучшениях интерфейса.
                </p>
              </div>
            </section>

            <section id="ux-redesign" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                UX-кейс 1 – Редизайн системы и подключение дизайн-системы
              </h2>
              <div className={styles.sectionText}>
                <p>
                  К моменту моего подключения интерфейс MVP уже существовал,
                  однако система выглядела несогласовано и была перегружена.
                  <span className={styles.blockLabel}>
                    Основные проблемы интерфейса:
                  </span>
                  • разные элементы интерфейса использовались непоследовательно
                  <br />
                  • таблицы содержали большое количество столбцов
                  <br />
                  • пользователям было сложно ориентироваться в результатах
                  поиска
                  <br />
                  <span className={styles.blockLabel}>
                    Я провела редизайн интерфейса:
                  </span>
                  • интегрировала дизайн-систему
                  <br />
                  • переработала структуру таблиц
                  <br />
                  • определила ключевые столбцы
                  <br />
                  • изменила расположение фильтров
                  <br />
                  • упростила визуальную структуру интерфейса
                  <span className={styles.blockSpacer} />
                  В результате интерфейс стал более понятным и единообразным.
                </p>
              </div>

              <div className={styles.imageLabel}>до</div>
              <div className={styles.imageBlock}>
                <ImageLightbox
                  src="/SearchMaterial-Main-DO.png"
                  alt="старый интерфейс поиска по материалам до редизайна"
                />
              </div>

              <div className={styles.imageLabel}>после</div>
              <div className={styles.imageBlock}>
                <ImageLightbox
                  src="/SearchMaterial-Main.png"
                  alt="обновленный интерфейс поиска по материалам после редизайна"
                />
              </div>
            </section>

            <section id="ux-table-search" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                UX-кейс 2 – Табличный поиск материалов{" "}
              </h2>
              <div className={styles.sectionText}>
                <p>
                  В работе специалистов часто возникает необходимость искать
                  сразу большое количество материалов. Например, когда
                  пользователь получает список позиций в Excel.
                  <br />
                  Для этого в системе появился табличный поиск. Пользователь
                  загружает файл со списком материалов, а система автоматически
                  выполняет поиск по каждой позиции.
                  <span className={styles.blockLabel}>
                    Я переработала интерфейс этой функции:
                  </span>
                  • упростила загрузку файлов
                  <br />
                  • улучшила отображение результатов
                  <br />
                  • сделала работу с найденными материалами более удобной
                </p>
              </div>

              <div className={styles.imageLabel}>до</div>
              <div className={styles.imageBlock}>
                <ImageLightbox
                  src="/SearchMaterial-Main-DO-TS.png"
                  alt="старый интерфейс табличного поиска материалов"
                />
              </div>

              <div className={styles.imageLabel}>после</div>
              <div className={styles.imageBlock}>
                <ImageLightbox
                  src="/SearchMaterial-Main-TS.png"
                  alt="обновленный интерфейс табличного поиска материалов"
                />
              </div>
            </section>

            <section id="ux-analogs" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                UX-кейс 3 – Поиск аналогов и сравнение материалов{" "}
              </h2>
              <div className={styles.sectionText}>
                <p>
                  При работе со справочником пользователям важно понимать, можно
                  ли заменить один материал другим.
                  <span className={styles.blockLabel}>
                    Я участвовала в проектировании:
                  </span>
                  • страницы аналогов
                  <br />
                  • страницы сравнения материалов
                  <span className={styles.blockSpacer} />
                  Эти функции помогают специалистам быстрее принимать решения о
                  закупке или перераспределении материалов между подразделениями.
                </p>
              </div>

              <div className={styles.imageBlock}>
                <ImageLightbox
                  src="/SearchMaterial-Main-analogy.png"
                  alt="страница аналогов и сравнения материалов"
                />
              </div>
            </section>

            <section id="ux-new-year-stats" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                UX-кейс 4 – Новогодняя статистика{" "}
              </h2>
              <div className={styles.sectionText}>
                <p>
                  В конце года в сервисе появляется интерактивный экран с
                  персональными итогами работы пользователя.
                  <br />
                  <br />
                  Формат напоминает «year in review»: пользователь листает
                  карточки со своей статистикой за год. На них показывается,
                  сколько поисковых запросов он выполнил, сколько страниц
                  результатов просмотрел, как часто копировал код и
                  наименование материалов, а также какие функции системы
                  использовал чаще всего.
                  <br />
                  <br />
                  Помимо числовых метрик в карточках появляются игровые элементы
                  — достижения, «любимый класс» материалов и шуточные
                  характеристики активности (например, «ваше животное — сова»).
                  <br />
                  <br />
                  В финале пользователь может перейти к ежегодному опросу и
                  оставить обратную связь о сервисе.
                  <br />
                  <br />
                  Такой формат помогает показать пользователям их вклад в работу
                  системы и добавляет немного эмоций в повседневный рабочий
                  инструмент.
                  <br />
                  <br />
                  <span className={styles.noteText}>
                    Экран ежегодно открывают более 300 пользователей.
                  </span>
                </p>
              </div>

              <div className={styles.imageBlock}>
                <YearReviewCarousel />
              </div>
            </section>

            <section id="result" className={styles.section}>
              <h2 className={styles.sectionTitle}>Результат </h2>
              <div className={styles.sectionText}>
                <p>
                  <span className={styles.blockLabel}>Рост пользователей:</span>
                  • 4094 пользователей в 2023
                  <br />
                  • 4897 пользователей в 2024
                  <br />
                  • 5385 пользователей в 2025
                  <span className={styles.blockLabel}>
                    Рост поисковой активности:
                  </span>
                  • 1471 поисковый запрос в день в 2023
                  <br />
                  • 2765 в 2024
                  <br />
                  • 3175 в 2025
                  <span className={styles.blockLabel}>
                    Рост использования табличного поиска:
                  </span>
                  • 2 запроса в день в 2023
                  <br />
                  • 8 в 2024
                  <br />
                  • 19 в 2025
                  <br />
                  • 25,5 в феврале 2026
                </p>
              </div>
            </section>
          </div>

          {/* <aside className={styles.sidebar}>...</aside> */}
        </div>
      </main>
    </>
  );
}

// Список секций можно использовать для построения оглавления в сайдбаре.
// Сейчас сайдбар отключен, поэтому массив оставлен для будущего развития страницы.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sections = [
  { id: "about", label: "О продукте" },
  { id: "problem", label: "Проблема" },
  { id: "goal", label: "Цель" },
  { id: "role", label: "Моя роль" },
  { id: "ux-redesign", label: "Редизайн и дизайн-система" },
  { id: "ux-table-search", label: "Табличный поиск" },
  { id: "ux-analogs", label: "Поиск аналогов" },
  { id: "ux-new-year-stats", label: "Новогодняя статистика" },
  { id: "result", label: "Результат" },
];
