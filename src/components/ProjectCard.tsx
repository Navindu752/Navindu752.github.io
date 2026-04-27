import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 dark:hover:shadow-sky-500/10"
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-500 border border-sky-500/20">
          Featured
        </span>
      )}

      {/* Folder icon */}
      <div className="mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 flex items-center justify-center text-sky-500 text-xl border border-sky-500/20">
          ⬡
        </div>
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors pr-16">
        {project.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 border-t border-gray-100 dark:border-gray-800 pt-4">
        {/* <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <FiGithub size={15} />
          <span>Code</span>
        </a> */}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-sky-500 transition-colors"
          >
            <FiExternalLink size={15} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
