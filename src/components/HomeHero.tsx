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
    <section className="relative">
      <LiveCodeWallpaper />

      <motion.div
        className="mx-auto max-w-5xl px-4 py-12 md:py-16 grid md:grid-cols-[160px_1fr] gap-6 items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div
          className="relative h-36 w-36 md:h-40 md:w-40 overflow-hidden rounded-2xl border bg-white/50 dark:bg-gray-900/40"
          whileHover={{ y: -2, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
        >
          <Image src="/priyanka.jpg" alt={`${NAME} headshot`} fill className="object-cover" />
        </motion.div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{NAME}</h1>
          <p className="text-gray-600 dark:text-gray-300">{TITLE}</p>

          <SocialLinks
            email={EMAIL}
            github={GITHUB}
            linkedin={LINKEDIN}
            leetcodeUrl={LEETCODE_URL}
          />

          <div className="flex gap-3 pt-2">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/Resume"
                className="px-4 py-2 rounded-lg border hover:bg-black/5 dark:hover:bg-white/10"
              >
                View Resume
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#projects"
                className="px-4 py-2 rounded-lg border hover:bg-black/5 dark:hover:bg-white/10"
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
