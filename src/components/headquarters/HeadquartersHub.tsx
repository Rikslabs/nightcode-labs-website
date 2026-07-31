"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import styles from "./HeadquartersHub.module.css";

const DepartmentBrief = dynamic(
  () => import("./DepartmentBrief").then((module) => module.DepartmentBrief),
  { loading: () => <p className={styles.briefLoading}>Retrieving department brief…</p> },
);

const departments = [
  { id: "jarvis", code: "AI-01", name: "JARVIS", state: "Online" },
  { id: "games", code: "SIM-02", name: "Games", state: "Active" },
  { id: "research", code: "RND-03", name: "Research", state: "Active" },
  { id: "studio", code: "STU-04", name: "Studio", state: "Future" },
  { id: "labs", code: "LAB-05", name: "Labs", state: "Operational" },
  { id: "about", code: "CIV-06", name: "About", state: "Open" },
] as const;

export type DepartmentId = (typeof departments)[number]["id"];

const status = [
  ["JARVIS", "ONLINE"],
  ["VERSION", "0.1.0"],
  ["PROJECTS", "04 ACTIVE"],
  ["BUILD", "STABLE"],
  ["MISSION", "HEADQUARTERS"],
] as const;

export function HeadquartersHub({ onExit }: { onExit: () => void }) {
  const [selected, setSelected] = useState<DepartmentId | null>(null);
  const exitRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    exitRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onExit();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onExit]);

  return (
    <section className={styles.hub} role="dialog" aria-modal="true" aria-labelledby="headquarters-title">
      <header className={styles.header}>
        <div>
          <span>NIGHTCODE HEADQUARTERS / GRAND ATRIUM</span>
          <h1 id="headquarters-title">Engineering Directory</h1>
        </div>
        <button ref={exitRef} className={styles.exit} type="button" onClick={onExit}>Return to plaza</button>
      </header>

      <div className={styles.interior}>
        <nav className={styles.directory} aria-label="NightCode departments">
          {departments.map((department) => (
            <button
              type="button"
              key={department.id}
              aria-pressed={selected === department.id}
              onClick={() => setSelected(department.id)}
            >
              <span>{department.code}</span>
              <strong>{department.name}</strong>
              <small>{department.state}</small>
              <b aria-hidden="true">→</b>
            </button>
          ))}
        </nav>

        <aside className={styles.status} aria-label="Headquarters status">
          <span className={styles.statusTitle}>BUILDING STATUS / LIVE</span>
          <dl>
            {status.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
            ))}
          </dl>
          <div className={styles.brief} aria-live="polite">
            {selected ? <DepartmentBrief department={selected} /> : <p>Select a department to view its arrival brief.</p>}
          </div>
        </aside>
      </div>
    </section>
  );
}
