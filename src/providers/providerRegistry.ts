import { LocalHeadquartersProvider } from "./LocalHeadquartersProvider";
import { jsonSnapshotHeadquartersProvider } from "./JsonSnapshotHeadquartersProvider";
import { CompositeHeadquartersProvider } from "./CompositeHeadquartersProvider";
export type HeadquartersProviderMode = "local" | "json";
export const providerMode = "local" as HeadquartersProviderMode;
const baseHeadquartersProvider = providerMode === "json" ? jsonSnapshotHeadquartersProvider : new LocalHeadquartersProvider();
export const headquartersProvider = new CompositeHeadquartersProvider(baseHeadquartersProvider);
