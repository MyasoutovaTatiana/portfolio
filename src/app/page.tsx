import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />

      <main id="main-content" className="mainRoot">
        <Hero />
        <ProjectsSection />
      </main>
    </>
  );
}
