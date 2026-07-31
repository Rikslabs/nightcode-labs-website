export const interactionPhases = ["idle", "focused", "activated", "transforming", "interior", "returning"] as const;
export type InteractionPhase = (typeof interactionPhases)[number];

export const focusStates = ["idle", "focused", "unfocused"] as const;
export type FocusState = (typeof focusStates)[number];

export type BuildingId = string;
export type SpatialLevel = "universe" | "city" | "building" | "room" | "application";

export type BuildingInteractionState = Readonly<{
  buildingId: BuildingId | null;
  phase: InteractionPhase;
  focus: FocusState;
}>;

export type NavigationNode = Readonly<{
  level: SpatialLevel;
  id: string;
  label?: string;
}>;

export type BuildingInteractionContract = Readonly<{
  id: BuildingId;
  label: string;
  enabled?: boolean;
}>;
