import Link from "next/link";
import styles from "./V2SiteBar.module.css";

type Variant = "header" | "footer";

export default function V2SiteBar({ variant }: { variant: Variant }) {
  const barClass =
    variant === "header"
      ? `${styles.bar} ${styles.barHeader}`
      : `${styles.bar} ${styles.barFooter}`;

  return (
    <div className={styles.wrapper}>
      <div className={barClass}>
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
        </nav>
      </div>
    </div>
  );
}
