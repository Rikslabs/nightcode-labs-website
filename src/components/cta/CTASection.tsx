import styles from "./CTA.module.css";

function CTAButtons() {
  return <div className={styles.actions}><a href="#" className={`${styles.button} ${styles.primary}`}>Download JARVIS</a><a href="#" className={`${styles.button} ${styles.secondary}`}>Learn More</a></div>;
}

export function CTASection() {
  return <section id="cta" className={`${styles.section} section-space`} aria-labelledby="cta-title"><div className={`container-shell ${styles.content}`}><p className={styles.badge}>Developer Preview</p><h2 id="cta-title" className="mt-6 text-balance text-4xl font-medium tracking-[-0.055em] text-pure-white sm:text-6xl">Build with JARVIS</h2><p className={styles.copy}>Experience the first generation of the NightCode AI Engineering System.<br className="hidden sm:block" /> JARVIS is designed to help developers engineer software with a local-first mindset while evolving into the core of the NightCode ecosystem.</p><CTAButtons /></div></section>;
}
