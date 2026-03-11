import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ProjectsSection from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />

      <main
        style={{
          minHeight: "200vh",
          position: "relative",
          paddingBottom: "120px",
        }}
      >
        <Hero />
        <ProjectsSection />

        <div style={{ marginTop: "80px" }}></div>
      </main>
    </>
  );
}
