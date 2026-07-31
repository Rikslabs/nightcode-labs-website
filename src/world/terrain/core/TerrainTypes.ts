export type TerrainVector2 = readonly [x: number, z: number];
export type TerrainVector3 = readonly [x: number, y: number, z: number];

export type TerrainFeatureKind = "peak" | "ridge" | "plateau" | "valley" | "plain";
export type TerrainFalloff = "smooth" | "gaussian" | "terraced";
export type TerrainMaterialClass = "grass" | "dirt" | "rock";
export type TerrainDebugMode = "material" | "height";

export type TerrainFeature = Readonly<{
  id: string;
  kind: TerrainFeatureKind;
  center: TerrainVector2;
  radius: TerrainVector2;
  elevation: number;
  rotation?: number;
  strength?: number;
  falloff?: TerrainFalloff;
}>;

export type TerrainReservedZone = Readonly<{
  id: string;
  purpose: string;
  center: TerrainVector2;
  radius: TerrainVector2;
}>;

export type TerrainPathReservation = Readonly<{
  id: string;
  points: readonly TerrainVector2[];
  width: number;
}>;

export type TerrainBiomeMaskReservation = Readonly<{
  id: string;
  biome: string;
  center: TerrainVector2;
  radius: TerrainVector2;
}>;

export type TerrainCoastlineConfig = Readonly<{
  radius: TerrainVector2;
  edgeWidth: number;
  asymmetry: number;
  cliffStrength: number;
  beachElevation: number;
}>;

export type TerrainHeightProfile = Readonly<{
  oceanLevel: number;
  baseElevation: number;
  noiseAmplitude: number;
  noiseFrequency: number;
  erosionStrength: number;
  maxElevation: number;
}>;

export type TerrainProfile = Readonly<{
  id: string;
  name: string;
  seed: number;
  worldScale: number;
  resolution: number;
  origin: TerrainVector3;
  coastline: TerrainCoastlineConfig;
  heightProfile: TerrainHeightProfile;
  mountains: readonly TerrainFeature[];
  plateaus: readonly TerrainFeature[];
  valleys: readonly TerrainFeature[];
  futureRiverPaths: readonly TerrainPathReservation[];
  futureBiomeMasks: readonly TerrainBiomeMaskReservation[];
  reservedZones: readonly TerrainReservedZone[];
  viewpoints: readonly TerrainViewpoint[];
}>;

export type TerrainBounds = Readonly<{
  min: TerrainVector3;
  max: TerrainVector3;
}>;

export type TerrainStatistics = Readonly<{
  vertexCount: number;
  triangleCount: number;
  minimumElevation: number;
  maximumElevation: number;
  averageElevation: number;
  generationTimeMs: number;
}>;

export type GeneratedTerrain = Readonly<{
  profileId: string;
  resolution: number;
  size: number;
  heights: Float32Array;
  positions: Float32Array;
  colors: Float32Array;
  indices: Uint32Array;
  bounds: TerrainBounds;
  statistics: TerrainStatistics;
}>;

export type TerrainViewpoint = Readonly<{
  id: string;
  label: string;
  position: TerrainVector3;
  target: TerrainVector3;
}>;

export interface TerrainExtensionContext {
  readonly terrain: GeneratedTerrain;
  sampleHeight(x: number, z: number): number;
}

export interface TerrainExtension {
  readonly id: string;
  attach(context: TerrainExtensionContext): void;
  detach?(): void;
}

export interface TerrainPageProvider {
  requestPage(pageX: number, pageZ: number): Promise<GeneratedTerrain>;
  releasePage(pageX: number, pageZ: number): void;
}
