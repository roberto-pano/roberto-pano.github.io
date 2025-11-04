This folder contains a small single-page React app scaffold to replace the multiple HTML pages under `old-site/`.

Quick start (from repo root):

1. Install dependencies:

   npm install

2. Run the dev server for the web site:

   npm run dev:web

Notes:

- Move static assets (images, etc.) referenced by your pages into `site/assets/` and update image paths in the components.
- To copy assets from the old site into `site/assets/` automatically, run from the repository root:

  npm run copy:assets

  This will copy non-HTML files from `cosmic-pony/old-site/` into `site/assets/` preserving folder structure.

- The components in `site/src/pages/` are placeholders. Copy the HTML content from `old-site/*.html` into the respective components.
- When you're happy, run `npm run build:web` to produce a production build.
