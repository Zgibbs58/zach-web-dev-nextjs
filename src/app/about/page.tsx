import AnimatedHeader from "../components/AnimatedHeader";
import Explanatory from "../components/ExplanatorySection";
import TestimonialSection from "../components/TestimonialSection";
import AnimatedSection from "../components/AnimatedSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Zach Gibbs Web Development | Custom Websites",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/images/ogAbout.png",
        width: 1200,
        height: 630,
        alt: "Zach Gibbs Web Development",
      },
    ],
  },
};

export default function about() {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="mx-10 mb-24 mt-6 lg:mx-32">
          <AnimatedHeader
            text="About"
            xVal={-50}
            tailwindClasses="text-4xl lg:text-5xl text-left underline underline-offset-[12px] decoration-[2px] decoration-emerald-500 mb-24"
          />
          <AnimatedSection tailwindClasses="flex flex-col xl:flex-row gap-24 items-center mb-48 lg:mb-64 mt-24">
            <div className="flex w-full flex-col gap-6 xl:w-1/2 2xl:w-2/3">
              <h2 className="text-2xl font-bold lg:text-4xl">
                Your Web Development Partner
              </h2>
              <p>
                Hello! I&apos;m Zach Gibbs, a dedicated Web Developer
                specializing in building websites that look great and
                effectively market your business. I have a Bachelor&apos;s
                degree from Tennessee Tech University where I studied Psychology
                and Literature. With these studies and a solid foundation in
                Full Stack Web Development from Vanderbilt University, I bring a
                unique understanding of user behavior and content writing to my
                web development projects.
                <br></br>
                <br></br>I continuously study the StoryBrand Framework to
                enhance my marketing strategies, ensuring that your website
                clearly communicates your value and converts visitors into
                customers. I have hands-on experience developing websites for
                local businesses, participating in hackathons, and advancing my
                skills through platforms like Udemy and LinkedIn Learning. My
                goal is to provide high-quality, efficient websites tailored to
                your business needs.
              </p>
            </div>
            {/* <figure className="w-full xl:w-1/2 2xl:w-1/3 rounded-xl"> */}
            {/* <img className="object-cover" src="/images/zach-headshot-compressed.jpg" alt="collage-rock-climbing-hiking-Central-Park" /> */}
            <Image
              className="w-full rounded-xl object-cover xl:w-1/2 2xl:w-1/3"
              src="/images/zach-headshot-compressed.jpg"
              alt="Zach Gibbs Headshot"
              width={1000}
              height={1000}
              priority
            />
            {/* </figure> */}
          </AnimatedSection>
        </div>
        <TestimonialSection
          testimonials={[
            {
              name: "Kameron Shepherd",
              title: "KandS HVAC",
              quote:
                "Zach is extremely knowledgeable and very dedicated to his work. We gave him some freedom to express his design ideas, and he absolutely knocked it out of the park. Throughout this entire process, Zach has been very responsive, thorough, and explained everything very well. I highly recommend working with Zach; he is truly the best of the best in his field.",
            },
            {
              name: "Martin Mofield",
              title: "Mofield Brothers Construction",
              quote:
                "Zach built a website that saves us time and money by answering client questions about what we do and providing a convenient way for customers to contact us.",
            },
            {
              name: "Evan Dixon",
              quote:
                "Zach was excellent to work with. He was prompt to fix issues with my site and went above and beyond, giving me even more value than I asked for. I would definitely recommend his services.",
              title: "Comic Book Creator",
            },
          ]}
        />
        <div className="my-48 lg:my-64">
          <Explanatory />
        </div>
      </div>
    </>
  );
}
