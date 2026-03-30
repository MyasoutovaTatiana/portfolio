import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" className="mainRoot">
        <Hero />
        <ProjectsSection />
      </main>
    </>
  );
}
