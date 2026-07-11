// ── Featured project case studies ──────────────────────────────────────────
// Rich detail data for the top 3 projects, rendered on /projects/[slug].
// The gallery images are full Canva case-study slides (1280×800) that already
// contain their own annotations — the page shows a short intro + a carousel.

export interface ProjectSlide {
  src: string;
  label: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  /** Short marketing-grade summary shown under the hero. */
  summary: string;
  /** Card image used on the /projects grid. */
  cardImage: string;
  cardAlt: string;
  role: string;
  year: string;
  type: string;
  /** Tech chips — icon paths live in /public/images. */
  tech: { name: string; icon: string }[];
  /** Small tech-icon list reused by the grid card. */
  cardIcons: string[];
  highlights: string[];
  liveLink?: string;
  githubLink?: string;
  gallery: ProjectSlide[];
}

const dir = (folder: string, files: [string, string][]): ProjectSlide[] =>
  files.map(([file, label]) => ({
    src: encodeURI(`/portfolio/${folder}/${file}`),
    label,
  }));

export const projects: ProjectDetail[] = [
  {
    slug: "barberbook",
    title: "BarberBook",
    tagline: "Multi-Tenant SaaS for Barbershop Booking & Queue Management",
    summary:
      "A production-grade B2B SaaS that lets barbershops accept 24/7 online bookings, run a live walk-in queue, manage staff & services, send automated WhatsApp/SMS reminders, and track revenue — all behind a subscription billing system. Designed and built end-to-end as the sole engineer.",
    cardImage: "/portfolio1.png",
    cardAlt: "BarberBook barbershop booking SaaS landing page",
    role: "Solo Full-Stack Engineer",
    year: "2026",
    type: "Multi-tenant B2B SaaS · PWA",
    tech: [
      { name: "Next.js 16", icon: "/images/next.svg" },
      { name: "React 19", icon: "/images/re.svg" },
      { name: "TypeScript", icon: "/images/ts.svg" },
      { name: "Tailwind CSS", icon: "/images/tail.svg" },
      { name: "PostgreSQL", icon: "/images/psql.svg" },
      { name: "shadcn/ui", icon: "/images/shadcnui.svg" },
    ],
    cardIcons: [
      "/images/next.svg",
      "/images/re.svg",
      "/images/ts.svg",
      "/images/tail.svg",
      "/images/psql.svg",
      "/images/shadcnui.svg",
    ],
    highlights: [
      "24/7 public booking backed by a real-time availability engine that makes double-bookings mathematically impossible.",
      "Live walk-in queue over Pusher WebSockets — customers track their position from their phone in real time.",
      "Automated WhatsApp → SMS → email reminders that cut no-shows by up to 40%.",
      "Multi-tenant architecture with role-based access, revenue analytics, and tiered subscription billing.",
      "Installable, offline-capable PWA with server-first data fetching for a lean client bundle.",
    ],
    liveLink: "https://barber-book-beryl.vercel.app",
    gallery: dir("barberbook", [
      ["01Cover.png", "Cover"],
      ["02Overview.png", "Overview"],
      ["03Public Booking.png", "Public Booking"],
      ["04Walk-In Queue.png", "Walk-In Queue"],
      ["05Analytics & Operations.png", "Analytics & Operations"],
      ["06Staff & Services.png", "Staff & Services"],
      ["07Subscription Billing.png", "Subscription Billing"],
      ["08Owner Experience.png", "Owner Experience"],
      ["09Architecture.png", "Architecture"],
      ["10Tech Stack.png", "Tech Stack"],
      ["11Engineering Highlights.png", "Engineering Highlights"],
      ["12Closing.png", "Closing"],
    ]),
  },
  {
    slug: "asianinspection-chat",
    title: "AsianInspection Chat",
    tagline: "WhatsApp-class Internal Company Messenger",
    summary:
      "A full-featured private messaging app for a company's employees that doubles as a compliant, admin-monitored, append-only communication system — the polish of a consumer chat app with enterprise-grade security enforced at the database layer. Built solo, end-to-end.",
    cardImage: "/portfolio2.jpeg",
    cardAlt: "AsianInspection Chat internal messaging app",
    role: "Sole Mobile & Backend Engineer",
    year: "2026",
    type: "Cross-platform mobile app",
    tech: [
      { name: "React Native", icon: "/images/re.svg" },
      { name: "Expo", icon: "/expo.png" },
      { name: "TypeScript", icon: "/images/ts.svg" },
      { name: "Supabase / Postgres", icon: "/images/psql.svg" },
      { name: "Tailwind", icon: "/images/tail.svg" },
    ],
    cardIcons: [
      "/expo.png",
      "/images/re.svg",
      "/images/ts.svg",
      "/images/psql.svg",
      "/images/tail.svg",
    ],
    highlights: [
      "Real-time 1-to-1 & group messaging with WhatsApp-style read receipts, typing indicators and online/last-seen presence.",
      "Rich media — image, voice and video — via Cloudflare R2 presigned URLs with zero egress cost.",
      "True offline-first: persistent outbox, full SQLite history with FTS5 search, LRU media cache and auto-retry on reconnect.",
      "Append-only messages enforced by Postgres Row-Level Security — no edits, no deletes, full auditability.",
      "In-app admin console to onboard/offboard staff, manage groups, and monitor any conversation read-only.",
    ],
    gallery: dir("MessageApp", [
      ["01Cover.png", "Cover"],
      ["02Overview.png", "Overview"],
      ["03The Problem.png", "The Problem"],
      ["04The Solution.png", "The Solution"],
      ["05Messaging Core.png", "Messaging Core"],
      ["06Rich Communication.png", "Rich Communication"],
      ["07Directory & Access.png", "Directory & Access"],
      ["08Admin Console.png", "Admin Console"],
      ["09Groups & Monitoring.png", "Groups & Monitoring"],
      ["10Tech Stack.png", "Tech Stack"],
      ["11My Role.png", "My Role"],
      ["12Closing.png", "Closing"],
    ]),
  },
  {
    slug: "fbr-invoice-app",
    title: "FBR Digital Invoice App",
    tagline: "Government-Compliant Tax Invoicing Desktop Software (Pakistan)",
    summary:
      "A native desktop app that lets Pakistani businesses submit FBR-compliant sales invoices offline-first — correct tax math, a validate-then-post gateway handshake, QR codes and print-ready PDFs. Migrated from Electron to Rust/Tauri, cutting the install from ~300 MB to ~12 MB with an identical UI.",
    cardImage: "/portfolio3.png",
    cardAlt: "FBR Digital Invoice desktop application dashboard",
    role: "Sole Full-Stack & Desktop Engineer",
    year: "2026",
    type: "Rust + Tauri desktop app",
    tech: [
      { name: "Tauri v2 (Rust)", icon: "/images/re.svg" },
      { name: "React 18", icon: "/images/re.svg" },
      { name: "TypeScript", icon: "/images/ts.svg" },
      { name: "Tailwind CSS", icon: "/images/tail.svg" },
    ],
    cardIcons: ["/images/re.svg", "/images/ts.svg", "/images/tail.svg"],
    highlights: [
      "Fully offline — all data (auth, settings, invoices, templates) lives in a local AES-256-GCM encrypted SQLite database.",
      "Validate-then-post FBR gateway handshake with exact tax math snapshotted per invoice so historical records never drift.",
      "Compliant output: 96×96 FBR-spec QR codes and print-ready A4 PDF export.",
      "Electron → Rust/Tauri migration with zero UI rewrite — ~96% smaller install, native performance.",
      "Secrets bound to the machine via Windows Credential Manager, behind a hidden vendor/admin gate.",
    ],
    gallery: dir("fbrInvoice", [
      ["01Cover.png", "Cover"],
      ["02Overview + Stats.png", "Overview & Stats"],
      ["03Dashboard.png", "Dashboard"],
      ["04Create Invoice.png", "Create Invoice"],
      ["05Invoice Detail.png", "Invoice Detail"],
      ["06Invoices List.png", "Invoices List"],
      ["07Templates.png", "Templates"],
      ["08Architecture.png", "Architecture"],
      ["09Tech Stack.png", "Tech Stack"],
      ["10Engineering Highlights.png", "Engineering Highlights"],
      ["11My Role.png", "My Role"],
      ["12Closing.png", "Closing"],
    ]),
  },
];

export const getProject = (slug: string): ProjectDetail | undefined =>
  projects.find((p) => p.slug === slug);

export const projectSlugs = projects.map((p) => p.slug);
