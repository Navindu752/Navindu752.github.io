export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES2022+)", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "React Query"],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: ["React Native", "Expo", "React Navigation", "Native Modules"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets", "Prisma ORM"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "InfluxDB"],
  },
  {
    category: "DevOps & Tools",
    icon: "🛠️",
    skills: ["Git & GitHub", "Docker", "CI/CD (GitHub Actions)", "Vite", "Webpack", "AWS (S3, EC2)", "Vercel", "Nginx"],
  },
  {
    category: "Testing & Quality",
    icon: "🧪",
    skills: ["Jest", "React Testing Library", "Cypress", "Vitest", "ESLint", "Prettier"],
  },
  {
    category: "Methodologies",
    icon: "🔄",
    skills: ["Agile / Scrum", "TDD", "Code Review", "Micro-Frontends", "Design Systems", "Technical Leadership"],
  },
];

export interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

export const techIcons: TechIcon[] = [
  { name: "React", icon: "SiReact", color: "#61DAFB" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
  { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
  { name: "Tailwind", icon: "SiTailwindcss", color: "#06B6D4" },
  { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
  { name: "Docker", icon: "SiDocker", color: "#2496ED" },
  { name: "Git", icon: "SiGit", color: "#F05032" },
  { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
  { name: "Redux", icon: "SiRedux", color: "#764ABC" },
];
