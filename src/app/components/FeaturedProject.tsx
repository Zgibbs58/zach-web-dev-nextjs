import Button from "./ui/Button";
import Image from "next/image";
import AnimatedHeader from "./AnimatedHeader";

export default function FeaturedProject({ name, description, image }: { name: string; description: string; image: string }) {
  return (
    <section className="grid xl:grid-cols-3 xl:justify-items-end justify-items-center items-start mb-36 xl:mb-64 my-48 lg:my-64 px-8 lg:px-32">
      <div className="xl:col-span-2 text-left">
        <AnimatedHeader text="Recent Project" xVal={-50} tailwindClasses="text-3xl lg:text-5xl font-bold" />
        <h4 className="text-2xl xl:text-4xl font-bold my-8">{name}</h4>
        <p className="mb-8">{description}</p>
        <div className="hidden xl:block">
          <Button variant="outline" link="portfolio">
            View Portfolio
          </Button>
        </div>
      </div>
      <figure className="xl:grid-span-1 my-10 xl:my-0 rounded-3xl grid justify-items-center">
        <div className="phone-frame">
          <div className="phone-frame-inner">
            <Image src={image} alt={name} width={1000} height={1000} unoptimized />
            {/* <img src={image} alt={name} /> */}
          </div>
          <div className="volume-button-top"></div>
          <div className="volume-button-middle"></div>
          <div className="volume-button-bottom"></div>
          <div className="power-button"></div>
        </div>
      </figure>
      <div className="flex flex-col justify-start xl:hidden text-center mt-8">
        <Button variant="outline" link="portfolio">
          View Portfolio
        </Button>
      </div>
    </section>
  );
}
