import { LocalEngineeringRepository } from "./local/LocalEngineeringRepository";
import { LocalHeadquartersRepository } from "./local/LocalHeadquartersRepository";
import { LocalMissionRepository } from "./local/LocalMissionRepository";
import { LocalProductsRepository } from "./local/LocalProductsRepository";
import { LocalResearchRepository } from "./local/LocalResearchRepository";
import { headquartersProvider } from "@/providers";
export const headquartersRepositories = { products: new LocalProductsRepository(headquartersProvider), engineering: new LocalEngineeringRepository(headquartersProvider), missions: new LocalMissionRepository(headquartersProvider), research: new LocalResearchRepository(headquartersProvider), headquarters: new LocalHeadquartersRepository(headquartersProvider) } as const;
