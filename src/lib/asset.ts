/**
 * Resolves a path in `public/` against the app's base URL.
 *
 * Locally and on a root-domain deploy `BASE_URL` is `/`; on GitHub Pages it is
 * `/portfolio/`. Using this helper keeps static asset links (CV PDFs, the
 * profile photo) correct in every environment.
 */
export function asset(path: string): string {
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
