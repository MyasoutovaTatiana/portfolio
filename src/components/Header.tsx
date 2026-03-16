import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.name}>Мясоутова Татьяна</div>

        <div className={styles.links}>
          <a
            href="/cv.pdf"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
          <a
            href="https://www.linkedin.com"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:email@example.com" className={styles.link}>
            Email
          </a>
        </div>
      </div>
    </header>
  );
}
