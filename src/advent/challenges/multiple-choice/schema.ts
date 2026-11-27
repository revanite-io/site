import { z } from 'astro/zod';
import type { Markdown } from '..';

// The right option says `answer: true`; every other option carries its own hint.
const option = z.strictObject({
  text: z.string(),
  answer: z.literal(true).optional(),
  hint: z.string().optional(),
});

export const schema = z
  .strictObject({
    type: z.literal('multiple-choice'),
    question: z.string(),
    options: z.array(option).min(2, 'needs at least 2 options'),
    correct: z.string(),
  })
  .superRefine((c, ctx) => {
    const right = c.options.filter((o) => o.answer).length;
    if (right !== 1) {
      ctx.addIssue({ code: 'custom', path: ['options'], message: `mark exactly one option with \`answer: true\` (found ${right})` });
    }
    c.options.forEach((o, i) => {
      if (o.answer && o.hint) ctx.addIssue({ code: 'custom', path: ['options', i, 'hint'], message: 'the right option takes no hint' });
      if (!o.answer && !o.hint) ctx.addIssue({ code: 'custom', path: ['options', i], message: 'every wrong option needs a `hint:`' });
    });
  });

export const prepare = async (c: z.infer<typeof schema>, md: Markdown) => ({
  question: await md.block(c.question),
  options: await Promise.all(c.options.map((o) => md.inline(o.text))),
  answer: c.options.findIndex((o) => o.answer),
  correct: await md.block(c.correct),
  hints: Object.fromEntries(
    await Promise.all(c.options.flatMap((o, i) => (o.hint ? [md.block(o.hint).then((h) => [`option-${i}`, h])] : []))),
  ),
});
