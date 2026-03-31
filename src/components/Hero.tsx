import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Product Designer</h1>

      <p className={styles.meta}>B2E сервисы • Design Systems</p>

      <p className={styles.description}>
        Продуктовый дизайнер с 4-летним опытом проектирования внутренних
        сервисов для сотрудников. Проектирую сложные интерфейсы и
        пользовательские сценарии, а также развиваю дизайн-систему{" "}
        <a
          href="https://consta.design/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Consta
        </a>
      </p>
    </section>
  );
}
