import Image from "next/image";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <section className="overflow-x-hidden overflow-y-hidden">
        <ValueSection />
      </section>
    </main>
  );
}
