"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/types";
import { Card } from "./ui/card";

// Fallback projects if Strapi is not available
const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "CIO Africa Platform",
    description: "Enterprise content management and publishing platform for Africa's leading technology publication. Features include real-time content editing, multi-region support, and advanced analytics.",
    url: "https://cioafrica.co/",
    featured: true,
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
    category: "Web Platform",
  },
  {
    id: 2,
    title: "Powered by People",
    description: "B2B e-commerce platform connecting sustainable brands with retailers. Includes inventory management, order processing, and supplier onboarding systems.",
    url: "https://poweredbypeople.com/",
    featured: true,
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Shopify API"],
    category: "E-commerce",
  },
  {
    id: 3,
    title: "Virtual Assets Chamber",
    description: "Professional website for Africa's leading virtual assets advocacy organization. Features event management, membership portals, and resource libraries.",
    url: "https://www.virtualassetchamber.com/",
    featured: true,
    technologies: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    category: "Corporate Website",
  },
  {
    id: 4,
    title: "DHA Kenya",
    description: "Government digital platform for healthcare administration. Includes patient registration, appointment scheduling, and healthcare provider management.",
    url: "https://dha.go.ke/",
    featured: true,
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "Government Portal",
  },
  {
    id: 5,
    title: "MjengoSmart",
    description: "Construction management platform streamlining project workflows, resource allocation, and team collaboration for construction projects.",
    url: "https://www.mjengosmart.com/",
    featured: false,
    technologies: ["React", "Material-UI", "REST APIs"],
    category: "Project Management",
  },
];

interface ProjectsSectionProps {
  projects?: Project[];
}

export function ProjectsSection({ projects = fallbackProjects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on, from enterprise platforms to government portals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 h-full flex flex-col hover:bg-white/10 transition-all duration-300">
                <div className="mb-4">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full mb-3">
                      Featured
                    </span>
                  )}
                  {project.category && (
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full mb-3 ml-2">
                      {project.category}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-white/5 text-gray-400 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Site
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

