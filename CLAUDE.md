# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Revanite (revanite.io), deployed to GitHub Pages. Single-page React app — there is no backend. The application form on `/apply` is UI-only and intentionally does nothing on submit.

## Commands

| Task | Command |
| --- | --- |
| Install deps | `npm install` (or `make install`) |
| Dev server | `npm run dev` (or `make start` — opens browser) |
| Production build | `npm run build` (or `make build`) — outputs `dist/` |
| Preview built site | `npm run preview` (or `make preview`) |
| Simulate CI build | `npm run test:build` (runs `./test-build.sh`) |

There is **no test suite, no linter, and no typecheck script**. `test:build` only verifies `npm ci && vite build` produces a populated `dist/` — it does not test application behavior. When validating changes, run `npm run build` to catch TypeScript errors (Vite invokes `tsc` implicitly via `@vitejs/plugin-react-swc`), and spot-check behavior in `npm run dev`.

## Deployment

Pushing to `main` triggers `.github/workflows/pages.yaml`, which builds and deploys to GitHub Pages. The `CNAME` file pins the custom domain to `revanite.io`. There is no staging environment — merged commits ship to production.

Note the workflow uses `step-security/harden-runner` and pins every action to a commit SHA. Dependabot maintains these pins (`.github/dependabot.yml`); preserve the SHA-pinning convention when editing the workflow.

## Architecture

**Stack:** React 19 + React Router 7 + Vite 8 + TypeScript 6 (strict). SWC for React transform. No CSS framework — styling is inline `style={}` props plus `src/global.css` for responsive media queries.

**Entry points:** `index.html` → `src/main.tsx` → `<ThemeProvider><App /></ThemeProvider>`. `App.tsx` wires `BrowserRouter` with three routes — `/`, `/apply`, `/2025-debrief` — and a catch-all `Navigate to="/"`. The `Footer` is hidden on the home page only.

**Theme system (important):** `src/theme.tsx` is the single source of truth for design tokens. `ThemeProvider` projects the `cyanTheme` object into CSS custom properties (`--gf-color-*`, `--gf-space-*`, `--gf-font-*`, etc.) on a wrapper `<div>`. **Components should read tokens via `var(--gf-...)` in inline styles — do not hard-code colors or spacing.** The `gf-` prefix is a legacy artifact from the "greenfield" project this was forked from; keep it for consistency.

**Routing note:** Because this is a GitHub Pages SPA on a custom domain, client routes like `/apply` rely on the `Navigate to="/"` catch-all at the React-Router level. Any new top-level route must be added in `App.tsx`; unknown paths reload to `/` rather than 404.

**Responsive strategy:** `global.css` does heavy lifting with attribute selectors like `[style*="fontSize: \"2.5rem\""]` to override inline styles on mobile. This is fragile — when adding new inline font sizes, check whether a matching override exists in the `@media (max-width: 768px)` block and add one if needed, rather than fighting the cascade.

**Components vs. sections:** `src/components/` holds reusable building blocks (e.g., `PillarCard`, `CTACard`, `TwoColumnSection`, `BackgroundArcs`). `src/pages/` holds top-level route components, and `src/pages/sections/` holds page-specific composite sections. Prefer composing existing components over creating new ad-hoc markup.

**Assets:** Images served from `/public/images/` (absolute URLs in markup) or imported from `src/assets/` (bundled by Vite). The `unused-assets/` directory at the repo root is exactly what it says — do not import from it.

## Design reference

`design-doc.md` describes the intended "Sharp Contrast" visual identity: pure black (#000000) background, cyan accents (#4AE0F0 — brightened from the Revanite logo's #3AD0E6), glassmorphism surfaces, and the Inter / Space Grotesk / JetBrains Mono font stack. Match this aesthetic when adding UI; the tokens in `theme.tsx` already encode it.
