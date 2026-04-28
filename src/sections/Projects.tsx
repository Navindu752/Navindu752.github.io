import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { FiGithub } from "react-icons/fi";

type Filter = "all" | "featured";

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <SectionWrapper id="projects" className="bg-white dark:bg-[#030712]">
      <div className="absolute inset-x-0 top-0 h-px section-divider" />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my problem-solving approach and technical depth."
        />

        {/* Filter tabs */}
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-white/[0.04] p-1 rounded-xl border border-gray-200 dark:border-white/[0.07] self-start shrink-0">
          {(["all", "featured"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all duration-200 cursor-pointer ${
                filter === f
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              }`}
            >
              {filter === f && (
                <motion.div
                  layoutId="filter-active"
                  className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-white/[0.1]"
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* GitHub CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 text-center"
      >
        <motion.a
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          href="https://github.com/Navindu752"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold border border-gray-300 dark:border-white/[0.1] text-gray-700 dark:text-gray-300 hover:border-sky-500/50 hover:text-sky-500 dark:hover:border-sky-500/40 dark:hover:text-sky-400 transition-all duration-300 hover:bg-sky-500/5 hover:shadow-lg hover:shadow-sky-500/5"
        >
          <FiGithub size={16} />
          View All Projects on GitHub
        </motion.a>
      </motion.div>
    </SectionWrapper>
  );
}

