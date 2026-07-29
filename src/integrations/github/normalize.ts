import type { GitHubEngineeringMetadata } from "./types";
type JsonObject = { readonly [key: string]: unknown };
const objectValue = (value: unknown): JsonObject | undefined => value !== null && typeof value === "object" ? value as JsonObject : undefined;
const stringValue = (value: unknown): string | undefined => typeof value === "string" && value.length > 0 ? value : undefined;
const numberValue = (value: unknown): number | undefined => typeof value === "number" && Number.isFinite(value) ? value : undefined;
export function normalizeGitHubMetadata(owner: string, repository: string, repo: JsonObject, commit: JsonObject): GitHubEngineeringMetadata { const commitData = objectValue(commit.commit); const author = objectValue(commitData?.author); return Object.freeze({ owner, repository, sourceStatus: "available", branch: stringValue(repo.default_branch), visibility: stringValue(repo.visibility), repositoryUrl: stringValue(repo.html_url), latestCommit: stringValue(commit.sha), latestCommitAuthor: stringValue(author?.name), latestCommitTime: stringValue(author?.date), openIssues: numberValue(repo.open_issues_count), lastUpdated: stringValue(repo.updated_at ?? repo.pushed_at) }); }
