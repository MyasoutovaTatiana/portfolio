import styles from "./layout.module.css";

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={styles.shell}>{children}</div>;
}
