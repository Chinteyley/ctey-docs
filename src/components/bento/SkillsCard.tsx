"use client";

import { motion } from "motion/react";
import {
  FileCode2,
  Atom,
  Rocket,
  Globe,
  Palette,
  Rabbit
} from "lucide-react";

const skills = [
  { name: "TypeScript", icon: FileCode2 },
  { name: "React", icon: Atom },
  { name: "Expo", icon: Rocket },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind", icon: Palette },
  { name: "Bun", icon: Rabbit },
];

export function SkillsCard() {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Tech Stack</h2>
      <div className="grid grid-cols-3 gap-3 flex-1">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
          >
            <skill.icon className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
