import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import styles from "./V2ProjectsGrid.module.css";

type Slug =
  | "admin-service"
  | "material-search"
  | "arc"
  | "design-system"
  | "service-dd"
  | "corp-search";

const ROWS: { slugs: [Slug, Slug]; narrowFirst: boolean }[] = [
  { slugs: ["admin-service", "material-search"], narrowFirst: true },
  { slugs: ["arc", "design-system"], narrowFirst: false },
  { slugs: ["service-dd", "corp-search"], narrowFirst: true },
];

const CARD_BG: Record<Slug, string> = {
  "admin-service": "#fff6d6",
  "material-search": "#f0f8ff",
  arc: "#fff0e6",
  "design-system": "#f9f5ff",
  "service-dd": "#e6f7f0",
  "corp-search": "#fff6d6",
};

const COPY: Partial<
  Record<Slug, { title?: string; description?: string; smallTitle?: boolean }>
> = {
  "design-system": { title: "Дизайн-система Consta" },
  arc: { title: "Profit architect" },
  "service-dd": {
    description: "Сервис для анализа договорных документов",
  },
  "corp-search": {
    description:
      "Единое поисковое окно компании Газпром нефть позволяет сотрудникам находить информацию во внутренних системах",
    smallTitle: true,
  },
};

function projectBySlug(slug: Slug): Project {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project slug: ${slug}`);
  return p;
}

function mainImageSrc(p: Project): string {
  if (p.hoverImages?.main) return p.hoverImages.main;
  if (p.imageSrc) return p.imageSrc;
  return "";
}

function ProjectCell({ slug }: { slug: Slug }) {
  const p = projectBySlug(slug);
  const patch = COPY[slug];
  const title = patch?.title ?? p.title;
  const description = patch?.description ?? p.description;
  const smallTitle = patch?.smallTitle ?? false;
  const src = mainImageSrc(p);
  const bg = CARD_BG[slug];

  const inner = (
    <>
      <div className={styles.cardInner} style={{ backgroundColor: bg }}>
        <div className={styles.cardText}>
          <h3
            className={`${styles.cardTitle} ${smallTitle ? styles.cardTitleSm : ""}`}
          >
            {title}
          </h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
        {src ? (
          <div
            className={`${styles.imageWrap}${slug === "arc" ? ` ${styles.imageWrapArc}` : ""}`}
          >
            {slug === "arc" ? (
              <Image
                src={src}
                alt={p.imageAlt}
                width={352}
                height={589}
                className={styles.imageArc}
                sizes="352px"
              />
            ) : (
              <Image
                src={src}
                alt={p.imageAlt}
                fill
                className={styles.image}
                sizes="(max-width: 920px) 100vw, 480px"
              />
            )}
          </div>
        ) : null}
        {p.inDevelopment ? (
          <span className={styles.wipBadge}>Описание проекта в разработке</span>
        ) : null}
      </div>
    </>
  );

  if (p.inDevelopment) {
    return (
      <article
        className={`${styles.card} ${styles.cardWip}`}
        aria-label={title}
      >
        {inner}
      </article>
    );
  }

  return (
    <Link href={p.href} className={styles.card}>
      {inner}
    </Link>
  );
}

export default function V2ProjectsGrid() {
  return (
    <section className={styles.section} aria-labelledby="v2-figma-projects">
      <h2 id="v2-figma-projects" className={styles.title}>
        Проекты
      </h2>
      {ROWS.map(({ slugs, narrowFirst }) => (
        <div key={`${slugs[0]}-${slugs[1]}`} className={styles.row}>
          <div className={narrowFirst ? styles.narrow : styles.wide}>
            <ProjectCell slug={slugs[0]} />
          </div>
          <div className={narrowFirst ? styles.wide : styles.narrow}>
            <ProjectCell slug={slugs[1]} />
          </div>
        </div>
      ))}
    </section>
  );
}
