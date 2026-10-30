import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Guide = CollectionEntry<'guides'>;

const published = <T extends { data: { draft: boolean } }>(e: T) => import.meta.env.DEV || !e.data.draft;

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
