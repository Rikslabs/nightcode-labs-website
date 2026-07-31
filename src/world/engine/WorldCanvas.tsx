"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { NoToneMapping } from "three";
import { SceneRoot } from "../components/SceneRoot";
import { worldCameraConfig, worldColors, worldRendererConfig } from "./config";
import styles from "./WorldEngine.module.css";

export function WorldCanvas() {
  const debugEnabled = process.env.NODE_ENV === "development";

  return (
    <Canvas
      className={`${styles.canvas} ${debugEnabled ? styles.debugCanvas : ""}`}
      camera={{
        position: worldCameraConfig.position,
        fov: worldCameraConfig.fov,
        near: worldCameraConfig.near,
        far: worldCameraConfig.far,
      }}
      dpr={[...worldRendererConfig.dpr]}
      frameloop="always"
      gl={{
        antialias: worldRendererConfig.antialias,
        alpha: true,
        powerPreference: worldRendererConfig.powerPreference,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(worldColors.skyFallback, 0);
        gl.toneMapping = NoToneMapping;
      }}
    >
      <Suspense fallback={null}>
        <SceneRoot />
      </Suspense>
    </Canvas>
  );
}
