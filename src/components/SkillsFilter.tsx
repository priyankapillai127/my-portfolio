"use client";
import { useMemo, useState } from "react";

export default function SkillsFilter({ groups }: { groups: Record<string, string[]> }) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return groups;
    const out: Record<string, string[]> = {};
    for (const [k, arr] of Object.entries(groups)) {
      const hits = arr.filter(s => s.toLowerCase().includes(query));
      if (hits.length) out[k] = hits;
    }
    return out;
  }, [q, groups]);

  return (
    <div className="space-y-4">
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Filter skills (e.g., Next.js, Docker)"
        className="w-full rounded-lg border px-3 py-2 bg-transparent"
      />
      <div className="grid sm:grid-cols-2 gap-4 text-sm">
        {Object.entries(filtered).map(([k, arr]) => (
          <div key={k}>
            <div className="font-medium mb-1">{k}</div>
            <div className="flex flex-wrap gap-2">
              {arr.map(s => (
                <span key={s} className="px-2 py-1 rounded-full border">{s}</span>
              ))}
            </div>
          </div>
        ))}
        {!Object.keys(filtered).length && <p className="text-gray-500">No matches.</p>}
      </div>
    </div>
  );
}
