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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative flex flex-col bg-white dark:bg-gray-900/60 rounded-2xl border border-gray-200 dark:border-white/[0.07] p-6 hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 dark:hover:shadow-sky-500/10 overflow-hidden"
    >
      {/* Gradient top shine on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Background glow */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Featured badge */}
      {project.featured && (
        <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 tracking-wider uppercase">
          Featured
        </span>
      )}

      {/* Icon */}
      <div className="mb-5">
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 flex items-center justify-center text-sky-400 text-xl border border-sky-500/20 group-hover:from-sky-500/30 group-hover:to-violet-500/30 transition-all duration-300">
          ⬡
        </div>
      </div>

      <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-sky-400 transition-colors duration-300 pr-16 leading-snug">
        {project.title}
      </h3>

      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-5 line-clamp-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.05] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/[0.06] group-hover:border-sky-500/20 group-hover:text-sky-400/80 transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 border-t border-gray-100 dark:border-white/[0.05] pt-4">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-sky-500 transition-colors group/link"
          >
            <FiExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
            <span className="font-medium">Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
