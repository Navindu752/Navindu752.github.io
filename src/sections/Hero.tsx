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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-[#030712]"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-100 dark:opacity-60" />

      {/* Radial mask over grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#030712]" />

      {/* Gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-56 w-[500px] h-[500px] bg-sky-500/20 dark:bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 -right-56 w-[500px] h-[500px] bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/5 dark:bg-sky-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 w-full">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="flex flex-col max-w-3xl"
        >
          {/* Availability badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to new opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={item} className="text-base md:text-lg font-mono text-sky-500 mb-3 tracking-wider">
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white leading-[1.02] tracking-tight mb-4"
          >
            Navindu Dilshan
            <br />
            <span className="gradient-text">Munasinghe</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-400 mb-5 flex items-center gap-3"
          >
            Associate Tech Lead
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500/60" />
            Full-stack Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mb-10"
          >
            Building{" "}
            <span className="text-gray-800 dark:text-gray-200 font-medium">scalable, high-performance</span>{" "}
            web applications with 5+ years of frontend engineering excellence and technical leadership.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-14">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white transition-all duration-300 shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 overflow-hidden group"
            >
              <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              View Projects
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/Navindu Dilshan_Munasinghe_Resume.pdf"
              download="Navindu Dilshan_Munasinghe_Resume.pdf"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <HiDownload size={16} />
              Download CV
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-gray-300 dark:border-white/[0.12] text-gray-700 dark:text-gray-300 hover:border-sky-500/60 hover:text-sky-500 dark:hover:border-sky-500/50 dark:hover:text-sky-400 transition-all duration-300 hover:bg-sky-500/5 backdrop-blur-sm"
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex items-center gap-3">
            {[
              { href: "https://github.com/Navindu752", icon: FiGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/navindu-dilshan-munasinghe-242044216/", icon: FiLinkedin, label: "LinkedIn" },
              { href: "mailto:navindudilshan60@gmail.com", icon: FiMail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/[0.08] hover:border-sky-500/50 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-200 hover:bg-sky-500/5 hover:shadow-md hover:shadow-sky-500/10"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-gray-200 to-transparent dark:from-white/10" />
            <span className="text-xs text-gray-400 dark:text-gray-500 font-mono tracking-wide">Colombo, LK</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-500 hover:text-sky-500 transition-colors cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase group-hover:text-sky-500 transition-colors">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={15} />
        </motion.div>
      </motion.button>
    </section>
  );
}
