export type GitHubSourceStatus = "available" | "unavailable" | "not-configured";
export type GitHubEngineeringMetadata = Readonly<{ owner: string; repository: string; branch?: string; visibility?: string; repositoryUrl?: string; latestCommit?: string; latestCommitAuthor?: string; latestCommitTime?: string; openIssues?: number; lastUpdated?: string; sourceStatus: GitHubSourceStatus }>;
export type GitHubConfig = Readonly<{ owner: string; repository: string; token?: string }>;
