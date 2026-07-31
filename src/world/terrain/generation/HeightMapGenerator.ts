import { clamp01 } from "../core/HeightProfile";
import type { TerrainProfile } from "../core/TerrainTypes";
import { coastlineMask, coastlineRelief } from "./CoastlineGenerator";
import { applyFeatureSet } from "./MountainGenerator";
import { NoiseGenerator } from "./NoiseGenerator";

export function generateHeightMap(profile: TerrainProfile): Float32Array {
  const vertexWidth = profile.resolution + 1;
  const heights = new Float32Array(vertexWidth * vertexWidth);
  const noise = new NoiseGenerator(profile.seed);

  for (let row = 0; row < vertexWidth; row += 1) {
    const z = (row / profile.resolution - 0.5) * profile.worldScale;
    for (let column = 0; column < vertexWidth; column += 1) {
      const x = (column / profile.resolution - 0.5) * profile.worldScale;
      const mask = coastlineMask(x, z, profile.coastline, noise);
      const macroNoise = noise.fractal2D(
        x * profile.heightProfile.noiseFrequency,
        z * profile.heightProfile.noiseFrequency,
        5,
        0.52,
      );
      const erosionNoise = noise.fractal2D(x * 0.16 + 19, z * 0.16 - 11, 3, 0.44);
      let elevation = profile.heightProfile.oceanLevel - 0.45;

      if (mask > 0) {
        elevation =
          profile.heightProfile.baseElevation +
          macroNoise * profile.heightProfile.noiseAmplitude +
          erosionNoise * profile.heightProfile.erosionStrength +
          coastlineRelief(mask, profile.coastline.cliffStrength);

        elevation = applyFeatureSet(elevation, x, z, profile.mountains);
        elevation = applyFeatureSet(elevation, x, z, profile.plateaus);
        elevation = applyFeatureSet(elevation, x, z, profile.valleys);

        const coastElevation = profile.coastline.beachElevation + mask * 0.6;
        elevation = coastElevation + (elevation - coastElevation) * Math.pow(mask, 0.72);
      }

      heights[row * vertexWidth + column] = Math.min(
        profile.heightProfile.maxElevation,
        elevation,
      );
    }
  }

  softenHeightMap(heights, vertexWidth, 2, 0.18);
  return heights;
}

function softenHeightMap(
  heights: Float32Array,
  width: number,
  passes: number,
  strength: number,
): void {
  const buffer = new Float32Array(heights.length);
  for (let pass = 0; pass < passes; pass += 1) {
    buffer.set(heights);
    for (let row = 1; row < width - 1; row += 1) {
      for (let column = 1; column < width - 1; column += 1) {
        const index = row * width + column;
        const average =
          (buffer[index - 1] +
            buffer[index + 1] +
            buffer[index - width] +
            buffer[index + width]) *
          0.25;
        heights[index] = buffer[index] + (average - buffer[index]) * clamp01(strength);
      }
    }
  }
}
