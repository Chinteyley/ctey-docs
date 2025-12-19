"use client";

import { motion } from "motion/react";
import { Sparkles, GitBranch } from "lucide-react";

const interests = [
  { label: "Anime", icon: Sparkles },
  { label: "Open Source", icon: GitBranch },
];

export function AboutCard() {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Passions</h2>
      <div className="flex flex-col gap-3 flex-1">
        {interests.map((interest, i) => (
          <motion.div
            key={interest.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
          >
            <interest.icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{interest.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
