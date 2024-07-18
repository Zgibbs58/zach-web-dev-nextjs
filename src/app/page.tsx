import Image from "next/image";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";
import ProblemSection from "./components/ProblemSection";
import WhySection from "./components/WhySection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="overflow-x-hidden overflow-y-hidden">
        <ProblemSection />
        <ValueSection />
        <WhySection />
      </section>
    </main>
  );
}
