import type { HeadquartersCapabilityRepositories, HeadquartersCapabilities, HeadquartersOverview, HeadquartersSearchResult, HeadquartersSummary, DepartmentLookup } from "./contracts";

const normalize = (value: string) => value.trim().toLowerCase();

export class HeadquartersCapabilityService implements HeadquartersCapabilities {
  constructor(private readonly repositories: HeadquartersCapabilityRepositories) {}

  getEngineeringOverview() { return this.repositories.engineering.getEngineeringStatus(); }
  getMissionOverview() { return this.repositories.missions.getMissionStatus(); }
  getResearchOverview() { return this.repositories.research.getResearchStatus(); }
  getProductsOverview() { return this.repositories.products.getProductStatus(); }

  getHeadquartersOverview(): HeadquartersOverview {
    const engineering = this.getEngineeringOverview();
    const products = this.getProductsOverview();
    const missions = this.getMissionOverview();
    const research = this.getResearchOverview();
    return Object.freeze({ engineering, products, missions, research, generatedAt: engineering.generatedAt });
  }

  getFeaturedProduct() { return this.repositories.products.getFeaturedProduct(); }
  getFeaturedMission() { return this.getMissionOverview().featuredMission; }
  getPrimaryResearch() { return this.getResearchOverview().primaryExperiment; }
  getEngineeringHealth() { return this.getEngineeringOverview().headquartersStatus; }

  getHeadquartersSummary(): HeadquartersSummary {
    const engineering = this.getEngineeringOverview();
    return Object.freeze({ currentVersion: engineering.version, engineeringHealth: engineering.headquartersStatus, featuredMission: this.getFeaturedMission(), featuredProduct: this.getProductsOverview().featuredProduct, primaryResearch: this.getPrimaryResearch(), generatedAt: engineering.generatedAt });
  }

  findDepartment(name: string): DepartmentLookup {
    const query = normalize(name);
    const departments = this.repositories.headquarters.getFloors();
    const index = departments.findIndex((floor) => normalize(floor).includes(query) || query.includes(normalize(floor)));
    if (query.length === 0 || index < 0) return { found: false, name };
    const status = this.repositories.headquarters.getStatuses()[index]?.[1] ?? "UNKNOWN";
    return { found: true, name: departments[index], floor: `FLOOR ${String(index).padStart(2, "0")}`, status };
  }

  search(query: string): readonly HeadquartersSearchResult[] {
    const term = normalize(query);
    if (!term) return [];
    const results: HeadquartersSearchResult[] = [];
    for (const product of this.repositories.products.getProducts()) if (normalize(`${product.name} ${product.description}`).includes(term)) results.push({ domain: "product", title: product.name, description: product.description, status: product.status });
    for (const mission of this.repositories.missions.getStrategicDirectives()) if (normalize(`${mission.title} ${mission.objective}`).includes(term)) results.push({ domain: "mission", title: mission.title, description: mission.objective, status: mission.status });
    for (const program of this.repositories.research.getPrograms()) if (normalize(program.slice(1, 3).join(" ")).includes(term)) results.push({ domain: "research", title: program[1], description: program[2], status: program[3] });
    for (const operation of this.repositories.engineering.getOperations()) if (normalize(operation.join(" ")).includes(term)) results.push({ domain: "engineering", title: operation[0], description: operation[1] });
    return Object.freeze(results);
  }
}
