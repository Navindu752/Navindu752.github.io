import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/experience";
import { EASE_OUT } from "../utils/animations";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-gray-50 dark:bg-gray-900/40">
      <SectionHeading
        label="Career"
        title="Work Experience"
        subtitle="My journey from intern to Associate Tech Lead — 5+ years of continuous growth and impact."
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/60 via-violet-500/40 to-transparent" />

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: EASE_OUT }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-2.5 md:left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                  exp.current
                    ? "bg-sky-500 border-sky-500 shadow-lg shadow-sky-500/40"
                    : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                }`}
              >
                {exp.current && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
              </div>

              {/* Card */}
              <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                          Current
                        </span>
                      )}
                      {exp.type === "internship" && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20">
                          Internship
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 font-semibold text-sm hover:underline"
                      >
                        {exp.company}
                      </a>
                      <span className="text-gray-300 dark:text-gray-700">•</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500/70 flex-shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
