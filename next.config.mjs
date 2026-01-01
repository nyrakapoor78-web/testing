/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.aienterpriseasm.in',
        pathname: '/uploads/**',
      },
    ],
  },
}

export default nextConfig
