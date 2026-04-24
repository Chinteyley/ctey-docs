import {
  FileCode2,
  Atom,
  Rocket,
  Globe,
  Palette,
  Package
} from "lucide-react";

const skills = [
  { name: "TypeScript", icon: FileCode2 },
  { name: "React", icon: Atom },
  { name: "Expo", icon: Rocket },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind", icon: Palette },
  { name: "Bun", icon: Package },
];

export function SkillsCard() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">Tech Stack</h2>
        <span className="font-mono text-[0.65rem] uppercase text-muted-foreground/70">
          06 modules
        </span>
      </div>

      <div className="grid flex-1 grid-cols-3 gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="nothing-tile min-h-[78px] flex-col justify-center gap-2 text-center"
          >
            <skill.icon className="h-5 w-5 text-foreground" />
            <span className="text-xs font-semibold text-muted-foreground">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
