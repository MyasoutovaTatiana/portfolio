import styles from "./ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Проекты</h2>

      <div className={styles.cards}>
        <ProjectCard
          href="/projects/ServiceDD"
          title="Сервис ДД"
          description="Внутренний сервис для юристов и финансистов, который позволяет анализировать и сопоставлять договорные документы с правилами заполнения"
          period="2025 - наст. вр"
          imageAlt="Сервис ДД"
          tags={[
            { label: "GPN", variant: "work" },
            { label: "WEB", variant: "device" },
          ]}
          hoverImages={{
            main: "/ServiceDD-Main.png",
            left: "/ServiceDD-Left.png",
            right: "/ServiceDD-Right.png",
          }}
        />

        <ProjectCard
          href="/projects/DesignSystem"
          title="Consta"
          description="Дизайн-система компании «Газпром нефть»"
          period="2022 - наст. вр"
          imageAlt="Consta"
          tags={[
            { label: "GPN", variant: "work" },
            { label: "WEB", variant: "device" },
          ]}
          hoverImages={{
            main: "/DesignSystem-Main.png",
            left: "/DesignSystem-Left.png",
            right: "/DesignSystem-Right.png",
          }}
        />

        <ProjectCard
          href="/projects/arc"
          title="profit architect"
          description="Телеграм бот для инвестиций в криптовалюты и заработка с рефрельной программы"
          period="2026"
          imageSrc="/Arc.png"
          imageAlt="profit architect"
          tags={[
            { label: "FREELANCE", variant: "work" },
            { label: "MOB", variant: "device" },
          ]}
        />

        <ProjectCard
          href="/projects/material-search"
          title="Поиск по материалам"
          description="Рост пользователей на 31%, рост поисковых запросов на 116%, рост использования табличного поиска в 12 раз"
          period="2022 - 2025"
          imageAlt="Поиск по материалами"
          tags={[
            { label: "GPN", variant: "work" },
            { label: "WEB", variant: "device" },
          ]}
          hoverImages={{
            main: "/SearchMaterial-Main.png",
            left: "/SearchMaterial-Left.png",
            right: "/SearchMaterial-Right.png",
          }}
        />

        <ProjectCard
          href="/projects/corp-search"
          title="Единое поисковое окно компании"
          description="Внутренний сервис для всех сотрудников компании, который позволяет выполнять поиск по внутренним информационным ресурсам «Газпром нефти»"
          period="2022 - 2024"
          imageAlt="Единое поисковое окно компании"
          tags={[
            { label: "GPN", variant: "work" },
            { label: "WEB", variant: "device" },
          ]}
          hoverImages={{
            main: "/CorpSearch-Main.png",
            left: "/CorpSearch-Left.png",
            right: "/CorpSearch-Right.png",
          }}
        />
      </div>
    </section>
  );
}
