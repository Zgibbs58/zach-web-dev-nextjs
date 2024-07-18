import QuoteSvg from "../assets/QuoteSvg";

const Testimonial = ({ testimonial }: { testimonial: Testimonial }) => (
  <>
    <div className="flex flex-col gap-10 xl:w-1/2 w-full text-lg text-center items-center">
      <QuoteSvg />
      <p className="leading-relaxed inline-block">
        {testimonial.quote}
        {/* <svg className="inline-block align-top ml-1" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16" fill="#10b981"><path d="M14.4184 12.699L12.1173 15.0002L9.99599 12.8788L12.2629 10.6119C12.6579 10.2169 13 9.5652 13 8.99613V7.99611L9 7.99609L9 0.996095L16 0.996095V8.99613C16 10.4766 15.3944 11.7231 14.4184 12.699Z"/><path d="M5.41845 12.699L3.11731 15.0002L0.99599 12.8788L3.26295 10.6119C3.65789 10.2169 4 9.5652 4 8.99612V7.99611L0 7.99609L6.11959e-07 0.996094L7 0.996094L7 8.99613C7 10.4766 6.39441 11.7231 5.41845 12.699Z"/></svg> */}
      </p>
      <div className="flex flex-col ml-4 justify-between">
        <p className="font-semibold">{testimonial.name}</p>
        <p className="">{testimonial.title}</p>
      </div>
    </div>
  </>
);

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const TestimonialSection = ({ testimonials }: TestimonialsProps) => (
  <section className="my-48 lg:my-64 px-8 lg:px-32">
    <p className="text-3xl lg:text-5xl font-bold mb-12 md:mb-24 text-center">Success In Their Words</p>
    <div className="flex flex-wrap justify-center xl:flex-nowrap gap-y-16 gap-x-12 3xl:gap-x-20">
      {testimonials.map((testimonial: Testimonial, index: number) => (
        <Testimonial key={index} testimonial={testimonial} />
      ))}
    </div>
  </section>
);

export default TestimonialSection;
