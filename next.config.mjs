/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 只在 GitHub Actions 執行時添加 /portfolio 前綴
  basePath: process.env.GITHUB_ACTIONS ? '/portfolio' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/portfolio/' : '',
  images: {
    unoptimized: true,
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
