import type { InteractionEvent, InteractionEventListener } from "@/engine/interaction/events";
import type { AnchorPoint, WorldCommand, WorldState } from "./contracts";
import { createTransition } from "./transitions";
import { defaultWorldTiming, type TimingModel } from "./timing";

const initialWorldState: WorldState = { phase: "idle", activeTargetId: null, origin: null, destination: null, transitionId: null };

export class WorldDirector {
  private state: WorldState = initialWorldState;
  private readonly listeners = new Set<InteractionEventListener>();
  private readonly timing: TimingModel;

  constructor(timing: TimingModel = defaultWorldTiming) {
    this.timing = timing;
  }

  getState() { return this.state; }
  getTiming() { return this.timing; }
  subscribe(listener: InteractionEventListener) { this.listeners.add(listener); return () => this.listeners.delete(listener); }

  dispatch(command: WorldCommand) {
    switch (command.type) {
      case "FocusBuilding":
        this.state = { ...this.state, phase: "focusing", activeTargetId: command.buildingId };
        this.emit({ type: "WorldFocused", targetId: command.buildingId });
        return this.state;
      case "ActivateBuilding":
        if (this.state.activeTargetId !== command.buildingId) return this.state;
        this.state = { ...this.state, phase: "activating" };
        this.emit({ type: "BuildingActivated", buildingId: command.buildingId });
        return this.state;
      case "EnterSpace":
      case "NavigateTo":
        return this.beginTransition(command);
      case "ExitSpace":
        this.state = { ...this.state, phase: "returning", activeTargetId: command.spaceId };
        this.emit({ type: "SpaceExited", spaceId: command.spaceId });
        return this.state;
      case "Return":
        this.state = initialWorldState;
        return this.state;
      case "Cancel":
        if (this.state.transitionId) this.emit({ type: "TransitionCancelled", origin: this.state.origin?.targetId ?? "", destination: this.state.destination?.targetId ?? "" });
        this.state = { ...initialWorldState, activeTargetId: this.state.activeTargetId };
        return this.state;
    }
  }

  completeTransition() {
    if (!this.state.transitionId || !this.state.destination) return this.state;
    const destination = this.state.destination;
    const origin = this.state.origin;
    this.state = { ...this.state, phase: "idle", activeTargetId: destination.targetId, origin: null, destination: null, transitionId: null };
    this.emit({ type: "NavigationCompleted", origin: origin?.targetId ?? "", destination: destination.targetId });
    this.emit({ type: "SpaceEntered", spaceId: destination.targetId });
    return this.state;
  }

  private beginTransition(command: Extract<WorldCommand, { type: "EnterSpace" | "NavigateTo" }>) {
    const transition = createTransition(command);
    this.state = { phase: "navigating", activeTargetId: transition.destination.ownerId, origin: transition.origin, destination: transition.destination, transitionId: transition.id };
    this.emit({ type: "NavigationStarted", origin: transition.origin.targetId, destination: transition.destination.targetId });
    return this.state;
  }

  private emit(event: InteractionEvent) { this.listeners.forEach((listener) => listener(event)); }
}

export type { AnchorPoint };
