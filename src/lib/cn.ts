/** Tiny classname joiner — avoids pulling in clsx for a one-line need. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}
