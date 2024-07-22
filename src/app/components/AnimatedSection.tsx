"use client";
import { motion } from "framer-motion";

export default function AnimatedSection({ children, tailwindClasses }: { children: React.ReactNode; tailwindClasses?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
      className={tailwindClasses}
    >
      {children}
    </motion.section>
  );
}
