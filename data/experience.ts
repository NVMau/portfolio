export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  highlights: string[];
  highlightsVi: string[];
  techTags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "mobifone",
    company: "MobiFone Plus",
    role: "Backend Engineer",
    period: "06/2025 – Present",
    isCurrent: true,
    highlights: [
      "DataCode & VinFastSource platforms development",
      "Go (Gin) + Java 21 (Spring Boot) microservices architecture",
      "MCP service implementation for AI integration",
      "Multi-layer caching strategy: in-memory + Redis",
    ],
    highlightsVi: [
      "Phát triển nền tảng DataCode & VinFastSource",
      "Kiến trúc microservices Go (Gin) + Java 21 (Spring Boot)",
      "Triển khai MCP service cho tích hợp AI",
      "Chiến lược caching đa lớp: in-memory + Redis",
    ],
    techTags: ["Go", "Java 21", "Spring Boot", "Redis", "MySQL", "MongoDB", "Kafka", "Docker"],
  },
  {
    id: "firegroup",
    company: "Fire Group Technology",
    role: "Backend AI Engineer",
    period: "12/2024 – 5/2025",
    isCurrent: false,
    highlights: [
      "TrueProfit SaaS analytics platform for eCommerce",
      "Serverless microservices on AWS Lambda",
      "AI Assistant with RAG + Qdrant vector database",
      "PII redaction, rate limiting, session memory management",
    ],
    highlightsVi: [
      "Nền tảng phân tích SaaS TrueProfit cho thương mại điện tử",
      "Microservices serverless trên AWS Lambda",
      "AI Assistant với RAG + Qdrant vector database",
      "Quản lý xóa PII, rate limiting, session memory",
    ],
    techTags: ["Go Fiber", "AWS Lambda", "Qdrant", "RAG", "AI APIs", "SQS/SNS"],
  },
  {
    id: "hqsoft",
    company: "HQSOFT Co., Ltd.",
    role: "Web Developer Intern",
    period: "9/2024 – 12/2024",
    isCurrent: false,
    highlights: [
      "Backoffice web system development",
      "CRUD APIs and web interface implementation",
    ],
    highlightsVi: [
      "Phát triển hệ thống web backoffice",
      "Triển khai CRUD APIs và giao diện web",
    ],
    techTags: ["Java", "SQL Server", "HTML/CSS", "JavaScript"],
  },
];
