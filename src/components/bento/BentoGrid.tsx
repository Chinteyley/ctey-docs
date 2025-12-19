"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface BentoCellProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export function BentoCell({ children, index, className }: BentoCellProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(
        "rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6",
        "hover:border-primary/30 transition-colors duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 w-full max-w-6xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}
