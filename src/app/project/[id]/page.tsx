import { projectData } from "../../lib/projectData";
import Button from "../../components/ui/Button";
import ExternalLinkButton from "../../components/ui/ExternalLinkButton";
import Image from "next/image";
import AnimatedHeader from "@/app/components/AnimatedHeader";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const project = projectData.find((p) => p.id === parseInt(id));

  return {
    title: `${project?.name} | Zach Gibbs Web Development`,
    description: project?.description,
    alternates: {
      canonical: `/project/${id}`,
    },
    openGraph: {
      title: `${project?.name} | Zach Gibbs Web Development`,
      description: project?.description,
      url: `/project/${id}`,
      type: "website",
      images: [
        {
          url: project?.collage ?? "/images/ogHome.png",
          width: 600,
          height: 600,
          alt: project?.name,
        },
      ],
    },
  };
}

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
      <div className="mx-8 mt-6 mb-24 lg:mx-32 text-left flex flex-col items-start gap-y-8">
        <AnimatedHeader
          text="Project Overview"
          xVal={-50}
          tailwindClasses="text-3xl lg:text-5xl font-bold text-left underline underline-offset-[10px] decoration-[2px] decoration-emerald-500 w-10/12"
        />
        <p className="text-left text-2xl font-semi-bold underline underline-gray-500">Case Study</p>
        <div className="flex flex-col gap-y-4">
          {project.fullDescription.map((paragraph) => (
            <p className="text-left" key={paragraph + 1}>
              {paragraph}
            </p>
          ))}
        </div>
        <p className="text-left text-2xl font-semi-bold underline underline-gray-500">Technologies Used</p>
        <div className="flex flex-wrap">
          {project.technologies.map((tech) => (
            <span className="bg-gray-300 rounded-lg px-3 py-1 text-md font-semibold text-gray-700 mr-2 mt-2" key={String([tech]) + 1}>
              {tech}
            </span>
          ))}
        </div>
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
    <div className="flex flex-col items-center text-center mt-20 mb-20">
      <h2 className="text-4xl font-bold">Project Not Found</h2>
      <p className="mt-4">Please return to the portfolio page to view available projects.</p>
      <div className="mt-4">
        <Button variant="primary" link="portfolio">
          Back To Portfolio
        </Button>
      </div>
    </div>
  );
}
// return <div>{project && project.name}</div>;
// }
