"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";
import { motion, Variants } from "framer-motion";
import TiltCard from "./TiltCard";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ProjectsGrid() {
  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-400">Portfolio</p>
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
            transition={{ delay: i * 0.08 }}
          >
            <TiltCard className="h-full rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950/70 p-6 hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-lg hover:shadow-violet-500/10 transition-all will-change-transform">
              <article className="h-full flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
                  {p.href && p.href !== "#" ? (
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 text-xs text-violet-500 hover:text-violet-400 transition-colors"
                      aria-label={`Open live demo of ${p.title}`}
                    >
                      Live <ExternalLink className="h-3 w-3" />
                    </Link>
                  ) : null}
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {p.blurb}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t: string) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-0.5 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {p.repo ? (
                  <a
                    href={`https://github.com/${p.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-violet-500 hover:text-violet-400 transition-colors"
                    aria-label={`View GitHub repository for ${p.title}`}
                  >
                    View repository →
                  </a>
                ) : null}
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
