import { lazy } from "react";
import { worldStageFeatures } from "../engine/worldStage";

const OceanPlane = lazy(() =>
  import("../environment/OceanPlane").then((module) => ({
    default: module.OceanPlane,
  })),
);

const SkyBackdrop = lazy(() =>
  import("../environment/SkyBackdrop").then((module) => ({
    default: module.SkyBackdrop,
  })),
);

export function StageFeatures() {
  return (
    <>
      {worldStageFeatures.skyBackdrop ? <SkyBackdrop /> : null}
      {worldStageFeatures.ocean ? <OceanPlane /> : null}
    </>
  );
}
