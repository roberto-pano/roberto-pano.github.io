This folder contains a small single-page React app scaffold to replace the multiple HTML pages from the legacy site.

Quick start (from repo root):

1. Install dependencies:

   npm install

2. Run the dev server for the web site:

   npm run dev:web

Notes:

- Move static assets (images, etc.) referenced by your pages into `site/assets/` and update image paths in the components.
Notes:

- Static assets referenced by any legacy pages can be migrated manually into `site/assets/`.

- The components in `site/src/pages/` are placeholders. Replace them with the JSX you'd like to serve from the new site. If you need to recover files from the old site, the archived copy is available at `cosmic-pony/old-site-archived/`.
- When you're happy, run `npm run build:web` to produce a production build.
