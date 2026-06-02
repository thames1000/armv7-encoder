/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true"
const repo = "armv7-encoder"

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
