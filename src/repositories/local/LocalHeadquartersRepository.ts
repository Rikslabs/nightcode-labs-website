import type { HeadquartersRepository } from "../contracts";
import type { HeadquartersProvider } from "@/providers";
export class LocalHeadquartersRepository implements HeadquartersRepository { constructor(private readonly provider: HeadquartersProvider) {} getFloors() { return this.provider.getHeadquartersFloors(); } getMissionPaths() { return this.provider.getMissionPaths(); } getStatuses() { return this.provider.getHeadquartersStatuses(); } }
