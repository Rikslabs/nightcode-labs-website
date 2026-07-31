import { blendElevation, featureInfluence, rotatedEllipseDistance } from "../core/HeightProfile";
import type { TerrainFeature } from "../core/TerrainTypes";

export function applyTerrainFeature(
  currentElevation: number,
  x: number,
  z: number,
  feature: TerrainFeature,
): number {
  const distance = rotatedEllipseDistance(x, z, feature);
  const influence = featureInfluence(distance, feature.falloff);
  if (influence <= 0) return currentElevation;

  const strength = feature.strength ?? 1;
  if (feature.kind === "peak" || feature.kind === "ridge") {
    return Math.max(currentElevation, blendElevation(currentElevation, feature.elevation, influence, strength));
  }
  return blendElevation(currentElevation, feature.elevation, influence, strength);
}

export function applyFeatureSet(
  elevation: number,
  x: number,
  z: number,
  features: readonly TerrainFeature[],
): number {
  return features.reduce(
    (current, feature) => applyTerrainFeature(current, x, z, feature),
    elevation,
  );
}
