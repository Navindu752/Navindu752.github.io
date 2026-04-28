import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { EASE_OUT } from "../utils/animations";

const highlights = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "8+", label: "Engineers Mentored" },
  { value: "6+", label: "Products Launched" },
];

const coreSkills = [
  "React.js & Next.js",
  "TypeScript",
  "React Native",
  "Node.js",
  "Technical Leadership",
  "System Architecture",
];

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-[#060b18]">
      <div className="absolute inset-x-0 top-0 h-px section-divider" />

      <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Left — Avatar + stats */}
        <div className="flex flex-col items-center md:items-start">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="relative mb-10 group"
          >
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-sky-500/20 to-violet-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-sky-500/15 via-violet-500/10 to-sky-500/5 dark:from-sky-500/20 dark:via-violet-500/15 dark:to-sky-500/5 border border-sky-500/20 flex items-center justify-center shadow-2xl shadow-sky-500/10 overflow-hidden">
              {/* Inner grid pattern */}
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <span className="relative text-7xl select-none float">👨‍💻</span>
            </div>

            {/* Badge */}
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center shadow-xl shadow-sky-500/40"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
          </motion.div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: EASE_OUT }}
                whileHover={{ y: -3, scale: 1.02 }}
                className="bg-white dark:bg-gray-900/80 rounded-2xl p-4 border border-gray-200 dark:border-white/[0.07] text-center hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5 cursor-default"
              >
                <div className="text-2xl font-extrabold gradient-text">{h.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — Content */}
        <div>
          <SectionHeading
            label="About Me"
            title="Turning ideas into exceptional digital experiences"
          />

          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-[0.95rem]">
            <p>
              I'm <span className="font-semibold text-gray-900 dark:text-white">Navindu Dilshan Munasinghe</span>, an
              Associate Tech Lead and Full-stack Engineer based in Colombo, Sri Lanka, with{" "}
              <span className="text-sky-500 font-semibold">5+ years</span> of experience crafting
              performant, user-centric web and mobile applications.
            </p>
            <p>
              My expertise spans the full frontend spectrum — from architecting scalable{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">React/Next.js</span> applications
              and building{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">React Native</span> mobile apps
              to engineering robust{" "}
              <span className="font-medium text-gray-800 dark:text-gray-200">Node.js</span> backends that
              scale under pressure.
            </p>
            <p>
              As a Tech Lead, I drive engineering culture — conducting thorough code reviews, architecting
              design systems, mentoring engineers, and aligning technical strategy with product goals to
              ship quality software on time.
            </p>
          </div>

          {/* Core expertise tags */}
          <div className="mt-7 flex flex-wrap gap-2">
            {coreSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/[0.08] hover:border-sky-500/50 hover:text-sky-500 hover:bg-sky-500/5 transition-all duration-200 cursor-default shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                {skill}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 flex gap-3">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/Navindu Dilshan_Munasinghe_Resume.pdf"
              download="Navindu Dilshan_Munasinghe_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white transition-all duration-300 shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 hover:shadow-lg"
            >
              Download CV
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-gray-300 dark:border-white/[0.1] text-gray-700 dark:text-gray-300 hover:border-sky-500/50 hover:text-sky-500 dark:hover:text-sky-400 transition-all duration-300 hover:bg-sky-500/5"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
