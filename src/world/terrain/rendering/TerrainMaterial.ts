import { Color } from "three";
import type { TerrainProfile } from "../core/TerrainTypes";

const grass = new Color("#526b45");
const dryGrass = new Color("#6f7350");
const dirt = new Color("#705945");
const rock = new Color("#5f625d");
const highRock = new Color("#777a73");

function writeColor(target: Float32Array, index: number, color: Color): void {
  const offset = index * 3;
  target[offset] = color.r;
  target[offset + 1] = color.g;
  target[offset + 2] = color.b;
}

export function createTerrainColors(
  heights: Float32Array,
  profile: TerrainProfile,
): Float32Array {
  const width = profile.resolution + 1;
  const cellSize = profile.worldScale / profile.resolution;
  const colors = new Float32Array(heights.length * 3);
  const color = new Color();

  for (let row = 0; row < width; row += 1) {
    for (let column = 0; column < width; column += 1) {
      const index = row * width + column;
      const left = heights[row * width + Math.max(0, column - 1)];
      const right = heights[row * width + Math.min(width - 1, column + 1)];
      const back = heights[Math.max(0, row - 1) * width + column];
      const front = heights[Math.min(width - 1, row + 1) * width + column];
      const slope = Math.hypot(right - left, front - back) / (cellSize * 2);
      const elevation = heights[index];
      const normalizedHeight =
        (elevation - profile.heightProfile.oceanLevel) /
        (profile.heightProfile.maxElevation - profile.heightProfile.oceanLevel);

      if (elevation <= profile.coastline.beachElevation + 0.42) {
        color.copy(dirt).lerp(rock, Math.min(1, slope * 1.8));
      } else if (slope > 0.58) {
        color.copy(rock).lerp(highRock, Math.min(1, normalizedHeight));
      } else if (slope > 0.27) {
        color.copy(dryGrass).lerp(dirt, (slope - 0.27) / 0.31);
      } else {
        color.copy(grass).lerp(dryGrass, Math.min(1, normalizedHeight * 0.55));
      }

      writeColor(colors, index, color);
    }
  }

  return colors;
}
