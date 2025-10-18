export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string; // live demo URL
  repo?: string; // GitHub in "user/repo" format
};

export const projects: Project[] = [
  {
    title: "Smart HealthConnect",
    blurb: "Next.js + MongoDB app for appointments, prescriptions, and health records.",
    tags: ["Next.js", "MongoDB", "Tailwind"],
    href: "#",                      // put your live link
    repo: "your-github/healthconnect",
  },
  {
    title: "Aerospace Maintenance Portal",
    blurb: "Scheduling dashboard and alerts; reduced reporting time by 40%.",
    tags: ["React", "Node", "Azure"],
  },
  {
    title: "Civic Issue Tracker",
    blurb: "Android + Maps; geo-tagged incident reporting used by 10k+ users.",
    tags: ["Android", "Java", "Maps"],
  },
];
