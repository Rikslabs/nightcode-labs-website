import type { GitHubConfig } from "./types";
export function getGitHubConfig(): GitHubConfig | undefined { const owner = process.env.NEXT_PUBLIC_GITHUB_OWNER?.trim(); const repository = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY?.trim(); const token = process.env.GITHUB_TOKEN?.trim(); if (!owner || !repository) return undefined; return { owner, repository, ...(token ? { token } : {}) }; }
