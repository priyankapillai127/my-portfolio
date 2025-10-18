"use client";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const links = [
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "education",  label: "Education" },
  { id: "skills",     label: "Skills" },
];

export default function TopNav() {
  const onClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-gray-950/70 border-b">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-semibold tracking-tight">
          Priyanka Pillai
        </button>
        <div className="flex items-center gap-3">
          {links.map(l => (
            <button key={l.id} onClick={() => onClick(l.id)}
              className="px-3 py-1.5 rounded-lg text-sm hover:bg-black/5 dark:hover:bg-white/10">
              {l.label}
            </button>
          ))}
          <Link
            href="/Resume"
            className="px-3 py-1.5 rounded-lg text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
