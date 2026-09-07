// ── Positioning, offers & buyer-facing copy ────────────────────────────────
// Single source of truth for the messaging used on the home page, the
// services page, the JSON-LD schema and the AI chat widget's context.

/** One-line positioning statement. Used in hero, metadata and schema. */
export const positioning =
  "I build well-engineered software that automates the work people are still doing by hand. Booking and scheduling, compliance filing, internal operations: I map the manual workflow, then design, build and ship the production system that runs it. End to end, mostly as the sole engineer.";

/** Short form for hero and cards. */
export const positioningShort =
  "Good software that removes manual work. I map the workflow people are doing by hand, then build the production system that runs it.";

/** Industry-agnostic proof line. Names real, shipped verticals. */
export const industriesLine =
  "The industry changes, the pattern does not. I have shipped for personal services, tax and financial compliance, and industrial inspection. In each one the problem was the same: people repeating steps a system should own.";

// ── Problems (buyer language, not tech language) ───────────────────────────

export interface Problem {
  title: string;
  body: string;
  proof: string;
  href: string;
}

export const problems: Problem[] = [
  {
    title: "A person is the booking system",
    body: "Appointments live in a notebook or a WhatsApp thread, someone answers every call, reminders go out by hand, and nobody knows what a slot is actually worth.",
    proof: "Solved in BarberBook",
    href: "/projects/barberbook",
  },
  {
    title: "Compliance work is retyped into three places",
    body: "The same figures get keyed into a spreadsheet, recalculated by hand, then re-entered into a government portal. It has to be exact, and it cannot stop when the connection drops.",
    proof: "Solved in FBR Invoice App",
    href: "/projects/fbr-invoice-app",
  },
  {
    title: "Operations run on tools you do not control",
    body: "Staff coordinate on personal accounts. No audit trail, no admin visibility, and no way to prove a record was never edited or deleted after the fact.",
    proof: "Solved in AsianInspection Chat",
    href: "/projects/asianinspection-chat",
  },
  {
    title: "The AI demo worked, the product never shipped",
    body: "A prompt in a notebook is not a system. Automating real work needs tools, state, a backend, an interface, error handling and a deployment path.",
    proof: "Agentic workflows & MCP servers",
    href: "/services",
  },
];

// ── Services ───────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  title: string;
  summary: string;
  bestFor: string;
  deliverables: string[];
  timeline: string;
  outcome: string;
}

export const services: Service[] = [
  {
    slug: "saas-platform",
    title: "Booking & Operations SaaS",
    summary:
      "Multi-tenant web platforms that run daily operations — scheduling, queues, staff, billing and analytics — for businesses that currently do it manually.",
    bestFor: "Service businesses, agencies and founders replacing manual ops",
    deliverables: [
      "Multi-tenant data model with role-based access",
      "Real-time availability / queue engine",
      "Subscription billing + owner analytics dashboard",
      "Automated WhatsApp, SMS and email notifications",
    ],
    timeline: "4–8 weeks to a usable v1",
    outcome:
      "A platform customers can book on 24/7 and owners can run the business from — not a prototype.",
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI Workflows & MCP Integration",
    summary:
      "AI that takes action inside your real systems: tool-calling agents, MCP servers, retrieval over your own data, and human checkpoints where they matter.",
    bestFor: "Teams automating repetitive internal work",
    deliverables: [
      "LangGraph / OpenAI Agents SDK workflow",
      "Custom MCP server or REST tool layer",
      "RAG pipeline over your documents and data",
      "Logging, checkpoints and human-in-the-loop review",
    ],
    timeline: "2–5 weeks",
    outcome:
      "An agent that reads your data, calls your tools and updates your systems — with a trail you can audit.",
  },
  {
    slug: "voice-ai",
    title: "Voice AI Agents",
    summary:
      "Low-latency phone and in-app voice agents that can hold a real conversation, look up business context and route work to the right place.",
    bestFor: "Support, booking, qualification and phone-based workflows",
    deliverables: [
      "LiveKit + WebRTC realtime voice pipeline",
      "Telephony integration (Twilio / SIP)",
      "STT → LLM → TTS orchestration with backend tools",
      "Deployment, monitoring and call transcripts",
    ],
    timeline: "3–6 weeks",
    outcome:
      "A voice agent that answers, understands, acts on your systems, and hands off cleanly to a human.",
  },
  {
    slug: "desktop-software",
    title: "Offline-First Desktop Software",
    summary:
      "Native desktop applications for compliance, invoicing and field work that keep running when the internet doesn't — built in Rust/Tauri, not Electron.",
    bestFor: "Compliance, accounting and regulated business workflows",
    deliverables: [
      "Tauri v2 (Rust) desktop app for Windows",
      "Encrypted local database with offline sync",
      "Government / third-party gateway integration",
      "Print-ready PDF export and signed installers",
    ],
    timeline: "4–8 weeks",
    outcome:
      "Software that installs in seconds, works offline, and stays compliant — a ~12 MB installer instead of ~300 MB.",
  },
  {
    slug: "mobile-app",
    title: "Cross-Platform Mobile Apps",
    summary:
      "React Native apps with real-time sync, offline support and security enforced at the database layer — iOS and Android from one codebase.",
    bestFor: "Internal tools, messaging and field-team apps",
    deliverables: [
      "React Native + Expo app for iOS and Android",
      "Supabase / Postgres backend with Row-Level Security",
      "Offline-first storage, outbox and local search",
      "Push notifications and an admin console",
    ],
    timeline: "5–10 weeks",
    outcome:
      "An app your team uses daily that works on a weak connection and leaves an auditable record.",
  },
  {
    slug: "mvp",
    title: "Full Stack MVP for Founders",
    summary:
      "From idea to a deployed product with auth, database, payments and a UI you can put in front of real users — built by one engineer who owns the whole stack.",
    bestFor: "Founders who need a shippable v1, not a design mockup",
    deliverables: [
      "Next.js + TypeScript product interface",
      "FastAPI or Next.js API layer + PostgreSQL",
      "Authentication, payments and admin tooling",
      "Deployment, analytics and a handover doc",
    ],
    timeline: "3–6 weeks",
    outcome:
      "A live product you can test with customers, charge for, and extend — with clean code you own.",
  },
];

// ── Engagement process ─────────────────────────────────────────────────────

export const process = [
  {
    step: "01",
    title: "Understand the workflow",
    body: "What the business actually does today, who touches it, and where it breaks. Scope and constraints get written down before any code.",
  },
  {
    step: "02",
    title: "Design the system",
    body: "Data model, architecture, integrations and the deployment path — decided upfront so the build doesn't get rewritten halfway.",
  },
  {
    step: "03",
    title: "Build and ship in slices",
    body: "Working software you can use every week, not a big reveal at the end. Frontend, backend, infra and handover are all mine.",
  },
];

// ── FAQ (also emitted as FAQPage schema) ───────────────────────────────────

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Multi-tenant SaaS platforms, agentic AI and voice AI systems, offline-first desktop software, and cross-platform mobile apps. If it needs a real backend, real users and a deployment path, it's a fit.",
  },
  {
    q: "Do you work solo or with a team?",
    a: "Both. BarberBook, the FBR Invoice App and AsianInspection Chat were built solo end-to-end — architecture, backend, frontend and deployment. I also work inside product teams as a full stack and agentic AI engineer.",
  },
  {
    q: "Can you handle frontend, backend and deployment?",
    a: "Yes. Next.js, React, React Native and TypeScript on the frontend; Python/FastAPI, Node.js, PostgreSQL, MongoDB and Supabase on the backend; Docker, Kubernetes and Vercel for deployment.",
  },
  {
    q: "What makes your AI work different from a demo?",
    a: "I build the product around the model — tools, retrieval, state, error handling, auth, interfaces and monitoring. The AI assistant on this site is one example: it answers from a real retrieval pipeline over my own portfolio data.",
  },
  {
    q: "How long does a typical project take?",
    a: "An MVP or agentic workflow usually lands in 3–6 weeks. A full SaaS platform or desktop application typically runs 4–8 weeks to a production-ready v1, depending on integrations.",
  },
  {
    q: "How do we start?",
    a: "Send a short brief — the business problem, who uses it, and which systems it has to talk to. I'll come back with the technical approach, scope and timeline before any commitment.",
  },
];
