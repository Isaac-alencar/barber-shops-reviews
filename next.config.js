/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/barber_shops',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
