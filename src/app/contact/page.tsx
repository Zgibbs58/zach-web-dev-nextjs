import AnimatedHeader from "../components/AnimatedHeader";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ui/ContactForm";

export default function contact() {
  return (
    <div className="mx-8 lg:mx-32 mt-6 mb-24">
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
              <span className="font-bold text-emerald-500">Free Quote</span>: We will contact you to gather all the necessary details about your
              project and provide you with a free, no-obligation quote.
            </li>
            <li>
              <span className="font-bold text-emerald-500">Approval</span>: Your approval of the quote will kick off the scheduling and preparation
              for your project.
            </li>
            <li>
              <span className="font-bold text-emerald-500">Schedule</span>: We will work with you to schedule a convenient time for our team to begin
              the work.
            </li>
            <li>
              <span className="font-bold text-emerald-500">Completion</span>: Our experienced team will complete your project with excellence.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
