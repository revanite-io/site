// Each challenge type's Challenge.astro registers how to check its form. A check returns true for a
// right answer, or the key of the hint to show (a key of the `hints` its schema's `prepare` returned).
export type Check = (form: HTMLFormElement) => true | string;

export const checks = new Map<string, Check>();
export const registerCheck = (type: string, check: Check) => checks.set(type, check);
