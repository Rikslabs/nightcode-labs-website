"use client";

import { useCallback, useEffect } from "react";
import { useInteractionCore } from "@/engine/interaction/useInteractionCore";
import { useWorldDirector } from "@/engine/world/useWorldDirector";
import type { LivingBuildingConfig } from "./contracts";

export function useLivingBuilding(config: LivingBuildingConfig, onReturn: () => void) {
  const interaction = useInteractionCore();
  const world = useWorldDirector();
  const { focusBuilding, activateBuilding, requestTransformation, completeEnter, requestExit, completeReturn } = interaction;
  const { dispatch, completeTransition } = world;

  useEffect(() => {
    focusBuilding(config.id);
    dispatch({ type: "FocusBuilding", buildingId: config.id });
    const activate = window.setTimeout(() => {
      activateBuilding(config.id);
      dispatch({ type: "ActivateBuilding", buildingId: config.id });
    }, config.timing.activation);
    const transform = window.setTimeout(() => {
      requestTransformation(config.id);
      dispatch({ type: "EnterSpace", origin: config.anchors.origin, destination: config.anchors.entrance });
    }, config.timing.transformation);
    const enter = window.setTimeout(() => {
      completeEnter(config.id);
      completeTransition();
    }, config.timing.arrival);
    return () => { window.clearTimeout(activate); window.clearTimeout(transform); window.clearTimeout(enter); };
  }, [activateBuilding, completeEnter, completeTransition, config, dispatch, focusBuilding, requestTransformation]);

  const returnToOrigin = useCallback(() => {
    if (interaction.state.phase !== "interior") return;
    requestExit(config.id);
    dispatch({ type: "ExitSpace", spaceId: config.id });
    const timer = window.setTimeout(() => {
      completeReturn(config.id);
      dispatch({ type: "Return" });
      onReturn();
    }, config.timing.return);
    return () => window.clearTimeout(timer);
  }, [completeReturn, config.id, config.timing.return, dispatch, interaction.state.phase, onReturn, requestExit]);

  return { ...interaction, world, returnToOrigin };
}
