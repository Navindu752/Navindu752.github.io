export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Okidoki TMS — NBQSA 2024 Silver Award",
    description:
      "A comprehensive transport management system used by Kells, Cargills, Sathosa, Brandix, and Nestlé. Features include dashboards, job creation & monitoring, route optimization, GPS tracking, vehicle & sensor monitoring, invoicing, costing, and user/customer/transporter/vehicle management. Serving as Frontend Lead, guiding and driving all development areas.",
    techStack: ["React JS", ".NET C#", "SQL", "AWS"],
    github: "https://github.com/Navindu752",
    live: "https://www.okidoki.overleap.tech",
    featured: true,
  },
  {
    id: 2,
    title: "AdAstra Connect — NBQSA 2024 Merit",
    description:
      "A robust communication platform designed for seamless collaboration and efficient call management. Features dynamic routing, pre-call validations, and fallback mechanisms ensuring reliable, tailored experiences. Covers dashboard, appointment management, call flow with widget, invoicing, costing, and user management. Led the frontend team for this project.",
    techStack: ["React JS", ".NET C#", "SQL", "AWS Connect"],
    github: "https://github.com/Navindu752",
    live: "https://www.connect.ad-astrainc.com",
    featured: true,
  },
  {
    id: 3,
    title: "Educate Lanka Foundation",
    description:
      "A charitable platform supporting students from low-income families in Sri Lanka. Integrated PayPal and Stripe for seamless sponsorship payments, built Salesforce synchronisation for student data and payment records, and developed a full-featured admin panel for managing sponsorships, manual payments, and content management.",
    techStack: ["React JS", "Node.js", "Express.js", "MySQL", "Stripe", "PayPal", "Salesforce"],
    github: "https://github.com/Navindu752",
    live: "https://www.educatelanka.org",
    featured: true,
  },
  {
    id: 4,
    title: "Life Without Laundry — Franchise Management System",
    description:
      "A scalable laundry management system built on a franchisor-franchisee revenue model to streamline business operations for Life Without Laundry LLC. Features dedicated franchisor and franchisee panels tailored to each stakeholder's needs. Contributed wallet & order management pages, full user management (CRUD REST APIs & UI) spanning franchisor, franchisee, and cooperation roles, and a mobile app experience with Google Maps integration and an end-to-end order confirmation flow. Also includes a smart routing tool to collaborate with drivers and optimise last-mile delivery routes.",
    techStack: ["React.js", "Node.js", "MongoDB", "TypeScript", "AWS", "Twilio", "Stripe"],
    github: "https://github.com/Navindu752",
    live: "https://www.lifewithoutlaundry.com",
    featured: true,
  },
  {
    id: 5,
    title: "MYLO — My Logistics",
    description:
      "A comprehensive logistics solution designed to seamlessly manage and optimise the end-to-end processes of moving and storing customers' items. Combines a user-friendly mobile app, a robust admin panel, and an intuitive web app into one platform. Contributed full user management (CRUD REST APIs) for driver, customer, and admin roles on the backend, developed the mobile app frontend, and handled Stripe payment integration along with core business logic calculations on the backend.",
    techStack: ["Sails.js", "React.js", "React Native", "Node.js", "MongoDB", "Google API", "Stripe"],
    github: "https://github.com/Navindu752",
    live: "https://getmylo.com",
    featured: true,
  },
  {
    id: 6,
    title: "Artdillo — Artwork Marketplace",
    description:
      "A scalable artwork marketplace with listing management and a system administration dashboard featuring detailed reports. Fully optimised with advanced filtering and location-based search options, delivering an enhanced user experience across all devices with a fully responsive design. Responsible for all backend features and contributed to selected frontend features.",
    techStack: ["Vue.js", "React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Firebase", "Netlify"],
    github: "https://github.com/Navindu752",
    live: "https://www.artdillo.com",
    featured: true,
  },
  {
    id: 7,
    title: "Oxiwear — Health Monitoring Admin Panel",
    description:
      "An admin panel for Oxiwear, a wearable ear gadget that measures human health conditions in real time. The panel provides rich data visualisations from live device readings and manages Oxiwear users. Built with real-time Socket communication to stream health metrics, interactive charts for data representation, and full user management capabilities.",
    techStack: ["React.js", "Redux", "Socket.io", "Express.js", "MongoDB", "Chart.js"],
    github: "https://github.com/Navindu752",
    live: "https://dev.oxiwear.fitness",
    featured: false,
  },
];
