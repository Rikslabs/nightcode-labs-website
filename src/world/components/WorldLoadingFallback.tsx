import { worldAssets } from "../assets/worldAssets";
import styles from "../engine/WorldEngine.module.css";

export function WorldLoadingFallback() {
  return (
    <picture className={styles.fallback}>
      <source media="(max-width: 700px)" srcSet={worldAssets.environment.mobileAvif} type="image/avif" />
      <source media="(max-width: 700px)" srcSet={worldAssets.environment.mobile} type="image/webp" />
      <source srcSet={worldAssets.environment.desktopAvif} type="image/avif" />
      <img src={worldAssets.environment.desktop} alt="" width="1672" height="941" decoding="async" fetchPriority="high" />
    </picture>
  );
}
