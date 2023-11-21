/** @type {import("next").NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
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
