import { z } from 'astro/zod';
import type { Markdown } from '..';

// Checking ignores case and spaces.
const letters = (s: string) => [...s.toLowerCase().replace(/\s/g, '')].sort().join('');

export const schema = z
  .strictObject({
    type: z.literal('word-scramble'),
    clue: z.string(),
    answer: z.string().min(1),
    // Left out, the letters are shown in alphabetical order.
    scrambled: z.string().optional(),
    correct: z.string(),
    // Wrong guesses can't be listed, so one hint for all of them.
    hint: z.string(),
  })
  .refine((c) => c.scrambled === undefined || letters(c.scrambled) === letters(c.answer), {
    path: ['scrambled'],
    message: 'must use exactly the letters of `answer`',
  });

export const prepare = async (c: z.infer<typeof schema>, md: Markdown) => ({
  clue: await md.block(c.clue),
  answer: c.answer.toLowerCase().replace(/\s/g, ''),
  scrambled: (c.scrambled ?? letters(c.answer)).toUpperCase().replace(/\s/g, ''),
  correct: await md.block(c.correct),
  hints: { hint: await md.block(c.hint) },
});
