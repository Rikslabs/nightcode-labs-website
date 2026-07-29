import type { ResearchRepository } from "../contracts";
import type { HeadquartersProvider } from "@/providers";
export class LocalResearchRepository implements ResearchRepository { constructor(private readonly provider: HeadquartersProvider) {} getPrograms() { return this.provider.getResearchPrograms(); } getProtocols() { return this.provider.getResearchProtocols(); } getResearchStatus() { return this.provider.getResearchStatus(); } }
