"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company: "Youcode-UM6P",
    period: "2024 - Present",
    tasks: [
      "Developed multiple web applications using Laravel, PHP, and JavaScript",
      "Integrated RESTful APIs and managed databases with MySQL and PostgreSQL",
      "Utilized Docker for containerized development environments",
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="experience" className="py-20 bg-slate-800/50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-2">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-400 mb-6"></div>
            <p className="text-slate-300 mb-8">My professional journey as a web developer.</p>
            <div className="relative pl-12 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                  <p className="text-slate-400 mb-3">
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <span className="text-blue-400 mr-2">›</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full aspect-video bg-slate-700 rounded-2xl gradient-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-400/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💼</div>
                  <h3 className="text-xl font-semibold gradient-text">Open to New Opportunities</h3>
                  <p className="text-slate-400 mt-2">Looking for my next challenge</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
