import styles from "./Console.module.css";
import { headquartersRepositories } from "@/repositories";

const missionStatus = headquartersRepositories.missions.getMissionStatus();
const consoleData = { focus: { label: "Mission Health", value: missionStatus.featuredMission, status: missionStatus.missionHealth, phase: `${missionStatus.activeMissions} active / ${missionStatus.researchMissions} research`, milestone: `${missionStatus.completionPercentage}% complete`, principle: `${missionStatus.headquartersReadiness}% ready` }, snapshot: { products: String(missionStatus.totalMissions), primaryProduct: missionStatus.highestPriorityMission, website: `Generated ${missionStatus.generatedAt}`, websiteMilestone: `${missionStatus.plannedMissions} planning / ${missionStatus.completedMissions} completed` }, note: "Data shown here represents the current engineering state and is designed to be replaceable with live project data in the future." } as const;

function ConsoleMetric({ label, value }: { label: string; value: string }) {
  return <div className={styles.item}><strong>{value}</strong><span>{label}</span></div>;
}

function ConsoleSection({ data }: { data: typeof consoleData }) {
  return <div className={styles.layout}><article className={`${styles.panel} ${styles.primary}`}><p className={styles.label}>{data.focus.label}</p><h3 className={styles.focus}>{data.focus.value}</h3><p className={styles.active}>{data.focus.status}</p><div className="mt-12 grid grid-cols-2 gap-6"><div><p className={styles.label}>Active / Research</p><p className={styles.value}>{data.focus.phase}</p></div><div><p className={styles.label}>Mission Completion</p><p className={styles.value}>{data.focus.milestone}</p></div><div><p className={styles.label}>Headquarters Readiness</p><p className={styles.value}>{data.focus.principle}</p></div></div></article><div className={`${styles.panel} ${styles.secondary}`}><section className={styles.block} aria-labelledby="snapshot-title"><p id="snapshot-title" className={styles.label}>Mission Snapshot</p><div className={styles.grid}><ConsoleMetric label="Total Missions" value={data.snapshot.products} /><ConsoleMetric label="Featured Mission" value={data.snapshot.primaryProduct} /></div></section><section className={styles.block} aria-labelledby="website-title"><p id="website-title" className={styles.label}>Generation</p><div className={styles.grid}><ConsoleMetric label="Generated At" value={data.snapshot.website} /><ConsoleMetric label="Planning / Completed" value={data.snapshot.websiteMilestone} /></div></section></div></div>;
}

export function NightCoreConsole() {
  return <section id="console" className={`${styles.section} section-space`} aria-labelledby="console-title"><div className="container-shell"><header className={styles.header}><p className="mono mb-4 text-xs uppercase tracking-[0.22em] text-electric-cyan">Engineering status</p><h2 id="console-title" className="text-balance text-4xl font-medium tracking-[-0.05em] text-pure-white sm:text-5xl">NightCore Console</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">A live engineering snapshot of NightCode Labs.</p></header><ConsoleSection data={consoleData} /><p className={styles.note}>System Notes — {consoleData.note}</p></div></section>;
}
