import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const pages = [
  'for-colleges',
  'for-sponsors',
  'programs',
  'about',
  'resources',
  'contact',
  'home'
];

if (fs.existsSync(distDir)) {
  const indexHtmlPath = path.join(distDir, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

    // 1. Create 404.html as SPA fallback (Vercel automatically serves 404.html on unmatched static routes)
    fs.writeFileSync(path.join(distDir, '404.html'), indexHtml);

    // 2. Create both folder/index.html and route.html for every page
    pages.forEach((page) => {
      const pageDir = path.join(distDir, page);
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true });
      }
      fs.writeFileSync(path.join(pageDir, 'index.html'), indexHtml);
      fs.writeFileSync(path.join(distDir, `${page}.html`), indexHtml);
    });

    console.log(`[Postbuild] Generated static routes for: ${pages.join(', ')} + 404.html`);
  } else {
    console.error('[Postbuild] dist/index.html not found');
  }
} else {
  console.error('[Postbuild] dist directory not found');
}
