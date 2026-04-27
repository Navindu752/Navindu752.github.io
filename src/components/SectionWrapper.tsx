import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";
import { EASE_OUT } from "../utils/animations";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <motion.div
        ref={ref}
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
