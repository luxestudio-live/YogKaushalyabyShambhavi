/** @type {import('next').NextConfig} */

const repoName = 'YogKaushalyabyShambhavi';

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
}

export default nextConfig
