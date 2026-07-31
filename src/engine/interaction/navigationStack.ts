import type { NavigationNode, SpatialLevel } from "./contracts";

export class NavigationStack {
  private readonly nodes: NavigationNode[];

  constructor(root: NavigationNode = { level: "universe", id: "universe" }) {
    this.nodes = [root];
  }

  enter(level: SpatialLevel, id: string, label?: string) {
    this.nodes.push({ level, id, label });
    return this.current();
  }

  back() {
    if (this.nodes.length > 1) this.nodes.pop();
    return this.current();
  }

  current() {
    return this.nodes[this.nodes.length - 1];
  }

  getSnapshot() {
    return [...this.nodes] as readonly NavigationNode[];
  }
}
