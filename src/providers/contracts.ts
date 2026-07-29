import type { EngineeringOperation, HeadquartersStatus, MissionPath, Product, ResearchProgram, StrategicDirective } from "@/data";
import type { EngineeringStatus } from "@/status/engineeringStatus";
import type { MissionStatus } from "@/status/missionStatus";
import type { ResearchStatus } from "@/status/researchStatus";
import type { ProductStatus } from "@/status/productStatus";
export type { EngineeringOperation, HeadquartersStatus, MissionPath, Product, ResearchProgram, StrategicDirective } from "@/data";

export interface HeadquartersProvider { getProducts(): readonly Product[]; getEngineeringOperations(): readonly EngineeringOperation[]; getEngineeringPrinciples(): readonly string[]; getEngineeringStatus(): EngineeringStatus; getMissionStatus(): MissionStatus; getResearchStatus(): ResearchStatus; getProductStatus(): ProductStatus; getResearchPrograms(): readonly ResearchProgram[]; getResearchProtocols(): readonly string[]; getStrategicDirectives(): readonly StrategicDirective[]; getHeadquartersFloors(): readonly string[]; getMissionPaths(): readonly MissionPath[]; getHeadquartersStatuses(): readonly HeadquartersStatus[]; getLaboratoryPipeline(): readonly string[]; }
export interface EnrichedEngineeringProvider extends HeadquartersProvider { getEngineeringStatusWithGitHub(): Promise<EngineeringStatus>; }
