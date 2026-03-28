import Image from "next/image";
import Link from "next/link";
import { BP_MD, BP_XL } from "@/styles/breakpoints";
import type { Project } from "@/data/projects";
import Tag from "@/components/Tag";
import styles from "./V2ProjectCard.module.css";

type Props = {
  project: Project;
};

export default function V2ProjectCard({ project }: Props) {
  const {
    href,
    title,
    description,
    period,
    imageSrc,
    imageAlt,
    tags = [],
    hoverImages,
    inDevelopment = false,
  } = project;

  const mainImage = hoverImages?.main ?? imageSrc ?? "";

  const media = (
    <div className={styles.media}>
      <div className={styles.imageWrap}>
        {hoverImages?.left && (
          <Image
            src={hoverImages.left}
            alt=""
            aria-hidden
            className={`${styles.image} ${styles.sideImage} ${styles.leftImage}`}
            width={1440}
            height={900}
          />
        )}
        <Image
          src={mainImage}
          alt={imageAlt}
          className={`${styles.image} ${styles.mainImage}`}
          width={1440}
          height={900}
          sizes={`(max-width: ${BP_MD}px) 100vw, (max-width: ${BP_XL}px) 50vw, 400px`}
        />
        {hoverImages?.right && (
          <Image
            src={hoverImages.right}
            alt=""
            aria-hidden
            className={`${styles.image} ${styles.sideImage} ${styles.rightImage}`}
            width={1440}
            height={900}
          />
        )}
      </div>
    </div>
  );

  const body = (
    <div className={styles.body}>
      <div className={styles.titleRow}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.period}>{period}</span>
      </div>
      {tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Tag
              key={`${tag.variant}-${tag.label}`}
              label={tag.label}
              variant={tag.variant}
              tone="light"
            />
          ))}
        </div>
      )}
      <p className={styles.description}>{description}</p>
      {inDevelopment && (
        <p className={styles.wipNote}>Описание проекта в разработке</p>
      )}
    </div>
  );

  const cardInner = (
    <article
      className={`${styles.card} ${inDevelopment ? styles.cardWip : ""}`}
    >
      {media}
      {body}
      {inDevelopment && (
        <div className={styles.wipOverlay} aria-hidden>
          <span className={styles.wipBadge}>Скоро</span>
        </div>
      )}
    </article>
  );

  if (inDevelopment) {
    return <div className={styles.cardOuter}>{cardInner}</div>;
  }

  return (
    <Link href={href} className={styles.cardOuter}>
      {cardInner}
    </Link>
  );
}
