// ── Portfolio knowledge base ───────────────────────────────────────────────
// Each section is a self-contained string chunk injected into the AI context
// only when the user's question is relevant to that section.

export const aboutChunk = `
## About Muhammad Roman
- Forward Deployed Engineer at MP Pvt Ltd (contract, onsite Karachi, Aug 2026 - Present), and a Full Stack Developer & Agentic AI Engineer
- Positioning: builds well-engineered software that automates work teams are still doing by hand. Maps the manual workflow first, then designs, builds and ships the production system that runs it, end to end.
- Industry-agnostic: has shipped for personal services (barbershops), tax and financial compliance, and industrial inspection. The pattern repeats even when the industry changes.
- Student of SMIT (Saylani Mass IT Training) & PIAIC (Presidential Initiative for AI & Computing)
- Specializes in Voice AI Agents, Agentic AI systems, and Digital FTEs (autonomous AI agents)
- Builds and integrates MCP Servers to supercharge AI workflows
- Currently leveling up in cloud-native: Kubernetes, Dapr, distributed systems
- Proof: 3 production systems shipped across web, mobile and desktop; 2 built solo end-to-end
- Interests: Exploring tech, teaching, travelling, open source
`;

export const skillsChunk = `
## Skills & Tech Stack
Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, shadcn/ui, Redux
Backend: Node.js, Express.js, FastAPI, Python
Databases: MongoDB, PostgreSQL, Firebase (Firestore, Auth, Storage)
Mobile: React Native (Expo)
AI/Agentic-AI: OpenAI, Anthropic, OpenAI Agents SDK, LangChain, LangGraph, Google ADK, LiveKit, MCP Servers, RAG
DevOps/Cloud: Docker, Kubernetes, Vercel, Git, GitHub
`;

export const projectsChunk = `
## Projects

### Featured / Professional Work

1. **BarberBook, Barbershop Booking & Queue SaaS**
   - Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Prisma, PostgreSQL (Neon), Better Auth, Pusher, Twilio (WhatsApp/SMS), Resend, Recharts
   - Replaced: a front desk answering calls, a paper walk-in register, reminder calls by hand, revenue tracked from memory
   - Multi-tenant B2B SaaS: 24/7 online booking, real-time walk-in queue, staff & service management, automated reminders, subscription billing, and analytics
   - Installable PWA; role-based access; solo full-stack build (architecture → backend → frontend → DevOps)
   - Live: https://barber-book-beryl.vercel.app

2. **AsianInspection Chat, Internal Company Messenger**
   - Stack: React Native 0.85, Expo SDK 56, TypeScript, Supabase (Postgres, Auth, Realtime, Edge Functions), Cloudflare R2, expo-sqlite
   - Replaced: staff coordinating on personal WhatsApp accounts with no audit trail and no admin visibility
   - WhatsApp-class private messenger for a company: real-time DMs & groups, read receipts, typing/presence, voice/image/video, offline-first (outbox + SQLite + FTS5 search), admin monitoring
   - Security-first: append-only messages enforced at the DB, Row-Level Security everywhere, encrypted token storage, biometric lock; sole engineer end-to-end

3. **FBR Digital Invoice App, Tax Invoicing Desktop Software**
   - Stack: Tauri v2 (Rust), React 18, TypeScript, Vite, Tailwind CSS, SQLite (rusqlite, WAL), React Query, React Hook Form + Zod
   - Replaced: invoices typed into spreadsheets, tax worked out by hand, every record re-keyed into the FBR portal
   - Government-compliant (Pakistan FBR) offline-first desktop app: correct tax math, validate-then-post FBR gateway integration, QR codes, print-ready PDF export, templates
   - Built the original app in Electron, then rebuilt it in Rust/Tauri after the client found the ~300 MB install too heavy, cut to ~12 MB with an identical UI; AES-256-GCM encryption, Windows Credential Manager key binding; sole engineer on both versions

### Other Projects

4. **Personal Blog Web**
   - Stack: Next.js, React, TypeScript, Tailwind CSS, Firebase, shadcn/ui, OpenAI Agents SDK
   - AI-Powered blog platform
   - Live: https://roman-blog.vercel.app
   - GitHub: https://github.com/mromankhan/Personal-Blog-Web

5. **Expense Tracker**
   - Stack: Next.js, React, TypeScript, Tailwind CSS, Firebase, shadcn/ui, OpenAI Agents SDK
   - AI-powered real-time expense tracking with Firebase sync
   - Live: https://expenses-tracker-beta-three.vercel.app
   - GitHub: https://github.com/mromankhan/Expense-Tracker-Web

6. **Modern Music Academy**
   - Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion, Aceternity UI
   - Online music academy platform
   - Live: https://music-academy-web-olive.vercel.app
   - GitHub: https://github.com/mromankhan/Music-Academy-Web

7. **Todo App (AI-integrated)**
   - Stack: Next.js, React, TypeScript, Tailwind CSS, FastAPI, PostgreSQL, OpenAI Agents SDK
   - AI-integrated task manager with Next.js frontend & FastAPI backend
   - GitHub: https://github.com/mromankhan/Chat-Web

8. **Weather Application** (React Native)
   - Stack: React Native, Expo, TypeScript, Tailwind CSS
   - Real-time weather updates with dynamic UI
   - GitHub: https://github.com/mromankhan/Weather-Application

9. **Food Review App** (React Native)
   - Stack: React Native, Expo, TypeScript, Tailwind CSS
   - Modern food review UI concept
   - GitHub: https://github.com/mromankhan/Food-Review-Application
`;

export const servicesChunk = `
## Services & Engagements

1. **Booking & Operations SaaS** - multi-tenant platforms with real-time availability/queue engines, role-based access, subscription billing, analytics and automated WhatsApp/SMS/email notifications. 4-8 weeks to a usable v1.
2. **Agentic AI Workflows & MCP Integration** - LangGraph / OpenAI Agents SDK workflows, custom MCP servers, RAG over client data, human-in-the-loop checkpoints and logging. 2-5 weeks.
3. **Voice AI Agents** - LiveKit + WebRTC realtime pipelines, Twilio/SIP telephony, STT -> LLM -> TTS orchestration with backend tools, transcripts and monitoring. 3-6 weeks.
4. **Offline-First Desktop Software** - Tauri v2 (Rust) Windows apps, encrypted local databases, government/third-party gateway integration, print-ready PDF export. 4-8 weeks.
5. **Cross-Platform Mobile Apps** - React Native + Expo, Supabase/Postgres with Row-Level Security, offline-first storage and search, push notifications, admin console. 5-10 weeks.
6. **Full Stack MVP for Founders** - Next.js + TypeScript interface, FastAPI/Next.js API, PostgreSQL, auth, payments, deployment and handover. 3-6 weeks.

Process: (1) understand the workflow and constraints, (2) design the data model, architecture and deployment path, (3) build and ship in weekly slices with full ownership of frontend, backend, infra and handover.

To start: send a short brief with the business problem, the users, and the systems it must connect to. Reply includes technical approach, scope and timeline before any commitment.
`;

export const experienceChunk = `
## Work Experience & Education

### Forward Deployed Engineer, MP Pvt Ltd (Contract, Onsite Karachi)
- Period: Aug 2026 - Present (Current)
- Client-facing engineering: works directly with customer teams to map how their operations run before designing a solution
- Deploys and configures the product inside each client's own environment, connected to their real data and tools
- Builds custom integrations, connectors and automation so the system fits the client's existing stack
- Owns the deployment after go-live: monitoring, debugging, performance tuning and iterating on client feedback
- Tags: Forward Deployed Engineering, Solution Design, Client Integration, Automation, Deployment, Post-Deployment Support

### Agentic AI & Automation Developer, AIByTec (Contract, Remote)
- Period: Jan 2026 - Present (Current, concurrent with the MP Pvt Ltd contract)
- Built multi-agent AI systems using LangChain & LangGraph
- Reduced manual workflows by 80% through automation pipelines
- Integrated OpenAI, Anthropic & open-source LLMs into products
- Tags: Agentic AI, LangGraph, LLMs, Python, FastAPI, N8N, Automation

### Full Stack Developer & Agentic AI Developer, XponentialAI (Full-Time, Remote)
- Period: Oct 2025 - May 2026
- Developed production Next.js apps with TypeScript & Tailwind CSS
- Built Full Stack AI Web Apps & Voice AI Agents using Python & Livekit
- Worked on FastAPI & REST API integrations
- Tags: Next.js, React, TypeScript, Python, FastAPI, Livekit, Twilio, PostgreSQL, Docker, RAG, OpenAI Agents SDK

### Full Stack Developer (Intern), XponentialAI (Remote)
- Period: Jul 2025 - Sep 2025
- Built UI components and full-page features in Next.js & React
- Worked on Agentic AI prototypes, promoted to full-time within internship

### Education: PIAIC (Presidential Initiative for AI & Computing)
- Period: 2024 - Present
- Government-backed AI program: Generative AI, Agentic AI, Cloud Native, Python, FastAPI, LLMs, Kubernetes

### Education: SMIT (Saylani Mass IT Training)
- Period: 2023 - 2025
- Full Stack bootcamp: MERN, Next.js, React Native, TypeScript, Firebase, Mobile Applications, Frontend Development, Backend Development
`;

// ── Keyword → chunk mapping ────────────────────────────────────────────────

type Chunk = "about" | "skills" | "projects" | "experience" | "services";

const keywordMap: { keywords: RegExp; chunk: Chunk }[] = [
  {
    keywords:
      /\b(about|who|background|interest|karachi|smit|piaic|coffee|person|hobbies|travelling|teaching)\b/i,
    chunk: "about",
  },
  {
    keywords:
      /\b(skill|tech|stack|language|tool|framework|react|next|python|node|firebase|typescript|docker|kubernetes|tailwind|redux|fastapi|mongodb|postgresql)\b/i,
    chunk: "skills",
  },
  {
    keywords:
      /\b(project|built|made|portfolio|blog|expense|music|todo|weather|food|mobile|app|work|github|live|demo)\b/i,
    chunk: "projects",
  },
  {
    keywords:
      /\b(experience|job|career|company|work|xponential|aibytec|intern|role|education|hire|available|freelance|opportunity|salary)\b/i,
    chunk: "experience",
  },
  {
    keywords:
      /\b(service|services|hire|cost|price|pricing|budget|rate|timeline|engage|contract|offer|scope|deliverable|consult|brief|saas|mvp|voice agent|automation)\b/i,
    chunk: "services",
  },
];

const chunkMap: Record<Chunk, string> = {
  about: aboutChunk,
  skills: skillsChunk,
  projects: projectsChunk,
  experience: experienceChunk,
  services: servicesChunk,
};

/**
 * Returns only the context chunks relevant to the user's message.
 * Falls back to all chunks if nothing matches (general question).
 */
export function getRelevantContext(userMessage: string): string {
  const matched = new Set<Chunk>();

  for (const { keywords, chunk } of keywordMap) {
    if (keywords.test(userMessage)) {
      matched.add(chunk);
    }
  }

  const chunks = matched.size > 0
    ? [...matched].map((k) => chunkMap[k])
    : Object.values(chunkMap); // fallback: inject all

  return chunks.join("\n");
}
