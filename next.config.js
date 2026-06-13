/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // If your site is at the root of the domain, basePath should be empty
  basePath: '', 
};

export default nextConfig;
