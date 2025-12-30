# GOLDEN DEBRIS LEDGER: WAIN-G MISSION DECK
> "Governance Over Gadgets. Wisdom from the Wreckage."

## 1. SYSTEM CONTEXT (METADATA)
* **Project:** Whytebox Mission Deck (WAIN1+)
* **Governor:** WAIN-G (Whytebox AI Intelligence Network Governor)
* **Stack:** Next.js 15.1 (App Router), React 19 (RC), Tailwind CSS v3.4, Vercel Edge Runtime.
* **Intelligence:** Google Gemini 3 Pro-Preview (via Vercel AI SDK).
* **Language Standard:** British English (UK).
* **Last Audited:** 30/12/2025.

---

## 2. ARTIFACT LOG (The Debris)

### ARTIFACT 001: THE PHANTOM ROOT
* **Symptom:** "Module not found" / "Cannot find package.json".
* **Diagnosis:** The User Directory (`C:\Users\Daniel`) contained a rogue `package-lock.json`, tricking the installer into thinking the project root was one level higher than the actual repo.
* **Remediation:** `Remove-Item package-lock.json -Force` in the parent directory.
* **Lesson:** Always verify the "Contextual Root" before initiating dependency injection.

### ARTIFACT 002: THE WHITE DOT ANOMALY
* **Symptom:** Code is visible in the editor, but the compiler throws `Module not found`.
* **Diagnosis:** The file (e.g., `TerminalIntro.tsx`) had the "White Dot" (●) indicator in VS Code, meaning it existed in RAM but not on the HDD.
* **Remediation:** `Ctrl + S` (Save) to force persistence.
* **Lesson:** Visual confirmation of persistence (x icon) is mandatory before debugging logic.

### ARTIFACT 003: THE TIME-TRAVEL PARADOX (PEER DEPS)
* **Symptom:** `ERESOLVE unable to resolve dependency tree`.
* **Diagnosis:** Next.js 15 requires React 19 RC (Bleeding Edge), but ecosystem libraries (like `framer-motion`) requested React 18 (Stable). The package manager deadlocked.
* **Remediation:** `npm install --legacy-peer-deps`.
* **Lesson:** When operating on the Bleeding Edge, bureaucratic strictness must be overridden. We trade stability for access to novel features.

### ARTIFACT 004: THE GHOST CONFIG (TAILWIND V3 vs V4)
* **Symptom:** `Cannot find module '@tailwindcss/postcss'`.
* **Diagnosis:** The Manifest installed Tailwind v3 (Stable), but the configuration files (`globals.css`) were written using Tailwind v4 (Alpha) syntax. The engine was looking for a plugin that did not exist.
* **Remediation:** Downgraded `globals.css` to standard directives (`@tailwind base;`) and created a strict `tailwind.config.ts` map.
* **Lesson:** Software versions and Configuration Maps must be synchronized. A v3 Engine cannot interpret a v4 Map.

### ARTIFACT 005: THE MISSING LOGIC CORE (ZOD)
* **Symptom:** `Can't resolve 'zod/v3'`.
* **Diagnosis:** The AI SDK relies on `zod` for schema validation. It was not explicitly listed in the Manifest (`package.json`), causing a runtime crash.
* **Remediation:** Explicit injection: `npm install zod`.
* **Lesson:** Implicit dependencies are dangerous. If a tool requires a battery, list the battery in the manifest.

### ARTIFACT 006: THE SILENT UPLINK (ENV VARIABLES)
* **Symptom:** Chat Interface active, message sends, but AI never replies (Silence).
* **Diagnosis:** The Local Environment (`localhost`) lacked the API Credentials stored in the Cloud (`Vercel`). The engine had no fuel.
* **Remediation:** Created `.env.local` containing `GOOGLE_GENERATIVE_AI_API_KEY` and performed a Hard Restart.
* **Lesson:** Localhost is a fortress. It does not automatically inherit secrets from the cloud.

### ARTIFACT 007: THE KEY STROKE (API TYPO)
* **Symptom:** Authentication Failure / Silent Response.
* **Diagnosis:** The environment variable `GOOGLE_GENERATIVE_AI_API_KEY` contained a typographical error. The Fuel Line was connected, but the credentials were invalid.
* **Remediation:** Audit of `.env.local` against the Google AI Studio dashboard. Correction and Hard Restart.
* **Lesson:** In cryptography, "close enough" is a failure state. Precision is binary.