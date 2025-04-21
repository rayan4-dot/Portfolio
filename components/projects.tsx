"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    name: "Youdemy",
    emoji: "🎓",
    desc: "An e-learning platform with rich features for online education.",
    tech: ["PHP", "JavaScript", "Tailwind", "MySQL"],
    link: "https://github.com/rayan4-dot/Youdemy",
  },
  {
    name: "Blogging",
    emoji: "📝",
    desc: "A scalable blogging system with dynamic content management.",
    tech: ["PHP", "JavaScript", "Tailwind", "MySQL"],
    link: "https://github.com/rayan4-dot/Dev-Blog.git",
  },
  {
    name: "HR Management",
    emoji: "👥",
    desc: "A comprehensive HR tool for workforce management.",
    tech: ["Laravel", "Blade", "JavaScript", "MySQL"],
    link: "https://github.com/rayan4-dot/HRMS",
  },
  {
    name: "E-learning",
    emoji: "📚",
    desc: "A modern learning management system with API integration.",
    tech: ["Laravel", "Postman", "MySQL"],
    link: "https://github.com/rayan4-dot/Rest_api-",
  },
  {
    name: "Eventbrite",
    emoji: "🎉",
    desc: "Event Management System with user-friendly features.",
    tech: ["PHP", "Twig", "PostgreSql", "Javascript"],
    link: "https://github.com/rayan4-dot/Eventbrite.git",
  },
  {
    name: "E-learning - Frontend",
    emoji: "📘",
    desc: "A modern learning management system with API and React.",
    tech: ["Laravel", "Postman", "MySQL", "React", "Vite", "Tailwind"],
    link: "https://github.com/rayan4-dot/React_brief.git",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and capabilities.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card bg-slate-800 rounded-xl overflow-hidden relative group gradient-border"
              variants={itemVariants}
            >
              <div className="aspect-video bg-blue-900/30 flex items-center justify-center">
                <span className="text-5xl">{project.emoji}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-blue-900/40 text-blue-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-overlay absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-600/50 flex items-center justify-center opacity-0 transition-opacity">
                <Link
                  href={project.link}
                  target="_blank"
                  className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold transform transition-transform hover:scale-105 flex items-center gap-2"
                  aria-label={`View ${project.name} project`}
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">🚀 Exciting Projects on the Horizon!</h3>
          <p className="text-slate-400 text-lg">Stay tuned for more innovative and impactful creations.</p>
        </motion.div>
      </div>
    </section>
  )
}
