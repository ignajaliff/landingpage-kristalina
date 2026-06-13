/** Une clases condicionalmente, ignorando false/undefined/null. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
