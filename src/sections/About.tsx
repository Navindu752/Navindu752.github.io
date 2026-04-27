import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";

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
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-gray-900/40">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Avatar + stats */}
        <div className="flex flex-col items-center md:items-start">
          {/* Avatar placeholder */}
          <div className="relative mb-8 group">
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-sky-500/20 via-violet-500/10 to-sky-500/5 border border-sky-500/20 flex items-center justify-center shadow-2xl shadow-sky-500/10">
              <span className="text-7xl select-none">👨‍💻</span>
            </div>
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl bg-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/40">
              <span className="text-2xl">⚡</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800 text-center hover:border-sky-500/50 transition-colors"
              >
                <div className="text-2xl font-extrabold gradient-text">{h.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{h.label}</div>
              </div>
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
              <span className="text-sky-500 font-medium">5+ years</span> of experience crafting
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
          <div className="mt-6 flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-sky-500/50 hover:text-sky-500 transition-all duration-200 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                {skill}
              </motion.span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-3">
            <a
              href="/Navindu Dilshan_Munasinghe_Resume.pdf"
              download="Navindu Dilshan_Munasinghe_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-600 text-white transition-all duration-200 shadow-md hover:shadow-sky-500/30"
            >
              Download CV
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-sky-500 hover:text-sky-500 transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
