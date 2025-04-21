"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const roles = ["Full Stack Developer", "Laravel Enthusiast", "UI/UX Designer", "Problem Solver"]
  const currentRole = roles[loopNum % roles.length]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
      }
    }, typingSpeed)

    if (!isDeleting && displayText === currentRole) {
      // Delay before starting to delete
      setTimeout(() => {
        setIsDeleting(true)
        setTypingSpeed(50)
      }, 1500)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(100)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, currentRole, typingSpeed])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="blob top-0 left-1/4"></div>
      <div className="blob bottom-20 right-0"></div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I&apos;m <span className="gradient-text">Rayan</span>
          </h1>
          <div className="relative h-12 mb-6">
            <div className="text-2xl md:text-3xl text-slate-300">
              {displayText}
              <span className="inline-block h-full w-1 bg-blue-500 ml-1 animate-pulse"></span>
            </div>
          </div>
          <p className="text-slate-400 mb-8 text-lg">
            Passionate about crafting responsive web applications that deliver exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="order-1 md:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 filter blur-xl opacity-20 absolute -z-10"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500/30 flex items-center justify-center animate-spin-slow">
              <div className="w-12 h-12 rounded-full bg-blue-500 absolute top-0 transform -translate-y-1/2"></div>
            </div>
            <div className="absolute inset-4 rounded-full border-2 border-blue-400/20 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold gradient-text">7+</h2>
                <p className="text-sm text-slate-400">Projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
