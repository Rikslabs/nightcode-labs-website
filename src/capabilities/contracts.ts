import type { EngineeringOperation, HeadquartersStatus, Product, ResearchProgram, StrategicDirective } from "@/providers";
import type { EngineeringStatus } from "@/status/engineeringStatus";
import type { MissionStatus } from "@/status/missionStatus";
import type { ProductStatus } from "@/status/productStatus";
import type { ResearchStatus } from "@/status/researchStatus";

export type HeadquartersOverview = Readonly<{
  engineering: EngineeringStatus;
  products: ProductStatus;
  missions: MissionStatus;
  research: ResearchStatus;
  generatedAt: string;
}>;

export type HeadquartersSummary = Readonly<{
  currentVersion: string;
  engineeringHealth: EngineeringStatus["headquartersStatus"];
  featuredMission: string;
  featuredProduct: string;
  primaryResearch: string;
  generatedAt: string;
}>;

export type DepartmentLookup = Readonly<{
  found: true;
  name: string;
  floor: string;
  status: string;
}> | Readonly<{ found: false; name: string }>;

export type HeadquartersSearchDomain = "product" | "mission" | "research" | "engineering";
export type HeadquartersSearchResult = Readonly<{ domain: HeadquartersSearchDomain; title: string; description: string; status?: string }>;

export type HeadquartersCapabilityRepositories = Readonly<{
  products: { getProducts(): readonly Product[]; getFeaturedProduct(): Product | undefined; getProductStatus(): ProductStatus };
  engineering: { getOperations(): readonly EngineeringOperation[]; getEngineeringStatus(): EngineeringStatus };
  missions: { getStrategicDirectives(): readonly StrategicDirective[]; getMissionStatus(): MissionStatus };
  research: { getPrograms(): readonly ResearchProgram[]; getResearchStatus(): ResearchStatus };
  headquarters: { getFloors(): readonly string[]; getStatuses(): readonly HeadquartersStatus[] };
}>;

export interface HeadquartersCapabilities {
  getEngineeringOverview(): EngineeringStatus;
  getMissionOverview(): MissionStatus;
  getResearchOverview(): ResearchStatus;
  getProductsOverview(): ProductStatus;
  getHeadquartersOverview(): HeadquartersOverview;
  getFeaturedProduct(): Product | undefined;
  getFeaturedMission(): string;
  getPrimaryResearch(): string;
  getEngineeringHealth(): EngineeringStatus["headquartersStatus"];
  getHeadquartersSummary(): HeadquartersSummary;
  findDepartment(name: string): DepartmentLookup;
  search(query: string): readonly HeadquartersSearchResult[];
}
