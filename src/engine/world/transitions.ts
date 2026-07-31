import type { AnchorPoint, WorldCommand } from "./contracts";

export type TransitionDefinition = Readonly<{
  id: string;
  origin: AnchorPoint;
  destination: AnchorPoint;
  action: "enter" | "navigate" | "return";
  completionEvent: "NavigationCompleted" | "SpaceEntered" | "SpaceExited";
  cancellable: boolean;
}>;

export function createTransition(command: Extract<WorldCommand, { type: "EnterSpace" | "NavigateTo" }>): TransitionDefinition {
  return {
    id: `${command.origin.ownerId}:${command.destination.ownerId}:${command.destination.name}`,
    origin: command.origin,
    destination: command.destination,
    action: command.type === "EnterSpace" ? "enter" : "navigate",
    completionEvent: command.type === "EnterSpace" ? "SpaceEntered" : "NavigationCompleted",
    cancellable: true,
  };
}
