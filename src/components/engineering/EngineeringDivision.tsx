import styles from "./EngineeringDivision.module.css";
import { headquartersRepositories } from "@/repositories";
const engineeringRepository = headquartersRepositories.engineering;
const principles = engineeringRepository.getPrinciples();

export async function EngineeringDivision() {
  const engineeringStatus = await engineeringRepository.getEngineeringStatusWithGitHub();
  const github = engineeringStatus.github;
  const operations = [["Version", engineeringStatus.version], ["Environment", engineeringStatus.environment], ["Build Status", engineeringStatus.buildStatus], ["Products", String(engineeringStatus.productCount)], ["Research Programs", String(engineeringStatus.researchCount)], ["Mission Directives", String(engineeringStatus.missionCount)], ["GitHub Source", github?.sourceStatus ?? "unavailable"], ...(github?.sourceStatus === "available" ? [["Repository", `${github.owner}/${github.repository}`], ["Branch", github.branch ?? "Unavailable"], ["Latest Commit", github.latestCommit?.slice(0, 7) ?? "Unavailable"], ["Open Issues", String(github.openIssues ?? "Unavailable")]] : [])] as const;
  return (
    <section id="engineering-division" className={`${styles.section} section-space`} aria-labelledby="engineering-title">
      <div className="container-shell">
        <header className={styles.identity}>
          <div><p className={styles.eyebrow}>FLOOR 01 / ENGINEERING DIVISION</p><h2 id="engineering-title">Where systems become real.</h2></div>
          <div className={styles.identityMeta}><span className={styles.status}><i /> Division active</span><p>NightCode builds intelligent software through focused, deliberate engineering.</p></div>
        </header>

        <div className={styles.workspace}>
          <article className={styles.blueprint} aria-labelledby="blueprint-title">
            <div className={styles.panelHeader}><p id="blueprint-title">Engineering blueprint</p><span>NC / SYS-01</span></div>
            <div className={styles.schematic} aria-label="NightCode engineering system relationship">
              <div className={`${styles.node} ${styles.coreNode}`}><b>NightCore</b><small>system origin</small></div>
              <div className={styles.route} /><div className={`${styles.node} ${styles.jarvisNode}`}><b>JARVIS Core</b><small>intelligence layer</small></div>
              <div className={styles.branch}><span /><span /><span /></div>
              <div className={styles.systemRow}><div className={styles.node}><b>Developer Tools</b><small>build interface</small></div><div className={styles.node}><b>Products</b><small>applied systems</small></div><div className={styles.node}><b>Deployment</b><small>delivery layer</small></div></div>
              <div className={styles.baseLine} /><p className={styles.schematicNote}>A connected engineering system, designed to amplify builders.</p>
            </div>
          </article>

          <aside className={styles.operations} aria-labelledby="operations-title"><div className={styles.panelHeader}><p id="operations-title">Engineering operations</p><span>PROTOTYPE DATA</span></div><dl>{operations.map(([label, value]) => <div className={styles.operation} key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p className={styles.note}>Operational values are intentionally replaceable with live project data.</p></aside>
        </div>

        <section className={styles.principles} aria-labelledby="principles-title"><div><p className={styles.eyebrow}>INTERNAL STANDARD</p><h3 id="principles-title">How we work inside the division.</h3></div><ul>{principles.map((principle, index) => <li key={principle}><span>{String(index + 1).padStart(2, "0")}</span>{principle}</li>)}</ul></section>
      </div>
    </section>
  );
}
