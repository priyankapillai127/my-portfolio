"use client";

import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import LiveCodeWallpaper from "@/components/LiveCodeWallpaper";
import { motion, type Variants, type Transition } from "framer-motion";

const NAME = "Priyanka Pillai";
const ROLE = "Software Engineer";
const TAGLINE = "SWE Intern @ Rocket Mortgage · MS IT @ ASU";
const BIO =
  "I build software that solves hard problems — from cloud-native microservices at Collins Aerospace to ML pipelines on AWS. Currently interning at Rocket Mortgage and looking for what's next.";
const EMAIL = "ppillai4@asu.edu";
const GITHUB = "priyankapillai127";
const LINKEDIN = "priyanka-pillai0712";
const LEETCODE_URL = "https://leetcode.com/u/priyankapillai/";

const STATS = [
  { label: "4+ yrs", sub: "Industry experience" },
  { label: "50K+", sub: "Users served" },
  { label: "1M+", sub: "Signals/day processed" },
];

const stagger: Transition = { staggerChildren: 0.1 };
const container: Variants = {
  hidden: {},
  show: { transition: stagger },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <LiveCodeWallpaper />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-10 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
      </div>

      <motion.div
        className="mx-auto max-w-5xl px-4 py-24 md:py-36 grid md:grid-cols-[220px_1fr] gap-12 items-center relative z-10 w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Avatar */}
        <motion.div variants={item} className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 blur-md opacity-40 scale-105" />
            <motion.div
              className="relative h-44 w-44 md:h-52 md:w-52 overflow-hidden rounded-full ring-2 ring-white/10 shadow-2xl"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <Image src="/priyanka.jpg" alt={`${NAME} headshot`} fill className="object-cover" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="space-y-6">
          <motion.div variants={item} className="space-y-1">
            <p className="text-sm font-semibold tracking-widest uppercase text-violet-400">
              {TAGLINE}
            </p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {NAME}
              </span>
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-medium">{ROLE}</p>
          </motion.div>

          <motion.p
            variants={item}
            className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg"
          >
            {BIO}
          </motion.p>

          {/* Stats */}
          <motion.div variants={item} className="flex gap-8">
            {STATS.map(({ label, sub }) => (
              <div key={sub}>
                <div className="text-xl font-bold text-violet-400">{label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{sub}</div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item}>
            <SocialLinks
              email={EMAIL}
              github={GITHUB}
              linkedin={LINKEDIN}
              leetcodeUrl={LEETCODE_URL}
            />
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/Resume"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all"
            >
              View Resume
            </Link>
            <Link
              href="#projects"
              className="px-6 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all"
            >
              Explore Projects
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
