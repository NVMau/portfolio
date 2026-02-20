export interface Skill {
  name: string;
  level?: number; // 1-5 stars
}

export interface SkillCategory {
  id: string;
  titleKey: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    titleKey: "languages",
    skills: [
      { name: "Golang", level: 5 },
      { name: "Java", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "C#", level: 3 },
      { name: "Gin" },
      { name: "Fiber" },
      { name: "Spring Boot" },
      { name: ".NET 8" },
      { name: "ReactJS" },
    ],
  },
  {
    id: "databases",
    titleKey: "databases",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "DynamoDB" },
      { name: "Qdrant" },
    ],
  },
  {
    id: "cloud",
    titleKey: "cloud",
    skills: [
      { name: "AWS Lambda" },
      { name: "AWS SQS/SNS" },
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "Kafka" },
      { name: "Serverless" },
    ],
  },
  {
    id: "ai",
    titleKey: "ai",
    skills: [
      { name: "RAG Architecture" },
      { name: "LLM Integration" },
      { name: "Qdrant Vector DB" },
      { name: "Prompt Engineering" },
      { name: "AI APIs" },
    ],
  },
  {
    id: "automation",
    titleKey: "automation",
    skills: [
      { name: "UiPath" },
      { name: "Playwright" },
      { name: "Selenium" },
      { name: "Web Scraping" },
      { name: "API Automation" },
    ],
  },
  {
    id: "tools",
    titleKey: "tools",
    skills: [
      { name: "Git" },
      { name: "Swagger/OpenAPI" },
      { name: "Cloudinary" },
      { name: "WebSocket" },
      { name: "REST APIs" },
      { name: "MCP Protocol" },
    ],
  },
];
