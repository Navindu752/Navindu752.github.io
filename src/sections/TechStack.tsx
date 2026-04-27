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
    <SectionWrapper id="techstack" className="bg-gray-50 dark:bg-gray-900/40">
      <SectionHeading
        label="Tools"
        title="Tech Stack"
        subtitle="The ecosystem of technologies I leverage to build world-class products."
        centered
      />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {techs.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: idx * 0.04, ease: EASE_OUT }}
            whileHover={{ y: -4, scale: 1.06 }}
            className="group flex flex-col items-center gap-2.5 p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-sky-500/50 dark:hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg cursor-default"
          >
            <tech.Icon
              size={28}
              style={{ color: tech.color }}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400 text-center leading-tight">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
