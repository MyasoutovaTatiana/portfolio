"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectCaseImageSlot from "@/components/project-case/ProjectCaseImageSlot";
import styles from "@/components/project-case/ProjectCasePage.module.css";
import StatsGrid from "../../../components/StatsGrid";
import YearReviewCarousel from "../../../components/YearReviewCarousel";

export default function MaterialSearchPage() {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.content}>
          <nav className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbMuted}>
              Главная
            </Link>
            <span className={styles.breadcrumbSeparator} aria-hidden="true">
              ›
            </span>
            <span className={styles.breadcrumbCurrent}>Поиск по НСИ</span>
          </nav>

          <header className={styles.hero}>
            <h1 className={styles.title}>Поиск по НСИ</h1>
            <p className={styles.period}>B2E продукт · 2022 — 2025</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>О проекте</h2>
            <div className={styles.sectionText}>
              <p>
                Внутренний сервис для работы с нормативно-справочной
                информацией предприятия.
              </p>
              <p>Сервис помогает сотрудникам:</p>
              <ul>
                <li>находить материалы в справочнике</li>
                <li>проверять наличие материалов на заводах</li>
                <li>подбирать аналоги</li>
                <li>работать с закупками и заявками</li>
              </ul>
              <p>Основные пользователи системы:</p>
              <ul>
                <li>специалисты по МТО</li>
                <li>специалисты по закупкам</li>
                <li>консультанты по мастер-данным</li>
              </ul>
            </div>
            <div className={styles.imageLabel}>
              Общий вид сервиса поиска по материалам
            </div>
            <div className={styles.overviewImageWrap}>
              <Image
                src="/Search-NSI.png"
                alt="Интерфейс поиска по материалам: таблица результатов и фильтры"
                width={1024}
                height={576}
                sizes="(max-width: 1024px) calc(100vw - 108px), 889px"
                className={styles.projectImage}
                priority
              />
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

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Проблема</h2>
            <div className={styles.sectionText}>
              <p>
                До появления сервиса сотрудники работали со справочником
                материалов через 1С.
              </p>
              <p>Поиск в системе был неудобным:</p>
              <ul>
                <li>справочник содержал большое количество материалов</li>
                <li>поиск работал медленно и часто зависал</li>
                <li>
                  пользователям приходилось тратить много времени на поиск
                  нужных позиций
                </li>
                <li>
                  было сложно проверять наличие материалов на разных
                  предприятиях
                </li>
              </ul>
              <p>
                В результате работа со справочником занимала значительную часть
                рабочего времени.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Цель</h2>
            <div className={styles.sectionText}>
              <p>Создать удобный инструмент для работы с НСИ, который позволит:</p>
              <ul>
                <li>быстро находить материалы</li>
                <li>проверять наличие на предприятиях</li>
                <li>подбирать аналоги</li>
                <li>сократить время работы со справочником</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Моя роль</h2>
            <div className={styles.sectionText}>
              <p>Product Designer.</p>
              <p>
                К моменту моего подключения уже существовал MVP интерфейса,
                который требовал переработки.
              </p>
              <p>Моя работа включала:</p>
              <ul>
                <li>редизайн интерфейса продукта</li>
                <li>интеграцию дизайн-системы</li>
                <li>проектирование новых функций</li>
                <li>создание макетов и интерактивных прототипов</li>
                <li>проведение UX-исследований</li>
                <li>работу с аналитиками и разработчиками</li>
              </ul>
              <p>
                За время работы над продуктом я участвовала как в крупных
                задачах, так и в небольших улучшениях интерфейса.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Решение</h2>
            <div className={styles.sectionText}>
              <p>
                Ниже — ключевые направления работы: от редизайна до новых
                сценариев и сезонных активностей.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>
              Редизайн системы и подключение дизайн-системы
            </h3>
            <div className={styles.sectionText}>
              <p>
                К моменту моего подключения интерфейс MVP уже существовал,
                однако система выглядела несогласованно и была перегружена.
              </p>
              <p>Основные проблемы интерфейса:</p>
              <ul>
                <li>
                  разные элементы интерфейса использовались непоследовательно
                </li>
                <li>таблицы содержали большое количество столбцов</li>
                <li>
                  пользователям было сложно ориентироваться в результатах поиска
                </li>
              </ul>
              <p>Я провела редизайн интерфейса:</p>
              <ul>
                <li>интегрировала дизайн-систему</li>
                <li>переработала структуру таблиц</li>
                <li>определила ключевые столбцы</li>
                <li>изменила расположение фильтров</li>
                <li>упростила визуальную структуру интерфейса</li>
              </ul>
              <p>
                В результате интерфейс стал более понятным и единообразным.
              </p>
            </div>
            <div className={styles.imageLabel}>до</div>
            <ProjectCaseImageSlot
              label="Интерфейс до редизайна"
              hideLabel
              imageSrc="/old.jpg"
              imageAlt="Старый интерфейс поиска по материалам до редизайна"
              imageWidth={2680}
              imageHeight={1680}
            />
            <div className={styles.imageLabel}>после</div>
            <ProjectCaseImageSlot
              label="Интерфейс после редизайна"
              hideLabel
              imageSrc="/Search-NSI.png"
              imageAlt="Обновлённый интерфейс поиска по материалам после редизайна"
              imageWidth={1920}
              imageHeight={1080}
            />

            <h3 className={styles.subsectionTitle}>
              Табличный поиск материалов
            </h3>
            <div className={styles.sectionText}>
              <p>
                В работе специалистов часто возникает необходимость искать сразу
                большое количество материалов — например, когда пользователь
                получает список позиций в Excel.
              </p>
              <p>
                Для этого в системе появился табличный поиск: пользователь
                загружает файл со списком материалов, а система автоматически
                выполняет поиск по каждой позиции.
              </p>
              <p>Я переработала интерфейс этой функции:</p>
              <ul>
                <li>упростила загрузку файлов</li>
                <li>улучшила отображение результатов</li>
                <li>сделала работу с найденными материалами удобнее</li>
              </ul>
            </div>
            <div className={styles.imageLabel}>до</div>
            <ProjectCaseImageSlot
              label="Табличный поиск — до"
              hideLabel
              imageSrc="/old-tabl.jpg"
              imageAlt="Старый интерфейс табличного поиска материалов"
              imageWidth={1920}
              imageHeight={1080}
            />
            <div className={styles.imageLabel}>после</div>
            <ProjectCaseImageSlot
              label="Табличный поиск — после"
              hideLabel
              imageSrc="/new-tabl.jpg"
              imageAlt="Обновлённый интерфейс табличного поиска материалов"
              imageWidth={1920}
              imageHeight={1080}
            />

            <h3 className={styles.subsectionTitle}>
              Поиск аналогов и сравнение материалов
            </h3>
            <div className={styles.sectionText}>
              <p>
                При работе со справочником пользователям важно понимать, можно
                ли заменить один материал другим.
              </p>
              <p>Я участвовала в проектировании:</p>
              <ul>
                <li>страницы аналогов</li>
                <li>страницы сравнения материалов</li>
              </ul>
              <p>
                Эти функции помогают специалистам быстрее принимать решения о
                закупке или перераспределении материалов между подразделениями.
              </p>
            </div>
            <ProjectCaseImageSlot
              label="Страница аналогов и сравнения материалов"
              imageSrc="/analogy.jpg"
              imageAlt="Страница аналогов и сравнения материалов"
              imageWidth={1920}
              imageHeight={1080}
            />

            <h3 className={styles.subsectionTitle}>Новогодняя статистика</h3>
            <div className={styles.sectionText}>
              <p>
                В конце года в сервисе появляется интерактивный экран с
                персональными итогами работы пользователя.
              </p>
              <p>
                Формат напоминает «year in review»: пользователь листает
                карточки со своей статистикой за год — сколько поисковых
                запросов выполнил, сколько страниц результатов просмотрел, как
                часто копировал код и наименование материалов, какие функции
                использовал чаще всего.
              </p>
              <p>
                Помимо числовых метрик в карточках появляются игровые элементы —
                достижения, «любимый класс» материалов и шуточные
                характеристики активности.
              </p>
              <p>
                В финале пользователь может перейти к ежегодному опросу и
                оставить обратную связь о сервисе.
              </p>
              <p>
                Такой формат помогает показать пользователям их вклад в работу
                системы и добавляет немного эмоций в повседневный рабочий
                инструмент.
              </p>
            </div>
            <div className={styles.carouselWrap}>
              <YearReviewCarousel />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Результат</h2>
            <div className={styles.sectionText}>
              <ul>
                <li>
                  количество пользователей выросло с 4094 до 5385 (+31%)
                </li>
                <li>
                  поисковая активность увеличилась более чем в 2 раза (с 1471 до
                  3175 запросов в день)
                </li>
                <li>
                  пользователи стали чаще использовать систему в ежедневной
                  работе
                </li>
                <li>
                  запущен и развит новый сценарий — табличный поиск: его
                  использование выросло в 12 раз
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
