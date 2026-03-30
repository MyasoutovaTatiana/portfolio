import Image from "next/image";
import Link from "next/link";
import { BP_MD, BP_XL } from "@/styles/breakpoints";
import styles from "./ProjectCard.module.css";
import Tag, { type TagVariant } from "./Tag";

type ProjectTag = {
  label: string;
  variant: TagVariant;
};

type HoverImages = {
  main: string;
  left?: string;
  right?: string;
};

type Props = {
  title: string;
  description: string;
  period: string;
  imageSrc?: string;
  imageAlt: string;
  tags?: ProjectTag[];
  hoverImages?: HoverImages;
  href: string;
  /** Карточка в разработке: заглушка, без перехода в кейс */
  inDevelopment?: boolean;
};

export default function ProjectCard({
  title,
  description,
  period,
  imageSrc,
  imageAlt,
  tags = [],
  hoverImages,
  href,
  inDevelopment = false,
}: Props) {
  const mainImage = hoverImages?.main ?? imageSrc ?? "";
  const cardContent = (
    <>
      <div className={styles.imageWrap}>
          {hoverImages?.left && (
            <Image
              src={hoverImages.left}
              alt=""
              aria-hidden="true"
              className={`${styles.image} ${styles.sideImage} ${styles.leftImage}`}
              width={1440}
              height={900}
            />
          )}

          <Image
            src={mainImage}
            alt={imageAlt}
            className={`${styles.image} ${styles.mainImage}`}
            fill
            sizes={`(max-width: ${BP_MD}px) 100vw, (max-width: ${BP_XL}px) 80vw, 720px`}
          />

          {hoverImages?.right && (
            <Image
              src={hoverImages.right}
              alt=""
              aria-hidden="true"
              className={`${styles.image} ${styles.sideImage} ${styles.rightImage}`}
              width={1440}
              height={900}
            />
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.titleRow}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.period}>{period}</p>
          </div>

          {tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag) => (
                <Tag
                  key={`${tag.variant}-${tag.label}`}
                  label={tag.label}
                  variant={tag.variant}
                />
              ))}
            </div>
          )}

          <p className={styles.description}>{description}</p>
        </div>

      {inDevelopment && (
        <div className={styles.wipOverlay} aria-hidden>
          <span className={styles.wipBadge}>Описание проекта в разработке</span>
        </div>
      )}
    </>
  );

  if (inDevelopment) {
    return (
      <div className={styles.cardLink} data-wip>
        <article className={`${styles.card} ${styles.cardWip}`}>
          {cardContent}
        </article>
      </div>
    );
  }

  return (
    <Link href={href} className={styles.cardLink}>
      <article className={styles.card}>
        {cardContent}
      </article>
    </Link>
  );
}
