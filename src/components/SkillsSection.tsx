"use client";

import { motion, Variants } from "framer-motion";
import { skills } from "@/lib/resume";

const categories = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks & Libraries", items: skills.frameworks },
  { label: "Systems & Cloud", items: skills.systems },
  { label: "Databases & Tools", items: skills.databases },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight">Technical Skills</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {categories.map(({ label, items }, catIdx) => (
          <motion.div
            key={label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ delay: catIdx * 0.07 }}
            className="rounded-2xl border bg-white/60 dark:bg-gray-950/60 p-5 space-y-3"
          >
            <h3 className="text-xs font-bold tracking-widest uppercase text-blue-500 dark:text-blue-400">
              {label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full border bg-white/70 dark:bg-gray-900/40 dark:border-gray-700 text-gray-700 dark:text-gray-300"
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
