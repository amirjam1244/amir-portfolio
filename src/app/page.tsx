import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">
      <div className="ambient-glow" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Services />
        <Contact />
      </div>
    </main>
  );
}
