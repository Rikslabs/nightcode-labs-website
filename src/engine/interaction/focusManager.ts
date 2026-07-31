import type { BuildingId, FocusState } from "./contracts";

export class FocusManager {
  private focusedBuildingId: BuildingId | null = null;
  private state: FocusState = "idle";

  focus(buildingId: BuildingId) {
    this.focusedBuildingId = buildingId;
    this.state = "focused";
  }

  blur(buildingId?: BuildingId) {
    if (buildingId && this.focusedBuildingId !== buildingId) return;
    this.focusedBuildingId = null;
    this.state = "unfocused";
  }

  getSnapshot() {
    return { buildingId: this.focusedBuildingId, state: this.state } as const;
  }
}
