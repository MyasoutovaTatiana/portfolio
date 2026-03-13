"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import AnimatedBackground from "../../../components/AnimatedBackground";
import StatsGrid from "../../../components/StatsGrid";

export default function MaterialSearchPage() {
  const [active, setActive] = useState<string>("about");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatedBackground />
      <main className={styles.page}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <nav className={styles.breadcrumbs}>
              <a href="/" className={styles.breadcrumbMuted}>
                Главная
              </a>
              <span className={styles.breadcrumbSeparator}>›</span>
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
                  информацией предприятия
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
            </section>

            <div style={{ marginBottom: "48px" }}>
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
                  В результате работа со справочником занимала значительную
                  часть рабочего времени
                </p>
              </div>
            </section>

            <section id="goal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Задача</h2>
              <div className={styles.sectionText}>
                <p>
                  Создать удобный инструмент для работы с НСИ, который позволит:
                </p>

                <ul>
                  <li>быстро находить материалы</li>
                  <li>проверять наличие на предприятиях</li>
                  <li>подбирать аналоги</li>
                  <li>сократить время работы со справочником</li>
                </ul>
              </div>
            </section>

            <section id="role" className={styles.section}>
              <h2 className={styles.sectionTitle}>Роль и вклад</h2>
              <div className={styles.sectionText}>
                <p>Product Designer</p>

                <p>
                  К моменту моего подключения уже существовал MVP интерфейс,
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

            <section id="changes" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                UX-кейс 1 – Редизайн системы и подключение дизайн-системы
              </h2>
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
                    пользователям было сложно ориентироваться в результатах
                    поиска
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
            </section>

            <div className={styles.imageBlock}>
              <img
                src="/SearchMaterial-Main-DO.png"
                alt="Экран проекта"
                className={styles.image}
              />
            </div>

            <div className={styles.imageBlock}>
              <img
                src="/SearchMaterial-Main.png"
                alt="Экран проекта"
                className={styles.image}
              />
            </div>

            <section id="changes" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                UX-кейс 2 – Табличный поиск материалов{" "}
              </h2>
              <div className={styles.sectionText}>
                <p>
                  В работе специалистов часто возникает необходимость искать
                  сразу большое количество материалов. Например, когда
                  пользователь получает список позиций в Excel.
                </p>

                <p>
                  Для этого в системе появился табличный поиск. Пользователь
                  загружает файл со списком материалов, а система автоматически
                  выполняет поиск по каждой позиции.
                </p>

                <p>Я переработала интерфейс этой функции:</p>

                <ul>
                  <li>упростила загрузку файлов </li>
                  <li>улучшила отображение результатов</li>
                  <li>сделала работу с найденными материалами более удобной</li>
                </ul>
              </div>
            </section>

            <div className={styles.imageBlock}>
              <img
                src="/SearchMaterial-Main-DO-TS.png"
                alt="Экран проекта"
                className={styles.image}
              />
            </div>

            <div className={styles.imageBlock}>
              <img
                src="/SearchMaterial-Main-TS.png"
                alt="Экран проекта"
                className={styles.image}
              />
            </div>

            <section id="changes" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                UX-кейс 3 – Поиск аналогов и сравнение материалов{" "}
              </h2>
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
                  закупке или перераспределении материалов между подразделениями
                </p>
              </div>
            </section>

            <div className={styles.imageBlock}>
              <img
                src="/SearchMaterial-Main-analogy.png"
                alt="Экран проекта"
                className={styles.image}
              />
            </div>

            <section id="changes" className={styles.section}>
              <h2 className={styles.sectionTitle}>
                UX-кейс 4 – Новогодняя статистика{" "}
              </h2>
              <div className={styles.sectionText}>
                <p>
                  Каждый год в системе появляется небольшой интерактивный экран
                  с годовой статистикой пользователя.
                </p>

                <p>Он показывает:</p>

                <ul>
                  <li>сколько материалов пользователь искал</li>
                  <li>какие действия выполнял чаще всего</li>
                </ul>

                <p>
                  Этот экран выполнен в праздничном стиле и отличается от
                  основной рабочей стилистики сервиса. Для меня это возможность
                  поэкспериментировать с визуалом и добавить немного эмоций в
                  рабочий продукт
                </p>

                <p>Экран ежегодно открывают более 300 пользователей</p>
              </div>
            </section>

            <div className={styles.imageBlock}>
              <img
                src="/SearchMaterial-Main-NG.png"
                alt="Экран проекта"
                className={styles.image}
              />
            </div>

            <section id="changes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Результат </h2>
              <div className={styles.sectionText}>
                <p>Рост пользователей</p>
                <ul>
                  <li>4094 пользователей в 2023</li>
                  <li>4897 пользователей в 2024</li>
                  <li>5385 пользователей в 2025</li>
                </ul>

                <p>Рост поисковой активности </p>
                <ul>
                  <li>1471 поисковый запрос в день в 2023</li>
                  <li>2765 в 2024</li>
                  <li>3175 в 2025</li>
                </ul>

                <p>Рост использования табличного поиска</p>
                <ul>
                  <li>2 запроса в день в 2023</li>
                  <li>8 в 2024</li>
                  <li>19 в 2025</li>
                  <li>25,5 в феврале 2026</li>
                </ul>
              </div>
            </section>
          </div>

          {/* <aside className={styles.sidebar}>...</aside> */}
        </div>
      </main>
    </>
  );
}

const sections = [
  { id: "about", label: "О продукте" },
  { id: "problem", label: "Проблема" },
  { id: "goal", label: "Цель" },
  { id: "role", label: "Моя роль" },
  { id: "changes", label: "Ключевые изменения" },
  { id: "result", label: "Результат" },
];
