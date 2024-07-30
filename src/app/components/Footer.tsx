"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileLogo from "../assets/MobileLogo";
import FullLogo from "../assets/FullLogo";

export default function Footer() {
  const path = usePathname();
  return (
    <footer className="px-6 lg:px-24 py-4 border-t border-lightText dark:border-bgLightPrimary">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-2">
        <nav className="">
          <ul className="flex flex-row items-center justify-center space-x-4 text-sm sm:text-md">
            <li className={`group transition duration-300 ${path === "/" ? "display: hidden" : ""}`}>
              <Link href="/">
                Home<span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-emerald-500`}></span>
              </Link>
            </li>
            <li className={`group transition duration-300 ${path === "/about" ? "display: hidden" : ""}`}>
              <Link href="/about">
                About
                <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-emerald-500`}></span>
              </Link>
            </li>
            <li className={`group transition duration-300 ${path === "/portfolio" ? "display: hidden" : ""}`}>
              <Link href="/portfolio">
                Portfolio<span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-emerald-500`}></span>
              </Link>
            </li>
            <li className={`group transition duration-300 ${path === "/contact" ? "display: hidden" : ""}`}>
              <Link href="/contact">
                Contact<span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2px] bg-emerald-500`}></span>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href={"/"} className="flex items-center w-60 pb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="3146.416645260724"
            height="717.4415617775495"
            viewBox="0 0 3146.416645260724 717.4415617775495"
            className={`logoColor w-72 h-16`}
          >
            <g transform="scale(7.320832263036219) translate(10, 10)">
              <g id="SvgjsG16844" transform="matrix(1,0,0,1,0,0)" fill="#11b27d">
                <rect xmlns="http://www.w3.org/2000/svg" width="99" height="78" rx="10" ry="10"></rect>
              </g>
              <g id="SvgjsG16845" transform="matrix(0.9004566310986011,0,0,0.9004566310986011,17.839008336686117,3.791687896050071)">
                <path d="M3.3652 46.641999999999996 c-1.2863 -1.2863 -1.2864 -3.3723 -0.00046875 -4.6583 l17.395 -17.394 l-15.065 0 c-1.8191 0 -3.2941 -1.4749 -3.2941 -3.2941 s1.4749 -3.2941 3.2941 -3.2941 l23.018 0 c1.3325 0 2.5332 0.8025 3.0434 2.0333 s0.22852 2.6476 -0.71364 3.5897 l-23.018 23.018 c-0.6432 0.6432 -1.4864 0.96474 -2.3293 0.96474 c-0.8433 0 -1.6861 -0.32156 -2.3293 -0.96474 z M28.712 53.4126 c1.8191 0 3.2945 1.4749 3.2945 3.294 s-1.4749 3.2941 -3.2941 3.2941 l-23.018 0 c-1.3325 0 -2.5332 -0.8025 -3.0434 -2.0333 s-0.22852 -2.6476 0.71364 -3.5897 l23.018 -23.018 c1.2872 -1.2868 3.3724 -1.2863 4.6587 0 s1.2863 3.3719 0 4.6583 l-17.395 17.394 l15.065 0 z M64.862 41.018 c1.8196 0 3.294 1.4749 3.294 3.2941 c0 8.6502 -7.038 15.688 -15.688 15.688 s-15.688 -7.038 -15.688 -15.688 l0 -10.624 c0 -8.6502 7.038 -15.688 15.688 -15.688 s15.688 7.038 15.688 15.688 c0 1.8191 -1.4749 3.2941 -3.2941 3.2941 s-3.2941 -1.4749 -3.2941 -3.2941 c0 -5.0177 -4.0822 -9.1002 -9.1002 -9.1002 s-9.1002 4.0822 -9.1002 9.1002 l0 10.624 c0 5.0177 4.0822 9.1002 9.1002 9.1002 c3.8566 0 7.1604 -2.4113 8.4834 -5.8059 l-8.4832 0 c-1.8191 0 -3.2941 -1.4749 -3.2941 -3.2941 s1.4749 -3.2941 3.2941 -3.2941 l12.394 0 z"></path>
              </g>
              <g id="SvgjsG16846" transform="matrix(1.4116405845389304,0,0,1.4116405845389304,115.32973461482332,-15.028914433387005)" fill="#11b27d">
                <path d="M3 14.399999999999999 l0.4 -0.4 l16.76 0 l0.4 0.4 l0 2.24 l-0.08 0.24 l-12 17.96 l1 1.84 l11.08 0 l0.4 0.4 l0 2.52 l-0.4 0.4 l-17.56 0 l-0.4 -0.4 l0 -2.08 l0.2 -0.48 l12 -17.88 l-1 -1.84 l-10.4 0 l-0.4 -0.4 l0 -2.52 z M33.626 14.120000000000001 l0.4 -0.24 l3.76 0 l0.36 0.28 l9.52 25.32 l-0.36 0.52 l-3.28 0 l-0.36 -0.28 l-1.88 -5.4 l-1.12 -0.8 l-9.8 0 l-1.12 0.8 l-1.92 5.4 l-0.36 0.28 l-3.24 0 l-0.4 -0.56 z M34.666 20.44 l-2.92 8.2 l1.12 1.6 l5.8 0 l1.12 -1.6 l-2.84 -8.2 l-2.28 0 z M70.412 17.04 l-1.88 2.16 l-0.56 0.04 c-1.76 -1.56 -3.76 -2.4 -6.12 -2.4 c-4.88 0 -8.16 4.08 -8.16 10.16 c0 5.84 3.08 10.16 8.2 10.16 c2.48 0 4.72 -0.96 6.68 -2.84 l0.56 0.04 l1.8 2.04 l-0.04 0.56 c-2.48 2.4 -5.48 3.56 -9.2 3.56 c-7.12 0 -11.76 -5.48 -11.76 -13.52 c0 -7.52 4.88 -13.52 12.16 -13.52 c3.28 0 5.96 0.96 8.28 3 z M76.238 14 l2.96 0 l0.4 0.4 l0 9.68 l1.2 1.2 l9.8 0 l1.2 -1.2 l0 -9.68 l0.4 -0.4 l2.96 0 l0.4 0.4 l0 25.2 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -9.76 l-1.2 -1.2 l-9.8 0 l-1.2 1.2 l0 9.76 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -25.2 z M120.41 25.880000000000003 l8.24 0 l0.4 0.4 l0 10.76 l-0.16 0.32 c-2.48 2.08 -5.76 3.16 -9.48 3.16 c-7.32 0 -12.04 -5.44 -12.04 -13.52 c0 -7.32 4.8 -13.52 12.4 -13.52 c3.36 0 6.32 1.04 8.56 3 l0.04 0.56 l-1.88 2.16 l-0.56 0.04 c-1.8 -1.56 -4 -2.4 -6.36 -2.4 c-5.08 0 -8.44 4.2 -8.44 10.16 c0 6.2 3.36 10.2 8.56 10.2 c2 0 3.76 -0.48 5.24 -1.36 l0.56 -1.04 l0 -4.52 l-1.16 -1.2 l-3.92 -0.12 l-0.4 -0.4 l0 -2.28 z M133.71599999999998 14.399999999999999 l0.4 -0.4 l2.96 0 l0.4 0.4 l0 25.2 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -25.2 z M143.14199999999997 14.399999999999999 l0.4 -0.4 l8.76 0 c5.32 0 8.6 2.72 8.6 6.88 c0 1.6 -0.52 3.04 -1.64 4.24 l0 1.84 c2 1.28 2.88 3.08 2.88 5.56 c0 4.52 -3.44 7.48 -9.16 7.48 l-9.44 0 l-0.4 -0.4 l0 -25.2 z M146.902 29.48 l0 6.08 l1.2 1.2 l4.96 0 c3.48 0 5.32 -1.52 5.32 -4.24 c0 -2.76 -1.76 -4.24 -5.32 -4.24 l-4.96 0 z M146.902 18.44 l0 5.44 l1.2 1.2 l4.48 0 c2.84 0 4.6 -1.44 4.6 -4 c0 -2.52 -1.68 -3.84 -5 -3.84 l-4.08 0 z M166.80799999999996 14.399999999999999 l0.4 -0.4 l8.76 0 c5.32 0 8.6 2.72 8.6 6.88 c0 1.6 -0.52 3.04 -1.64 4.24 l0 1.84 c2 1.28 2.88 3.08 2.88 5.56 c0 4.52 -3.44 7.48 -9.16 7.48 l-9.44 0 l-0.4 -0.4 l0 -25.2 z M170.56799999999998 29.48 l0 6.08 l1.2 1.2 l4.96 0 c3.48 0 5.32 -1.52 5.32 -4.24 c0 -2.76 -1.76 -4.24 -5.32 -4.24 l-4.96 0 z M170.56799999999998 18.44 l0 5.44 l1.2 1.2 l4.48 0 c2.84 0 4.6 -1.44 4.6 -4 c0 -2.52 -1.68 -3.84 -5 -3.84 l-4.08 0 z M207.63399999999996 16.64 l-1.6 2.28 l-0.56 0.12 c-1.96 -1.48 -4.28 -2.28 -6.68 -2.28 c-3.6 0 -5.28 1.48 -5.28 3.96 c0 2.72 1.72 3.8 5.68 4.2 c6 0.6 9.4 3.32 9.4 7.68 c0 4.8 -4.04 7.92 -10.04 7.92 c-3.8 0 -6.72 -0.88 -9.36 -2.8 l-0.12 -0.56 l1.56 -2.36 l0.56 -0.12 c2.4 1.72 4.84 2.56 7.48 2.56 c3.88 0 6.24 -1.68 6.24 -4.56 c0 -2.64 -2 -3.92 -6.28 -4.32 c-5.76 -0.52 -8.8 -2.92 -8.8 -7.4 c0 -4.6 3.6 -7.48 9.04 -7.48 c3.32 0 6.4 0.92 8.68 2.64 z"></path>
              </g>
              <g id="SvgjsG16847" transform="matrix(0.8368428240366833,0,0,0.8368428240366833,117.56063031871464,40.71935911506175)" fill="#11b27d">
                <path d="M1.72 14.52 l0.4 -0.52 l3.36 0 l0.4 0.32 l3.96 17.04 l2.32 0 l4.08 -15.4 l0.4 -0.28 l2.6 0 l0.4 0.32 l4.04 15.36 l2.32 0 l4 -17.04 l0.4 -0.32 l3.24 0 l0.4 0.52 l-6.84 25.28 l-0.4 0.28 l-4 0 l-0.4 -0.28 l-3.36 -13.04 l-2.32 0 l-3.24 13 l-0.4 0.32 l-4.16 0 l-0.4 -0.28 z M37.826 14.399999999999999 l0.4 -0.4 l15.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-11.4 0 l-1.2 1.2 l0 5.36 l1.2 1.2 l9.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-9.96 0 l-1.2 1.2 l0 6 l1.2 1.2 l12.12 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-16.68 0 l-0.4 -0.4 l0 -25.2 z M59.972 14.399999999999999 l0.4 -0.4 l8.76 0 c5.32 0 8.6 2.72 8.6 6.88 c0 1.6 -0.52 3.04 -1.64 4.24 l0 1.84 c2 1.28 2.88 3.08 2.88 5.56 c0 4.52 -3.44 7.48 -9.16 7.48 l-9.44 0 l-0.4 -0.4 l0 -25.2 z M63.732 29.48 l0 6.08 l1.2 1.2 l4.96 0 c3.48 0 5.32 -1.52 5.32 -4.24 c0 -2.76 -1.76 -4.24 -5.32 -4.24 l-4.96 0 z M63.732 18.44 l0 5.44 l1.2 1.2 l4.48 0 c2.84 0 4.6 -1.44 4.6 -4 c0 -2.52 -1.68 -3.84 -5 -3.84 l-4.08 0 z M91.38399999999999 14.399999999999999 l0.4 -0.4 l7.8 0 c7.56 0 12.28 4.96 12.28 13 c0 7.8 -4.92 13 -12.44 13 l-7.64 0 l-0.4 -0.4 l0 -25.2 z M95.14399999999999 18.56 l0 16.84 l1.2 1.2 l3.08 0 c5.44 0 8.68 -3.64 8.68 -9.6 c0 -6.36 -2.88 -9.64 -8.72 -9.64 l-3.04 0 z M116.33 14.399999999999999 l0.4 -0.4 l15.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-11.4 0 l-1.2 1.2 l0 5.36 l1.2 1.2 l9.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-9.96 0 l-1.2 1.2 l0 6 l1.2 1.2 l12.12 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-16.68 0 l-0.4 -0.4 l0 -25.2 z M136.236 14.52 l0.36 -0.52 l3.44 0 l0.36 0.28 l6.04 18.84 l2.32 0 l6.08 -18.84 l0.36 -0.28 l3.4 0 l0.36 0.52 l-8.96 25.28 l-0.36 0.28 l-4.2 0 l-0.36 -0.28 z M162.822 14.399999999999999 l0.4 -0.4 l15.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-11.4 0 l-1.2 1.2 l0 5.36 l1.2 1.2 l9.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-9.96 0 l-1.2 1.2 l0 6 l1.2 1.2 l12.12 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-16.68 0 l-0.4 -0.4 l0 -25.2 z M184.968 14.399999999999999 l0.4 -0.4 l2.96 0 l0.4 0.4 l0 21.04 l1.2 1.2 l11.28 0 l0.4 0.4 l0 2.56 l-0.4 0.4 l-15.84 0 l-0.4 -0.4 l0 -25.2 z M215.23399999999998 13.48 c7.04 0 11.76 5.72 11.76 13.52 c0 7.72 -4.96 13.52 -11.76 13.52 c-7.04 0 -11.76 -5.72 -11.76 -13.52 c0 -7.72 4.96 -13.52 11.76 -13.52 z M215.23399999999998 16.76 c-4.96 0 -8 4.24 -8 10.24 c0 5.96 3.04 10.24 8 10.24 s8 -4.24 8 -10.24 c0 -5.96 -3.04 -10.24 -8 -10.24 z M231.45999999999998 14.399999999999999 l0.4 -0.4 l8.8 0 c5.72 0 9.56 3.4 9.56 8.8 c0 5.36 -4.08 8.8 -10 8.8 l-3.8 0 l-1.2 1.2 l0 6.8 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -25.2 z M235.22 18.52 l0 8.56 l1.2 1.2 l3.76 0 c4.08 0 6.28 -1.92 6.28 -5.48 c0 -3.68 -2.04 -5.48 -6.04 -5.48 l-4 0 z M254.28599999999997 14.399999999999999 l0.4 -0.4 l3.64 0 l0.36 0.2 l6.32 11.28 l2.08 0 l6.36 -11.28 l0.36 -0.2 l3.56 0 l0.4 0.4 l0 25.2 l-0.4 0.4 l-2.84 0 l-0.4 -0.4 l0 -15.56 l-2.24 -0.6 l-4.92 8.56 l-0.36 0.2 l-1.36 0 l-0.36 -0.2 l-4.76 -8.48 l-2.24 0.6 l0 15.48 l-0.4 0.4 l-2.8 0 l-0.4 -0.4 l0 -25.2 z M283.432 14.399999999999999 l0.4 -0.4 l15.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-11.4 0 l-1.2 1.2 l0 5.36 l1.2 1.2 l9.96 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-9.96 0 l-1.2 1.2 l0 6 l1.2 1.2 l12.12 0 l0.4 0.4 l0 2.48 l-0.4 0.4 l-16.68 0 l-0.4 -0.4 l0 -25.2 z M305.57800000000003 14.399999999999999 l0.4 -0.4 l2.76 0 l0.32 0.2 l10.92 16.52 l2.2 -0.68 l0 -15.64 l0.4 -0.4 l2.8 0 l0.4 0.4 l0 25.2 l-0.4 0.4 l-3.12 0 l-0.32 -0.16 l-10.56 -16.04 l-2.2 0.64 l0 15.16 l-0.4 0.4 l-2.8 0 l-0.4 -0.4 l0 -25.2 z M329.444 14.399999999999999 l0.4 -0.4 l18.96 0 l0.4 0.4 l0 2.56 l-0.4 0.4 l-6.4 0 l-1.2 1.2 l0 21.04 l-0.4 0.4 l-2.96 0 l-0.4 -0.4 l0 -21.04 l-1.2 -1.2 l-6.4 0 l-0.4 -0.4 l0 -2.56 z"></path>
              </g>
            </g>
          </svg>
        </Link>
        {/* <h3 className="text-2xl lg:text-4xl font-bold text-center mb-2">Let&#39;s Connect</h3> */}
        <div className="flex flex-row items-center justify-center space-x-4 pb-2">
          <a href="https://linkedin.com/in/zacharywgibbs" target="_blank" rel="noreferrer">
            <svg
              enableBackground="new 0 0 512 512"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              className="svgIcon w-12 h-12 hover:scale-90 ease-in-out duration-150"
            >
              <g>
                <path d="M464.8,257.4c0,40.3-0.1,80.7,0.1,121c0,4.1-1.4,6.2-4.7,8.2C393.6,427,327,467.5,260.6,508.1c-2.9,1.8-4.8,1.6-7.6-0.1   C186.2,467.3,119.4,426.6,52.5,386c-2.8-1.7-3.7-3.5-3.7-6.7c0.1-81.3,0.1-162.7,0-244c0-3.3,1-5,3.8-6.7   C119.2,88.2,185.7,47.7,252.2,7c3.5-2.1,5.9-2,9.4,0.1c66.5,40.6,133,81.1,199.6,121.6c2.8,1.7,3.7,3.6,3.7,6.8   C464.8,176.1,464.8,216.8,464.8,257.4z M61.8,257.4c0,38,0.1,76-0.1,114c0,3.6,1.1,5.6,4.2,7.5c62.2,37.7,124.3,75.6,186.4,113.5   c3.2,2,5.5,2.1,8.8,0.1c61.8-37.8,123.6-75.4,185.6-113c3.7-2.2,5.2-4.5,5.2-9c-0.2-75.3-0.2-150.7,0-226c0-4.5-1.4-7.1-5.3-9.4   c-61.8-37.4-123.5-75-185.2-112.7c-3.4-2.1-5.8-2.2-9.3-0.1c-61.9,37.9-123.9,75.6-186,113.2c-3.2,2-4.5,3.9-4.5,7.8   C61.9,181.4,61.8,219.4,61.8,257.4z" />
                <path d="M220.2,195.4c14.6,0,28.7,0,42.9,0c2.9,0,3.1,1.7,3.1,3.9c-0.1,4.6,0,9.2,0,14.9c2.7-3.3,4.7-5.8,6.8-8.2   c15.6-17,35.3-19.2,56.1-14.2c20.5,4.9,32.9,19.2,37.9,39.2c2.5,10.1,3.4,20.7,3.6,31.1c0.5,25.8,0.2,51.7,0.2,77.5   c0,2,0,3.9,0,6.2c-15.7,0-30.8,0-46.7,0c0-1.9,0-3.8,0-5.7c0-25.3,0-50.7,0-76c0-2.3,0-4.7-0.1-7c-1-16.8-11.5-26.9-28.4-27.3   c-15.9-0.4-27.6,10.1-29,26.2c-0.5,6.5-0.3,13-0.3,19.5c0,21.3,0,42.7,0,64c0,2,0,3.9,0,6.3c-15.5,0-30.6,0-46,0   C220.2,295.9,220.2,246,220.2,195.4z" />
                <path d="M190.1,346c-15.2,0-30.1,0-45.6,0c-0.1-1.9-0.2-3.7-0.2-5.5c0-46.1,0.1-92.3-0.1-138.4c0-4.5,1.2-6,5.8-5.9   c12.1,0.3,24.3,0.2,36.5,0.1c2.8,0,4.3,0.5,4.2,3.8c-0.1,48-0.1,95.9-0.1,143.9C190.5,344.4,190.3,344.9,190.1,346z" />
                <path d="M166.4,166.5c-13.9,0-23.6-9.7-23.6-23.5c0-13.8,10.1-23.7,24.1-23.7c13.7,0,23.4,9.8,23.6,23.7   C190.7,156.9,180.8,166.5,166.4,166.5z" />
              </g>
            </svg>
          </a>
          <a href="https://g.page/r/CTYVlseM2rC8EAI" target="_blank" rel="noreferrer">
            <svg
              enable-background="new 0 0 512 512"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              className="svgIcon w-12 h-12 hover:scale-90 ease-in-out duration-150"
            >
              <g>
                <path d="M48.8,257.3c0-40.3,0-80.7-0.1-121c0-3.7,0.9-5.9,4.3-8C119.2,88.2,185.3,47.9,251.4,7.5c3.8-2.3,6.6-2.7,10.7-0.2   c66.3,40.6,132.7,81,199.2,121.3c2.9,1.7,3.6,3.6,3.6,6.8c-0.1,81.3-0.1,162.7,0,244c0,3-0.8,4.8-3.5,6.4   c-67.2,40.8-134.3,81.6-201.4,122.6c-2.6,1.6-4.3,1.3-6.7-0.2C186.3,467.4,119.2,426.5,52,385.7c-2.8-1.7-3.2-3.6-3.2-6.5   C48.9,338.6,48.8,297.9,48.8,257.3z M61.8,257.4c0,38,0.1,76-0.1,114c0,3.6,1,5.6,4.1,7.5c62.2,37.7,124.4,75.5,186.4,113.5   c3.5,2.2,5.9,1.9,9.3-0.2c62.1-37.9,124.2-75.8,186.4-113.5c3.3-2,3.9-4.3,3.9-7.7c-0.1-75.3-0.1-150.7,0.1-226   c0-4.9-1.4-7.6-5.6-10.2C384.6,97.5,323.1,60,261.6,22.4c-3.4-2.1-5.8-2.3-9.3-0.1c-61.9,37.9-123.9,75.6-186,113.2   c-3.5,2.1-4.5,4.4-4.5,8.3C61.9,181.7,61.8,219.5,61.8,257.4z" />
                <path d="M335.2,285.1c-24.5,0-48.4,0-72.8,0c0-17.7,0-35,0-52.8c42.3,0,84.7,0,127.3,0c4.1,14.6,4.1,29.5,2.2,44.4   c-5.5,43.5-25.2,78.3-64,100.4c-72.5,41.4-167.9,5.1-195.2-74c-24.6-71.3,10.1-147.1,79.8-174.2c47.2-18.4,104.2-8.2,139,24.6   c-13.2,13-26.4,26-39.8,39.1c-5.4-3-11.6-7.2-18.4-10.1c-52.2-22.9-112,16-112.4,73c-0.4,54.6,49.2,93.4,102.6,80.4   c22.4-5.5,39.4-17.3,48.5-39.1c1-2.4,1.8-5,2.5-7.6C334.9,288,334.9,286.9,335.2,285.1z" />
              </g>
            </svg>
          </a>
          <a href="https://github.com/Zgibbs58" target="_blank" rel="noreferrer">
            <svg
              enableBackground="new 0 0 512 512"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              className="svgIcon w-12 h-12 hover:scale-90 ease-in-out duration-150"
            >
              <g>
                <path d="M48.8,257.1c0-40.3,0.1-80.7-0.1-121c0-3.8,1.2-5.9,4.5-7.9c66-40.1,132-80.2,197.9-120.5c4.3-2.7,7.2-2.6,11.5,0.1   c66,40.4,132.2,80.6,198.3,120.8c3,1.8,3.9,3.8,3.9,7.2c-0.1,81.2-0.1,162.3,0,243.5c0,3.5-1.2,5.3-4.1,7   c-66.9,40.6-133.7,81.3-200.5,122.1c-2.7,1.6-4.5,1.5-7.1-0.1c-66.9-40.8-133.9-81.6-200.9-122.3c-2.9-1.8-3.5-3.8-3.5-6.9   C48.9,338.4,48.8,297.7,48.8,257.1z M451.8,257.3c0-37.5-0.1-75,0.1-112.5c0-4.8-1.4-7.3-5.5-9.8C384.7,97.5,323,60,261.3,22.3   c-3.2-2-5.5-2.1-8.9-0.1C190.4,60.2,128.2,98,66,135.7c-3.4,2-4.3,4.2-4.3,7.9c0.1,75.8,0.1,151.7,0,227.5c0,3.8,1.1,5.9,4.4,7.9   c61.9,37.6,123.8,75.2,185.5,113c4,2.5,6.8,2.1,10.6-0.2c61.5-37.6,123.1-75.1,184.7-112.5c3.6-2.2,5-4.3,5-8.6   C451.8,332.9,451.8,295.1,451.8,257.3z" />
                <path d="M286.7,307.2c8,12.7,9.7,26,9.4,39.9c-0.3,18.2-0.1,36.3-0.1,54.5c0,1.8,0,3.6,0,5.9c-1.8,0.2-3.2,0.4-4.7,0.4   c-23.5,0-47-0.1-70.5,0.1c-3.9,0-5.2-1.1-5.1-5.1c0.2-11.5,0.1-22.9,0.1-34.9c-3.8,0.5-7.1,0.9-10.3,1.3   c-28.6,3.4-48.9-8.3-61.5-34c-4.5-9.2-11-17.4-17-25.8c-1.8-2.6-5.2-4-7.7-6.2c-1.1-1-1.6-2.7-2.3-4.1c1.5-0.6,2.9-1.7,4.4-1.8   c14-0.9,24.1,5.7,32.1,16.6c4.7,6.4,9.3,13.2,15.3,18.1c13,10.7,28.2,11.6,43.9,6.6c1.2-0.4,2.8-2.1,2.9-3.3   c0.9-9.9,2.8-19.4,8.6-26.8c-11.3-3.5-22.7-5.9-33.3-10.5c-30-13-44.8-36.6-45.5-69c-0.4-15.7,0.2-31.3,4.5-46.6   c2.5-8.8,6.4-16.7,13-23.3c1.2-1.2,1.5-4.3,0.9-6c-4.7-13.8-4.1-27.5-0.3-41.3c1.3-4.8,3.6-5.4,7.9-4c12.3,4,21.1,12.3,29,22   c1.6,1.9,3,3.9,4.8,6.2c15.7-9.1,33-9.3,50.4-9.3c17.2,0,34.4,0,50,9.1c4.6-5.2,9-10.5,13.9-15.5c5.8-5.9,12.7-10.1,20.7-12.7   c4-1.3,6.3-0.9,7.8,3.7c4.4,13.8,5.2,27.5-0.3,41.1c-1.3,3.3-0.8,5.2,1.7,7.8c7.4,7.6,11.9,17,13.5,27.4c3,19.5,4.9,39,1,58.6   c-4.2,21.1-16.2,36.6-34.5,47.3C316.7,301.4,302.6,305.8,286.7,307.2z" />
              </g>
            </svg>
          </a>
          <Link href="/contact">
            <svg
              enableBackground="new 0 0 512 512"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="svgIcon w-12 h-12 hover:scale-90 ease-in-out duration-150"
            >
              <g>
                <path d="M48.8,257.1c0-40.3,0.1-80.7-0.1-121c0-3.8,1.2-5.9,4.4-7.9c66-40.1,132-80.2,197.9-120.5c4.3-2.6,7.2-2.6,11.5,0   c66,40.4,132.2,80.6,198.3,120.8c3,1.8,3.9,3.8,3.9,7.1c-0.1,81.2-0.1,162.3,0,243.5c0,3.5-1.2,5.3-4.1,7   c-66.9,40.6-133.7,81.3-200.5,122.1c-2.7,1.6-4.5,1.6-7.1-0.1c-66.9-40.8-133.9-81.6-200.9-122.3c-2.9-1.8-3.5-3.8-3.5-6.8   C48.9,338.4,48.8,297.7,48.8,257.1z M61.8,257.3c0,37.8,0.1,75.7-0.1,113.5c0,3.9,1,6.2,4.5,8.3c62.1,37.6,124.1,75.4,186,113.2   c3.5,2.1,5.8,2,9.3-0.1c62.1-37.9,124.2-75.8,186.4-113.5c2.9-1.8,4-3.7,4-7.1c-0.1-76.2-0.1-152.3,0-228.5c0-3.7-1.2-5.6-4.3-7.4   C385.3,97.9,323,60,260.8,22c-3-1.8-5.1-1.7-8,0.1C190.5,60,128.3,98,65.9,135.8c-3.1,1.9-4.2,3.9-4.2,7.5   C61.9,181.3,61.8,219.3,61.8,257.3z" />
                <path d="M126.3,354.5c0-65.2,0-130,0-195c87.1,0,174,0,261.2,0c0,65,0,129.9,0,195C300.4,354.5,213.6,354.5,126.3,354.5z    M237,261.4c-0.6,0.2-0.8,0.2-0.9,0.3c-22.6,18.1-45.2,36.2-67.8,54.4c-0.7,0.6-1.5,1.5-1.5,2.3c-0.1,11.3-0.1,22.5-0.1,34   c61.4,0,122.1,0,183.3,0c0-8.6-0.6-17,0.2-25.2c0.9-9.2-2.3-14.6-10.1-19.8c-20.6-13.6-40.4-28.1-60.5-42.5c-3-2.2-4.7-1.8-7.1,0.6   c-3.8,3.7-8.1,7-11.9,10.6c-2.3,2.2-3.9,2.1-6.3,0C248.6,271,242.7,266.2,237,261.4z M179.3,161.3c25.8,26.1,51.4,52.1,77.9,78.9   c26.9-26.1,53.6-52,80.3-77.9c-0.3-0.4-0.5-0.7-0.8-1.1C284.2,161.3,231.8,161.3,179.3,161.3z M280.1,258.9   c23.4,16.4,46.2,32.3,69.5,48.6c0-36.6,0-72.3,0-108.8C326.2,218.9,303.4,238.6,280.1,258.9z M232.5,257.5   c-22-18.7-43.4-36.9-65.4-55.6c0,36.3,0,71.5,0,107.8C189.2,292,210.6,274.9,232.5,257.5z" />
              </g>
            </svg>
          </Link>
        </div>
      </div>
      <p className="text-xs pt-3 text-center">&copy; Zach Gibbs Web Development 2023-{new Date().getFullYear()}. All Rights Reserved.</p>
      <p className="text-xs text-center">
        Click here to view our{" "}
        <Link className="underline" href="/legal">
          Terms and Conditions as well as our Privacy Policy.
        </Link>
      </p>
    </footer>
  );
}
