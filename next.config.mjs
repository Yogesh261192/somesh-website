/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.delhiphysioathome.com',
          },
        ],
        destination: 'https://delhiphysioathome.com/:path*',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
