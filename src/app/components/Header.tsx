"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { Toggle } from "./ui/Toggle";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import MobileLogo from "../assets/MobileLogo";
import FullLogo from "../assets/FullLogo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 200; // Replace 'hero' with the id of your hero section if needed
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-6 lg:px-24 py-3 lg:py-1 bg-bgLightPrimary dark:bg-bgDarkSecondary flex justify-between items-center sticky top-0 z-10 transition-all ease-in-out duration-300 ${
        isScrolled ? "bg-bgLightPrimary/90 dark:bg-bgDarkSecondary/90 shadow-[0_6px_10px_-3px_rgba(0,0,0,0.15)]" : ""
      }`}
    >
      <MobileLogo />
      <FullLogo />
      <nav className="space-x-4 hidden lg:flex">
        <Link className="group" href="/">
          Home
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-emerald-500 ${
              path === "/" ? "max-w-full w-full" : ""
            }`}
          ></span>
        </Link>
        <Link className="group" href="/about">
          About
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-emerald-500 ${
              path === "/about" ? "max-w-full w-full" : ""
            }`}
          ></span>
        </Link>
        <Link className="group" href="/portfolio">
          Portfolio
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-emerald-500 ${
              path === "/portfolio" ? "max-w-full w-full" : ""
            }`}
          ></span>
        </Link>
        <Link className="group" href="/contact">
          Contact
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-emerald-500 ${
              path === "/contact" ? "max-w-full w-full" : ""
            }`}
          ></span>
        </Link>
      </nav>
      <div className="hidden lg:block">
        <Button variant="primary" link="contact">
          Free Quote
        </Button>
      </div>
      <nav className="lg:hidden flex gap-4">
        <Button variant="mobilePrimary" link="contact">
          Free Quote
        </Button>
        <Toggle toggle={() => toggleMenu()} isOpen={isOpen} />
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 bg-bgLightPrimary dark:bg-bgDarkSecondary w-screen h-screen flex flex-col shadow-md lg:hidden pt-6 z-20 pl-4 gap-6 items-start"
          >
            <ul className="text-left flex flex-col text-xl w-full font-600 gap-4 items-start">
              <li onClick={toggleMenu}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/about">About</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            <Button onClick={toggleMenu} variant="primary" link="contact">
              Free Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
