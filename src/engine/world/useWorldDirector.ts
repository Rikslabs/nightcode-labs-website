"use client";

import { useCallback, useState } from "react";
import type { WorldCommand } from "./contracts";
import { WorldDirector } from "./worldDirector";

export function useWorldDirector() {
  const [director] = useState(() => new WorldDirector());
  const [state, setState] = useState(director.getState());
  const dispatch = useCallback((command: WorldCommand) => setState(director.dispatch(command)), [director]);
  const completeTransition = useCallback(() => setState(director.completeTransition()), [director]);
  return { director, state, dispatch, completeTransition };
}

export type WorldDirectorController = ReturnType<typeof useWorldDirector>;
