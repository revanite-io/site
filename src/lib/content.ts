import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Guide = CollectionEntry<'guides'>;

// Entries release at 05:00 UTC on their `date:` (midnight US Eastern), when the Pages workflow's
// daily run rebuilds. BUILD_DATE=2026-12-01T05:00Z previews a given release's build. The dev
// server defaults to the last Advent of Gemara day, so every module is active; builds use the real clock.
const RELEASE_HOUR_MS = 5 * 3_600_000;
const buildDate = process.env.BUILD_DATE ?? (import.meta.env.DEV ? '2026-12-24T05:00:00Z' : undefined);
const now = buildDate ? new Date(buildDate) : new Date();
export const isReleased = (date: Date) => date.valueOf() + RELEASE_HOUR_MS <= now.valueOf();
const published = <T extends { data: { draft: boolean; date: Date } }>(e: T) =>
  (import.meta.env.DEV || !e.data.draft) && isReleased(e.data.date);

export async function getPosts(): Promise<Post[]> {
  return (await getCollection('blog', published)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export async function getGuides(): Promise<Guide[]> {
  return (await getCollection('guides', published)).sort(
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
