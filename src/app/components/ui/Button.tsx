import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "outline" | "outlineWhite" | "none";
  link: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant, link }) => {
  let className = "";

  switch (variant) {
    case "primary":
      className =
        "text-white bg-emerald-500 rounded-xl hover:bg-emerald-700 font-semibold text-xl ease-in-out duration-300 flex flex-col content-end justify-center items-center px-6 py-2";
      break;
    case "outline":
      className = "border border-orange-500 text-orange-500 text-lg hover:bg-orange-600 hover:text-white ease-in-out duration-200 py-2 px-4";
      break;
    case "outlineWhite":
      className = "border border-white text-white text-lg hover:bg-white hover:text-orange-500 ease-in-out duration-200 py-2 px-4";
      break;
    case "none":
      className = "hidden";
    // Add more cases as needed
    default:
      className = "";
  }

  return (
    <Link href={`/${link}`}>
      <button className={className}>{children}</button>
    </Link>
  );
};

export default Button;
