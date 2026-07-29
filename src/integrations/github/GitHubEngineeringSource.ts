import type { EngineeringStatus } from "@/status/engineeringStatus";
import { GitHubClient } from "./GitHubClient";
export class GitHubEngineeringSource { constructor(private readonly client = new GitHubClient()) {} async enrich(status: EngineeringStatus): Promise<EngineeringStatus> { return { ...status, github: await this.client.getRepositoryMetadata() }; } }
