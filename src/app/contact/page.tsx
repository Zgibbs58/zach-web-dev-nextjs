import AnimatedHeader from "../components/AnimatedHeader";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ui/ContactForm";

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
        <div className="flex flex-col gap-6 xl:w-1/3">
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
        </div>
      </div>
    </div>
  );
}
