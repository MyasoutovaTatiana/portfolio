import styles from "./ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Проекты</h2>

      <div className={styles.cards}>
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            href={project.href}
            title={project.title}
            description={project.description}
            period={project.period}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            tags={project.tags}
            hoverImages={project.hoverImages}
            inDevelopment={project.inDevelopment}
          />
        ))}
      </div>
    </section>
  );
}
