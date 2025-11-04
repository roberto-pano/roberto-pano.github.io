const fs = require('fs');
const path = require('path');

const from = path.resolve(__dirname, '..', 'site', 'assets');
const to = path.resolve(__dirname, '..', 'public', 'assets');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) {
    return;
  }
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, {recursive: true});
  }
  const entries = fs.readdirSync(src, {withFileTypes: true});
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      // Only copy jpg/jpeg/png
      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
}

try {
  copyRecursive(from, to);
  console.log('Copied assets from', from, 'to', to);
} catch (e) {
  console.error('Failed to copy assets:', e.message);
  process.exitCode = 1;
}
