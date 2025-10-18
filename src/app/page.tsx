import ProjectsGrid from "@/components/ProjectsGrid";
import HomeHero from "@/components/HomeHero";

export const metadata = {
  title: "Priyanka Pillai — Portfolio",
  description: "Software Engineer • Next.js • TypeScript",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO (client) */}
      <HomeHero />

      {/* PROJECTS (client component inside server is OK) */}
      <section id="projects" className="mx-auto max-w-5xl px-4 py-12">
        <ProjectsGrid />
      </section>
    </main>
  );
}
