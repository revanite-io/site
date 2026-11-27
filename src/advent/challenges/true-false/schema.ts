import { z } from 'astro/zod';
import type { Markdown } from '..';

export const schema = z.strictObject({
  type: z.literal('true-false'),
  statement: z.string(),
  answer: z.boolean(),
  correct: z.string(),
  // There is only one wrong answer, so one hint.
  hint: z.string(),
});

export const prepare = async (c: z.infer<typeof schema>, md: Markdown) => ({
  statement: await md.block(c.statement),
  answer: c.answer,
  correct: await md.block(c.correct),
  hints: { hint: await md.block(c.hint) },
});
