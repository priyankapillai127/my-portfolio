export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Text2SQL — NL-to-SQL Pipeline",
    blurb:
      "End-to-end natural language to SQL system using a FAISS-based RAG pipeline over 8,659 question–SQL pairs. Achieved 74.9% execution accuracy on the Spider benchmark with Qwen2.5-Coder, custom schema-grounded join-path construction via a Steiner tree algorithm, and an LLM-based semantic validation + repair loop.",
    tags: ["Python", "TypeScript", "FastAPI", "Next.js", "FAISS", "RAG", "LLM", "AWS"],
  },
  {
    title: "Heart Attack Prediction System",
    blurb:
      "Distributed ML pipeline on AWS: streamed simulated wearable vitals into S3, processed 7-day patient data with Apache Spark on EMR, and trained an XGBoost classifier on SageMaker. Deployed a real-time inference endpoint with automated high-risk alerts via Lambda & SNS, and surfaced results through Athena SQL.",
    tags: ["Python", "AWS", "Apache Spark", "XGBoost", "SageMaker", "Lambda", "SNS"],
  },
  {
    title: "Smart HealthConnect",
    blurb:
      "Full-stack healthcare platform for managing appointments, prescriptions, and patient records. Built with Next.js and MongoDB, integrated REST APIs tested with Postman, and shipped iteratively with GitHub-based collaboration.",
    tags: ["Next.js", "MongoDB", "REST API", "Node.js"],
  },
];
