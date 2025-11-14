import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { getExperiences, getProjects } from "@/lib/api";

export default async function Home() {
  // Fetch data from Strapi (will use fallback data if Strapi is unavailable)
  const experiences = await getExperiences();
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Footer />
    </main>
  );
}
