import Link from "next/link";
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
}: Props) {
  const mainImage = hoverImages?.main ?? imageSrc ?? "";

  return (
    <Link href={href} className={styles.cardLink}>
      <article className={styles.card}>
        <div className={styles.imageWrap}>
          {hoverImages?.left && (
            <img
              src={hoverImages.left}
              alt=""
              aria-hidden="true"
              className={`${styles.image} ${styles.sideImage} ${styles.leftImage}`}
            />
          )}

          <img
            src={mainImage}
            alt={imageAlt}
            className={`${styles.image} ${styles.mainImage}`}
          />

          {hoverImages?.right && (
            <img
              src={hoverImages.right}
              alt=""
              aria-hidden="true"
              className={`${styles.image} ${styles.sideImage} ${styles.rightImage}`}
            />
          )}
        </div>

        <div className={styles.info}>
          <div className={styles.leftSide}>
            <h3 className={styles.title}>{title}</h3>

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

          <div className={styles.rightSide}>
            <p className={styles.period}>{period}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
