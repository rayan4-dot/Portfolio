"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypewriterComponent from "typewriter-effect"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      const elements = heroRef.current.querySelectorAll(".parallax")
      elements.forEach((el) => {
        const speed = Number.parseFloat((el as HTMLElement).dataset.speed || "0.1")
        const rotateX = y * 10 * speed
        const rotateY = -x * 10 * speed
        ;(el as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden" ref={heroRef}>
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 font-heading">
              <span className="block">Hi, I'm</span>
              <span className="gradient-text">Rayan</span>
            </h1>

            <div className="h-16 mb-6 text-2xl md:text-3xl font-heading">
              <TypewriterComponent
                options={{
                  strings: ["Full Stack Developer", "Laravel Enthusiast", "UI/UX Designer", "Problem Solver"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <p className="text-white/70 mb-8 text-lg max-w-lg">
              Passionate about crafting responsive web applications that deliver exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full glow-sm">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-[400px] h-[400px] relative">
                {/* Decorative elements */}
                <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin-slow"></div>
                <div
                  className="absolute inset-8 border-2 border-primary/30 rounded-full animate-spin-slow"
                  style={{ animationDirection: "reverse" }}
                ></div>
                <div className="absolute inset-16 border-2 border-secondary/20 rounded-full animate-spin-slow"></div>

                {/* Floating elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 parallax" data-speed="0.2">
                  <div className="w-16 h-16 bg-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-primary/30 glow-sm">
                    <span className="text-2xl">⚛️</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 parallax" data-speed="0.2">
                  <div className="w-16 h-16 bg-secondary/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-secondary/30 glow-sm">
                    <span className="text-2xl">🧩</span>
                  </div>
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 parallax" data-speed="0.2">
                  <div className="w-16 h-16 bg-accent/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-accent/30 glow-sm">
                    <span className="text-2xl">🌊</span>
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 parallax" data-speed="0.2">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 glow-sm">
                    <span className="text-2xl">🐘</span>
                  </div>
                </div>

                {/* Center element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 glow-md parallax"
                    data-speed="0.1"
                  >
                    <div className="text-center">
                      <h3 className="text-3xl font-bold gradient-text">7+</h3>
                      <p className="text-white/60">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-white/50" />
        </Link>
      </div>
    </section>
  )
}
