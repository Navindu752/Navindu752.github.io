import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { skillCategories } from "../data/skills";
import { EASE_OUT } from "../utils/animations";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white dark:bg-gray-950">
      <SectionHeading
        label="Expertise"
        title="Skills & Technologies"
        subtitle="A comprehensive overview of the tools and technologies I work with daily to build production-grade applications."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: catIdx * 0.08, ease: EASE_OUT }}
            className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="font-bold text-gray-900 dark:text-white text-sm tracking-wide">
                {cat.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 group-hover:border-sky-500/30 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
