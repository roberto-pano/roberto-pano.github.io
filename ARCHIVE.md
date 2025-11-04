Archive notes for `old-site`

The original static site files are located under `cosmic-pony/old-site/` and were copied into `site/assets/` during the migration.

If you want to archive the old-site so it is no longer served by Netlify, you have two safe options:

1) Configure Netlify to use the `site/dist` publish directory (recommended). This repo includes `netlify.toml` configured to run `npm run build:web` and publish `site/dist`. Netlify will then serve the React app from `site/dist` and ignore `old-site` content.

2) Move the old-site into an `archive/` folder (destructive). To do this locally:

   - Move the folder: `git mv cosmic-pony/old-site cosmic-pony/old-site-archived`
   - Commit and push.

   Note: This will remove the old files from the repository root and preserve them under the archived name.

If you'd like, I can perform the archive move for you (I'll run the `git mv` and commit). Reply `archive` and I'll do it, or reply `keep` and I'll leave the files as-is.
