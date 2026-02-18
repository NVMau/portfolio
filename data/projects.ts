export interface Project {
  id: string;
  name: string;
  description: string;
  descriptionVi: string;
  techStack: string[];
  category: "ai" | "backend" | "fullstack";
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
    id: "studyhub",
    name: "StudyHub — LMS with .NET 8",
    description: "Modern Learning Management System with role-based access, real-time tracking & grading",
    descriptionVi: "Hệ thống quản lý học tập hiện đại với phân quyền, theo dõi real-time và chấm điểm",
    techStack: [".NET 8", "C#", "ReactJS", "MySQL", "Cloudinary", "RESTful API"],
    category: "fullstack",
    githubUrl: "https://github.com/NVMau/StudyHub_.Net8",
    isFeatured: false,
  },
];
