import ProjectsGrid from "@/components/ProjectsGrid";
import HomeHero from "@/components/HomeHero";
import SkillsSection from "@/components/SkillsSection";

export const metadata = {
  title: "Priyanka Pillai — Portfolio",
  description: "Software Engineer · MS CS @ ASU · Incoming SWE Intern @ Rocket Mortgage",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHero />

      <section id="skills" className="mx-auto max-w-5xl px-4 py-12">
        <SkillsSection />
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-4 py-12">
        <ProjectsGrid />
      </section>
    </main>
  );
}
