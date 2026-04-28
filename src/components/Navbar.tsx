import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import type { Theme } from "../hooks/useTheme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-[#030712]/80 backdrop-blur-2xl border-b border-gray-200/40 dark:border-white/[0.06] shadow-lg shadow-black/5 dark:shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleLinkClick("#hero"); }}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-8 h-8">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-sky-500/30 group-hover:shadow-sky-500/50 group-hover:scale-110 transition-all duration-300">
              N
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 to-violet-600 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
          </div>
          <span className="font-bold text-gray-900 dark:text-white text-sm tracking-tight hidden sm:block">
            Navindu<span className="text-sky-500">.</span>dev
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              <button
                onClick={() => handleLinkClick(link.href)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeSection === link.href.slice(1)
                    ? "text-sky-500 bg-sky-500/10"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/[0.06]"
                }`}
              >
                {link.label}
              </button>
              {activeSection === link.href.slice(1) && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-500"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <a
            href="/Navindu Dilshan_Munasinghe_Resume.pdf"
            download="Navindu Dilshan_Munasinghe_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white transition-all duration-300 shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:shadow-lg hover:scale-105 active:scale-100"
          >
            Resume
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <HiX size={20} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <HiMenuAlt3 size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-white/95 dark:bg-[#030712]/95 backdrop-blur-2xl border-b border-gray-200/40 dark:border-white/[0.06]"
          >
            <ul className="px-6 pb-6 pt-3 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                      activeSection === link.href.slice(1)
                        ? "text-sky-500 bg-sky-500/10"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href="/Navindu Dilshan_Munasinghe_Resume.pdf"
                  download="Navindu Dilshan_Munasinghe_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md shadow-sky-500/25 transition-all"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
