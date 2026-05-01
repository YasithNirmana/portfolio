import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="space-y-24 py-16 sm:space-y-32 sm:py-24">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
