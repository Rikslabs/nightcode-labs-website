import { terrainProfileCacheKey } from "./TerrainConfig";
import { generateTerrain } from "./TerrainGenerator";
import type {
  GeneratedTerrain,
  TerrainExtension,
  TerrainExtensionContext,
  TerrainProfile,
} from "./TerrainTypes";

export class TerrainEngine {
  private readonly cache = new Map<string, GeneratedTerrain>();
  private readonly extensions = new Map<string, TerrainExtension>();

  generate(profile: TerrainProfile): GeneratedTerrain {
    const key = terrainProfileCacheKey(profile);
    const cached = this.cache.get(key);
    if (cached) return cached;
    const terrain = generateTerrain(profile);
    this.cache.set(key, terrain);
    return terrain;
  }

  sampleHeight(terrain: GeneratedTerrain, x: number, z: number): number {
    const width = terrain.resolution + 1;
    const normalizedX = Math.min(1, Math.max(0, x / terrain.size + 0.5));
    const normalizedZ = Math.min(1, Math.max(0, z / terrain.size + 0.5));
    const gridX = normalizedX * terrain.resolution;
    const gridZ = normalizedZ * terrain.resolution;
    const x0 = Math.floor(gridX);
    const z0 = Math.floor(gridZ);
    const x1 = Math.min(terrain.resolution, x0 + 1);
    const z1 = Math.min(terrain.resolution, z0 + 1);
    const tx = gridX - x0;
    const tz = gridZ - z0;
    const top =
      terrain.heights[z0 * width + x0] * (1 - tx) +
      terrain.heights[z0 * width + x1] * tx;
    const bottom =
      terrain.heights[z1 * width + x0] * (1 - tx) +
      terrain.heights[z1 * width + x1] * tx;
    return top * (1 - tz) + bottom * tz;
  }

  attachExtension(extension: TerrainExtension, terrain: GeneratedTerrain): void {
    this.extensions.get(extension.id)?.detach?.();
    const context: TerrainExtensionContext = {
      terrain,
      sampleHeight: (x, z) => this.sampleHeight(terrain, x, z),
    };
    extension.attach(context);
    this.extensions.set(extension.id, extension);
  }

  detachExtension(id: string): void {
    this.extensions.get(id)?.detach?.();
    this.extensions.delete(id);
  }

  clear(): void {
    for (const extension of this.extensions.values()) extension.detach?.();
    this.extensions.clear();
    this.cache.clear();
  }
}

export const terrainEngine = new TerrainEngine();
