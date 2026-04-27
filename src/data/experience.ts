export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  location: string;
  type: "full-time" | "internship";
  achievements: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Associate Tech Lead",
    company: "Overleap",
    companyUrl: "https://overleap.tech",
    duration: "2023 — Present",
    location: "Colombo, Sri Lanka",
    type: "full-time",
    current: true,
    achievements: [
      "Lead a cross-functional team of 8 engineers, driving architecture decisions and code quality standards across 3 major product lines.",
      "Architected a micro-frontend platform reducing deployment time by 65% and improving team autonomy.",
      "Introduced component-driven design system adopted across 4 product teams, cutting UI development time by 40%.",
      "Mentored 4 junior/mid-level engineers through structured code reviews, pair programming, and career growth plans.",
      "Spearheaded migration from CRA to Vite, achieving 8× faster build times in CI/CD pipelines.",
    ],
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "Overleap",
    companyUrl: "https://overleap.tech",
    duration: "2022 — 2023",
    location: "Colombo, Sri Lanka",
    type: "full-time",
    achievements: [
      "Delivered 5 large-scale React/Next.js features end-to-end, consistently ahead of sprint deadlines.",
      "Optimised core web vitals across flagship product — achieved 95+ Lighthouse scores on mobile.",
      "Built a reusable animation library using Framer Motion, adopted across all frontend teams.",
      "Collaborated with product and design to establish a token-based design system in Tailwind CSS.",
      "Reduced bundle size by 38% via code splitting, lazy loading, and tree-shaking strategies.",
    ],
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Dev4s",
    companyUrl: "https://dev4s.lk",
    duration: "2021 — 2022",
    location: "Colombo, Sri Lanka",
    type: "full-time",
    achievements: [
      "Developed and maintained 10+ production React applications serving thousands of daily active users.",
      "Integrated third-party APIs including Stripe, Twilio, Mapbox, and Firebase into React/Node.js apps.",
      "Implemented end-to-end testing with Cypress, increasing test coverage from 20% to 78%.",
      "Built REST APIs with Node.js/Express that handled 500K+ daily requests with 99.9% uptime.",
    ],
  },
  {
    id: 4,
    role: "Associate Software Engineer",
    company: "Dev4s",
    companyUrl: "https://dev4s.lk",
    duration: "2020 — 2021",
    location: "Colombo, Sri Lanka",
    type: "full-time",
    achievements: [
      "Contributed to frontend development of a multi-tenant SaaS platform using React and Redux.",
      "Developed responsive UI components from Figma designs with pixel-perfect accuracy.",
      "Participated in daily standups, sprint planning, and retrospectives following Agile/Scrum methodology.",
      "Resolved 100+ bugs in production, improving application stability and user experience.",
    ],
  },
  {
    id: 5,
    role: "Software Engineering Intern",
    company: "EIS",
    companyUrl: "https://eis.lk",
    duration: "2019 — 2020",
    location: "Colombo, Sri Lanka",
    type: "internship",
    achievements: [
      "Built internal tooling pages in React, reducing manual HR workflows by 30%.",
      "Learned Git workflows, code review processes, and agile delivery practices.",
      "Completed the full onboarding project 2 weeks ahead of schedule.",
    ],
  },
];
