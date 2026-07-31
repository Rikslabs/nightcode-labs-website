"use client";

import dynamic from "next/dynamic";
import { WorldLoadingFallback } from "../components/WorldLoadingFallback";
import { WorldErrorBoundary } from "./WorldErrorBoundary";
import styles from "./WorldEngine.module.css";
import { worldStageFeatures } from "./worldStage";

const WorldCanvas = dynamic(
  () => import("./WorldCanvas").then((module) => module.WorldCanvas),
  { ssr: false, loading: () => null },
);

export function WorldLayer() {
  const fallback = worldStageFeatures.legacyArrivalEnvironment
    ? <WorldLoadingFallback />
    : null;

  return (
    <div className={styles.layer} aria-hidden="true">
      {fallback}
      <WorldErrorBoundary fallback={fallback}>
        <WorldCanvas />
      </WorldErrorBoundary>
    </div>
  );
}
