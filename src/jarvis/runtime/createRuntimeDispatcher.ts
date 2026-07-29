import { HeadquartersGuideService } from "../HeadquartersGuideService";
import { GuideExecutor } from "./executors/GuideExecutor";
import { UnknownExecutor } from "./executors/UnknownExecutor";
import { RuntimeDispatcher } from "./RuntimeDispatcher";
export function createRuntimeDispatcher(): RuntimeDispatcher { return new RuntimeDispatcher({ GUIDE: new GuideExecutor(new HeadquartersGuideService()), UNKNOWN: new UnknownExecutor() }); }
