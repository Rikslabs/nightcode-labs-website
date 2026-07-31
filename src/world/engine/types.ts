import type { Camera, Scene, WebGLRenderer } from "three";

export type WorldQualityTier = "low" | "medium" | "high";

export type WorldRendererConfig = Readonly<{
  antialias: boolean;
  dpr: readonly [number, number];
  powerPreference: WebGLPowerPreference;
  quality: WorldQualityTier;
}>;

export type WorldCameraConfig = Readonly<{
  position: readonly [number, number, number];
  target: readonly [number, number, number];
  fov: number;
  near: number;
  far: number;
}>;

export type WorldRuntime = Readonly<{
  renderer: WebGLRenderer;
  scene: Scene;
  camera: Camera;
}>;

export type WorldChunkId = string;

export interface WorldSystem {
  readonly id: string;
  initialize?(runtime: WorldRuntime): void;
  update?(deltaSeconds: number): void;
  dispose?(): void;
}

export interface WorldStreamProvider {
  requestChunk(id: WorldChunkId): Promise<void>;
  releaseChunk(id: WorldChunkId): void;
}
