import { z } from 'astro/zod';
import type { Markdown } from '..';

// A blank is its answer in braces: "An audit ends with a {human} opinion."
const BLANK = /\{([^{}]+)\}/;

export const schema = z
  .strictObject({
    type: z.literal('fill-in-the-blank'),
    text: z.string().regex(BLANK, 'needs at least one {blank}, written as the answer in braces'),
    // Extra words in the bank, each with the hint shown when it's put in a blank.
    decoys: z.record(z.string(), z.string()).default({}),
    correct: z.string(),
    // Shown when a word from the text is in the wrong blank.
    hint: z.string(),
  })
  .superRefine((c, ctx) => {
    const answers = c.text.split(BLANK).filter((_, i) => i % 2);
    for (const word of Object.keys(c.decoys)) {
      if (answers.includes(word)) ctx.addIssue({ code: 'custom', path: ['decoys', word], message: 'is also a blank\'s answer' });
    }
  });

export const prepare = async (c: z.infer<typeof schema>, md: Markdown) => {
  const parts = c.text.split(BLANK); // odd indexes are the blanks' answers
  const decoys = Object.keys(c.decoys);
  return {
    parts,
    words: [...new Set([...parts.filter((_, i) => i % 2), ...decoys])].sort((a, b) => a.localeCompare(b)),
    decoys: Object.fromEntries(decoys.map((word, i) => [word, `decoy-${i}`])),
    correct: await md.block(c.correct),
    hints: {
      hint: await md.block(c.hint),
      ...Object.fromEntries(await Promise.all(decoys.map(async (word, i) => [`decoy-${i}`, await md.block(c.decoys[word])]))),
    },
  };
};
