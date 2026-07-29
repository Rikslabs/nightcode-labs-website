import { NightCoreMark } from "@/components/layout/NightCoreMark";
import styles from "./NightCoreSection.module.css";

type Pillar = { name: string; description: string; position: "top" | "right" | "bottom" | "left" };

const pillars: Pillar[] = [
  { name: "Precision", description: "Thoughtful engineering over shortcuts. Every detail exists for a reason.", position: "top" },
  { name: "Innovation", description: "Progress through curiosity, discipline, and continuous improvement.", position: "right" },
  { name: "Intelligence", description: "Software should amplify human capability.", position: "bottom" },
  { name: "Guidance", description: "Technology should help people make better decisions.", position: "left" },
];

function NightCorePillar({ pillar }: { pillar: Pillar }) {
  return <div className={`${styles.pillar} ${styles[pillar.position]}`} tabIndex={0}><h3 className={styles.name}>{pillar.name}</h3><p className={styles.description}>{pillar.description}</p></div>;
}

function NightCoreDiagram() {
  return <div className={styles.diagram} aria-label="NightCore engineering principles"><span className={`${styles.connector} ${styles.connectorTop}`} aria-hidden="true" /><span className={`${styles.connector} ${styles.connectorRight}`} aria-hidden="true" /><span className={`${styles.connector} ${styles.connectorBottom}`} aria-hidden="true" /><span className={`${styles.connector} ${styles.connectorLeft}`} aria-hidden="true" />{pillars.map((pillar) => <NightCorePillar key={pillar.name} pillar={pillar} />)}<div className={styles.core}><NightCoreMark className={styles.mark} /></div></div>;
}

export function NightCoreSection() {
  return <section id="nightcore" className={`${styles.section} section-space`} aria-labelledby="nightcore-title"><div className="container-shell"><header className={styles.header}><p className="mono mb-4 text-xs uppercase tracking-[0.22em] text-electric-cyan">Our philosophy</p><h2 id="nightcore-title" className="text-balance text-4xl font-medium tracking-[-0.05em] text-pure-white sm:text-5xl">The NightCore Philosophy</h2><p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground">Every NightCode product begins with one core idea.<br />Build technology that people can trust.</p></header><NightCoreDiagram /></div></section>;
}
