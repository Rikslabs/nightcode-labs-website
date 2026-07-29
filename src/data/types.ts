export type Product = { name: string; category?: string; designation?: string; status: string; description: string; modules?: readonly string[]; action?: string; href?: string; featured?: boolean };
export type RoadmapStage = { number: string; horizon: string; title: string; status: string; description: string; includes: readonly string[] };
export type ResearchProgram = readonly [id: string, title: string, description: string, status: string];
export type EngineeringOperation = readonly [label: string, value: string];
export type StrategicDirective = { id: string; title: string; objective: string; status: string };
export type HeadquartersStatus = readonly [label: string, state: string];
export type MissionPath = readonly [role: string, actions: readonly string[]];
export type Mission = { role: string; actions: readonly string[] };
