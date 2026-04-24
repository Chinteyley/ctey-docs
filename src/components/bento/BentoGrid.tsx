"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

interface BentoCellProps {
  children: ReactNode;
  index: number;
  className?: string;
}

export function BentoCell({ children, index, className }: BentoCellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              transform: "translate3d(0, 18px, 0) scale(0.97)",
            }
      }
      animate={{ opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" }}
      transition={{
        duration: reduceMotion ? 0 : 0.42,
        delay: reduceMotion ? 0 : index * 0.07,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={cn("nothing-panel group/bento p-6", className)}
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
        "grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12",
        className
      )}
    >
      {children}
    </div>
  );
}
