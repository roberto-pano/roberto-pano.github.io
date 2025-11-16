#!/usr/bin/env bash
set -euo pipefail

echo "This script will stop tracking the '2.6.0' vendored gem cache and commit the change."
echo "It will NOT rewrite git history. To fully purge sensitive files from history, use the BFG or git filter-repo (see comments below)."

read -p "Proceed to remove '2.6.0' from the index and commit (y/N)? " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo "Aborting. No changes made."
  exit 1
fi

git rm -r --cached 2.6.0 || true
git rm -r --cached gems || true
git add .gitignore
git commit -m "chore: stop tracking vendored gem cache (2.6.0) and ignore it"

echo "Pushed local removal commit. If you want to remove files from git history you must run a history rewrite tool (BFG or git filter-repo) and force-push."
echo "Example (BFG):"
echo "  # Install BFG jar, then run:"
echo "  java -jar bfg.jar --delete-folders 2.6.0 --delete-folders gems --delete-files '*.pem' --no-blob-protection"
echo "  git reflog expire --expire=now --all && git gc --prune=now --aggressive"
echo "  git push --force origin main"

echo "REMEMBER: If these files contained real secrets, rotate any keys that may have been leaked before or after rewriting history."
