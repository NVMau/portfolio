# 🚀 PROMPT: Build Portfolio Website for Nguyen Van Mau — Backend / AI Developer

> **Dành cho:** Cursor AI, Claude Code, Windsurf, GitHub Copilot Agent, hoặc bất kỳ coding agent nào
> **Mục tiêu:** Tạo một portfolio website hoàn chỉnh, production-ready, cho freelance clients xem

---

## 📌 CONTEXT & OWNER INFO

Tên: **Nguyen Van Mau (vmaudev)**
Role: **Backend Developer & AI Engineer**
Email: nmau4669@gmail.com
GitHub: https://github.com/NVMau
LinkedIn: https://www.linkedin.com/in/vmaudev
Phone: 0834223826

**Summary (dùng cho Hero section):**
> "Aspiring Back-End Developer with a solid foundation in Golang and Java, and a strong interest in practical AI applications. Eager to gain hands-on experience on real-world systems with a focus on performance, scalability, and reliability."

---

## 🎯 TECH STACK (Bắt buộc dùng)

| Layer | Công nghệ | Lý do |
|-------|-----------|-------|
| **Framework** | **Next.js 14 (App Router)** | SEO tốt, SSG/SSR, phổ biến nhất 2025 |
| **Language** | TypeScript | Type-safe, professional |
| **Styling** | **Tailwind CSS v3 + shadcn/ui** | Nhanh, đẹp, consistent |
| **Animation** | **Framer Motion** | Smooth animations, scroll effects |
| **Icons** | Lucide React + React Icons | Đẹp, nhẹ |
| **3D / Visual FX** | **Three.js hoặc @react-three/fiber** | Hero section ấn tượng |
| **i18n** | **next-intl** | Chuyển đổi VN/EN hoàn hảo |
| **Form** | React Hook Form + EmailJS | Contact form không cần backend |
| **Deployment** | **Vercel** (free tier) | 1-click deploy, custom domain |
| **Font** | Google Fonts: `Syne` (display) + `JetBrains Mono` (code) | Tech/AI aesthetic |

---

## 🎨 DESIGN DIRECTION — "DARK AI TERMINAL"

### Aesthetic:
- **Theme:** Dark mode là mặc định (có toggle light/dark)
- **Vibe:** Retro-futuristic Terminal + Modern AI Dashboard
- **Inspiration:** Linear.app + Vercel dashboard + Matrix terminal
- **KHÔNG dùng:** Purple gradient trắng nhàm chán, Inter font, layout cookie-cutter

### Color Palette (CSS variables):
```css
--bg-primary: #0a0a0f        /* Near-black */
--bg-secondary: #111118      /* Cards */
--bg-card: #16161e           /* Elevated cards */
--accent-primary: #00d9ff    /* Cyan neon — chủ đạo */
--accent-secondary: #7c3aed  /* Purple — phụ */
--accent-green: #00ff88      /* Green terminal */
--text-primary: #e2e8f0
--text-secondary: #94a3b8
--text-muted: #475569
--border: rgba(0,217,255,0.15)
--glow: 0 0 20px rgba(0,217,255,0.3)
```

### Typography:
- **Display/Heading:** `Syne` (700, 800) — geometric, futuristic
- **Body:** `Inter` (400, 500) — clean readable
- **Code/Terminal elements:** `JetBrains Mono` — for tech skill tags, code snippets

### Visual Effects (PHẢI CÓ):
1. **Particle/Grid Background** — animated dot grid hoặc particle network ở Hero
2. **Glowing cursor trail** — subtle cyan glow theo con trỏ
3. **Typing animation** — typewriter effect ở hero subtitle
4. **Gradient mesh** — subtle animated gradient blob ở background
5. **Glass morphism cards** — backdrop-blur + semi-transparent borders
6. **Scroll-triggered animations** — fade up, stagger khi scroll vào viewport
7. **Neon glow hover** — các button/card glow khi hover
8. **Terminal-style** skill badges — `[Go]` `[Kafka]` kiểu code block

---

## 🗂️ CẤU TRÚC SECTIONS (theo thứ tự)

### 1. 🌐 NAVBAR
```
- Logo: "vmau.dev" hoặc "<NVM />" dạng code tag
- Links: Home | About | Experience | Projects | Skills | Contact
- Language toggle: 🇻🇳 VN / 🇬🇧 EN (dùng next-intl)
- Dark/Light mode toggle
- CTA button: "Hire Me →" (glow effect)
- Mobile: Hamburger menu với slide-in drawer
- Sticky + blur backdrop khi scroll
```

### 2. 🦸 HERO SECTION
```
Layout: Full viewport height (100vh)

Left side:
  - Greeting badge: "👋 Available for freelance" (blinking dot xanh)
  - H1: "Hi, I'm Nguyen Van Mau"
  - H2 (typewriter): cycles through:
      "Backend Developer"
      "AI Engineer"  
      "Microservices Architect"
      "Go & Java Specialist"
  - Paragraph: summary từ CV
  - CTA buttons: 
      Primary: "View My Work →" (scroll to Projects)
      Secondary: "Download CV" (link PDF)
  - Social links: GitHub | LinkedIn | Email (icon buttons)

Right side / Background:
  - Animated 3D element: rotating cube/sphere made of floating tech logos
    HOẶC interactive particle network
  - Floating code snippets: pseudo terminal window với go code
  - Stats floating cards: "2+ Years Exp" | "10+ Projects" | "3 Companies"
```

### 3. 👨‍💻 ABOUT SECTION
```
- Split layout: Photo (left) + Text (right)
- Ảnh: placeholder circle với initials "NVM" hoặc để slot cho ảnh thật
- Text: 2-3 đoạn về bản thân, passion, approach
- "What I do" — 3 icon cards:
    🔧 Backend Systems (Go, Java, microservices)
    🤖 AI Integration (RAG, LLM, chatbots)  
    ☁️ Cloud & DevOps (AWS, Docker, Kafka)
- Fun facts / Quick stats:
    📍 Ho Chi Minh City, Vietnam
    🎓 CS - HCMOU (2021-2025)
    💼 Currently: MobiFone Plus
    ⚡ Passionate about: Performance & Scalability
```

### 4. 💼 EXPERIENCE SECTION (Timeline)
```
Layout: Vertical timeline với alternating left/right cards

Entry 1 — MobiFone Plus | Backend Engineer (06/2025 – Present)
  Badge: "Current" (glowing green)
  Highlights:
  - DataCode & VinFastSource platforms
  - Go (Gin) + Java 21 (Spring Boot) microservices
  - MCP service implementation
  - Multi-layer caching: in-memory + Redis
  Tech tags: [Go] [Java 21] [Spring Boot] [Redis] [MySQL] [MongoDB] [Kafka] [Docker]

Entry 2 — Fire Group Technology | Backend AI Engineer (12/2024 – 5/2025)
  Highlights:
  - TrueProfit SaaS analytics platform
  - Serverless microservices on AWS Lambda
  - AI Assistant với RAG + Qdrant vector DB
  - PII redaction, rate limiting, session memory
  Tech tags: [Go Fiber] [AWS Lambda] [Qdrant] [RAG] [AI APIs] [SQS/SNS]

Entry 3 — HQSOFT Co., Ltd. | Web Developer Intern (9/2024 – 12/2024)
  Highlights:
  - Backoffice web system
  - CRUD APIs, web interfaces
  Tech tags: [Java] [SQL Server] [HTML/CSS] [JavaScript]

Timeline visual: vertical line với glowing dots, animated khi scroll
```

### 5. 🚀 PROJECTS SECTION (Featured)
```
Layout: 3-column grid (desktop) → 1-column (mobile)
Filter tabs: All | AI/ML | Backend | Full-Stack

Project Card gồm:
  - Preview image/screenshot (hoặc mockup placeholder với tech icons)
  - Project name (bold)
  - Short description (2 lines)
  - Tech stack badges
  - Links: [GitHub →] [Live Demo →]
  - Hover: card lifts + glow border

Projects list:

🔵 Eduverse — Microservices Learning Platform (FEATURED)
  Description: "A production-grade microservices LMS with real-time chat, AI chatbot, and CI/CD pipeline"
  Tech: Go(Fiber), Java(SpringBoot), ReactJS, MongoDB, MySQL, Kafka, Qdrant, WebSocket, Docker
  Links: https://eduversedev.me | https://github.com/NVMau/SkillHub-Microservices
  Highlight badge: "🌟 Live Demo Available"

🔵 TrueProfit AI Assistant (@ Fire Group Technology)
  Description: "Consumer-facing AI chatbot with RAG architecture for eCommerce analytics on Shopify/TikTok Store"
  Tech: Go Fiber, AWS Lambda, Qdrant, AI APIs, RAG, SQS/SNS
  Note: "Professional project — no public repo"

🔵 StudyHub — LMS with .NET 8
  Description: "Modern Learning Management System with role-based access, real-time tracking & grading"
  Tech: .NET 8, C#, ReactJS, MySQL, Cloudinary, RESTful API
  Link: https://github.com/NVMau/StudyHub_.Net8

(Reserve 1 empty "Coming Soon" card để sau thêm)
```

### 6. 🛠️ SKILLS SECTION
```
Layout: Categorized grid với animated progress/radar chart

Category 1 — Languages & Frameworks
  [Golang ★★★★★] [Java ★★★★☆] [JavaScript ★★★☆☆] [C# ★★★☆☆]
  [Gin] [Fiber] [Spring Boot] [.NET 8] [ReactJS]

Category 2 — Databases & Storage
  [MySQL] [MongoDB] [Redis] [DynamoDB] [Qdrant (Vector DB)]

Category 3 — Cloud & DevOps
  [AWS Lambda] [AWS SQS/SNS] [Docker] [GitHub Actions] [Kafka] [Serverless Framework]

Category 4 — AI / ML Stack
  [RAG Architecture] [LLM Integration] [Qdrant Vector DB] [Prompt Engineering] [AI APIs]

Category 5 — Tools
  [Git] [Swagger/OpenAPI] [Cloudinary] [WebSocket] [REST APIs] [MCP Protocol]

Visual: 
  - Skill badges dạng terminal: `go` `kafka` `qdrant`
  - Hoverable tooltips giải thích experience level
  - Animated fill bars hoặc hexagon radar chart cho categories chính
```

### 7. 📊 STATS / METRICS SECTION (Optional nhưng ấn tượng)
```
Animated counters (count-up khi scroll into view):
  2+    Years of Experience
  10+   Projects Completed  
  3     Companies Worked
  5+    Tech Stacks Mastered
  ∞     Lines of Code Written

Background: animated number matrix / code rain subtle
```

### 8. 💬 TESTIMONIALS / SOCIAL PROOF (Placeholder)
```
- 2-3 placeholder testimonial cards với [Photo] + name + company + quote
- Note trong code: "// TODO: Replace with real testimonials"
- Carousel/slider với auto-play
```

### 9. 📬 CONTACT SECTION
```
Layout: Split — Left (info) + Right (form)

Left:
  - "Let's Work Together" heading
  - Availability badge: "✅ Available for freelance projects"
  - Contact info cards:
      📧 nmau4669@gmail.com (clickable)
      📍 Ho Chi Minh City, Vietnam
      💼 Open to: Freelance job
  - Social links: GitHub | LinkedIn
  - Response time: "Usually responds within 24 hours"

Right (Contact Form):
  Fields: Name | Email | Subject | Budget (optional) | Message
  - EmailJS integration (no backend needed)
  - Success/error toast notifications
  - "Send Message 🚀" button với loading state
```

### 10. 🦶 FOOTER
```
- Logo + tagline: "Building reliable systems, one service at a time."
- Quick links
- Copyright: © 2025 Nguyen Van Mau. Built with Next.js & ❤️
- Back to top button (smooth scroll)
```

---

## 🌏 I18N — BILINGUAL (VN / EN)

### Setup:
```
Dùng: next-intl
Cấu trúc:
  /messages/en.json
  /messages/vi.json

Routing: 
  - URL-based: /en/... và /vi/...
  - HOẶC cookie-based (không đổi URL) — ưu tiên cái này cho portfolio
```

### Nội dung cần dịch:
```json
// en.json (example keys)
{
  "nav": {
    "home": "Home",
    "about": "About",
    "experience": "Experience",
    "projects": "Projects",
    "skills": "Skills",
    "contact": "Contact",
    "hire": "Hire Me"
  },
  "hero": {
    "greeting": "Hi, I'm",
    "available": "Available for freelance",
    "cta_work": "View My Work",
    "cta_cv": "Download CV",
    "roles": ["Backend Developer", "AI Engineer", "Microservices Architect"]
  },
  "about": { ... },
  "experience": { ... }
  // ... full translation
}
```

```json
// vi.json
{
  "nav": {
    "home": "Trang chủ",
    "about": "Về tôi",
    "experience": "Kinh nghiệm",
    "projects": "Dự án",
    "skills": "Kỹ năng",
    "contact": "Liên hệ",
    "hire": "Thuê tôi"
  },
  "hero": {
    "greeting": "Xin chào, tôi là",
    "available": "Sẵn sàng nhận dự án freelance",
    "cta_work": "Xem dự án",
    "cta_cv": "Tải CV",
    "roles": ["Backend Developer", "AI Engineer", "Kiến trúc Microservices"]
  }
  // ... full translation
}
```

---

## ✨ ANIMATIONS & INTERACTIONS (CHI TIẾT)

```
1. PAGE LOAD:
   - Logo fade in (0ms)
   - Nav links stagger in từ trái (200ms delay each)
   - Hero text: slide up + fade in
   - Hero visual: scale up từ 0.8 + fade in

2. SCROLL ANIMATIONS (Framer Motion + IntersectionObserver):
   - Section headings: slide up khi vào viewport
   - Cards: stagger fade-up (delay 100ms mỗi card)
   - Timeline items: slide từ trái/phải xen kẽ
   - Stats: count-up khi vào viewport

3. HOVER EFFECTS:
   - Navbar links: underline slide từ trái
   - Project cards: translate-y(-8px) + box-shadow glow
   - Skill badges: glow + scale(1.05)
   - Buttons: glow pulse effect
   - Social icons: rotate + scale

4. CURSOR (Desktop only):
   - Custom cursor: small dot + larger outer ring
   - Trên links/buttons: outer ring mở rộng + fill
   - Color: cyan #00d9ff

5. BACKGROUND EFFECTS:
   - Hero: animated particle canvas (Three.js hoặc tsParticles)
   - Sections: subtle grain texture overlay (CSS)
   - Cards: glassmorphism (backdrop-filter: blur)
```

---

## 📱 RESPONSIVE REQUIREMENTS

```
Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px  
  - Desktop: > 1024px

Mobile-specific:
  - Hamburger menu với drawer
  - Single column layouts
  - Touch-friendly tap targets (min 44px)
  - No hover-only interactions
  - Reduced animations (prefers-reduced-motion)
  - Language toggle trong mobile menu
```

---

## ⚡ PERFORMANCE & SEO

```
Performance:
  - Next.js Image optimization (next/image)
  - Font preloading
  - Code splitting tự động (Next.js)
  - Lazy load sections below the fold
  - Target: Lighthouse score > 90

SEO:
  - Meta tags đầy đủ (title, description, OG tags)
  - og:image — custom social preview image
  - Structured data (JSON-LD) cho Person schema
  - Sitemap.xml
  - robots.txt

Meta tags mẫu:
  title: "Nguyen Van Mau | Backend Developer & AI Engineer"
  description: "Backend Developer specializing in Go, Java microservices, and AI integration. Available for freelance projects."
  og:title: "vmau.dev — Backend & AI Engineer Portfolio"
```

---

## 📁 PROJECT STRUCTURE

```
portfolio-nvmau/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── ProjectCard.tsx
│   │   ├── SkillBadge.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── StatCounter.tsx
│   │   └── LanguageToggle.tsx
│   └── effects/
│       ├── ParticleBackground.tsx
│       ├── TypewriterText.tsx
│       ├── CustomCursor.tsx
│       └── ScrollProgress.tsx
├── data/
│   ├── experience.ts      ← Dữ liệu timeline
│   ├── projects.ts        ← Dữ liệu projects
│   └── skills.ts          ← Dữ liệu skills
├── messages/
│   ├── en.json
│   └── vi.json
├── public/
│   ├── cv/NVMau_CV.pdf    ← CV để download
│   └── images/
├── lib/
│   └── utils.ts
└── ...config files
```

---

## 🔧 ADDITIONAL FEATURES (Nên có)

```
1. SCROLL PROGRESS BAR
   - Thin line ở top của trang
   - Màu cyan, fill theo scroll progress

2. "CURRENTLY PLAYING" WIDGET (optional/fun)
   - Spotify-style widget ở corner
   - Mock data hoặc kết nối Spotify API

3. EASTER EGG TERMINAL
   - Nhấn Ctrl+` để mở mini terminal
   - Gõ: help, about, skills, contact → show info
   - Pure fun/personality factor

4. CV DOWNLOAD TRACKING
   - Track clicks với Vercel Analytics (free)
   - Hiện "CV downloaded X times" (localStorage counter)

5. DARK/LIGHT MODE
   - Toggle với smooth transition
   - Persist preference (localStorage)
   - Default: dark

6. READING PROGRESS (Blog ready)
   - Cấu trúc sẵn /blog route dù chưa có bài
   - "Coming soon" page

7. OPEN GRAPH IMAGE
   - Tạo dynamic OG image với Next.js ImageResponse
   - Hiện tên + role + avatar khi share link

8. CONTACT FORM SUCCESS
   - Confetti animation khi submit thành công
   - EmailJS gửi email thật về nmau4669@gmail.com
```

---

## 🚀 DEPLOYMENT & SETUP

```bash
# 1. Create project
npx create-next-app@latest portfolio-nvmau --typescript --tailwind --app

# 2. Install dependencies
npm install framer-motion next-intl lucide-react react-icons
npm install @emailjs/browser
npm install three @react-three/fiber @react-three/drei  # nếu dùng 3D
npm install react-hook-form
npm install clsx tailwind-merge  # utility

# 3. shadcn/ui setup
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge dialog toast

# 4. Deploy
# Push to GitHub → Connect to Vercel → Auto deploy
# Custom domain: vmau.dev (mua ở Namecheap ~$10/year)
```

---

## 📋 CHECKLIST CHO CODING AGENT

```
PHASE 1 — Setup & Structure
[ ] Khởi tạo Next.js 14 + TypeScript + Tailwind
[ ] Cài đặt tất cả dependencies
[ ] Setup next-intl với en.json + vi.json
[ ] Tạo CSS variables + Tailwind config
[ ] Import fonts: Syne + JetBrains Mono

PHASE 2 — Core Components  
[ ] Navbar (sticky, blur, mobile menu, lang toggle)
[ ] Footer
[ ] CustomCursor component
[ ] ParticleBackground/ThreeJS hero visual
[ ] TypewriterText component
[ ] ScrollProgress bar

PHASE 3 — Sections (theo thứ tự)
[ ] Hero section
[ ] About section
[ ] Experience timeline
[ ] Projects grid với filter
[ ] Skills với categories
[ ] Stats counter
[ ] Contact form + EmailJS
[ ] Footer

PHASE 4 — Polish
[ ] Framer Motion animations cho tất cả sections
[ ] Dark/Light mode toggle
[ ] Responsive check (mobile, tablet, desktop)
[ ] SEO meta tags + JSON-LD
[ ] Performance optimization
[ ] Deploy to Vercel
```

---

## 💡 LƯU Ý QUAN TRỌNG CHO AGENT

```
1. DATA SEPARATION: Tất cả content (text, projects, experience) 
   phải để trong /data/ files, KHÔNG hardcode trong components.
   
2. TYPE SAFETY: Định nghĩa TypeScript interfaces cho mọi data shape.

3. TRANSLATIONS: MỌI text visible đều phải qua useTranslations() hook.
   Không hardcode tiếng Anh/Việt trong components.

4. ACCESSIBILITY: 
   - alt text cho images
   - aria-label cho icon buttons
   - keyboard navigation
   - focus styles visible

5. ANIMATION PERFORMANCE:
   - Dùng transform/opacity (GPU accelerated)
   - will-change chỉ khi cần
   - Respect prefers-reduced-motion

6. MOBILE FIRST: Code mobile styles trước, desktop sau.

7. EMAIL SETUP: 
   - Tạo account EmailJS.com (free)
   - SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY → .env.local
   - Template gửi về nmau4669@gmail.com

8. PLACEHOLDER CONTENT:
   - Ảnh profile: dùng initials avatar hoặc placeholder
   - Testimonials: mark clearly là placeholder
   - Blog: "Coming Soon" page
```

---

## 🎯 KẾT QUẢ MONG MUỐN

Sau khi hoàn thành, portfolio phải đạt:
- ✅ Load time < 3s trên mobile 3G
- ✅ Lighthouse Performance > 90
- ✅ Lighthouse SEO = 100
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Bilingual VN/EN chuyển đổi mượt
- ✅ Contact form hoạt động (gửi email thật)
- ✅ CV download button hoạt động
- ✅ GitHub + LinkedIn links đúng
- ✅ Deploy live trên Vercel với custom domain

---

*Prompt được tạo cho: Nguyen Van Mau (vmaudev)*  
*Version: 1.0 | Date: 2025*
