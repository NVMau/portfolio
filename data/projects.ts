export interface Project {
  id: string;
  name: string;
  description: string;
  descriptionVi: string;
  techStack: string[];
  category: "ai" | "backend" | "fullstack" | "automation";
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  badge?: string;
  badgeVi?: string;
  note?: string;
  noteVi?: string;
}

export const projects: Project[] = [
  {
    id: "eduverse",
    name: "Eduverse",
    description: "A production-grade microservices LMS with real-time chat, AI chatbot, and CI/CD pipeline",
    descriptionVi: "Nền tảng LMS microservices cấp production với chat real-time, AI chatbot và CI/CD pipeline",
    techStack: ["Go(Fiber)", "Java(SpringBoot)", "ReactJS", "MongoDB", "MySQL", "Kafka", "Qdrant", "WebSocket", "Docker"],
    category: "fullstack",
    githubUrl: "https://github.com/NVMau/SkillHub-Microservices",
    liveUrl: "https://eduversedev.me",
    isFeatured: true,
    badge: "🌟 Live Demo Available",
    badgeVi: "🌟 Demo trực tiếp",
  },
  {
    id: "trueprofit",
    name: "TrueProfit AI Assistant",
    description: "Consumer-facing AI chatbot with RAG architecture for eCommerce analytics on Shopify/TikTok Store",
    descriptionVi: "AI chatbot với kiến trúc RAG cho phân tích thương mại điện tử trên Shopify/TikTok Store",
    techStack: ["Go Fiber", "AWS Lambda", "Qdrant", "AI APIs", "RAG", "SQS/SNS"],
    category: "ai",
    isFeatured: true,
    note: "Professional project — no public repo",
    noteVi: "Dự án chuyên nghiệp — không có repo công khai",
  },
  {
    id: "skillhub-rag",
    name: "SkillHub — AI-Powered Learning Platform",
    description: "Microservices LMS with RAG model — semantic search across course materials, personalized learning paths, automated content analysis & context-aware AI assistant",
    descriptionVi: "Nền tảng LMS microservices với mô hình RAG — tìm kiếm ngữ nghĩa tài liệu, lộ trình học cá nhân hóa, phân tích nội dung tự động & AI assistant theo ngữ cảnh",
    techStack: ["Spring Boot", "RAG", "Vector DB", "LLM", "Kafka", "MongoDB", "Docker", "GitHub Actions"],
    category: "ai",
    githubUrl: "https://github.com/NVMau/SkillHub-Microservices",
    isFeatured: true,
    badge: "🧠 RAG Architecture",
    badgeVi: "🧠 Kiến trúc RAG",
  },
  {
    id: "tiktok-sync",
    name: "TikTok Shop Sync Server",
    description: "A Go-based synchronization server for TikTok Shop — real-time order sync via webhooks, inventory management, fulfillment & multi-shop OAuth integration",
    descriptionVi: "Server đồng bộ TikTok Shop viết bằng Go — đồng bộ đơn hàng real-time qua webhook, quản lý tồn kho, fulfillment & tích hợp OAuth đa shop",
    techStack: ["Go (Fiber)", "PostgreSQL", "Redis", "Asynq", "GORM", "Docker", "TikTok API"],
    category: "backend",
    githubUrl: "https://github.com/NVMau/tiktok-sync-service",
    isFeatured: true,
  },
  {
    id: "rpa-freelance",
    name: "RPA & Web Automation Services",
    description: "Freelance automation projects — building bots to interact with client web platforms via API calls and browser automation, handling repetitive business workflows at scale",
    descriptionVi: "Các dự án freelance tự động hóa — xây dựng bot tương tác với nền tảng web của khách hàng qua API và trình duyệt tự động, xử lý các quy trình nghiệp vụ lặp đi lặp lại",
    techStack: ["UiPath", "Python", "C#", "Playwright", "REST API", "Selenium"],
    category: "automation",
    isFeatured: true,
    badge: "🤖 Freelance",
    badgeVi: "🤖 Freelance",
    note: "Client projects under NDA — no public repo",
    noteVi: "Dự án khách hàng bảo mật NDA — không có repo công khai",
  },
];
