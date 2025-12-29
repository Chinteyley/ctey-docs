"use client";

import { motion } from "motion/react";

export function HeroSection() {
  return (
    <div className="flex flex-col justify-center h-full min-h-[280px]">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-sm font-medium text-primary mb-2"
      >
        Hello, I&apos;m
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
      >
        Chintey Ley
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="text-xl md:text-2xl text-muted-foreground font-medium mb-4"
      >
        Software Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="text-base text-muted-foreground max-w-md"
      >
        Building digital experiences with TypeScript, React & React Native.
        Let&apos;s create something amazing together.
      </motion.p>
    </div>
  );
}
