import type { EngineeringRepository } from "../contracts";
import type { EnrichedEngineeringProvider } from "@/providers";
export class LocalEngineeringRepository implements EngineeringRepository { constructor(private readonly provider: EnrichedEngineeringProvider) {} getOperations() { return this.provider.getEngineeringOperations(); } getPrinciples() { return this.provider.getEngineeringPrinciples(); } getEngineeringStatus() { return this.provider.getEngineeringStatus(); } getEngineeringStatusWithGitHub() { return this.provider.getEngineeringStatusWithGitHub(); } }
