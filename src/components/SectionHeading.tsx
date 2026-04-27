interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ label, title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      <span className="inline-block text-xs font-mono font-semibold tracking-widest uppercase text-sky-500 mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 dark:text-gray-400 text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
