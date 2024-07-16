"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import { Toggle } from "./ui/Toggle";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 100; // Replace 'hero' with the id of your hero section if needed
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-6 lg:px-24 py-3 bg-bgLightSecondary dark:bg-bgDarkSecondary flex justify-between items-center sticky top-0 z-10 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <Link href={"/"} className="lg:hidden flex items-center w-16">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="200 200 470.4415617775495 310.4415617775495" className={`w-14`}>
          <g transform="scale(7.320832263036219) translate(10, 10)" fill="#10b981">
            <g id="SvgjsG16845" transform="matrix(0.9004566310986011,0,0,0.9004566310986011,17.839008336686117,3.791687896050071)">
              <path d="M3.3652 46.641999999999996 c-1.2863 -1.2863 -1.2864 -3.3723 -0.00046875 -4.6583 l17.395 -17.394 l-15.065 0 c-1.8191 0 -3.2941 -1.4749 -3.2941 -3.2941 s1.4749 -3.2941 3.2941 -3.2941 l23.018 0 c1.3325 0 2.5332 0.8025 3.0434 2.0333 s0.22852 2.6476 -0.71364 3.5897 l-23.018 23.018 c-0.6432 0.6432 -1.4864 0.96474 -2.3293 0.96474 c-0.8433 0 -1.6861 -0.32156 -2.3293 -0.96474 z M28.712 53.4126 c1.8191 0 3.2945 1.4749 3.2945 3.294 s-1.4749 3.2941 -3.2941 3.2941 l-23.018 0 c-1.3325 0 -2.5332 -0.8025 -3.0434 -2.0333 s-0.22852 -2.6476 0.71364 -3.5897 l23.018 -23.018 c1.2872 -1.2868 3.3724 -1.2863 4.6587 0 s1.2863 3.3719 0 4.6583 l-17.395 17.394 l15.065 0 z M64.862 41.018 c1.8196 0 3.294 1.4749 3.294 3.2941 c0 8.6502 -7.038 15.688 -15.688 15.688 s-15.688 -7.038 -15.688 -15.688 l0 -10.624 c0 -8.6502 7.038 -15.688 15.688 -15.688 s15.688 7.038 15.688 15.688 c0 1.8191 -1.4749 3.2941 -3.2941 3.2941 s-3.2941 -1.4749 -3.2941 -3.2941 c0 -5.0177 -4.0822 -9.1002 -9.1002 -9.1002 s-9.1002 4.0822 -9.1002 9.1002 l0 10.624 c0 5.0177 4.0822 9.1002 9.1002 9.1002 c3.8566 0 7.1604 -2.4113 8.4834 -5.8059 l-8.4832 0 c-1.8191 0 -3.2941 -1.4749 -3.2941 -3.2941 s1.4749 -3.2941 3.2941 -3.2941 l12.394 0 z"></path>
            </g>
          </g>
        </svg>
      </Link>
      <Link href={"/"} className="lg:flex hidden items-center space-x-4 lg:w-52 xl:w-64">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="200 200 470.4415617775495 310.4415617775495" className={`w-14`}>
          <g transform="scale(7.320832263036219) translate(10, 10)" fill="#10b981">
            <g id="SvgjsG16845" transform="matrix(0.9004566310986011,0,0,0.9004566310986011,17.839008336686117,3.791687896050071)">
              <path d="M3.3652 46.641999999999996 c-1.2863 -1.2863 -1.2864 -3.3723 -0.00046875 -4.6583 l17.395 -17.394 l-15.065 0 c-1.8191 0 -3.2941 -1.4749 -3.2941 -3.2941 s1.4749 -3.2941 3.2941 -3.2941 l23.018 0 c1.3325 0 2.5332 0.8025 3.0434 2.0333 s0.22852 2.6476 -0.71364 3.5897 l-23.018 23.018 c-0.6432 0.6432 -1.4864 0.96474 -2.3293 0.96474 c-0.8433 0 -1.6861 -0.32156 -2.3293 -0.96474 z M28.712 53.4126 c1.8191 0 3.2945 1.4749 3.2945 3.294 s-1.4749 3.2941 -3.2941 3.2941 l-23.018 0 c-1.3325 0 -2.5332 -0.8025 -3.0434 -2.0333 s-0.22852 -2.6476 0.71364 -3.5897 l23.018 -23.018 c1.2872 -1.2868 3.3724 -1.2863 4.6587 0 s1.2863 3.3719 0 4.6583 l-17.395 17.394 l15.065 0 z M64.862 41.018 c1.8196 0 3.294 1.4749 3.294 3.2941 c0 8.6502 -7.038 15.688 -15.688 15.688 s-15.688 -7.038 -15.688 -15.688 l0 -10.624 c0 -8.6502 7.038 -15.688 15.688 -15.688 s15.688 7.038 15.688 15.688 c0 1.8191 -1.4749 3.2941 -3.2941 3.2941 s-3.2941 -1.4749 -3.2941 -3.2941 c0 -5.0177 -4.0822 -9.1002 -9.1002 -9.1002 s-9.1002 4.0822 -9.1002 9.1002 l0 10.624 c0 5.0177 4.0822 9.1002 9.1002 9.1002 c3.8566 0 7.1604 -2.4113 8.4834 -5.8059 l-8.4832 0 c-1.8191 0 -3.2941 -1.4749 -3.2941 -3.2941 s1.4749 -3.2941 3.2941 -3.2941 l12.394 0 z"></path>
            </g>
          </g>
        </svg>
      </Link>
      <nav className="space-x-4 hidden lg:flex lg:mr-12 xl:mr-32">
        <Link className="group" href="/">
          Home
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500 ${
              path === "/" ? "max-w-full w-full" : ""
            }`}
          ></span>
        </Link>
        <Link className="group" href="/about">
          About
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500 ${
              path === "/about" ? "max-w-full w-full" : ""
            }`}
          ></span>
        </Link>
        <Link className="group" href="/portfolio">
          Portfolio
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500 ${
              path === "/portfolio" ? "max-w-full w-full" : ""
            }`}
          ></span>
        </Link>
        <Link className="group" href="/contact">
          Contact
          <span
            className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-emerald-500 ${
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
        <Button variant="primary" link="contact">
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
            className="fixed top-0 left-0 bg-bgLightSecondary dark:bg-bgDarkSecondary w-full h-full flex flex-col shadow-md lg:hidden pt-6 z-20 pl-4 gap-6 items-start"
          >
            {/* <div>
              <Image
                alt="Solid Rock Concrete Logo"
                height={200}
                src="/images/SRBannerLight.png"
                width={220}
              />
            </div> */}
            <ul className="text-left flex flex-col text-xl w-full font-600 gap-4 items-start">
              <li onClick={toggleMenu}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/contact">Contact</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/services">Services</Link>
              </li>
              <li onClick={toggleMenu}>
                <Link href="/about">About</Link>
              </li>
            </ul>
            <Button variant="primary" link="contact">
              Free Quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
