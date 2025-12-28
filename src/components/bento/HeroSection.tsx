"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full min-h-[280px] gap-6">
      <div className="flex flex-col justify-center flex-1">
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

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 flex-shrink-0"
      >
        <Image
          src="/ctey.png"
          alt="Chintey Ley - Software Developer specializing in TypeScript, React, and React Native development"
          fill
          className="object-contain rounded-2xl"
          priority
          sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
        />
      </motion.div>
    </div>
  );
}
