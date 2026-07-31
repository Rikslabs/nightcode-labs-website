export const WORLD_STAGE: number = 2;

export const worldStageFeatures = Object.freeze({
  terrain: WORLD_STAGE >= 2,
  ocean: WORLD_STAGE >= 3,
  skyBackdrop: WORLD_STAGE >= 4,
  legacyArrivalEnvironment: WORLD_STAGE >= 4,
  legacyArrivalInterface: WORLD_STAGE >= 4,
});
