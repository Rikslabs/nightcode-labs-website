"use client";

import type {
  GeneratedTerrain,
  TerrainProfile,
} from "../core/TerrainTypes";

type TerrainHelpersProps = Readonly<{
  terrain: GeneratedTerrain;
  profile: TerrainProfile;
  grid: boolean;
  axes: boolean;
  bounds: boolean;
}>;

export function TerrainHelpers({
  terrain,
  profile,
  grid,
  axes,
  bounds,
}: TerrainHelpersProps) {
  const [originX, originY, originZ] = profile.origin;
  const height =
    terrain.bounds.max[1] - terrain.bounds.min[1];
  const centerY =
    originY + terrain.bounds.min[1] + height / 2;

  return (
    <>
      {grid ? (
        <gridHelper
          args={[profile.worldScale, 24, "#78a6b8", "#3b5360"]}
          position={[originX, originY + profile.heightProfile.oceanLevel + 0.02, originZ]}
        />
      ) : null}
      {axes ? (
        <axesHelper
          args={[12]}
          position={[originX - profile.worldScale / 2, originY, originZ - profile.worldScale / 2]}
        />
      ) : null}
      {bounds ? (
        <mesh position={[originX, centerY, originZ]}>
          <boxGeometry args={[profile.worldScale, height, profile.worldScale]} />
          <meshBasicMaterial color="#9bdaf2" wireframe transparent opacity={0.45} />
        </mesh>
      ) : null}
    </>
  );
}
