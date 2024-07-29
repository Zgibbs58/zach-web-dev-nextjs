import Project from "../components/Project";
import { projectData } from "../lib/projectData";
import AnimatedHeader from "../components/AnimatedHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore the web development portfolio of Zach Gibbs. View examples of custom websites designed for businesses in Tennessee.",
  openGraph: {
    title: "Zach Gibbs Web Development | Professional Websites",
    description: "Explore the web development portfolio of Zach Gibbs. View examples of custom websites designed for businesses in Tennessee.",
    url: "https://www.zacharywgibbs.com/portfolio",
    type: "website",
    images: [
      {
        url: "https://www.zacharywgibbs.com/images/ogPortfolio.png",
        width: 1200,
        height: 630,
        alt: "Zach Gibbs Web Development",
      },
    ],
  },
};

const isOdd = (num: number) => num % 2;

export default function Portfolio() {
  return (
    <>
      {/* <MetaSeoTags
        title={"Web Development Portfolio | Zach Gibbs | Murfreesboro, TN"}
        description={"Explore the web development portfolio of Zach Gibbs. View examples of custom websites designed for businesses in Tennessee."}
        keywords={["web development portfolio", "custom websites", "web design", "web developer", "Murfreesboro", "Tennessee"]}
        canonicalUrl={"https://zacharywgibbs.com/portfolio"}
        ogTitle={"Web Development Portfolio | Zach Gibbs | Murfreesboro, TN"}
        ogDescription={"Explore the web development portfolio of Zach Gibbs. View examples of custom websites designed for businesses in Tennessee"}
        ogImg={"https://zacharywgibbs.com/images/ogPortfolioImg.png"}
        slug={"/portfolio"}
      /> */}
      <section className="overflow-x-hidden">
        <div className="mx-8 lg:mx-32 mt-6 mb-24">
          <AnimatedHeader
            text="Portfolio"
            xVal={-50}
            tailwindClasses="text-4xl lg:text-5xl text-left underline underline-offset-[12px] decoration-[2px] decoration-emerald-500 mb-24"
          />
          {/* <span className={"block w-full transition-all duration-500 h-1 bg-emerald-400"}></span> */}
          {projectData.map((project) => (
            <Project
              id={project.id}
              name={project.name}
              description={project.description}
              fullDescription={project.fullDescription}
              image={project.image}
              projectLink={project.projectLink}
              isOdd={isOdd(project.id)}
              key={project.id}
            />
          ))}
        </div>
      </section>
    </>
  );
}
