// Allow configuring a deployment base path via the BASE_PATH env var.
// When deploying to GitHub Pages we set BASE_PATH=/customer-feedback, but do
// NOT set it on Vercel so assets and CSS resolve at the site root.
const basePath = process.env.BASE_PATH || '';
const assetPrefix = basePath ? `${basePath}/` : '';

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix,
};
