import type { BuildingId } from "./contracts";

export class SelectionManager {
  private activeBuildingId: BuildingId | null = null;

  select(buildingId: BuildingId) {
    this.activeBuildingId = buildingId;
  }

  clear() {
    this.activeBuildingId = null;
  }

  getActive() {
    return this.activeBuildingId;
  }
}
