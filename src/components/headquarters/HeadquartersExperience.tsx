"use client";

import { headquartersConfig } from "@/engine/building/buildingConfigs";
import { useLivingBuilding } from "@/engine/building/useLivingBuilding";
import styles from "./HeadquartersExperience.module.css";

export function HeadquartersExperience({ onReturn }: { onReturn: () => void }) {
  const interaction = useLivingBuilding(headquartersConfig, onReturn);
  const phase = interaction.state.phase;
  return <main className={`${styles.experience} ${styles[phase]}`} aria-label={`${headquartersConfig.label} living building experience`} aria-live="polite">
    <header className={styles.hud}><span className={styles.wordmark}>{headquartersConfig.label} <b>/</b> {headquartersConfig.code}</span><span>{phase === "interior" ? "ARRIVAL SPACE" : "HEADQUARTERS TRANSIT"}</span></header>
    <section className={styles.scene}>
      {phase !== "interior" && <BuildingExterior phase={phase} config={headquartersConfig} />}
      {phase === "interior" && <HeadquartersLobby config={headquartersConfig} onReturn={interaction.returnToOrigin} />}
    </section>
  </main>;
}

function BuildingExterior({ phase, config }: { phase: string; config: typeof headquartersConfig }) {
  return <div className={styles.exterior}><div className={styles.building}><span className={styles.spine} /><span className={styles.wing} /><span className={styles.wingRight} /><span className={styles.entrance} /><span className={styles.logo}>{config.logo}</span></div><div className={styles.exteriorLabel}><span>{config.label.toUpperCase()} / {config.code}</span><strong>{phase === "focused" ? "FOCUS ACKNOWLEDGED" : phase === "activated" ? "ACTIVATION CONFIRMED" : "ENTERING SPACE"}</strong></div></div>;
}

function HeadquartersLobby({ config, onReturn }: { config: typeof headquartersConfig; onReturn: () => void }) {
  return <div className={styles.lobby}><div className={styles.lobbyArchitecture} aria-hidden="true"><span /><span /><i /></div><div className={styles.lobbyCopy}><span>{config.label.toUpperCase()} / ARRIVAL SPACE</span><h1>{config.arrival.title}{config.arrival.titleAccent && <><br /><em>{config.arrival.titleAccent}</em></>}</h1><p>{config.arrival.description}</p><button type="button" onClick={onReturn}>{config.arrival.returnLabel} <b>↗</b></button></div></div>;
}
