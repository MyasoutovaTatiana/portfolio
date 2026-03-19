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

export default function CorpSearchPage() {
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
                Единое поисковое окно компании
              </span>
            </nav>

            <header className={styles.hero}>
              <h1 className={styles.title}>Единое поисковое окно компании</h1>
              <p className={styles.period}>2022 — 2025</p>
            </header>

            <section id="about" className={styles.section}>
              <h2 className={styles.sectionTitle}>О проекте</h2>
              <div className={styles.sectionText}>
                <p>
                  Единое поисковое окно компании Газпром нефть позволяет
                  сотрудникам находить информацию во внутренних системах.
                  <span className={styles.blockLabel}>
                    Система объединяет несколько типов данных:
                  </span>
                  документы, сотрудников, изображения, сервисы и глоссарий.
                  Поиск используется ежедневно и помогает решать рабочие задачи
                  — от поиска регламентов до поиска коллег.
                </p>
              </div>
            </section>

            <section id="problem" className={styles.section}>
              <h2 className={styles.sectionTitle}>Проблема</h2>
              <div className={styles.sectionText}>
                <p>
                  До редизайна поиск был сложным и неэффективным:
                  <span className={styles.blockSpacer} />
                  — нерелевантная выдача
                  <br />
                  — перегруженные и непонятные фильтры
                  <br />
                  — устаревший интерфейс вне дизайн-системы
                  <br />
                  — неочевидные приоритеты информации в выдаче
                  <span className={styles.blockSpacer} />
                  Пользователи тратили больше времени на поиск и часто не
                  использовали доступные инструменты.
                </p>
              </div>
              <ImageSlot
                label="Интерфейс до редизайна"
                hint="public/corp-search-before.png"
              />
            </section>

            <section id="research" className={styles.section}>
              <h2 className={styles.sectionTitle}>Исследование</h2>
              <div className={styles.sectionText}>
                <p>
                  Мы провели юзабилити-тестирование текущего решения и
                  прототипов.
                  <span className={styles.blockLabel}>Выяснилось:</span>
                  — пользователи игнорируют фильтры и не понимают их назначение
                  <br />
                  — большой список параметров создает ощущение сложности
                  <br />
                  — расположение фильтров влияет на поведение
                  <br />
                  — правый блок воспринимается как второстепенный и часто
                  игнорируется
                  <br />
                  — центр выдачи воспринимается как основная зона внимания
                </p>
              </div>
              <ImageSlot
                label="Юзабилити-тестирование или прототипы"
                hint="public/corp-search-research.png"
              />
            </section>

            <section id="solution" className={styles.section}>
              <h2 className={styles.sectionTitle}>Решение</h2>

              <h3 className={styles.subsectionTitle}>
                1. Упростила фильтры
              </h3>
              <div className={styles.sectionText}>
                <p>
                  Вместе с аналитиком провела ревизию фильтров:
                  <span className={styles.blockSpacer} />
                  — убрали неиспользуемые и дублирующие параметры
                  <br />
                  — оставили только востребованные
                  <br />
                  — упростили названия и логику
                  <span className={styles.blockSpacer} />
                  Это снизило когнитивную нагрузку и упростило настройку выдачи.
                </p>
              </div>
              <ImageSlot
                label="Фильтры после ревизии"
                hint="public/corp-search-filters.png"
              />

              <h3 className={styles.subsectionTitle}>
                2. Переработала расположение фильтров
              </h3>
              <div className={styles.sectionText}>
                <p>
                  Разработала 3 варианта расположения фильтров и провела
                  юзабилити-тестирование. Лучшим оказался вариант с фильтрами
                  слева — он соответствует привычным пользовательским паттернам
                  и делает фильтры заметными и доступными.
                </p>
              </div>
              <ImageSlot
                label="Варианты расположения фильтров или финальный интерфейс"
                hint="public/corp-search-layout.png"
              />

              <h3 className={styles.subsectionTitle}>
                3. Перераспределила приоритеты в выдаче
              </h3>
              <div className={styles.sectionText}>
                <p>
                  В ходе редизайна было изменено расположение ключевых блоков:
                  <span className={styles.blockSpacer} />
                  — виджет сотрудников перенесён из центра в правую колонку
                  <br />
                  — виджет сервисов перенесён из правой колонки в центр
                  <span className={styles.blockSpacer} />
                  Это решение основано на пользовательских сценариях: сотрудники
                  чаще ищут сервисы для выполнения задач (например, оформление
                  отпуска), список сотрудников не является критичным в большинстве
                  сценариев. Правый блок пользователи воспринимают как
                  вспомогательный, поэтому туда были вынесены менее приоритетные
                  элементы. Центральная часть выдачи стала содержать наиболее
                  важную информацию.
                </p>
              </div>
              <ImageSlot
                label="Структура выдачи: центр и правая колонка"
                hint="public/corp-search-priorities.png"
              />

              <h3 className={styles.subsectionTitle}>
                4. Улучшила структуру выдачи
              </h3>
              <div className={styles.sectionText}>
                <p>
                  Поиск работает с разными типами данных, поэтому в выдаче
                  используются разные форматы: документы, сотрудники,
                  изображения, виджеты (глоссарий, сервисы, пользователи). Это
                  помогает быстрее ориентироваться в результатах и находить
                  нужную информацию.
                </p>
              </div>
              <ImageSlot
                label="Типы результатов в выдаче"
                hint="public/corp-search-results.png"
              />

              <h3 className={styles.subsectionTitle}>
                5. Повлияла на восприятие релевантности
              </h3>
              <div className={styles.sectionText}>
                <p>
                  Я улучшила восприятие качества выдачи через интерфейс:
                  <span className={styles.blockSpacer} />
                  — добавила подсказки
                  <br />
                  — упростила структуру результатов
                  <br />
                  — сделала выдачу более читаемой
                </p>
              </div>
              <ImageSlot
                label="Подсказки и читаемая выдача"
                hint="public/corp-search-relevance.png"
              />

              <h3 className={styles.subsectionTitle}>
                6. Сохранила привычные пользовательские сценарии
              </h3>
              <div className={styles.sectionText}>
                <p>
                  В поиск была интегрирована механика лайков сотрудников, которая
                  ранее использовалась в корпоративном портале. Лайки
                  отображаются в карточках пользователей в выдаче и используются
                  как элемент неформального взаимодействия (например, поздравления
                  коллег).
                </p>
              </div>
              <ImageSlot
                label="Карточки сотрудников с лайками"
                hint="public/corp-search-likes.png"
              />
            </section>

            <section id="scenario" className={styles.section}>
              <h2 className={styles.sectionTitle}>Сценарий использования</h2>
              <div className={styles.sectionText}>
                <p>
                  Пользователь вводит запрос → получает список результатов →
                  при необходимости уточняет выдачу через фильтры → переходит к
                  нужному документу или сотруднику.
                </p>
              </div>
              <ImageSlot
                label="Сценарий: поиск и фильтрация"
                hint="public/corp-search-scenario.png"
              />
            </section>

            <section id="role" className={styles.section}>
              <h2 className={styles.sectionTitle}>Моя роль</h2>
              <div className={styles.sectionText}>
                <p>
                  <span className={styles.blockLabel}>Моя работа включала:</span>
                  — проектирование UX/UI решений
                  <br />
                  — создание макетов и прототипов
                  <br />
                  — участие в юзабилити-исследованиях
                  <br />
                  — тестирование решений
                  <br />
                  — работу с аналитиками, разработчиками и исследователями
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
