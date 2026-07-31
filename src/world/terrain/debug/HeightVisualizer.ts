import { Color } from "three";
import type { GeneratedTerrain } from "../core/TerrainTypes";

const low = new Color("#17334b");
const middle = new Color("#74b6a1");
const high = new Color("#f0e6cf");

export function createHeightVisualizationColors(
  terrain: GeneratedTerrain,
): Float32Array {
  const colors = new Float32Array(terrain.heights.length * 3);
  const range =
    terrain.statistics.maximumElevation - terrain.statistics.minimumElevation || 1;
  const color = new Color();

  for (let index = 0; index < terrain.heights.length; index += 1) {
    const height =
      (terrain.heights[index] - terrain.statistics.minimumElevation) / range;
    if (height < 0.5) {
      color.copy(low).lerp(middle, height * 2);
    } else {
      color.copy(middle).lerp(high, (height - 0.5) * 2);
    }
    const offset = index * 3;
    colors[offset] = color.r;
    colors[offset + 1] = color.g;
    colors[offset + 2] = color.b;
  }

  return colors;
}
