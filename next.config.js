/** @type {import("next").NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
