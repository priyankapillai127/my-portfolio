"use client";
import Link from "next/link";

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

function A(props: React.ComponentProps<"a">) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border hover:bg-black/5 dark:hover:bg-white/10 ${props.className ?? ""}`}
    />
  );
}

export default function SocialLinks({
  email, github, linkedin, leetcodeUrl,
}: { email: string; github: string; linkedin: string; leetcodeUrl: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <A href={`mailto:${email}`}><Mail className="h-4 w-4" />Email</A>
      <A href={`https://github.com/${github}`}><Github className="h-4 w-4" />GitHub</A>
      <A href={`https://www.linkedin.com/in/${linkedin}/`}><Linkedin className="h-4 w-4" />LinkedIn</A>
      <A href={leetcodeUrl}><ExternalLink className="h-4 w-4" />LeetCode</A>
    </div>
  );
}
