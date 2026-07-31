function fade(value: number): number {
  return value * value * value * (value * (value * 6 - 15) + 10);
}

function lerp(start: number, end: number, amount: number): number {
  return start + (end - start) * amount;
}

export class NoiseGenerator {
  constructor(private readonly seed: number) {}

  sample2D(x: number, z: number): number {
    const x0 = Math.floor(x);
    const z0 = Math.floor(z);
    const tx = fade(x - x0);
    const tz = fade(z - z0);
    const a = this.hash(x0, z0);
    const b = this.hash(x0 + 1, z0);
    const c = this.hash(x0, z0 + 1);
    const d = this.hash(x0 + 1, z0 + 1);
    return lerp(lerp(a, b, tx), lerp(c, d, tx), tz) * 2 - 1;
  }

  fractal2D(x: number, z: number, octaves = 5, persistence = 0.5, lacunarity = 2): number {
    let amplitude = 1;
    let frequency = 1;
    let total = 0;
    let normalization = 0;
    for (let octave = 0; octave < octaves; octave += 1) {
      total += this.sample2D(x * frequency, z * frequency) * amplitude;
      normalization += amplitude;
      amplitude *= persistence;
      frequency *= lacunarity;
    }
    return total / normalization;
  }

  private hash(x: number, z: number): number {
    let value = Math.imul(x, 374761393) + Math.imul(z, 668265263) + Math.imul(this.seed, 1442695041);
    value = Math.imul(value ^ (value >>> 13), 1274126177);
    return ((value ^ (value >>> 16)) >>> 0) / 4294967295;
  }
}
