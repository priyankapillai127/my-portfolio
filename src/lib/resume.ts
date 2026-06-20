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
  tags: string[];
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
  github: "https://github.com/priyankapillai127",
  linkedin: "https://www.linkedin.com/in/priyanka-pillai0712/",
  leetcode: "https://leetcode.com/u/priyankapillai/",
};

export const experiences: Experience[] = [
  {
    company: "ROCKET MORTGAGE",
    title: "Software Engineering Intern",
    location: "Detroit, MI",
    start: "May 2026",
    end: "Aug 2026",
    bullets: [
      "Shipped production features for a customer-facing financial platform using Angular, TypeScript, C#, and .NET, contributing to faster loan-processing workflows within an agile sprint cycle.",
      "Accelerated feature delivery by integrating AI-assisted development tools including GitHub Copilot, cutting debugging time and improving code quality on mortgage transaction systems.",
    ],
  },
  {
    company: "COLLINS AEROSPACE",
    title: "Lead Software Developer",
    location: "Bangalore, India",
    start: "Sep 2022",
    end: "Dec 2024",
    bullets: [
      "Architected and delivered RESTful APIs integrating federated aviation systems with external platforms, improving interoperability and reducing manual processes by 40%.",
      "Deployed cloud-native microservices on AWS and Azure supporting 50K+ active users; engineered low-latency endpoints with real-time monitoring and fault tolerance.",
      "Established CI/CD pipelines with Jenkins and GitLab, reducing deployment errors by 25% and cutting release cycles from two weeks to under five days.",
      "Eliminated performance bottlenecks and concurrency issues in multithreaded systems via advanced profiling techniques, improving uptime by 15%.",
    ],
  },
  {
    company: "TATA CONSULTANCY SERVICES",
    title: "System Engineer",
    location: "Bangalore, India",
    start: "Oct 2020",
    end: "Sep 2022",
    bullets: [
      "Developed scalable Spring Boot microservices processing 1M+ telemetry signals daily with high fault tolerance; applied algorithmic optimizations that eliminated throughput bottlenecks.",
      "Engineered RESTful APIs on a microservices architecture, cutting downtime event reporting latency from 15 minutes to under 2 minutes and improving system availability by 93%.",
      "Diagnosed and resolved memory leaks, race conditions, and concurrency bugs; delivered across 6 agile Scrum sprints with less than 2% defect rate.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Text2SQL — NL-to-SQL Pipeline with RAG & LLM Validation",
    tags: ["Python", "TypeScript", "FastAPI", "Next.js", "SQL", "AWS"],
    details: [
      "Engineered an end-to-end Text-to-SQL system with a FAISS-based RAG retrieval pipeline over 8,659 question–SQL pairs; implemented a Steiner tree algorithm for schema-grounded join-path construction across complex multi-table schemas.",
      "Achieved 74.9% execution accuracy on Spider and 62.1% on CoSQL with the full Qwen2.5-Coder + RAG + Repair + Semantic Validation pipeline; failure mode analysis pinpointed filter conditions as the dominant error class (50%).",
    ],
  },
  {
    name: "Intelligent Health Monitoring & Heart Attack Prediction System",
    tags: ["Python", "AWS", "Apache Spark", "XGBoost", "SageMaker", "Lambda"],
    details: [
      "Architected an end-to-end distributed ML pipeline on AWS: streamed simulated wearable vitals into S3, processed 7-day patient data via Apache Spark on EMR, and trained an XGBoost classifier on SageMaker to predict heart attack risk.",
      "Launched a real-time SageMaker inference endpoint; automated high-risk patient alerts via AWS Lambda and SNS; surfaced query results through Athena SQL — covering the full data engineering, model training, and alerting lifecycle.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "ARIZONA STATE UNIVERSITY",
    degree: "Master of Science, Information Technology",
    start: "Jan 2025",
    end: "Dec 2026",
  },
  {
    school: "BASAVESHWAR ENGINEERING COLLEGE",
    degree: "Bachelor of Engineering, Computer Science and Engineering",
    start: "Aug 2016",
    end: "Aug 2020",
  },
];

export const skills = {
  languages: ["Python", "Java", "C#", "TypeScript", "JavaScript", "SQL", "C", "C++", "HTML5", "CSS3"],
  frameworks: ["Angular", ".NET", "React", "Node.js", "Spring Boot", "FastAPI", "Next.js", "Django"],
  systems: ["Distributed Systems", "Microservices", "AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "REST APIs"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "FAISS", "Git", "Jenkins", "Postman"],
};
