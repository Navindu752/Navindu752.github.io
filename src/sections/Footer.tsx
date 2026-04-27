import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/Navindu752", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/navindu-dilshan-munasinghe-242044216/", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:navindudilshan60@gmail.com", label: "Email" },
];

const navLinks = ["About", "Skills", "Experience", "Projects", "Contact"];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/60 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white font-bold text-xs">
                N
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-sm">
                Navindu<span className="text-sky-500">.</span>dev
              </span>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center md:text-left">
              Associate Tech Lead · Full-stack Engineer
            </p>
          </div>

          {/* Nav links */}
          <ul className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() =>
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-xs text-gray-500 dark:text-gray-400 hover:text-sky-500 transition-colors cursor-pointer"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Social + Back to top */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-sky-500 hover:bg-sky-500/10 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-1 p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-sky-500 hover:bg-sky-500/10 transition-all duration-200"
            >
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {year} Navindu Dilshan Munasinghe. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
