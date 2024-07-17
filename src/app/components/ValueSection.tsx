"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const values = ["Personalized Websites", "Custom Photography", "Ongoing Maintenance", "Website Marketing Strategy", "Web Development Expertise"];

const descriptions = [
  "I take the time to sit with you and learn about your business, ensuring that you get a website you will be proud of.",
  "Missing compelling shots for your website? I provide high-quality photography services to enhance your website's visual appeal.",
  "Ensure your website continues to perform well and stays up-to-date with ongoing maintenance services.",
  "Utilize a popular marketing framework for effective website marketing that clearly communicates your value to customers.",
  "With my web development expertise, I create efficient websites that provide a seamless user experience.",
];

export default function ValueSection() {
  const [clicked, setClicked] = useState([true, false, false, false, false, false]);

  const handleToggle = (index: number) => {
    setClicked((prevState) => {
      const newState = prevState.map((item, idx) => (idx === index ? !item : false));
      return newState;
    });
  };

  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center py-12 px-8 lg:px-32 min-h-[800px] text-white">
        <div
          className="absolute inset-0 bg-cover bg-[center_left_-40rem] md:bg-center"
          style={{ backgroundImage: "url('/images/valueSection.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black from-0% lg:from-20%"></div>
        <div className="absolute bg-black inset-0 opacity-40 lg:opacity-10"></div>
        <div className="relative flex flex-col w-full xl:w-1/2">
          <p className="text-3xl md:text-5xl font-bold mb-12">
            Focus on Your Customer,<br></br>I’ll Handle the Web
          </p>
          {values.map((value, index) => (
            <div key={index} className="odd:border-y last:border-b first:border-t p-4 transition duration-300">
              <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(index)}>
                <p className="text-lg">
                  <span className="text-xl sm:text-2xl font-semibold">{value}</span>
                </p>
                <span className="text-2xl">{clicked[index] ? "-" : "+"}</span>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: clicked[index] ? "auto" : 0, opacity: clicked[index] ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`mt-2 overflow-hidden`}
              >
                <p>{descriptions[index]}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
