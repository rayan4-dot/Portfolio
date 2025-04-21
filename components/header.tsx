"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-4/5 bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-labelledby="mobile-menu-title"
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-3xl text-white"
          aria-label="Close mobile menu"
        >
          <X className="h-8 w-8" />
        </button>
        <div className="flex flex-col space-y-6 mt-16 text-xl px-6">
          <Link href="#home" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="#about" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="#skills" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
          <Link
            href="#experience"
            className="hover:text-blue-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>
      </div>

      {/* Header */}
      <header
        className={cn(
          "fixed w-full z-40 py-4 transition-all duration-300",
          isScrolled ? "bg-slate-900/80 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="#home" className="text-2xl font-bold gradient-text" aria-label="Rayan's Portfolio Home">
            Rayan.
          </Link>
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            <Link href="#home" className="nav-link" aria-current="page">
              Home
            </Link>
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#skills" className="nav-link">
              Skills
            </Link>
            <Link href="#projects" className="nav-link">
              Projects
            </Link>
            <Link href="#experience" className="nav-link">
              Education
            </Link>
            <Button asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </nav>
          <button onClick={() => setIsMenuOpen(true)} className="text-3xl md:hidden" aria-label="Open mobile menu">
            <Menu className="h-8 w-8" />
          </button>
        </div>
      </header>
    </>
  )
}
