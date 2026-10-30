# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site and knowledge base for Revanite (revanite.io). Static Astro site: every page is pre-rendered HTML, there is no backend. Content is blog posts and guides written in Markdown, gathered by topic.

## Commands

| Task | Command |
| --- | --- |
| Install deps | `npm install` (or `make install`) |
| Dev server | `npm run dev` (or `make start`; opens browser). Drafts are visible here. |
| Production build | `npm run build` (or `make build`), outputs `dist/` |
| Preview built site | `npm run preview` (or `make preview`) |
| Simulate CI build | `npm run test:build` (runs `./test-build.sh`) |

There is no test suite or linter. `npm run build` is the check: it validates every content file's frontmatter against `src/content.config.ts` and fails naming the file and field. `astro check` is not wired in because `@astrojs/check` does not yet accept TypeScript 7.

## Deployment

Pushing to `main` triggers `.github/workflows/pages.yaml`, which builds and deploys to production. There is no staging environment. `.github/workflows/ci.yaml` builds every pull request. Both workflows pin every action to a commit SHA, and Dependabot maintains the pins; keep that convention.

## Content model

- `src/content/blog/<slug>.md` serves `/blog/<slug>`: dated posts. Announcements carry the `news` tag.
- `src/content/guides/<slug>.md` serves `/guides/<slug>`: dated like posts (`date`, optional `updated`); `layout: how-to` (numbered H2 steps, prerequisites, outcome) or `layout: explainer` (prose).
- `src/content/topics/<slug>.md` serves `/topics/<slug>`: intro copy plus every post and guide tagged with that topic. **Every tag must be a topic file**; the schema enforces it.
- `src/content/authors.yaml`: author ids for `authors:`.
- `aliases:` in any frontmatter lists old URLs; `src/pages/[...alias].astro` builds a redirect page for each, and the sitemap leaves them out. Use it whenever a page moves.
- `draft: true` keeps an entry out of the production build.
- Templates: `blog/_template.md`, `guides/_template.md` (files starting with `_` are not content).

## Architecture

**Stack:** Astro 7 (with `@astrojs/react` for the one island, the scrolling logo strip `src/components/PartnersSection.tsx`), Tailwind CSS 4 (via `@tailwindcss/vite`) with `@tailwindcss/typography` for rendered Markdown, `astro-icon` (Lucide), `@astrojs/sitemap`, `@astrojs/rss`.

**Pages:** `src/pages/index.astro` (home; project and founder copy lives as arrays at the top), `blog/`, `guides/`, `topics/`, `404.astro`, `rss.xml.ts`, `robots.txt.ts`. Output uses `build.format: 'file'` and `trailingSlash: 'never'`, so `/blog/x` is `dist/blog/x.html`.

**Layouts:** `Layout.astro` owns per-page meta (title, description, canonical, Open Graph, JSON-LD). `Article.astro` renders posts and guides, `Listing.astro` the index and topic pages.

**Design:** based on the Meridian marketing site (`~/dev/rev/meridian-site`): light stone palette, Inter body, Source Serif 4 headings, tokens as `--color-*` in `@theme` in `src/styles/global.css`. The accent is Revanite teal (`--color-accent`, a darker cut of the logo cyan `--color-brand`). Use the tokens, not hard-coded colours. This replaces the earlier "Sharp Contrast" dark theme in `design-doc.md`.

**Assets:** static files in `public/` (absolute URLs); partner logos in `src/assets/images/partners/` are optimised by `astro:assets` on the home page. `unused-assets/` is not imported.

**Legacy:** the previous React/Vite SPA (`index.html`, `vite.config.ts`, `src/main.tsx`, `src/App.tsx`, `src/theme.tsx`, `src/global.css`, `src/hooks/`, `src/components/*.tsx` except `PartnersSection.tsx`, `src/pages/*.tsx`) is no longer built and is pending deletion. Astro warns about the `.tsx` files in `src/pages/` until they are removed.
