import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Static HTML & SEO files to copy from root to dist
const filesToCopy = [
  'calculator.html',
  'delivery.html',
  'faq.html',
  'about.html',
  'contact.html',
  'product.html',
  'quote.html',
  'shop.html',
  '404.html',
  'robots.txt',
  'sitemap.xml'
];

filesToCopy.forEach((file) => {
  const src = path.join(rootDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> dist/${file}`);
  }
});

// Copy assets/css and assets/js into dist/assets/
const copyRecursive = (src, dest) => {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((child) => {
      copyRecursive(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

copyRecursive(path.join(rootDir, 'assets', 'css'), path.join(distDir, 'assets', 'css'));
copyRecursive(path.join(rootDir, 'assets', 'js'), path.join(distDir, 'assets', 'js'));

// Also copy PDF directly to dist/ root as fallback
const pdfSrc = path.join(rootDir, 'public', 'assets', 'Cool_Base_Hardware_Company_Profile.pdf');
if (fs.existsSync(pdfSrc)) {
  fs.copyFileSync(pdfSrc, path.join(distDir, 'Cool_Base_Hardware_Company_Profile.pdf'));
}

console.log('Static pages and assets copied successfully to dist/');
