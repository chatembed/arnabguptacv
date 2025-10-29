/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    // Use `remotePatterns` instead of `domains` (domains is deprecated).
    // This protects against malicious remote image hosts.
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
  basePath: '',
  // NOTE: `domains` moved into `images.domains` above to fix Next.js config warning
}

export default nextConfig
