import { HiSun, HiMoon } from "react-icons/hi";
import type { Theme } from "../hooks/useTheme";

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 overflow-hidden"
    >
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        }`}
      >
        <HiSun size={18} className="text-amber-400" />
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          theme === "light" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
        }`}
      >
        <HiMoon size={18} className="text-sky-500" />
      </span>
    </button>
  );
}
