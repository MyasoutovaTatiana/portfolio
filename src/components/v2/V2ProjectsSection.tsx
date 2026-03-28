import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import styles from "./V2ProjectsSection.module.css";

export default function V2ProjectsSection() {
  return (
    <section className={styles.section} aria-labelledby="v2-projects-title">
      <h2 id="v2-projects-title" className={styles.title}>
        Проекты
      </h2>

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
