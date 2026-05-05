import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Татьяна Мясоутова",
  description:
    "Информация о cookies и аналитике на сайте-портфолио Татьяны Мясоутовой.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Политика конфиденциальности</h1>

        <section className={styles.section}>
          <h2 className={styles.heading}>Общая информация</h2>
          <p>
            На этом сайте используются cookies и инструменты аналитики, чтобы
            понимать, как пользователи взаимодействуют с портфолио, и делать его
            удобнее.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Какие данные собираются</h2>
          <p>Мы можем собирать обезличенные данные, такие как:</p>
          <ul>
            <li>посещенные страницы;</li>
            <li>действия на сайте (клики, скролл);</li>
            <li>информация об устройстве и браузере.</li>
          </ul>
          <p>Эти данные не позволяют идентифицировать конкретного пользователя.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Зачем это нужно</h2>
          <p>Собранные данные используются для:</p>
          <ul>
            <li>анализа поведения пользователей;</li>
            <li>улучшения структуры и интерфейса сайта;</li>
            <li>понимания, какие разделы наиболее полезны.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Используемые сервисы</h2>
          <p>Для сбора и анализа данных используются сторонние сервисы:</p>
          <ul>
            <li>Google Analytics;</li>
            <li>Microsoft Clarity.</li>
          </ul>
          <p>
            Эти сервисы могут использовать собственные cookies и обрабатывать
            данные в соответствии со своими политиками конфиденциальности.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Cookies</h2>
          <p>
            Cookies — это небольшие файлы, которые сохраняются на устройстве
            пользователя и помогают анализировать использование сайта.
          </p>
          <p>Вы можете отключить cookies в настройках вашего браузера.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.heading}>Согласие</h2>
          <p>
            Продолжая использовать сайт, вы соглашаетесь с использованием
            cookies и обработкой обезличенных данных.
          </p>
        </section>

        <div className={styles.actions}>
          <Link href="/" className={styles.backLink}>
            На главную
          </Link>
        </div>
      </div>
    </main>
  );
}
