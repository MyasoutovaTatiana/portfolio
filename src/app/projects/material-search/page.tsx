"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import AnimatedBackground from "../../../components/AnimatedBackground";

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
              <p className={styles.period}>2024–2025</p>
            </header>

            <section id="about" className={styles.section}>
              <h2 className={styles.sectionTitle}>О продукте</h2>
              <div className={styles.sectionText}>
                <p>
                  Внутренний сервис для сотрудников компании, который позволяет
                  находить материалы и оборудование в корпоративном справочнике
                  НСИ. Пользователь вводит поисковый запрос на естественном
                  языке, после чего система подбирает наиболее релевантные
                  позиции.
                </p>

                <p>Сервис используется для:</p>

                <ul>
                  <li>поиска материалов</li>
                  <li>проверки наличия позиций</li>
                  <li>работы со справочником оборудования</li>
                </ul>
              </div>
            </section>

            <section id="problem" className={styles.section}>
              <h2 className={styles.sectionTitle}>Проблема</h2>
              <div className={styles.sectionText}>
                <p>
                  Продукт разрабатывался параллельно с формированием внутренней
                  дизайн-системы. Из-за этого интерфейс MVP был реализован без
                  единых UX-принципов и визуальной консистентности.
                </p>

                <p>Основные проблемы:</p>

                <ul>
                  <li>отсутствие единого визуального стиля</li>
                  <li>неочевидные элементы управления</li>
                  <li>перегруженная таблица результатов поиска</li>
                  <li>сложная работа с фильтрами</li>
                </ul>
              </div>
            </section>

            <section id="goal" className={styles.section}>
              <h2 className={styles.sectionTitle}>Цель</h2>
              <div className={styles.sectionText}>
                <p>
                  Обновить интерфейс сервиса после этапа MVP и привести его к
                  стандартам дизайн-системы.
                </p>

                <p>Основные задачи:</p>

                <ul>
                  <li>интегрировать дизайн-систему</li>
                  <li>улучшить структуру таблицы результатов</li>
                  <li>уточнить сценарии работы пользователей</li>
                  <li>повысить удобство поиска материалов</li>
                </ul>
              </div>
            </section>

            <section id="role" className={styles.section}>
              <h2 className={styles.sectionTitle}>Моя роль</h2>
              <div className={styles.sectionText}>
                <p>Я отвечала за:</p>

                <ul>
                  <li>аудит интерфейса</li>
                  <li>проектирование пользовательских сценариев</li>
                  <li>интеграцию дизайн-системы</li>
                  <li>переработку таблицы результатов поиска</li>
                  <li>улучшение фильтров и параметров поиска</li>
                  <li>создание финальных макетов</li>
                </ul>
              </div>
            </section>

            <section id="changes" className={styles.section}>
              <h2 className={styles.sectionTitle}>Ключевые изменения</h2>
              <div className={styles.sectionText}>
                <p>
                  Интерфейс был приведён к внутренней дизайн-системе компании.
                  Все страницы стали использовать единый набор компонентов и
                  паттернов взаимодействия.
                </p>
              </div>
            </section>

            <div className={styles.imageBlock}>
              <img
                src="/CorpSearch-Main.png"
                alt="Экран проекта"
                className={styles.image}
              />
            </div>

            <div className={styles.imageBlock}>
              <img
                src="/CorpSearch-Left.png"
                alt="Экран проекта Поиск по материалам"
                className={styles.image}
              />
            </div>

            <section id="result" className={styles.section}>
              <h2 className={styles.sectionTitle}>Результат</h2>
              <div className={styles.sectionText}>
                <p>
                  Продукт стал визуально консистентнее, понятнее для
                  пользователей и ближе к стандартам внутренней экосистемы.
                  Поиск, работа с фильтрами и восприятие результатов стали проще
                  и чище.
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

const sections = [
  { id: "about", label: "О продукте" },
  { id: "problem", label: "Проблема" },
  { id: "goal", label: "Цель" },
  { id: "role", label: "Моя роль" },
  { id: "changes", label: "Ключевые изменения" },
  { id: "result", label: "Результат" },
];
