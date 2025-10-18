"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";
import { motion, Variants } from "framer-motion";
import TiltCard from "./TiltCard"; // make sure this exists (the vanilla-tilt wrapper)

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function ProjectsGrid() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          >
            <TiltCard className="rounded-2xl border p-5 bg-white/60 dark:bg-gray-950/60 will-change-transform">
              <article>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>

                  {p.href ? (
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm inline-flex items-center gap-1 underline"
                      aria-label={`Open live demo of ${p.title} in a new tab`}
                    >
                      Live <ExternalLink className="h-3 w-3" />
                    </Link>
                  ) : null}
                </div>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {p.blurb}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t: string) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border bg-white/70 dark:bg-gray-900/40"
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
                    className="mt-3 block text-sm underline"
                    aria-label={`View GitHub repository for ${p.title}`}
                  >
                    View repository
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
