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
      className={`sticky top-0 z-10 flex items-center justify-between bg-bgLightPrimary px-6 py-3 transition-all duration-300 ease-in-out lg:px-24 lg:py-1 dark:bg-bgDarkSecondary ${
        isScrolled
          ? "bg-bgLightPrimary/90 shadow-[0_6px_10px_-3px_rgba(0,0,0,0.15)] dark:bg-bgDarkSecondary/90"
          : ""
      }`}
    >
      <MobileLogo />
      <FullLogo />
      <nav className="hidden space-x-4 lg:flex">
        <Link className="group" href="/">
          Home
          <span
            className={`block h-[2px] max-w-0 bg-emerald-500 transition-all duration-500 group-hover:max-w-full ${
              path === "/" ? "w-full max-w-full" : ""
            }`}
          ></span>
        </Link>
        <Link className="group" href="/about">
          About
          <span
            className={`block h-[2px] max-w-0 bg-emerald-500 transition-all duration-500 group-hover:max-w-full ${
              path === "/about" ? "w-full max-w-full" : ""
            }`}
          ></span>
        </Link>
        <Link className="group" href="/portfolio">
          Portfolio
          <span
            className={`block h-[2px] max-w-0 bg-emerald-500 transition-all duration-500 group-hover:max-w-full ${
              path === "/portfolio" ? "w-full max-w-full" : ""
            }`}
          ></span>
        </Link>
        <Link className="group" href="/contact">
          Contact
          <span
            className={`block h-[2px] max-w-0 bg-emerald-500 transition-all duration-500 group-hover:max-w-full ${
              path === "/contact" ? "w-full max-w-full" : ""
            }`}
          ></span>
        </Link>
      </nav>
      <div className="hidden lg:block">
        <Button variant="primary" link="contact">
          Free Quote
        </Button>
        {/* <AIChatButton /> */}
      </div>
      <nav className="flex gap-4 lg:hidden">
        <Button variant="mobilePrimary" link="contact">
          Free Quote
        </Button>
        {/* <AIChatButton /> */}
        <Toggle toggle={() => toggleMenu()} isOpen={isOpen} />
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-0 z-20 flex h-screen w-screen flex-col items-start gap-6 bg-bgLightPrimary pl-4 pt-6 shadow-md lg:hidden dark:bg-bgDarkSecondary"
          >
            <ul className="font-600 flex w-full flex-col items-start gap-4 text-left text-xl">
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
