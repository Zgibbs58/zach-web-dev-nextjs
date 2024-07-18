"use client";
import { motion } from "framer-motion";

export default function StepCard({ delayVal, stepNum, title, text }: { delayVal: number; stepNum: number; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delayVal }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center shadow-lg p-6 rounded-lg bg-gray-100 border-2 border-emerald-500 dark:border-none"
    >
      <div className="text-4xl font-bold text-emerald-500 mb-4">{stepNum}</div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg">{text}</p>
    </motion.div>
  );
}
