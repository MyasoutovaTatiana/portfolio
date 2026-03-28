import type { Metadata } from "next";
import V2Hero from "@/components/v2/V2Hero";
import V2OtherProjects from "@/components/v2/V2OtherProjects";
import V2ProjectsGrid from "@/components/v2/V2ProjectsGrid";
import V2SiteBar from "@/components/v2/V2SiteBar";
import V2Speaking from "@/components/v2/V2Speaking";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Портфолио (новая версия) — Татьяна Мясоутова",
  description:
    "Главная страница портфолио по макету Figma. Кейсы открываются на страницах проектов.",
};

export default function V2HomePage() {
  return (
    <main id="main-content" className={styles.page}>
      <div className={styles.column}>
        <V2SiteBar variant="header" />
        <V2Hero />
        <V2ProjectsGrid />
        <V2OtherProjects />
        <V2Speaking />
        <V2SiteBar variant="footer" />
      </div>
    </main>
  );
}
