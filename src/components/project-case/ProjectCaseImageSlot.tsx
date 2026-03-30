import Image from "next/image";
import styles from "./ProjectCasePage.module.css";

type Props = {
  label: string;
  hint?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  hideLabel?: boolean;
};

export default function ProjectCaseImageSlot({
  label,
  hint,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  hideLabel,
}: Props) {
  return (
    <>
      {hideLabel ? null : <div className={styles.imageLabel}>{label}</div>}
      <div className={styles.imageBlock}>
        <div
          className={
            imageSrc ? styles.imagePlaceholderWithImage : styles.imagePlaceholder
          }
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? label}
              width={imageWidth ?? 2680}
              height={imageHeight ?? 1680}
              sizes="(max-width: 768px) calc(100vw - 32px), 672px"
              className={styles.projectImage}
            />
          ) : (
            <>
              <span>Место для скриншота</span>
              {hint ? <kbd>{hint}</kbd> : null}
            </>
          )}
        </div>
      </div>
    </>
  );
}
