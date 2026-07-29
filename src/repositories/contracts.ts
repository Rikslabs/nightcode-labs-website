import type { EngineeringOperation, HeadquartersStatus, MissionPath, Product, ResearchProgram, StrategicDirective } from "@/providers";
import type { EngineeringStatus } from "@/status/engineeringStatus";
import type { MissionStatus } from "@/status/missionStatus";
import type { ResearchStatus } from "@/status/researchStatus";
import type { ProductStatus } from "@/status/productStatus";

export interface ProductsRepository { getProducts(): readonly Product[]; getFeaturedProduct(): Product | undefined; getLaboratoryPipeline(): readonly string[]; getProductStatus(): ProductStatus; }
export interface EngineeringRepository { getOperations(): readonly EngineeringOperation[]; getPrinciples(): readonly string[]; getEngineeringStatus(): EngineeringStatus; getEngineeringStatusWithGitHub(): Promise<EngineeringStatus>; }
export interface MissionRepository { getStrategicDirectives(): readonly StrategicDirective[]; getMissionStatus(): MissionStatus; }
export interface ResearchRepository { getPrograms(): readonly ResearchProgram[]; getProtocols(): readonly string[]; getResearchStatus(): ResearchStatus; }
export interface HeadquartersRepository { getFloors(): readonly string[]; getMissionPaths(): readonly MissionPath[]; getStatuses(): readonly HeadquartersStatus[]; }
