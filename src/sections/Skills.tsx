import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { skillCategories } from "../data/skills";
import { EASE_OUT } from "../utils/animations";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white dark:bg-[#030712]">
      <div className="absolute inset-x-0 top-0 h-px section-divider" />

      <SectionHeading
        label="Expertise"
        title="Skills & Technologies"
        subtitle="A comprehensive overview of the tools and technologies I work with daily to build production-grade applications."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: catIdx * 0.08, ease: EASE_OUT }}
            whileHover={{ y: -4, transition: { duration: 0.3, ease: EASE_OUT } }}
            className="group relative bg-gray-50 dark:bg-gray-900/60 rounded-2xl p-6 border border-gray-200 dark:border-white/[0.07] hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 overflow-hidden"
          >
            {/* Hover gradient */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-sky-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center gap-3 mb-5 relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/15 to-violet-500/15 flex items-center justify-center text-xl border border-sky-500/15 group-hover:from-sky-500/25 group-hover:to-violet-500/25 transition-all duration-300">
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm tracking-wide group-hover:text-sky-400 transition-colors duration-300">
                {cat.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 relative">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: catIdx * 0.06 + si * 0.04 }}
                  className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/[0.06] group-hover:border-sky-500/25 group-hover:text-sky-400/90 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

