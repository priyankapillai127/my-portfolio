"use client";

import { motion } from "framer-motion";

const OPEN_TO = [
  { label: "Co-op · Fall 2026", color: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700" },
  { label: "Full-time · Dec 2026+", color: "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700" },
];

const FUN_FACTS = [
  { emoji: "🇮🇳", text: "Grew up in India, now building in the US" },
  { emoji: "🚀", text: "First US internship at Rocket Mortgage" },
  { emoji: "🧩", text: "Happiest when the problem has no obvious answer" },
  { emoji: "☁️", text: "Obsessed with distributed systems & cloud infra" },
];

export default function AboutSection() {
  return (
    <section className="space-y-8">
      {/* Eyebrow */}
      <div className="space-y-1">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-400">About me</p>
        <h2 className="text-3xl font-bold tracking-tight">The human behind the code</h2>
      </div>

      <div className="grid md:grid-cols-[1fr_280px] gap-8 items-start">
        {/* Main bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950/70 p-6 md:p-8 space-y-4 relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-violet-400/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-indigo-400/10 blur-2xl" />

            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 relative">
              Hey, I&apos;m Priyanka 👋 — a software engineer originally from{" "}
              <span className="font-semibold text-gray-900 dark:text-white">India</span>, now
              chasing my MS in Information Technology at{" "}
              <span className="font-semibold text-gray-900 dark:text-white">Arizona State University</span>.
            </p>

            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 relative">
              I have a somewhat unconventional relationship with{" "}
              <span className="italic">comfort</span>. The problems that make me go{" "}
              <span className="font-semibold text-violet-500 dark:text-violet-400">
                &ldquo;I have no idea how to solve this&rdquo;
              </span>{" "}
              are the ones I reach for first — because that feeling of being slightly lost is
              exactly where growth lives. It&apos;s what drew me to building distributed
              systems at Collins Aerospace, designing ML pipelines from scratch, and now
              shipping production features at Rocket Mortgage.
            </p>

            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 relative">
              I&apos;ve spent 4+ years building software that people actually rely on — from
              microservices handling{" "}
              <span className="font-semibold text-gray-900 dark:text-white">1M+ signals/day</span> to
              cloud platforms serving{" "}
              <span className="font-semibold text-gray-900 dark:text-white">50K+ users</span>. I
              care deeply about writing code that is{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">reliable</span>,{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">observable</span>, and
              built to last — not just code that works once.
            </p>

            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 relative">
              When I&apos;m not neck-deep in a system design problem, you&apos;ll find me on
              LeetCode convincing myself that dynamic programming is, in fact, approachable 😅.
            </p>
          </div>

          {/* Open to work */}
          <div className="rounded-2xl border border-dashed border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/10 px-6 py-4 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              🟢 Currently open to:
            </span>
            {OPEN_TO.map(({ label, color }) => (
              <span
                key={label}
                className={`text-xs font-semibold px-3 py-1 rounded-full border ${color}`}
              >
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Fun facts sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-3"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-gray-400">Quick facts</p>
          {FUN_FACTS.map(({ emoji, text }, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
              whileHover={{ x: 4 }}
              className="flex items-start gap-3 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950/70 px-4 py-3 cursor-default hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-sm transition-all"
            >
              <span className="text-xl leading-none mt-0.5">{emoji}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400 leading-snug">{text}</span>
            </motion.div>
          ))}

          {/* CTA */}
          <a
            href="mailto:ppillai4@asu.edu"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 px-4 py-3 text-sm font-semibold text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:shadow-md hover:shadow-violet-500/10 transition-all"
          >
            <span>✉️</span> Let&apos;s connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
