import type { TerrainProfile } from "./TerrainTypes";

export function validateTerrainProfile(profile: TerrainProfile): TerrainProfile {
  if (profile.worldScale <= 0) throw new Error("Terrain worldScale must be positive.");
  if (profile.resolution < 8) throw new Error("Terrain resolution must be at least 8.");
  if (profile.coastline.edgeWidth <= 0) throw new Error("Terrain coastline edgeWidth must be positive.");
  if (profile.heightProfile.maxElevation <= profile.heightProfile.oceanLevel) {
    throw new Error("Terrain maximum elevation must exceed ocean level.");
  }
  return profile;
}

export function terrainProfileCacheKey(profile: TerrainProfile): string {
  return JSON.stringify(profile);
}
