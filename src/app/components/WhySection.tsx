import Image from "next/image";
import Button from "./ui/Button";
import AnimatedHeader from "./AnimatedHeader";

export default function WhySection() {
  return (
    <div className="flex flex-col justify-center text-left gap-16 my-48 lg:my-64 px-8 lg:px-32">
      <AnimatedHeader text="Why Choose Zach Gibbs Web Development?" xVal={-50} tailwindClasses="text-3xl lg:text-5xl font-bold" />
      <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
        <Image className="w-full xl:w-1/3" width={1000} height={1000} alt="Zach Gibbs Headshot" src={"/images/zach-headshot-compressed.jpg"}></Image>
        {/* <img className="w-full xl:w-1/3 rounded-xl" src="/images/zach-headshot-compressed.jpg" alt="Zach Gibbs" /> */}
        <div className="flex flex-col w-full xl:w-2/3 text-left gap-6 items-start">
          <p className="text-2xl lg:text-3xl font-bold">Websites that Streamline Your Business</p>
          <p className="">
            Creating a website can be complicated and time-consuming. My job is to handle all the details so you can focus on your business. I&apos;ve
            helped businesses improve their online presence with websites that look great and are easy for customers to use. Click the button below to
            start getting more leads and valuable customers.
          </p>
          <ul className="flex flex-col text-lg gap-2">
            <li>
              <span className="font-semibold underline underline-offset-2">Personalized Service</span>: Tailored solutions for your unique business
              needs.
            </li>
            <li>
              <span className="font-semibold underline underline-offset-2">Hassle-Free Process</span>: Streamlined approach to save you time and
              stress.
            </li>
            <li>
              <span className="font-semibold underline underline-offset-2">Client Success</span>: A portfolio of satisfied clients who have seen real
              results.
            </li>
          </ul>
          <Button variant="primary" link="contact">
            Get Your Website
          </Button>
        </div>
      </div>
    </div>
  );
}
