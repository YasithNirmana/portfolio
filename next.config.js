/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: If your site is at username.github.io/repo-name/, 
  // you must add: basePath: '/repo-name',
};

module.exports = nextConfig;