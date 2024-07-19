import Button from "./ui/Button";
import Image from "next/image";
import AnimatedHeader from "./AnimatedHeader";

const Explanatory = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-16 my-48 lg:my-64 px-8 lg:px-32">
      <div className="relative flex flex-col justify-center text-left gap-6 items-start xl:w-1/2">
        <AnimatedHeader text="Get a Website That Works for You" xVal={-50} />
        <p className="lg:text-lg">
          At Zach Gibbs Web Development, I understand that you want a professional website that makes it easy for your customers to buy your products
          or services. However, creating a great website takes time and can be overwhelming. Every business should have the opportunity to reach their
          customers and clearly communicate their value. That&apos;s why I&apos;ve honed my skills in web design, development, and marketing to build
          websites that effectively grow your business.
        </p>
        <h4 className="text-2xl lg:text-3xl font-bold">Here’s how you do it:</h4>
        <ol className="ml-5 list-decimal lg:text-lg">
          <li>Click the free quote button and fill out the form.</li>
          <li>I will send you the quote for you to approve and schedule a consultation.</li>
          <li>We will discuss your business and your website requirements. Then, I&apos;ll start working on your website immediately.</li>
        </ol>
        <p className="lg:text-lg">So, get a free quote today and let’s create a website that works for you.</p>
        <Button variant="primary" link="contact">
          Get Your Free Quote
        </Button>
      </div>
      <Image className="xl:w-1/2 object-cover" width={1000} height={1000} src="/images/happyCustomer.jpg" alt="Happy customer enjoying website" />
      {/* <img className="xl:w-1/2 object-cover" src="/images/happyCustomer.jpg" alt="Happy customer enjoying website" /> */}
    </section>
  );
};

export default Explanatory;
