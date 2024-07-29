import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import { Titillium_Web } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const titilliumWeb = Titillium_Web({ subsets: ["latin"], preload: true, weight: ["200", "300", "400", "600", "700", "900"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://zacharywgibbs.com"),
  metadataBase: new URL("https://zach-web-dev-nextjs.vercel.app/"),
  title: {
    template: "%s | Zach Gibbs Web Development",
    default: "Zach Gibbs Web Development",
  },
  description:
    "Professional web development services in Murfreesboro, Tennessee. Most businesses lack the time to update or create websites. I build clear and optimized websites that make it easy for customers to hire you, saving you time and boosting your business.",
  keywords: ["web development", "Tennessee", "custom websites", "business websites", "SEO", "Zach Gibbs", "web design", "photography"],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    title: "Zach Gibbs Web Development | Professional Websites",
    description:
      "Professional web development services in Murfreesboro, Tennessee. Get high-quality, efficient websites tailored to your business needs. Contact us today!",
    url: "/",
    type: "website",
    images: [
      {
        url: "images/ogHome.png",
        width: 1200,
        height: 630,
        alt: "Zach Gibbs Web Development",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head> */}
      {/* <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" /> */}
      {/* <link rel="preconnect" href="https://www.gstatic.com" /> */}
      {/* <link rel="preconnect" href="https://www.google.com" /> */}
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}

      {/* Optional: DNS Prefetch to further improve performance */}
      {/* <link rel="dns-prefetch" href="https://www.gstatic.com" /> */}
      {/* <link rel="dns-prefetch" href="https://www.google.com" /> */}

      {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
      {/* Optional: DNS Prefetch */}
      {/* <link rel="dns-prefetch" href="https://fonts.googleapis.com" /> */}
      {/* </Head> */}
      <body className={titilliumWeb.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
