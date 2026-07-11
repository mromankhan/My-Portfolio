# PORTFOLIO

---

## COVER PAGE

**[SCREENSHOT: Dashboard Page — full app window, clean and branded. Use this as the hero visual on the cover.]**

# Muhammad Roman Khan
### Full-Stack & Desktop Application Engineer
**React · TypeScript · Rust · Tauri · Node.js**

> Building production-grade desktop and web applications with a systems-engineering mindset — secure by default, offline-first, and pixel-clean.

📧 mromankhan005@gmail.com

*(Design note for PDF: keep the cover minimal — name + title on the left, a soft accent bar in the app's primary blue, and a single professional photo or the app hero screenshot on the right.)*

---

## ABOUT ME

I'm a full-stack engineer who ships real products, not prototypes. I specialize in building **desktop applications** and **web platforms** where correctness, security, and performance actually matter — think government-compliant financial software, tax integrations, and data-sensitive tools.

My approach is **system design first**: before writing code I map the data flow, component boundaries, and failure modes. I care about the details users feel — fast startup, no crashes, sensible edge-case handling — and the details clients feel — a 12 MB installer instead of 300 MB, encrypted data at rest, and code that's maintainable a year later.

Recent highlight: I engineered and migrated a full FBR (Pakistan tax authority) digital invoicing desktop app from Electron to a native **Rust + Tauri v2** backend, cutting the installed size by ~96% while keeping the UI identical.

---

## SKILLS & TECH STACK

### Frontend
- **React 18** (Hooks, Suspense, Error Boundaries)
- **TypeScript** (strict, end-to-end type safety)
- **Tailwind CSS** (design systems, dark mode)
- **React Query** (server-state, caching, optimistic updates)
- **React Hook Form + Zod** (type-safe forms & validation)
- **React Router** (HashRouter for desktop origins)

### Desktop & Backend
- **Tauri v2** (Rust backend, native WebView)
- **Rust** (`#[tauri::command]` IPC, async with `reqwest`)
- **Electron** (main/renderer, IPC, contextBridge)
- **Node.js**
- **SQLite** (rusqlite / better-sqlite3, WAL mode)

### Security & Systems
- **AES-256-GCM** encryption at rest
- **Windows Credential Manager** (keyring-bound keys)
- **bcrypt** password hashing
- Constant-time secret comparison, compiled-in secrets
- Third-party **REST API integration** (FBR gateway, validate-then-post flows)

### Tooling & Practice
- **Vite** · **Git/GitHub** · **NSIS packaging**
- PDF generation (WebView2 `PrintToPdf`)
- QR code generation
- Clean architecture, 1:1 IPC contracts, idempotent DB bootstrap

**[SCREENSHOT: A simple tech-stack logo grid can be designed in the PDF — React, TypeScript, Rust, Tauri, Tailwind, SQLite icons.]**

---

## FEATURED PROJECT

# FBR Digital Invoice App
### Government-compliant tax invoicing desktop software (Pakistan)

**[SCREENSHOT: Dashboard Page — showing the four stat cards (Total, Accepted, Rejected, Pending) and the four total-value cards.]**

---

### Problem

Businesses in Pakistan are legally required to submit sales invoices to the **FBR (Federal Board of Revenue)** digital invoicing system in a precise format — with correct tax math, HS codes, buyer registration checks, QR codes, and a validate-then-post handshake against the FBR gateway. Getting any field wrong means rejection.

Most available tools were either:
- **Cloud SaaS** — requiring businesses to trust their sensitive financial data to a third-party server, plus a recurring subscription; or
- **Heavy Electron apps** — 300+ MB installs that felt sluggish on the modest office PCs these businesses actually run.

The client needed a **fast, offline-first, single-machine desktop app** that a vendor could install and configure once, then hand over to a non-technical business owner who should never see setup screens or be able to break the configuration.

---

### Solution

I built a **native desktop application** with a Rust backend (Tauri v2) and a React front end that:

1. **Works fully offline** — all data (auth, settings, invoices, templates) lives in a local encrypted SQLite database. The internet is used *only* for FBR operations.
2. **Enforces correct tax math at the source** — quantity × rate − discount → sales tax → further tax (for unregistered buyers), with rates snapshotted at invoice-creation time so historical invoices never drift.
3. **Talks to FBR safely** — always **validate-then-post**: it hits `validateinvoicedata` first, and only submits to `postinvoicedata` if FBR returns status `00`. Rejections surface the exact FBR reason back to the user.
4. **Generates compliant output** — a 96×96 FBR-spec QR code (`invoiceNumber|NTN|amount|date`) and a print-ready PDF rendered by the same Chromium engine behind the WebView.
5. **Separates vendor from client** — a hidden, key-gated **Admin/Vendor mode** unlocks Signup and Settings. Once configured, the business owner literally cannot reach those screens, so the FBR token and seller details can't be corrupted.
6. **Ships tiny and secure** — I migrated the original Electron build to Rust/Tauri, dropping the installed footprint from **~300 MB to ~12 MB** while keeping the React UI byte-for-byte identical.

---

### Key Features

- 📊 **Dashboard** — live invoice counts by status and total-value rollups (all / draft / accepted / rejected).
  **[SCREENSHOT: Dashboard Page]**

- 🧾 **Invoice list** — searchable, status-filtered, date-range filtered, paginated table of all invoices.
  **[SCREENSHOT: Invoices List Page — with the status filter pills and search bar visible]**

- ➕ **Create Invoice** — type-safe form (React Hook Form + Zod) with live tax calculation, HS-code lookup, UOM selection, and multi-line items.
  **[SCREENSHOT: Create Invoice Page — form with line items and the live tax summary panel]**

- 🔎 **Invoice detail** — full breakdown of seller/buyer, line items, tax totals, FBR QR code, and submission status.
  **[SCREENSHOT: Invoice Detail Page — showing the QR code sidebar and FBR details card]**

- 📤 **Submit to FBR** — one-click validate-then-post with clear accepted/rejected feedback and resubmit support.
  **[SCREENSHOT: Invoice Detail Page — with an "Accepted" status badge and Submit/Download buttons]**

- 📄 **PDF export** — branded, print-ready A4 invoice with a custom letterhead/background image.
  **[SCREENSHOT: Generated Invoice PDF — the exported document itself]**

- 🗂️ **Templates** — save and reuse buyer + line-item details to create recurring invoices in seconds.
  **[SCREENSHOT: Templates Page]**

- ⚙️ **Vendor Settings** — seller profile, tax rates, FBR token (AES-256-GCM encrypted at rest), and letterhead upload — all behind the admin gate.
  **[SCREENSHOT: Settings Page — seller details and letterhead upload section]**

- 🔐 **Secure login** — bcrypt-verified local auth, session bound to the Windows Credential Manager.
  **[SCREENSHOT: Login Page]**

---

### Technologies Used

| Layer | Technology |
|---|---|
| **Desktop shell** | Tauri v2 (Rust) |
| **Backend / IPC** | Rust `#[tauri::command]`, `reqwest`, `rusqlite` |
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS (light/dark) |
| **State & data** | React Query, React Hook Form, Zod |
| **Database** | SQLite (WAL mode), TEXT-stored decimals for exact precision |
| **Security** | AES-256-GCM, Windows keyring, bcrypt, compiled vendor key |
| **Output** | WebView2 `PrintToPdf`, `qrcode` + `image` for QR |
| **Packaging** | NSIS installer (~12 MB) |

---

### Engineering Highlights *(what makes this more than a CRUD app)*

- **Electron → Tauri migration with zero UI rewrite.** I wrote a thin `tauriBridge` shim so the entire React renderer keeps calling `window.electronAPI` unchanged, while every IPC handler was re-implemented 1:1 as a Rust command. Result: ~96% smaller install, native performance, same product.

- **Money stored as TEXT, not floats.** Currency and quantity columns are strings end-to-end to preserve exact decimal precision — no floating-point rounding errors on tax totals.

- **Secrets bound to the machine.** The FBR token is AES-256-GCM encrypted with a key held in the Windows Credential Manager, so copying the `.db` file to another machine yields undecryptable tokens. The vendor admin key is a SHA-256 hash compiled into the binary (not readable in JS) and compared in constant time.

- **Defensive IPC contract.** Handlers never throw — every channel returns a `{ success, error? }` shape, and every input is Zod/`validation.rs`-validated before it touches the database or the network.

- **Correct-by-construction FBR payloads.** Subtle spec details handled properly — e.g. `scenarioId` must be *absent* (not null/empty) from production payloads, handled via conditional spread.

---

### My Role

**Sole engineer — full ownership, end to end.** I was responsible for:

- **System design** — data model, offline-first architecture, vendor/client separation, and the IPC contract.
- **Rust backend** — all Tauri commands (auth, settings, invoice, FBR, PDF, templates), SQLite schema & bootstrap, encryption, and the FBR gateway integration.
- **React frontend** — every page and component, forms, validation, tax engine, and state management.
- **The migration** — porting the working Electron app to Tauri v2 without regressing the UI.
- **Security hardening** — encryption at rest, keyring binding, admin gating.
- **Packaging & release** — the NSIS installer and versioned builds.

---

## WORK PROCESS

**1. Understand & scope** — I start by clarifying the real problem and the constraints (here: offline, single-machine, government compliance, non-technical end user). I map data flow and failure modes before writing code.

**2. Architect** — I choose the simplest composable design that scales: local SQLite over a cloud backend, Rust/Tauri over Electron, a 1:1 IPC contract so the frontend and backend evolve independently.

**3. Build in vertical slices** — I ship one working feature at a time (e.g. create → validate → submit → PDF), keeping the app runnable at every step rather than a big-bang integration.

**4. Harden** — validation on every input, encryption for every secret, defensive error handling that never crashes the process.

**5. Verify & polish** — I test the real flow end to end, tighten the UX (loading states, empty states, clear error messages), and confirm edge cases.

**6. Ship & document** — versioned releases, a clean installer, and code documented well enough for the next engineer (including future me).

---

## WHY HIRE ME

- ✅ **I ship production software, not demos.** No placeholders, no leftover TODOs — type-safe, secure, and performant code.
- ✅ **I think like a systems engineer.** I weigh trade-offs (install size, security, precision) and make deliberate architecture calls I can defend.
- ✅ **I handle the hard parts.** Government API integration, encryption, native desktop builds, and legacy migrations — not just UI screens.
- ✅ **I own outcomes.** On this project I was the sole engineer across backend, frontend, security, and packaging.
- ✅ **I communicate directly.** Clear recommendations over option-dumps, and honest status updates.
- ✅ **Detail-obsessed where it counts.** Exact decimal tax math, machine-bound secrets, and a 12 MB install where others ship 300 MB.

---

## CONTACT INFORMATION

**Muhammad Roman Khan**
Full-Stack & Desktop Application Engineer

📧 **Email:** mromankhan005@gmail.com
💼 **Upwork:** [add your Upwork profile URL]
🐙 **GitHub:** github.com/mromankhan
🌐 **Portfolio / Website:** [add if available]

> Available for freelance and contract work — desktop apps (Tauri/Electron), full-stack web (React/TypeScript), API integrations, and Rust backends.

**[SCREENSHOT: Optional — a small footer strip with the app logo or your professional photo.]**
