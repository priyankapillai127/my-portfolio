"use client";
import Collapse from "./Collapse";
import SkillsFilter from "./SkillsFilter";
import { CopyEmail, PrintBtn, DownloadBtn } from "./Actions";
import { profile, experiences, projects, education, skills } from "@/lib/resume";
import { motion } from "framer-motion";

export default function ResumeInteractive() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {profile.location} · {profile.phone} ·{" "}
            <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
        <div className="hidden sm:flex gap-2 print:hidden">
          <CopyEmail email={profile.email} />
          <DownloadBtn href="/PriyankaPillaiSDE2.pdf" />
          <PrintBtn />
        </div>
      </div>

      <Collapse title="Professional Experience" defaultOpen>
        <div className="space-y-6">
          {experiences.map((e, idx) => (
            <motion.article
              key={e.company + idx}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25 }}
              className="space-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-semibold">{e.company} — {e.title}</h3>
                <span className="text-sm text-gray-500">{e.location}</span>
              </div>
              <div className="text-sm text-gray-500">{e.start} — {e.end}</div>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </Collapse>

      <Collapse title="Projects">
        <div className="space-y-4">
          {projects.map((p) => (
            <div key={p.name} className="space-y-1">
              <h3 className="font-medium">{p.name}</h3>
              <ul className="list-disc pl-5 space-y-1">
                {p.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Collapse>

      <Collapse title="Education">
        <ul className="space-y-2">
          {education.map((e) => (
            <li key={e.school} className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <span className="font-medium">{e.school}</span>
              <span className="text-sm text-gray-500">{e.start} — {e.end}</span>
              <span className="text-sm">{e.degree}</span>
            </li>
          ))}
        </ul>
      </Collapse>

      <Collapse title="Skills">
        <SkillsFilter
          groups={{
            Languages: skills.languages,
            "Frameworks & Libraries": skills.frameworks,
            Tools: skills.tools,
            "Platforms & Databases": skills.platforms,
            "Soft Skills": skills.soft,
          }}
        />
      </Collapse>
    </div>
  );
}
