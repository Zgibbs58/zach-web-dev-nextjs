import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { Titillium_Web } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const titilliumWeb = Titillium_Web({ subsets: ["latin"], preload: true, weight: ["200", "300", "400", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "Zach Gibbs Web Development | Professional Websites",
  description:
    "Professional web development services in Murfreesboro, Tennessee. Most businesses lack the time to update or create websites. I build clear and optimized websites that make it easy for customers to hire you, saving you time and boosting your business.",
  keywords: "web development, Tennessee, custom websites, business websites, SEO, Zach Gibbs",
  // openGraph: {
  //   title: "Zach Gibbs Web Development | Murfreesboro, TN",
  //   description:
  //     "Professional web development services in Murfreesboro, TN. Get high-quality, efficient websites tailored to your business needs. Contact us today!",
  //   url: "https://www.zacharywgibbs.com",
  //   type: "website",
  //   images: [
  //     {
  //       url: "https://www.zacharywgibbs.com/path-to-image.jpg",
  //       width: 1200,
  //       height: 630,
  //       alt: "Zach Gibbs Web Development",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link rel="preconnect" href="https://www.gstatic.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* Optional: DNS Prefetch to further improve performance */}
        <link rel="dns-prefetch" href="https://www.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Optional: DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Head>
      <body className={titilliumWeb.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
