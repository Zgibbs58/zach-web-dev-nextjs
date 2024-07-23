import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "outline" | "mobileButton" | "none";
  link: string;
}

const ExternalLinkButton: React.FC<ButtonProps> = ({ children, variant, link }) => {
  let className = "";

  switch (variant) {
    case "primary":
      className =
        "text-white bg-emerald-500 rounded-lg hover:bg-emerald-700 font-semibold text-xl ease-in-out duration-300 flex flex-col content-end justify-center items-center px-6 py-2";
      break;
    case "outline":
      className =
        "text-emerald-500 border border-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white font-semibold text-xl ease-in-out duration-300 flex flex-col content-end justify-center items-center px-6 py-2";
      break;
    case "mobileButton":
      className =
        "text-white text-lg bg-emerald-500 rounded-lg hover:bg-emerald-700 font-semibold ease-in-out duration-300 flex flex-col content-end justify-center items-center px-4 py-1";
      break;
    case "none":
      className = "hidden";
    // Add more cases as needed
    default:
      className = "";
  }

  return (
    <a href={link}>
      <button className={className}>{children}</button>
    </a>
  );
};

export default ExternalLinkButton;
