// src/components/Resume.tsx
import { profile, experiences, projects, education, skills, certifications } from "@/lib/resume";

function Section({ title, children }: React.PropsWithChildren<{ title: string }>) {
  return (
    <section className="space-y-4">
      <h2 className="text-[11px] font-bold tracking-[0.18em] uppercase text-violet-500 dark:text-violet-400 border-b border-gray-100 dark:border-gray-800 pb-1.5">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700 font-medium">
      {label}
    </span>
  );
}

export default function Resume() {
  return (
    <article className="mx-auto max-w-3xl bg-white text-gray-900 dark:bg-[#0d0d14] dark:text-gray-100 rounded-2xl p-6 md:p-10 shadow-xl shadow-black/5 dark:shadow-violet-950/20 print:shadow-none print:p-0 space-y-8 border border-gray-100 dark:border-gray-800">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800 pb-6 space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
          {profile.name}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 flex flex-wrap gap-x-2 gap-y-1">
          <span>{profile.location}</span>
          <span className="text-gray-300 dark:text-gray-600">·</span>
          <span>{profile.phone}</span>
          <span className="text-gray-300 dark:text-gray-600">·</span>
          <a className="hover:text-violet-500 transition-colors" href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="text-gray-300 dark:text-gray-600">·</span>
          <a className="hover:text-violet-500 transition-colors" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <span className="text-gray-300 dark:text-gray-600">·</span>
          <a className="hover:text-violet-500 transition-colors" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="text-gray-300 dark:text-gray-600">·</span>
          <a className="hover:text-violet-500 transition-colors" href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        </p>
      </header>

      {/* Experience */}
      <Section title="Professional Experience">
        {experiences.map((exp) => (
          <div key={exp.company} className="space-y-2">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
              <div>
                <span className="font-semibold text-[15px]">{exp.company}</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm"> — {exp.title}</span>
              </div>
              <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">{exp.start} – {exp.end} · {exp.location}</span>
            </div>
            <ul className="list-none space-y-1.5">
              {exp.bullets.map((b, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
                  <span className="text-violet-400 mt-1 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
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
            <ul className="list-none space-y-1.5">
              {p.details.map((d, i) => (
                <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
                  <span className="text-violet-400 mt-1 shrink-0">▸</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      {/* Education */}
      <Section title="Education">
        {education.map((e) => (
          <div key={e.school} className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
            <div>
              <p className="font-semibold text-sm">{e.school}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{e.degree}</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap shrink-0">{e.start} – {e.end}</span>
          </div>
        ))}
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <div className="grid sm:grid-cols-2 gap-3">
          {certifications.map((c) => (
            <div key={c.name} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 px-4 py-3 space-y-0.5">
              <p className="text-sm font-medium leading-snug">{c.name}</p>
              <p className="text-xs text-gray-400">{c.issuer} · {c.date}</p>
            </div>
          ))}
        </div>
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
