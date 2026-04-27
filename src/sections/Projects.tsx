import { useState } from "react";
import { motion } from "framer-motion";
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
    <SectionWrapper id="projects" className="bg-white dark:bg-gray-950">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of projects that showcase my problem-solving approach and technical depth."
        />

        {/* Filter tabs */}
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-900 p-1 rounded-xl border border-gray-200 dark:border-gray-800 self-start shrink-0">
          {(["all", "featured"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium capitalize transition-all duration-200 cursor-pointer ${
                filter === f
                  ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={filter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </motion.div>

      {/* GitHub CTA */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/Navindu752"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-900"
        >
          <FiGithub size={16} />
          View All Projects on GitHub
        </a>
      </div>
    </SectionWrapper>
  );
}
