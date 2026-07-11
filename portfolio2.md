# Muhammad Roman Khan
### Senior Mobile & Full-Stack Engineer — React Native · Expo · Supabase

*Building production-grade, real-time mobile applications from database to app store.*

---

> **[COVER PAGE]**
> *Design note: Center the name and title on a clean minimal cover. Use the app's brand blue (`#208AEF`) as the accent color. Optional: a professional headshot in a circle on the right, or a minimal geometric background. Add the tagline below the title and the contact row (email · location · Upwork) as a thin footer.*
>
> **[Screenshot: App Icon / Splash Screen]** — *place the AsianInspection Chat app icon or splash screen as a subtle hero visual on the cover.*

---

## About Me

I'm a senior software engineer specializing in **cross-platform mobile apps** built with React Native and Expo, backed by modern serverless infrastructure (Supabase + Postgres + Cloudflare). I don't just write screens — I design the **data model, the security layer, the real-time pipeline, and the offline experience** as one coherent system.

My work is defined by **production discipline**: row-level security enforced at the database, append-only audit guarantees, encrypted token storage, offline-first architecture, and code that ships type-safe with zero placeholders. I approach every project as a principal engineer would — thinking about data flow, edge cases, scalability, and real user impact before writing a line of code.

---

## Skills & Tech Stack

**Mobile Development**
- React Native 0.85 (New Architecture / Fabric)
- Expo SDK 56 · Expo Router (file-based navigation, typed routes)
- React 19 · React Compiler
- TypeScript (strict mode, no `any`)
- Reanimated 4 · Gesture Handler · Keyboard Controller

**Backend & Database**
- Supabase (Postgres, Auth, Realtime, Edge Functions)
- PostgreSQL — schema design, migrations, triggers, RPCs
- Row-Level Security (RLS) — performance-tuned, multi-tenant isolation
- Deno Edge Functions (serverless API layer)

**Real-Time & Messaging**
- Supabase Realtime (Postgres Changes + Broadcast + Presence)
- WhatsApp-style read receipts, typing indicators, online/last-seen
- Push notifications (Expo Push + FCM, server-triggered)

**Storage & Media**
- Cloudflare R2 (S3-compatible, zero-egress) via presigned URLs
- Image compression (WebP), voice (AAC/M4A), video pipelines
- expo-image (disk cache), expo-audio, expo-video

**Offline-First Architecture**
- expo-sqlite (full offline history + FTS5 full-text search)
- Persistent offline outbox (text + media) with auto-retry
- LRU media cache (500 MB cap), optimistic UI, reconnect detection

**Security**
- expo-secure-store (encrypted OS keychain for tokens)
- Biometric app-lock (Face ID / fingerprint)
- Two-layer defense: UI guards + database RLS

**DevOps & Distribution**
- EAS Build & Submit · EAS Update (OTA)
- Firebase / FCM configuration
- Internal APK distribution · dev-client workflows

---

## Featured Project

# AsianInspection Chat — Internal Company Messenger

**A full-featured, WhatsApp-class private messaging app built for a company's 15–20 employees — with the twist that it also serves as a compliant, admin-monitored, append-only communication system.**

> **[Screenshot: Chats List Screen]** — *the main conversation list showing DMs and groups, unread badges, online dots, and last-message previews. This is the hero screenshot for the project.*

---

### The Problem

A company needed to replace scattered, unmonitored personal-messaging apps (WhatsApp, informal chats) with a **single internal tool they fully own and control.** The requirements were unusually strict:

1. **Full auditability** — a super-admin must be able to read *every* message (1-to-1 and group). This rules out end-to-end encryption.
2. **Tamper-proof history** — messages, once sent, can *never* be edited or deleted. This has to be enforced at the database, not just hidden in the UI.
3. **Admin-controlled access** — no public sign-up. The admin creates and deactivates accounts. Groups can only be created by admins.
4. **Feel like a modern chat app** — employees expect WhatsApp-level polish: instant delivery, read receipts, voice notes, images, video, offline support. A clunky internal tool would simply go unused.
5. **Cheap to run at small scale** — no expensive per-message infrastructure or storage egress fees.

The core engineering tension: **build something that feels as smooth and rich as a consumer app, while enforcing enterprise-grade security, immutability, and monitoring at the data layer.**

---

### The Solution

I designed and built a complete cross-platform mobile app with a serverless backend, delivered in structured phases:

**A security-first data model.** Every table has Row-Level Security enabled. The `messages` table has *no UPDATE and no DELETE policies at all* — append-only is enforced by Postgres itself, not by trusting the client. An `is_admin()` helper (in a private schema, `security definer`) grants the admin read access to everything through the same RLS policies, so no dangerous `service_role` key ever ships in the mobile app. Every policy is performance-tuned (`(select auth.uid())` caching, `TO authenticated`, indexed columns).

**Real-time messaging that feels instant.** Messages stream live over Supabase Realtime. I layered on WhatsApp-style delivery/read receipts (✓ sent, ✓✓ grey delivered, ✓✓ blue read — with correct all-recipients semantics for groups), typing indicators, and online / last-seen presence — all coordinated over a ref-counted broadcast channel with the database as source of truth.

**Rich media without the storage bill.** Images, voice notes, and videos upload directly to Cloudflare R2 (zero egress fees) via short-lived presigned URLs minted by an Edge Function — R2 credentials never touch the client. Images are compressed to WebP, voice recorded as efficient AAC, video size-guarded.

**A genuine offline-first experience.** This is where the app goes beyond a typical chat build. I implemented a persistent offline outbox (text *and* media queue that survives app kills and auto-sends on reconnect), a full offline message history mirror in SQLite with FTS5 full-text search, an LRU media cache, optimistic message bubbles with clock/retry states, and an app-wide reconnect detector — so the app opens instantly and stays usable with no connection, exactly like WhatsApp.

**Admin & user management, entirely in-app.** A non-technical admin can add employees (phone + password, no email/SMS dependency), deactivate/reactivate them, create and manage groups, and monitor any conversation read-only — all from dedicated admin screens gated by both a UI guard *and* database RLS.

**Production hardening.** Encrypted token storage (secure-store), optional biometric app-lock, an app-wide error boundary (no white-screen crashes), push notifications via a secure server-side trigger, haptics, skeleton loaders, and a polished themed (light/dark) UI with vector icons throughout.

---

### Key Features at a Glance

| Area | What was built |
|---|---|
| **Messaging** | 1-to-1 DMs, admin-created groups, text/image/voice/video messages, inverted FlatList chat UI |
| **Real-time** | Live message delivery, typing indicators, online + last-seen presence |
| **Receipts** | WhatsApp-style sent/delivered/read ticks, per-message "Message Info" screen |
| **Media** | Cloudflare R2 uploads via presigned URLs, WebP compression, voice notes, video with fullscreen playback |
| **Offline** | Offline outbox (text + media), SQLite history, FTS5 search, media cache, auto-retry on reconnect |
| **Admin** | Employee onboarding/offboarding, group management, read-only conversation monitoring |
| **Security** | Append-only DB, RLS everywhere, secure-store tokens, biometric lock, no service_role on client |
| **Notifications** | Server-triggered Expo push with dead-token pruning and retry/backoff |
| **UX polish** | Light/dark themes, avatars, search, haptics, skeletons, error boundary, keyboard handling |

---

### Screenshots

> Capture these on a real device or dev build. Suggested set for the portfolio (choose 6–10 strongest):

- **[Screenshot: Login Screen]** — clean phone + password login with show/hide password.
- **[Screenshot: Chats List Screen]** — conversations with unread badges, online dots, read-tick on last sent message.
- **[Screenshot: 1-to-1 Chat Screen]** — text conversation showing message bubbles, delivery/read ticks, online status in header.
- **[Screenshot: Chat with Media]** — a conversation showing an image bubble, a voice note bubble, and a video bubble together.
- **[Screenshot: Voice Note Recording]** — the message composer mid-recording (mic active state).
- **[Screenshot: Typing Indicator]** — animated "typing…" row in a chat. mention in 1-to-1 Chat Screen.jpeg is 2 in 1 image.
- **[Screenshot: Directory Screen]** — company directory with search and online dots.
- **[Screenshot: Offline State]** — offline banner + a message showing the pending clock icon / queued state.
- **[Screenshot: Search Screen]** — full-text search results across message history.
- **[Screenshot: Message Info Screen]** — per-recipient delivered/read breakdown.
- **[Screenshot: Settings Screen]** — avatar upload, display name, theme toggle (System/Light/Dark), storage/cache, biometric lock toggle.
- **[Screenshot: Admin Hub Screen]** — the admin-only tab landing page.
- **[Screenshot: Admin — All Employees]** — All Employees list.
- **[Screenshot: Admin — Add Employee]** — the onboarding form (name, phone, password, role).
- **[Screenshot: Admin — All Groups]** — All groups creation list.
- **[Screenshot: Admin — Create Group]** — group creation with member picker.
- **[Screenshot: Admin — All Conversations]** — All conversations.
- **[Screenshot: Admin — Monitor Conversation]** — read-only view of any conversation.
- **[Screenshot: Dark Mode Chat]** — the same chat screen in dark theme to show theming.

---

### Technologies Used

**Frontend:** React Native 0.85, Expo SDK 56, Expo Router, React 19, TypeScript (strict), Reanimated 4, expo-image, expo-audio, expo-video, expo-sqlite, expo-secure-store, expo-local-authentication, expo-notifications, @expo/vector-icons.

**Backend:** Supabase (PostgreSQL, Auth, Realtime), Deno Edge Functions, Row-Level Security, Postgres triggers & RPCs, `pg_net`.

**Storage:** Cloudflare R2 (S3-compatible, presigned URLs via `aws4fetch`).

**Infra / DevOps:** EAS Build, EAS Update (OTA), Firebase Cloud Messaging, Expo Push API.

---

### My Role

**Sole engineer — end-to-end.** I owned the entire project: architecture, database schema and security model, the serverless backend (Edge Functions + RPCs + triggers), the complete mobile app, real-time infrastructure, offline system, media pipeline, admin tooling, and the build/distribution setup.

Specifically, I:
- Designed the Postgres schema and the full RLS security model (append-only, admin monitoring, multi-user isolation).
- Wrote all backend logic: 5 Deno Edge Functions (user management, R2 presigning, push notifications) and 10+ Postgres RPCs.
- Built 20+ mobile screens and 25+ reusable components with a custom themed design system.
- Engineered the offline-first layer (outbox, SQLite mirror, FTS5 search, media cache, reconnect detection) — the most technically demanding part of the build.
- Implemented the real-time receipts/presence/typing system from scratch (no third-party chat SDK).
- Configured EAS builds, OTA updates, and FCM push delivery.

---

### Work Process

I delivered this project the way a principal engineer ships production software:

1. **Architecture first.** Before any code, I locked the stack and data model, documenting every non-negotiable constraint (append-only, no-E2EE-but-admin-readable, RLS-enforced) so no decision could accidentally violate the security requirements later.

2. **Phased vertical slices.** Rather than build the whole thing at once, I shipped in verifiable phases — foundation (schema/auth/1-to-1 chat) → media → push → admin/groups → distribution → real-time enhancements → offline-first → UI polish. Each phase was built, type-checked, linted, and verified before moving on.

3. **Security verified, not assumed.** I tested the RLS matrix explicitly (member sees own conversations, non-member sees zero, admin sees all) and confirmed append-only at the DB level (UPDATE/DELETE return zero rows).

4. **Docs-driven correctness.** Every SDK API and Supabase behavior was verified against the official versioned documentation rather than written from memory — because APIs change between versions and correctness matters in production.

5. **Clean, maintainable code.** TypeScript strict mode throughout, no `any` in API handling, reusable hooks and components, and a consistent design system. Every phase left the codebase type-clean and lint-clean.

---

## Why Hire Me

- **I build complete systems, not just screens.** I own the full stack — from Postgres RLS policies to pixel-level UI polish — so you get one engineer who understands how the whole thing fits together, with no gaps between "frontend" and "backend."

- **Production-grade by default.** Type-safe code, database-enforced security, offline resilience, encrypted storage, error boundaries, no placeholders or TODOs left in shipped code. I ship things that hold up under real usage.

- **I sweat the hard parts.** Offline-first messaging, real-time read receipts with correct group semantics, append-only audit guarantees, presigned-URL media pipelines — these are the details that separate a demo from a real product, and they're exactly what I focus on.

- **Modern, current stack.** I work with the latest React Native New Architecture, React 19, Expo SDK 56, and verify every API against current docs — no outdated patterns or deprecated libraries.

- **Clear communicator, decisive engineer.** I give you concrete recommendations with reasoning, not a menu of options. I think in terms of your users and your business, not just the code.

- **I deliver.** A real client shipped a complete, feature-rich internal product built entirely by me — messaging, media, offline, admin tooling, push, and distribution. I can do the same for you.

---

## Contact Information

**Muhammad Roman Khan**
Senior Mobile & Full-Stack Engineer

- **Email:** mromankhan005@gmail.com
- **Upwork:** *[add your Upwork profile URL]*
- **GitHub:** github.com/mromankhan
- **Location:** Pakistan *(available for remote work worldwide)*

> *Available for React Native / Expo mobile app development, Supabase backend engineering, and full-stack product builds. Let's build something great.*

---

> **[BACK COVER / CLOSING PAGE]**
> *Optional: a simple closing page with the tagline "Let's build something great." and the contact row repeated. Keep the same brand-blue accent for consistency.*
