import Image from "next/image";
import Link from "next/link";
import ProjectCaseImageSlot from "@/components/project-case/ProjectCaseImageSlot";
import styles from "@/components/project-case/ProjectCasePage.module.css";
import StatsGrid from "../../../components/StatsGrid";

export default function CorpSearchPage() {
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
            <span className={styles.breadcrumbCurrent}>
              Единое поисковое окно компании
            </span>
          </nav>

          <header className={styles.hero}>
            <h1 className={styles.title}>Единое поисковое окно компании</h1>
            <p className={styles.period}>B2E продукт · 2022 — 2025</p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>О проекте</h2>
            <div className={styles.sectionText}>
              <p>
                Единое поисковое окно компании «Газпром нефть» позволяет
                сотрудникам находить информацию во внутренних системах.
              </p>
              <p>Система объединяет несколько типов данных:</p>
              <p>
                документы, сотрудников, изображения, сервисы и глоссарий. Поиск
                используется ежедневно и помогает решать рабочие задачи — от
                поиска регламентов до поиска коллег.
              </p>
            </div>
            <div className={styles.imageLabel}>Общий вид корпоративного поиска</div>
            <div className={styles.overviewImageWrap}>
              <Image
                src="/Korp-Search.png"
                alt="Единое поисковое окно: строка поиска и результаты выдачи"
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
                {
                  value: "128K",
                  label: "уникальных пользователей в месяц",
                },
                {
                  value: "1.5M",
                  label: "поисковых запросов в месяц",
                },
                {
                  value: "~42K",
                  label: "входов ежедневно",
                },
              ]}
            />
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Проблема</h2>
            <div className={styles.sectionText}>
              <p>До редизайна поиск был сложным и неэффективным:</p>
              <ul>
                <li>нерелевантная выдача</li>
                <li>перегруженные и непонятные фильтры</li>
                <li>устаревший интерфейс вне дизайн-системы</li>
                <li>неочевидные приоритеты информации в выдаче</li>
              </ul>
              <p>
                Пользователи тратили больше времени на поиск и часто не
                использовали доступные инструменты.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Цель</h2>
            <div className={styles.sectionText}>
              <p>
                Сделать корпоративный поиск быстрее и понятнее: повысить
                релевантность выдачи, упростить фильтры и привести интерфейс к
                единым паттернам дизайн-системы.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Моя роль</h2>
            <div className={styles.sectionText}>
              <p>Моя работа включала:</p>
              <ul>
                <li>проектирование UX/UI решений</li>
                <li>создание макетов и прототипов</li>
                <li>участие в юзабилити-исследованиях</li>
                <li>тестирование решений</li>
                <li>
                  работу с аналитиками, разработчиками и исследователями
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Процесс</h2>

            <h3 className={styles.subsectionTitle}>Исследование</h3>
            <div className={styles.sectionText}>
              <p>
                Мы провели юзабилити-тестирование текущего решения и
                прототипов.
              </p>
              <p>Выяснилось:</p>
              <ul>
                <li>
                  пользователи игнорируют фильтры и не понимают их назначение
                </li>
                <li>
                  большой список параметров создаёт ощущение сложности
                </li>
                <li>расположение фильтров влияет на поведение</li>
                <li>
                  правый блок воспринимается как второстепенный и часто
                  игнорируется
                </li>
                <li>
                  центр выдачи воспринимается как основная зона внимания
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Решение</h2>

            <h3 className={styles.subsectionTitle}>1. Упростила фильтры</h3>
            <div className={styles.sectionText}>
              <p>Вместе с аналитиком провела ревизию фильтров:</p>
              <ul>
                <li>убрали неиспользуемые и дублирующие параметры</li>
                <li>оставили только востребованные</li>
                <li>упростили названия и логику</li>
              </ul>
              <p>
                Это снизило когнитивную нагрузку и упростило настройку выдачи.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>
              2. Переработала расположение фильтров
            </h3>
            <div className={styles.sectionText}>
              <p>
                Разработала три варианта расположения фильтров и провела
                юзабилити-тестирование. Лучшим оказался вариант с фильтрами
                слева — он соответствует привычным пользовательским паттернам и
                делает фильтры заметными и доступными.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>
              3. Перераспределила приоритеты в выдаче
            </h3>
            <div className={styles.sectionText}>
              <p>
                В ходе редизайна было изменено расположение ключевых блоков:
              </p>
              <ul>
                <li>
                  виджет сотрудников перенесён из центра в правую колонку
                </li>
                <li>
                  виджет сервисов перенесён из правой колонки в центр
                </li>
              </ul>
              <p>
                Это решение основано на пользовательских сценариях: сотрудники
                чаще ищут сервисы для выполнения задач (например, оформление
                отпуска), список сотрудников не является критичным в большинстве
                сценариев. Правый блок пользователи воспринимают как
                вспомогательный, поэтому туда были вынесены менее приоритетные
                элементы. Центральная часть выдачи стала содержать наиболее
                важную информацию.
              </p>
            </div>
            <ProjectCaseImageSlot
              label="Структура выдачи: центр и правая колонка"
              imageSrc="/CorpSearch-Main.png"
              imageAlt="Структура выдачи корпоративного поиска"
              imageWidth={1920}
              imageHeight={1080}
            />

            <h3 className={styles.subsectionTitle}>
              4. Улучшила структуру выдачи
            </h3>
            <div className={styles.sectionText}>
              <p>
                Поиск работает с разными типами данных, поэтому в выдаче
                используются разные форматы: документы, сотрудники, изображения,
                виджеты (глоссарий, сервисы, пользователи). Это помогает быстрее
                ориентироваться в результатах и находить нужную информацию.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>
              5. Повлияла на восприятие релевантности
            </h3>
            <div className={styles.sectionText}>
              <p>Я улучшила восприятие качества выдачи через интерфейс:</p>
              <ul>
                <li>добавила подсказки</li>
                <li>упростила структуру результатов</li>
                <li>сделала выдачу более читаемой</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>
              6. Сохранила привычные пользовательские сценарии
            </h3>
            <div className={styles.sectionText}>
              <p>
                В поиск была интегрирована механика лайков сотрудников, которая
                ранее использовалась в корпоративном портале. Лайки отображаются
                в карточках пользователей в выдаче и используются как элемент
                неформального взаимодействия (например, поздравления коллег).
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Результат</h2>
            <div className={styles.sectionText}>
              <p>
                Редизайн корпоративного поиска позволил упростить сценарии
                работы с системой и повысить эффективность поиска информации.
              </p>
              <ul>
                <li>
                  <strong>Время нахождения информации</strong> сократилось в
                  среднем на 55%: сотрудники — на 30%, сервисы — на 64%,
                  документы — на 68%.
                </li>
                <li>
                  <strong>Пользователи стали быстрее осваивать систему</strong>:
                  удобство использования — 4.3 / 5.
                </li>
                <li>
                  <strong>Повысилось доверие к результатам поиска</strong>:
                  оценка качества — 4.9 / 5.
                </li>
                <li>
                  <strong>Продукт активно используется внутри компании</strong>:
                  128K уникальных пользователей в месяц, 1.5M поисковых запросов в
                  месяц, ~42K входов ежедневно.
                </li>
                <li>
                  <strong>Стабильная пользовательская база</strong>: ретеншн —
                  97%.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
