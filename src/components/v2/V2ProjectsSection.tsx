import { projects } from "@/data/projects";
import V2ProjectCard from "./V2ProjectCard";
import styles from "./V2ProjectsSection.module.css";

export default function V2ProjectsSection() {
  return (
    <section className={styles.section} aria-labelledby="v2-projects-title">
      <div className={styles.head}>
        <h2 id="v2-projects-title" className={styles.title}>
          Проекты
        </h2>
        <p className={styles.subtitle}>
          Выбранные кейсы: корпоративные сервисы и продуктовые интерфейсы
        </p>
      </div>

      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.slug} className={styles.item}>
            <V2ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
