import { HeadquartersGateway } from "@/components/headquarters/HeadquartersGateway";
import { WorldLayer } from "@/world/engine/WorldLayer";
import { worldStageFeatures } from "@/world/engine/worldStage";
import styles from "./ArrivalExperience.module.css";

export function ArrivalExperience() {
  if (!worldStageFeatures.legacyArrivalEnvironment) {
    return (
      <main
        className={styles.universe}
        aria-label="Eagle Summit terrain development scene"
      >
        <WorldLayer />
      </main>
    );
  }

  return (
    <main className={`${styles.universe} ${styles.instant}`} aria-label="NightCode Headquarters plaza">
      <WorldLayer />
      <div className={styles.sky} aria-hidden="true">
        <div className={styles.haze} />
      </div>
      <section className={styles.viewport}>
        <CampusScene />
      </section>
      {worldStageFeatures.legacyArrivalInterface ? <HeadquartersGateway /> : null}
      <div className={styles.location} aria-hidden="true">
        <span>NIGHTCODE CAMPUS</span>
        <span>HEADQUARTERS / PLAZA</span>
      </div>
    </main>
  );
}

function CampusScene() {
  return (
    <div className={`${styles.campus} ${styles.plazaView}`} aria-hidden="true">
      <div className={styles.moon} />
      <div className={styles.horizonGlow} />
      <div className={`${styles.distantIsland} ${styles.distantIslandOne}`} />
      <div className={`${styles.distantIsland} ${styles.distantIslandTwo}`} />
      <div className={`${styles.distantIsland} ${styles.distantIslandThree}`} />
      <div className={styles.water} />
      <div className={`${styles.landmass} ${styles.rearLand}`} />
      <div className={`${styles.landmass} ${styles.mainLand}`} />
      <div className={styles.cliffStrata} />
      <div className={styles.cliffSupports}><i /><i /><i /></div>
      <div className={styles.serviceDock}><span /><i /></div>
      <div className={styles.utilityConduit} />
      <div className={styles.researchPlateau}><i /><i /><i /></div>
      <div className={styles.studioIsle}><i /><i /></div>
      <div className={styles.gamesBasin} />
      <div className={styles.headquarters}>
        <div className={styles.hqWing} />
        <div className={styles.hqWingRight} />
        <div className={styles.hqRoofline} />
        <div className={styles.hqStonePlinth} />
        <div className={styles.hqFacadeRhythm}><i /><i /><i /><i /></div>
        <div className={styles.hqSpine} />
        <div className={styles.hqCanopy} />
        <div className={styles.hqEntrance} />
        <span className={styles.hqSignal} />
      </div>
      <div className={styles.jarvis}><span /><i /></div>
      <div className={styles.energyCore}><span /><i /></div>
      <div className={styles.waterfall} />
      <div className={styles.waterfallMist}><span /><i /></div>
      <div className={styles.arrivalTerrace}><span /><i /><b /></div>
      <div className={styles.reflectionPool}><span /><i /></div>
      <div className={styles.plantingBed}><b /><b /><b /><b /></div>
      <div className={styles.arrivalBridge}><span /><i /><b /></div>
      <div className={styles.cloudEdge}><span /><i /></div>
      <div className={`${styles.lowMist} ${styles.lowMistWest}`} />
      <div className={`${styles.lowMist} ${styles.lowMistEast}`} />
      <div className={styles.distantShadow} />
      <div className={styles.civicBridge} />
      <BirdSystem />
      <DroneSystem />
    </div>
  );
}

function BirdSystem() {
  return (
    <div className={styles.birdSystem}>
      <div className={`${styles.birdFlock} ${styles.birdFlockCrossing}`}><i /><i /><i /></div>
      <div className={`${styles.birdFlock} ${styles.birdFlockCliff}`}><i /><i /><i /></div>
    </div>
  );
}

function DroneSystem() {
  return (
    <div className={styles.droneSystem}>
      <div className={`${styles.drone} ${styles.droneMaintenance}`}><i /></div>
      <div className={`${styles.drone} ${styles.droneCargo}`}><i /></div>
      <div className={`${styles.drone} ${styles.droneSurvey}`}><i /></div>
      <div className={`${styles.drone} ${styles.droneSecurity}`}><i /></div>
    </div>
  );
}
