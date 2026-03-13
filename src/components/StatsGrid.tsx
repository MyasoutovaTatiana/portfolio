import styles from "./StatsGrid.module.css";

type StatItem = {
  value: string;
  label: string;
};

type Props = {
  items: StatItem[];
};

export default function StatsGrid({ items }: Props) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div key={`${item.value}-${item.label}`} className={styles.card}>
          <p className={styles.value}>{item.value}</p>
          <p className={styles.label}>{item.label}</p>
        </div>
      ))}
    </div>
  );
}
