import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link
            href="#home"
            className="text-2xl font-bold gradient-text mb-4 md:mb-0"
            aria-label="Rayan's Portfolio Home"
          >
            Rayan.
          </Link>
          <nav className="flex flex-wrap justify-center gap-6" role="navigation">
            <Link href="#home" className="nav-link">
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
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Rayan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
