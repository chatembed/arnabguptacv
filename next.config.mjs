/** @type {import('next').NextConfig} */
// Hard-coded for GitHub Pages repo deployment
// We serve the site at https://chatembed.github.io/arnabguptacv
const repo = '/arnabguptacv';
const absoluteAssetPrefix = 'https://arnabgupta.me';

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
  // hard-coded basePath and assetPrefix for the GitHub Pages URL
  basePath: repo,
  assetPrefix: absoluteAssetPrefix,
};

export default nextConfig;
