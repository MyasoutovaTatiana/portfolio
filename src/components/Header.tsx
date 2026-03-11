import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.name}>Мясоутова Татьяна</div>

        <div className={styles.links}>
          <a href="#" className={styles.link}>
            CV
          </a>
          <a href="#" className={styles.link}>
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
