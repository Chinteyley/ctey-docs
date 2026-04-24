import { Sparkles, GitBranch } from "lucide-react";

const interests = [
  { label: "Anime", icon: Sparkles },
  { label: "Open Source", icon: GitBranch },
];

export function AboutCard() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-5 text-lg font-semibold">Passions</h2>
      <div className="flex flex-1 flex-col gap-3">
        {interests.map((interest) => (
          <div
            key={interest.label}
            className="nothing-tile min-h-14 justify-start gap-3 px-4"
          >
            <interest.icon className="h-4 w-4 text-foreground" />
            <span className="text-sm font-semibold">{interest.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
