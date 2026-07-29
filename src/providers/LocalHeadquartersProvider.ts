import { engineeringOperations, engineeringPrinciples, headquartersFloors, headquartersStatus, laboratoryPipeline, missionPaths, products, researchPrograms, researchProtocols, strategicDirectives } from "@/data";
import { createEngineeringStatus, type EngineeringStatus } from "@/status/engineeringStatus";
import { createMissionStatus, type MissionStatus } from "@/status/missionStatus";
import { createProductStatus, type ProductStatus } from "@/status/productStatus";
import { createResearchStatus, type ResearchStatus } from "@/status/researchStatus";
import type { HeadquartersSnapshot } from "@/snapshots";
import type { HeadquartersProvider } from "./contracts";

const localSnapshot: HeadquartersSnapshot = { products, laboratoryPipeline, engineeringOperations, engineeringPrinciples, strategicDirectives, researchPrograms, researchProtocols, headquartersFloors, missionPaths, headquartersStatuses: headquartersStatus };

export class LocalHeadquartersProvider implements HeadquartersProvider {
  private readonly generatedAt = new Date().toISOString();
  getProducts() { return localSnapshot.products; } getEngineeringOperations() { return localSnapshot.engineeringOperations; } getEngineeringPrinciples() { return localSnapshot.engineeringPrinciples; } getEngineeringStatus(): EngineeringStatus { return createEngineeringStatus(localSnapshot, this.generatedAt); } getMissionStatus(): MissionStatus { return createMissionStatus(localSnapshot, this.generatedAt); } getResearchStatus(): ResearchStatus { return createResearchStatus(localSnapshot, this.generatedAt); } getProductStatus(): ProductStatus { return createProductStatus(localSnapshot, this.generatedAt); } getResearchPrograms() { return localSnapshot.researchPrograms; } getResearchProtocols() { return localSnapshot.researchProtocols; } getStrategicDirectives() { return localSnapshot.strategicDirectives; } getHeadquartersFloors() { return localSnapshot.headquartersFloors; } getMissionPaths() { return localSnapshot.missionPaths; } getHeadquartersStatuses() { return localSnapshot.headquartersStatuses; } getLaboratoryPipeline() { return localSnapshot.laboratoryPipeline; }
}
