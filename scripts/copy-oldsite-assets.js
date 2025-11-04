const fs = require('fs')
const path = require('path')

const srcRoot = path.resolve(__dirname, '..', 'cosmic-pony', 'old-site')
const destRoot = path.resolve(__dirname, '..', 'site', 'assets')

function ensureDir(dir){
  if(!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
}

function shouldCopy(file){
  // Skip HTML files; copy everything else (images, css, js, folders)
  const ext = path.extname(file).toLowerCase()
  if(ext === '.html' || ext === '.htm') return false
  return true
}

function copyRecursive(srcDir, destDir){
  ensureDir(destDir)
  const items = fs.readdirSync(srcDir, { withFileTypes: true })
  for(const it of items){
    const srcPath = path.join(srcDir, it.name)
    const destPath = path.join(destDir, it.name)
    if(it.isDirectory()){
      copyRecursive(srcPath, destPath)
    } else if(it.isFile()){
      if(shouldCopy(srcPath)){
        fs.copyFileSync(srcPath, destPath)
        console.log('copied', srcPath, '->', destPath)
      }
    }
  }
}

if(!fs.existsSync(srcRoot)){
  console.error('Source old-site folder not found at', srcRoot)
  process.exit(1)
}

copyRecursive(srcRoot, destRoot)
console.log('Done copying assets to', destRoot)
