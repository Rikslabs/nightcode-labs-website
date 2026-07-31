"use client";

import { useEffect, useMemo } from "react";
import {
  BufferAttribute,
  BufferGeometry,
  Float32BufferAttribute,
} from "three";
import type {
  GeneratedTerrain,
  TerrainDebugMode,
  TerrainVector3,
} from "../core/TerrainTypes";
import { createHeightVisualizationColors } from "../debug/HeightVisualizer";

type TerrainMeshProps = Readonly<{
  terrain: GeneratedTerrain;
  origin: TerrainVector3;
  wireframe?: boolean;
  mode?: TerrainDebugMode;
}>;

export function TerrainMesh({
  terrain,
  origin,
  wireframe = false,
  mode = "material",
}: TerrainMeshProps) {
  const activeColors = useMemo(
    () =>
      mode === "height"
        ? createHeightVisualizationColors(terrain)
        : terrain.colors,
    [mode, terrain],
  );
  const geometry = useMemo(() => {
    const nextGeometry = new BufferGeometry();
    nextGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(terrain.positions, 3),
    );
    nextGeometry.setAttribute(
      "color",
      new Float32BufferAttribute(activeColors, 3),
    );
    nextGeometry.setIndex(new BufferAttribute(terrain.indices, 1));
    nextGeometry.computeVertexNormals();
    nextGeometry.computeBoundingBox();
    nextGeometry.computeBoundingSphere();
    return nextGeometry;
  }, [activeColors, terrain]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <mesh
      geometry={geometry}
      position={origin}
      receiveShadow
      castShadow
      frustumCulled
    >
      <meshStandardMaterial
        vertexColors
        roughness={0.94}
        metalness={0.02}
        wireframe={wireframe}
      />
    </mesh>
  );
}
