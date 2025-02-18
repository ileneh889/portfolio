/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
//   // output: 'export',
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
