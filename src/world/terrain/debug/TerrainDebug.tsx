"use client";

import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import type { Dispatch, SetStateAction } from "react";
import { Vector3 } from "three";
import type {
  GeneratedTerrain,
  TerrainDebugMode,
  TerrainProfile,
  TerrainViewpoint,
} from "../core/TerrainTypes";
import styles from "./TerrainDebug.module.css";

type Toggle = Dispatch<SetStateAction<boolean>>;

type TerrainDebugProps = Readonly<{
  terrain: GeneratedTerrain;
  profile: TerrainProfile;
  wireframe: boolean;
  setWireframe: Toggle;
  mode: TerrainDebugMode;
  setMode: Dispatch<SetStateAction<TerrainDebugMode>>;
  grid: boolean;
  setGrid: Toggle;
  axes: boolean;
  setAxes: Toggle;
  bounds: boolean;
  setBounds: Toggle;
}>;

type OrbitControlContract = {
  target: Vector3;
  update(): void;
};

export function TerrainDebug({
  terrain,
  profile,
  wireframe,
  setWireframe,
  mode,
  setMode,
  grid,
  setGrid,
  axes,
  setAxes,
  bounds,
  setBounds,
}: TerrainDebugProps) {
  const camera = useThree((state) => state.camera);
  const controls = useThree((state) => state.controls) as OrbitControlContract | null;

  const applyViewpoint = (viewpoint: TerrainViewpoint) => {
    const [originX, originY, originZ] = profile.origin;
    camera.position.set(
      viewpoint.position[0] + originX,
      viewpoint.position[1] + originY,
      viewpoint.position[2] + originZ,
    );
    const target = new Vector3(
      viewpoint.target[0] + originX,
      viewpoint.target[1] + originY,
      viewpoint.target[2] + originZ,
    );
    camera.lookAt(target);
    if (controls) {
      controls.target.copy(target);
      controls.update();
    }
    camera.updateProjectionMatrix();
  };

  const statistics = terrain.statistics;

  return (
    <Html fullscreen>
      <aside className={styles.panel} aria-label="Terrain development controls">
        <h2 className={styles.heading}>Terrain Engine · Eagle Summit</h2>
        <div className={styles.controls}>
          <ToggleButton active={wireframe} onClick={() => setWireframe((value) => !value)}>
            Wireframe
          </ToggleButton>
          <ToggleButton
            active={mode === "height"}
            onClick={() =>
              setMode((value) => (value === "height" ? "material" : "height"))
            }
          >
            Height map
          </ToggleButton>
          <ToggleButton active={grid} onClick={() => setGrid((value) => !value)}>
            Grid
          </ToggleButton>
          <ToggleButton active={axes} onClick={() => setAxes((value) => !value)}>
            Axes
          </ToggleButton>
          <ToggleButton active={bounds} onClick={() => setBounds((value) => !value)}>
            Bounds
          </ToggleButton>
        </div>
        <div className={styles.viewpoints}>
          {profile.viewpoints.map((viewpoint) => (
            <button
              className={styles.button}
              key={viewpoint.id}
              type="button"
              onClick={() => applyViewpoint(viewpoint)}
            >
              {viewpoint.label}
            </button>
          ))}
        </div>
        <dl className={styles.statistics}>
          <dt>Vertices</dt>
          <dd>{statistics.vertexCount.toLocaleString()}</dd>
          <dt>Triangles</dt>
          <dd>{statistics.triangleCount.toLocaleString()}</dd>
          <dt>Elevation</dt>
          <dd>
            {statistics.minimumElevation.toFixed(2)}–{statistics.maximumElevation.toFixed(2)}
          </dd>
          <dt>Generation</dt>
          <dd>{statistics.generationTimeMs.toFixed(1)} ms</dd>
        </dl>
      </aside>
    </Html>
  );
}

function ToggleButton({
  active,
  children,
  onClick,
}: Readonly<{
  active: boolean;
  children: string;
  onClick(): void;
}>) {
  return (
    <button
      className={`${styles.button} ${active ? styles.active : ""}`}
      type="button"
      aria-pressed={active}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
