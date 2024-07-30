import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "outline" | "mobilePrimary" | "mobileOutline";
  link: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, link, onClick }) => {
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
    case "mobilePrimary":
      className =
        "text-white text-lg bg-emerald-500 rounded-lg hover:bg-emerald-700 font-semibold ease-in-out duration-300 flex flex-col content-end justify-center items-center px-4 py-1";
      break;
    case "mobileOutline":
      className =
        "text-emerald-500 text-lg border border-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white font-semibold ease-in-out duration-300 flex flex-col content-end justify-center items-center px-4 py-1";
      break;
    default:
      className = "";
  }

  return (
    <Link href={`/${link}`}>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
