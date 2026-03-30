import styles from "./Tag.module.css";

export type TagVariant = "work" | "device";
export type TagTone = "dark" | "light";

type Props = {
  label: string;
  variant?: TagVariant;
  /** «light» — для светлых карточек (например /v2). */
  tone?: TagTone;
};

export default function Tag({
  label,
  variant = "work",
  tone = "light",
}: Props) {
  const toneClass = tone === "light" ? styles.toneLight : undefined;
  return (
    <span
      className={`${styles.tag} ${styles[variant]} ${toneClass ?? ""}`.trim()}
    >
      {label}
    </span>
  );
}
