import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ label, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] uppercase text-sky-500 mb-4"
      >
        <span className="w-6 h-px bg-sky-500/60" />
        {label}
        <span className="w-6 h-px bg-sky-500/60" />
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-5 leading-[1.1] tracking-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-gray-500 dark:text-gray-400 text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{ transformOrigin: centered ? "center" : "left" }}
        className={`mt-5 h-[3px] w-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}

