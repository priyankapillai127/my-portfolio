// src/components/Resume.tsx
import { profile, experiences, projects, education, skills } from "@/lib/resume";

function Section({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export default function Resume() {
  return (
    <article className="mx-auto max-w-3xl bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 rounded-2xl p-6 md:p-10 shadow-sm print:shadow-none print:p-0">
      {/* Header */}
      <header className="border-b pb-4 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
          {profile.location} · {profile.phone} ·{" "}
          <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a> ·{" "}
          <a className="underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </header>

      {/* Experience */}
      <Section title="Professional Experience">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-1">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <h3 className="font-semibold">{exp.company} — {exp.title}</h3>
              <span className="text-sm text-gray-500">{exp.location}</span>
            </div>
            <div className="text-sm text-gray-500">{exp.start} — {exp.end}</div>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section title="Projects">
        {projects.map((p) => (
          <div key={p.name}>
            <h3 className="font-medium">{p.name}</h3>
            <ul className="list-disc pl-5 space-y-1">{p.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="Education">
        <ul className="space-y-1">
          {education.map((e) => (
            <li key={e.school} className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <span className="font-medium">{e.school}</span>
              <span className="text-sm text-gray-500">{e.start} — {e.end}</span>
              <span className="text-sm">{e.degree}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Skills">
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div><span className="font-medium">Languages:</span> {skills.languages.join(", ")}</div>
          <div><span className="font-medium">Frameworks & Libraries:</span> {skills.frameworks.join(", ")}</div>
          <div><span className="font-medium">Tools:</span> {skills.tools.join(", ")}</div>
          <div><span className="font-medium">Platforms & Databases:</span> {skills.platforms.join(", ")}</div>
          <div className="sm:col-span-2"><span className="font-medium">Soft Skills:</span> {skills.soft.join(", ")}</div>
        </div>
      </Section>
    </article>
  );
}
