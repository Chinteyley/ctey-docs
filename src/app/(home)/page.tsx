import { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Featured } from "@/components/home/Featured";
import { ProjectIndex } from "@/components/home/ProjectIndex";
import { FooterCta } from "@/components/home/FooterCta";
import { geistMono, instrumentSerif } from "@/components/home/fonts";
import { getFeaturedProjects, getProjectGroups } from "@/lib/projects";
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
  const groups = getProjectGroups();
  const projectCount = groups.reduce((sum, group) => sum + group.projects.length, 0);

  return (
    <div className={`${instrumentSerif.variable} ${geistMono.variable} home relative isolate flex-1 overflow-x-clip`}>
      <div className="home-spotlight" aria-hidden="true" />
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Hero
          projectCount={projectCount}
          categories={groups.map((group) => group.label)}
        />
        <Featured projects={getFeaturedProjects()} />
        <ProjectIndex groups={groups} />
        <FooterCta />
      </div>
    </div>
  );
}
