"use client";

import { useMemo, useState } from "react";
import { terrainEngine } from "../core/TerrainEngine";
import type { TerrainDebugMode, TerrainProfile } from "../core/TerrainTypes";
import { TerrainDebug } from "../debug/TerrainDebug";
import { TerrainHelpers } from "../debug/TerrainHelpers";
import { TerrainMesh } from "./TerrainMesh";

export function TerrainSystem({
  profile,
}: Readonly<{
  profile: TerrainProfile;
}>) {
  const terrain = useMemo(() => terrainEngine.generate(profile), [profile]);
  const [wireframe, setWireframe] = useState(false);
  const [mode, setMode] = useState<TerrainDebugMode>("material");
  const [grid, setGrid] = useState(false);
  const [axes, setAxes] = useState(false);
  const [bounds, setBounds] = useState(false);
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <>
      <TerrainMesh
        terrain={terrain}
        origin={profile.origin}
        wireframe={isDevelopment && wireframe}
        mode={isDevelopment ? mode : "material"}
      />
      {isDevelopment ? (
        <>
          <TerrainHelpers
            terrain={terrain}
            profile={profile}
            grid={grid}
            axes={axes}
            bounds={bounds}
          />
          <TerrainDebug
            terrain={terrain}
            profile={profile}
            wireframe={wireframe}
            setWireframe={setWireframe}
            mode={mode}
            setMode={setMode}
            grid={grid}
            setGrid={setGrid}
            axes={axes}
            setAxes={setAxes}
            bounds={bounds}
            setBounds={setBounds}
          />
        </>
      ) : null}
    </>
  );
}
