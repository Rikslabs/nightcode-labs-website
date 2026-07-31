import type { MeshStandardMaterialParameters } from "three";
import { worldColors } from "../engine/config";

export const terrainMaterialPreset: Readonly<MeshStandardMaterialParameters> = {
  color: worldColors.terrain,
  roughness: 0.94,
  metalness: 0.02,
};

export const oceanMaterialPreset: Readonly<MeshStandardMaterialParameters> = {
  color: worldColors.ocean,
  roughness: 0.22,
  metalness: 0.08,
  transparent: true,
  opacity: 0.52,
};
