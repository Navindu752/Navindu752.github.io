import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { fadeUpVariants, staggerContainer } from "../utils/animations";

const stagger = staggerContainer;
const item = fadeUpVariants;

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background grid */}
      <div className="absolute inset-0 dot-pattern opacity-60 dark:opacity-30" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-sky-500/20 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 w-full">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to new opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={item} className="text-base md:text-lg font-mono text-sky-500 mb-2">
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.08] tracking-tight mb-3"
          >
            Navindu Dilshan
            <br />
            <span className="gradient-text">Munasinghe</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-4"
          >
            Associate Tech Lead
            <span className="mx-2 text-sky-500/40">|</span>
            Full-stack Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mb-8"
          >
            Building{" "}
            <span className="text-gray-800 dark:text-gray-200 font-medium">scalable, high-performance</span>{" "}
            web applications with 5+ years of frontend engineering excellence and technical leadership.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-600 text-white transition-all duration-200 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-100"
            >
              View Projects
            </button>
            <a
              href="/Navindu Dilshan_Munasinghe_Resume.pdf"
              download="Navindu Dilshan_Munasinghe_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 shadow-lg hover:scale-105 active:scale-100"
            >
              <HiDownload size={16} />
              Download CV
            </a>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-sky-500 hover:text-sky-500 dark:hover:border-sky-500 dark:hover:text-sky-500 transition-all duration-200 hover:bg-sky-500/5"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex items-center gap-4">
            <a
              href="https://github.com/Navindu752"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-sky-500/50 hover:text-sky-500 transition-all duration-200 hover:bg-sky-500/5"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/navindu-dilshan-munasinghe-242044216/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-sky-500/50 hover:text-sky-500 transition-all duration-200 hover:bg-sky-500/5"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="mailto:navindudilshan60@gmail.com"
              className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:border-sky-500/50 hover:text-sky-500 transition-all duration-200 hover:bg-sky-500/5"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <span className="h-px flex-1 max-w-16 bg-gray-200 dark:bg-gray-800" />
            <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">Colombo, LK</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500 hover:text-sky-500 transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
