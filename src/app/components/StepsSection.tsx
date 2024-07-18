import Button from "./ui/Button";
import StepCard from "./StepCard";

const StepsSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center gap-24 px-8 lg:px-32 mt-32 py-20 lg:max-h-screen overflow-hidden">
      {/* <div className="absolute inset-0 bg-cover bg-right-left" style={{ backgroundImage: "url('/images/stepsSection.jpg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-20"></div> */}
      <h2 className="relative text-3xl lg:text-5xl font-bold">How It Works</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-[#6b7280]">
        <StepCard delayVal={0} stepNum={1} title="Get a Free Quote" text="Fill out a simple online form to receive a free quote for your project." />
        <StepCard
          delayVal={0.05}
          stepNum={2}
          title="Consultation"
          text="Once you approve the quote, we schedule a consultation to discuss your vision, product/service, and website requirements."
        />
        <StepCard
          delayVal={0.1}
          stepNum={3}
          title="Development and Review"
          text="I develop your website, and you review the final product before it goes live."
        />
        <StepCard delayVal={0.15} stepNum={4} title="Ongoing Support" text="Receive continuous support and maintenance for your site." />
      </div>
      <div className="relative">
        <Button variant="primary" link="contact">
          Start Today
        </Button>
      </div>
    </div>
  );
};

export default StepsSection;
