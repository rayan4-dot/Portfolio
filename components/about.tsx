"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-slate-800 gradient-border overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Rayan Elguerdaoui, Junior Developer"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-emerald-400/5"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold gradient-text">Junior Developer</h3>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-2">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-400 mb-6"></div>
            <p className="text-slate-300 text-lg mb-6">
              I&apos;m Rayan, a Junior Full Stack Web Developer with a strong foundation in modern web technologies. I
              specialize in building responsive, efficient, and user-focused applications, blending creativity with
              technical expertise to deliver impactful solutions.
            </p>
            <p className="text-slate-300 text-lg mb-8">
              My approach combines clean code, modern design principles, and performance optimization to create web
              experiences that exceed expectations.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
