import { DM_Sans } from "next/font/google";
import styles from "./layout.module.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-v2-sans",
});

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`${styles.shell} ${dmSans.variable}`}>{children}</div>;
}
