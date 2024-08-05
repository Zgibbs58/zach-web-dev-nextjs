import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/legal"],
      },
    ],
    sitemap: "https://zacharywgibbs.com/sitemap.xml",
  };
}
