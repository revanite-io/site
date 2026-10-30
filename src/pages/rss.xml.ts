import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/content';

export async function GET(context: APIContext) {
  return rss({
    title: 'Revanite blog',
    description: 'Research write-ups, opinion and news from the people building Gemara, Privateer and grc.store.',
    site: context.site!,
    trailingSlash: false,
    items: (await getPosts()).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}`,
      categories: post.data.tags.map((t) => t.id),
    })),
  });
}
