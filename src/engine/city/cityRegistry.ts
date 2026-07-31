import type { CityDistrict, DroneRoute } from "./types";

export const cityDistricts: readonly CityDistrict[] = [
  { id: "headquarters", label: "Headquarters", code: "HQ-01", activity: "active", height: 42, x: 8, width: 15 },
  { id: "jarvis-tower", label: "JARVIS Tower", code: "SYS-01", activity: "monitoring", height: 78, x: 27, width: 13 },
  { id: "games-division", label: "Games Division", code: "LAB-03", activity: "quiet", height: 32, x: 45, width: 16 },
  { id: "research-labs", label: "Research Labs", code: "LAB-02", activity: "active", height: 56, x: 64, width: 14 },
  { id: "studio-division", label: "Studio Division", code: "LAB-04", activity: "quiet", height: 38, x: 83, width: 13 },
];

export const droneRoutes: readonly DroneRoute[] = [
  { id: "build-01", type: "build", label: "Build drone", route: "M -8 74 C 18 60, 22 25, 48 34 S 76 68, 108 43", duration: 24, delay: 0, destination: "headquarters" },
  { id: "project-01", type: "project", label: "Project drone", route: "M 108 76 C 84 56, 82 30, 62 46 S 28 64, -8 34", duration: 29, delay: 7, destination: "research-labs" },
  { id: "jarvis-01", type: "jarvis", label: "JARVIS drone", route: "M 48 106 C 40 84, 58 70, 52 50 S 45 20, 52 -6", duration: 20, delay: 3, destination: "jarvis-tower" },
];
