"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./HeadquartersGateway.module.css";

const HeadquartersHub = dynamic(
  () => import("./HeadquartersHub").then((module) => module.HeadquartersHub),
  { loading: () => <div className={styles.loading} role="status">Opening Headquarters…</div> },
);

export function HeadquartersGateway() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <div className={styles.threshold}>
          <span className={styles.eyebrow}>HEADQUARTERS / PUBLIC ENTRY</span>
          <button type="button" onClick={() => setIsOpen(true)}>
            Enter Headquarters
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
      {isOpen && <HeadquartersHub onExit={() => setIsOpen(false)} />}
    </>
  );
}
