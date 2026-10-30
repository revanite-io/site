# revanite.io

Source for [revanite.io](https://revanite.io): a static [Astro](https://astro.build) site. Blog posts and guides are Markdown files, gathered into topic pages.

```bash
npm install
npm run dev      # http://localhost:4321, drafts included
npm run build    # outputs dist/ and validates all content
```

## Adding a blog post

1. Copy `src/content/blog/_template.md` to `src/content/blog/<slug>.md`. The filename becomes the URL: `/blog/<slug>`.
2. Fill in the frontmatter:
   - `title`, `description` (one sentence; used on cards, in search results and social previews) and `date` (first published) are required. Backdated content keeps its original date.
   - `authors`: ids from `src/content/authors.yaml`.
   - `tags`: each must match a file in `src/content/topics/`. Tag announcements `news`.
   - `image` (optional): social preview image under `public/`.
   - `draft: true` while it is in review. Drafts show in `npm run dev` but are not published.
   - `aliases` (optional): old URLs that should redirect here.
3. Write the body in Markdown. Raw HTML works too, for example `<aside class="callout">` or `<div class="figure-grid">` (see `blog/cra-readiness-gap-2026.md`).
4. Check it with `npm run dev`, then open a pull request. CI builds it, and the build fails on a bad field, naming the file. Set `draft: false` before merging. Merging to `main` publishes.

## Adding a guide

Same steps, from `src/content/guides/_template.md`, into `src/content/guides/<slug>.md` (`/guides/<slug>`). Pick a `layout`:

- `how-to`: each H2 becomes a numbered step; fill `prerequisites` and `outcome`.
- `explainer`: prose; related how-to guides on the same topics are listed at the end.

Optional `faq` entries render at the end and are published as FAQ structured data.

## Adding a topic

Create `src/content/topics/<slug>.md` with `title` and `description`. The body is intro copy. The page at `/topics/<slug>` lists everything tagged `<slug>`; pin items with `featured: [slug, ...]`.

See `CLAUDE.md` for the architecture.
