import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs,
  SiTailwindcss, SiMongodb, SiPostgresql, SiDocker, SiGit, SiGraphql, SiRedux,
  SiExpress, SiPrisma, SiFirebase, SiVercel, SiGithubactions, SiFigma,
} from "react-icons/si";
import { EASE_OUT } from "../utils/animations";

const techs = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
  { name: "Redux", Icon: SiRedux, color: "#764ABC" },
  { name: "Express.js", Icon: SiExpress, color: "#888888" },
  { name: "Prisma", Icon: SiPrisma, color: "#5A67D8" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
  { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

export default function TechStack() {
  return (
    <SectionWrapper id="techstack" className="bg-gray-50 dark:bg-[#060b18]">
      <div className="absolute inset-x-0 top-0 h-px section-divider" />

      <SectionHeading
        label="Tools"
        title="Tech Stack"
        subtitle="The ecosystem of technologies I leverage to build world-class products."
        centered
      />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {techs.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.75, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.45, delay: idx * 0.035, ease: EASE_OUT }}
            whileHover={{ y: -6, scale: 1.08, transition: { duration: 0.25, ease: EASE_OUT } }}
            className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-white/[0.07] hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 cursor-default relative overflow-hidden"
          >
            {/* Glow on hover */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"
              style={{ background: tech.color }}
            />

            <tech.Icon
              size={28}
              style={{ color: tech.color }}
              className="relative transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
            />
            <span className="relative text-[11px] font-semibold text-gray-600 dark:text-gray-400 text-center leading-tight group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

