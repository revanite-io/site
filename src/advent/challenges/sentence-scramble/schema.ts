import { z } from 'astro/zod';
import type { Markdown } from '..';

// Checking ignores case and the sentence's final punctuation.
export const normalize = (s: string) => s.trim().replace(/[.!?,;:]+$/, '').replace(/\s+/g, ' ').toLowerCase();
const words = (s: string) => s.trim().replace(/[.!?,;:]+$/, '').split(/\s+/).filter(Boolean);
const sameWords = (a: string, b: string) => normalize(a).split(' ').sort().join(' ') === normalize(b).split(' ').sort().join(' ');

// The same order on every build: a shuffle seeded from the sentence (mulberry32).
function shuffle(list: string[], seedText: string) {
  let seed = [...seedText].reduce((h, ch) => Math.imul(h ^ ch.charCodeAt(0), 2654435761) >>> 0, 1);
  const random = () => {
    seed = (seed + 0x6d2b79f5) >>> 0;
    let t = Math.imul(seed ^ (seed >>> 15), seed | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  // A shuffle that lands back on the sentence is no puzzle: rotate it by one.
  return out.join(' ') === list.join(' ') ? [...out.slice(1), out[0]] : out;
}

export const schema = z
  .strictObject({
    type: z.literal('sentence-scramble'),
    prompt: z.string(),
    answer: z.string().refine((s) => words(s).length >= 2, 'needs at least two words'),
    // Left out, the words are shuffled at build time, the same on every build.
    scrambled: z.string().optional(),
    correct: z.string(),
    // Wrong orders can't be listed, so one hint for all of them.
    hint: z.string(),
  })
  .refine((c) => c.scrambled === undefined || sameWords(c.scrambled, c.answer), {
    path: ['scrambled'],
    message: 'must hold exactly the words of `answer`',
  });

export const prepare = async (c: z.infer<typeof schema>, md: Markdown) => ({
  prompt: await md.block(c.prompt),
  answer: normalize(c.answer),
  tiles: c.scrambled ? words(c.scrambled) : shuffle(words(c.answer), c.answer),
  correct: await md.block(c.correct),
  hints: { hint: await md.block(c.hint) },
});
