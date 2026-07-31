import type { BuildingId, SpatialLevel } from "./contracts";

export type InteractionEvent =
  | Readonly<{ type: "BuildingFocused"; buildingId: BuildingId }>
  | Readonly<{ type: "BuildingUnfocused"; buildingId: BuildingId }>
  | Readonly<{ type: "BuildingActivated"; buildingId: BuildingId }>
  | Readonly<{ type: "TransformationRequested"; buildingId: BuildingId }>
  | Readonly<{ type: "EnterCompleted"; buildingId: BuildingId }>
  | Readonly<{ type: "ExitRequested"; buildingId: BuildingId }>
  | Readonly<{ type: "ReturnCompleted"; buildingId: BuildingId }>
  | Readonly<{ type: "NavigationEntered"; level: SpatialLevel; id: string }>
  | Readonly<{ type: "NavigationReturned"; level: SpatialLevel; id: string }>
  | Readonly<{ type: "WorldFocused"; targetId: string }>
  | Readonly<{ type: "NavigationStarted"; origin: string; destination: string }>
  | Readonly<{ type: "NavigationCompleted"; origin: string; destination: string }>
  | Readonly<{ type: "TransitionCancelled"; origin: string; destination: string }>
  | Readonly<{ type: "SpaceEntered"; spaceId: string }>
  | Readonly<{ type: "SpaceExited"; spaceId: string }>;

export type InteractionEventListener = (event: InteractionEvent) => void;
