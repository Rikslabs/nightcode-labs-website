import type { DepartmentId } from "./HeadquartersHub";

const briefs: Record<DepartmentId, { heading: string; description: string }> = {
  jarvis: { heading: "JARVIS Systems", description: "Intelligence, coordination, and observability for the NightCode campus." },
  games: { heading: "Games Division", description: "Play, simulation, and interaction systems under active development." },
  research: { heading: "Research Division", description: "Long-horizon engineering investigations and experimental systems." },
  studio: { heading: "NightCode Studio", description: "A reserved production department planned for a future chapter." },
  labs: { heading: "Engineering Labs", description: "Prototype development, validation, and applied systems engineering." },
  about: { heading: "NightCode Labs", description: "An engineering institution building thoughtful software, intelligence, and interactive systems." },
};

export function DepartmentBrief({ department }: { department: DepartmentId }) {
  const brief = briefs[department];
  return <><h2>{brief.heading}</h2><p>{brief.description}</p></>;
}
