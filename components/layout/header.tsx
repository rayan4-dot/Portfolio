"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-3 glass" : "py-5 bg-transparent",
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-2xl font-bold font-heading gradient-text">
            Rayan<span className="text-white">.</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm uppercase tracking-wider font-medium text-white/70 hover:text-white transition-colors duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-2 rounded-full bg-primary text-white text-sm uppercase tracking-wider font-medium hover:bg-primary/80 transition-colors duration-300 glow-sm"
            >
              Let's Talk
            </Link>
          </nav>

          <button onClick={() => setIsOpen(true)} className="md:hidden text-white p-2" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6">
                <Link
                  href="#home"
                  className="text-2xl font-bold font-heading gradient-text"
                  onClick={() => setIsOpen(false)}
                >
                  Rayan<span className="text-white">.</span>
                </Link>
                <button onClick={() => setIsOpen(false)} className="text-white p-2" aria-label="Close menu">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <motion.nav
                className="flex flex-col items-center justify-center flex-1 space-y-8 p-6"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                  closed: {},
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: 20, opacity: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-heading font-medium text-white/70 hover:text-white transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 },
                  }}
                >
                  <Link
                    href="#contact"
                    className="px-8 py-3 rounded-full bg-primary text-white text-lg font-medium hover:bg-primary/80 transition-colors duration-300 glow-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
