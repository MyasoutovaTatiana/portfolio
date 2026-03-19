/**
 * Breakpoint values (px) for JS/TS usage (e.g. sizes attribute, resize logic).
 * Align with CSS custom properties in globals.css (--bp-sm, --bp-md, etc.).
 */
export const BP_SM = 480;
export const BP_MD = 768;
export const BP_LG = 1024;
export const BP_XL = 1200;
export const BP_2XL = 1440;

/** Media query fragment for max-width (e.g. "(max-width: 768px)") */
export function maxWidthQuery(bp: number): string {
  return `(max-width: ${bp}px)`;
}
