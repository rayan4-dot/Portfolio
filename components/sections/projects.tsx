"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "Youdemy",
    emoji: "🎓",
    desc: "An e-learning platform with rich features for online education.",
    tech: ["PHP", "JavaScript", "Tailwind", "MySQL"],
    link: "https://github.com/rayan4-dot/Youdemy",
    color: "from-blue-600/20 to-purple-600/20",
  },
  {
    name: "Blogging",
    emoji: "📝",
    desc: "A scalable blogging system with dynamic content management.",
    tech: ["PHP", "JavaScript", "Tailwind", "MySQL"],
    link: "https://github.com/rayan4-dot/Dev-Blog.git",
    color: "from-green-600/20 to-blue-600/20",
  },
  {
    name: "HR Management",
    emoji: "👥",
    desc: "A comprehensive HR tool for workforce management.",
    tech: ["Laravel", "Blade", "JavaScript", "MySQL"],
    link: "https://github.com/rayan4-dot/HRMS",
    color: "from-red-600/20 to-orange-600/20",
  },
  {
    name: "E-learning",
    emoji: "📚",
    desc: "A modern learning management system with API integration.",
    tech: ["Laravel", "Postman", "MySQL"],
    link: "https://github.com/rayan4-dot/Rest_api-",
    color: "from-purple-600/20 to-pink-600/20",
  },
  {
    name: "Eventbrite",
    emoji: "🎉",
    desc: "Event Management System with user-friendly features.",
    tech: ["PHP", "Twig", "PostgreSql", "Javascript"],
    link: "https://github.com/rayan4-dot/Eventbrite.git",
    color: "from-yellow-600/20 to-red-600/20",
  },
  {
    name: "E-learning - Frontend",
    emoji: "📘",
    desc: "A modern learning management system with API and React.",
    tech: ["Laravel", "Postman", "MySQL", "React", "Vite", "Tailwind"],
    link: "https://github.com/rayan4-dot/React_brief.git",
    color: "from-cyan-600/20 to-blue-600/20",
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
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
              className="glass rounded-xl overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_70%)]"></div>
                <span className="text-6xl relative z-10">{project.emoji}</span>

                {/* Animated circles */}
                <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/10 rounded-full"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-heading">{project.name}</h3>
                <p className="text-white/60 text-sm mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-white/5 text-white/70 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-primary hover:text-primary/80 transition-colors duration-300 text-sm flex items-center"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    View Code
                  </Link>

                  <Link
                    href={project.link}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors duration-300"
                  >
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </Link>
                </div>
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
          <p className="text-white/70 text-lg">Stay tuned for more innovative and impactful creations.</p>
        </motion.div>
      </div>
    </section>
  )
}
