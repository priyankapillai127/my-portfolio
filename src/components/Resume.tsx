// src/components/Resume.tsx
import { profile, experiences, projects, education, skills } from "@/lib/resume";

function Section({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-bold tracking-widest uppercase text-blue-500 dark:text-blue-400 border-b border-gray-200 dark:border-gray-700 pb-1">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700">
      {label}
    </span>
  );
}

export default function Resume() {
  return (
    <article className="mx-auto max-w-3xl bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 rounded-2xl p-6 md:p-10 shadow-sm print:shadow-none print:p-0 space-y-8">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 pb-5">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex flex-wrap gap-x-3 gap-y-1">
          <span>{profile.location}</span>
          <span>·</span>
          <span>{profile.phone}</span>
          <span>·</span>
          <a className="underline hover:text-blue-500" href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>·</span>
          <a className="underline hover:text-blue-500" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <span>·</span>
          <a className="underline hover:text-blue-500" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span>·</span>
          <a className="underline hover:text-blue-500" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        </p>
      </header>

      {/* Experience */}
      <Section title="Professional Experience">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-2">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="font-semibold text-base">
                {exp.company}
                <span className="font-normal text-gray-500 dark:text-gray-400"> — {exp.title}</span>
              </h3>
              <span className="text-xs text-gray-400 whitespace-nowrap">{exp.start} – {exp.end} · {exp.location}</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section title="Projects">
        {projects.map((p) => (
          <div key={p.name} className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-sm">{p.name}</h3>
              {p.tags.map((t) => <Tag key={t} label={t} />)}
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              {p.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="Education">
        {education.map((e) => (
          <div key={e.school} className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
            <div>
              <span className="font-medium text-sm">{e.school}</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">{e.degree}</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">{e.start} – {e.end}</span>
          </div>
        ))}
      </Section>

      {/* Skills */}
      <Section title="Technical Skills">
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="font-medium">Languages: </span>
            <span className="text-gray-600 dark:text-gray-400">{skills.languages.join(", ")}</span>
          </div>
          <div>
            <span className="font-medium">Frameworks & Libraries: </span>
            <span className="text-gray-600 dark:text-gray-400">{skills.frameworks.join(", ")}</span>
          </div>
          <div>
            <span className="font-medium">Systems & Cloud: </span>
            <span className="text-gray-600 dark:text-gray-400">{skills.systems.join(", ")}</span>
          </div>
          <div>
            <span className="font-medium">Databases & Tools: </span>
            <span className="text-gray-600 dark:text-gray-400">{skills.databases.join(", ")}</span>
          </div>
        </div>
      </Section>
    </article>
  );
}
