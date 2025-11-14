"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Code2, Database, Smartphone, Server, Globe, Zap } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: <Code2 className="w-6 h-6" /> },
  { name: "TypeScript", icon: <Code2 className="w-6 h-6" /> },
  { name: "React", icon: <Globe className="w-6 h-6" /> },
  { name: "Next.js", icon: <Zap className="w-6 h-6" /> },
  { name: "React Native", icon: <Smartphone className="w-6 h-6" /> },
  { name: "Node.js", icon: <Server className="w-6 h-6" /> },
  { name: "Express.js", icon: <Server className="w-6 h-6" /> },
  { name: "MongoDB", icon: <Database className="w-6 h-6" /> },
  { name: "Mongoose", icon: <Database className="w-6 h-6" /> },
  { name: "Prisma", icon: <Database className="w-6 h-6" /> },
  { name: "Firebase", icon: <Database className="w-6 h-6" /> },
  { name: "Supabase", icon: <Database className="w-6 h-6" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate Senior Software Engineer with 5 years of experience in building
                scalable web and mobile applications. I specialize in creating seamless user
                experiences and robust backend systems.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans across the full stack, from crafting beautiful, responsive
                frontends with React and Next.js to building powerful APIs with Node.js and
                Express. I'm constantly exploring new technologies and best practices to deliver
                exceptional results.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source projects, writing
                technical articles, and mentoring aspiring developers.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years Experience", value: "5+" },
                { label: "Projects Completed", value: "50+" },
                { label: "Technologies", value: "12+" },
                { label: "Happy Clients", value: "30+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-blue-400">{skill.icon}</div>
              <span className="text-white font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

