import styles from "./NightCoreHeroVisual.module.css";

export function NightCoreHeroVisual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <svg className={styles.svg} viewBox="0 0 640 640" focusable="false" role="presentation">
        <defs>
          <radialGradient id="gate-bloom" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#54e6ff" stopOpacity=".16" /><stop offset=".62" stopColor="#356dff" stopOpacity=".04" /><stop offset="1" stopColor="#05070b" stopOpacity="0" /></radialGradient>
          <linearGradient id="gate-edge" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#54e6ff" /><stop offset=".52" stopColor="#356dff" /><stop offset="1" stopColor="#a78bfa" /></linearGradient>
          <linearGradient id="gate-metal" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#f8fafc" stopOpacity=".7" /><stop offset=".25" stopColor="#64748b" stopOpacity=".28" /><stop offset="1" stopColor="#0a1020" stopOpacity=".75" /></linearGradient>
          <linearGradient id="gate-route" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#54e6ff" stopOpacity="0" /><stop offset=".5" stopColor="#54e6ff" stopOpacity=".7" /><stop offset="1" stopColor="#a78bfa" stopOpacity="0" /></linearGradient>
        </defs>

        <g className={styles.environment} fill="none" aria-hidden="true">
          <path className={styles.environmentRail} d="M18 126h104l34 34M622 126H518l-34 34M18 514h104l34-34M622 514H518l-34-34" />
          <path className={styles.environmentConduit} d="M12 178h86l28 28h72M628 178h-86l-28 28h-72M12 462h86l28-28h72M628 462h-86l-28-28h-72" />
          <path className={styles.environmentGuide} d="M52 256h74M514 256h74M52 384h74M514 384h74" />
          <path className={styles.environmentPanel} d="M48 214h54v28H48zM538 214h54v28h-54zM48 398h54v28H48zM538 398h54v28h-54z" />
          <path className={styles.environmentPanelInner} d="M58 222h30M58 230h20M552 222h30M562 230h20M58 406h30M58 414h20M552 406h30M562 414h20" />
          <circle className={styles.environmentNode} cx="156" cy="160" r="3" /><circle className={styles.environmentNode} cx="484" cy="160" r="3" />
          <circle className={styles.environmentNode} cx="156" cy="480" r="3" /><circle className={styles.environmentNode} cx="484" cy="480" r="3" />
          <path className={styles.environmentScan} d="M40 294h78M522 346h78" />
          <path className={styles.archColumn} d="M84 72v496M556 72v496" />
          <path className={styles.archColumnInner} d="M98 112v416M542 112v416" />
          <path className={styles.supportArm} d="M84 126h78l30 30M556 126h-78l-30 30M84 514h78l30-30M556 514h-78l-30-30" />
          <path className={styles.floorRail} d="M34 552h176l28-18h164l28 18h176M34 570h188l22-12h152l22 12h188" />
          <path className={styles.ceilingRail} d="M34 88h176l28 18h164l28-18h176" />
          <path className={styles.mountAnchor} d="M190 232h28v18M450 232h-28v18M190 408h28v-18M450 408h-28v-18" />
        </g>

        <circle className={styles.bloom} cx="320" cy="320" r="245" fill="url(#gate-bloom)" />

        <g className={styles.outerGate} fill="none" stroke="url(#gate-edge)" strokeLinecap="square">
          <path d="M118 246a216 216 0 0 1 82-91l18 22a187 187 0 0 0-71 78z" strokeOpacity=".42" strokeWidth="7" />
          <path d="M440 155a216 216 0 0 1 82 91l-29 9a187 187 0 0 0-71-78z" strokeOpacity=".42" strokeWidth="7" />
          <path d="M118 394a216 216 0 0 0 82 91l18-22a187 187 0 0 1-71-78z" strokeOpacity=".3" strokeWidth="7" />
          <path d="M440 485a216 216 0 0 0 82-91l-29-9a187 187 0 0 1-71 78z" strokeOpacity=".3" strokeWidth="7" />
          <path d="M215 116h38M387 116h38M215 524h38M387 524h38" stroke="url(#gate-metal)" strokeWidth="6" />
        </g>

        <g className={styles.outerJoints} fill="var(--night-black)" stroke="url(#gate-edge)">
          <circle cx="118" cy="246" r="7" strokeWidth="2" /><circle cx="522" cy="246" r="7" strokeWidth="2" />
          <circle cx="118" cy="394" r="7" strokeWidth="2" /><circle cx="522" cy="394" r="7" strokeWidth="2" />
          <rect x="246" y="106" width="16" height="10" strokeWidth="2" /><rect x="378" y="106" width="16" height="10" strokeWidth="2" />
          <rect x="246" y="524" width="16" height="10" strokeWidth="2" /><rect x="378" y="524" width="16" height="10" strokeWidth="2" />
        </g>

        <g className={styles.assembly} fill="none" stroke="url(#gate-edge)">
          <path d="M156 320a164 164 0 0 1 26-88M458 232a164 164 0 0 1 26 88M484 320a164 164 0 0 1-26 88M182 408a164 164 0 0 1-26-88" strokeOpacity=".38" strokeWidth="3" />
          <path d="M188 190a184 184 0 0 1 64-38M388 152a184 184 0 0 1 64 38M452 450a184 184 0 0 1-64 38M252 488a184 184 0 0 1-64-38" strokeOpacity=".25" strokeWidth="2" strokeDasharray="18 12" />
          <path d="M212 188h36M392 188h36M212 452h36M392 452h36" stroke="url(#gate-metal)" strokeWidth="5" />
          <circle cx="320" cy="320" r="146" strokeOpacity=".18" strokeDasharray="2 10" />
        </g>

        <g className={styles.calibration} fill="none" stroke="#54e6ff" strokeOpacity=".55">
          <path d="M320 72v38M320 530v38M72 320h38M530 320h38" />
          <path d="m144 144 28 28M468 468l28 28M496 144l-28 28M172 468l-28 28" />
          <path d="M320 132v12M320 496v12M132 320h12M496 320h12" strokeWidth="3" />
        </g>

        <g className={styles.routes} fill="none" stroke="url(#gate-route)">
          <path d="M20 320h82l18-18h74" strokeWidth="2" /><path d="M620 320h-82l-18 18h-74" strokeWidth="2" />
          <path d="M320 20v82l18 18v44M320 620v-82l-18-18v-44" strokeWidth="2" />
          <path d="M108 250h42l18 18h32M532 390h-42l-18-18h-32" strokeOpacity=".65" />
        </g>

        <g className={styles.intakePorts} fill="var(--night-black)" strokeWidth="3">
          <path d="M154 302h50l18 18-18 18h-50l-12-18z" stroke="#54e6ff" /><path d="M486 302h-50l-18 18 18 18h50l12-18z" stroke="#a78bfa" />
          <path d="M204 312h22M436 312h-22" stroke="#f8fafc" strokeOpacity=".7" />
        </g>
        <g className={styles.intakeResponse} fill="none" strokeLinecap="round"><circle className={styles.intakeFlare} cx="226" cy="320" r="14" stroke="#54e6ff" /><circle className={styles.intakeFlare} cx="414" cy="320" r="14" stroke="#a78bfa" /><path className={styles.intakeChannel} d="M226 320h36M414 320h-36" /></g>
        <g className={styles.powerRouting} fill="none" strokeLinecap="round">
          <path className={styles.outerPower} d="M244 320v-62l42-42M396 320v62l-42 42" />
          <path className={styles.containmentPower} d="M286 216h68M286 424h68" />
          <path className={styles.chamberPower} d="M300 246v28M340 246v28M300 394v-28M340 394v-28" />
        </g>
        <g className={styles.powerNodes} fill="#f8fafc"><circle cx="244" cy="258" r="4" /><circle cx="396" cy="382" r="4" /><circle cx="286" cy="216" r="3" /><circle cx="354" cy="424" r="3" /><circle cx="300" cy="274" r="3" /><circle cx="340" cy="366" r="3" /></g>
        <rect className={styles.readyIndicator} x="306" y="304" width="28" height="32" rx="4" fill="none" stroke="#54e6ff" />
        <g className={styles.synchronization} fill="none" strokeLinecap="square">
          <path className={styles.lockRail} d="M246 232h34M394 232h-34M246 408h34M394 408h-34" />
          <path className={styles.lockBracket} d="M236 244v18h14M404 244v18h-14M236 396v-18h14M404 396v-18h-14" />
          <path className={styles.syncAxis} d="M262 320h116" />
          <circle className={styles.syncNode} cx="262" cy="320" r="4" /><circle className={styles.syncNode} cx="378" cy="320" r="4" />
        </g>
        <g className={styles.authorization} fill="#f8fafc" textAnchor="middle">
          <text className={styles.authLocked} x="320" y="186">CONTAINMENT LOCKED</text>
          <text className={styles.authStable} x="320" y="470">POWER STABLE · SYNC COMPLETE</text>
          <text className={styles.authReady} x="320" y="212">MANUFACTURING AUTHORIZED</text>
        </g>

        <g className={styles.chamber} fill="none" stroke="url(#gate-metal)">
          <path d="M228 212h48l44-28 44 28h48l24 38v140l-24 38h-48l-44 28-44-28h-48l-24-38V250z" strokeOpacity=".5" strokeWidth="5" />
          <path d="M246 232h50l24-16 24 16h50l20 30v116l-20 30h-50l-24 16-24-16h-50l-20-30V262z" stroke="#54e6ff" strokeOpacity=".16" strokeWidth="2" />
          <path d="M268 252h38l14-10 14 10h38l14 20v96l-14 20h-38l-14 10-14-10h-38l-14-20v-96z" stroke="#a78bfa" strokeOpacity=".14" strokeWidth="2" />
        </g>

        <g className={styles.energyLeft} fill="none" stroke="#54e6ff" strokeLinecap="round"><path className={styles.energyGlow} d="M18 320H220c24 0 30-18 48-18h52" /><path className={styles.energyMain} d="M18 320H220c24 0 30-18 48-18h52" /><path className={styles.energyBranch} d="M74 292h70l24 16h58M106 350h68l20-16h52M156 274l34 22M182 366l32-24" /></g>
        <g className={styles.energyRight} fill="none" stroke="#a78bfa" strokeLinecap="round"><path className={styles.energyGlow} d="M622 320H420c-24 0-30-18-48-18h-52" /><path className={styles.energyMain} d="M622 320H420c-24 0-30-18-48-18h-52" /><path className={styles.energyBranch} d="M566 292h-70l-24 16h-58M534 350h-68l-20-16h-52M484 274l-34 22M458 366l-32-24" /></g>
        <circle className={styles.collisionFlash} cx="320" cy="320" r="22" fill="#f8fafc" /><circle className={styles.collisionRing} cx="320" cy="320" r="42" fill="none" stroke="#54e6ff" />

        <g className={styles.field} fill="none" stroke="url(#gate-edge)"><circle cx="320" cy="320" r="218" strokeOpacity=".1" /><circle cx="320" cy="320" r="190" strokeOpacity=".22" /><circle cx="320" cy="320" r="157" strokeOpacity=".14" strokeDasharray="2 11" /></g>
        <g className={styles.nodes} fill="#54e6ff"><circle cx="120" cy="320" r="3" /><circle cx="520" cy="320" r="3" /><circle cx="320" cy="120" r="3" /><circle cx="320" cy="520" r="3" /></g>

        <g className={styles.nConstruction} strokeLinecap="square" strokeLinejoin="miter">
          <path className={styles.nBody} d="M258 242h32v156h-32z" fill="url(#gate-metal)" /><path className={styles.nEdge} d="M258 242h32v156h-32z" fill="none" stroke="#54e6ff" strokeWidth="3" />
          <path className={styles.nBody} d="m274 242 112 156h-36L238 242z" fill="url(#gate-metal)" /><path className={styles.nEdge} d="m274 242 112 156h-36L238 242z" fill="none" stroke="url(#gate-edge)" strokeWidth="3" />
          <path className={styles.nBody} d="M350 242h32v156h-32z" fill="url(#gate-metal)" /><path className={styles.nEdge} d="M350 242h32v156h-32z" fill="none" stroke="#a78bfa" strokeWidth="3" />
          <path className={styles.nSegment} d="M274 242v156M274 242 386 398M382 242v156" fill="none" stroke="#f8fafc" strokeOpacity=".8" strokeWidth="2" />
          <g className={styles.nJoints} fill="#0a1020" stroke="#f8fafc" strokeWidth="2"><circle cx="274" cy="242" r="6" /><circle cx="274" cy="398" r="6" /><circle cx="382" cy="242" r="6" /><circle cx="382" cy="398" r="6" /></g>
        </g>
        <g className={styles.cConstruction} fill="none" stroke="url(#gate-edge)" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="15"><path className={styles.cSegment} d="M414 232a112 112 0 1 0 0 176" /><path className={styles.cSegment} d="M414 232h-28M414 408h-28" /></g>
        <g className={styles.markDetails} fill="none" stroke="#54e6ff" strokeOpacity=".8" strokeWidth="2"><path d="M320 274v92M276 320h88" /></g>
        <circle className={styles.seed} cx="320" cy="320" r="4" fill="#54e6ff" /><circle className={styles.ignition} cx="320" cy="320" r="10" fill="#f8fafc" /><circle className={styles.ignitionCore} cx="320" cy="320" r="3" fill="#54e6ff" />
      </svg>
    </div>
  );
}
