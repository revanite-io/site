import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Guide = CollectionEntry<'guides'>;

// Entries release at 05:00 UTC on their `date:` (midnight US Eastern), when the Pages workflow's
// daily run rebuilds. BUILD_DATE=2026-12-01T05:00Z previews a given release's build. The dev server
// follows the same rules as a build on the real clock: no drafts, nothing unreleased. Only with
// PREVIEW=1 (`npm run dev:preview`) does it show drafts and default to the last Advent of Gemara day.
const RELEASE_HOUR_MS = 5 * 3_600_000;
const preview = import.meta.env.DEV && process.env.PREVIEW === '1';
const buildDate = process.env.BUILD_DATE ?? (preview ? '2026-12-24T05:00:00Z' : undefined);
const now = buildDate ? new Date(buildDate) : new Date();
export const isReleased = (date: Date) => date.valueOf() + RELEASE_HOUR_MS <= now.valueOf();
const published = <T extends { data: { draft: boolean; date: Date } }>(e: T) =>
  (preview || !e.data.draft) && isReleased(e.data.date);

export async function getPosts(): Promise<Post[]> {
  return (await getCollection('blog', published)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

/** Every published guide, including a series' days: for building pages and the series calendar. */
export async function getAllGuides(): Promise<Guide[]> {
  return (await getCollection('guides', published)).sort(
    (a, b) =>
      (a.data.weight ?? Infinity) - (b.data.weight ?? Infinity) ||
      a.data.title.localeCompare(b.data.title),
  );
}

/** Guides as listed anywhere: a series' days (`series:` set) are reached only through its calendar. */
export async function getGuides(): Promise<Guide[]> {
  return (await getAllGuides()).filter((g) => !g.data.series);
}

export const hasTag = (e: Post | Guide, topic: string) => e.data.tags.some((t) => t.id === topic);

export const href = (e: Post | Guide) => `/${e.collection === 'blog' ? 'blog' : 'guides'}/${e.id}`;

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

// "Updated October 2026": the month is enough for a revision date.
export const formatMonth = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' });
