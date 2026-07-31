"use client";

import { useCallback, useReducer, useState } from "react";
import { FocusManager } from "./focusManager";
import type { BuildingId } from "./contracts";
import type { InteractionEvent } from "./events";
import { NavigationStack } from "./navigationStack";
import { SelectionManager } from "./selectionManager";
import { initialInteractionState, interactionReducer } from "./stateMachine";

export function useInteractionCore() {
  const [state, dispatch] = useReducer(interactionReducer, initialInteractionState);
  const [selection] = useState(() => new SelectionManager());
  const [focus] = useState(() => new FocusManager());
  const [navigation] = useState(() => new NavigationStack());

  const send = useCallback((event: InteractionEvent) => dispatch(event), []);
  const focusBuilding = useCallback((buildingId: BuildingId) => { selection.select(buildingId); focus.focus(buildingId); send({ type: "BuildingFocused", buildingId }); }, [focus, selection, send]);
  const unfocusBuilding = useCallback((buildingId: BuildingId) => { focus.blur(buildingId); send({ type: "BuildingUnfocused", buildingId }); }, [focus, send]);
  const activateBuilding = useCallback((buildingId: BuildingId) => send({ type: "BuildingActivated", buildingId }), [send]);
  const requestTransformation = useCallback((buildingId: BuildingId) => send({ type: "TransformationRequested", buildingId }), [send]);
  const completeEnter = useCallback((buildingId: BuildingId) => send({ type: "EnterCompleted", buildingId }), [send]);
  const requestExit = useCallback((buildingId: BuildingId) => send({ type: "ExitRequested", buildingId }), [send]);
  const completeReturn = useCallback((buildingId: BuildingId) => { selection.clear(); focus.blur(buildingId); send({ type: "ReturnCompleted", buildingId }); }, [focus, selection, send]);

  return { state, activeBuildingId: selection.getActive(), focusSnapshot: focus.getSnapshot(), navigation, send, focusBuilding, unfocusBuilding, activateBuilding, requestTransformation, completeEnter, requestExit, completeReturn };
}

export type InteractionCore = ReturnType<typeof useInteractionCore>;
