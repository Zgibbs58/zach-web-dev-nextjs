import { MetadataRoute } from "next";
import { projectData, ProjectType } from "./lib/projectData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = `https://zacharywgibbs.com`;
  const project = projectData;

  const projectUrls = project.map((project: ProjectType) => ({
    url: `${baseUrl}/project/${project.id}`,
  }));

  return [
    {
      url: `${baseUrl}/`,
    },
    {
      url: `${baseUrl}/portfolio`,
    },
    {
      url: `${baseUrl}/contact`,
    },
    {
      url: `${baseUrl}/about`,
    },
    ...projectUrls,
  ];
}
