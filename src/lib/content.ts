import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Guide = CollectionEntry<'guides'>;

// Entries dated in the future stay out of the build until a build on or after that date
// (the Pages workflow rebuilds daily). BUILD_DATE=2026-11-30 previews a given day's build.
const buildDate = process.env.BUILD_DATE;
const now = buildDate ? new Date(buildDate) : new Date();
const published = <T extends { data: { draft: boolean; date: Date } }>(e: T) =>
  (import.meta.env.DEV && !buildDate) || (!e.data.draft && e.data.date <= now);

export async function getPosts(): Promise<Post[]> {
  return (await getCollection('blog', published)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export async function getGuides(): Promise<Guide[]> {
  const guides = await getCollection('guides', published);
  const replaced = new Set(guides.map((g) => g.data.replaces).filter(Boolean));
  return guides
    .filter((g) => !replaced.has(g.id))
    .map((g) => (g.data.replaces ? { ...g, id: g.data.replaces } : g))
    .sort(
    (a, b) =>
      (a.data.weight ?? Infinity) - (b.data.weight ?? Infinity) ||
      a.data.title.localeCompare(b.data.title),
  );
}

export const hasTag = (e: Post | Guide, topic: string) => e.data.tags.some((t) => t.id === topic);

export const href = (e: Post | Guide) => `/${e.collection === 'blog' ? 'blog' : 'guides'}/${e.id}`;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

// "Updated October 2026": the month is enough for a revision date.
export const formatMonth = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' });
