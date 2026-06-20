"use client";

import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import LiveCodeWallpaper from "@/components/LiveCodeWallpaper";
import { motion } from "framer-motion";

const NAME = "Priyanka Pillai";
const TITLE = "Software Engineer";
const BIO =
  "MS CS student at Arizona State University and incoming SWE Intern at Rocket Mortgage. Previously a Lead Software Developer at Collins Aerospace, building cloud-native microservices on AWS & Azure for 50K+ users. I love turning complex systems problems into clean, reliable software.";
const EMAIL = "ppillai4@asu.edu";
const GITHUB = "priyankapillai127";
const LINKEDIN = "priyanka-pillai0712/";
const LEETCODE_URL = "https://leetcode.com/u/priyankapillai/";

const HIGHLIGHTS = [
  { label: "4+ yrs", sub: "Industry experience" },
  { label: "50K+", sub: "Users served" },
  { label: "1M+", sub: "Signals/day processed" },
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <LiveCodeWallpaper />

      <motion.div
        className="mx-auto max-w-5xl px-4 py-20 md:py-32 grid md:grid-cols-[200px_1fr] gap-10 items-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Avatar */}
        <motion.div
          className="relative h-44 w-44 md:h-52 md:w-52 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl mx-auto md:mx-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image src="/priyanka.jpg" alt={`${NAME} headshot`} fill className="object-cover" />
        </motion.div>

        {/* Text content */}
        <div className="space-y-5">
          <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 dark:from-blue-300 dark:to-purple-400">
              {NAME}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">{TITLE}</p>
          </div>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
            {BIO}
          </p>

          {/* Stats row */}
          <div className="flex gap-6">
            {HIGHLIGHTS.map(({ label, sub }) => (
              <div key={sub} className="text-center">
                <div className="text-lg font-bold text-blue-500 dark:text-blue-400">{label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{sub}</div>
              </div>
            ))}
          </div>

          <SocialLinks
            email={EMAIL}
            github={GITHUB}
            linkedin={LINKEDIN}
            leetcodeUrl={LEETCODE_URL}
          />

          <div className="flex gap-4 pt-2">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/Resume"
                className="px-6 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-blue-500/20"
              >
                View Resume
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#projects"
                className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                Explore Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
