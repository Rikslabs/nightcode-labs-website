import { cityDistricts, droneRoutes } from "@/engine/city/cityRegistry";
import { DroneManager } from "@/engine/city/droneManager";
import type { OrbitDestination } from "@/engine/universe/types";
import type { CSSProperties } from "react";
import styles from "./LivingCity.module.css";

const manager = new DroneManager(droneRoutes);

export function LivingCity({ selected, onSelect }: { selected: OrbitDestination | null; onSelect: (destination: OrbitDestination) => void }) {
  return <div className={styles.citySystem} aria-label="NightCode living city map">
    <div className={styles.citySky} aria-hidden="true"><div className={styles.cityMoon} /><div className={styles.cityGrid} /><svg className={styles.routes} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{manager.getRoutes().map((drone) => <path key={drone.id} d={drone.route} />)}</svg>{manager.getRoutes().map((drone) => <span className={`${styles.drone} ${styles[drone.type]}`} style={{ "--route": `path('${drone.route}')`, "--duration": `${drone.duration}s`, "--delay": `${drone.delay}s` } as CSSProperties} key={drone.id} aria-hidden="true" />)}</div>
    <div className={styles.cityGround} aria-hidden="true" />
    <div className={styles.buildings}>{cityDistricts.map((district) => <button type="button" disabled={district.id !== "headquarters"} key={district.id} className={`${styles.building} ${styles[district.activity]} ${selected === district.id ? styles.selected : ""}`} style={{ "--height": `${district.height}%`, "--x": `${district.x}%`, "--width": `${district.width}%` } as CSSProperties} onClick={() => onSelect("headquarters")} aria-label={`${district.label}, ${district.activity} division${district.id === "headquarters" ? ", begin descent" : ""}`}><span className={styles.buildingLight} /><b>{district.code}</b><strong>{district.label}</strong></button>)}</div>
    <span className={styles.cityLegend}>LIVE CITY SYSTEM / 05 DIVISIONS / 03 ACTIVE ROUTES</span>
  </div>;
}
