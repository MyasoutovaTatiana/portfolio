import Link from "next/link";
import styles from "./V2Header.module.css";

export default function V2Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/v2" className={styles.name}>
          Мясоутова Татьяна
        </Link>

        <nav className={styles.links} aria-label="Контакты и документы">
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
          <Link href="/" className={styles.linkV1}>
            Версия сайта v1
          </Link>
        </nav>
      </div>
    </header>
  );
}
