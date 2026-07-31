import type { LivingBuildingConfig } from "./contracts";

export const headquartersConfig: LivingBuildingConfig = {
  id: "headquarters",
  code: "HQ-01",
  label: "Headquarters",
  logo: "NC",
  personality: "calm",
  anchors: {
    origin: { name: "orbit", ownerId: "nightcode-city", level: "city", targetId: "orbit" },
    entrance: { name: "entrance", ownerId: "headquarters", level: "building", targetId: "headquarters-entrance" },
  },
  arrival: {
    title: "Welcome",
    titleAccent: "inside.",
    description: "The first room of the NightCode Universe.",
    entryLabel: "Enter arrival space",
    returnLabel: "Return to city",
    placeholderLabel: "Arrival space / future expansion region",
  },
  timing: { activation: 140, transformation: 300, arrival: 760, return: 520 },
};
