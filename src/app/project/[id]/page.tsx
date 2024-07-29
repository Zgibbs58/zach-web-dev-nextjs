"use client";

import { useRouter } from "next/router";
import { projectData } from "../../lib/projectData";
import { useEffect } from "react";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";
import ExternalLinkButton from "../../components/ui/ExternalLinkButton";
import Image from "next/image";

export default function IndividualProject({ params }: { params: { id: string } }) {
  //   // console.log(projectData);
  //   const router = useRouter();
  //   const { id } = router.query;

  //   useEffect(() => {
  //     // Scroll to the top of the page when the component mounts
  //     window.scrollTo(0, 0);
  //   }, []);

  //   const projectIdNum = parseInt(id as string, 10);
  const project = projectData.find((p) => p.id === parseInt(params.id));
  //   // console.log(project);
  return project ? (
    <>
      {/* <MetaSeoTags
          title={`${project.name} | Custom Website by Zach Gibbs`}
          description={`Explore the custom website development project for ${project.name} by Zach Gibbs. High-quality web design tailored to business needs.`}
          keywords={[project.name, "custom website", "web development", "web design", "web developer", "Murfreesboro", "Tennessee"]}
          canonicalUrl={`https://zacharywgibbs.com/portfolio/${project.id}`}
        /> */}
      <div className="mx-8 mt-6 mb-24 lg:mx-32 overflow-x-hidden text-left flex flex-col items-start gap-y-8">
        {/* <div className="mt-4 mb-4">
          <Link className="border-2 border-gray-500 font-semibold px-2 py-1 rounded-md" to="/portfolio">
            Back to Portfolio
          </Link>
        </div> */}
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-3xl lg:text-5xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 w-10/12"
        >
          {project.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-left text-2xl font-semi-bold underline underline-gray-500"
        >
          Case Study
        </motion.p>
        <div className="flex flex-col gap-y-4">
          {project.fullDescription.map((paragraph) => (
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="text-left"
              key={paragraph + 1}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-left text-2xl font-semi-bold underline underline-gray-500"
        >
          Technologies Used
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex flex-wrap"
        >
          {project.technologies.map((tech) => (
            <span className="bg-gray-300 rounded-lg px-3 py-1 text-md font-semibold text-gray-700 mr-2 mt-2" key={String([tech]) + 1}>
              {tech}
            </span>
          ))}
        </motion.div>
        {/* <img className="mt-8 rounded-lg shadow-lg" src={project.image} alt={project.name} /> */}
        {/* <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="my-10 mr-1 xs:mr-3"
        >
          <MainBtn text="View Site" link={project.projectLink} />
        </motion.button> */}
        {project.collage && <Image className="rounded-lg" src={project.collage ?? ""} alt={project.name} width={1000} height={1000} unoptimized />}
        <div className="flex flex-row gap-4">
          <ExternalLinkButton variant="primary" link={project.projectLink}>
            View Site
          </ExternalLinkButton>
          {project.repoLink === "private" ? null : (
            <ExternalLinkButton variant="outline" link={project.repoLink}>
              View Repo
            </ExternalLinkButton>
          )}
        </div>
      </div>
    </>
  ) : (
    <div className="text-center mt-20 mb-20">
      <h2 className="text-4xl font-bold">Project Not Found</h2>
      <p className="mt-4">Please return to the portfolio page to view available projects.</p>
      <div className="mt-4">
        <Button variant="primary" link="portfolio">
          Portfolio
        </Button>
      </div>
    </div>
  );
}
// return <div>{project && project.name}</div>;
// }
