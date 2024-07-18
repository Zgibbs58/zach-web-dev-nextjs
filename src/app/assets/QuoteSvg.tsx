"use client";
import { motion } from "framer-motion";

const QuoteSvg = () => {
  return (
    <motion.svg
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="inline-block align-top"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 16 16"
      fill="#10b981"
    >
      <path d="M1.58155 3.29722L3.88269 0.996094L6.00401 3.11741L3.73705 5.38437C3.34211 5.77931 3 6.43105 3 7.00012V8.00014L7 8.00015V15.0002H0V7.00012C0 5.51964 0.605587 4.27319 1.58155 3.29722Z" />
      <path d="M10.5816 3.29722L12.8827 0.996094L15.004 3.11741L12.7371 5.38437C12.3421 5.77931 12 6.43105 12 7.00012V8.00014L16 8.00015V15.0002H9V7.00012C9 5.51964 9.60559 4.27319 10.5816 3.29722Z" />
    </motion.svg>
  );
};

export default QuoteSvg;
