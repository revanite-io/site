// Advent of Gemara days: each directory src/content/advent/<name>/ becomes the guide
// advent-of-gemara-<name> (day-N directories are day N of the series). index.yaml holds the guide's
// frontmatter fields and a `story:` Markdown block; a line `{% include "file.yaml" %}` in the story
// places the challenge in that file. Any mistake fails the build, naming the file.
import { readdir, readFile } from 'node:fs/promises';
import type { Loader, LoaderContext } from 'astro/loaders';
import { parse } from 'yaml';
import { challengeTypes, type Markdown } from './challenges';

const ROOT = 'src/content/advent';
const INCLUDE = /^\{% include "([^"/]+\.yaml)" %\}$/;
const DAY_MS = 86_400_000;

class AdventError extends Error {
  constructor(file: string, message: string) {
    super(`${file}: ${message}`);
  }
}

async function readYaml(file: string) {
  try {
    return parse(await readFile(file, 'utf8'));
  } catch (e) {
    throw new AdventError(file, e instanceof Error ? e.message : String(e));
  }
}

async function loadChallenge(dir: string, file: string, md: Markdown) {
  const path = `${dir}/${file}`;
  const raw = await readYaml(path);
  const type = challengeTypes[raw?.type];
  if (!type) throw new AdventError(path, `\`type:\` must be one of ${Object.keys(challengeTypes).join(', ')}`);
  const result = type.schema.safeParse(raw);
  if (!result.success) {
    const issues = result.error.issues.map((i) => `${i.path.join('.') || 'file'}: ${i.message}`);
    throw new AdventError(path, issues.join('; '));
  }
  return { id: file.replace(/\.yaml$/, ''), type: raw.type as string, ...(await type.prepare(result.data, md)) };
}

async function loadDay(ctx: LoaderContext, name: string) {
  const dir = `${ROOT}/${name}`;
  const index = `${dir}/index.yaml`;
  const { story, ...meta } = (await readYaml(index)) ?? {};
  if (typeof story !== 'string') throw new AdventError(index, 'needs a `story: |` block');

  const block = async (text: string) => (await ctx.renderMarkdown(text)).html;
  const md: Markdown = { block, inline: async (text) => (await block(text)).replace(/^<p>([\s\S]*)<\/p>\s*$/, '$1') };

  // The story, cut at each include: [{ html, challenge }, ..., { html }].
  const segments = [];
  const included = new Set<string>();
  let text: string[] = [];
  for (const line of story.split('\n')) {
    if (!line.startsWith('{%')) {
      text.push(line);
      continue;
    }
    const file = INCLUDE.exec(line.trim())?.[1];
    if (!file) throw new AdventError(index, `\`${line.trim()}\` is not an include. Write {% include "file.yaml" %} on its own line.`);
    if (included.has(file)) throw new AdventError(index, `includes ${file} twice`);
    if (!(await readdir(dir)).includes(file)) throw new AdventError(index, `includes ${file}, which is not in ${dir}`);
    included.add(file);
    segments.push({ html: await block(text.join('\n')), challenge: await loadChallenge(dir, file, md) });
    text = [];
  }
  segments.push({ html: await block(text.join('\n')) });

  const unused = (await readdir(dir)).filter((f) => f !== 'index.yaml' && !included.has(f));
  if (unused.length) throw new AdventError(dir, `${unused.join(', ')} not included by index.yaml (challenge files must end in .yaml and be included once)`);

  const id = `advent-of-gemara-${name}`;
  if (ctx.store.has(id) && ctx.store.get(id)!.filePath !== index) {
    throw new AdventError(index, `src/content/guides/${id}.md has the same URL; keep one of the two`);
  }
  const day = Number(/^day-(\d+)$/.exec(name)?.[1]) || undefined;
  const data = await ctx.parseData({
    id,
    filePath: index,
    data: { layout: 'explainer', series: 'advent-of-gemara', ...(day && { day }), ...meta, story: segments },
  });

  // A day released early would leak its story, so its date must be the one the calendar gives it.
  const start = (ctx.store.get('advent-of-gemara')?.data.start as Date | undefined)?.valueOf();
  const date = (data.date as Date).valueOf();
  if (day && start !== undefined && date !== start + (day - 1) * DAY_MS) {
    const expected = new Date(start + (day - 1) * DAY_MS).toISOString().slice(0, 10);
    throw new AdventError(index, `day ${day} must be dated ${expected}, the date the calendar shows for it`);
  }
  ctx.store.set({ id, data, filePath: index, digest: ctx.generateDigest(data) });
}

async function loadDays(ctx: LoaderContext) {
  const dirs = (await readdir(ROOT, { withFileTypes: true })).filter((d) => d.isDirectory() && !d.name.startsWith('_'));
  for (const { name } of dirs) await loadDay(ctx, name);
}

/** The guides collection: Markdown guides from `base`, then the Advent of Gemara days. */
export const withAdventDays = (base: Loader): Loader => ({
  name: 'guides-and-advent-days',
  load: async (ctx) => {
    await base.load(ctx);
    await loadDays(ctx);
    ctx.watcher?.on('all', (_event, path) => {
      if (path.includes(ROOT)) loadDays(ctx).catch((e) => ctx.logger.error(e.message));
    });
  },
});
