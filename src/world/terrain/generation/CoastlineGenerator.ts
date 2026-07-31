import { clamp01, smoothstep } from "../core/HeightProfile";
import type { TerrainCoastlineConfig } from "../core/TerrainTypes";
import type { NoiseGenerator } from "./NoiseGenerator";

export function coastlineMask(
  x: number,
  z: number,
  config: TerrainCoastlineConfig,
  noise: NoiseGenerator,
): number {
  const normalizedX = x / config.radius[0];
  const normalizedZ = z / config.radius[1];
  const asymmetry = noise.fractal2D(normalizedX * 1.8 + 8, normalizedZ * 1.8 - 3, 4, 0.55);
  const directionalWarp = normalizedX * normalizedZ * 0.08 + normalizedZ * 0.035;
  const distance = Math.hypot(normalizedX, normalizedZ) + asymmetry * config.asymmetry + directionalWarp;
  const edgeStart = 1 - config.edgeWidth;
  return clamp01(1 - smoothstep(edgeStart, 1, distance));
}

export function coastlineRelief(mask: number, cliffStrength: number): number {
  const cliffBand = smoothstep(0.04, 0.34, mask) * (1 - smoothstep(0.45, 0.76, mask));
  return cliffBand * cliffStrength;
}
