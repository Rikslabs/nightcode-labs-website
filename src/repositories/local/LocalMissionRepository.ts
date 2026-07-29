import type { MissionRepository } from "../contracts";
import type { HeadquartersProvider } from "@/providers";
export class LocalMissionRepository implements MissionRepository { constructor(private readonly provider: HeadquartersProvider) {} getStrategicDirectives() { return this.provider.getStrategicDirectives(); } getMissionStatus() { return this.provider.getMissionStatus(); } }
