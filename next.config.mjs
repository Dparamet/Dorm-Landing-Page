const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY || "";
const repositoryName = repository.split("/")[1] || "";
const repositoryOwner = (process.env.GITHUB_REPOSITORY_OWNER || "").toLowerCase();
const isUserPageRepo = repositoryName.toLowerCase() === `${repositoryOwner}.github.io`;
const basePath = isGithubActions && !isUserPageRepo ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined
};

export default nextConfig;
