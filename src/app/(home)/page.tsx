import { Metadata } from "next";
import { BentoGrid, BentoCell } from "@/components/bento/BentoGrid";
import { HeroSection } from "@/components/bento/HeroSection";
import { SkillsCard } from "@/components/bento/SkillsCard";
import { AboutCard } from "@/components/bento/AboutCard";
import { ProjectsCard } from "@/components/bento/ProjectsCard";
import { ContactCard } from "@/components/bento/ContactCard";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Chintey Ley - Software Developer",
  },
  description:
    "Project docs for Chintey Ley. TypeScript, Next.js, React, and macOS write-ups, with live links for Neko, Pocket No, and Jomnouy.",
  openGraph: {
    url: `${SITE_URL}/`,
    siteName: "Chintey Ley",
    images: "/og/image.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/og/image.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center p-4 md:p-8">
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
    </div>
  );
}
