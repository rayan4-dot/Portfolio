"use client"

import Link from "next/link"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

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
    <section id="experience" className="section-padding relative bg-gradient-to-b from-black/95 to-black" ref={ref}>
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
            <span className="gradient-text">Education</span> & Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-white/70 max-w-2xl mx-auto">My professional journey as a web developer.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative pl-8 border-l border-primary/30">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="mb-12 relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="absolute -left-[41px] top-0 w-8 h-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>

                  <div className="glass p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-primary mb-1 font-heading">{exp.title}</h3>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-white/60 text-sm">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {exp.company}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        Marrakesh, Morocco
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start text-white/80">
                          <span className="text-primary mr-2 mt-1">›</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="glass p-8 rounded-xl max-w-md relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full filter blur-[50px]"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full filter blur-[50px]"></div>

              <div className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💼</span>
                </div>

                <h3 className="text-2xl font-bold gradient-text mb-4 font-heading">Open to New Opportunities</h3>

                <p className="text-white/70 mb-6">
                  I'm currently looking for new challenges and opportunities to grow as a developer. If you have a
                  project or position that aligns with my skills, I'd love to hear from you!
                </p>

                <div className="flex justify-center">
                  <Link
                    href="#contact"
                    className="px-6 py-2 rounded-full bg-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-primary/80 transition-colors duration-300 glow-sm"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
