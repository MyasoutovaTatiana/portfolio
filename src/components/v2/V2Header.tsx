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
            href="https://drive.google.com/file/d/1rAm6Ycmod10hk_nGUdE4EAUhnXlzuHEw/view?usp=sharing"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
          <a
            href="https://www.linkedin.com/in/%D1%82%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0-%D0%BC%D1%8F%D1%81%D0%BE%D1%83%D1%82%D0%BE%D0%B2%D0%B0-536749267/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:tanyamyya@gmail.com" className={styles.link}>
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
