import type { BuildingInteractionState, BuildingId } from "./contracts";
import type { InteractionEvent } from "./events";

export const initialInteractionState: BuildingInteractionState = { buildingId: null, phase: "idle", focus: "idle" };

export function interactionReducer(state: BuildingInteractionState, event: InteractionEvent): BuildingInteractionState {
  switch (event.type) {
    case "BuildingFocused":
      return state.phase === "idle" || state.phase === "focused" ? { ...state, buildingId: event.buildingId, phase: "focused", focus: "focused" } : state;
    case "BuildingUnfocused":
      return state.buildingId === event.buildingId && state.phase === "focused" ? { ...state, phase: "idle", focus: "unfocused" } : state;
    case "BuildingActivated":
      return canActOn(state, event.buildingId, "focused") ? { ...state, phase: "activated" } : state;
    case "TransformationRequested":
      return canActOn(state, event.buildingId, "activated") ? { ...state, phase: "transforming" } : state;
    case "EnterCompleted":
      return canActOn(state, event.buildingId, "transforming") ? { ...state, phase: "interior" } : state;
    case "ExitRequested":
      return canActOn(state, event.buildingId, "interior") ? { ...state, phase: "returning" } : state;
    case "ReturnCompleted":
      return canActOn(state, event.buildingId, "returning") ? initialInteractionState : state;
    default:
      return state;
  }
}

function canActOn(state: BuildingInteractionState, buildingId: BuildingId, phase: BuildingInteractionState["phase"]) {
  return state.buildingId === buildingId && state.phase === phase;
}
