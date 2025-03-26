/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/list',
        destination: '/pages/list'
      },
      {
        source: '/opportunities',
        destination: '/pages/opportunities'
      }
    ]
  }
};

module.exports = nextConfig; 