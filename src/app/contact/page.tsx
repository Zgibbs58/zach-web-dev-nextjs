import AnimatedHeader from "../components/AnimatedHeader";
import AnimatedSection from "../components/AnimatedSection";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ui/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Zach Gibbs for your web development needs. I build clear and optimized websites that make it easy for customers to hire you, saving you time and boosting your business.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Zach Gibbs Web Development | Custom Websites",
    description:
      "Get in touch with Zach Gibbs for your web development needs. I build clear and optimized websites that make it easy for customers to hire you, saving you time and boosting your business.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/images/ogContact.png",
        width: 1200,
        height: 630,
        alt: "Zach Gibbs Web Development",
      },
    ],
  },
};

export default function contact() {
  return (
    <div className="mx-8 lg:mx-32 mt-6 mb-24 lg:mb-48">
      <AnimatedHeader
        text="Contact"
        xVal={-50}
        tailwindClasses="text-4xl lg:text-5xl text-left underline underline-offset-[12px] decoration-[2px] decoration-emerald-500 mb-24"
      />
      <div className="flex flex-row flex-wrap xl:flex-nowrap gap-24">
        <div className="w-full xl:w-2/3">
          <ContactForm />
        </div>
        <AnimatedSection tailwindClasses="flex flex-col gap-6 xl:w-1/3">
          <h4 className="text-3xl font-semibold">Contact Information</h4>
          <ContactInfo />
          <h3 className="text-3xl font-semibold">What&apos;s next?</h3>
          <ol className="">
            <li>
              <span className="font-bold text-emerald-500">Free Quote</span>: Fill out a simple online form to receive a free quote for your project.
            </li>
            <li>
              <span className="font-bold text-emerald-500">Consultation</span>: Once you approve the quote, we schedule a consultation to discuss your
              vision, product/service, and website requirements.
            </li>
            <li>
              <span className="font-bold text-emerald-500">Development</span>: I develop your website, and you review the final product before it goes
              live.
            </li>
            <li>
              <span className="font-bold text-emerald-500">Ongoing Support</span>: Receive continuous support and maintenance for your site.
            </li>
          </ol>
        </AnimatedSection>
      </div>
    </div>
  );
}
