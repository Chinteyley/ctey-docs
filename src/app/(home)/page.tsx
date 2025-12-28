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
    type: "website",
    url: "https://ctey.dev/",
    siteName: "Chintey Ley - Software Developer",
    images: "/og/image.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/og/image.png",
  },
  alternates: {
    canonical: "https://ctey.dev",
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

      {/* Additional Content Section for SEO */}
      <section className="max-w-4xl w-full mt-12 px-4">
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">About My Work</h2>
          <p className="text-muted-foreground mb-4">
            As a passionate software developer, I specialize in building modern web and mobile applications 
            using cutting-edge technologies. My expertise lies in creating seamless user experiences with 
            TypeScript, React, and React Native, while leveraging the power of Next.js for server-side 
            rendering and optimal performance.
          </p>
          <p className="text-muted-foreground mb-4">
            Throughout my career, I&apos;ve developed various projects ranging from AI-powered educational 
            platforms to creative tools for content creators. My work combines technical excellence with 
            user-centric design, ensuring that every application I build is not only functional but also 
            intuitive and engaging. I believe in writing clean, maintainable code and following best 
            practices to deliver high-quality software solutions.
          </p>
          <p className="text-muted-foreground mb-4">
            I&apos;m deeply committed to the open-source community and continuously learning new technologies 
            to stay at the forefront of web development. Whether it&apos;s implementing complex state management, 
            optimizing application performance, or creating beautiful user interfaces with Tailwind CSS, 
            I approach every challenge with enthusiasm and dedication. My passion for anime and open source 
            drives me to create projects that inspire and help others in the developer community.
          </p>
          <p className="text-muted-foreground">
            If you&apos;re looking for a dedicated developer who can bring your ideas to life with modern 
            technologies and best practices, I&apos;d love to collaborate on your next project. Explore my 
            portfolio to see examples of my work, or reach out to discuss how we can work together to 
            build something amazing.
          </p>
        </div>
      </section>
    </main>
  );
}
