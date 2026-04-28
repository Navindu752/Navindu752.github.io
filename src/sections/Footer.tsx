import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

const socialLinks = [
  { icon: FiGithub,   href: "https://github.com/Navindu752",                                          label: "GitHub"   },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/navindu-dilshan-munasinghe-242044216/",      label: "LinkedIn" },
  { icon: FiMail,     href: "mailto:navindudilshan60@gmail.com",                                      label: "Email"    },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gray-50 dark:bg-[#060b18] border-t border-gray-200 dark:border-white/[0.06] overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-sky-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="text-xl font-black bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent">
              Navindu.dev
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Full-Stack Engineer · Sri Lanka
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials + back to top */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.07] hover:border-sky-500/20 transition-all duration-300 hover:shadow-md hover:shadow-sky-500/10"
              >
                <s.icon size={16} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.07] hover:border-sky-500/20 transition-all duration-300 hover:shadow-md hover:shadow-sky-500/10"
            >
              <FiArrowUp size={16} />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Navindu Dilshan Munasinghe. All rights reserved.</p>
          <p>Built with React, TypeScript &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
