"use client";
import { motion } from "framer-motion";

export default function AnimatedHeader({ text, xVal }: { text: string; xVal: number }) {
  return (
    <motion.h3
      initial={{ opacity: 0, x: xVal }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className="text-3xl lg:text-5xl font-bold"
    >
      {text}
    </motion.h3>
  );
}
