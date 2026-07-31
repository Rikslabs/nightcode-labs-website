"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = Readonly<{ children: ReactNode; fallback: ReactNode }>;
type State = Readonly<{ failed: boolean }>;

export class WorldErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.error("NightCode World Engine failed to initialize.", error, info);
    }
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
