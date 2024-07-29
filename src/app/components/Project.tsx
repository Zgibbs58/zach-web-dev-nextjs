"use client";
import Button from "./ui/Button";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ExternalLinkButton from "./ui/ExternalLinkButton";
import Image from "next/image";

export default function Project({
  name,
  description,
  fullDescription,
  image,
  projectLink,
  isOdd,
  id,
}: {
  name: string;
  description: string;
  fullDescription: string[];
  image: string;
  projectLink: string;
  isOdd: number;
  id: number;
}) {
  // useState hook to determine if the screen is small
  // if the screen is small, the projects will alternate text left with image right and vice versa
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1279);
    };

    // Only run this effect on the client side
    if (typeof window !== "undefined") {
      handleResize(); // Call the function once to set the state correctly on page load
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return isOdd === 1 || isSmallScreen ? (
    id === 1 ? (
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0 }}
        className="grid xl:grid-cols-3 xl:justify-items-end items-center mb-36 xl:mb-64"
      >
        <div className="xl:col-span-2 text-left space-y-8">
          <h2 className="text-2xl xl:text-5xl font-bold">{name}</h2>
          <p>{description}</p>
          <div className="hidden xl:flex xl:flex-row xl:gap-x-6">
            <ExternalLinkButton variant="primary" link={projectLink}>
              View Site
            </ExternalLinkButton>
            <Button variant="outline" link={`project/${id}`}>
              Project Details
            </Button>
          </div>
        </div>
        <figure className="xl:grid-span-1 my-10 xl:my-0 rounded-3xl grid justify-items-center">
          <div className="phone-frame">
            <div className="phone-frame-inner">
              <Image src={image} alt={name} width={600} height={600} unoptimized />
            </div>
            <div className="volume-button-top"></div>
            <div className="volume-button-middle"></div>
            <div className="volume-button-bottom"></div>
            <div className="power-button"></div>
          </div>
        </figure>
        <div className="flex flex-row gap-4 xl:hidden text-center justify-center">
          <ExternalLinkButton variant="mobileButton" link={projectLink}>
            View Site
          </ExternalLinkButton>
          <Button variant="mobileOutline" link={`project/${id}`}>
            Project Details
          </Button>
        </div>
      </motion.section>
    ) : (
      <section className="grid xl:grid-cols-3 xl:justify-items-end items-center mb-36 xl:mb-64">
        <div className="xl:col-span-2 text-left space-y-8">
          <h2 className="text-2xl xl:text-5xl font-bold">{name}</h2>
          <p>{description}</p>
          <div className="mt-10 hidden xl:flex xl:flex-row xl:gap-x-6 mr-5">
            <ExternalLinkButton variant="primary" link={projectLink}>
              View Site
            </ExternalLinkButton>
            <Button variant="outline" link={`project/${id}`}>
              Project Details
            </Button>
          </div>
        </div>
        <figure className="xl:grid-span-1 my-10 xl:my-0 rounded-3xl grid justify-items-center">
          <div className="phone-frame">
            <div className="phone-frame-inner">
              {/* <img src={image} alt={name} /> */}
              <Image src={image} alt={name} width={600} height={600} unoptimized />
            </div>
            <div className="volume-button-top"></div>
            <div className="volume-button-middle"></div>
            <div className="volume-button-bottom"></div>
            <div className="power-button"></div>
          </div>
        </figure>
        <div className="flex flex-row gap-4 xl:hidden text-center justify-center">
          <ExternalLinkButton variant="mobileButton" link={projectLink}>
            View Site
          </ExternalLinkButton>
          <Button variant="mobileOutline" link={`project/${id}`}>
            Project Details
          </Button>
        </div>
      </section>
    )
  ) : (
    <motion.section className="grid xl:grid-cols-3 xl:justify-items-start items-center my-20 xl:my-52">
      <motion.figure
        // initial={{ opacity: 0, x: -50 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // transition={{ duration: 0.5 }}
        // viewport={{ once: true, amount: 0.3 }}
        className="xl:grid-span-1 my-10 xl:my-0 rounded-3xl"
      >
        {/* <DeviceFrameset device="iPhone X" color="white" landscape={false} width={235} height={500}> */}
        {/* <img className="rounded-3xl shadow-xl shadow-gray-700 border-4 border-gray-200 xl:w-56" src={image} alt={image} /> */}
        <div className="phone-frame">
          <div className="phone-frame-inner">
            <Image src={image} alt={name} width={600} height={600} unoptimized />
          </div>
          <div className="volume-button-top"></div>
          <div className="volume-button-middle"></div>
          <div className="volume-button-bottom"></div>
          <div className="power-button"></div>
        </div>
        {/* </DeviceFrameset> */}
      </motion.figure>
      <div className="xl:col-span-2 text-left space-y-8">
        <h2 className="text-3xl xl:text-5xl font-bold">{name}</h2>
        <p>{description}</p>
        <div className="flex flex-row gap-x-6">
          <ExternalLinkButton variant="primary" link={projectLink}>
            View Site
          </ExternalLinkButton>
          <Button variant="outline" link={`project/${id}`}>
            Project Details
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
