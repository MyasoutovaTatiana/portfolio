import styles from "./ProjectPlaceholder.module.css";

type Props = {
  title: string;
};

export default function ProjectPlaceholder({ title }: Props) {
  return (
    <main id="main-content" className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>Страница кейса в разработке.</p>
    </main>
  );
}

