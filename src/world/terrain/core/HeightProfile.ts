import type { TerrainFalloff, TerrainFeature } from "./TerrainTypes";

export function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

export function smoothstep(edge0: number, edge1: number, value: number): number {
  const t = clamp01((value - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

export function rotatedEllipseDistance(x: number, z: number, feature: TerrainFeature): number {
  const angle = feature.rotation ?? 0;
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);
  const localX = x - feature.center[0];
  const localZ = z - feature.center[1];
  const rotatedX = localX * cosine - localZ * sine;
  const rotatedZ = localX * sine + localZ * cosine;
  return Math.hypot(rotatedX / feature.radius[0], rotatedZ / feature.radius[1]);
}

export function featureInfluence(distance: number, falloff: TerrainFalloff = "smooth"): number {
  if (distance >= 1) return 0;
  if (falloff === "gaussian") return Math.exp(-4.5 * distance * distance);
  if (falloff === "terraced") {
    const smooth = 1 - smoothstep(0.15, 1, distance);
    return Math.round(smooth * 5) / 5;
  }
  return 1 - smoothstep(0, 1, distance);
}

export function blendElevation(current: number, target: number, influence: number, strength = 1): number {
  return current + (target - current) * clamp01(influence * strength);
}
