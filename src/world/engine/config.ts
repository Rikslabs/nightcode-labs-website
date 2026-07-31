import type { WorldCameraConfig, WorldRendererConfig } from "./types";

export const worldRendererConfig: WorldRendererConfig = {
  antialias: true,
  dpr: [1, 1.75],
  powerPreference: "high-performance",
  quality: "high",
};

export const worldCameraConfig: WorldCameraConfig = {
  position: [0, 7, 18],
  target: [0, -1.2, 0],
  fov: 45,
  near: 0.1,
  far: 300,
};

export const worldColors = {
  skyFallback: "#122536",
  ambientSky: "#a9c8d8",
  ambientGround: "#253b42",
  sunlight: "#ffe3b0",
  terrain: "#172b2b",
  ocean: "#173f50",
} as const;
