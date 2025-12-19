import { Metadata } from "next";
import { BentoGrid, BentoCell } from "@/components/bento/BentoGrid";
import { HeroSection } from "@/components/bento/HeroSection";
import { SkillsCard } from "@/components/bento/SkillsCard";
import { AboutCard } from "@/components/bento/AboutCard";
import { ProjectsCard } from "@/components/bento/ProjectsCard";
import { ContactCard } from "@/components/bento/ContactCard";

export const metadata: Metadata = {
  title: "Chintey Ley - Software Developer",
  description:
    "Chintey (Chintey Ley), a Software Developer specializing in TypeScript, React, and React Native. Passionate about Anime and Open Source.",
  openGraph: {
    url: "https://ctey.dev/",
    siteName: "Chintey Ley - Software Developer",
    images: "/og/image.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/og/image.png",
  },
  alternates: {
    canonical: "https://www.ctey.dev",
  },
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-8">
      <BentoGrid>
        {/* Hero - Large left cell spanning 2 rows */}
        <BentoCell
          index={0}
          className="col-span-1 md:col-span-4 lg:col-span-6 md:row-span-2"
        >
          <HeroSection />
        </BentoCell>

        {/* Skills - Medium top right */}
        <BentoCell
          index={1}
          className="col-span-1 md:col-span-2 lg:col-span-4"
        >
          <SkillsCard />
        </BentoCell>

        {/* About - Small top right corner */}
        <BentoCell
          index={2}
          className="col-span-1 md:col-span-2 lg:col-span-2"
        >
          <AboutCard />
        </BentoCell>

        {/* Projects - Wide bottom right */}
        <BentoCell
          index={3}
          className="col-span-1 md:col-span-4 lg:col-span-6"
        >
          <ProjectsCard />
        </BentoCell>

        {/* Contact - Bottom left */}
        <BentoCell
          index={4}
          className="col-span-1 md:col-span-6 lg:col-span-12"
        >
          <ContactCard />
        </BentoCell>
      </BentoGrid>
    </main>
  );
}
