# BarberBook — Multi-Tenant SaaS for Barbershop Booking & Queue Management

> A production-grade, full-stack SaaS platform that lets barbershops accept online bookings 24/7, run a live walk-in queue, manage staff and services, send automated WhatsApp/SMS/email reminders, and track revenue analytics — all behind a subscription billing system.

**Role:** Full-Stack Engineer (Solo) — architecture, database design, backend, frontend, and DevOps
**Type:** Multi-tenant B2B SaaS (Progressive Web App)
**Timeline:** End-to-end product build

---

## 📌 Project Overview

BarberBook is a complete business operating system for barbershops and salons. Shop owners get a branded dashboard to manage their entire operation, while their customers get a public, no-login-required booking page and a live queue tracker they can follow from their phone.

The platform is **multi-tenant** — every barbershop is an isolated organization with its own staff, services, working hours, subscription, and data. A single deployment serves unlimited shops, each with its own public booking link (e.g. `barberbook.app/book/downtown-cuts`).

The core problem it solves: small barbershops lose revenue to no-shows, phone-tag bookings, and chaotic walk-in lines. BarberBook replaces the paper diary and constant phone calls with **automated 24/7 online booking, a real-time digital queue, and automatic reminders that cut no-shows by up to 40%.**

> 📸 **[Screenshot: Landing Page — Hero Section]** — Marketing homepage hero with the "Run your barbershop on autopilot" headline and primary call-to-action.

> 📸 **[Screenshot: Landing Page — Features Grid]** — The six-feature grid (Online Booking, Walk-in Queue, Staff Management, Smart Analytics, Auto Reminders, Self-Service Links).

---

## 🎯 Key Features

### 1. Public Online Booking (No Login Required)
Customers visit a shop's public link, pick a service (or multiple), choose a barber, and select from live-generated available time slots. The slot engine respects each barber's working shifts, day-specific exceptions, existing appointments, buffer times, and the shop's booking window — so double-bookings are impossible.

- Multi-service booking with real-time duration & price calculation
- Live availability slots generated from barber shifts + existing bookings
- Guest checkout — no customer account needed
- Instant confirmation via WhatsApp / SMS / email

> 📸 **[Screenshot: Public Booking Page]** — Customer-facing booking flow showing service selection, barber picker, and available time slots.

> 📸 **[Screenshot: Booking Confirmation]** — Confirmation screen with the appointment summary and self-service manage link.

### 2. Real-Time Walk-In Queue
A digital queue replaces the physical waiting line. Staff add walk-ins from the dashboard; customers get a live link to track their position from their phone without waiting inside the shop. Powered by **Pusher WebSockets**, every position change updates instantly across all connected devices.

- Live position tracking on the customer's phone
- Real-time updates for staff and customers (WebSocket-driven)
- Status flow: Waiting → Called → In Service → Done
- Estimated wait time based on service durations

> 📸 **[Screenshot: Queue Management Dashboard]** — Staff view of the active walk-in queue with drag/status controls.

> 📸 **[Screenshot: Public Queue Status Page]** — Customer's live "You are #3 in line" tracker.

### 3. Smart Analytics Dashboard
Owners get actionable business intelligence: 30-day revenue trends, booking volume, peak hours, top services, and per-barber performance — rendered with **Recharts**. All computed from a single optimized query.

> 📸 **[Screenshot: Analytics Dashboard]** — Revenue trend chart, top services, and staff performance breakdown.

### 4. Staff & Service Management
Owners manage barbers, assign which services each barber offers (with per-barber price/duration overrides), set individual weekly shifts, and handle day-off exceptions.

- Invite barbers by email (they accept and set up their own login)
- Per-barber service assignment with price/duration overrides
- Weekly shift scheduling + calendar-date exceptions
- Role-based access: Owner / Manager / Member (barber)

> 📸 **[Screenshot: Staff Management Page]** — Barber roster with invite flow and service assignments.

> 📸 **[Screenshot: Services Page]** — Service catalog grouped by category with pricing and duration.

### 5. Appointment Management
A full operations view of every appointment with status management (Pending, Confirmed, In Progress, Completed, Cancelled, No-Show), staff notes, and guest self-service cancel/reschedule via a unique tokenized link — no phone calls needed.

> 📸 **[Screenshot: Appointments Dashboard]** — List/calendar of appointments with status controls and filters.

### 6. Automated Notifications
A messaging layer sends booking confirmations, reminders, cancellations, and reschedule notices. It intelligently tries **WhatsApp first (via Twilio)** and **falls back to SMS** if the recipient isn't on WhatsApp, plus transactional email via **Resend**. A cron job dispatches reminders a configurable number of hours before each appointment.

> 📸 **[Screenshot: WhatsApp/SMS Notification]** — Example booking confirmation message on a phone.

### 7. Subscription Billing & Feature Gating
Three tiers (Starter / Pro / Business) with hard usage limits enforced at the API layer — max barbers, monthly appointments, and monthly SMS. Usage counters reset lazily each calendar month, and the schema is built for Paddle webhook integration with idempotent event processing.

> 📸 **[Screenshot: Pricing Page]** — Three-tier plan comparison (Starter, Pro, Business).

> 📸 **[Screenshot: Billing Dashboard]** — Usage meters for appointments, SMS, and barbers against plan limits.

### 8. Guided Onboarding
New owners are walked through creating their shop, setting working hours, adding services, and inviting staff, with a setup checklist on the dashboard tracking completion.

> 📸 **[Screenshot: Onboarding Flow]** — Multi-step shop setup wizard.

> 📸 **[Screenshot: Owner Dashboard Home]** — Personalized greeting, today's appointments, and the setup checklist.

### 9. Secure Authentication
Full auth suite via **Better Auth**: email/password with verification, Google OAuth, two-factor authentication (TOTP + email OTP), password reset, and organization-based invitations.

> 📸 **[Screenshot: Sign In / Sign Up Page]** — Authentication screen with email + Google options.

> 📸 **[Screenshot: Two-Factor Authentication]** — 2FA verification step.

### 10. Progressive Web App (Installable + Offline)
Built as an installable PWA with **Serwist** service workers, an offline fallback page, web-push notifications, and a native-app feel on mobile — so shop owners can pin it to their home screen.

> 📸 **[Screenshot: PWA Install Prompt / Mobile View]** — App installed on a phone home screen or mobile dashboard.

---

## 🏗️ Architecture & System Design

BarberBook is architected as a **multi-tenant SaaS** where each barbershop maps to a Better Auth **Organization**, and a `Shop` record holds all business data. Every query is tenant-scoped by `shopId`, with denormalized `shopId` foreign keys on hot tables for fast, isolated lookups.

**Key design decisions:**

- **Server Components first** — data-heavy pages (dashboard, analytics, queue) fetch on the server via React Server Components and hydrate lean client components only where interactivity is needed, minimizing client JS.
- **Snapshot-at-booking pattern** — appointments store a price/duration *snapshot* so historical records stay accurate even when services change later.
- **Guest-first booking** — customers never create accounts; secure opaque tokens power self-service cancel/reschedule and live queue tracking.
- **Graceful degradation** — Pusher, Twilio, and Paddle integrations all detect missing credentials and disable cleanly, so the app runs in any environment.
- **Feature gating at the API boundary** — billing limits are checked server-side before mutations, with limits denormalized onto the subscription row for fast reads.
- **Idempotent webhooks** — subscription events track `lastEventId` to safely handle payment-provider retries.

> 📸 **[Screenshot: Database Schema / ERD Diagram]** — Entity-relationship diagram of the Prisma schema (Shop, Barber, Service, Appointment, Queue, Subscription).

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, React Server Components) |
| **Language** | TypeScript (end-to-end type safety) |
| **UI** | React 19, Tailwind CSS v4, shadcn/ui, Base UI, Radix, Lucide icons |
| **Database** | PostgreSQL (Neon serverless) |
| **ORM** | Prisma 7 |
| **Auth** | Better Auth (email/password, Google OAuth, 2FA, organizations) |
| **Real-time** | Pusher (WebSockets) |
| **Messaging** | Twilio (WhatsApp + SMS), Resend (email), Web Push |
| **Charts** | Recharts |
| **File Storage** | Vercel Blob (shop logos, service images) |
| **Billing** | Paddle-ready subscription model |
| **PWA** | Serwist (service worker, offline, installable) |
| **Testing** | Vitest (unit), Playwright (E2E) |
| **Image Optimization** | browser-image-compression (client-side) |

---

## ✨ Engineering Highlights

- **Availability engine** that computes bookable slots in real time from barber shifts, exceptions, buffers, existing appointments, and shop booking windows — mathematically preventing double-bookings.
- **Real-time queue** with scoped Pusher channels per shop, keeping every staff device and every waiting customer in sync instantly.
- **Multi-channel messaging** with automatic WhatsApp → SMS fallback and transactional email, all credential-optional.
- **Type-safe from database to UI** — Prisma-generated types flow through server actions and API routes into typed React components.
- **Role-based access control** with three permission tiers enforced on both server pages and API routes.
- **Production hygiene** — email sends are fire-and-forget on auth flows to prevent timing attacks, webhooks are idempotent, and usage limits are enforced server-side.

---

## 📊 Impact & Value

BarberBook turns a chaotic, phone-driven barbershop into a self-running operation:

- **24/7 bookings** without staff lifting a finger
- **Up to 40% fewer no-shows** through automated reminders
- **Zero waiting-room crowding** via live remote queue tracking
- **Data-driven decisions** from revenue and performance analytics
- **A scalable SaaS business model** with tiered subscriptions built in

---

## 🖼️ Recommended Screenshots Checklist

Capture these pages for the final portfolio PDF:

1. **[Landing Page — Hero]** — `/` (top section)
2. **[Landing Page — Features Grid]** — `/` (features section)
3. **[Pricing Page]** — `/pricing`
4. **[Sign In / Sign Up]** — `/sign-in`
5. **[Onboarding Flow]** — `/onboarding`
6. **[Owner Dashboard Home]** — `/dashboard`
7. **[Appointments Dashboard]** — `/dashboard/appointments`
8. **[Queue Management Dashboard]** — `/dashboard/queue`
9. **[Analytics Dashboard]** — `/dashboard/analytics`
10. **[Services Page]** — `/dashboard/services`
11. **[Staff Management Page]** — `/dashboard/staff`
12. **[Billing Dashboard]** — `/dashboard/billing`
13. **[Settings Page]** — `/dashboard/settings`
14. **[Public Booking Page]** — `/book/[shop-slug]`
15. **[Booking Confirmation + Manage Link]** — `/appointments/[token]`
16. **[Public Queue Status Page]** — `/queue-status/[token]`
17. **[Mobile / PWA View]** — dashboard or booking page on a phone
18. **[Database ERD Diagram]** — generated from the Prisma schema

> 💡 **Tip for the PDF:** Lead with the landing page and public booking flow (visually strong, tells the product story), then the owner dashboard suite (shows depth), and close with the architecture/ERD and tech-stack table (shows engineering rigor).
