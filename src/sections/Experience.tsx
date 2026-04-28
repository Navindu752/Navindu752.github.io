import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/experience";
import { EASE_OUT } from "../utils/animations";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-gray-50 dark:bg-[#060b18]">
      <div className="absolute inset-x-0 top-0 h-px section-divider" />

      <SectionHeading
        label="Career"
        title="Work Experience"
        subtitle="My journey from intern to Associate Tech Lead — 5+ years of continuous growth and impact."
      />

      <div className="relative">
        {/* Vertical gradient line */}
        <div className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/80 via-violet-500/50 to-transparent" />

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: EASE_OUT }}
              className="relative pl-16 md:pl-20"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-2.5 md:left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  exp.current
                    ? "bg-sky-500 border-sky-500 shadow-lg shadow-sky-500/50"
                    : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 hover:border-sky-500/50"
                }`}
              >
                {exp.current && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.25, ease: EASE_OUT } }}
                className="group bg-white dark:bg-gray-900/60 rounded-2xl p-6 border border-gray-200 dark:border-white/[0.07] hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/5 overflow-hidden relative"
              >
                {/* Top shine */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-sky-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 tracking-wider uppercase">
                          Current
                        </span>
                      )}
                      {exp.type === "internship" && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-500 border border-violet-500/20 tracking-wider uppercase">
                          Internship
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 font-semibold text-sm hover:text-sky-400 hover:underline transition-colors"
                      >
                        {exp.company}
                      </a>
                      <span className="text-gray-300 dark:text-gray-700">•</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-white/[0.05] border border-gray-200 dark:border-white/[0.06] px-3 py-1.5 rounded-lg whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="space-y-2.5">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-sky-500/60 flex-shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
