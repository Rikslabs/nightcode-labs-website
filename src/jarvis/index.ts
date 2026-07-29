export * from "./contracts";
export * from "./guideRegistry";
export * from "./HeadquartersGuideService";
export * from "./intent";
export * from "./actions";
export * from "./runtime";
import { HeadquartersGuideService } from "./HeadquartersGuideService";
export const headquartersGuide = new HeadquartersGuideService();
