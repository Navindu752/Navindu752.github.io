import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import type { Theme } from "../hooks/useTheme";

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/[0.08] transition-colors duration-200 overflow-hidden"
    >
      <motion.span
        initial={false}
        animate={{ y: theme === "dark" ? 0 : -32, opacity: theme === "dark" ? 1 : 0, rotate: theme === "dark" ? 0 : -90 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute flex items-center justify-center"
      >
        <HiSun size={18} className="text-amber-400" />
      </motion.span>
      <motion.span
        initial={false}
        animate={{ y: theme === "light" ? 0 : 32, opacity: theme === "light" ? 1 : 0, rotate: theme === "light" ? 0 : 90 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute flex items-center justify-center"
      >
        <HiMoon size={18} className="text-sky-400" />
      </motion.span>
    </motion.button>
  );
}

