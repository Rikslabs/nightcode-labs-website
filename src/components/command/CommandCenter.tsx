import styles from "./CommandCenter.module.css";
import { headquartersRepositories } from "@/repositories";
const headquartersRepository = headquartersRepositories.headquarters;
const floors = headquartersRepository.getFloors();
const paths = headquartersRepository.getMissionPaths();
const status = headquartersRepository.getStatuses();


export function CommandCenter() {
  return <section id="command" className={`${styles.section} section-space`} aria-labelledby="command-title"><div className="container-shell"><header className={styles.identity}><div><p className={styles.eyebrow}>FLOOR 05 / HEADQUARTERS ACCESS POINT</p><h2 id="command-title">COMMAND CENTER</h2></div><p>Engineering begins with curiosity.<br />Innovation advances through execution.</p></header><div className={styles.overview}><div className={styles.overviewHead}><p className={styles.eyebrow}>HEADQUARTERS OVERVIEW</p><span>ARCH / NC-05</span></div><ol>{floors.map((floor, index) => <li key={floor}><span>{String(index).padStart(2, "0")}</span><i aria-hidden="true" /><b>{floor}</b></li>)}</ol></div><div className={styles.lower}><section className={styles.paths} aria-labelledby="paths-title"><p className={styles.eyebrow}>MISSION PATHS</p><h3 id="paths-title">Choose a direction.</h3><div className={styles.pathGrid}>{paths.map(([role, actions]) => <article key={role}><span>{role}</span><ul>{actions.map((action) => <li key={action}>{action}</li>)}</ul></article>)}</div></section><section className={styles.statusPanel} aria-labelledby="status-title"><p className={styles.eyebrow}>HEADQUARTERS STATUS</p><h3 id="status-title">System state</h3><dl>{status.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section></div><div className={styles.activation}><p className={styles.eyebrow}>FINAL ACTIVATION</p><h3>Enter NightCode.</h3><div><a className={styles.primary} href="#home">ENTER NIGHTCODE</a><a href="#jarvis">Explore JARVIS</a><a href="#products">View Projects</a><a href="#contact">Contact Engineering</a></div></div></div></section>;
}
