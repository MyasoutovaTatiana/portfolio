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
            href="https://drive.google.com/file/d/1rAm6Ycmod10hk_nGUdE4EAUhnXlzuHEw/view?usp=sharing"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_cv"
            data-analytics-param-section={variant}
            data-analytics-param-site-version="v2"
            data-analytics-param-link-type="cv"
            data-analytics-href="https://drive.google.com/file/d/1rAm6Ycmod10hk_nGUdE4EAUhnXlzuHEw/view?usp=sharing"
          >
            CV
          </a>
          <a
            href="https://www.linkedin.com/in/%D1%82%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0-%D0%BC%D1%8F%D1%81%D0%BE%D1%83%D1%82%D0%BE%D0%B2%D0%B0-536749267/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="click_linkedin"
            data-analytics-param-section={variant}
            data-analytics-param-site-version="v2"
            data-analytics-param-link-type="linkedin"
            data-analytics-href="https://www.linkedin.com/in/%D1%82%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0-%D0%BC%D1%8F%D1%81%D0%BE%D1%83%D1%82%D0%BE%D0%B2%D0%B0-536749267/"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tanyamyya@gmail.com"
            className={styles.link}
            data-analytics-event="click_email"
            data-analytics-param-section={variant}
            data-analytics-param-site-version="v2"
            data-analytics-param-link-type="email"
            data-analytics-href="mailto:tanyamyya@gmail.com"
          >
            Email
          </a>
        </nav>
      </div>
    </div>
  );
}
