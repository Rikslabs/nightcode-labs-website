import { CameraRig } from "../camera/CameraRig";
import { DebugOrbitCamera } from "../camera/DebugOrbitCamera";
import { WorldLighting } from "../lighting/WorldLighting";
import { WorldPerformanceOverlay } from "../systems/WorldPerformanceOverlay";
import { worldStageFeatures } from "../engine/worldStage";
import { eagleSummitProfile } from "../terrain/presets/EagleSummit";
import { TerrainSystem } from "../terrain/rendering/TerrainSystem";
import { StageFeatures } from "./StageFeatures";

export function SceneRoot() {
  return (
    <>
      <CameraRig />
      <DebugOrbitCamera />
      <WorldLighting />
      {worldStageFeatures.terrain ? (
        <TerrainSystem profile={eagleSummitProfile} />
      ) : null}
      <StageFeatures />
      <WorldPerformanceOverlay />
    </>
  );
}
