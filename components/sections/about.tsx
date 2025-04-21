"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Code, Globe, Palette } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 glow-sm">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Rayan Elguerdaoui, Junior Developer"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-secondary p-1 rounded-xl glow-md">
                  <div className="bg-black p-4 rounded-lg">
                    <span className="text-3xl">💻</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h3 className="text-2xl font-bold mb-4 font-heading" variants={itemVariants}>
              Junior Full Stack Developer
            </motion.h3>

            <motion.p className="text-white/70 mb-6" variants={itemVariants}>
              I'm Rayan, a Junior Full Stack Web Developer with a strong foundation in modern web technologies. I
              specialize in building responsive, efficient, and user-focused applications, blending creativity with
              technical expertise to deliver impactful solutions.
            </motion.p>

            <motion.p className="text-white/70 mb-8" variants={itemVariants}>
              My approach combines clean code, modern design principles, and performance optimization to create web
              experiences that exceed expectations.
            </motion.p>

            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" variants={itemVariants}>
              <div className="glass p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-bold mb-1">Clean Code</h4>
                <p className="text-white/60 text-sm">Writing maintainable, efficient code</p>
              </div>

              <div className="glass p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                  <Palette className="h-5 w-5 text-secondary" />
                </div>
                <h4 className="font-bold mb-1">UI/UX Design</h4>
                <p className="text-white/60 text-sm">Creating intuitive user experiences</p>
              </div>

              <div className="glass p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <h4 className="font-bold mb-1">Web Apps</h4>
                <p className="text-white/60 text-sm">Building responsive applications</p>
              </div>
            </motion.div>

            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
              <div className="glass px-4 py-2 rounded-full text-sm">
                <span className="text-white/60">Location:</span> <span className="text-white">Marrakesh, Morocco</span>
              </div>
              <div className="glass px-4 py-2 rounded-full text-sm">
                <span className="text-white/60">Email:</span>{" "}
                <span className="text-white">rayan.elguerdaoui1@gmail.com</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
