"use client";
import { motion } from "framer-motion";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-start bg-cover bg-center py-40 md:py-36 3xl:py-58 max-h-screen"
      style={{ backgroundImage: "url('/images/goodReviewsOpt2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-left px-4 md:px-8 w-full xl:w-1/2 mx-8 lg:mx-32">
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
          <h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-bold text-white leading-8">Websites That Grow Your Business</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}>
          <p className="md:text-xl text-white mt-4">
            Most businesses lack the time to update or create websites. I build clear and optimized websites that make it easy for customers to hire
            you, saving you time and boosting your business.
          </p>
        </motion.div>
        <motion.div
          className="flex items-start mt-8"
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.05, 1],
          }}
          transition={{ ease: "easeOut", duration: 1, delay: 1 }}
        >
          <Button variant="primary" link="contact">
            Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
