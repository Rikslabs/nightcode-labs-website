import { NightCoreHeroVisual } from "./NightCoreHeroVisual";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <main id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={`container-shell ${styles.content}`}>
        <div className={styles.visualColumn}><NightCoreHeroVisual /></div>
        <div className={styles.console}>
          <div className={styles.copyColumn}>
          <p className={`${styles.label} mono mb-5 text-xs uppercase tracking-[0.24em] text-electric-cyan`}>NightCode Labs</p>
          <h1 id="hero-title" className={`${styles.headline} text-balance max-w-3xl text-5xl font-medium leading-[1.02] tracking-[-0.06em] text-pure-white sm:text-6xl lg:text-7xl`}>Engineering Tomorrow.<br /><span className="text-muted-foreground">Today.</span></h1>
          <p className={`${styles.supporting} mt-7 max-w-md text-base leading-7 text-muted-foreground sm:text-lg`}>Engineer intelligent systems that empower builders.</p>
          <div className={`${styles.actions} mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row`}><a href="#products" className="inline-flex min-h-12 items-center justify-center rounded-md bg-pure-white px-6 text-sm font-medium text-night-black outline-none transition-colors motion-standard hover:bg-electric-cyan focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-night-black">Explore Products</a><a href="#jarvis" className="inline-flex min-h-12 items-center justify-center rounded-md border border-border-strong px-6 text-sm font-medium text-pure-white outline-none transition-colors motion-standard hover:border-electric-cyan/60 hover:bg-surface focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-night-black">Meet JARVIS</a></div>
          <p className={`${styles.status} mono mt-12 text-[0.65rem] uppercase tracking-[0.18em] text-subtle-foreground sm:mt-16`}>Built with Precision <span className="mx-2 text-electric-cyan/60">•</span> Guided by Intelligence</p>
          </div>
        </div>
      </div>
    </main>
  );
}
