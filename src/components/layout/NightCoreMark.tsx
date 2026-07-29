type NightCoreMarkProps = {
  className?: string;
};

export function NightCoreMark({ className = "" }: NightCoreMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex size-8 shrink-0 items-center justify-center rounded-[0.65rem] border border-electric-cyan/35 bg-deep-navy ${className}`}
    >
      <span className="absolute h-px w-4 bg-electric-cyan" />
      <span className="absolute h-4 w-px bg-electric-cyan" />
      <span className="size-2 rounded-full bg-electric-cyan" />
    </span>
  );
}
