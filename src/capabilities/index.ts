export * from "./contracts";
export * from "./HeadquartersCapabilityService";

import { headquartersRepositories } from "@/repositories";
import { HeadquartersCapabilityService } from "./HeadquartersCapabilityService";
export const headquartersCapabilities = new HeadquartersCapabilityService(headquartersRepositories);
