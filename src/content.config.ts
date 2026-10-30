import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Files starting with "_" (the templates) are not content.
const md = (dir: string) => glob({ pattern: ['**/*.md', '!**/_*.md'], base: `./src/content/${dir}` });

// Former paths that should redirect to this entry, e.g. "/2025-debrief".
const aliases = z.array(z.string().startsWith('/')).default([]);

const common = {
  title: z.string(),
  description: z.string(),
  authors: z.array(reference('authors')).min(1),
  // Every tag is a topic: it must match a file in src/content/topics/.
  tags: z.array(reference('topics')).default([]),
  image: z.string().optional(),
  draft: z.boolean().default(false),
  aliases,
};

const blog = defineCollection({
  loader: md('blog'),
  schema: z.object({
    ...common,
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});

const guides = defineCollection({
  loader: md('guides'),
  schema: z.object({
    ...common,
    layout: z.enum(['how-to', 'explainer']),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    weight: z.number().optional(),
    prerequisites: z.array(z.string()).default([]),
    outcome: z.string().optional(),
    testedWith: z.string().optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

const topics = defineCollection({
  loader: md('topics'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Slugs of blog posts or guides to pin at the top of the topic page.
    featured: z.array(z.string()).default([]),
    aliases,
  }),
});

const authors = defineCollection({
  loader: file('./src/content/authors.yaml'),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { blog, guides, topics, authors };
