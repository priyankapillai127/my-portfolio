"use client";

import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import LiveCodeWallpaper from "@/components/LiveCodeWallpaper";
import { motion } from "framer-motion";

const NAME = "Priyanka Pillai";
const TITLE = "Software Engineer";
const EMAIL = "ppillai4@asu.edu";
const GITHUB = "priyankapillai127";
const LINKEDIN = "priyanka-pillai0712/";
const LEETCODE_URL = "https://leetcode.com/u/priyankapillai/";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <LiveCodeWallpaper />

      <motion.div
        className="mx-auto max-w-5xl px-4 py-20 md:py-32 grid md:grid-cols-[180px_1fr] gap-8 items-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Image src="/priyanka.jpg" alt={`${NAME} headshot`} fill className="object-cover" />
        </motion.div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 dark:from-blue-300 dark:to-purple-400">
              {NAME}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">{TITLE}</p>
          </div>

          <SocialLinks
            email={EMAIL}
            github={GITHUB}
            linkedin={LINKEDIN}
            leetcodeUrl={LEETCODE_URL}
          />

          <div className="flex gap-4 pt-4">
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
