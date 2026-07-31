export const worldPhases = ["idle", "focusing", "activating", "navigating", "transitioning", "returning"] as const;
export type WorldPhase = (typeof worldPhases)[number];

export type AnchorName = "orbit" | "front" | "entrance" | "lobby" | "mission-control" | "core" | "room";

export type AnchorPoint = Readonly<{
  name: AnchorName;
  ownerId: string;
  level: "universe" | "city" | "building" | "room" | "application";
  targetId: string;
}>;

export type WorldState = Readonly<{
  phase: WorldPhase;
  activeTargetId: string | null;
  origin: AnchorPoint | null;
  destination: AnchorPoint | null;
  transitionId: string | null;
}>;

export type WorldCommand =
  | Readonly<{ type: "FocusBuilding"; buildingId: string }>
  | Readonly<{ type: "ActivateBuilding"; buildingId: string }>
  | Readonly<{ type: "EnterSpace"; origin: AnchorPoint; destination: AnchorPoint }>
  | Readonly<{ type: "ExitSpace"; spaceId: string }>
  | Readonly<{ type: "Return" }>
  | Readonly<{ type: "Cancel" }>
  | Readonly<{ type: "NavigateTo"; origin: AnchorPoint; destination: AnchorPoint }>;
