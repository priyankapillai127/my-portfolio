"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/lib/resume";

const categories = [
  { label: "Languages", items: skills.languages, icon: "{ }" },
  { label: "Frameworks & Libraries", items: skills.frameworks, icon: "⚡" },
  { label: "Systems & Cloud", items: skills.systems, icon: "☁" },
  { label: "Databases & Tools", items: skills.databases, icon: "⚙" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-400">Expertise</p>
        <h2 className="text-3xl font-bold tracking-tight">Technical Skills</h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {categories.map(({ label, items, icon }, i) => (
          <motion.div
            key={label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950/70 p-5 space-y-3 hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-md hover:shadow-violet-500/5 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">{icon}</span>
              <h3 className="text-xs font-bold tracking-widest uppercase text-violet-500 dark:text-violet-400">
                {label}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 group-hover:border-violet-100 dark:group-hover:border-violet-900 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
