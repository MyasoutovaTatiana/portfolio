import styles from "./ProjectCard.module.css";

type Props = {
  title: string;
  description: string;
  period: string;
  imageSrc: string;
  imageAlt: string;
};

export default function ProjectCard({
  title,
  description,
  period,
  imageSrc,
  imageAlt,
}: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
      </div>

      <div className={styles.info}>
        <div className={styles.topRow}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.period}>{period}</p>
        </div>

        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
}
