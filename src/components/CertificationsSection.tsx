"use client";

import { motion, Variants } from "framer-motion";
import { certifications } from "@/lib/resume";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const issuerIcon: Record<string, string> = {
  "Amazon Web Services (AWS)": "☁",
  Edureka: "🎓",
};

export default function CertificationsSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-bold tracking-widest uppercase text-violet-400">Credentials</p>
        <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950/70 p-5 flex gap-3 items-start hover:border-violet-200 dark:hover:border-violet-800 hover:shadow-md hover:shadow-violet-500/5 transition-all"
          >
            <span className="text-xl mt-0.5 shrink-0">{issuerIcon[c.issuer] ?? "🏅"}</span>
            <div className="space-y-0.5 min-w-0">
              <p className="text-sm font-semibold leading-snug">{c.name}</p>
              <p className="text-xs text-gray-400">{c.issuer}</p>
              <p className="text-xs text-violet-400 font-medium">{c.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
