import type { GeneratedTerrain, TerrainPageProvider } from "../core/TerrainTypes";

export type TerrainLodLevel = Readonly<{
  id: string;
  maximumDistance: number;
  resolutionScale: number;
}>;

export interface TerrainLodStrategy {
  selectLevel(distance: number, levels: readonly TerrainLodLevel[]): TerrainLodLevel;
}

export type TerrainChunkDescriptor = Readonly<{
  id: string;
  pageX: number;
  pageZ: number;
  bounds: GeneratedTerrain["bounds"];
}>;

export interface TerrainStreamingAdapter {
  readonly pageProvider: TerrainPageProvider;
  visibleChunks(cameraPosition: readonly [number, number, number]): readonly TerrainChunkDescriptor[];
}
