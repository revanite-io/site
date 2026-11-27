// The Advent of Gemara challenge types. Each type is a folder here with two files:
//   schema.ts        the challenge file's schema, and `prepare`, which turns a checked file into the renderer's props
//   Challenge.astro  the inputs, plus a <script> that registers the type's answer check (see ../client.ts)
// Adding a type: add its folder, then one line below. Story.astro finds the renderer by folder name.
import type { z } from 'astro/zod';
import * as fillInTheBlank from './fill-in-the-blank/schema';
import * as multipleChoice from './multiple-choice/schema';
import * as trueFalse from './true-false/schema';
import * as wordScramble from './word-scramble/schema';

/** Renders challenge text as Markdown: `block` keeps paragraphs, `inline` is for text inside a label. */
export interface Markdown {
  block(text: string): Promise<string>;
  inline(text: string): Promise<string>;
}

/** What every renderer gets: the HTML shown on a right answer, and each hint by the key its check returns. */
export interface Prepared {
  correct: string;
  hints: Record<string, string>;
  [prop: string]: unknown;
}

export interface ChallengeType {
  schema: z.ZodType;
  prepare(challenge: any, md: Markdown): Promise<Prepared>;
}

export const challengeTypes: Record<string, ChallengeType> = {
  'true-false': trueFalse,
  'multiple-choice': multipleChoice,
  'word-scramble': wordScramble,
  'fill-in-the-blank': fillInTheBlank,
};
