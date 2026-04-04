// ── Portfolio knowledge base ───────────────────────────────────────────────
// Each section is a self-contained string chunk injected into the AI context
// only when the user's question is relevant to that section.

export const aboutChunk = `
## About Muhammad Roman
- Full Stack Developer & Agentic AI Engineer from Karachi, Pakistan
- Student of SMIT (Saylani Mass IT Training) & PIAIC (Presidential Initiative for AI & Computing)
- Specializes in Voice AI Agents, Agentic AI systems, and Digital FTEs (autonomous AI agents)
- Builds and integrates MCP Servers to supercharge AI workflows
- Currently leveling up in cloud-native: Kubernetes, Dapr, distributed systems
- Uses Cursor, Claude Code & GitHub Copilot for 10x development speed
- Stats: 2+ years learning, 1+ year professional experience, 25+ technologies
- Interests: Exploring tech, teaching, travelling, open source
`;

export const skillsChunk = `
## Skills & Tech Stack
Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, shadcn/ui, Redux
Backend: Node.js, Express.js, FastAPI, Python
Databases: MongoDB, PostgreSQL, Firebase (Firestore, Auth, Storage)
Mobile: React Native (Expo)
AI/Agentic-AI: OpenAI, Anthropic, OpenAI Agents SDK, Google ADK, Livekit, MCP Servers, RAG, OpenAI Agents SDK
DevOps/Cloud: Docker, Kubernetes, Vercel, Git, GitHub
`;

export const projectsChunk = `
## Projects

1. **Personal Blog Web**
   - Stack: Next.js, React, TypeScript, Tailwind CSS, Firebase, shadcn/ui, OpenAi Agents SDK
   - AI-Powered blog platform
   - Live: https://roman-blog.vercel.app
   - GitHub: https://github.com/mromankhan/Personal-Blog-Web

2. **Expense Tracker**
   - Stack: Next.js, React, TypeScript, Tailwind CSS, Firebase, shadcn/ui, OpenAi Agents SDK
   - AI PoweredReal-time expense tracking with Firebase sync
   - Live: https://expenses-tracker-beta-three.vercel.app
   - GitHub: https://github.com/mromankhan/Expense-Tracker-Web

3. **Modern Music Academy**
   - Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion, Aceternity UI
   - Online music academy platform
   - Live: https://music-academy-web-olive.vercel.app
   - GitHub: https://github.com/mromankhan/Music-Academy-Web

4. **Todo App (AI-integrated)**
   - Stack: Next.js, React, TypeScript, Tailwind CSS, FastAPI, PostgreSQL, OpenAi Agents SDK
   - AI-integrated task manager with Next.js frontend & FastAPI backend
   - GitHub: https://github.com/mromankhan/Chat-Web

5. **Weather Application** (React Native)
   - Stack: React Native, Expo, TypeScript, Tailwind CSS
   - Real-time weather updates with dynamic UI
   - GitHub: https://github.com/mromankhan/Weather-Application

6. **Food Review App** (React Native)
   - Stack: React Native, Expo, TypeScript, Tailwind CSS
   - Modern food review UI concept
   - GitHub: https://github.com/mromankhan/Food-Review-Application
`;

export const experienceChunk = `
## Work Experience & Education

### Agentic AI & Automation Developer — AIByTech (Contract, Remote)
- Period: Jan 2026 — Present (Current)
- Built multi-agent AI systems using LangChain & LangGraph
- Reduced manual workflows by 80% through automation pipelines
- Integrated OpenAI, Anthropic & open-source LLMs into products
- Tags: Agentic AI, LangGraph, LLMs, Python, FastAPI, N8N, Automation

### Full Stack Developer & Agentic AI Developer — XponentialAI (Full-Time, Remote)
- Period: Oct 2025 — Present (Current)
- Developed production Next.js apps with TypeScript & Tailwind CSS
- Built Full Stack AI Web Apps & Voice AI Agents using Python & Livekit
- Worked on FastAPI & REST API integrations
- Tags: Next.js, React, TypeScript, Python, FastAPI, Livekit, Twilio, PostgreSQL, Docker, RAG, OpenAI Agents SDK

### Full Stack Developer (Intern) — XponentialAI (Remote)
- Period: Jul 2025 — Sep 2025
- Built UI components and full-page features in Next.js & React
- Worked on Agentic AI prototypes, promoted to full-time within internship

### Education — PIAIC (Presidential Initiative for AI & Computing)
- Period: 2024 — Present
- Government-backed AI program: Generative AI, Agentic AI, Cloud Native, Python, FastAPI, LLMs, Kubernetes

### Education — SMIT (Saylani Mass IT Training)
- Period: 2023 — 2025
- Full Stack bootcamp: MERN, Next.js, React Native, TypeScript, Firebase, Mobile Applications, Frontend Development, Backend Development
`;

// ── Keyword → chunk mapping ────────────────────────────────────────────────

type Chunk = "about" | "skills" | "projects" | "experience";

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
      /\b(experience|job|career|company|work|xponential|aibytech|intern|role|education|hire|available|freelance|opportunity|salary)\b/i,
    chunk: "experience",
  },
];

const chunkMap: Record<Chunk, string> = {
  about: aboutChunk,
  skills: skillsChunk,
  projects: projectsChunk,
  experience: experienceChunk,
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
