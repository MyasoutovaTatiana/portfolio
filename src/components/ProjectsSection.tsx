import styles from "./ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Проекты</h2>

      <div className={styles.cards}>
        <ProjectCard
          title="Сервис ДД"
          description="Внутренний сервис для юристов и финансистов, который позволяет анализировать и сопоставлять договорные документы с правилами заполнения"
          period="2025 - наст. вр"
          imageSrc="/Service-DD.jpg"
          imageAlt="Сервис ДД"
        />

        <ProjectCard
          title="Consta"
          description="Дизайн-система компании «Газпром нефть»"
          period="2022 - наст. вр"
          imageSrc="/DesignSystem.jpg"
          imageAlt="Consta"
        />

        <ProjectCard
          title="Поиск по материалам"
          description="Внутренний сервис для закупщиков, который позволяет находить материалы и оборудование в корпоративном справочнике"
          period="2023 - 2025"
          imageSrc="/DesignSystem.jpg"
          imageAlt="Поиск по материалами"
        />
      </div>
    </section>
  );
}
