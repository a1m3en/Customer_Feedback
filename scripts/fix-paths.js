const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
const NEXT_STATIC = path.join(__dirname, '..', '.next', 'static');
const OUT_NEXT_STATIC = path.join(OUT_DIR, '_next', 'static');

function rewriteFile(filePath) {
  let s = fs.readFileSync(filePath, 'utf8');

  // Force all local asset references to absolute URLs under the repo path.
  // This avoids fragile relative-prefix logic and works reliably when Pages serves
  // the site at https://<user>.github.io/customer-feedback/.
  const repoPrefix = '/customer-feedback/';

  // Helper to strip leading ./ ../ or slashes
  const stripLeading = (p) => p.replace(/^(?:\.\.\/|\.\/|\/)+/, '');

  // Collapse any existing repeated repo prefixes first (idempotent)
  s = s.replace(/(?:\/customer-feedback\/)+/g, '/customer-feedback/');

  // Replace any occurrence of (optional ./ or ../ or /) followed by _next/, brands/, or logo.svg
  // with the absolute repo-prefixed path. This covers index pages and nested pages.
  s = s.replace(/(?:\.\.\/|\.\/|\/)?_next\//g, repoPrefix + '_next/');
  s = s.replace(/(?:\.\.\/|\.\/|\/)?brands\//g, repoPrefix + 'brands/');
  s = s.replace(/(?:\.\.\/|\.\/|\/)?logo\.svg/g, repoPrefix + 'logo.svg');

  // Rewrite attribute values like href="/something" or src='./something' or href="../foo"
  // but avoid rewriting absolute URLs (http(s)://, //), mailto:, tel:, or anchors (#).
  s = s.replace(/(href=|src=)(["'])(?:\.\.\/|\.\/|\/)?(?!\/|https?:|mailto:|tel:|#)([^"']+)\2/g, (m, p1, p2, p3) => {
    // Remove any leading ./ ../ or leading slashes, and strip any existing customer-feedback segments
    let normalized = stripLeading(p3).replace(/^(?:customer-feedback\/)+/, '');
    return `${p1}${p2}${repoPrefix}${normalized}${p2}`;
  });

  // Collapse any accidental repeated repo prefixes (e.g. /customer-feedback/customer-feedback/ -> /customer-feedback/)
  s = s.replace(/(?:\/customer-feedback\/){2,}/g, '/customer-feedback/');

  const before = fs.readFileSync(filePath, 'utf8');
  if (before !== s) {
    fs.writeFileSync(filePath, s, 'utf8');
    return true;
  }
  return false;
}

function walk(dir) {
  let processed = 0;
  let changed = 0;
  for (const name of fs.readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = fs.statSync(file);
    if (stat.isDirectory()) {
      const { processed: p, changed: c } = walk(file);
      processed += p; changed += c;
    } else if (stat.isFile() && file.endsWith('.html')) {
      processed++;
      if (rewriteFile(file)) changed++;
    }
  }
  return { processed, changed };
}

if (!fs.existsSync(OUT_DIR)) {
  console.error('out directory not found. Run `next build` first.');
  process.exit(1);
}

// Ensure .next/static files are copied into out/_next/static so Pages can serve them
if (fs.existsSync(NEXT_STATIC)) {
  // ensure out/_next exists
  fs.mkdirSync(OUT_NEXT_STATIC, { recursive: true });
  // copy recursively (simple implementation)
  function copyDir(src, dest) {
    for (const name of fs.readdirSync(src)) {
      const s = path.join(src, name);
      const d = path.join(dest, name);
      const st = fs.statSync(s);
      if (st.isDirectory()) {
        fs.mkdirSync(d, { recursive: true });
        copyDir(s, d);
      } else {
        fs.copyFileSync(s, d);
      }
    }
  }
  try {
    copyDir(NEXT_STATIC, OUT_NEXT_STATIC);
    console.log('Copied .next/static -> out/_next/static');
  } catch (err) {
    console.error('Failed to copy .next/static:', err.message);
  }
} else {
  console.log('.next/static not found; skipping copy');
}

const result = walk(OUT_DIR);
console.log(`Rewrote paths in HTML files under out/ - processed=${result.processed} changed=${result.changed}`);
