import ProjectsGrid from "@/components/ProjectsGrid";
import HomeHero from "@/components/HomeHero";
import SkillsSection from "@/components/SkillsSection";
import CertificationsSection from "@/components/CertificationsSection";

export const metadata = {
  title: "Priyanka Pillai — Portfolio",
  description: "Software Engineer · MS IT @ ASU · SWE Intern @ Rocket Mortgage",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHero />

      <div className="mx-auto max-w-5xl px-4 space-y-20 py-16">
        <SkillsSection />
        <ProjectsGrid />
        <CertificationsSection />
      </div>
    </main>
  );
}
