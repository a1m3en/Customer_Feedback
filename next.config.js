/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 Enables static export
  images: { unoptimized: true }, // GitHub Pages doesn't support Image Optimization
  basePath: "/Customer_Feedback", // 👈 Use your repository name here
  assetPrefix: "/Customer_Feedback/",
};

module.exports = nextConfig;
