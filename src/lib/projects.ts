export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string; // live demo
  repo?: string; // github repo 'user/repo'
};

export const projects: Project[] = [
  {
    title: "Smart HealthConnect",
    blurb: "Healthcare platform for appointments, prescriptions, and records. Integrated REST APIs for scalable releases.",
    tags: ["Next.js", "MongoDB", "REST API"],
    href: "#",
    repo: "priyankapillai127/smart-healthconnect", // Placeholder based on username
  },
  {
    title: "Aerospace Maintenance Portal",
    blurb: "Scheduling dashboard that reduced reporting time by 40% through automation and alerts. Drove corrective actions across 5 operational areas.",
    tags: ["React", "Node.js", "Automation"],
  },
  {
    title: "Civic Issue Tracker",
    blurb: "Android app with Google Maps for reporting civic issues. Achieved ~80% geotagging accuracy and served 10K+ users.",
    tags: ["Android", "Java", "Google Maps"],
  },
];
