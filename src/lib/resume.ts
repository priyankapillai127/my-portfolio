// src/lib/resume.ts
export type Experience = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Project = {
  name: string;
  details: string[];
};

export type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
};

export const profile = {
  name: "PRIYANKA PILLAI",
  location: "Tempe, AZ",
  phone: "(623) 273-0882",
  email: "ppillai4@asu.edu",
  linkedin: "https://www.linkedin.com/in/your-link", // put your real URL
};

export const experiences: Experience[] = [
  {
    company: "COLLINS AEROSPACE",
    title: "Lead Software Developer",
    location: "Bangalore, INDIA",
    start: "Sep 2022",
    end: "Dec 2024",
    bullets: [
      "Led RESTful API design integrating aviation systems with external platforms; reduced manual processes by ~40%.",
      "Built and deployed cloud-native microservices on Azure for scalable, fault-tolerant systems with real-time monitoring.",
      "Established CI/CD with Jenkins & GitLab; cut deployment errors 25% and release cycles from 2 weeks to <5 days.",
      "Designed OOP-driven microservice architecture; 40% lower data-processing latency for avionics workloads.",
      "Shipped scalable web apps that improved system efficiency by ~30% and served 50K+ active users yearly.",
      "Resolved performance & concurrency issues using profilers; increased uptime by ~15%.",
    ],
  },
  {
    company: "TATA CONSULTANCY SERVICES",
    title: "System Engineer",
    location: "Bangalore, INDIA",
    start: "Oct 2020",
    end: "Sep 2022",
    bullets: [
      "Built Spring Boot services processing 1M+ telemetry signals/day from GE locomotives.",
      "Constructed REST APIs & microservices; cut downtime event reporting latency to <2 minutes (93% availability).",
      "Automated tests with JUnit; fixed memory leaks and race conditions to harden reliability.",
      "Created reusable backend modules; reduced duplication across 3 enterprise apps and dev effort by ~25%.",
      "Collaborated in 8-member Scrum squad; improved delivery across 6 sprints with <2% defect rate.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Civic Issue Tracker — Android",
    details: [
      "Built Java + Google Maps app to report civic issues; ~80% geotagging accuracy and 10K+ users via cloud backend.",
    ],
  },
  {
    name: "Aerospace Maintenance Management Portal",
    details: [
      "Led 2-person team on maintenance scheduling dashboard; 40% reporting time reduction with automation/alerts.",
      "Performed internal audits & FAA gap analyses; drove corrective actions across 5 operational areas.",
    ],
  },
  {
    name: "Smart HealthConnect — Healthcare Platform",
    details: [
      "Developed Next.js + MongoDB app for appointments, prescriptions, and records.",
      "Integrated REST APIs (tested with Postman) and collaborated via GitHub for scalable releases.",
    ],
  },
];

export const education: Education[] = [
  { school: "ARIZONA STATE UNIVERSITY", degree: "M.S., Information Technology", start: "Jan 2025", end: "Dec 2026" },
  { school: "BASAVESHWAR ENGINEERING COLLEGE", degree: "B.E., Computer Science & Engineering", start: "Aug 2016", end: "Aug 2020" },
];

export const skills = {
  languages: ["Python", "C", "C++", "Java", "SQL", "JavaScript", "HTML5", "CSS3"],
  frameworks: ["Django", "ReactJS", "Angular", "NodeJS", ".NET", "Tableau", "AI/ML"],
  tools: ["Kubernetes", "Docker", "Git", "Jenkins", "PostgreSQL", "MySQL", "SQLite"],
  platforms: ["Linux", "Windows", "MongoDB", "Oracle", "AWS"],
  soft: ["Leadership", "Project Management", "Public Speaking", "Task Management", "Communication"],
};
