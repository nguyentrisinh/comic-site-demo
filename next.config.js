/** @type {import("next").NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd11unjture0ske.cloudfront.net',
      },
    ],
  },
};

module.exports = nextConfig;
