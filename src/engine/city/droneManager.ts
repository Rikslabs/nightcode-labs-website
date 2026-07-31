import type { CityDistrictId, DroneRoute, DroneType } from "./types";

export type DroneEvent = Readonly<{ droneId: string; destination: CityDistrictId; type: DroneType }>;

export class DroneManager {
  private readonly routes: readonly DroneRoute[];

  constructor(routes: readonly DroneRoute[]) {
    this.routes = routes;
  }

  getRoutes() {
    return this.routes;
  }

  getByType(type: DroneType) {
    return this.routes.filter((route) => route.type === type);
  }

  createEvent(route: DroneRoute): DroneEvent {
    return { droneId: route.id, destination: route.destination, type: route.type };
  }
}
