export type CityDistrictId = "headquarters" | "jarvis-tower" | "games-division" | "research-labs" | "studio-division";
export type BuildingActivity = "active" | "quiet" | "monitoring";
export type DroneType = "build" | "project" | "jarvis";

export type CityDistrict = Readonly<{
  id: CityDistrictId;
  label: string;
  code: string;
  activity: BuildingActivity;
  height: number;
  x: number;
  width: number;
}>;

export type DroneRoute = Readonly<{
  id: string;
  type: DroneType;
  label: string;
  route: string;
  duration: number;
  delay: number;
  destination: CityDistrictId;
}>;
