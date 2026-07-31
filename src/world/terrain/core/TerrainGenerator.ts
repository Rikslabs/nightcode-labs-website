import {
  calculateTerrainBounds,
  createTerrainIndices,
  createTerrainPositions,
} from "../generation/HeightMapGeometry";
import { generateHeightMap } from "../generation/HeightMapGenerator";
import { createTerrainColors } from "../rendering/TerrainMaterial";
import { validateTerrainProfile } from "./TerrainConfig";
import type {
  GeneratedTerrain,
  TerrainProfile,
  TerrainStatistics,
} from "./TerrainTypes";

function now(): number {
  return globalThis.performance?.now() ?? Date.now();
}

function calculateStatistics(
  heights: Float32Array,
  resolution: number,
  startedAt: number,
): TerrainStatistics {
  let minimum = Number.POSITIVE_INFINITY;
  let maximum = Number.NEGATIVE_INFINITY;
  let total = 0;
  for (const height of heights) {
    minimum = Math.min(minimum, height);
    maximum = Math.max(maximum, height);
    total += height;
  }
  return {
    vertexCount: heights.length,
    triangleCount: resolution * resolution * 2,
    minimumElevation: minimum,
    maximumElevation: maximum,
    averageElevation: total / heights.length,
    generationTimeMs: now() - startedAt,
  };
}

export function generateTerrain(profileInput: TerrainProfile): GeneratedTerrain {
  const startedAt = now();
  const profile = validateTerrainProfile(profileInput);
  const heights = generateHeightMap(profile);
  const positions = createTerrainPositions(
    heights,
    profile.resolution,
    profile.worldScale,
  );
  const indices = createTerrainIndices(profile.resolution);
  const colors = createTerrainColors(heights, profile);
  const bounds = calculateTerrainBounds(heights, profile.worldScale);

  return {
    profileId: profile.id,
    resolution: profile.resolution,
    size: profile.worldScale,
    heights,
    positions,
    colors,
    indices,
    bounds,
    statistics: calculateStatistics(heights, profile.resolution, startedAt),
  };
}
