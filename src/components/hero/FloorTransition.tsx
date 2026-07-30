"use client";

import { useEffect, useRef } from "react";
import styles from "./FloorTransition.module.css";

const rings = Array.from({ length: 7 }, (_, index) => index + 1);
const bands = Array.from({ length: 5 }, (_, index) => index + 1);
const radials = Array.from({ length: 8 }, (_, index) => index);

export function FloorTransition() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let target = 0;
    let camera = 0;
    let active = false;
    let needsMeasurement = true;

    const update = () => {
      frame = 0;
      if (!active) return;

      if (needsMeasurement) {
        needsMeasurement = false;
        const bounds = stage.getBoundingClientRect();
        const travel = Math.max(stage.offsetHeight - window.innerHeight, 1);
        target = Math.max(0, Math.min(1, -bounds.top / travel));
        stage.style.setProperty("--descent", target.toFixed(4));
      }

      camera += (target - camera) * (target > .88 ? .2 : .14);
      stage.style.setProperty("--camera", camera.toFixed(4));
      if (Math.abs(target - camera) > .001) frame = window.requestAnimationFrame(update);
    };
    const schedule = (measure = true) => {
      needsMeasurement ||= measure;
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const onScroll = () => schedule();
    const onResize = () => schedule();
    const observer = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting;
      if (active) {
        needsMeasurement = true;
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        schedule(false);
      } else {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      }
    });

    observer.observe(stage);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div id="engineering" ref={stageRef} className={styles.stage} aria-label="NightCode headquarters reactor-level transition">
      <div className={styles.viewport}>
        <div className={styles.shaft} aria-hidden="true">
          <div className={styles.coreShadow} />
          {rings.map((ring) => <span key={ring} className={`${styles.ring} ${styles[`ring${ring}`]}`} />)}
          <div className={styles.radials}>{radials.map((radial) => <span key={radial} />)}</div>
          <div className={styles.platforms}>{bands.map((band) => <span key={band} className={`${styles.platform} ${styles[`platform${band}`]}`} />)}</div>
          <div className={styles.supports}><span /><span /><span /><span /></div>
        </div>
        <div className={`${styles.location} ${styles.departure}`}><span>FLOOR 00</span><small>NIGHTCORE REACTOR HALL</small></div>
        <div className={`${styles.location} ${styles.arrival}`}><span>FLOOR 01</span><small>ENGINEERING DIVISION</small></div>
      </div>
    </div>
  );
}
