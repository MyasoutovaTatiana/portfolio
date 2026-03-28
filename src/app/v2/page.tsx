import type { Metadata } from "next";
import AnimatedBackground from "@/components/AnimatedBackground";
import V2Header from "@/components/v2/V2Header";
import V2Hero from "@/components/v2/V2Hero";
import V2ProjectsSection from "@/components/v2/V2ProjectsSection";

export const metadata: Metadata = {
  title: "Портфолио (новая версия) — Татьяна Мясоутова",
  description:
    "Черновик новой главной страницы портфолио. Кейсы по-прежнему открываются на страницах v1.",
};

export default function V2HomePage() {
  return (
    <>
      <AnimatedBackground />
      <V2Header />
      <main id="main-content" className="mainRoot">
        <V2Hero />
        <V2ProjectsSection />
      </main>
    </>
  );
}
