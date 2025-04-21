"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "HTML", emoji: "🌐", category: "Frontend", color: "bg-orange-500/20 text-orange-400" },
  { name: "CSS", emoji: "🎨", category: "Frontend", color: "bg-blue-500/20 text-blue-400" },
  { name: "Tailwind", emoji: "🌊", category: "Frontend", color: "bg-cyan-500/20 text-cyan-400" },
  { name: "JavaScript", emoji: "⚡", category: "Frontend", color: "bg-yellow-500/20 text-yellow-400" },
  { name: "PHP", emoji: "🐘", category: "Backend", color: "bg-indigo-500/20 text-indigo-400" },
  { name: "Laravel", emoji: "🧩", category: "Backend", color: "bg-red-500/20 text-red-400" },
  { name: "Docker", emoji: "🐳", category: "DevOps", color: "bg-blue-500/20 text-blue-400" },
  { name: "MySQL", emoji: "🗄️", category: "Database", color: "bg-blue-400/20 text-blue-300" },
  { name: "PostgreSQL", emoji: "📊", category: "Database", color: "bg-blue-600/20 text-blue-500" },
  { name: "REST API", emoji: "🔄", category: "Backend", color: "bg-green-500/20 text-green-400" },
  { name: "Git", emoji: "🔀", category: "DevOps", color: "bg-orange-600/20 text-orange-500" },
  { name: "React", emoji: "⚛️", category: "Frontend", color: "bg-cyan-600/20 text-cyan-500" },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section-padding relative bg-gradient-to-b from-black to-black/95" ref={ref}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">
            The technologies and tools I work with to build modern web applications.
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <Badge variant="outline" className="px-4 py-2 text-white/70 border-white/20">
              All
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-white/70 border-white/20">
              Frontend
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-white/70 border-white/20">
              Backend
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-white/70 border-white/20">
              Database
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-white/70 border-white/20">
              DevOps
            </Badge>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl overflow-hidden group hover:border-primary/50 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="p-6 text-center">
                  <div
                    className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-2xl">{skill.emoji}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
                  <p className="text-white/60 text-xs">{skill.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="glass rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Always Learning</h3>
          <p className="text-white/70">
            I'm constantly expanding my skillset and staying up-to-date with the latest technologies and best practices.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
