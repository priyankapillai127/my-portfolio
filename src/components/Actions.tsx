"use client";
import { Mail, ClipboardCheck, Printer, Download } from "lucide-react";
import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(()=>setCopied(false),1500); }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border hover:bg-black/5 dark:hover:bg-white/10"
    >
      <Mail className="h-4 w-4" />
      {copied ? <>Copied <ClipboardCheck className="h-4 w-4" /></> : "Copy email"}
    </button>
  );
}

export function PrintBtn() {
  return (
    <button onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border hover:bg-black/5 dark:hover:bg-white/10">
      <Printer className="h-4 w-4" /> Print
    </button>
  );
}

export function DownloadBtn({ href }: { href: string }) {
  return (
    <a href={href} download
       className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border hover:bg-black/5 dark:hover:bg-white/10">
      <Download className="h-4 w-4" /> Download PDF
    </a>
  );
}
