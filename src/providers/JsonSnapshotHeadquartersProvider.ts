import rawSnapshot from "@/snapshots/headquarters.snapshot.json";
import { createEngineeringStatus, type EngineeringStatus } from "@/status/engineeringStatus";
import { createMissionStatus, type MissionStatus } from "@/status/missionStatus";
import { createProductStatus, type ProductStatus } from "@/status/productStatus";
import { createResearchStatus, type ResearchStatus } from "@/status/researchStatus";
import type { HeadquartersSnapshot } from "@/snapshots";
import type { HeadquartersProvider } from "./contracts";

const snapshot: HeadquartersSnapshot = rawSnapshot as unknown as HeadquartersSnapshot;
export class JsonSnapshotHeadquartersProvider implements HeadquartersProvider {
  private readonly generatedAt = new Date().toISOString();
  getProducts() { return snapshot.products; } getEngineeringOperations() { return snapshot.engineeringOperations; } getEngineeringPrinciples() { return snapshot.engineeringPrinciples; } getEngineeringStatus(): EngineeringStatus { return createEngineeringStatus(snapshot, this.generatedAt); } getMissionStatus(): MissionStatus { return createMissionStatus(snapshot, this.generatedAt); } getResearchStatus(): ResearchStatus { return createResearchStatus(snapshot, this.generatedAt); } getProductStatus(): ProductStatus { return createProductStatus(snapshot, this.generatedAt); } getResearchPrograms() { return snapshot.researchPrograms; } getResearchProtocols() { return snapshot.researchProtocols; } getStrategicDirectives() { return snapshot.strategicDirectives; } getHeadquartersFloors() { return snapshot.headquartersFloors; } getMissionPaths() { return snapshot.missionPaths; } getHeadquartersStatuses() { return snapshot.headquartersStatuses; } getLaboratoryPipeline() { return snapshot.laboratoryPipeline; }
}
export const jsonSnapshotHeadquartersProvider = new JsonSnapshotHeadquartersProvider();
