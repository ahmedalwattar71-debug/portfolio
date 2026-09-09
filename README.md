# Ahmad Al-Wattar — Portfolio

A personal engineering portfolio positioning Ahmad Al-Wattar as a **Full Stack
Developer + Network Engineer** — an engineer who builds software and understands
the infrastructure it runs on.

Built with **React + TypeScript + Vite + Tailwind CSS**, with **lucide-react** for
icons. No other runtime dependencies.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
npm run typecheck
npm run lint
```

## Project structure

```
public/
  cv/                     Two CV PDFs, served at /cv/*.pdf (see below)
  favicon.svg, og-image.svg
src/
  components/             Reusable UI: Navbar, Reveal, CVDownloadMenu,
                          SystemFlow, HeroBackdrop, RadiusArchitecture,
                          DoorEstimatorPreview, primitives (Section/Heading/Badge)
  sections/               One file per page section (Hero, About, Expertise,
                          Projects, Experience, Skills, Credentials, Contact)
  data/profile.ts         SINGLE SOURCE OF TRUTH — all content lives here
  types/index.ts          Shared content-model types
  hooks/                  useScrollSpy, usePrefersReducedMotion
  lib/cn.ts               classname joiner
```

## Editing content

All copy, skills, experience, projects, education, certification and languages
are in [`src/data/profile.ts`](src/data/profile.ts). Components are presentation
only — change the data file, not the components.

Every fact in that file comes from Ahmad's two CVs. Nothing is invented.

## CV downloads

The "Download CV" menu links to:

| Menu item               | File                                                |
| ----------------------- | --------------------------------------------------- |
| Full Stack Developer CV | `public/cv/Ahmad-Al-Wattar-Full-Stack-Developer.pdf`|
| Network Engineer CV     | `public/cv/Ahmad-Al-Wattar-Network-Engineer.pdf`    |

Both files are already in the repo. To update them, replace the PDFs in
`public/cv/` keeping the same filenames — anything in `public/` is copied to the
site root at build time.

## Deployment

Any static host works. Build with `npm run build` and serve `dist/`.
The site is a single page; configure the host to serve `index.html` for all
routes if you add client-side routing later.
