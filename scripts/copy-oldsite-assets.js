const fs = require('fs');
const path = require('path');

const srcRoot = path.resolve(
  __dirname,
  '..',
  'cosmic-pony',
  'old-site-archived',
);
const destRoot = path.resolve(__dirname, '..', 'site', 'public', 'assets');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true});
  }
}

function shouldCopy(file) {
  // Only copy image files, CSS, and JS
  const ext = path.extname(file).toLowerCase();
  const allowedExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.svg',
    '.ico',
    '.css',
    '.js',
  ];

  // Skip hidden files and config files
  if (
    file.startsWith('.') ||
    file.includes('package.json') ||
    file.includes('tsconfig') ||
    file.includes('eslint')
  ) {
    return false;
  }

  return allowedExtensions.includes(ext);
}

function copyRecursive(srcDir, destDir) {
  ensureDir(destDir);
  const items = fs.readdirSync(srcDir, {withFileTypes: true});
  for (const it of items) {
    const srcPath = path.join(srcDir, it.name);
    const destPath = path.join(destDir, it.name);
    if (it.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else if (it.isFile()) {
      if (shouldCopy(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log('copied', srcPath, '->', destPath);
      }
    }
  }
}

if (!fs.existsSync(srcRoot)) {
  console.error('Source old-site folder not found at', srcRoot);
  process.exit(1);
}

copyRecursive(srcRoot, destRoot);
console.log('Done copying assets to', destRoot);
