import type { TerrainBounds } from "../core/TerrainTypes";

export function createTerrainPositions(
  heights: Float32Array,
  resolution: number,
  size: number,
): Float32Array {
  const width = resolution + 1;
  const positions = new Float32Array(width * width * 3);
  for (let row = 0; row < width; row += 1) {
    for (let column = 0; column < width; column += 1) {
      const vertex = row * width + column;
      const offset = vertex * 3;
      positions[offset] = (column / resolution - 0.5) * size;
      positions[offset + 1] = heights[vertex];
      positions[offset + 2] = (row / resolution - 0.5) * size;
    }
  }
  return positions;
}

export function createTerrainIndices(resolution: number): Uint32Array {
  const width = resolution + 1;
  const indices = new Uint32Array(resolution * resolution * 6);
  let offset = 0;
  for (let row = 0; row < resolution; row += 1) {
    for (let column = 0; column < resolution; column += 1) {
      const topLeft = row * width + column;
      const bottomLeft = (row + 1) * width + column;
      indices[offset++] = topLeft;
      indices[offset++] = bottomLeft;
      indices[offset++] = topLeft + 1;
      indices[offset++] = topLeft + 1;
      indices[offset++] = bottomLeft;
      indices[offset++] = bottomLeft + 1;
    }
  }
  return indices;
}

export function calculateTerrainBounds(
  heights: Float32Array,
  size: number,
): TerrainBounds {
  let minimum = Number.POSITIVE_INFINITY;
  let maximum = Number.NEGATIVE_INFINITY;
  for (const height of heights) {
    minimum = Math.min(minimum, height);
    maximum = Math.max(maximum, height);
  }
  return {
    min: [-size / 2, minimum, -size / 2],
    max: [size / 2, maximum, size / 2],
  };
}
