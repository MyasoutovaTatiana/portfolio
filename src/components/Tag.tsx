import styles from "./Tag.module.css";

export type TagVariant = "work" | "device";

type Props = {
  label: string;
  variant?: TagVariant;
};

export default function Tag({ label, variant = "work" }: Props) {
  return <span className={`${styles.tag} ${styles[variant]}`}>{label}</span>;
}
