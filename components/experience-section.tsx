"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Experience } from "@/types";

// Fallback data if Strapi is not available
const fallbackExperiences: Experience[] = [
  {
    id: 1,
    company: "CIO Africa by dx5",
    role: "Fullstack Engineer",
    description: "Leading development of enterprise-level content management systems and digital platforms. Working with Next.js, React, Node.js, and cloud infrastructure.",
    startDate: "2024-06-01",
    endDate: null,
    current: true,
    website: "https://cioafrica.co/",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    location: "Remote",
  },
  {
    id: 2,
    company: "Powered by People",
    role: "Senior Frontend Engineer",
    description: "Built and maintained responsive e-commerce platforms and B2B marketplaces. Implemented modern UI/UX patterns and optimized performance.",
    startDate: "2023-04-01",
    endDate: "2024-04-01",
    current: false,
    website: "https://poweredbypeople.com/",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    location: "Remote",
  },
  {
    id: 3,
    company: "MjengoSmart",
    role: "Frontend Engineer",
    description: "Developed construction management web applications with focus on mobile responsiveness and user experience. Collaborated with cross-functional teams.",
    startDate: "2020-04-01",
    endDate: "2021-03-01",
    current: false,
    website: "https://www.mjengosmart.com/",
    technologies: ["React", "JavaScript", "Material-UI", "REST APIs"],
    location: "Nairobi, Kenya",
  },
];

interface ExperienceSectionProps {
  experiences?: Experience[];
}

export function ExperienceSection({ experiences = fallbackExperiences }: ExperienceSectionProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
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
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-4 border-black" />
                </div>

                {/* Content */}
                <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className={index % 2 === 0 ? "md:text-right" : ""}>
                        {exp.current && (
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full mb-2">
                            Current
                          </span>
                        )}
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 text-lg font-medium"
                        >
                          {exp.company}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {formatDate(exp.startDate)} - {exp.current ? "Present" : formatDate(exp.endDate!)}
                        </span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

