"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const skills = [
  { name: "HTML", emoji: "🌐", category: "Structure" },
  { name: "CSS", emoji: "🎨", category: "Styling" },
  { name: "Tailwind", emoji: "🌊", category: "Utility CSS" },
  { name: "JavaScript", emoji: "⚡", category: "Frontend" },
  { name: "PHP", emoji: "🐘", category: "Backend" },
  { name: "Laravel", emoji: "🧩", category: "Framework" },
  { name: "Docker", emoji: "🐳", category: "Containers" },
  { name: "MySQL", emoji: "🗄️", category: "Database" },
  { name: "PostgreSQL", emoji: "📊", category: "Database" },
  { name: "REST API", emoji: "🔄", category: "Integration" },
  { name: "Git", emoji: "🔀", category: "Version Control" },
  { name: "React", emoji: "⚛️", category: "Frontend Library" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <section id="skills" className="py-20 bg-slate-800/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-400 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            The technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} className="skill-card gradient-border" variants={itemVariants}>
              <div className="text-2xl mb-4">{skill.emoji}</div>
              <h3 className="font-semibold mb-2 text-white">{skill.name}</h3>
              <p className="text-slate-400 text-sm">{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
