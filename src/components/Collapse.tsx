"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Collapse({
  title, children, defaultOpen = true,
}: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="border rounded-xl">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3"
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`px-5 pb-5 ${open ? "block" : "hidden"}`}>{children}</div>
    </section>
  );
}
