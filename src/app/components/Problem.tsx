"use client";
import { motion } from "framer-motion";

export default function Problem({ svg, text, delayVal, viewBoxVal }: { svg: JSX.Element; text: string; delayVal: number; viewBoxVal: string }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.svg
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delayVal }}
        viewport={{ once: true, amount: 0.8 }}
        className="w-24"
        viewBox={viewBoxVal}
        xmlns="http://www.w3.org/2000/svg"
      >
        {svg}
      </motion.svg>
      <p className="">{text}</p>
    </div>
  );
}
