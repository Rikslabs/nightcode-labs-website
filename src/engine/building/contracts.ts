import type { AnchorPoint } from "@/engine/world/contracts";

export const buildingPersonalities = ["calm", "industrial", "intelligent", "creative", "experimental"] as const;
export type BuildingPersonality = (typeof buildingPersonalities)[number];

export type ArrivalSpaceConfig = Readonly<{
  title: string;
  titleAccent?: string;
  description: string;
  entryLabel: string;
  returnLabel: string;
  placeholderLabel: string;
}>;

export type BuildingTiming = Readonly<{
  activation: number;
  transformation: number;
  arrival: number;
  return: number;
}>;

export type LivingBuildingConfig = Readonly<{
  id: string;
  code: string;
  label: string;
  logo: string;
  personality: BuildingPersonality;
  anchors: Readonly<{ origin: AnchorPoint; entrance: AnchorPoint }>;
  arrival: ArrivalSpaceConfig;
  timing: BuildingTiming;
}>;
