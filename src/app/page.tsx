import Image from "next/image";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";
import ProblemSection from "./components/ProblemSection";
import WhySection from "./components/WhySection";
import TestimonailSection from "./components/TestimonialSection";
import CtaSection from "./components/CtaSection";
import StepsSection from "./components/StepsSection";
import ExplanatorySection from "./components/ExplanatorySection";
import FeaturedProject from "./components/FeaturedProject";
import { projectData } from "./lib/projectData";
import LeadGenerator from "./components/LeadGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Professional Websites",
  // description:
  //   "Professional web development services in Murfreesboro, Tennessee. Most businesses lack the time to update or create websites. I build clear and optimized websites that make it easy for customers to hire you, saving you time and boosting your business.",
  // keywords: "web development, Tennessee, custom websites, business websites, SEO, Zach Gibbs",
  // openGraph: {
  //   title: "Zach Gibbs Web Development | Professional Websites",
  //   description:
  //     "Professional web development services in Murfreesboro, Tennessee. Get high-quality, efficient websites tailored to your business needs. Contact us today!",
  //   url: "https://www.zacharywgibbs.com",
  //   type: "website",
  //   images: [
  //     {
  //       url: "/images/ogHomeImg.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Zach Gibbs Web Development",
  //     },
  //   ],
  // },
};

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="overflow-x-hidden overflow-y-hidden">
        <ProblemSection />
        <ValueSection />
        <WhySection />
        <TestimonailSection
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
            // {
            //   name: "Colt Russel",
            //   quote:
            //     "I had an excellent experience working with Zach on my website. His photography work added a lot of value to the site, and the entire process was easy and required little effort on my part. Zach goes above and beyond, providing more value than expected. I highly recommend Zach Gibbs Web Development.",
            //   title: "Solid Rock Concrete",
            // },
          ]}
        />
        <CtaSection />
        <StepsSection />
        <ExplanatorySection />
        <FeaturedProject name={projectData[0].name} description={projectData[0].description} image={projectData[0].image} key={1} />
        <LeadGenerator />
      </section>
    </main>
  );
}
