/** @type {import('next').NextConfig} */
const repo = '/arnabguptacv';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arnabgupta.me',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'export',
  trailingSlash: true,
  basePath: repo,
  assetPrefix: repo,
};

export default nextConfig;
