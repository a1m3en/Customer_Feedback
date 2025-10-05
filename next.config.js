const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/customer-feedback' : '',
  assetPrefix: isProd ? '/customer-feedback/' : '',
};
